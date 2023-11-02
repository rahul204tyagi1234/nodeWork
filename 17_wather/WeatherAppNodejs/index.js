const http = require("http");
const fs = require("fs");
var requests = require("requests");

const homeFile = fs.readFileSync("home.html", "utf-8");
const replaceVal = (tempVal,orgVal)=>{
    let temprature = tempVal.replace("{%tempval%}",orgVal.main.temp)
    temprature = temprature.replace("{%tempvalmin%} ",orgVal.main.temp_min)
    temprature = temprature.replace("{%tempvalmax%}",orgVal.main. temp_max)
    temprature = temprature.replace("{%location%}",orgVal.name)
    temprature = temprature.replace("{%country%}",orgVal.sys.country);
    return temprature;
}
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    requests(
      "https://api.openweathermap.org/data/2.5/weather?q=Jalalabad&appid=7ccbafc50783578b8d942104e7381ada "
    )
      .on("data", function (chunk) {
        const objData = JSON.parse(chunk);
        const arrData = [objData];
        const realTimeData = arrData
        .map((val) =>replaceVal(homeFile,val))
        .join(""); 
        res.write(realTimeData);
        // console.log(realTimeData)
        // console.log(arrData[0].main.temp);
      })
      .on("end", function (err) {
        if (err) return console.log("connection closed due to errors", err);
        // console.log("end");
        res.end();
      });
  }
});
server.listen(8000, "127.0.0.1");
