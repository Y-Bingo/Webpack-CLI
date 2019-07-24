import _ from "lodash";
import $ from "jquery";

const dom = $( "div" ).html( _.join( [ "Magic", "Webpack" ], "---" ) );
$( "body" ).append( dom );
