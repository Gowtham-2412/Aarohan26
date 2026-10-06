const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Find the start of the TEAM AAVISHKAR script
const startIdx = html.indexOf('<script>\n        // Particle TEAM AAVISHKAR Implementation');
if (startIdx !== -1) {
    const endIdx = html.indexOf('</script>', startIdx) + 9;
    html = html.substring(0, startIdx) + html.substring(endIdx);
    fs.writeFileSync('index.html', html);
    console.log('Removed particle script from index.html');
} else {
    console.log('Could not find particle script in index.html');
}
