
//Load the DOM before executing any Javascript
document.addEventListener('DOMContentLoaded',() =>{



//pics for each card
const pictArray = [
    {name:'flower1', 
    img: 'src/week3HWJuly2021-scaffolded/img/alex-quezada-MMRRFV7aB2s-unsplash - Copy.jpg'},
    {name:'flower1', 
    img: 'sr /week3HWJuly2021-scaffolded/img/alex-quezada-MMRRFV7aB2s-unsplash - Copy.jpg'},
    
    {name:'flower2', 
    img: 'src/week3HWJuly2021-scaffolded/img/alex-quezada-TFTz5fKXOVU-unsplash.jpg'},
    {name:'flower2', 
    img: 'src/week3HWJuly2021-scaffolded/img/alex-quezada-TFTz5fKXOVU-unsplash.jpg'},

    {name:'flower3', 
    img: 'src/week3HWJuly2021-scaffolded/img/annie-spratt-fwKffp5QHiA-unsplash - Copy.jpg'},   
    {name:'flower3', 
    img:' src/week3HWJuly2021-scaffolded/imgannie-spratt-fwKffp5QHiA-unsplash - Copy.jpg'},

    {name:'flower4', 
    img:  'src/week3HWJuly2021-scaffolded/img/chelsea-audibert-g-BQHmwDzgs-unsplash - Copy.jpg'},
    {name:'flower4', 
    img: 'src/week3HWJuly2021-scaffolded/img/chelsea-audibert-g-BQHmwDzgs-unsplash - Copy.jpg'},

    {name:'flower5', 
    img: 'src/week3HWJuly2021-scaffolded/img/edwards-lee-i8TWN8jRaFQ-unsplash - Copy.jpg'},
    {name:'flower5', 
    img: 'src/week3HWJuly2021-scaffolded/img/edwards-lee-i8TWN8jRaFQ-unsplash - Copy.jpg'},

    {name:'flower6', 
    img: 'src/week3HWJuly2021-scaffolded/img/gary-ellis-Dv7RUqChJfY-unsplash - Copy.jpg'},
    {name:'flower6', 
    img: 'src/week3HWJuly2021-scaffolded/img/gary-ellis-Dv7RUqChJfY-unsplash - Copy.jpg'}

    // {name:'flower7', img: 'week3HWJuly2021-scaffolded/img/irina-zhuravleva-oLyhygWW9n0-unsplash - Copy.jpg'},
    // {name:'flower7', img: '.week3HWJuly2021-scaffolded/img/irina-zhuravleva-oLyhygWW9n0-unsplash - Copy.jpg'},
    // {name:'flower8', img: 'week3HWJuly2021-scaffolded/img/mads-eneqvist-uTGwBk8oJcI-unsplash - Copy.jpg'},
    // {name:'flower8', img: 'week3HWJuly2021-scaffolded/img/mads-eneqvist-uTGwBk8oJcI-unsplash.jpg'},
    // {name:'flower9', img: 'week3HWJuly2021-scaffolded/img/mel-pB-IJfg8jb8-unsplash.jpg'},
    // {name:'flower9', img: 'week3HWJuly2021-scaffolded/img/mel-pB-IJfg8jb8-unsplash.jpg'},
    // {name:'flower10', img: 'week3HWJuly2021-scaffolded/img/rock-earth-8_sWuFn8onY-unsplash (1).jpg'},
    // {name:'flower10', img: 'week3HWJuly2021-scaffolded/img/rock-earth-8_sWuFn8onY-unsplash (1).jpg'}
]
//sort card array using Math.random function

pictArray.sort(() => 0.3 - Math.random())
//use document query selector on the grid div to create board 
console.log(pictArray);
const myBoard = document.querySelector('.myBoard')
var selectedCard = []
var selectedCardID = []
var matchedCards= []
const resultDisplay = document.querySelector('#outcome')


//create function to create Memory game board
function gameBoard() {

    //use FOR loop to loop over card array to create img Element and set attribute to link img for board
    for(let i = 0; i < pictArray.length; i++){
        //variable for each card
        const card = document.createElement('img')
   
        //for each card use set attribute to link each image to its path
        card.setAttribute('src', 'img/blacksand.jpg')

        //loop to give data id for 0 to /11/
        //we are giving the ‘card’ a keyCard-Id and then the keyCard-Id is a number to grab when flipping card. Or in other words 
        //‘i’. As each time we loop we are a singing a value to the keyCard-Id. So the first card will have 
        // keyCard-Id of 0, the second card will have a keyCard-Id or 1 and so on :)
        card.setAttribute('keyCard-Id', i)

        //function to execute when card is clicked on and flipped
         card.addEventListener('click', cardFlipped)
        //put all cards(images with unique keyCard-Id's) in div using append Child
        myBoard.appendChild(card)
        }   
    }

    
    //are there matches?
    function checkMatched(){
        var cards = document.querySelectorAll('img')//select all images
        const firstCardId = selectedCardId[0]//assign first value in array
        const secondCardId = selectedCardId[1]//second value in array

        //use if loop to validate matching cards against array using the 
        //using 
        //if match found alert message displays
        //if not flip cards over
        if (selectedCard[0] === selectedCard[1]){
            alert("Great Match!!")
            cards[firstCardId].setAttrivute('src', './img/week3HWJuly2021-scaffolded/img/whitesand.jpg')
            cards[secondCardId].setAttrivute('src', './img/week3HWJuly2021-scaffolded/img/whitesand.jpg')
            matchedCards.push(selectedCard)
        }
         else
            {
                cards[firstCardId].setAttrivute('src', './img/week3HWJuly2021-scaffolded/img/blacksand.jpg')
                cards[secondCardId].setAttrivute('src', './img/week3HWJuly2021-scaffolded/img/blacksand.jpg')
                alert("No Match!!")
        }
        //clear the cards that were just chosen as well as the id attached to those 2 cards for next selection or new board
        selectedCard = [];
        selectedCardId = [];
        // display user results by passing one point for each match how many times something is stored
        resultDisplay.textContent =  matchedCards.length
        //if counter of cards matched equals array length divided by 2 then we have matched all cards
        if (matchedCards.length === pictArray.length/2){
            resultDisplay.textContent = "Congratulations!  All Matches Made!!"
        }
    }

function cardFlipped(){
    //get id and make empty array to push card from card pics that matches card id
    let cardId = this.getAttribute('keyCard-Id')
    selectedCard.push(pictArray[cardId].name)  
    selectedCardId.push(cardId)  
    this.setAttribute('src', pictArray[cardId].img)//add image that matched card idto card that is picked
    if (selectedCard.length === 2){ //checks for number of cards chosen
        setTimeout(checkMatched, 400)//400 seconds to check for matches 
        
    }
   
}   
gameBoard()

 })

