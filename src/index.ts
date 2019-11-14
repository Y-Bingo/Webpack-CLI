import Header from "./header";
import Footer from "./footer";
import Body from "./body";


let root = document.querySelector( "#root" );

Header( root );
Body( root );
Footer( root );

console.log( "哈哈哈！" );


// 能有导入 easel.js 库，那么下面代码就应该编译成功，且运行没有任何报错
const canvas = document.getElementById( 'canvas' ) as HTMLCanvasElement;
const stage = new createjs.Stage( canvas );

console.log( stage );
