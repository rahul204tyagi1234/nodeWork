// 1: Create a folder named it Rahul

const fs =require("fs");
fs.mkdir("rahul",(err)=>{
    console.log("Folder created");
})

// 2: Create a file in it named bio.txt and data into it

fs.writeFile("./rahul/bio.txt","my name is rahul tyagi",(err)=>{
    console.log("file created");

})
// 3: Add more data into the file at the end of the existing data

fs.appendFile("./rahul/bio.txt"," - i am fine ",(err)=>{
    console.log("file created");

});

// 4: Read the data without getting the buffer data at first .

fs.readFile("./rahul/bio.txt","utf-8",(err,data)=>{
    console.log(data);

});

// It is use for look error 

fs.readFile("./rahul/bio.txt","utf-8",(err,data)=>{
    console.log(err);

});
// file ending
// 5: Rename the file name to mybio.txt

fs.rename("./rahul/bio.txt","./rahul/mybio.txt",(err)=>{
    console.log("renamed file name");
});


// 6: now delete both the file and the folder
fs.rmdir("./rahul",(err)=>{
    console.log("deleted");
});
