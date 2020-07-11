
const fs = require('fs');

fs.readFile('04.流式文件写入.js', (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  // console.log(data); // Buffer
  console.log(data.toString()); 
})