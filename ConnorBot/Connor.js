//Mandatory Functions

  /*
  Function that prints chatbox witch will serve as UI
    Input: Two strings
    Positions the chatbox into
    different part of screen
    based on the input if no
    input is provided chatbox
    is printed on bottom right
    Output: Error messages into console
  */
let ConDisplay = (position = 'bottom') => {
  switch (position) {
    case 'bottom':
      ConDisplayBottom()
      break;
    case 'right':
      ConDisplayRight()
      break;
    case 'left':
      ConDisplayLeft()
      break;
    case 'in':
      ConDisplayIn()
      break;
    case 'top':
      ConDisplayTop()
      break;
    default: ConDisplayBottom();
  }
}



//sub functions of ConPrint
//This function hides and shows element in the MainDiv of the bot 
let fShowXHide = () => {
  const ChangingElem = [
    MainDiv = {el: document.getElementById('IdConMainDiv'),aniChange: "AniShowXHideDiv"},
    TextBox = {el: document.getElementById('IdConTextBox'),aniChange: "AniShowXHideTextBox"},
    ChatBox = {el: document.getElementById('IdConChatBox'),aniChange: "AniShowXHideChatBox"},
  ]

  /*LEGACY CODE
  let ConMainDiv = document.getElementById('IdConMainDiv')
  let TextBox = document.getElementById('IdConTextBox')
  let ChatBox = document.getElementById('IdConChatBox')
  */

  if (MainDiv.el.style.display === "none") {
    ChangingElem.forEach(element => {
      element.el.style.animation = element.aniChange + " forwards"
      element.el.style.display = "block"
    });
    /*LEGACY CODE
    ConMainDiv.style.animation = "AniShowXHideDiv forwards"
    TextBox.style.animation = "AniShowXHideTextBox forwards"
    ChatBox.style.animation = "AniShowXHideChatBox forwards"
  
    ConMainDiv.style.display = "block"
    TextBox.style.display = "block"
    ChatBox.style.display = "block"
    */
  }
  else {
    ChangingElem.forEach(element => {
      element.el.style.animation = element.aniChange + " reverse"
      element.el.style.display = "none"
    });
    /*LEGACY CODE
    ConMainDiv.style.animation = "AniShowXHideDiv reverse"
    TextBox.style.animation = "AniShowXHideTextBox reverse"
    ChatBox.style.animation = "AniShowXHideChatBox reverse"
  
    ConMainDiv.style.display = "none"
    TextBox.style.display = "none"
    ChatBox.style.display = "none"
    */
  }
}

//except ConDisplayIn this function is required for all ConDisplay<direction>() because it creates necessary objects
let ConSourceBox = () => {
  //Creation of chat box
  let ChatBox = document.createElement("div")
  ChatBox.id = 'IdConChatBox'
  //################
  //Creation of text box for user
  let TextBox = document.createElement("input")
  TextBox.id = 'IdConTextBox'
  //################
  //Creation of outer most div for ConBot
  let ConMainDiv = document.createElement("div")
  ConMainDiv.id = 'IdConMainDiv'
  ConMainDiv.style.display = "none"
  document.body.appendChild(ConMainDiv).appendChild(ChatBox) //This code looks so ugly that I'll
  document.body.appendChild(ConMainDiv).appendChild(TextBox) //puke if I ever look at it again
  //################
  //Creation of button that pops up and hides Conbot
  let ShowXHideButton = document.createElement("button")
  ShowXHideButton.id = 'IdShowXHideButton'
  ShowXHideButton.addEventListener('click', function() { fShowXHide() }, false)
  document.body.appendChild(ShowXHideButton)
  //################
  
}

//Each of next functions prints Connor Bot in respective position --- These functions are called by ConDisplay()
let ConDisplayBottom = () => {
  ConSourceBox()

  let ShowXHideButton = document.getElementById('IdShowXHideButton')
  ShowXHideButton.className = 'ClConShowXHideButtonBottom'

  let ConMainDiv = document.getElementById('IdConMainDiv')
  ConMainDiv.className = "ClConMainDivPosBottom"
}

let ConDisplayLeft = () => {
  ConSourceBox()

  let ShowXHideButton = document.getElementById('IdShowXHideButton')
  ShowXHideButton.className = 'ClConShowXHideButtonLeft'

  let ConMainDiv = document.getElementById('IdConMainDiv')
  ConMainDiv.className = 'ClConMainDivPosLeft'
}

let ConDisplayRight = () => {
  ConSourceBox()

  let ShowXHideButton = document.getElementById('IdShowXHideButton')
  ShowXHideButton.className = 'ClConShowXHideButtonRight'

  let ConMainDiv = document.getElementById('IdConMainDiv')
  ConMainDiv.className = 'ClConMainDivPosRight'
}

let ConDisplayTop = () => {
  ConSourceBox()

  let ShowXHideButton = document.getElementById('IdShowXHideButton')
  ShowXHideButton.className = 'ClConShowXHideButtonTop'

  let ConMainDiv = document.getElementById('IdConMainDiv')
  ConMainDiv.className = 'ClConMainDivPosTop'
}

let ConDisplayIn = () => {

}
//################
/*
Function that catches keywords from messages
  Input: NONE
  Gets last message from user
  Stores words separated in buffer list
  Output: NONE
*/
let ConCatchWord = () => {

}

//################



//Utility Functions
  /*
  Function that will search web for keyword
    Input: String
    Searches webpage for INPUT word
    Output: Message into chat and focus on first object found
  */
let ConSearchWeb = (keyWord) => {

}

//################

//Respond Process

//################

//Startup Process

  //Connect to JSON or SQL if JSON is not presented

    //Check Version of JSON

    //Update JSON

  //################
  ConDisplay('bottom')

//################
