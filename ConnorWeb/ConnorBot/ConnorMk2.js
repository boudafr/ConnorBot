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
    InputBox
        ? ID: ConIdInputBox
        Role: Input pro uživatele pro posílání zpráv
    SendBTN/SubBTN
        ? ID: ConIDSubBTN
        Role: posílá zprávu a inicializuje zpracovávání zprávy
    DisplayBTN
        ? ID: ConIdDisplayBTN
        Classy:
            ? ConCl + <position> : Div pro pozicování bota a talčítka pro zobrazení
        Role: Zobrazení a minimalizace bota
*/
let keywords = {}
let botname

let StartBot = (inputBotname = 'TestBot') => {
    botname = inputBotname
    console.log(botname)
    InitBot()
    GetKeywords()
}



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

let InitBot = () => {
    $.ajax({
        url: "PHPout/getBotInfo.php",
        type: "post",
        data: {
          botName: botname,
        },
        dataType: "json",
        success: (r) => {
          
          console.log(r['position'])
          console.log(r['main_color'])
          console.log(r['secondary_color'])

          let root = document.querySelector(':root')
          root.style.setProperty('--ConMainCol', r['main_color'])
          root.style.setProperty('--ConSecCol', r['secondary_color'])
          DisplayBot(r['position'])
        }
    })
}

let MessageHandler = (keyword) => {
    console.log(keyword)
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

let DisplayBot = (position) => {
    //Vnější prvek vlasnící všechny prvky až na DisplayBTN
    let BotBox = document.createElement('div')
    BotBox.id = 'ConIdBotBox'
    BotBox.classList = 'ConCl' + position + ' ConClNone'
    //Zobrazuje zprávy uživatele a bota
    let MessageBox = document.createElement('div')
    MessageBox.id = 'ConIdMessageBox'
    //Tlačítko na schování bota
    let CloseBTN = document.createElement('button')
    CloseBTN.id = 'ConIdCloseBTN'
    
    //tlačítko na odeslání zprávy
    let SubBTN = document.createElement('input')
    SubBTN.id = 'ConIdSubBTN'
    SubBTN.type = 'button'
    
    //text box pro napsání zprávy botovi (user input)
    let InputBox = document.createElement('input')
    InputBox.type = 'text'
    InputBox.id = 'ConIdInputBox'
    InputBox.autocomplete = "off"
    //tlačítko na zobrazení bota
    let DisplayBTN = document.createElement('input')
    DisplayBTN.type = 'button'
    DisplayBTN.id = 'ConIdDisplayBTN'
    DisplayBTN.classList = 'ConCl' + position + ' ConClBlock'

    BotBox.appendChild(CloseBTN)
    BotBox.appendChild(MessageBox)
    BotBox.appendChild(InputBox)
    BotBox.appendChild(SubBTN)

    document.body.appendChild(BotBox)
    document.body.appendChild(DisplayBTN)
    //Přidává event listenery
    DisplayBTN.addEventListener('click', () => {
        ShowBot()
    })
    
    SubBTN.addEventListener('click', () => {
        console.log('SubBTN clicked')
        OnMessageSend()
    })

    CloseBTN.addEventListener('click', () => {
        HideBot()
    })
}

//___________________________________________________\\

//__________________Message Handlers_________________\\
let OnMessageSend = () => {
    let message = document.getElementById('ConIdInputBox').value
    console.log(message)
    if(message) {
        CreateNewUserMessage(message)
    }
    
    FindKeywords(message)
    
    message = ''
}

let FindKeywords = (text) => {
    keywords.forEach(keyword => {
        if(text.includes(keyword)) {
            MessageHandler(keyword)
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
    ChatBot.style.display = 'grid'

    let DisplayBTN = document.getElementById('ConIdDisplayBTN')
    DisplayBTN.style.display = 'none'
}

let HideBot = () => {
    console.log('Hide Bot')
    let ChatBot = document.getElementById('ConIdBotBox')
    ChatBot.style.display = 'none'

    let DisplayBTN = document.getElementById('ConIdDisplayBTN')
    DisplayBTN.style.display = 'block'

}

//___________________________________________________\\

//_______________Developer functions_________________\\
let StartAutoRefresh = () => {
    let BotToBeRefreshed = document.getElementById('bot_name_input').text
    StartBot(BotToBeRefreshed)
    setInterval(() => {
        RefreshThisBot()
    }, 5000)
}

let RefreshThisBot = () => {
    RemoveOldBot()
    let BotToBeRefreshed = document.getElementById('bot_name_input')
    StartBot(BotToBeRefreshed)
}

let RemoveOldBot = () => {
    document.getElementById('ConIdBotBox').remove
    document.getElementById('ConIdDisplayBTN').remove
}
//___________________________________________________\\
