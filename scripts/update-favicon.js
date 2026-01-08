const { Jimp } = require('jimp');
const path = require('path');
const fs = require('fs');

async function main() {
    const logoPath = path.join(__dirname, '../public/Logo321.png');
    const faviconPath = path.join(__dirname, '../public/favicon.ico');
    const tempPath = path.join(__dirname, 'temp.png');

    console.log('Reading Logo.png...');
    try {
        const image = await Jimp.read(logoPath);

        console.log('Resizing to 64x64...');
        image.resize({ w: 64, h: 64 });

        console.log('Saving as temp.png...');
        await image.write(tempPath);

        console.log('Renaming to favicon.ico...');
        fs.renameSync(tempPath, faviconPath);

        console.log('Favicon updated successfully!');
    } catch (error) {
        console.error('Error updating favicon:', error);
    }
}

main();
