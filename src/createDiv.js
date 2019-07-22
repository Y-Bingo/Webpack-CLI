function createDiv( value ){
    var div = document.createElement("div");
    div.innerText = "item:" + value;

    return div;
}

export default createDiv;