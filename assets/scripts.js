document.getElementById('menuBtn').addEventListener('click', function() {
    const mainMenu = document.getElementById('mainMenu');
    const menuBtn = document.getElementById('menuBtn');

    // Toggle the "open" class on the main menu
    mainMenu.classList.toggle('open');

    
    if (menuBtn.textContent === 'menu') {
        menuBtn.textContent = 'close';
    } else {
        menuBtn.textContent = 'menu';
    }
});

const form = document.getElementById('bookingForm');
if (form) {
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Your booking has been successfully submitted!');
        this.reset();
    });

    // Fetch location data from ipapi
    fetch('https://ipapi.co/json/')
    .then(response => response.json())
    .then(data => {
        // Fill the input field with the city and country
        const locationField = document.getElementById('input-location');
        locationField.value = `${data.city}, ${data.country_name}`;
    })
    .catch(error => {
        console.error('Error fetching location:', error);
    });
}

document.querySelectorAll('.accordionHeader').forEach(header => {
    header.addEventListener('click', function() {
        const parentAccordion = this.closest('.accordion'); // Get the parent .accordion
        const indicator = this.querySelector('.accorditionIndicator'); // Get the indicator span

        // Toggle the 'open' class on the parent accordion
        parentAccordion.classList.toggle('open');

        // Toggle the indicator text between "+" and "-"
        indicator.textContent = indicator.textContent.trim() === '+' ? '-' : '+';
    });
});




