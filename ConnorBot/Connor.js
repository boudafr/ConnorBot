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

let fShowXHide = () => {
  let OuterDivOfCon = document.getElementById('IdOuterDivOfCon')

  OuterDivOfCon.style.animation = "AniShowXHideDiv forwards"
  OuterDivOfCon.style.display = "inline"
}

//except ConDisplayIn this function is required for all ConDisplay<direction>() because it creates necessary objects
let ConSourceBox = () => {
  //Creation of outer most div for ConBot
  let OuterDivOfCon = document.createElement("div")
  OuterDivOfCon.id = 'IdOuterDivOfCon'
  OuterDivOfCon.innerText = 'Test Text'
  document.body.appendChild(OuterDivOfCon)
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
  //ShowXHideButton.style = "height: 1.5rem; width: 2rem; border-top-left-radius: 1rem; border-top-right-radius: 1rem;"
  ShowXHideButton.style.height = "1.5rem"
  ShowXHideButton.style.width = "2rem"
  ShowXHideButton.style.borderTopLeftRadius = "1rem"
  ShowXHideButton.style.borderTopRightRadius = "1rem"
  ShowXHideButton.style.bottom = "0"
  ShowXHideButton.style.right = "1rem"

  let OuterDivOfCon = document.getElementById('IdOuterDivOfCon')
  //OuterDivOfCon.style = "bottom: 0; right: 1rem;"
  OuterDivOfCon.style.bottom = "0"
  OuterDivOfCon.style.right = "1rem"
}

let ConDisplayLeft = () => {
  ConSourceBox()

  let ShowXHideButton = document.getElementById('IdShowXHideButton')
  // ShowXHideButton.style = "height: 2rem; width: 1.5rem; border-top-right-radius: 1rem; border-bottom-right-radius: 1rem;"
  ShowXHideButton.style.height = "2rem"
  ShowXHideButton.style.width = "1.5rem"
  ShowXHideButton.style.borderTopRightRadius = "1rem"
  ShowXHideButton.style.borderBottomRightRadius = "1rem"
  ShowXHideButton.style.bottom = "10vh"
  ShowXHideButton.style.left = "0"

  let OuterDivOfCon = document.getElementById('IdOuterDivOfCon')
  // OuterDivOfCon.style = "bottom: 10vh; left: 0;"
  OuterDivOfCon.style.bottom = "10vh"
  OuterDivOfCon.style.left = "0"
}

let ConDisplayRight = () => {
  ConSourceBox()

  let ShowXHideButton = document.getElementById('IdShowXHideButton')
  // ShowXHideButton.style = "height: 2rem; width: 1.5rem; border-top-left-radius: 1rem; border-bottom-left-radius: 1rem;"
  ShowXHideButton.style.height = "2rem"
  ShowXHideButton.style.width = "1.5rem"
  ShowXHideButton.style.borderTopLeftRadius = "1rem"
  ShowXHideButton.style.borderBottomLeftRadius = "1rem"
  ShowXHideButton.style.bottom = "10vh"
  ShowXHideButton.style.right = "0"

  let OuterDivOfCon = document.getElementById('IdOuterDivOfCon')
  // OuterDivOfCon.style = "bottom: 10vh; right: 0;"
  OuterDivOfCon.style.bottom = "10vh"
  OuterDivOfCon.style.right = "0"
}

let ConDisplayIn = () => {

}

let ConDisplayTop = () => {
  ConSourceBox()

  let ShowXHideButton = document.getElementById('IdShowXHideButton')
  // ShowXHideButton.style = "height: 1.5rem; width: 2rem; border-bottom-left-radius: 1rem; border-bottom-right-radius: 1rem;"
  ShowXHideButton.style.height = "1.5rem"
  ShowXHideButton.style.width = "2rem"
  ShowXHideButton.style.borderBottomLeftRadius = "1rem"
  ShowXHideButton.style.borderBottomRightRadius = "1rem"
  ShowXHideButton.style.top = "0"
  ShowXHideButton.style.right = "1rem"

  let OuterDivOfCon = document.getElementById('IdOuterDivOfCon')
  // OuterDivOfCon.style = "top: 0; right: 1rem;"
  OuterDivOfCon.style.top = "0"
  OuterDivOfCon.style.right = "1rem"
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
