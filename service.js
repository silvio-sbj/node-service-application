var Service = require("node-windows").Service;
var path = require("path");

var svc = new Service({
  name: "node-service-application",
  description: "An API NodeJS example",
  script: path.join(__dirname, "index.js"),
});

svc.on("install", () => {
  if (svc.exists) {
    console.log("Install complete.");
    svc.start();
  }
});

svc.install();

/*
//Uninstall service --
svc.on("uninstall", function () {
  if (!svc.exists) console.log("Uninstall complete.");
});

svc.uninstall();
*/
