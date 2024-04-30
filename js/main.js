
//This code adds interactivity to a gallery of radio buttons, adjusts the layout of the gallery based on the window size

// Select all radio buttons in the gallery and add a click event listener to each one
document.querySelectorAll('#gallery input').forEach(radio => {
    radio.onclick = e => {
      if (!document.startViewTransition) return
      
      e.preventDefault()
      
      // Define a function to mutate the radio button state
      function mutate() {
        e.target.checked = true
        e.target.parentNode.style.zIndex = null
      }
      
      // Set the z-index of the radio button's parent node to 2
      e.target.parentNode.style.zIndex = 2
      
      // If the startViewTransition function exists, call it with the mutate function as a callback
      document.startViewTransition
        ? document.startViewTransition(() => mutate())
        : mutate()
    }
  })
  
  // Define a function to flip the gallery layout based on the window size
  function flipGallery() {
    function mutate(vertical = false) {
      // If the startViewTransition function exists, call it with the mutate function as a callback
      if (document.startViewTransition)
        document.startViewTransition(() =>
          vertical
            ? gallery.classList.add('portrait')
            : gallery.classList.remove('portrait'))
    }
    // Call the mutate function with the window.innerWidth as a parameter
    mutate(window.innerWidth <= 768)
  }
  // Add a resize event listener to the window object
  window.onresize = () => {
    clearTimeout(window.resizeEndTimer)
    window.resizeEndTimer = setTimeout(flipGallery, 100)
  }


// This code handles form submission for a contact form

// Get the contact form element and create a new paragraph element to display the form message
const contactForm = document.getElementById('contact-form');
const formMessage = document.createElement('p');

// Add a submit event listener to the contact form
contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const surname = formData.get('surname');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const help = formData.get('help');
    const message = formData.get('message');
    
    // Display the success message
    formMessage.textContent = 'Your message has been sent.';
    formMessage.style.color = 'green';
    contactForm.appendChild(formMessage);
});