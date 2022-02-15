/*
Čtyři hlabvní elementy bota jsou:
    BotBox
        ? ID: ConIdBotBox
        Classy:
            ? ConCl + <position> : Div pro pozicování bota a talčítka pro zobrazení
        Role: Mít v sobě všechny prvky krom DisplayBTN
    ChatBox
        ? ID: ConIdMessageBox
        Classy:
            ? ConClUserMessage : Div pro zprávy uživatele
            ? ConClBotMessage : Div pro zprávy bota
        Role: tobrazuje zprávy uživatele i bota
    CloseBTN
        ? ID: ConIdCloseBTN
        Role: Schová Bota a zobrazí DisplayBTN
    Form
        ? ID: ConIdForm
        Role: pro využití submit a post pro funkci bota
    InputBox
        ? ID: ConIdInputBox
        Role: Input pro uživatele pro posílání zpráv
    DisplayBTN
        ? ID: ConIdDisplayBTN
        Classy:
            ? ConCl + <position> : Div pro pozicování bota a talčítka pro zobrazení
        Role: Zobrazení a minimalizace bota
*/
let keywords = {}
let position, mainColor, secColor

let StartBot = (botname = 'TestBot') => {
    GetBotInfo(botname)
    GetKeywords(botname)
    DisplayBot()
    InitMessageHandler(botname)
    InitDisplayBTN()
}
//_____________________Listeners____________________\\


let InitMessageHandler = (botname) => {
    let InputBox = document.getElementById('ConIdInputBox')
    InputBox.addEventListener('submit', () => {OnMessageSend(botname)})
}

let InitDisplayBTN = () => {
    let DisplayBTN = document.getElementById('ConIdDisplayBTN')
    DisplayBTN.addEventListener('click', () => {ShowBot()})
}




//__________________________________________________\\


//_______________________AJAX_______________________\\

let GetKeywords = () => {
    $.ajax({
        url: "PHPout/getKeywords.php",
        type: "post",
        data: {
          botName: botname,
        },
        dataType: "json",
        success: (r) => {
          keywords = r
          console.log(keywords)
        }
    })
}

let GetBotInfo = (botname) => {
    $.ajax({
        url: "http://127.0.0.1/ConnorWeb/PHPout/getBotInfo.php",
        type: "post",
        data: {
          botName: botname,
        },
        dataType: "json",
        success: (r) => {
          position = r['position']
          mainColor = r['main_color']
          secColor = r['secondary_color']
          console.log(position)
          console.log(mainColor)
          console.log(secColor)
        }
    })
}

let MessageHandler = (botname, keyword) => {
    $.ajax({
        url: "PHPout/getResponse.php",
        type: "post",
        data: {
          keyword: keyword,
          botName: botname,
        },
        dataType: "html",
        success: (zprava) => {
          CreateNewBotMessage(zprava)
        }
      })
}
//___________________________________________________\\

//_________________Vytváření prvků___________________\\

let DisplayBot = () => {
    //Vnější prvek vlasnící všechny prvky až na DisplayBTN
    let BotBox = document.createElement('div')
    BotBox.id = 'ConIdBotBox'
    //Zobrazuje zprávy uživatele a bota
    let MessageBox = document.createElement('div')
    MessageBox.id = 'ConIdMessageBox'
    MessageBox.className = 'ConCl' + position
    //Form pro posílání uživatelských zpráv
    let Form = document.createElement('form')
    Form.id = 'ConIdForm'
    //Tlačítko na schování bota
    let CloseBTN = document.createElement('button')
    CloseBTN.id = 'ConIdCloseBTN'
    //tlažítko na odeslání zprávy
    let SubBTN = document.createElement('input')
    SubBTN.type = 'button'
    //text box pro napsání zprávy botovvi (user input)
    let InputBox = document.createElement('input')
    InputBox.type = 'text'
    InputBox.id = 'ConIdInputBox'
    //tlačítko na zobrazení bota
    let DisplayBTN = document.createElement('input')
    DisplayBTN.type = 'button'
    DisplayBTN.id = 'ConIdDisplayBTN'
    DisplayBTN.className = 'ConCl' + position

    Form.appendChild(InputBox)
    Form.appendChild(SubBTN)

    BotBox.appendChild(CloseBTN)
    BotBox.appendChild(MessageBox)
    BotBox.appendChild(From)

    document.body.appendChild(BotBox)
    document.body.appendChild(DisplayBTN)
}

//___________________________________________________\\

//__________________Message Handlers_________________\\



let OnMessageSend = (botname) => {
    let message = toString(document.getElementById('ConIdInputBox').value)

    CreateNewUserMessage(message)
    FindKeywords(botname, message)
}

let FindKeywords = (botname, text) => {
    keywords.forEach(keyword => {
        if(text.includes(keyword)) {
            MessageHandler(botname, keyword)
        }
    })
}

let CreateNewUserMessage = (textOfMessage) => {
    let newUserMSG = document.createElement('div')
    newUserMSG.className = 'ConClUserMessage'
    newUserMSG.innerHTML = textOfMessage

    AttendMessage(newUserMSG)
}

let CreateNewBotMessage = (textOfMessage) => {
    let newBotMSG = document.createElement('div')
    newBotMSG.className = 'ConClBotMessage'
    newBotMSG.innerHTML = textOfMessage

    AttendMessage(newBotMSG)
}

let AttendMessage = (elementWithMessage) => {
    let MessageBox = document.getElementById('ConIdMessageBox')
    MessageBox.appendChild(elementWithMessage)
}

//___________________________________________________\\

//_____________________CSS Change____________________\\



let ShowBot = () => {
    let ChatBot = document.getElementById('ConIdBotBox')
    ShowElement(ChatBot)

    let DisplayBTN = document.getElementById('ConIdDisplayBTN')
    HideElement(DisplayBTN)
}

let HideBot = () => {
    let ChatBot = document.getElementById('ConIdBotBox')
    HideElement(ChatBot)

    let DisplayBTN = document.getElementById('ConIdDisplayBTN')
    ShowElement(DisplayBTN)
} 

let ShowElement = (element) => {
    element.style.display = 'block'
}

let HideElement = (element) => {
    element.style.display = 'none'
}
//___________________________________________________\\


StartBot()