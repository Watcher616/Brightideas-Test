function renderDesign1() {
    document.getElementById("design1").style.display = "block";
    document.getElementById("design2").style.display = "none";
  }
  
  function renderDesign2() {
    document.getElementById("design1").style.display = "none";
    document.getElementById("design2").style.display = "block";
  }
  


  // Get the description paragraph and circle elements
const descParagraph = document.querySelector('.desc-paragraph');
const lightCircle = document.getElementById('light');
const blueCircle = document.getElementById('blue');
const darkCircle = document.getElementById('dark');

// Set initial description
const message = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat inventore laboriosam ipsum! Possimus, fugiat id quas dicta accusantium officia quae, labore veritatis perspiciatis nesciunt pariatur velit esse repudiandae eius? Iure!"
descParagraph.textContent = message

// Event listeners for each circle's hover state
lightCircle.addEventListener('mouseover', () => {
  descParagraph.textContent = "Web development is a rapidly evolving field, and developers are always working with the latest technologies and tools. There's a constant stream of new frameworks, libraries, and best practices to learn and implement.";
});

lightCircle.addEventListener('mouseout', () => {
  descParagraph.textContent = message;
});

blueCircle.addEventListener('mouseover', () => {
  descParagraph.textContent = "Building websites and web applications allows developers to showcase their creativity. They have the freedom to design visually appealing and interactive user interfaces, making the web come alive with their ideas.";
});

blueCircle.addEventListener('mouseout', () => {
  descParagraph.textContent = message;
});

darkCircle.addEventListener('mouseover', () => {
  descParagraph.textContent = "Web development is all about creating products that cater to user needs and preferences. Seeing users engage with and appreciate the websites or apps they've built can be incredibly gratifying";
});

darkCircle.addEventListener('mouseout', () => {
  descParagraph.textContent = message;
});



const acc = document.getElementsByClassName("accordion-button_");
const accContents = document.getElementsByClassName("accordion-content");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    // Check if the clicked accordion is already active
    const isActive = this.parentNode.nextElementSibling.style.display === "block";

    // Hide all accordion contents
    for (let j = 0; j < accContents.length; j++) {
      accContents[j].style.display = "none";
    }

    // Reset all accordion icons
    const icons = document.getElementsByClassName("fa");
    for (let k = 0; k < icons.length; k++) {
      icons[k].classList.remove("fa-chevron-up");
      icons[k].classList.add("fa-chevron-down");
    }

    // Toggle the display of the clicked accordion content
    const panel = this.parentNode.nextElementSibling;
    if (!isActive) {
      panel.style.display = "block";
      // Change the icon
      const icon = this.getElementsByTagName("i")[0];
      icon.classList.remove("fa-chevron-down");
      icon.classList.add("fa-chevron-up");
    }
  });
}


const design1 = document.getElementById("design1");
const design2 = document.getElementById("design2");
const design2Link = document.getElementById("design-2");

// Function to toggle the display of design sections
function toggleDesignSections() {
  design1.style.display = design1.style.display === "none" ? "block" : "none";
  design2.style.display = design2.style.display === "none" ? "flex" : "none";
}

// Event listener for the anchor tag with id "design-2"
design2Link.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent the default behavior of the anchor tag
  toggleDesignSections();
});
