//reading JSON file
//Honestly this is black magic stolen from w3schools
//But it gets data from ConnorConfig.json therefore it works just fine
let keywords = {}
let position, mainColor, secColor


  
$.ajax({
  url: "PHPout/getKeywords.php",
  type: "post",
  data: {
    botName: "TestBot",
  },
  dataType: "json",
  success: (r) => {
    keywords = r
    console.log(keywords)
  }
})

$.ajax({
  url: "PHPout/getBotInfo.php",
  type: "post",
  data: {
    botName: "TestBot",
  },
  dataType: "json",
  success: (r) => {
    position = r['position']
    mainColor = r['main_color']
    secColor = r['secondary_color']
    console.log(position)
  }
})


  /*  Function that prints chatbox witch will serve as UI
    Input: Two strings
    Positions the chatbox into
    different part of screen
    based on the input if no
    input is provided chatbox
    is printed on bottom right
    Output: Error messages into console
  */
let ConDisplay = (/*position = 'Bottom'*/) => {
  switch (position) {
    case 'bottom':
      ConDisplayBottom()
      break
    case 'right':
      ConDisplayRight()
      break
    case 'left':
      ConDisplayLeft()
      break
    case 'in':
      ConDisplayIn()
      break
    case 'top':
      ConDisplayTop()
      break
    default: ConDisplayBottom()
  }
}



//sub functions of ConPrint
  /*Message handlerer
  Input: String (message from user)
  Output: Messages to ChatBox as divs
  this function is critical for function of the bot
  */
let fConMessageHandler = (functionInput) => {
  //let MainDiv = document.getElementById('IdConMainDiv')
  //let ChatBox = document.getElementById('IdConChatBox')
  //let TextBox = document.getElementById('IdConTextBox')
  keywords.forEach(element => {
    if (functionInput.includes(element)) {
      console.log(element) 

      let userMessage = document.createElement('div')
      userMessage.className = 'ClConMessageDiv'
      MessageDiv.innerHTML = functionInput
      document.getElementById('IdConChatBox').appendChild(userMessage)

      $.ajax({
        url: "PHPout/getResponse.php",
        type: "post",
        data: {
          keyword: element,
          botName: "TestBot",
        },
        dataType: "html",
        success: (r) => {
          document.getElementById('IdConChatBox').appendChild(r)
        }
      })
      /*
      let MessageDiv = document.createElement('div')
      MessageDiv.className = 'ClConMessageDiv'
      MessageDiv.innerHTML = functionInput
      let ResponseDiv = document.createElement('div')
      ResponseDiv.className = 'ClConResponseDiv'
      ResponseDiv.innerHTML = 'temp message'
      document.body.appendChild(MainDiv).appendChild(ChatBox).appendChild(MessageDiv)
      document.body.appendChild(MainDiv).appendChild(ChatBox).appendChild(ResponseDiv)
      */
    }
  })
}
//##################
//This function hides and shows element in the MainDiv of the bot 
let fShowXHide = () => {
  const ChangingElem = [
    MainDiv = {el: document.getElementById('IdConMainDiv'),aniChange: "AniShowXHideDiv"},
    TextBox = {el: document.getElementById('IdConTextBox'),aniChange: "AniShowXHideTextBox"},
    ChatBox = {el: document.getElementById('IdConChatBox'),aniChange: "AniShowXHideChatBox"},
    Button = {el: document.getElementById('IdShowXHideButton'),aniChange: "AniShowXHideButton" + position},
  ]
  
  if (MainDiv.el.style.display === "none") {
    ChangingElem.forEach(element => {
      element.el.style.animation = element.aniChange + " forwards"
      element.el.style.display = "flex"
    })
  }
  else {
    ChangingElem.forEach(element => {
      element.el.style.animation = element.aniChange + " reverse"
      element.el.style.display = "none"
    })
  }
  document.getElementById('IdShowXHideButton').style.display = "block"
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
  TextBox.onkeydown = function(e) {
    if(e.keyCode == 13) {
      fConMessageHandler(document.getElementById('IdConTextBox').value)
      document.getElementById('IdConTextBox').value = ''
    }
  }
  //################
  //Creation of outer most div for ConBot
  let ConMainDiv = document.createElement("div")
  ConMainDiv.id = 'IdConMainDiv'
  ConMainDiv.style.display = "none"
  document.body.appendChild(ConMainDiv).appendChild(TextBox) //This code looks so ugly that I'll
  document.body.appendChild(ConMainDiv).appendChild(ChatBox) //puke if I ever look at it again
  //################
  //Creation of button that pops up and hides Conbot
  let ShowXHideButton = document.createElement("button")
  ShowXHideButton.id = 'IdShowXHideButton'
  ShowXHideButton.addEventListener('click', function() { fShowXHide() }, false)
  document.body.appendChild(ShowXHideButton)
  //################
}

/*Each of next functions prints Connor Bot in respective position 
--- These functions are called by ConDisplay()*/
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
/*Function that catches keywords from messages
  Input: NONE
  Gets last message from user
  Stores words separated in buffer list
  Output: NONE
*/
let ConCatchWord = () => {

}

//################



//Utility Functions
  /*  Function that will search web for keyword
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
  ConDisplay(position)

//################
