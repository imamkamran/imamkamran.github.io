//JavaScript to for Menu hamburger for smaller screens
    function toggleMenu() {
        var menu = document.getElementById("menu");
        if (menu.classList.contains("show-menu")) {
            menu.classList.remove("show-menu");
        } else {
            menu.classList.add("show-menu");
        }
    }

// Javascript for carousel of services offered
    let currentSlide = 0;
    const slides = document.querySelectorAll('.carousel-slide');

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Show the first slide
    showSlide(currentSlide);

    // Change slide every 3 seconds
    setInterval(nextSlide, 3000);


// JavaScript for clicking on Menu to get the link for Portfolio pages

    // Function to toggle the dropdown on small screens
    function toggleDropdown(event) {
        event.preventDefault(); // Prevent the default action (navigation)
        var dropdown = event.currentTarget.parentElement;
        dropdown.classList.toggle("show-dropdown");
    }

// JavaScript to arrange skills in a circle

const techSkillsItems = document.querySelectorAll('#techSkills-list li');
const dsSkillsItems = document.querySelectorAll('#dsSkills-list li');

// Calculate and position each tech icon around the circle
const radiusTech = 200; // Radius of the circle
const centerXTech = 250; // Center X of the container
const centerYTech = 150; // Center Y of the container
const radiusDS = 200;
const centerXDS = 650; // Center X of the container
const centerYDS = 150; // Center Y of the container
const totalTechSkills = techSkillsItems.length;
const totalDsSkills = dsSkillsItems.length;

// Function to position items in a circle
function positionItemsInCircle(items, centerX, centerY, radius) {
    const totalItems = items.length;

    items.forEach((item, index) => {
        // Calculate the angle for each item
        const angle = (index / totalItems) * (2 * Math.PI); 
        // Calculate x and y positions
        const x = centerX + radius * Math.cos(angle) - item.offsetWidth / 2;
        const y = centerY + radius * Math.sin(angle) - item.offsetHeight / 2;

        // Set the position of the item
        item.style.position = 'absolute'; // Ensure items are positioned absolutely
        item.style.left = `${x}px`;
        item.style.top = `${y}px`;
    });
}

// Position the tech skills items
positionItemsInCircle(techSkillsItems, centerXTech, centerYTech, radiusTech);

// Position the Data Science skills items
positionItemsInCircle(dsSkillsItems, centerXDS, centerYDS, radiusDS);

// Show or hide the button based on scroll position
window.onscroll = function () {
    const backToTopButton = document.getElementById("backToTop");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.classList.add("show");
    } else {
        backToTopButton.classList.remove("show");
    }
};

// Smooth scroll to the top when the button is clicked
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}