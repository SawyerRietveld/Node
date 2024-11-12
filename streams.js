const fs = require('fs');

const readStream = fs.createReadStream('./text/text3.txt', { encoding: 'utf8'});
const writeStream = fs.createWriteStream('./text/text4.txt');

// readStream.on('data', (chunk) => {
//     console.log('---- NEW CHUNK ----');
//     console.log(chunk);
//     writeStream.write('\nNEW CHUNK\n')
//     writeStream.write(chunk);
// });

readStream.pipe(writeStream);