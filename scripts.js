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
// console.log(header2);

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

//assign className to all headers
header1.className = 'dblclickHeaders';
header2.className = 'dblclickHeaders';
header3.className = 'dblclickHeaders';
header4.className = 'dblclickHeaders';
header5.className = 'dblclickHeaders';
header6.className = 'dblclickHeaders';

//not sure if we need this
const allHeaders = [ header1, header2, header3, header4, header5, header6];



// {{{{   Create array of colors here }}}}

var colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
		  '#E6B333', '#3366E6', '#999966'];


//const allHeaders = document.getElementsByClassName('dblclickHeaders'); /// Q: where does "dblclickHeaders" come from or get set? 

//console.log(allHeaders[1]); //console allheaders


/// Assign color change to headers on click

for (let i = 0; i < allHeaders.length; i++) {

  allHeaders[i].addEventListener('dblclick', function(){
      allHeaders[i].style.color =random_item(colorArray);
  });

}




/// EDIT 6/21 to create header array

// newDiv.addEventListener('dblclick', function(){

//   //  console.log('test the double click!!!!');  // it works!
//     newDiv.style.color = 'purple';
//     header1.style.color = random_item(colorArray);
//     header2.style.color = random_item(colorArray);
//     header3.style.color = random_item(colorArray);
//     header4.style.color = random_item(colorArray);
//     header5.style.color = random_item(colorArray);
//     header6.style.color = random_item(colorArray);
//         console.log(random_item(colorArray));

// });




// random color function ////////////////////////////////

function random_item(colorArray){
return colorArray[Math.floor(Math.random()*colorArray.length)];
};


console.log(random_item(colorArray));



////////////////////////////////////  DOM Content Loaded

document.addEventListener('DOMContentLoaded', function() {

    document.body.appendChild(newDiv);
});

////////////////////////////////////


////////////////////////////////////  [[[[ Button Stuff  ]]]]]



const myBtn = document.createElement('button'); // creating element of my button
const btnText = document.createTextNode('Click to add new list item'); // Create button text 
myBtn.id='pizza'; ///assigning ID
myBtn.appendChild(btnText);
//console.log(myBtn);

//document.body.appendChild(myBtn); //appending button element to document body
newDiv.appendChild(myBtn);

myBtn.addEventListener('click', function(){  // launch function via click event on button ID
    
    //console.log('Button Test here???');  // log if function worked
     });






////////////////////////////////////  [[[[ Creating Unordered List  ]]]]]



const myUnorderedList = document.createElement('ul');
newDiv.appendChild(myUnorderedList);  ///append UL to newDiv

////////////////////////////////////  [[[[ CLICK === NEW li TEXT  ]]]]]


let liCounter = 1; 

myBtn.addEventListener('click', function(){

  const li = document.createElement('li');
  li.textContent = 'I am a new li added to the page, welcome li #' +liCounter;
  myUnorderedList.appendChild(li); //li appended to myUL
  console.log('I am a new li added to the page, welcome li #: ' +liCounter);
  liCounter += 1;
  // console.log(myUnorderedList[2]);
  
var list = document.getElementsByTagName('li');

////  Trying to change li text color via click (it works))
// #13

////////////////////////////////////  [[[[ li Color Change on Click  ]]]]]

for (let i = 0; i < list.length; i++) {
  list[i].addEventListener('click', function(){
    list[i].style.color =random_item(colorArray);
  });
  
  // console.log('this is a the list: ');
  // console.log(list);

  // console.log('this is a the list @ i: ');
  // console.log(list[i]);

  }


  ///// Need:  add dblclick removal here!
  for (let i = 0; i < list.length; i++) {
    list[i].addEventListener('dblclick', function(){
      myUnorderedList.removeChild(list[i]);
    });
    
    
  
    }




})


//console.log(li);


////////////////////////////////////  





// myUnorderedList.addEventListener('click', function(){

//   li.style.color =random_item(colorArray);
// })

