var items = [
    "Go to the market",
    "Clean the room",
    "Clean the laptop",
    "Buy books",
];

function attachItems(items) {
    var ul = document.querySelector(".item-list");
    for (var i = 0; i < items.length; i++) {
        var li = makeListItem(items[i]);
        ul.appendChild(li);
    }
}

function makeListItem(text) {
    var li = document.createElement("li");
    li.classList.add("collection-item");


    var a = document.createElement("a");
    a.href = "#";
    a.innerHTML = "x";
    a.onclick = function () {
        deleteItem(this);
    };

    var textNode = document.createTextNode(text);

    li.appendChild(a);
    li.appendChild(textNode);
    return li;

}

function clearUL() {
    var ul = document.querySelector(".item-list");
    ul.innerHTML = ""
}

function handleClickEvent() {
    var inpEl = document.querySelector("#new-item");
    var val = inpEl.value;

    if (val) {
        var present = items.indexOf(val)
        if (present !== -1) {

            document.querySelector(".msg").innerHTML = "duplicate element";
        }
        else {
            items.push(val);
            clearUL();
            attachItems(items);
            document.querySelector(".msg").innerHTML = "";
            inpEl.value = "";
        }




    }
    else {
        document.querySelector(".msg").innerHTML = "No new item found!"

    }

}

function deleteItem(anchor) {
    var item = anchor.parentNode.lastChild.textContent;
    var index = items.indexOf(item);
    if (index !== -1) {
        items.splice(index, 1);
        clearUL();
        attachItems(items);
    }
    console.log(index);
}

document.querySelector("#add-item").addEventListener("click", handleClickEvent);

attachItems(items);