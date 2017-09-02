var http = require("http"),
    fs = require("fs");

//var html = fs.readFileSync("./index.html");

console.log("1");
http.createServer(function(req, res) {
  //Asynchronous way
  console.log("2");
  fs.readFile("./index.html", function(err, html) {
    res.write(html);
    res.end();
    console.log("3");
  });
  console.log("4");
}).listen(8080);
console.log("5");
