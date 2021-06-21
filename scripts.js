// In the scripts.js file, using DOM manipulation, create a div with a class named "header-container".

const newDiv = document.createElement('div'); //create div
newDiv.className = 'header-container';  // names div
console.log(newDiv); //console log div name

// test // const newDivText = document.createTextNode('header-container'); //create div text
// test //newDiv.appendChild(newDivText);

const header1 = document.createElement('h1'); // Create header1
const header1Text = document.createTextNode('This is a h1'); // Create h1 text 
header1.appendChild(header1Text); //appending text to h1
newDiv.appendChild(header1); //appending h1 to div
header1.className = 'h1'; // give class name

// ---------------------------------- //
// #5

// ### Create a h2 element, give it the text "This is an h2" and append it to the same div the h1 one is.

const header2 = document.createElement('h2'); // Create header2
const header2Text = document.createTextNode('This is a h2'); // Create h2 text 
header2.appendChild(header2Text); //appending text to h2
newDiv.appendChild(header2); //appending h2 to div

header2.className = 'h2'; // give class name
console.log(header2);

// ---------------------------------- //
// #6 Repeat the following task for h3's through h6's

// h3

const header3 = document.createElement('h3'); // Create header3
const header3Text = document.createTextNode('This is a h3'); // Create h3 text 
header3.appendChild(header3Text); //appending text to h3
newDiv.appendChild(header3); //appending h3 to div

header3.className = 'h3'; // give class name


// h4

const header4 = document.createElement('h4'); // Create header4
const header4Text = document.createTextNode('This is a h4'); // Create h4 text 
header4.appendChild(header4Text); //appending text to h4
newDiv.appendChild(header4); //appending h4 to div

header4.className = 'h4'; // give class name

// h5

const header5 = document.createElement('h5'); // Create header5
const header5Text = document.createTextNode('This is a h5'); // Create h5 text 
header5.appendChild(header5Text); //appending text to h5
newDiv.appendChild(header5); //appending h5 to div

header5.className = 'h5'; // give class name

// h6

const header6 = document.createElement('h6'); // Create header6
const header6Text = document.createTextNode('This is a h6'); // Create h6 text 
header6.appendChild(header6Text); //appending text to h6
newDiv.appendChild(header6); //appending h6 to div

header6.className = 'h6'; // give class name

// ---------------------------------- //



/// button click event

//document.getElementById("myBtn").addEventListener("click", function() {
   // document.getElementById("demo").innerHTML = "Hello World";
  //});







// {{{{   Create array of colors here }}}}

var colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
		  '#E6B333', '#3366E6', '#999966'];

newDiv.addEventListener('dblclick', function(){

  //  console.log('test the double click!!!!');  // it works!
    newDiv.style.color = 'purple';
    header1.style.color = random_item(colorArray);
    header2.style.color = random_item(colorArray);
    header3.style.color = random_item(colorArray);
    header4.style.color = random_item(colorArray);
    header5.style.color = random_item(colorArray);
    header6.style.color = random_item(colorArray);



    // for (let i=0; i < 8; i++) {

        console.log(random_item(colorArray));

});

//Buttonclick.addEventListener




// random color function ////////////////////////////////

function random_item(colorArray){
return colorArray[Math.floor(Math.random()*colorArray.length)];
};

// var colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
// 		  '#E6B333', '#3366E6', '#999966'];

console.log(random_item(colorArray));



////////////////////////////////////  DOM Content Loaded

document.addEventListener('DOMContentLoaded', function() {

    document.body.appendChild(newDiv);
});

////////////////////////////////////


////////////////////////////////////  [[[[ Button Stuff  ]]]]]


//const ButtonTest = document.getElementById('poop');
//const ButtonTest = document.getElementsByClassName('myBtn');

//test 3


const myBtn = document.createElement('button'); // creating element of my button
const btnText = document.createTextNode('Click to add new list item'); // Create button text 
myBtn.id='pizza'; ///assigning ID
myBtn.appendChild(btnText);


console.log(myBtn);

//document.body.appendChild(myBtn); //appending button element to document body
newDiv.appendChild(myBtn);

myBtn.addEventListener('click', function(){  // launch function via click event on button ID
    
    console.log('Button Test here???');  // log if function worked
     });








////////////////////////////////////  [[[[ NEW PARAGRAPH TEXT  ]]]]]




////////////////////////////////////  [[[[ NEW PARAGRAPH TEXT  ]]]]]