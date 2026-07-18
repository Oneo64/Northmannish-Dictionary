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
	"gl": "kl̥",
	"gj": "c",
	"ggj": "cː",
	"gn": "kn",
	"gn-": "gn",
	"-gn": "kn̥",
	"h": "x",
	"j": "j",
	"k": "k",
	"kk": "hk",
	"l": "l",
	"ll": "tl̥",
	"ull": "ʊlː",
	"-lg": "lk",
	"m": "m",
	"mm": "m",
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
	"pl": "pl̥",
	"pn": "pn̥",
	"r": "r",
	"rr": "rː",
	"-r": "r̩",
	"hr": "r̥",
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
};

const ipa_dict_regional = {
	"o": "ɔ",
	"œ": "ʌiː",
	"þr-": "ðr",
};

const special_ipa_constructions = {
	einn: "einnː",
	einhverr: "ˈeinkʋɛrː",
	"einhverjir þeir": "ˈeinkʋɛrjɪr θeiːr",
	halló: "ˈhalouː",
	œi: ["ˈɤiːjɪ", "ˈʌiːjɪ"]
};

function check_vowels(section) {
	var vowels = "aɛeɪioʊuʏyœɤ";

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
	var pronunciation = "";
	var counted_vowels = 0;

	if (word in special_ipa_constructions) {
		if (special_ipa_constructions[word].constructor === Array) {
			if (regional) {
				return special_ipa_constructions[word][1];
			} else {
				return special_ipa_constructions[word][0];
			}
		} else {
			return special_ipa_constructions[word];
		}
	}

	for (var i = 0; i < word.length; i++) {
		for (var k = word.length; k > i; k--) {
			var section = word.substring(i, k);

			if (section.includes("-")) continue;
			if (section.includes(" ")) {
				if (section == " ") pronunciation += " ";

				continue;
			}

			if ((i == 0 || word.charAt(i - 1) == "-") && section + "-" in ipa_dict) {
				pronunciation += get_section_ipa(section + "-", regional);
				i += section.length - 1;

				if (check_vowels(section)) counted_vowels += 1;

				break;
			}

			if (k == word.length && "-" + section in ipa_dict) {
				pronunciation += get_section_ipa("-" + section, regional);
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

	if (counted_vowels >= 2) pronunciation = "ˈ" + pronunciation;

	return pronunciation;
}
