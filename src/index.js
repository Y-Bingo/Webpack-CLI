import avatar from "../public/img/avatar.jpg";

// 创建图片节点
const img = new Image();
img.src = avatar;
img.classList.add( "avatar" );

document.querySelector( "#root" ).append( img );