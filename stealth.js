// Create a blank favicon
const blankFavicon = document.createElement('link');
blankFavicon.rel = 'icon';
blankFavicon.href = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="1" height="1"></svg>';

// Remove all existing favicons
function removeFavicons() {
    const links = document.querySelectorAll('link[rel*="icon"]');
    links.forEach(link => link.remove());
    document.head.appendChild(blankFavicon);
}

// Initial removal
removeFavicons();

// Watch for any dynamically added favicons
const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.addedNodes) {
            mutation.addedNodes.forEach((node) => {
                if (node.rel && node.rel.includes('icon')) {
                    node.remove();
                    document.head.appendChild(blankFavicon);
                }
            });
        }
    });
});

// Start observing the document head for changes
observer.observe(document.head, {
    childList: true,
    subtree: true
});

// Hide the specific logo
function hideLogo() {
    // Hide by exact image source
    const logoImages = document.querySelectorAll('img[src*="logo-dark-c96c407d175e36c81e236fcfdd682a0b.png"]');
    logoImages.forEach(img => {
        img.style.display = 'none';
    });
    
    // As a backup, also hide by class if the specific image is within an element with class h-full
    const fullHeightLogos = document.querySelectorAll('.h-full[src*="logo"]');
    fullHeightLogos.forEach(img => {
        img.style.display = 'none';
    });
}

// Initial logo hiding
hideLogo();

// Create an observer for dynamically added logos
const logoObserver = new MutationObserver((mutations) => {
    mutations.forEach(() => {
        hideLogo();
    });
});

// Observe the entire document for any changes that might add the logo
logoObserver.observe(document.body, {
    childList: true,
    subtree: true
});