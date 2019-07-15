function Footer () {
    let root = document.querySelector( "#root" );
    let footer = document.createElement( "div" );
    root.append( footer );
    footer.innerHTML = "Footer";
}

export default Footer;