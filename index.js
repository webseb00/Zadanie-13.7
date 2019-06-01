var fs = require('fs');
var StatMode = require('stat-mode');
var colors = require('colors');

// fs.stat('./cat.jpg', function(err, stats) {
//     var statMode = new StatMode(stats);
//     console.log(statMode.toString());
// });

// fs.readFile('./text.txt','utf-8', function(err, data) {
//     console.log('Dane przed zapisem!'.blue);
//     console.log(data);
//     fs.appendFile('./text.txt', '\nZmiany wprowadzone po zapisie w text.txt!', function(err) {
//         if (err) throw err;
//         console.log('Zapisano!'.green);
//         fs.readFile('./text.txt', 'utf-8', function(err, data) {
//             console.log('Dane po zapisie!'.red);
//             console.log(data);
//         });
//     });
// });

// fs.writeFile('./test', 'newFile', function(err) {
//     if (err) throw err;
//     console.log('File has been created');
// });

fs.readdir('.', function(err, files) {
    console.log(files);
    fs.writeFile('folderContent', files, function(err) {
        if (err) throw err;
        console.log('Files has been added!'.blue);
    });
});