import createDiv from "./createDiv.js";

import "../public/css/index.css";

let num = 0;
let btn = document.createElement("button");
// btn.type = "button";
btn.innerHTML = "创建div";
btn.onclick = function(){
    document.body.appendChild( createDiv(num++) );
}
document.body.appendChild( btn );