const inputBoxHtml = "<input id='search-box' type='text' style='position: fixed; top: 0; left: 50%; transform: translate(-50%); min-width: 400px; min-height: 50px;'>";

var frag = document.createDocumentFragment();
var tmpDiv = document.createElement("div");

var searchItems = document.querySelectorAll(".searchable");
//console.log(searchItems);

tmpDiv.innerHTML = inputBoxHtml;

frag.appendChild(tmpDiv.firstChild);

document.onkeyup = function(e) {
    //console.log(e);
    /*
    console.log(e.key);
    console.log(e.srcElement);
    */
    if (e.srcElement.id == "search-box") {
        //console.log(e.srcElement.value);
        for (var i = 0; i < searchItems.length; i++) {
            //console.clear;
            //console.log(searchItems[i].innerText.indexOf(e.srcElement.value));

            if (searchItems[i].innerText.toLowerCase().indexOf(e.srcElement.value.toLowerCase()) == -1) {
                //console.log(searchItems[i].innerText);

                if (searchItems[i].className.indexOf("hidden") == -1) {
                    searchItems[i].className += " hidden";
                }
            } else {
                searchItems[i].className = searchItems[i].className.replace("hidden", "");
            }
            //console.log(e.srcElement.value + ":    " + searchItems[i].className + "     " + searchItems[i].innerText.toLowerCase().indexOf(e.srcElement.value.toLowerCase()));
        }


    } else {
        if (e.key.toLowerCase() == "m") {
            document.body.insertBefore(frag, document.body.childNodes[0]);
        }
    }
};