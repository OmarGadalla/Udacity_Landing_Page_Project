# Udacity Landing Page Project
<!-- Add banner here -->

<!-- Describe your project in brief -->
This Project's main focus is on JavaScript.
A starter code was provided by Udacity, the objective was to make the page flexible and responsive for different screen sizes.
By flexible I mean, adding a flexible nav menu depending on the number of sections, using this nav menu to scroll to each section
while highlighting the active section in the menu at the same time, all using JavaScript.


# Table of contents

- [Project Title](#udacity-landing-page-project)
- [Table of contents](#table-of-contents)
- [Technologies & Software](#technologies-and-software)
- [Documentation](#documentation)
- [Usage](#usage)
- [Development](#development)
- [Footer](#footer)

# Technologies and Software

I used HTML/CSS & Javascript.
for code editing I use Visual Studio Code.

# Documentation

I depended mainly on W3schools & MDN web docs.
I didn't know how to make a dropdown list so I studied an approach on W3schools and implemented it for small screen displays.

Latest update on the 9th of October 2021:

I've made the page suitable for almost any device/ screen & tested it.
I've also:

1- refactored some of the code and enclosed the menu building steps in a function called "buildMenu"

2- Added an event listener to change the nav-bar do a dropdown menu without having to refresh the page,
for which I needed two new functions for deleting the existing nav-bar or dropdown div called "deleteList" &
"deleteDiv" respectivley, The media query did the job but I wanted to add a bit of challenge through the dropdown part

3- The suggested edit in the last review of using the active class on the active section is much better indeed, 
     don't know why I hard coded a style attribute :D

4- No errors showing in the console

5- There is only one problem that I've managed to get my hands on, if you switched from mobile view
to wider screens, (i.e. changing from dropdown to nav-bar) fast enough (literally spamming the toggle device toolbar button)
the code won't be able to delete the dropdown menu fast enough and you will end up with a dropdown menu with the nav-bar,
I couldn't fix this problem and though of just sticking with media query and removing the dropdown part, but no device can switch
the display from portrait to landscape as fast as spamming a mouse button so I kept everything in place. Probably it can be fixed by
making checking for the presence of a dropdown menu earlier in the code to make it faster, I'm still in the process of figuring that out,
but everything is working fine.

# Usage

The dropdown menu is responsive, the text content on the drop down button displays the heading of the section in display.
Also when the dropdown list is visible, the section in view is highlighted.
the only down side of this dropdown menu is it's size, it doesn't really stand out.

# Development
I wanted to use the virtual DOM feature to improve performance but the deadline was on me so I focused on the main objectives.
I also wanted to further stylize the drop down menu because it's a bit small and need to stand out more, but I wasn't able to do it 
for the same reason, so I apologize for any inconvenience.





# Footer
[(Back to top)](#table-of-contents)


Leave a star in GitHub, give a clap in Medium and share this guide if you found this helpful.



