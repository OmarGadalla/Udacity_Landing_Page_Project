/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const pageSections = document.querySelectorAll('section');
const navBar = document.getElementById('navbar__list');
const screenWidth = window.matchMedia("(max-width: 400px)");

/**
 * End Global Variables
 * Start Helper Functions
 * 
 */




/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


/*--------------- A Function to create li items from sections ---------------*/
function createListItem(section)
{
    let listElement = document.createElement('li');
    listElement.setAttribute("class", "menu__link");
    listElement.dataset.nav = section.dataset.nav;
    let sectionHeading = section.querySelector('h2').textContent;
    listElement.textContent = sectionHeading;
    return listElement;
}

function createDropDown()
{
    let dropDown = document.createElement('div');
    dropDown.setAttribute('class', 'dropdown');
    let dropDownButton = document.createElement('button');
    dropDownButton.setAttribute('class', 'dropdown__button');
    dropDownButton.textContent = 'Sections';
    dropDown.appendChild(dropDownButton);
    let dropDownContent = document.createElement('div');
    dropDownContent.setAttribute('class', 'dropdown__content');
    dropDown.appendChild(dropDownContent);
    document.querySelector('header').appendChild(dropDown);
    return dropDownContent;
  
}
 


   

// Add class 'active' to section when near top of viewport

/*--------------- A Function to get the active section and highlight the tabs accordingly ---------------*/
function getActiveSection()
{   
    let activeSection = '';
    let activeTab = '';
    for (let section of pageSections)
    {
        
        let sectionTop = section.offsetTop;
        let sectionBottom = section.offsetHeight + sectionTop;
        if((scrollY+200) > sectionTop && sectionBottom > (scrollY+200))
        {
            section.setAttribute('class', 'your-active-class');
            activeSection = section.getAttribute('data-nav');
            activeTab = this.document.querySelector(`[data-nav = "${activeSection}"]`);
            activeTab.setAttribute("style", "background-color: #333; color: white;");
            document.querySelector('button').textContent = activeSection + "▼";
        }
        else
        {
            section.setAttribute('class', 'your-active-class');
            activeSection = section.getAttribute('data-nav');
            section.removeAttribute('class');
            activeTab = this.document.querySelector(`[data-nav = "${activeSection}"]`);
            activeTab.removeAttribute('style');
        }
    }
}
// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 


    if (screenWidth.matches)
    {
        let dropDownMain = createDropDown();
        for (let section of pageSections)
        {
            dropDownMain.appendChild(createListItem(section));
        }
        
    }
    else
    {   for (let section of pageSections)
        {
            navBar.appendChild(createListItem(section));
        }
    }


// Scroll to section on link click
let sectionLinks = document.getElementsByClassName('menu__link');
let sectionNumber = 1;


for (let link of sectionLinks)
{   
    let targetSection = document.getElementById('section'+sectionNumber);
    link.addEventListener('click', function () {
        targetSection.scrollIntoView({block: "center", behavior: "smooth"});
    });
    sectionNumber++;
}

// Set sections as active
window.addEventListener('scroll', getActiveSection);