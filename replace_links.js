const fs = require('fs');
const path = 'assets/js/app.1746999829739.js';
let content = fs.readFileSync(path, 'utf8');

content = content.replace(/HELLO@ACTIVETHEORY\.NET/g, 'ARHN@NITDGP.AC.IN');
content = content.replace(/hello@activetheory\.net/g, 'arhn@nitdgp.ac.in');
content = content.replace(/https:\/\/www\.instagram\.com\/activetheory/g, 'https://www.instagram.com/arhn.nitd?stkn=bTBoa2E5eTd4NnV0');
content = content.replace(/https:\/\/twitter\.com\/active_theory/g, 'https://x.com/aarohan_nitdgp');
content = content.replace(/https:\/\/www\.linkedin\.com\/company\/active-theory\/?/g, 'https://www.linkedin.com/company/aarohan-nit-durgapur/');

fs.writeFileSync(path, content);
console.log("Replaced links in app.1746999829739.js");
