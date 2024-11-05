let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice")         // access div block with class choice
const msg = document.querySelector("#msg")                   // access paragraph with id = msg
const userscorepara = document.querySelector("#user-score")  // access user score para counter       
const compscorepara = document.querySelector("#comp-score")  // access user score para counter       

// using modularity

const gencompchoice = () => {                        // this function is to generate random elements
    const options = ["rock","paper","scissor"]
    const randomIdx = Math.floor(Math.random()*3)
    return options[randomIdx]
}

const drawgame = () =>{                              // function to show draw game
                                                     //console.log("It was a Draw."); they will only show in console, if u want then remove comment
    msg.innerText = "Draw, Play again!";             // set text if draw
    msg.style.backgroundColor = "rgb(4, 4, 76)";     //set color
}

const showwinner= (userwin, Userchoice, compchoice) => {                    // function to show winner
    if (userwin){
        userscore++;                                                        
        userscorepara.innerText = userscore;                                // increase userscore one by one
                                                                            //console.log("You win!"); they will only show in console, if u want then remove comment
        msg.innerText = `You win! Your "${Userchoice}" beats Computer's "${compchoice}"`;
        msg.style.backgroundColor = "green";
    }else{
        compscore++;
        compscorepara.innerText = compscore;
                                                                            //console.log("You Lose!"); they will only show in console, if u want then remove comment
        msg.innerText = `You Lose! Computer's "${compchoice}" beats Your "${Userchoice}"`;
        msg.style.backgroundColor = "red";
    }
}

const playgame = (Userchoice) =>{                   // game function, it will show user choice, comp choice and the final winner
                                                    //console.log("user choice: ",Userchoice); they will only show in console, if u want then remove comment
    const compchoice = gencompchoice()
                                                    //console.log("comp choice: ",compchoice); they will only show in console, if u want then remove comment

    if (Userchoice === compchoice) {
        drawgame()
    }else{
        let userwin = true
        if(Userchoice === "rock"){
            // paper,scissor
            userwin = compchoice === "paper" ? false:true
        } else if (Userchoice === "paper") {
            //rock,scissor
            userwin = compchoice === "rock" ? true:false
        } else { 
            //rock,paper
            userwin = compchoice === "rock"? false:true
        }
        showwinner(userwin, Userchoice,compchoice)
    }
}

choices.forEach((choice) => {                         // this function allow users to click on elements and retrive the clicked element's ID
                                                      //console.log(choice); they will only show in console, if u want then remove comment
 
    choice.addEventListener("click",() => {
        const Userchoice = choice.getAttribute("id");
        playgame(Userchoice)
    })
})