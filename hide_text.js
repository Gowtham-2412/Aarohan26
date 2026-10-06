const fs = require('fs');
const path = 'assets/js/app.1746999829739.js';
let content = fs.readFileSync(path, 'utf8');

content = content.replace(/_innerText:"TEAM AAVISHKAR"/g, '_innerText:" "');
content = content.replace(/replaceRandomLetters\("TEAM AAVISHKAR"/g, 'replaceRandomLetters(" "');

fs.writeFileSync(path, content);
console.log("Hid WebGL TEAM AAVISHKAR text in app.1746999829739.js");
