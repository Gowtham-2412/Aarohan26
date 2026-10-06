const fs = require('fs');
const path = 'assets/js/app.1746999829739.js';
let content = fs.readFileSync(path, 'utf8');

content = content.replace(/_innerText:"LAX"/g, '_innerText:" "');
content = content.replace(/replaceRandomLetters\("LAX"/g, 'replaceRandomLetters(" "');
content = content.replace(/"Los Angeles"/g, '" "');

content = content.replace(/_innerText:"NYC"/g, '_innerText:"TEAM AAVISHKAR"');
content = content.replace(/replaceRandomLetters\("NYC"/g, 'replaceRandomLetters("TEAM AAVISHKAR"');
content = content.replace(/"New York"/g, '"TEAM AAVISHKAR"');

content = content.replace(/_innerText:"AMS"/g, '_innerText:" "');
content = content.replace(/replaceRandomLetters\("AMS"/g, 'replaceRandomLetters(" "');
content = content.replace(/"Amsterdam"/g, '" "');

content = content.replace(/"assets\/images\/ui\/arrow\.png"/g, '"assets/images/ui/empty.png"');

fs.writeFileSync(path, content);
console.log("Replaced LAX, NYC, AMS, and arrows in app.1746999829739.js");
