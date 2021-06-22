DOM Drills
Objective
The objective of this assignment is to practice the basics of vanilla JavaScript DOM manipulation. DOM manipulation takes time and practice to fully grasp, go through the following tasks to practice.

Tasks
Create an index.html file, styles.css file, and a scripts.js file.
Link the styles to index.html and link the scripts in the HEAD of the index.html, not in the body.
In the scripts.js file, using DOM manipulation, create a div with a class named "header-container".
Create a h1 element, then create a text node with the text "This is an h1". Append the text to the h1 then append the h1 to the div, then append the div to the body. Does it show up? If you put the script tag in the head of your html, then no, it did not show up. Thats what I wanted. Lets hop to google and search hint: "DOM content Loaded"
With the h1 now appearing on the page, lets practice creating multiple elements and having them appear. Create a h2 element, give it the text "This is an h2" and append it to the same div the h1 one is.
Repeat the following task for h3's through h6's.
Give each heading element a class name that represents what type of heading element it is. If it is an h1, the class should be "h1".
Go to styles.css and style each different heading element with a different color. Target the elements by class name.
Create and array of 8 colors, add an event listener that changes the color of a heading to a random color from the array when it is double clicked.
Add a button in the index.html, give this button text that says "Click to add new list item", give the button a class name of your choosing.
In the scripts.js file, write a function that inserts a list item, have the first item say "This is list item 1" and any subsequent list item should have the number incremented by 1.
Create an event listener that calls the new list item function every time the button is clicked.
Using the same random color function created above, apply an event listener that when a list item is clicked once, it changes the color of the font to one fo the 8 random colors.
Create a function that if a list item is double clicked it removes the list item from the DOM.