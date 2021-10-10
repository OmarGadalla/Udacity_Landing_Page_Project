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
const pageSections = document.querySelectorAll('section'); // capturing all sections
const navBar = document.getElementById('navbar__list'); // capturing the nav ul
const screenWidth = window.matchMedia("(max-width: 400px)"); // will use it to adjust the nav menu for small screens

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

    /*--- creating a common attribute (data-nav) between sections and nav menu ---*/
    listElement.dataset.nav = section.dataset.nav;

    /*--- setting the text of the nav tab to the heading of the corresponding section ---*/
    let sectionHeading = section.querySelector('h2').textContent; 
    listElement.textContent = sectionHeading;

    return listElement;
}

/*--------------- A Function to create a drop down list for small screen displays ---------------*/
function createDropDown()
{
    /*--- main div container ---*/
    let dropDown = document.createElement('div');
    dropDown.setAttribute('class', 'dropdown');

    /*--- drop down button ---*/
    let dropDownButton = document.createElement('button');
    dropDownButton.setAttribute('class', 'dropdown__button');
    dropDownButton.textContent = 'Sections' + "▼";
    dropDown.appendChild(dropDownButton);

    /*--- content div ---*/
    let dropDownContent = document.createElement('div');
    dropDownContent.setAttribute('class', 'dropdown__content');
    dropDownContent.setAttribute('id', 'menu_2');
    dropDown.appendChild(dropDownContent);

    document.querySelector('header').appendChild(dropDown);

    /*--- returning dropDownContent (not dropDown) to be used to append lists to further on ---*/
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
        /*--- monitoring the start and end of each section ---*/
        let sectionTop = section.offsetTop;
        let sectionBottom = section.offsetHeight + sectionTop;
        if((scrollY+200) > sectionTop && sectionBottom > (scrollY+200))
        {
            section.setAttribute('class', 'your-active-class');
            activeSection = section.getAttribute('data-nav'); // capturing the data-nav attribute of the active section
            activeTab = this.document.querySelector(`[data-nav = "${activeSection}"]`); // capturing the tab that has the same data-nav value
            activeTab.setAttribute("style", "background-color: #333; color: white;");
            if (screenWidth.matches) 
            {   
                document.querySelector('button').textContent = activeSection + "▼"; // this line is for small screens
            }
            else
            {
                //Do nothing
            }
        }
        else
        {
            /*--- I had to repeat these steps(first 3 lines) because otherwise it gave an error on the last line ---*/
            section.setAttribute('class', 'your-active-class');
            activeSection = section.getAttribute('data-nav');
            section.removeAttribute('class');
            activeTab = this.document.querySelector(`[data-nav = "${activeSection}"]`);
            activeTab.removeAttribute('style');
        }
    }
    // console.log(scrollY);
}

/*----------- The function that builds the menu -----------*/
function buildMenu()
{
    if (screenWidth.matches) 
    {
        /*--- small screens ---*/
        let dropDownMain = createDropDown();
        for (let section of pageSections)
        {
            dropDownMain.appendChild(createListItem(section));
        }
        
    }
    else 
    {   
        /*--- big screens ---*/
        for (let section of pageSections)
        {
            navBar.appendChild(createListItem(section));
        }
    }
}




function scrollToSection(id)
{
    const sectionLinks = document.getElementById(id).children;
    let sectionNumber = 1;
    if (screenWidth.matches)
    {
        for (let link of sectionLinks)
        {   
            let targetSection = document.getElementById('section'+sectionNumber);
            link.addEventListener('click', function () {
                targetSection.scrollIntoView({block: "start", behavior: "smooth"});
            });
            sectionNumber++;
           
        }
    }
    else
    {
        for (let link of sectionLinks)
        {   
            let targetSection = document.getElementById('section'+sectionNumber);
            link.addEventListener('click', function () {
                targetSection.scrollIntoView({block: "center", behavior: "smooth"});
            });
            sectionNumber++;
           
        }
    }
}

function buildAllMenu()
{
    let dropDownMain = createDropDown();
    for (let section of pageSections)
    {
        dropDownMain.appendChild(createListItem(section));
    }

    scrollToSection('menu_2');

    for (let section of pageSections)
    {
        navBar.appendChild(createListItem(section));
    }

    scrollToSection('navbar__list');
    
}


// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 


buildAllMenu();


// Scroll to section on link click (moved inside the buildAllMenu function, left here for reference)

/**
 *  const sectionLinks = document.getElementsByClassName('menu__link');
 *  let sectionNumber = 1;
 *  for (let link of sectionLinks)
 *  {   
 *      let targetSection = document.getElementById('section'+sectionNumber);
 *      link.addEventListener('click', function () {
 *          targetSection.scrollIntoView({block: "center", behavior: "smooth"});
 *      });
 *      sectionNumber++;
 *      console.log(targetSection);
 *  }
 */

// Set sections as active
window.addEventListener('scroll', getActiveSection);

