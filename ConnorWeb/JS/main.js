let onLoad = () => {
    getBotNames()

    let createBotButton = document.getElementById('CreateBotSubmit')
    createBotButton.addEventListener('click', () => {
        createBot()
        getBotNames()
    })

    let BotSelection = document.getElementById('ConBotName')
    BotSelection.addEventListener('change', () => {
        getKeywords()
    })

    let Add_Edit_Keyword = document.getElementById('Add_Edit_Keyword')
    Add_Edit_Keyword.addEventListener('click', () => {
        createKeyword()
    })
}


let getBotNames = () => {
    $.ajax({
        url: "PHP/getBotNames.php",
        type: "post",
        data: {},
        dataType: "html",
        success: (r) => {
            document.getElementById('ConBotName').innerHTML = r
        }
    })
}

let createBot = () => {
    $.ajax({
        url: "PHP/addBot.php",
        type: "post",
        data: {
            botName: document.getElementById('ConBotNameCreate').value
        },
        success: () => {
            console.log('Bot Created')
        }
    })
}

let getKeywords = () => {
    $.ajax({
        url: "PHP/getKeywords.php",
        type: "post",
        data: {
            BotID: document.getElementById('ConBotName').value,
        },
        success: (r) => {
            document.getElementById('KeywordsList').innerHTML = r
        }
    })
}

let createKeyword = () => {
    /*
    console.log(document.getElementById('ConKeyword').value)
    console.log(document.getElementById('ConResponse').value)
    console.log(document.getElementById('ConBotName').value)
    */
    $.ajax({
        url: "PHP/addResponse.php",
        type: "post",
        data: {
            ConKeyword: document.getElementById('ConKeyword').value,
            ConResponse: document.getElementById('ConResponse').value,
            ConBotID: document.getElementById('ConBotName').value,
        },
        success: () => {
            console.log('Response Created')
        }
    })
}
