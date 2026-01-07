const { Jimp } = require('jimp');
const fs = require('fs');
const path = require('path');

const galleryDir = path.join(__dirname, '../src/assets/gallery');
const thumbnailsDir = path.join(galleryDir, 'thumbnails');

// Ensure thumbnails directory exists
if (!fs.existsSync(thumbnailsDir)) {
    fs.mkdirSync(thumbnailsDir, { recursive: true });
}

fs.readdir(galleryDir, (err, files) => {
    if (err) {
        return console.error('Unable to scan directory: ' + err);
    }

    files.forEach((file) => {
        const filePath = path.join(galleryDir, file);

        // Skip directories and non-image files if possible (basic check)
        if (fs.lstatSync(filePath).isDirectory()) return;
        if (!/\.(png|jpe?g|bmp|tiff|gif)$/i.test(file)) return;

        const thumbnailPath = path.join(thumbnailsDir, file);

        if (fs.existsSync(thumbnailPath)) {
            console.log(`Skipping ${file}, thumbnail already exists.`);
            return;
        }

        console.log(`Processing ${file}...`);

        Jimp.read(filePath)
            .then((image) => {
                // Resize to height 400px, maintain aspect ratio
                // Quality 60 for thumbnails is usually enough
                return image
                    .cover(400, 400)
                    .quality(60)
                    .write(thumbnailPath);
            })
            .then(() => {
                console.log(`Generated thumbnail for ${file}`);
            })
            .catch((err) => {
                console.error(`Error processing ${file}:`, err);
            });
    });
});
