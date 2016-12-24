const inputBoxHtml = "<input id='search-box' type='text' style='position: fixed; top: 0; left: 50%; transform: translate(-50%); min-width: 400px; min-height: 50px;'>";

var frag = document.createDocumentFragment();
var tmpDiv = document.createElement("div");

var searchItems = Array.from(document.querySelectorAll(".searchable"));

tmpDiv.innerHTML = inputBoxHtml;

frag.appendChild(tmpDiv.firstChild);

function findAncestor(el, cls) {
	while ((el = el.parentElement) && !el.classList.contains(cls));
	return el;
}

document.onkeyup = function (e) {

	if (e.srcElement.id == "search-box") {

		var toShow = searchItems.filter(function (val) {
			return val.innerText.toLowerCase().indexOf(e.srcElement.value.toLowerCase()) > -1;
		});

		var toHide = searchItems.filter(function (val) {
			return val.innerText.toLowerCase().indexOf(e.srcElement.value.toLowerCase()) == -1;
		});

		toHide.forEach(function (y) {
			var hiddenContainerElement = findAncestor(y, "searchable-container");
			hiddenContainerElement.classList.add("hidden");
		});

		toShow.forEach(function (x) {
			var visibleContainerElement = findAncestor(x, "searchable-container");
			visibleContainerElement.classList.remove("hidden");
		});

	} else {
		if (e.key.toLowerCase() == "m") {
			document.body.insertBefore(frag, document.body.childNodes[0]);
			document.body.querySelector("#search-box").focus();
		}
	}
};