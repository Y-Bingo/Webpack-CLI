import style from "../public/css/index.scss";

import avatar from "../public/img/avatar.jpg";

function createAvatar () {
    let img = new Image();
    img.src = avatar;
    img.classList.add( style.avatar2 );

    return img;
}

export default createAvatar;