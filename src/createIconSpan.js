
function createIconSpan ( font ) {
    let span = document.createElement( "span" );
    span.classList.add( "iconfont" );
    span.innerHTML = font;

    return span;
}

export default createIconSpan;