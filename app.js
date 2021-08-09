
//Load the DOM before executing any Javascript
document.addEventListener('DOMContentLoaded',() =>{



//pics for each card
const cardArray = [
    {name:'flower1', 
    img: 'src/week3HWJuly2021-scaffolded\img\alex-quezada-MMRRFV7aB2s-unsplash - Copy.jpg'},
    {name:'flower1', 
    img: 'sr /week3HWJuly2021-scaffolded\img\alex-quezada-MMRRFV7aB2s-unsplash - Copy.jpg'},
    
    {name:'flower2', 
    img: 'src/week3HWJuly2021-scaffolded\img\alex-quezada-TFTz5fKXOVU-unsplash.jpg'},
    {name:'flower2', 
    img: 'src/week3HWJuly2021-scaffolded\img\alex-quezada-TFTz5fKXOVU-unsplash.jpg'},

    {name:'flower3', 
    img: 'src/week3HWJuly2021-scaffolded\img\annie-spratt-fwKffp5QHiA-unsplash - Copy.jpg'},   
    {name:'flower3', 
    img:' src/week3HWJuly2021-scaffolded\img\annie-spratt-fwKffp5QHiA-unsplash - Copy.jpg'},

    {name:'flower4', 
    img:  'src/week3HWJuly2021-scaffolded\img\chelsea-audibert-g-BQHmwDzgs-unsplash - Copy.jpg'},
    {name:'flower4', 
    img: 'src/week3HWJuly2021-scaffolded\img\chelsea-audibert-g-BQHmwDzgs-unsplash - Copy.jpg'},

    {name:'flower5', 
    img: 'src/week3HWJuly2021-scaffolded\img\edwards-lee-i8TWN8jRaFQ-unsplash - Copy.jpg'},
    {name:'flower5', 
    img: 'src/week3HWJuly2021-scaffolded\img\edwards-lee-i8TWN8jRaFQ-unsplash - Copy.jpg'},

    {name:'flower6', 
    img: 'src/week3HWJuly2021-scaffolded\img\gary-ellis-Dv7RUqChJfY-unsplash - Copy.jpg'},
    {name:'flower6', 
    img: 'src/week3HWJuly2021-scaffolded\img\gary-ellis-Dv7RUqChJfY-unsplash - Copy.jpg'}

    // {name:'flower7', img: 'week3HWJuly2021-scaffolded\img\irina-zhuravleva-oLyhygWW9n0-unsplash - Copy.jpg'},
    // {name:'flower7', img: '.week3HWJuly2021-scaffolded\img\irina-zhuravleva-oLyhygWW9n0-unsplash - Copy.jpg'},
    // {name:'flower8', img: 'week3HWJuly2021-scaffolded\img\mads-eneqvist-uTGwBk8oJcI-unsplash - Copy.jpg'},
    // {name:'flower8', img: 'week3HWJuly2021-scaffolded\img\mads-eneqvist-uTGwBk8oJcI-unsplash.jpg'},
    // {name:'flower9', img: 'week3HWJuly2021-scaffolded\img\mel-pB-IJfg8jb8-unsplash.jpg'},
    // {name:'flower9', img: 'week3HWJuly2021-scaffolded\img\mel-pB-IJfg8jb8-unsplash.jpg'},
    // {name:'flower10', img: 'week3HWJuly2021-scaffolded\img\rock-earth-8_sWuFn8onY-unsplash (1).jpg'},
    // {name:'flower10', img: 'week3HWJuly2021-scaffolded\img\rock-earth-8_sWuFn8onY-unsplash (1).jpg'}
]
//sort card array using Math.random function

cardArray.sort(() => 0.3 - Math.random())
//use document query selector on the grid div to create board 
console.log(cardArray);
const grid = document.querySelector('.grid')
var cardsChosen = []
var cardsChosenID = []
var cardsWon= []
const resultDisplay = document.querySelector('#result')


//create function to create Memory game board
function createBoard() {

    //use FOR loop to loop over card array to create img Element and set attribute to link img for board
    for(let i = 0; i < cardArray.length; i++){
        //variable for each card
        const card = document.createElement('img')
   
        //for each card use set attribute to link each image to its path
        card.setAttribute('src', 'img\blacksand.jpg')

        //loop to give data id for 0 to /11/
        //we are giving the ‘card’ a data-id and then the data-id is a number to grab when flipping card. Or in other words 
        //‘i’. As each time we loop we are a singing a value to the data-id. So the first card will have 
        // data-Id of 0, the second card will have a data-id or 1 and so on :)
        card.setAttribute('data-id', i)

        //function to execute when card is clicked on and flipped
         card.addEventListener('click', flipCard)
        //put all cards(images with unique data-id's) in div using append Child
        grid.appendChild(card)
        }   
    }

    
    //are there matches?
    function checkForMatch(){
        var cards = document.querySelectorAll('img')//select all images
        const optionOneId = cardsChosenId[0]//assign first value in array
        const optionTwoId = cardsChosenId[1]//second value in array

        //use if loop to validate matching cards against array using the 
        //using 
        //if match found alert message displays
        //if not flip cards over
        if (cardsChosen[0] === cardsChosen[1]){
            alert("Great Match!!")
            cards[optionOneId].setAttrivute('src', 'week3HWJuly2021-scaffolded\img\whitesand.jpg')
            cards[optionTwoId].setAttrivute('src', 'week3HWJuly2021-scaffolded\img\whitesand.jpg')
            cardWon.push(cardChosen)
        }
         else
            {
                cards[optionOneId].setAttrivute('src', 'week3HWJuly2021-scaffolded\img\blacksand.jpg')
                cards[optionTwoId].setAttrivute('src', 'week3HWJuly2021-scaffolded\img\blacksand.jpg')
                alert("No Match!!")
        }
        //clear the cards that were just chosen as well as the id attached to those 2 cards for next selection or new board
        cardsChosen = [];
        cardsChosenId = [];
        // display user results by passing one point for each match how many times something is stored
        resultDisplay.textContent =  cardsWon.length
        //if counter of cards matched equals array length divided by 2 then we have matched all cards
        if (cardsWon.length === cardArray.length/2){
            resultDisplay.textContent = "Congratulations!  All Matches Made!!"
        }
    }

function flipCard(){
    //get id and make empty array to push card from card pics that matches card id
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)  
    cardsChosenId.push(cardId)  
    this.setAttribute('src', cardArray[cardId].img)//add image that matched card idto card that is picked
    if (cardsChosen.length === 2){ //checks for number of cards chosen
        setTimeout(checkForMatch, 400)//400 seconds to check for matches 
        
    }
   
}   
createBoard()

 })



