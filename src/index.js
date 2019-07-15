import avatar from "../public/img/avatar.jpg";

import style from "../public/css/index.scss";

import createAvatar from "./createAvatar";

// 创建图片节点
const img = new Image();
img.src = avatar;
img.classList.add( style.avatar );

let root = document.querySelector( "#root" );

root.append( createAvatar() );
root.append( img );