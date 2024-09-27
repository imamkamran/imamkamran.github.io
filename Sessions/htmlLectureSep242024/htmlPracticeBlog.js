let currentIndex = 0; // Index of the current image
const images = document.querySelectorAll('.carousel-image'); // Get all images

// Show the first image
images[currentIndex].classList.add('active');

// Function to change the image
function changeImage() {
    images[currentIndex].classList.remove('active'); // Hide current image

    currentIndex++; // Move to the next image

    // Reset index if out of bounds
    if (currentIndex >= images.length) {
        currentIndex = 0; // Go to first image
    }

    images[currentIndex].classList.add('active'); // Show new current image
}

// Change image every 2 seconds (2000 milliseconds)
setInterval(changeImage, 2000);
