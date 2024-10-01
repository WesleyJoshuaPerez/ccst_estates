document.addEventListener('DOMContentLoaded', function() {
    // Function to handle the next and previous button clicks within a specific container
    function setupSlideControls(container) {
        let next = container.querySelector('.next');
        let prev = container.querySelector('.prev');
        let slide = container.querySelector('.slide');

        next.addEventListener('click', function() {
            let items = slide.querySelectorAll('.item');
            slide.appendChild(items[0]);
        });

        prev.addEventListener('click', function() {
            let items = slide.querySelectorAll('.item');
            slide.prepend(items[items.length - 1]);
        });
    }

    // Setup slide controls for each container
    let containers = document.querySelectorAll('.container1, .container2, .container3, .container4, .container5, .container6, .container7, .container8, .container9, .container10');
    containers.forEach(setupSlideControls);

    const buttons = document.querySelectorAll('#seeInfo');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            window.location.href = 'info_ccst-estates.html';
        });
    });
});