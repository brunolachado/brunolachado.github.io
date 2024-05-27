document.addEventListener("DOMContentLoaded", function () {
    const aboutContainer = document.querySelector('#about-container');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                aboutContainer.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once it's visible
            }
        });
    }, {
        threshold: 0.1 // Adjust this value to determine when the animation should trigger
    });

    observer.observe(aboutContainer);
});
