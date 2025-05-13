

Go to https://nodejs.org/docs/latest/api/fs.html#file-system

We will be using CJS,  
and callback and sync APIs

i.e. `const fs = require('node:fs');`

---

#### 1. writeFile()
https://nodejs.org/docs/latest/api/fs.html#fswritefilefile-data-options-callback

```js
const fs = require('fs');

// SYNTAX, Mentioned in above link
// fs.writeFile('FileName', 'data'[,options], callback)

fs.writeFile("Hey.txt", "I am the best babe", function(err){
    if(err) 
        console.log(err);
    else 
        console.log("Done");
    })
// output : done in console + A new file named Het.txt will be created with the content
```

#### 2. appendFile
Same as above, it just adds new content
https://nodejs.org/docs/latest/api/fs.html#fsappendfilepath-data-options-callback

```js
const fs = require('fs');
fs.appendFile("Hey.txt", "Aadi is the best", function(err){
    if(err) 
        console.log(err);
    else 
        console.log("Done");
    })
```

#### 3. rename
```js
const fs = require('fs');
fs.rename("Hey.txt", "ILU.txt", function(err){
    if(err) 
        console.log(err);
    else 
        console.log("Done");
    })
```

#### 4. Creating a new copied file
```js
const fs = require('fs');
fs.copyFile("ILU.txt", "AAdiILU.txt", function(err){
    if(err) 
        console.log(err);
    else 
        console.log("Done");
})
```

#### 5. Deleting created file
```js
fs.unlink("AAdiILU.txt", function(err){
    if(err) 
        console.log(err);
    else 
        console.log("Done");
})
```

#### 6. Deleting Empty Folder
```js
fs.rmdir("FolderName/Path", function(err){
    if(err) 
        console.log(err);
    else 
        console.log("Done");
})
```

#### 6. Deleting Non Empty Folder
```js
fs.rmdir("FolderName/Path", {recursive:true}, function(err){
    if(err) 
        console.log(err);
    else 
        console.log("Done");
})
```



