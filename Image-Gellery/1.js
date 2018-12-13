function showPic(whichpic) {
	var source = whichpic.getAttribute("href");
	var place = document.getElementById("pic");
	place.setAttribute("src",source);
	var text = whichpic.getAttribute("title");
	var desc = document.getElementById("desc");
	desc.firstChild.nodeValue = text;
}

function countBodyChild() {
	var body_element = document.getElementsByTagName("body")[0];
	alert(body_element.nodeType);
}

/*window.onload = countBodyChild;*/