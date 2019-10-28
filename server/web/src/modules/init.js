const fs = require("fs");
const rimraf = require("rimraf");
fs.readdir("files", (err, files) => {
    if (files) {
        for (var i = 0; i < files.length; i++) {
            rimraf(`files/${files[i]}`, (err) => {
                if (err) {
                    console.log("::::: RIMRAF INIT DELETE FILES ERROR :::::");
                    console.log("::::: init.js");
                    console.log(err);
                }
            });
        }
    } else {
        console.log("Error: No files directory detected, creating...");
        console.log(err);
    }
    if (err) {
        fs.mkdir("files", (err) => {
            if (err) {
                console.log("::::: ERROR CREATING files DIRECTORY :::::");
                console.log("::::: init.js");
                console.log(err);
            }
        });
    }
});
