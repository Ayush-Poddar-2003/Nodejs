const fs = require('fs')

// fs.writeFile("Hey.txt", "I am the best babe", function(err){
//     if(err) 
//         console.log(err);
//     else 
//         console.log("Done");
// })

// fs.appendFile("Hey.txt", "Aadi is the best", function(err){
//     if(err) 
//         console.log(err);
//     else 
//         console.log("Done");
// })

// fs.rename("Hey.txt", "ILU.txt", function(err){
//     if(err) 
//         console.log(err);
//     else 
//         console.log("Done");
// })
// fs.copyFile("ILU.txt", "AAdiILU.txt", function(err){
//     if(err) 
//         console.log(err);
//     else 
//         console.log("Done");
// })
fs.unlink("AAdiILU.txt", function(err){
    if(err) 
        console.log(err);
    else 
        console.log("Done");
})