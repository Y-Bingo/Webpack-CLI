function Header () {
    let root = document.querySelector( "#root" );
    let header = document.createElement( "div" );
    root.append( header );
    header.innerHTML = "Header";
}

export default Header;