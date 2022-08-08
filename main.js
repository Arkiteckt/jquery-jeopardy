
// querySelector the below are all jquery but we dont have to do it
// let querySelector = $('div');

// let createElement = $('<div>My Element</div>')

// $('body').append(createElement);

// $.on('click', () => {})

//---->PART 2: BUILD THE LAYOUT OF DOLLAR AMOUNTS
// Write code to build the grid of $100, $200, etc. This could be done in index.html, 
// but I'd recommend doing this through main.js using the jQuery equivalents of document.createElement and .appendChild.
// Also, add some style rules in styles.css to make things look reasonable.
//var data = ["A", "B", "C", "D","E", "F"]; //These is the last row from left to right and the one above the 5th cell on the right

let container = document.getElementById("grid");
for(let i of data){for(let j of i){
    let cell = document.createElement("div");
    cell.innerHTML = j;
    cell.className = "cell";
    container.appendChild(cell);
}}



//----->PART 3: GET A JEOPARDY QUESTION 
//Now, make it so that when one of your $100, $200, etc. buttons are pressed, a random question of that dollar value is displayed. 
//To do this, make a `fetch` request to `jeopardy.json`. 
//When one of the dollar amounts is clicked, you can filter the questions to only those with the correct dollar amount. 
//Then, choose one of those questions randomly. 
//It's okay that a different question is chosen each time even when you press the same button.
//Display this question on the DOM somewhere reasonable.
let readJeopardyData = async () => {
let rawJeopardyData = await fetch('jeopardy.json');
    let data = await rawJeopardyData.json();
    console.log(data); //runs the function//data[0] gets the first item in the array which is the same as what is in jeopardy.json
// }
   let groupedData = _.groupBy(data,'value')
   console.log(groupedData.$200); // to access all $200 value in array
}
readJeopardyData(); //runs the function

// Steps
// we set up a function readJeopardyData
// set up fetch to await
// run function to make sure you're getting back the full 50k array
// Parse by adding let data await = function
// Parse by adding console.log([data(0)]) //which gives you back 1st array in jeopardy.json



//----->PART 4: HANDLING A USER GUESS 

// At this point, it's time to handle a guess from the user. We'll need to add a 
// text input and a submit button to the page. This is where the user will enter their guess. 
// Do this in the HTML (or the JS if you like).
// Now, in the JS, add a click listener to the submit button. When the submit button is pressed, 
// identify whether the user entered guess matches the correct answer. 
// To know this, you'll probably need to have stored the selected question in a global variable somewhere.
// If the user is incorrect, display a message telling them so along with the correct answer.
// If the user is correct, dispaly a congrats message!

document.getElementById("userInput").style.height="200px";

const submitButton = document.getElementById("submitButton");

// the text that the button is initialized with
const initialText = submitButton.textContent;

// the text that the button contains after being clicked
const clickedText = "You are WRONG!.";

// we hoist the event listener callback function
// to prevent having duplicate listeners attached
function eventListener() {
  submitButton.textContent = clickedText;
}

//----->5. KEEPING SCORE

// In this step we'll add a score indicator.
// First, create a place to put the score in the HTML.
// Now, anytime a user gets a quetion right, add the score of that question (i.e.: $200) to the user's total score. 
// One challenge here will be converting the string `"$200"` to the number `200`.
