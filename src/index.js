// import "@babel/polyfill"            // 先进语法注入

new Promise( ( resolve, reject ) => {
    console.log( "promise" );
    resolve();
} );

let arr = [ 1, 12 ];
arr.map( ( i ) => {
    console.log( i );
} );

class A {

}