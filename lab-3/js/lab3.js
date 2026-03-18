const tabs = document.querySelectorAll('[role="tab"] a');
const panels = document.querySelectorAll('[role="tabpanel"]');

tabs.forEach(function(tab) {

    tab.addEventListener("click", function(event) {

        event.preventDefault();

        panels.forEach(function(panel) {
            panel.classList.remove("active");
        });

        tabs.forEach(function(t) {
            t.classList.remove("active");
        });

        tab.classList.add("active");

        const target = tab.getAttribute("href");
        document.querySelector(target).classList.add("active");
    });

});

tabs[0].classList.add("active");
panels[0].classList.add("active");