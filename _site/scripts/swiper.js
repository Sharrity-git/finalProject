console.log('Script is running');


const sliderTabs = document.querySelectorAll(".slider-tab");
const sliderIndicator = document.querySelector(".slider-indicator");

// update the indicator height and width
const updatePagination = (tab, index) => {
    sliderIndicator.style.transform = `translateX(${tab.offsetLeft - 20}px)`;
    sliderIndicator.style.width = `${tab.getBoundingClientRect().width}px`;
};


// initialize swiper instance
const swiper = new Swiper(".slider-container", {
    effect: "slide,",
    speed: 1300,
    autoplay: { delay: 8000},
    navigation: {
        prevEl: "#slider-left",
        nextEl: "#slider-right"
    },
    on: {
        // update pagination on slide change
        slideChange: () => {
            const currentTabIndex = [...sliderTabs].indexOf(sliderTabs[swiper.activeIndex]);
            updatePagination(sliderTabs[swiper.activeIndex], currentTabIndex);
        }
    }
});

sliderTabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        swiper.slideTo(index);
        updatePagination(tab, index);
    });
});

updatePagination(sliderTabs[0], 0);
window.addEventListener("resize", () => updatePagination(sliderTabs[swiper.activeIndex], 0));


// accordion dropdown

// document.querySelector('.dropdown-toggle').addEventListener('click', function () {
//     const content = document.querySelector('.dropdown-content');
//     const arrow = this.querySelector('.dropdown-arrow');

//     console.log('dropdown-content:', content); // Should print the dropdown content element
//     console.log('Arrow:', arrow); // Should print the dropdown arrow element

//     // Toggle the "open" class to control visibility
//     content.classList.toggle('open');
  
//     // Rotate the arrow
//     arrow.style.transform = content.classList.contains('open') ? 'rotate(180deg)' : 'rotate(0deg)';
//   });

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.dropdown-toggle').addEventListener('click', function () {
        const content = document.querySelector('.dropdown-content');
        const arrow = this.querySelector('.dropdown-arrow');

        if (!content) {
            console.log("No dropdown content found");
            return; // Exit if dropdown content is not found
        }

        content.classList.toggle('open');

        // Rotate the arrow
        arrow.style.transform = content.classList.contains('open') ? 'rotate(180deg)' : 'rotate(0deg)';
    });
});

  