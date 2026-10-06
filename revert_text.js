const fs = require('fs');
const path = 'assets/js/app.1746999829739.js';
let content = fs.readFileSync(path, 'utf8');

content = content.replace(/_this\.nyc\.setText\(replaceRandomLetters\(" ",1\*glitch\)\)/g, '_this.nyc.setText(replaceRandomLetters("TEAM AAVISHKAR",1*glitch))');

fs.writeFileSync(path, content);
console.log("Restored TEAM AAVISHKAR in app.1746999829739.js");
