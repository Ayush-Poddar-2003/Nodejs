To start with project

    npm init -y

and if specific package   

    npm i packageName

This will add
- node_modules folder
- package-lock.json
- package.json : contains meta data

---
For eg    
https://www.npmjs.com/package/cat-me

    npm i cat-me

```js
// script.js

const catMe = require('cat-me')
// it will bring js code from
// node_modules -> cat-me -> index.js

// Read Documentation
console.log(catMe())
```