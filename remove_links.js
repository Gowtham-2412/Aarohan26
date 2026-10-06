const fs = require('fs');
const path = 'assets/js/app.1746999829739.js';
let content = fs.readFileSync(path, 'utf8');

content = content.replace(/"Privacy Notice"/g, '" "');
content = content.replace(/"Newsletter Signup"/g, '" "');

fs.writeFileSync(path, content);
console.log("Removed texts in app.1746999829739.js");
