import React, { useState, useEffect, useCallback } from 'react';
import './gallery.css';
import { galleryData } from './Data';

const Gallery = () => {
    // State to track the currently selected image index for lightbox
    const [selectedIndex, setSelectedIndex] = useState(null);

    // State for pagination: show 9 items initially
    const [itemsToShow, setItemsToShow] = useState(9);

    // Function to load more items
    const handleLoadMore = () => {
        setItemsToShow(prev => prev + 9);
    };

    // Function to open lightbox
    const openLightbox = (index) => {
        setSelectedIndex(index);
        document.body.style.overflow = 'hidden'; // Disable scroll when modal is open
    };

    // Function to close lightbox
    const closeLightbox = () => {
        setSelectedIndex(null);
        document.body.style.overflow = 'auto'; // Re-enable scroll
    };

    // Navigate to previous image
    const prevImage = useCallback((e) => {
        if (e) e.stopPropagation();
        setSelectedIndex((prev) => (prev === 0 ? galleryData.length - 1 : prev - 1));
    }, []);

    // Navigate to next image
    const nextImage = useCallback((e) => {
        if (e) e.stopPropagation();
        setSelectedIndex((prev) => (prev === galleryData.length - 1 ? 0 : prev + 1));
    }, []);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (selectedIndex === null) return;

            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') prevImage();
            if (e.key === 'ArrowRight') nextImage();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedIndex, prevImage, nextImage]);

    // Prevent right click on images
    const handleContextMenu = (e) => {
        e.preventDefault();
    };

    return (
        <section className="gallery section" id="gallery">
            <h2 className="section__title" style={{ textAlign: "center", margin: "0 auto" }}>Gallery</h2>
            <span className="section__subtitle" style={{ marginBottom: "0.5rem" }}>A collection of my photography</span>
            <span className="section__subtitle">
                All photos were taken by Samsung Galaxy S23 Ultra and Lumix G100 ヅ
            </span>

            <div className="gallery__container container">
                {galleryData.slice(0, itemsToShow).map((item, index) => {
                    return (
                        <div
                            className="gallery__card"
                            key={index}
                            onClick={() => openLightbox(index)}
                        >
                            <img
                                src={item.image}
                                alt={`narongsak's photography ${index + 1}`}
                                className="gallery__img"
                                loading="lazy" // Lazy loading for performance
                                onContextMenu={handleContextMenu} // Disable right click
                            />
                            <div className="gallery__mask"></div> {/* Aesthetics overlay */}
                        </div>
                    );
                })}
            </div>

            {/* View More Button */}
            {itemsToShow < galleryData.length && (
                <div className="gallery__button-container">
                    <button onClick={handleLoadMore} className="gallery__button">
                        View More
                    </button>
                </div>
            )}

            {/* Lightbox Modal */}
            <div className={`lightbox ${selectedIndex !== null ? 'active' : ''}`} onClick={closeLightbox}>
                {/* Close Button */}
                <i className="uil uil-times lightbox__close" onClick={closeLightbox}></i>

                {/* Navigation Buttons */}
                <div className="lightbox__prev" onClick={prevImage}>
                    <i className="uil uil-angle-left-b"></i>
                </div>
                <div className="lightbox__next" onClick={nextImage}>
                    <i className="uil uil-angle-right-b"></i>
                </div>

                {/* Image Container */}
                <div className="lightbox__content" onClick={(e) => e.stopPropagation()}>
                    {selectedIndex !== null && (
                        <img
                            src={galleryData[selectedIndex].original}
                            alt="Full size"
                            className="lightbox__img"
                            onContextMenu={handleContextMenu}
                        />
                    )}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
