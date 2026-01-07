const importAll = (r) => {
    // Sort keys naturally (so (2) comes before (10))
    const keys = r.keys().sort((a, b) =>
        a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' })
    );

    return keys.map((filename) => ({
        id: filename,
        image: r(filename),     // Revert to original for now
        original: r(filename),
        title: "Photography"
    }));
};

// Revert to single context until thumbnails are generated
const images = importAll(
    require.context('../../assets/gallery', false, /\.(png|jpe?g|svg)$/)
);

export const galleryData = images;
