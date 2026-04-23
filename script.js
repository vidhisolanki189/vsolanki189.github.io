// Add subtle drop shadow to header when scrolling
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    
    if (window.scrollY > 10) {
        header.style.boxShadow = '0 4px 10px rgba(0,0,0,0.1)';
    } else {
        header.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
    }
});
