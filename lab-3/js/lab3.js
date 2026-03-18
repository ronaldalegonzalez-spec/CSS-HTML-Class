// Select the elements
const tabs = document.querySelectorAll('[role="tab"] a');
// Select the 3 content blocks
const panels = document.querySelectorAll('[role="tabpanel"]');
// Go through each tab
tabs.forEach(function(tab) {
    // Add an eventlistener for when a click is made
    tab.addEventListener("click", function(event) {

        event.preventDefault();
    //Hide all panels
        panels.forEach(function(panel) {
            panel.classList.remove("active");
        });
        // Remove active from all tabs
        tabs.forEach(function(t) {
            t.classList.remove("active");
        });
        // Activate the clicked tab
        tab.classList.add("active");
        // Find which panel to show
        const target = tab.getAttribute("href");
        document.querySelector(target).classList.add("active");//Show the panel
    });

});
//Activate the first tab when the page loads
tabs[0].classList.add("active");
panels[0].classList.add("active");

// https://developer.mozilla.org/en-US/docs/Web/API/Element/classList