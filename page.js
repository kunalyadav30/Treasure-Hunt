do {
    let startGame = confirm('Do You Want To Play Island Treasure Hunt !!')
if (startGame) {
    welcome()
}
else {
    gameOver('You Lost A Winning Chance')
}
let playing=confrim('Want To Play Again!!.')    
} while (playing);

function gameOver(message) {
    alert(message)
    return;
}
function welcome() {
    alert('Welcome Brave Men/Girl. Try Your Luck!!')
    let name = prompt('Enter Your Name Buddy.')
    alert(`Good Luck ${name} !!, Play Carefully`)
    let choice = confirm('Do You Want to Enter To The Island')
    if (choice) {
        let choicePath = prompt('Chosse A Path To Continue. \n 1.Jungle \n 2.Beach \n (Enter Jungle or Beach Only)')
        switch (choicePath) {
            case 'Jungle':
                jungle()
                break;
            case 'Beach':
                beach()
                break;
            default:
                gameOver('Please enter option correct from given options')
                break;
        }
    } else {
        gameOver('Game Ended In Between . Bad Luck!!')
    }
}
function pussleSolve() {
    const puzzles = [
        "Bina muh ke bolta hoon aur bina kaan ke sunta hoon. Main kya hoon?",
        "Mere paas keys hain par lock nahi.",
        "Mere paas head aur tail hai par body nahi.",
        "Main daudta hoon par chalta nahi.",
        "Mera face aur do haath hain par pair nahi.",
        "Meri ek aankh hai par main dekh nahi sakta.",
        "Main jitna sukhta hoon utna geela hota hoon.",
        "Mere bahut daant hain par main kaat nahi sakta.",
        "Mere paas ring hai par finger nahi.",
        "Meri neck hai par head nahi.",
        "Main hamesha aane wala hoon par kabhi nahi aata.",
        "Main ek jagah rehkar poori duniya ghoom sakta hoon.",
        "Mere paas ek angutha aur chaar ungliyan hain par main zinda nahi hoon.",
        "Jise pakad sakte ho par phenk nahi sakte.",
        "Meri ek aankh hai par main dekh nahi sakta (natural disaster).",
        "Mere paas dil hai par koi aur organ nahi.",
        "Main upar jaata hoon par neeche nahi aata.",
        "Meri bahut si branches hain par patte nahi.",
        "Mere paas bark hai par main kaat nahi sakta.",
        "Jise toda, banaya, kaha aur khela ja sakta hai."
    ]
    const answers = [
        "Echo",
        "Keyboard",
        "Coin",
        "Water",
        "Clock",
        "Needle",
        "Towel",
        "Comb",
        "Phone",
        "Bottle",
        "Tomorrow",
        "Stamp",
        "Glove",
        "Cold",
        "Hurricane",
        "Artichoke",
        "Age",
        "Bank",
        "Tree",
        "Joke"
    ]
    let i = Math.floor(Math.random() * 20)
    let userAns = prompt(`Slove The Puzzle To Get The Treasure. \n ${puzzles[i]}`)
    if (answers[i] == userAns) {
        alert('You Got 10000 Gold Coins. Hurray!!')
    }
    else {
        gameOver('Ohh No! Wrong Answer Better Luck Next Time')
    }
}
function jungle() {
    alert('Walking into the Jungle')
    let trap = Math.floor(Math.random() * 10)
    if (trap % 2 == 0) {
        alert('You are Safe .Thats Great Moving Forward Into MAssive Jungle')
        let tools = Number(prompt('Chosse a Tool from following. \n 1.Sword \n 2.Stick \n 3.Gun \n Chosse 1,2,3'))
        switch (tools) {
            case 1:
                alert(`Wow!! Nice You Killed The Bear with Sword`)
                 alert('Found a Cave!! . Wait Their Is a Puzzle To Open It')
                let treasureChoice1 = confrim('Do You Want Solve Puzzle and Open The Box')
                if (treasureChoice1) {
                    pussleSolve()
                } else {
                    gameOver('Ohh! You Missed The Chance.')
                }
                break;
            case 2:
                gameOver('Oops! Your Tool was very weak. You were Killed by Bear')
                break;
            case 3:
                alert(`Wow!! Nice You Shotted The Bear with Your Gun`)
                 alert('Found a Cave!! . Wait Their Is a Puzzle To Open It')
                let treasureChoice2 = confrim('Do You Want Solve Puzzle and Open The Box')
                if (treasureChoice2) {
                    pussleSolve()
                } else {
                    gameOver('Ohh! You Missed The Chance.')
                }
                break;
            default:
                gameOver('Chosse a Correct tool')
                break;
        }

    } else {
        gameOver('Ahh! You Were Fallen Into The Trap. Better Luck Next Time!!')
    }

}
function beach() {
     alert('Walking Towards The Beach.........Arrived at Beach')
     alert('Wait Their Is An Island Far From Beach. let Go the Island')
        let tranport = Number(prompt('Chosse a Tranport from following. \n 1.Swimming \n 2.Boat \n 3.Helicopter \n Chosse 1,2,3'))
        switch (tools) {
            case 1:
                 let i = Math.floor(Math.random() * 10)
    if (i%2==0) {
        alert('Your Boat is strong reached he Island Safely. Hurray!!')
                alert('Found a Wooden Box!! . Wait Their Is a Puzzle To Open It')
                let treasureChoice1 = confrim('Do You Want Solve Puzzle and Open The Box')
                if (treasureChoice1) {
                    pussleSolve()
                } else {
                    gameOver('Ohh! You Missed The Chance.')
                }
    }
    else {
        gameOver('Ohh No!. Your Boat is Not Soo Strong.')
    }
                break;
            case 2:
                gameOver('Oops! You Drown Into the Water')
                break;
            case 3:
                alert(`Wow!! Your Helicopter Landed on the Island`)
                alert('Found a Wooden Box!! . Wait Their Is a Puzzle To Open It')
                let treasureChoice1 = confrim('Do You Want Solve Puzzle and Open The Box')
                if (treasureChoice1) {
                    pussleSolve()
                } else {
                    gameOver('Ohh! You Missed The Chance.')
                }
                break;
            default:
                gameOver('Chosse a Correct transport')
                break;
    }
}