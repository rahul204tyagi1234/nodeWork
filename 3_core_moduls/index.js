const names="Rahul";
console.log(names);
// creat a new data

const fs = require("fs");

fs.writeFileSync("read.txt","Welcome Rahul Tyagi")
fs.appendFileSync("read.txt","  how are you i am fine thank you :")

// Node.js includes an additional data type called Buffer.
// (not available in broser's javaScript)
// Buffer is mainly used to store binary data.
// While reading from a file or receiving packets over the network.
const buf_data = fs.readFileSync("read.txt");
console.log(buf_data);
original_data =buf_data.toString();
console.log(original_data);

/* <Buffer 57 65 6c 63 6f 6d 65 20 52 61 68 75 6c 20 54 79 61 67 69 20 20 68 6f 77 20 61 72 65 20 79 6f 75 20 69 20 61 6d 20 66 69 6e 65 20 74 68 61 6e 6b 20 79 ... 39 more bytes> */

// To rename the file
fs.renameSync("read.txt","readWrite.txt");


