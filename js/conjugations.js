const verb_conjugations = {
	weak_a: [
		"a", "aða",
		"ar", "aðir",
		"ar", "aði",
		"um", "uðum",
		"uð", "uðuð",
		"u", "uðu",

		"ask", "aðisk",
		"ask", "aðisk",
		"ask", "aðisk",
		"umsk", "uðumsk",
		"usk", "uðusk",
		"usk", "uðusk",

		"aðr", "að", 1
	],
	weak_dh_i: [
		"ði", "dda",
		"ðir", "ddir",
		"ðir", "ddi",
		"ðum", "ddum",
		"ðuð", "dduð",
		"ðu", "ddu",

		"ðisk", "ddisk",
		"ðisk", "ddisk",
		"ðisk", "ddisk",
		"ðumsk", "ddumsk",
		"ðusk", "ddusk",
		"ðusk", "ddusk",

		"ðinn", "ðið", 2
	],
	weak_t_i: [
		"i", "ta",
		"ir", "tir",
		"ir", "ti",
		"um", "tum",
		"uð", "tuð",
		"u", "tu",

		"isk", "tisk",
		"isk", "tisk",
		"isk", "tisk",
		"umsk", "tumsk",
		"usk", "tusk",
		"usk", "tusk",

		"tr", "t", 1
	],
	weak_dh2_i: [
		"i", "ða",
		"ir", "ðir",
		"ir", "ði",
		"um", "ðum",
		"uð", "ðuð",
		"u", "ðu",

		"isk", "ðisk",
		"isk", "ðisk",
		"isk", "ðisk",
		"umsk", "ðumsk",
		"usk", "ðusk",
		"usk", "ðusk",

		"ðr", "t", 1
	],
	weak_d_i: [
		"i", "da",
		"ir", "dir",
		"ir", "di",
		"um", "dum",
		"uð", "duð",
		"u", "du",

		"isk", "disk",
		"isk", "disk",
		"isk", "disk",
		"umsk", "dumsk",
		"usk", "dusk",
		"usk", "dusk",

		"dr", "t", 1
	],
	weak_eyja: [
		"", "ða",
		"r", "ðir",
		"r", "ði",
		"jum", "ðum",
		"juð", "ðuð",
		"ju", "ðu",

		"jisk", "ðisk",
		"jisk", "ðisk",
		"jisk", "ðisk",
		"jumsk", "ðumsk",
		"jusk", "ðusk",
		"jusk", "ðusk",

		"ðr", "tt", 1
	],

	weak_y_da: [
		"y-", "u-da",
		"y-r", "u-dir",
		"y-r", "u-di",
		"y-um", "u-dum",
		"y-uð", "u-duð",
		"y-u", "u-du",

		"y-isk", "u-disk",
		"y-isk", "u-disk",
		"y-isk", "u-disk",
		"y-umsk", "u-dumsk",
		"y-usk", "u-dusk",
		"y-usk", "u-dusk",

		"u-dr", "u-t", 1
	],
	weak_y_ta: [
		"y-", "u-ta",
		"y-r", "u-tir",
		"y-r", "u-ti",
		"y-um", "u-tum",
		"y-uð", "u-tuð",
		"y-u", "u-tu",

		"y-isk", "u-tisk",
		"y-isk", "u-tisk",
		"y-isk", "u-tisk",
		"y-umsk", "u-tumsk",
		"y-usk", "u-tusk",
		"y-usk", "u-tusk",

		"u-tr", "u-t", 1
	],
	weak_y_dha: [
		"y-", "u-ða",
		"y-r", "u-ðir",
		"y-r", "u-ði",
		"y-um", "u-ðum",
		"y-uð", "u-ðuð",
		"y-u", "u-ðu",

		"y-isk", "u-ðisk",
		"y-isk", "u-ðisk",
		"y-isk", "u-ðisk",
		"y-umsk", "u-ðumsk",
		"y-usk", "u-ðusk",
		"y-usk", "u-ðusk",

		"u-ðr", "u-t", 1
	],

	strong_e_a: [
		"e-", "a-",
		"e-r", "a-st",
		"e-r", "a-",
		"e-um", "ø-um",
		"e-uð", "ø-uð",
		"e-u", "ø-u",

		"e-sk", "a-sk",
		"e-sk", "a-sk",
		"e-sk", "a-sk",
		"e-umsk", "ø-umsk",
		"e-usk", "ø-usk",
		"e-usk", "ø-usk",

		"e-inn", "e-ið", 1
	],
	strong_e_a2: [
		"e-", "a-",
		"e-r", "a-st",
		"e-r", "a-",
		"e-um", "ø-um",
		"e-uð", "ø-uð",
		"e-u", "ø-u",

		"e-sk", "a-sk",
		"e-sk", "a-sk",
		"e-sk", "a-sk",
		"e-umsk", "ø-umsk",
		"e-usk", "ø-usk",
		"e-usk", "ø-usk",

		"a-inn", "a-ið", 1
	],
	strong_e_a3: [
		"e-", "á-",
		"e-r", "á-st",
		"e-r", "á-",
		"e-um", "á-um",
		"e-uð", "á-uð",
		"e-u", "á-u",

		"e-sk", "á-sk",
		"e-sk", "á-sk",
		"e-sk", "á-sk",
		"e-umsk", "á-umsk",
		"e-usk", "á-usk",
		"e-usk", "á-usk",

		"á-inn", "á-ið", 1
	],
	strong_e_a4: [
		"e-", "a-",
		"e-r", "a-st",
		"e-r", "a-",
		"e-um", "a-um",
		"e-uð", "a-uð",
		"e-u", "a-u",

		"e-sk", "ø-sk",
		"e-sk", "ø-sk",
		"e-sk", "ø-sk",
		"e-umsk", "ø-umsk",
		"e-usk", "ø-usk",
		"e-usk", "ø-usk",

		"ja-inn", "ja-ið", 1
	],
	strong_i_a: [
		"i-", "a-",
		"i-r", "a-st",
		"i-r", "a-",
		"i-um", "ø-um",
		"i-uð", "ø-uð",
		"i-u", "ø-u",

		"i-sk", "a-sk",
		"i-sk", "a-sk",
		"i-sk", "a-sk",
		"i-umsk", "ø-umsk",
		"i-usk", "ø-usk",
		"i-usk", "ø-usk",

		"i-inn", "i-ið", 1
	],
	strong_i2_a: [
		"í-", "a-",
		"í-r", "a-st",
		"í-r", "a-",
		"í-um", "ø-um",
		"í-uð", "ø-uð",
		"í-u", "ø-u",

		"í-sk", "a-sk",
		"í-sk", "a-sk",
		"í-sk", "a-sk",
		"í-umsk", "ø-umsk",
		"í-usk", "ø-usk",
		"í-usk", "ø-usk",

		"í-inn", "í-ið", 1
	],
	strong_e_ekk: [
		"eng", "ekk",
		"engr", "ekkst",
		"engr", "ekk",
		"engum", "ekkum",
		"enguð", "ekkuð",
		"engu", "ekku",

		"engsk", "ekksk",
		"engsk", "ekksk",
		"engsk", "ekksk",
		"engumsk", "ekkumsk",
		"engusk", "ekkusk",
		"engusk", "ekkusk",

		"enginn", "engið", 4
	],
	strong_ae_ekk: [
		"æ", "ekk",
		"ær", "ekkst",
		"ær", "ekk",
		"engum", "ekkum",
		"enguð", "ekkuð",
		"engu", "ekku",

		"æsk", "ekksk",
		"æsk", "ekksk",
		"æsk", "ekksk",
		"engumsk", "ekkumsk",
		"engusk", "ekkusk",
		"engusk", "ekkusk",

		"enginn", "engið", 1
	],
	strong_i_akk: [
		"ing", "akk",
		"ingr", "akkst",
		"ingr", "akk",
		"ingum", "økkum",
		"inguð", "økkuð",
		"ingu", "økku",

		"ingsk", "akksk",
		"ingsk", "akksk",
		"ingsk", "akksk",
		"ingumsk", "økkumsk",
		"ingusk", "økkusk",
		"ingusk", "økkusk",

		"enginn", "engið", 4
	],
	strong_e_o: [
		"e-", "ó-",
		"e-r", "ó-st",
		"e-r", "ó-",
		"e-um", "ó-um",
		"e-uð", "ó-uð",
		"e-u", "ó-u",

		"e-sk", "ó-sk",
		"e-sk", "ó-sk",
		"e-sk", "ó-sk",
		"e-umsk", "ó-umsk",
		"e-usk", "ó-usk",
		"e-usk", "ó-usk",

		"a-inn", "a-ið", 1
	],
	strong_y_jo: [
		"ý", "jó",
		"ýr", "jóst",
		"ýr", "jó",
		"ýum", "jóum",
		"ýuð", "jóuð",
		"ýu", "jóu",

		"ýsk", "jósk",
		"ýsk", "jósk",
		"ýsk", "jósk",
		"ýumsk", "jóumsk",
		"ýusk", "jóusk",
		"ýusk", "jóusk",

		"úinn", "úið", 2
	],
	strong_y_a: [
		"ý-", "á-",
		"ý-r", "á-st",
		"ý-r", "á-",
		"ý-um", "á-um",
		"ý-uð", "á-uð",
		"ý-u", "á-u",

		"ý-sk", "á-sk",
		"ý-sk", "á-sk",
		"ý-sk", "á-sk",
		"ý-umsk", "á-umsk",
		"ý-usk", "á-usk",
		"ý-usk", "á-usk",

		"o-inn", "o-ið", 1
	],
	strong_egi_agda: [
		"egi", "agða",
		"egir", "agðir",
		"egir", "agði",
		"egjum", "øgðum",
		"egjuð", "øgðuð",
		"egju", "øgðu",

		"egisk", "agðisk",
		"egisk", "agðisk",
		"egisk", "agðisk",
		"egjumsk", "øgðumsk",
		"egjusk", "øgðusk",
		"egjusk", "øgðusk",

		"aginn", "agið", 3
	],
	strong_a_atta: [
		"á", "átta",
		"átt", "áttir",
		"á", "átti",
		"egum", "áttum",
		"eguð", "áttuð",
		"egu", "áttu",

		"ásk", "áttsk",
		"ásk", "áttsk",
		"ásk", "áttsk",
		"egumsk", "áttumsk",
		"egusk", "áttusk",
		"egusk", "áttusk",

		"eginn", "egið", 3
	],


	// completely irregular conjugations
	strong_i2_ei: [
		"í-", "ei-",
		"í-r", "ei-st",
		"í-r", "ei-",
		"í-um", "ei-um",
		"í-uð", "ei-uð",
		"í-u", "ei-u",

		"í-sk", "ei-sk",
		"í-sk", "ei-sk",
		"í-sk", "ei-sk",
		"í-umsk", "ei-umsk",
		"í-usk", "ei-usk",
		"í-usk", "ei-usk",

		"í-inn", "í-ið", 1
	],
};

const strong_verb_a_conjugations = {
	binda: [
		"bind", "batt",
		"bindr", "bazt",
		"bindr", "batt",
		"bindum", "bøttum",
		"binduð", "bøttuð",
		"bindu", "bøttu",

		"binzk", "bazk",
		"binzk", "bazk",
		"binzk", "bazk",
		"bindumsk", "bøttumsk",
		"bindusk", "bøttusk",
		"bindusk", "bøttusk",

		"bindinn", "bindið",
		"bindandi", "binding", "bindask"
	],
	eiga: [
		"eigi", "átta",
		"eigir", "áttir",
		"eigir", "átti",
		"eigum", "áttum",
		"eiguð", "áttuð",
		"eigu", "áttu",

		"eigisk", "áttisk",
		"eigisk", "áttisk",
		"eigisk", "áttisk",
		"eigumsk", "áttumsk",
		"eigumsk", "áttusk",
		"eigumsk", "áttusk",

		"eiginn", "eigið",
		"eigandi", "eiging", "eigask"
	],
	fara: [
		"fer", "fór",
		"fert", "fórst",
		"fer", "fór",
		"ferum", "fórum",
		"feruð", "fóruð",
		"feru", "fóru",

		"fersk", "fórsk",
		"fersk", "fórsk",
		"fersk", "fórsk",
		"ferumsk", "fórumsk",
		"ferusk", "fórusk",
		"ferusk", "fórusk",

		"farinn", "farið",
		"farandi", "faring", "farask"
	],
	hafa: [
		"hef", "hafða",
		"hefr", "hafðir",
		"hefr", "hafði",
		"hefum", "høfðum",
		"hefuð", "høfðuð",
		"hefu", "høfðu",

		"hefsk", "hafsk",
		"hefsk", "hafsk",
		"hefsk", "hafsk",
		"hefumsk", "høfðumsk",
		"hefusk", "høfðusk",
		"hefusk", "høfðusk",

		"hafinn", "hafið",
		"hafandi", "hafing", "hafask"
	],
	hlæja: [
		"hlæ", "hló",
		"hlær", "hlóst",
		"hlær", "hló",
		"hlæjum", "hlóum",
		"hlæjuð", "hlóuð",
		"hlæju", "hlóu",

		"hlæsk", "hlósk",
		"hlæsk", "hlósk",
		"hlæsk", "hlósk",
		"hlæjumsk", "hlóumsk",
		"hlæjusk", "hlóusk",
		"hlæjusk", "hlóusk",

		"hlæinn", "hlæið",
		"hlæjandi", "hlæing", "hlæjask"
	],
	høggva: [
		"høgg", "hjó",
		"høggr", "hjóst",
		"høggr", "hjó",
		"høggvum", "hjóum",
		"høggvuð", "hjóuð",
		"høggvu", "hjóu",

		"høggsk", "hjósk",
		"høggsk", "hjósk",
		"høggsk", "hjósk",
		"høggvumsk", "hjóumsk",
		"høggvusk", "hjóusk",
		"høggvusk", "hjóusk",

		"høggvinn", "høggvið",
		"høggvandi", "høggving", "høggvask"
	],
	koma: [
		"kem", "kom",
		"kemr", "komst",
		"kemr", "kom",
		"kemum", "komum",
		"kemuð", "komuð",
		"kemu", "komu",

		"kemsk", "komsk",
		"kemsk", "komsk",
		"kemsk", "komsk",
		"kemumsk", "komumsk",
		"kemusk", "komusk",
		"kemusk", "komusk",

		"kominn", "komið",
		"komandi", "koming", "komask"
	],
	leggja: [
		"legg", "lagða",
		"leggr", "lagðir",
		"leggr", "lagði",
		"leggjum", "løgðum",
		"leggjuð", "løgðuð",
		"leggju", "løgðu",

		"leggsk", "lagðisk",
		"leggsk", "lagðisk",
		"leggsk", "lagðisk",
		"leggjumsk", "løgðumsk",
		"leggjusk", "løgðusk",
		"leggjusk", "løgðusk",

		"laginn", "lagið",
		"leggjandi", "legging", "leggjask"
	],
	liggja: [
		"ligg", "lá",
		"liggr", "lást",
		"liggr", "lá",
		"liggjum", "láum",
		"liggjuð", "láuð",
		"liggju", "láu",

		"liggsk", "lásk",
		"liggsk", "lásk",
		"liggsk", "lásk",
		"liggjumsk", "láumsk",
		"liggjusk", "láusk",
		"liggjusk", "láusk",

		"leginn", "legið",
		"liggjandi", "ligging", "liggjask"
	],
	muna: [
		"man", "munda",
		"mant", "mundir",
		"man", "mundi",
		"mønum", "mundum",
		"mønuð", "munduð",
		"mønu", "mundu",

		"mansk", "mundisk",
		"mansk", "mundisk",
		"mansk", "mundisk",
		"mønumsk", "mundumsk",
		"mønusk", "mundusk",
		"mønusk", "mundusk",

		"muninn", "munið",
		"munandi", "muning", "munask"
	],
	sjá: [
		"se", "svá",
		"ser", "svást",
		"ser", "svá",
		"sjeum", "sváum",
		"sjeuð", "sváuð",
		"sjeu", "sváu",

		"sesk", "svásk",
		"sesk", "svásk",
		"sesk", "svásk",
		"sjeumsk", "sváumsk",
		"sjeusk", "sváusk",
		"sjeusk", "sváusk",

		"sjeðr", "sjett",
		"sjáandi", "sjáing", "sjáask"
	],
	skilja: [
		"skil", "skilda",
		"skill", "skildir",
		"skill", "skildi",
		"skiljum", "skildum",
		"skiljuð", "skilduð",
		"skilju", "skildu",

		"skilsk", "skildisk",
		"skilsk", "skildisk",
		"skilsk", "skildisk",
		"skiljumsk", "skildumsk",
		"skiljusk", "skildusk",
		"skiljusk", "skildusk",

		"skilinn", "skilið",
		"skiljandi", "skiling", "skiljask"
	],
	standa: [
		"stend", "stóð",
		"stendr", "stóðst",
		"stendr", "stóð",
		"stendum", "stóðum",
		"stenduð", "stóðuð",
		"stendu", "stóðu",

		"stenzk", "stóðsk",
		"stenzk", "stóðsk",
		"stenzk", "stóðsk",
		"stendumsk", "stóðumsk",
		"stendusk", "stóðusk",
		"stendusk", "stóðusk",

		"standinn", "standið",
		"standandi", "standing", "standask"
	],
	syngja: [
		"syng", "søng",
		"syngr", "søngst",
		"syngr", "søng",
		"syngjum", "søngum",
		"syngjuð", "sønguð",
		"syngju", "søngu",

		"syngsk", "søngsk",
		"syngsk", "søngsk",
		"syngsk", "søngsk",
		"syngjumsk", "søngumsk",
		"syngjusk", "søngusk",
		"syngjusk", "søngusk",

		"songinn", "songið",
		"syngjandi", "synging", "syngjask"
	],
	unna: [
		"ann", "unna",
		"annr", "unnir",
		"annr", "unni",
		"ønnum", "unnum",
		"ønnuð", "unnuð",
		"ønnu", "unnu",

		"annsk", "unnisk",
		"annsk", "unnisk",
		"annsk", "unnisk",
		"ønnumsk", "unnumsk",
		"ønnusk", "unnusk",
		"ønnusk", "unnusk",

		"ynndr", "ynnt",
		"unnandi", "unning", "unnask"
	],
	vera: [
		"er", "var",
		"ert", "varst",
		"er", "var",
		"erum", "vørum",
		"eruð", "vøruð",
		"eru", "vøru",

		"ersk", "varsk",
		"ersk", "varsk",
		"ersk", "varsk",
		"erumsk", "vørumsk",
		"erusk", "vørusk",
		"erusk", "vørusk",

		"verinn", "verið",
		"verandi", "vering", "verask"
	],
	vilja: [
		"vil", "vilda",
		"vill", "vildir",
		"vill", "vildi",
		"viljum", "vildum",
		"viljuð", "vilduð",
		"vilju", "vildu",

		"vilsk", "vildisk",
		"vilsk", "vildisk",
		"vilsk", "vildisk",
		"viljumsk", "vildumsk",
		"viljusk", "vildusk",
		"viljusk", "vildusk",

		"vilinn", "vilið",
		"viljandi", "viling", "viljask"
	],
	vita: [
		"veit", "vissa",
		"veizt", "vissir",
		"veit", "vissi",
		"veitum", "vissum",
		"veituð", "vissuð",
		"veitu", "vissu",

		"veizk", "vissisk",
		"veizk", "vissisk",
		"veizk", "vissisk",
		"veitumsk", "vissumsk",
		"veitusk", "vissusk",
		"veitusk", "vissusk",

		"vitinn", "vitið",
		"vitandi", "viting", "vitask"
	],
	ýja: [
		"ýi", "ýtta",
		"ýir", "ýttir",
		"ýir", "ýtti",
		"ýjum", "ýttum",
		"ýjuð", "ýttuð",
		"ýju", "ýttu",

		"ýisk", "ýttisk",
		"ýisk", "ýttisk",
		"ýisk", "ýttisk",
		"ýjumsk", "ýttumsk",
		"ýjusk", "ýttusk",
		"ýjusk", "ýttusk",

		"ýinn", "ýið",
		"ýjandi", "ýing", "ýjask"
	],

	munu: [
		"mun", "mynda",
		"munt", "myndir",
		"mun", "myndi",
		"munum", "myndum",
		"munuð", "mynduð",
		"munu", "myndu"
	],
	skulu: [
		"skal", "skylda",
		"skall", "skyldir",
		"skall", "skyldi",
		"skulum", "skyldum",
		"skuluð", "skylduð",
		"skulu", "skyldu"
	],

	verða: [
		"verð", "varð",
		"verðr", "varðst",
		"verðr", "varð",
		"verðum", "vørðum",
		"verðuð", "vørðuð",
		"verðu", "vørðu",

		"verðsk", "varðsk",
		"verðsk", "varðsk",
		"verðsk", "varðsk",
		"verðumsk", "vørðumsk",
		"verðusk", "vørðusk",
		"verðusk", "vørðusk",

		"yrðinn", "yrðið",
		"verðandi", "verðing", "verðask"
	],
};

function analyse_verb(word) {
	var vowels = "aáeiíoóuúyýæøœj";

	var vowel_pos = 0;
	var vowel_size = 1;
	var vowel_chr = "a";
	var stem = "i";

	var stem_end = word.length - 2;

	if (word.endsWith("ja")) stem_end = word.length - 3;

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

	if ("jajájojójujú".includes(vowel_chr)) stem = "a";
	if (word.endsWith("na") && !vowels.includes(word.charAt(word.length - 3)) && !word.endsWith("nna")) stem = "a";
	if (word.endsWith("ra") && !vowels.includes(word.charAt(word.length - 3))) stem = "a";
	if (vowel_chr == "ø" && word.endsWith("va")) stem = "a";

	return [vowel_pos, vowel_size, stem];
}

function get_conjugation(word, tags, tail) {
	if (word.includes("-")) {
		var prefix = word.substring(0, word.indexOf("-"));
		var verb = word.substring(word.indexOf("-") + 1, word.length);

		var conjugation2 = get_conjugation(verb, tags, tail);

		for (var i = 0; i < conjugation2.length; i++) {
			conjugation2[i] = prefix + conjugation2[i];
		}

		return conjugation2;
	}

	var conjugation = [];
	var conjugation_size = 1;
	var analysis = analyse_verb(word, tags);
	var autopick = true;
	var weak_a = false;
	var no_j_insert = false;

	if (tags.includes("weak verb a")) {
		conjugation = verb_conjugations.weak_a;
		autopick = false;
		weak_a = true;
	}

	if (tags.includes("strong verb a")) {
		if (word.endsWith("íta")) {
			conjugation = verb_conjugations.strong_i2_ei;
		} else {
			for (var i = 0; i < 29; i++) {
				conjugation.push(strong_verb_a_conjugations[word][i] + tail);
			}

			return conjugation;
		}

		autopick = false;
	}

	if (tags.includes("strong verb b")) {
		if (word.charAt(analysis[0]) == "e") conjugation = verb_conjugations.strong_e_a;
		if (word.charAt(analysis[0]) == "a") conjugation = verb_conjugations.strong_e_a2;
		if (word.charAt(analysis[0]) == "á") conjugation = verb_conjugations.strong_e_a3;
		if (word.charAt(analysis[0]) == "i") conjugation = verb_conjugations.strong_i_a;
		if (word.charAt(analysis[0]) == "í") conjugation = verb_conjugations.strong_i2_a;

		if (analysis[1] == 2 && word.substring(analysis[0], analysis[0] + 2) == "ja") conjugation = verb_conjugations.strong_e_a4;

		autopick = false;
	}

	if (tags.includes("strong verb c")) {
		if (word.charAt(analysis[0]) == "a") conjugation = verb_conjugations.strong_e_ekk;
		if (word.charAt(analysis[0]) == "i") conjugation = verb_conjugations.strong_i_akk;
		if (word.endsWith("á")) conjugation = verb_conjugations.strong_ae_ekk;

		autopick = false;
	}

	if (tags.includes("strong verb d")) {
		conjugation = verb_conjugations.strong_e_o;
		autopick = false;
	}

	if (tags.includes("strong verb e")) {
		conjugation = verb_conjugations.strong_y_jo;
		autopick = false;
	}

	if (tags.includes("strong verb f")) {
		conjugation = verb_conjugations.strong_y_a;
		autopick = false;
	}

	if (tags.includes("strong verb g")) {
		conjugation = verb_conjugations.strong_egi_agda;
		autopick = false;
		no_j_insert = true;
	}

	if (tags.includes("strong verb h")) {
		conjugation = verb_conjugations.strong_a_atta;
		autopick = false;
	}

	if (autopick) {
		if (analysis[2] == "a") {
			conjugation = verb_conjugations.weak_a;
			weak_a = true;
		} else {
			if (word.endsWith("ja") && word.charAt(analysis[0]) == "y" && !tags.includes("weak verb b")) {
				if (word.endsWith("pja")) conjugation = verb_conjugations.weak_y_ta;
				if (word.endsWith("kja")) conjugation = verb_conjugations.weak_y_ta;
				if (word.endsWith("tja")) conjugation = verb_conjugations.weak_y_ta;

				if (word.endsWith("fja")) conjugation = verb_conjugations.weak_y_dha;
				if (word.endsWith("rja")) conjugation = verb_conjugations.weak_y_dha;

				if (word.endsWith("lja")) conjugation = verb_conjugations.weak_y_da;

				if (word.endsWith("ngja") || word.endsWith("nja") || word.endsWith("mja")) {
					conjugation = verb_conjugations.weak_y_da;
				} else if (word.endsWith("gja")) {
					conjugation = verb_conjugations.weak_y_dha;
				}
			} else {
				if (word.endsWith("ða") || word.endsWith("ðja")) conjugation = verb_conjugations.weak_dh_i;

				if (word.endsWith("pa") || word.endsWith("pja")) conjugation = verb_conjugations.weak_t_i;
				if (word.endsWith("ka") || word.endsWith("kja")) conjugation = verb_conjugations.weak_t_i;
				if (word.endsWith("ta") || word.endsWith("tja")) conjugation = verb_conjugations.weak_t_i;
				if (word.endsWith("nda") || word.endsWith("ndja")) conjugation = verb_conjugations.weak_t_i;
				if (word.endsWith("sa")) conjugation = verb_conjugations.weak_t_i;

				if (word.endsWith("fa") || word.endsWith("fja")) conjugation = verb_conjugations.weak_dh2_i;
				if (word.endsWith("ra") || word.endsWith("rja")) conjugation = verb_conjugations.weak_dh2_i;
				if (word.endsWith("ba") || word.endsWith("bja")) conjugation = verb_conjugations.weak_dh2_i;

				if (word.endsWith("la") || word.endsWith("lja")) conjugation = verb_conjugations.weak_d_i;

				if (word.endsWith("eyja")) {
					conjugation = verb_conjugations.weak_eyja;
					no_j_insert = true;
				}

				if (word.endsWith("nga") || word.endsWith("ngja") || word.endsWith("na") || word.endsWith("ma")) {
					conjugation = verb_conjugations.weak_d_i;
				} else if (word.endsWith("ga") || word.endsWith("gja")) {
					conjugation = verb_conjugations.weak_dh2_i;
				}
			}
		}
	}

	conjugation_size = conjugation[26];

	if (word.endsWith("ja") && !weak_a) conjugation_size += 1;

	var word_forms = [];

	for (var i = 0; i < 26; i++) {
		var word2 = word;
		var ending = conjugation[i];

		if (word.charAt(analysis[0]) == "a") {
			if (ending.charAt(0) == "u") {
				word2 = word2.substring(0, analysis[0]) + "ø" + word2.substring(analysis[0] + 1, word2.length);
			}
		}

		if (ending.includes("-")) {
			var slice = ending.substring(0, ending.indexOf("-"));

			word2 = word2.substring(0, analysis[0]) + slice + word2.substring(analysis[0] + analysis[1], word2.length);
		}
		
		var ending_true = ending;

		if (ending.includes("-")) ending_true = ending.substring(ending.indexOf("-") + 1, ending.length);

		if (word.endsWith("ja") && !weak_a && !no_j_insert) {
			if (i == 6 || i == 8 || i == 10) {
				ending_true = "j" + ending_true;
			}
		}

		var word3 = word2.substring(0, word2.length - conjugation_size);

		if (ending_true.startsWith("s") && word3.endsWith("s")) ending_true = ending_true.substring(1);

		var new_form = word3 + ending_true;

		if (new_form.includes("ts")) new_form = new_form.replaceAll("ts", "z");
		if (new_form.includes("ds")) new_form = new_form.replaceAll("ds", "z");
		if (new_form.includes("dt")) new_form = new_form.replaceAll("dt", "t");
		if (new_form.includes("ftt")) new_form = new_form.replaceAll("ftt", "ft");
		if (tail) new_form += tail;

		word_forms.push(new_form);
	}

	if (word.endsWith("á")) {
		word_forms.push(word.substring(0, word.length - 1) + "áandi" + tail);
	} else {
		word_forms.push(word.substring(0, word.length - 1) + "andi" + tail);
	}

	if (word.endsWith("ja")) {
		word_forms.push(word.substring(0, word.length - 2) + "ing" + tail);
	} else if (word.endsWith("á")) {
		word_forms.push(word.substring(0, word.length - 1) + "áing" + tail);
	} else {
		word_forms.push(word.substring(0, word.length - 1) + "ing" + tail);
	}

	if (word.endsWith("á")) {
		word_forms.push(word.substring(0, word.length - 1) + "áask" + tail);
	} else {
		word_forms.push(word.substring(0, word.length - 1) + "ask" + tail);
	}

	for (var i = 0; i < word_forms.length; i++) {
		word_forms[i] = word_forms[i].replaceAll("-", "");
	}

	return word_forms;
}
