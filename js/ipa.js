const ipa_dict = {
	"a": "a",
	"e": "ɛ",
	"i": "ɪ",
	"o": "o",
	"u": "ʊ",
	"y": "ʏ",

	"á": "auː",
	"í": "iː",
	"ó": "ouː",
	"ú": "uː",
	"ý": "yː",

	"íu": "iːjʊ",

	"æ": "aiː",
	"ø": "œː",
	"œ": "ɤiː",

	"ei": "eiː",
	"ey": "eyː",

	"einn": "einnː",
	"ein-": "ein",
	"eirr": "eirː",
	"eyrr": "eyrː",

	"b": "b",
	"bb": "b",
	"d": "d",
	"dd": "d",
	"f": "f",
	"ff": "hf",
	"g-": "g",
	"g": "ɣ",
	"gg": "g",
	"ggj": "cː",
	"gj": "c",
	"gl": "kl",
	"gn": "kn",
	"gs": "ks",
	"gn-": "gn",
	"-gl": "kl̥",
	"-gn": "kn̥",
	"h": "h",
	"j": "j",
	"hj": "ȷ̊",
	"k": "k",
	"kk": "hk",
	"kv": "kʋ",
	"l": "l",
	"hl": "l̥",
	"lg": "lg",
	"ll": "tl",
	"-lg": "lk",
	"-ll": "tl̥",
	"m": "m",
	"mm": "mː",
	"mk": "m̥k",
	"mp": "m̥p",
	"mt": "m̥t",
	"n": "n",
	"nn": "nː",
	"nk": "n̥k",
	"np": "n̥p",
	"nt": "n̥t",
	"hn": "n̥",
	"hv": "kʋ",
	"p": "p",
	"pp": "hp",
	"pl": "pl",
	"pn": "pn",
	"-pl": "pl̥",
	"-pn": "pn̥",
	"r": "r",
	"rr": "rː",
	"hr": "r̥",
	"rk": "r̥k",
	"rp": "r̥p",
	"rt": "r̥t",
	"s": "s",
	"ss": "ʃː",
	"t": "t",
	"tt": "ht",
	"v": "ʋ",
	"v-": "v",
	"x": "ks",
	"z": "t͡s",
	"þ": "θ",
	"ð": "ð",

	"ðg": "ðg",

	"ang": "aŋk",
	"eng": "eiŋk",
	"ing": "iŋk",
	"ung": "uŋk",
	"yng": "yŋk",
	"øng": "œŋk",

	"angr": "aŋgr̩",
	"engr": "eiŋgr̩",
	"ingr": "iŋgr̩",
	"ungr": "uŋgr̩",
	"yngr": "yŋgr̩",
	"øngr": "œŋgr̩",

	"engj": "eiŋc",
	"ingj": "iŋc",
	"yngj": "yŋc",

	"þr-": "θr",
	"ðsl": "ðsl",

	"-r": "r",
	"r_ending": "r̩",
};

const ipa_dict_regional = {
	"o": "ɔ",
	"á": "ɑuː",
	"œ": "ɑiː",

	"ey": "ʌɪː",
	"eyrr": "ʌɪrː",

	"kv": "kf",
	"ll": "lː",
	"-ll": "lː",
	"hv": "kf",

	"þr-": "ðr",
	"ðsl": "θsl",
};

const special_ipa_constructions = {
	einn: "einnː",
	einhverr: "ˈeinkʋɛrː",
	"einhverjir þeir": "ˈeinkʋɛrjɪr θeiːr",
	halló: "ˈhalouː",
	œi: ["ˈɤiːjɪ", "ˈɑiːjɪ"]
};

function check_vowels(section) {
	var vowels = "aáeiíoóuúyýæøœ";

	if (section.length == 1) {
		return vowels.includes(section.charAt(0));
	} else {
		return vowels.includes(section.charAt(0)) || vowels.includes(section.charAt(1));
	}
}

function get_section_ipa(section, regional) {
	if (regional && section in ipa_dict_regional) {
		return ipa_dict_regional[section];
	} else {
		return ipa_dict[section];
	}
}

function construct_ipa(word, regional) {
	var word2 = word.toLowerCase();
	var pronunciation = "";
	var counted_vowels = 0;

	var vowels = "aáeiíoóuúyýæøœ";

	if (word2 in special_ipa_constructions) {
		if (special_ipa_constructions[word2].constructor === Array) {
			if (regional) {
				return special_ipa_constructions[word2][1];
			} else {
				return special_ipa_constructions[word2][0];
			}
		} else {
			return special_ipa_constructions[word2];
		}
	}

	for (var i = 0; i < word2.length; i++) {
		for (var k = word2.length; k > i; k--) {
			var section = word2.substring(i, k);

			if (section.includes("-")) continue;
			if (section.includes(" ")) {
				if (section == " ") pronunciation += " ";

				continue;
			}

			if ((i == 0 || word2.charAt(i - 1) == "-") && section + "-" in ipa_dict) {
				pronunciation += get_section_ipa(section + "-", regional);
				i += section.length - 1;

				if (check_vowels(section)) counted_vowels += 1;

				break;
			}

			if (k == word2.length && "-" + section in ipa_dict) {
				if (section == "r" && !vowels.includes(word2.charAt(i - 1))) {
					pronunciation += get_section_ipa("r_ending", regional);
				} else {
					pronunciation += get_section_ipa("-" + section, regional);
				}
				
				i += section.length - 1;

				if (check_vowels(section)) counted_vowels += 1;

				break;
			}

			if (section in ipa_dict) {
				pronunciation += get_section_ipa(section, regional);
				i += section.length - 1;

				if (check_vowels(section)) counted_vowels += 1;

				break;
			}
		}
	}

	if (pronunciation.endsWith("r̩")) counted_vowels++;

	if (counted_vowels >= 2) pronunciation = "ˈ" + pronunciation;

	return pronunciation;
}
