const fs = require('fs');

fs.readFile('./text/text.txt', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
});

console.log('last line');


fs.writeFile('./text/text.txt', 'Different words', () => {
    console.log('file was written');
});

fs.writeFile('./text/text2.txt', 'Different file', () => {
    console.log('file was written');
});
if (!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('folder created');
    });
} else {
    fs.rmdir('./assets',(err) => {
        if (err) {
            console.log(err);
        }
        console.log('folder deleted');
    });
}

if (fs.existsSync('./text/deleteme.txt')) {
    fs.unlink('./text/deleteme.txt', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('file deleted');
    });
}