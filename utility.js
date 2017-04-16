var http = require("http");
module.exports = {
    config: {
        BaseUrl: "http://api.erail.in",
        Key: "a26d308c-01f9-4bb8-9217-87063551af8c"
    },
    format: function (str) {
        var i;
        var updateStr = str;
        if (arguments.length == 1) return;
        var varCount = str.match(/{\d}/g).length;
        if (varCount !== arguments.length - 1) {
            console.log("Argument length not matched with indexs");
            return;
        }
        for (i = 0; i < varCount; i++) {
            updateStr = updateStr.replace("{" + i + "}", arguments[i + 1]);
        }
        return updateStr;
    },
    getData: function (url, callback) {
        http.get(url, function (response) {
            var body = "";
            response.on("data", function (d) {
                body += d;
            });

            response.on("end", function () {
                callback(body);
            });
        })
    }
}
