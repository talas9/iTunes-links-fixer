// content.js
//console.log('Value before:' + its.detect.itunesDetected);
//its.detect.itunesDetected=function(){return true;}
//console.log('Value after:' + its.detect.itunesDetected);

var elt = document.createElement("script");
elt.innerHTML = "its.detect.itunesDetected=function(){return true;}its.detect.userOverrideSetItunesInstalled();";
document.head.appendChild(elt);