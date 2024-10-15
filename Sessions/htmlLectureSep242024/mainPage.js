//JavaScript to for Menu hamburger for smaller screens
    function toggleMenu() {
        var menu = document.getElementById("menu");
        if (menu.classList.contains("show-menu")) {
            menu.classList.remove("show-menu");
        } else {
            menu.classList.add("show-menu");
        }
    }
//JavaScript to for changing welcome message for smaller screens

    function updateHeading() {
        var heading = document.querySelector("h1");
        if (window.innerWidth < 500) {
            heading.textContent = "Welcome"; // Change to "Welcome"
        } else {
            heading.textContent = "Welcome to my page!"; // Revert back to original when screen size increases
        }
    }
    // Run the function on load and on resize
    window.onload = updateHeading;
    window.onresize = updateHeading;

// JavaScript for clicking on Menu to get the link for Portfolio pages

    // Function to toggle the dropdown on small screens
    function toggleDropdown(event) {
        event.preventDefault(); // Prevent the default action (navigation)
        var dropdown = event.currentTarget.parentElement;
        dropdown.classList.toggle("show-dropdown");
    }

// JavaScript to arrange skills in a circle

    const techSkillsItems = document.querySelectorAll('#techSkills-list li');
    const engSkillsItems = document.querySelectorAll('#engSkills-list li');
    const dsSkillsItems = document.querySelectorAll('#dsSkills-list li');

    // Calculate and position each tech icon around the circle
    const radiusTech = 200; // Radius of the circle
    const centerXTech = 150; // Center X of the container
    const centerYTech = 150; // Center Y of the container
    const radiusEng = 220;
    const centerXEng = 450; // Center X of the container
    const centerYEng = 150; // Center Y of the container
    const radiusDS = 200;
    const centerXDS = 650; // Center X of the container
    const centerYDS = 150; // Center Y of the container
    const totalTechSkills = techSkillsItems.length;
    const totalEngSkills = engSkillsItems.length;
    const totalDsSkills = dsSkillsItems.length;

    techSkillsItems.forEach((item, index) => {
        const angle = (index / totalTechSkills) * (2 * Math.PI); // Calculate the angle for each item
        const xTech = centerXTech + radiusTech * Math.cos(angle) - item.offsetWidth / 2;
        const yTech = centerYTech + radiusTech * Math.sin(angle) - item.offsetHeight / 2;

        item.style.left = `${xTech}px`;
        item.style.top = `${yTech}px`;
    });

    engSkillsItems.forEach((item, index) => {
        const angle = (index / totalEngSkills) * (2 * Math.PI); // Calculate the angle for each item
        const xEng = centerXEng + radiusEng * Math.cos(angle) - item.offsetWidth / 2;
        const yEng = centerYEng + radiusEng * Math.sin(angle) - item.offsetHeight / 2;

        item.style.left = `${xEng}px`;
        item.style.top = `${yEng}px`;
    });

    dsSkillsItems.forEach((item, index) => {
        const angle = (index / totalDsSkills) * (2 * Math.PI); // Calculate the angle for each item
        const xDS = centerXDS + radiusDS * Math.cos(angle) - item.offsetWidth / 2;
        const yDS = centerYDS + radiusDS * Math.sin(angle) - item.offsetHeight / 2;

        item.style.left = `${xDS}px`;
        item.style.top = `${yDS}px`;
    });