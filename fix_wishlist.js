const fs = require('fs');

// Read the corrupted file
let content = fs.readFileSync('wishlist.html', 'utf8');

console.log('Original length:', content.length);
console.log('First 100 chars:', content.substring(0, 100));

// The pattern is: each character is followed by a space
// And original spaces became multiple spaces
// Let's try a different approach - process character by character

let result = '';
let i = 0;
while (i < content.length) {
    let char = content[i];
    
    // If this is a space
    if (char === ' ') {
        // Check how many consecutive spaces
        let spaceCount = 0;
        while (i + spaceCount < content.length && content[i + spaceCount] === ' ') {
            spaceCount++;
        }
        
        // If multiple consecutive spaces, keep ONE space (this was originally a single space)
        // If single space after a character, skip it (it was added during corruption)
        if (spaceCount >= 2) {
            result += ' ';
            i += spaceCount;
        } else {
            // Single space - could be either:
            // 1. An added space after a character (corruption)
            // 2. An original space in the content
            // We need to check the previous character
            if (result.length > 0) {
                let lastChar = result[result.length - 1];
                // If last char was not a space and current is a single space, skip it
                if (lastChar !== ' ' && lastChar !== '\n' && lastChar !== '\t') {
                    i++; // Skip this space
                    continue;
                }
            }
            result += char;
            i++;
        }
    } else {
        // Not a space, keep the character
        result += char;
        i++;
    }
}

console.log('Fixed length:', result.length);
console.log('First 100 chars:', result.substring(0, 100));

// Write the fixed file
fs.writeFileSync('wishlist.html', result);
console.log('File fixed!');
