const noun_declensions = {
	masculine_a_stem: [
		"_", "_inn", "ar", "arnir",
		"", "inn", "a", "ana",
		"i", "inum", "um", "unum",
		"s", "sins", "a", "anna",
	],
	masculine_i_stem: [
		"_", "_inn", "e-ir", "e-irnir",
		"", "inn", "e-i", "e-ina",
		"e-i", "e-inum", "um", "unum",
		"a-ar", "a-arins", "a-a", "a-anna",
	],
	masculine_ll: [
		"_ll", "_llinn", "lar", "larnir",
		"_l", "_linn", "la", "lana",
		"li", "linum", "lum", "lunum",
		"_ls", "_lsins", "la", "lanna",
	],
	masculine_ll2: [
		"l", "linn", "ar", "arnir",
		"", "inn", "a", "ana",
		"", "inum", "um", "unum",
		"s", "sins", "a", "anna",
	],
	masculine_nn: [
		"n", "ninn", "ar", "arnir",
		"", "inn", "a", "ana",
		"i", "inum", "um", "unum",
		"s", "sins", "a", "anna",
	],
	masculine_rr: [
		"r", "rinn", "jar", "jarnir",
		"", "inn", "ja", "jana",
		"i", "inum", "jum", "junum",
		"s", "sins", "ja", "janna",
	],
	masculine_i: [
		"i", "inn", "ar", "arnir",
		"a", "ann", "a", "ana",
		"a", "anum", "um", "unum",
		"a", "ans", "a", "anna",
	],
	masculine_inn: [
		"inn", "inninn", "nar", "narnir",
		"in", "ininn", "na", "nana",
		"ni", "ninum", "num", "nunum",
		"ins", "insins", "na", "nanna",
	],
	masculine_ir: [
		"ir", "irinn", "e-r", "e-rnir",
		"ur", "urinn", "e-r", "e-rna",
		"ur", "urinum", "e-rum", "e-runum",
		"ur", "urins", "e-ra", "e-ranna",
	],
	masculine_ir2: [
		"ir", "irinn", "ø-r", "ø-rnir",
		"ur", "urinn", "ø-r", "ø-rna",
		"ur", "urinum", "ø-rum", "ø-runum",
		"ur", "urins", "ø-ra", "ø-ranna",
	],
	masculine_ir3: [
		"ir", "irinn", "ar", "arnir",
		"i", "inn", "a", "ana",
		"i", "inum", "um", "unum",
		"is", "isins", "a", "anna",
	],
	masculine_none: [
		"", "inn", "ar", "arnir",
		"", "inn", "a", "ana",
		"i", "inum", "um", "unum",
		"s", "sins", "a", "anna",
	],

	masculine_andi: [
		"andi", "andinn", "endr", "endrnir",
		"anda", "andann", "endr", "endrna",
		"anda", "andanum", "øndum", "øndunum",
		"anda", "andans", "anda", "andanna",
	],
	masculine_ari: [
		"ari", "arinn", "arar", "ararnir",
		"ara", "arann", "ara", "arana",
		"ara", "aranum", "urum", "urunum",
		"ara", "arans", "ara", "aranna",
	],

	feminine_a: [
		"a", "an", "ur", "urnar",
		"u", "una", "ur", "urnar",
		"u", "unni", "um", "unum",
		"u", "unnar", "a", "anna",
	],
	feminine_un: [
		"un", "unin", "a-anir", "a-anirnar",
		"un", "ununa", "a-anir", "a-anirnar",
		"un", "ununni", "unum", "ununum",
		"a-anar", "a-anarinnar", "a-ana", "a-ananna",
	],
	feminine_none: [
		"", "in", "e-ir", "e-irnar",
		"", "una", "e-ir", "e-irnar",
		"", "unni", "um", "unum",
		"a-ar", "a-arinnar", "a-a", "a-anna",
	],
	feminine_o: [
		"", "in", "ø-r", "ø-rnar",
		"", "una", "ø-r", "ø-rnar",
		"", "unni", "-um", "-unum",
		"ar", "arinnar", "-a", "-anna",
	],
	feminine_ir: [
		"ir", "irin", "ø-r", "ø-rnar",
		"ur", "urna", "ø-r", "ø-rnar",
		"ur", "urnni", "ø-rum", "ø-runum",
		"ur", "urnnar", "ø-ra", "ø-ranna",
	],
	feminine_i: [
		"i", "in", "ir", "irnar",
		"i", "ina", "ir", "irnar",
		"i", "inni", "jum", "junum",
		"i", "innar", "ja", "janna",
	],
	feminine_ing: [
		"", "in", "ar", "arnar",
		"u", "una", "ar", "arnar",
		"u", "unni", "um", "unum",
		"ar", "arinnar", "a", "anna",
	],
	feminine_u: [
		"ú", "úin", "ýr", "ýrnar",
		"ú", "úna", "ýr", "ýrnar",
		"ú", "únni", "úm", "únum",
		"úar", "úarinnar", "úa", "úanna",
	],

	neuter_none: [
		"", "it", "", "in",
		"", "it", "", "in",
		"i", "inu", "um", "unum",
		"s", "sins", "a", "anna",
	],
	neuter_a: [
		"a", "at", "u", "un",
		"a", "at", "u", "un",
		"a", "anu", "um", "unum",
		"as", "asins", "a", "anna",
	],
	neuter_e: [
		"", "git", "", "gin",
		"", "git", "", "gin",
		"gi", "ginu", "gum", "gunum",
		"s", "sins", "ga", "ganna",
	],
	neuter_er: [
		"", "it", "", "in",
		"", "it", "", "in",
		"i", "inu", "jum", "junum",
		"s", "sins", "ja", "janna",
	],
	neuter_i: [
		"i", "it", "i", "in",
		"i", "it", "i", "in",
		"i", "inu", "um", "unum",
		"is", "isins", "a", "anna",
	],
};

const special_declensions = {
	gás: [
		"gás", "gásin", "gæss", "gæssnar",
		"gás", "gásuna", "gæss", "gæssnar",
		"gás", "gásunni", "gásum", "gásunum",
		"gásar", "gásarinnar", "gása", "gásanna",
	],
	maðr: [
		"maðr", "maðrinn", "menn", "mennirnir",
		"mann", "manninn", "menn", "mennina",
		"manni", "manninum", "mønnum", "mønnunum",
		"manns", "mannsins", "manna", "mannanna",
	],
	mær: [
		"mær", "mærin", "meyjar", "meyjarnar",
		"mey", "meyna", "meyjar", "meyjarnar",
		"mey", "meynni", "meyjum", "meyjunum",
		"meyjar", "meyjarinnar", "meyja", "meyjanna",
	],
	sær: [
		"sær", "særinn", "sævar", "sævarnir",
		"sæ", "sæinn", "sæva", "sævana",
		"sævi", "sævinum", "sævum", "sævunum",
		"sæs", "sæsins", "sæva", "sævanna",
	],
	søngr: [
		"søngr", "søngrinn", "søngvar", "søngvarnir",
		"søng", "sønginn", "søngva", "søngvana",
		"søngvi", "søngvinum", "søngvum", "søngvunum",
		"søngs", "søngsins", "søngva", "søngvanna",
	],
	ýr: [
		"ýr", "ýrinn", "ívar", "ívarnir",
		"ý", "ýinn", "íva", "ívana",
		"ývi", "ývinum", "ývum", "ývunum",
		"ýs", "ýsins", "íva", "ívanna",
	],
	ør: [
		"ør", "ørin", "ørvar", "ørvarnar",
		"ør", "øruna", "ørvar", "ørvarnar",
		"ør", "ørunni", "ørvum", "ørvunum",
		"ørvar", "ørvarinnar", "ørva", "ørvanna",
	],
	œi: [
		"œi", "œin", "œjar", "œjarnar",
		"œi", "œina", "œjar", "œjarnar",
		"œi", "œinni", "œjum", "œjunum",
		"œjar", "œjarinnar", "œja", "œjanna",
	],

	løg: [
		"", "", "løg", "løgin",
		"", "", "løg", "løgin",
		"", "", "løgum", "løgunum",
		"", "", "laga", "laganna",
	],
	røk: [
		"", "", "røk", "røkin",
		"", "", "røk", "røkin",
		"", "", "røkum", "røkunum",
		"", "", "raka", "rakanna",
	],
	tøl: [
		"", "", "tøl", "tølin",
		"", "", "tøl", "tølin",
		"", "", "tølum", "tølunum",
		"", "", "tala", "talanna",
	],
	"ør-løg": [
		"", "", "ørløg", "ørløgin",
		"", "", "ørløg", "ørløgin",
		"", "", "ørløgum", "ørløgunum",
		"", "", "ørlaga", "ørlaganna",
	]
};

const determiner_declensions = {
	báðir: [
		"x", "x", "x",
		"x", "x", "x",
		"x", "x", "x",
		"x", "x", "x",

		"báðir", "báðar", "báðu",
		"báða", "báðar", "báðu",
		"báðum", "báðum", "báðum",
		"báða", "báða", "báða",
	],
	einhverr: [
		"einhverr", "einhver", "eithvert, eithvat",
		"einhvern", "einhverja", "eithvert, eithvat",
		"einhverjum", "einhveri", "eithverju",
		"einhvers", "einhverjar", "eithvers",

		"einhverjir", "einhverjar", "einhver",
		"einhverja", "einhverjar", "einhver",
		"einhverjum", "einhverjum", "einhverjum",
		"einhverja", "einhverja", "einhverja",
	],
	enginn: [
		"enginn", "engin", "enkið",
		"engan", "enga", "enkið",
		"engum", "engi", "engu",
		"enkis", "engar", "enkis",

		"engir", "engar", "engin",
		"enga", "engar", "engin",
		"engum", "engum", "engum",
		"enga", "enga", "enga",
	],
	sjalfr: [
		"sjalfr", "sjølf", "sjalft",
		"sjalfan", "sjalfa", "sjalft",
		"sjølfum", "sjalfi", "sjølfu",
		"sjalfs", "sjalfar", "sjalfs",

		"sjalfir", "sjalfar", "sjølf",
		"sjalfa", "sjalfar", "sjølf",
		"sjølfum", "sjølfum", "sjølfum",
		"sjalfa", "sjalfa", "sjalfa",
	],
	þessi: [
		"þessi", "þessi", "þetta",
		"þennan", "þessa", "þetta",
		"þessum", "þessi", "þessu",
		"þess", "þessar", "þess",

		"þessir", "þessar", "þessi",
		"þessa", "þessar", "þessi",
		"þessum", "þessum", "þessum",
		"þessa", "þessa", "þessa",
	],

	minn: [
		"minn", "mín", "mitt",
		"minn", "mína", "mitt",
		"mínum", "míni", "mínu",
		"míns", "mínar", "míns",

		"mínir", "mínar", "mín",
		"mína", "mínar", "mín",
		"mínum", "mínum", "mínum",
		"mína", "mína", "mína",
	],
	þinn: [
		"þinn", "þín", "þitt",
		"þinn", "þína", "þitt",
		"þínum", "þíni", "þínu",
		"þíns", "þínar", "þíns",

		"þínir", "þínar", "þín",
		"þína", "þínar", "þín",
		"þínum", "þínum", "þínum",
		"þína", "þína", "þína",
	],
	sinn: [
		"sinn", "sín", "sitt",
		"sinn", "sína", "sitt",
		"sínum", "síni", "sínu",
		"síns", "sínar", "síns",

		"sínir", "sínar", "sín",
		"sína", "sínar", "sín",
		"sínum", "sínum", "sínum",
		"sína", "sína", "sína",
	],

	annarr: [
		"annarr", "ønnur", "annat",
		"annan", "aðra", "annat",
		"øðrum", "aðri", "øðru",
		"annars", "aðrar", "annars",

		"aðrir", "aðrar", "ønnur",
		"aðra", "aðrar", "ønnur",
		"øðrum", "øðrum", "øðrum",
		"aðra", "aðra", "aðra",
	]
};

function analyse_noun(word, gender, tags) {
	var vowels = "aáeiíoóuúyýæøœ";

	var vowel_pos = 0;
	var vowel_size = 1;
	var vowel_chr = "a";
	var stem = "i";

	var stem_end = word.length - 2;

	if (tags.includes("pl-only") && gender == "masculine noun") stem_end = word.length - 3;

	if (word.endsWith("ir") && gender == "masculine noun") stem_end = word.length - 3;
	if (word.endsWith("i") && gender == "masculine noun") stem_end = word.length - 2;
	if (word.endsWith("ari") && gender == "masculine noun") stem_end = word.length - 4;
	if (word.endsWith("all") && gender == "masculine noun") stem_end = word.length - 4;

	if (word.endsWith("ttir") && gender == "feminine noun") stem_end = word.length - 3;
	if (word.endsWith("un") && gender == "feminine noun") stem_end = word.length - 3;

	for (var i = stem_end; i >= 0; i--) {
		if (vowels.includes(word.charAt(i))) {
			if (i > 0 && vowels.includes(word.charAt(i - 1))) {
				vowel_pos = i - 1;
				vowel_size = 2;
				vowel_chr = word.charAt(i - 1) + word.charAt(i);
			} else {
				vowel_pos = i;
				vowel_size = 1;
				vowel_chr = word.charAt(i);
			}

			break;
		}
	}

	if ("aáoóuú".includes(vowel_chr) || vowel_chr == "ey") {
		stem = "a";
	}

	return [vowel_pos, vowel_size, stem];
}

function get_declension(word, gender, tags) {
	var declension = [];
	var declension_size = 0;
	var analysis = analyse_noun(word, gender, tags);
	var autopick = true;
	var ir_ending = false;
	var u_second = false;

	if (word in special_declensions) return special_declensions[word];
	if (word.includes("-") && word.substring(word.indexOf("-") + 1) in special_declensions) {
		var declension2 = special_declensions[word.substring(word.indexOf("-") + 1)];

		for (var i = 0; i < 16; i++) {
			declension2[i] = word.substring(0, word.indexOf("-")) + declension2[i];
		}

		return declension2;
	}

	if (tags.includes("masculine none")) {
		declension = noun_declensions.masculine_none;
		declension_size = 0;
		autopick = false;
	}

	if (tags.includes("masculine a-stem")) {
		declension = noun_declensions.masculine_a_stem;
		declension_size = 1;
		autopick = false;
	}

	if (tags.includes("masculine i-stem")) {
		declension = noun_declensions.masculine_i_stem;
		declension_size = 1;
		autopick = false;
	}

	if (autopick) {
		if (gender == "masculine noun") {
			if (word.endsWith("ir")) {
				if (word.charAt(analysis[0]) == "a") {
					declension = noun_declensions.masculine_ir;
					ir_ending = true;
				} else if (word.charAt(analysis[0]) == "ó") {
					declension = noun_declensions.masculine_ir2;
					ir_ending = true;
				} else {
					declension = noun_declensions.masculine_ir3;
				}

				declension_size = 2;
			} else if (word.endsWith("rr")) {
				declension = noun_declensions.masculine_rr;
				declension_size = 1;
			} else if (word.endsWith("r") || word.endsWith("ss")) {
				if (analysis[2] == "a") {
					declension = noun_declensions.masculine_a_stem;
				} else {
					declension = noun_declensions.masculine_i_stem;
				}

				declension_size = 1;
			} else if (word.endsWith("i")) {
				if (word.endsWith("andi") && word != "grandi") {
					declension = noun_declensions.masculine_andi;
					declension_size = 4;
				} else if (word.endsWith("ari") && word != "skari" && word != "kross-fari") {
					declension = noun_declensions.masculine_ari;
					declension_size = 3;
				} else {
					declension = noun_declensions.masculine_i;
					declension_size = 1;
				}
			} else if (word.endsWith("ll")) {
				if (word.endsWith("all") || word.endsWith("ull") || word.endsWith("ill")) {
					declension = noun_declensions.masculine_ll;
					declension_size = 3;
					u_second = true;
				} else {
					declension = noun_declensions.masculine_ll2;
					declension_size = 1;
				}
			} else if (word.endsWith("inn") && !word.endsWith("einn")) {
				declension = noun_declensions.masculine_inn;
				declension_size = 3;
			} else if (word.endsWith("nn")) {
				declension = noun_declensions.masculine_nn;
				declension_size = 1;
			} else {
				declension = noun_declensions.masculine_none;
				declension_size = 0;
			}
		} else if (gender == "feminine noun") {
			if (word.endsWith("a")) {
				declension = noun_declensions.feminine_a;
				declension_size = 1;
			} else if (word.endsWith("un")) {
				declension = noun_declensions.feminine_un;
				declension_size = 2;
			} else if (word.endsWith("i")) {
				declension = noun_declensions.feminine_i;
				declension_size = 1;
			} else if (word.endsWith("ir")) {
				declension = noun_declensions.feminine_ir;
				declension_size = 2;
				ir_ending = true;
			} else if (word.endsWith("ing")) {
				declension = noun_declensions.feminine_ing;
				declension_size = 0;
			} else if (word.endsWith("ú")) {
				declension = noun_declensions.feminine_u;
				declension_size = 1;
			} else {
				declension = noun_declensions.feminine_none;
				declension_size = 0;
			}
		} else {
			if (word.endsWith("a")) {
				declension = noun_declensions.neuter_a;
				declension_size = 1;
			} else if (word.endsWith("e")) {
				declension = noun_declensions.neuter_e;
				declension_size = 0;
			} else if (word.endsWith("i")) {
				declension = noun_declensions.neuter_i;
				declension_size = 1;
			} else if (word.endsWith("er")) {
				declension = noun_declensions.neuter_er;
				declension_size = 0;
			} else {
				declension = noun_declensions.neuter_none;
				declension_size = 0;
			}
		}
	}

	if (tags.includes("pl-only") && gender != "neuter noun") {
		declension_size = 2;
	}

	var word_forms = [];

	for (var i = 0; i < 16; i++) {
		var word2 = word;
		var ending = declension[i];

		if (word.charAt(analysis[0]) == "ø" || ir_ending) {
			if (ending.includes("-")) {
				word2 = word2.substring(0, analysis[0]) + ending.charAt(0) + word2.substring(analysis[0] + 1, word2.length);
			}
		}

		if (word.charAt(analysis[0]) == "ø") {
			if (ending.includes("-")) {
				word2 = word2.substring(0, analysis[0]) + ending.charAt(0) + word2.substring(analysis[0] + 1, word2.length);
			}
		}

		if (word.charAt(analysis[0]) == "a") {
			if ((u_second && ending.charAt(1) == "u") || ending.charAt(0) == "u") {
				word2 = word2.substring(0, analysis[0]) + "ø" + word2.substring(analysis[0] + 1, word2.length);
			}

			if (Math.floor(i / 2) % 2 == 1 && i < 14 && gender == "neuter noun") {
				word2 = word2.substring(0, analysis[0]) + "ø" + word2.substring(analysis[0] + 1, word2.length);
			}
		}
		
		var ending_true = ending;

		if (ending.includes("-")) ending_true = ending.substring(2, ending.length);

		if (ending_true.charAt(0) == "_") {
			word_forms.push(word2.substring(0, (word2.length - declension_size) + 1) + ending_true.substring(1));
		} else {
			word_forms.push(word2.substring(0, word2.length - declension_size) + ending_true);
		}
	}

	for (var i = 0; i < 16; i++) {
		word_forms[i] = word_forms[i].replaceAll("-", "");
	}

	return word_forms;
}
