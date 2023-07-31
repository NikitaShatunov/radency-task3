export const deleteAllNotes = () => {
    const fs = require('fs'); 
    fs.writeFileSync('src/data.json', '[]');
}