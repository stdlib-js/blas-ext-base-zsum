"use strict";var i=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var u=i(function(O,t){
var y=require('@stdlib/blas-ext-base-zsumkbn/dist').ndarray;function f(e,r,a,d){return y(e,r,a,d)}t.exports=f
});var v=i(function(g,n){
var p=require('@stdlib/strided-base-stride2offset/dist'),z=u();function x(e,r,a){return z(e,r,a,p(e,a))}n.exports=x
});var m=i(function(h,o){
var j=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=v(),l=u();j(q,"ndarray",l);o.exports=q
});var R=require("path").join,_=require('@stdlib/utils-try-require/dist'),b=require('@stdlib/assert-is-error/dist'),k=m(),s,c=_(R(__dirname,"./native.js"));b(c)?s=k:s=c;module.exports=s;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
