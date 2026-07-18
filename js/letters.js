var letters = ["a", "á", "b", "d", "e", "f", "g", "h", "i", "í", "j", "k", "l", "m", "n", "o", "ó", "p", "r", "s", "t", "u", "ú", "v", "y", "ý", "þ", "æ", "ø", "œ"];

for (var i = 0; i < letters.length; i++) {
	document.getElementById("letters").innerHTML += "<a href='letter.html?v=" + letters[i] + "'>" + letters[i] + "</a>";
}

if (!document.getElementById("searchbox")) {
	document.getElementById("letters").innerHTML += '<form action="search.html" method="GET"><input type="text" class="inputbox pfont" id="searchbox" name="v" autocomplete="off"><input type="submit" class="submit pfont" value="Search"></form>';
}

if (document.getElementById("letters2") != null) {
	for (var i = 0; i < letters.length; i++) {
		document.getElementById("letters2").innerHTML += "<a href='letter.html?v=" + letters[i] + "'>" + letters[i] + "</a>";
	}
}
