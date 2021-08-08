
//Load the DOM before executing any Javascript
document.addEventListener('DOMContentLoaded',() =>{



//pics for each card
const cardPicsArray = [
    {name:'flower1', img: 'src/week3HWJuly2021-scaffolded\img\alex-quezada-MMRRFV7aB2s-unsplash - Copy.jpg'},
    {name:'flower1', img: 'sr /week3HWJuly2021-scaffolded\img\alex-quezada-MMRRFV7aB2s-unsplash - Copy.jpg'},
    {name:'flower2', img: 'src/week3HWJuly2021-scaffolded\img\alex-quezada-TFTz5fKXOVU-unsplash.jpg'},
    {name:'flower2', img: 'src/week3HWJuly2021-scaffolded\img\alex-quezada-TFTz5fKXOVU-unsplash.jpg'},

    {name:'flower3', img: 'src/week3HWJuly2021-scaffolded\img\annie-spratt-fwKffp5QHiA-unsplash - Copy.jpg'},   
    {name:'flower3', img:' src/week3HWJuly2021-scaffolded\img\annie-spratt-fwKffp5QHiA-unsplash - Copy.jpg'},
    {name:'flower4', img:  'src/week3HWJuly2021-scaffolded\img\chelsea-audibert-g-BQHmwDzgs-unsplash - Copy.jpg'},
    {name:'flower4', img: 'src/week3HWJuly2021-scaffolded\img\chelsea-audibert-g-BQHmwDzgs-unsplash - Copy.jpg'},
    {name:'flower5', img: 'src/week3HWJuly2021-scaffolded\img\edwards-lee-i8TWN8jRaFQ-unsplash - Copy.jpg'},

    {name:'flower5', img: 'src/week3HWJuly2021-scaffolded\img\edwards-lee-i8TWN8jRaFQ-unsplash - Copy.jpg'},
    {name:'flower6', img: 'src/week3HWJuly2021-scaffolded\img\gary-ellis-Dv7RUqChJfY-unsplash - Copy.jpg'},
    {name:'flower6', img: 'src/week3HWJuly2021-scaffolded\img\gary-ellis-Dv7RUqChJfY-unsplash - Copy.jpg'},
    // {name:'flower7', img: 'week3HWJuly2021-scaffolded\img\irina-zhuravleva-oLyhygWW9n0-unsplash - Copy.jpg'},
    // {name:'flower7', img: '.week3HWJuly2021-scaffolded\img\irina-zhuravleva-oLyhygWW9n0-unsplash - Copy.jpg'},
    // {name:'flower8', img: 'week3HWJuly2021-scaffolded\img\mads-eneqvist-uTGwBk8oJcI-unsplash - Copy.jpg'},
    // {name:'flower8', img: 'week3HWJuly2021-scaffolded\img\mads-eneqvist-uTGwBk8oJcI-unsplash.jpg'},
    // {name:'flower9', img: 'week3HWJuly2021-scaffolded\img\mel-pB-IJfg8jb8-unsplash.jpg'},
    // {name:'flower9', img: 'week3HWJuly2021-scaffolded\img\mel-pB-IJfg8jb8-unsplash.jpg'},
    // {name:'flower10', img: 'week3HWJuly2021-scaffolded\img\rock-earth-8_sWuFn8onY-unsplash (1).jpg'},
    // {name:'flower10', img: 'week3HWJuly2021-scaffolded\img\rock-earth-8_sWuFn8onY-unsplash (1).jpg'}
]

//use document query selector on the grid div to create board 
const grid = document.querySelector('.grid')

//create function to create Memory game board
function createGameBoard() {

//use FOR loop to loop over card array to create img Element and set attribute to link img for board
for(let i = 0; i < cardPicsArray.length; i++){
    //variable for each card
    const cardPic =document.createElement('img')
   
    //for each card use set attribute to link each image to its path
    cardPic.setAttribute('src', 'week3HWJuly2021-scaffolded\img\whitesand.jpg')

    //loop to give data id for 0 to /11/
    //we are giving the ‘card’ a data-id and then the data-id is a number. Or in other words 
    //‘i’. As each time we loop we are a singing a value to the data-id. So the first card will have 
    // data-Id of 0, the second card will have a data-id or 1 and so on :)
    cardPic.setAttribute('data-id', i)

    //function to execute when card is clicked on and flipped
    cardPic.addEventListener('click', cardFlipped)
    //put all cards(images with unique data-id's) in div using append Child
    grid.appendChild(cardPic)
    }
}
 

function flipCard(){
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)  
    cardsChosenId.push(cardId)  
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2){
        setTimeout(checkForMatch, 500)
    }
    console.log(cardsChosen);
}


function checkForMatch(){
const cards = document.querySelectorAll('img')
const optionOneId = cardsChosenId[0]
const optionTwoId = cardsChosenId[1]

if (optionOneId == optionTwoId){
    alert('Ypu have clicked the same image');
    cards[optionOneId].setAttribute('src', 'src/images/blank.png') 
    cards[optionTwoId].setAttribute('src', 'src/images/blank.png')   
} else if (cardsChosen[0] === cardsChosen[1]){
    alert('You have found a match')
    cards[optionOneId].setAttribute('src', 'src/images/white.png') 
    cards[optionTwoId].setAttribute('src', 'src/images/white.png') 
    cards[optionOneId].removeEventListener('click', flipCard)
    cards[optionTwoId].removeEventListener('click', flipCard)
    cardsWon.push(cardsChosen)
} else {
    cards[optionOneId].setAttribute('src', 'src/images/blank.png') 
    cards[optionTwoId].setAttribute('src', 'src/images/blank.png')  
    alert('Sorry, try again')
}
cardsChosen = []
cardsChosenId = []
resultDisplay.textContent = cardsWon.length
if (cardsWon.length === cardArray.length/2){
resultDisplay.textContent = 'Congratulations'
    }

}
createGameBoard()

 })



