let onLoad = () => {
    let change_response = document.getElementById('edit_keyword')
    change_response.addEventListener('change', () => {
        getResponse()
    })

    let createBotButton = document.getElementById('create_bot_submit')
    createBotButton.addEventListener('click', () => {
        createBot()
        getBotNames()
    })

    let BotSelection = document.getElementById('bot_name_input')
    BotSelection.addEventListener('change', () => {
        getKeywords()
    })

    let Add_Keyword = document.getElementById('add_keyword')
    Add_Keyword.addEventListener('click', () => {
        createKeyword()
    })

    let Edit_Keyword = document.getElementById('edit_keyword_submit')
    Edit_Keyword.addEventListener('click', () => {
        editKeyword()
    })

    let Refresh_BTN = document.getElementById('refresh_button')
    Refresh_BTN.addEventListener('change', () => {
        refreshBot()
    })

    getBotNames()
}

let getBotNames = () => {
    $.ajax({
        url: "PHP/getBotNames.php",
        type: "post",
        data: {},
        dataType: "html",
        success: (r) => {
            document.getElementById('bot_name_input').innerHTML = r
            getKeywords()
        }
    })
}

let getKeywords = () => {
    $.ajax({
        url: "PHP/getKeywords.php",
        type: "post",
        data: {
            BotID: document.getElementById('bot_name_input').value,
        },
        dataType: "html",
        success: (r) => {
            document.getElementById('edit_keyword').innerHTML = r
            getResponse()
        }
    })
}

let getResponse = () => {
    $.ajax({
        url: "PHP/getResponse.php",
        type: "post",
        data: {
            keywordID: document.getElementById('edit_keyword').value,
        },
        dataType: "html",
        success: (r) => {
            document.getElementById('edit_response').innerHTML = r
        }
    })
}

let createBot = () => {
    $.ajax({
        url: "PHP/addBot.php",
        type: "post",
        data: {
            botName: document.getElementById('bot_name_create_input').value,
            mainColor: document.getElementById('main_color_input').value,
            secColor: document.getElementById('secondary_color_input').value,
            position: document.getElementById('position_input').value,
        },
        success: () => {
            console.log('Bot Created')
        }
    })
}

let createKeyword = () => {
    let def = 0
    let res = 0
    if (document.getElementById('default_input').value) {
        def = 1
    }
    if (document.getElementById('options_input').value) {
        res = 1
    }
    $.ajax({
        url: "PHP/addKeyword.php",
        type: "post",
        data: {
            keyword: document.getElementById('keyword_input').value,
            response: document.getElementById('response_input').value,
            default: def,
            responses: res,
            botID: document.getElementById('bot_name_input').value,
        },
        success: (r) => {
            console.log(r)
        }
    })
}

let editKeyword = () => {
    $.ajax({
        url: "PHP/editKeyword.php",
        type: "post",
        data: {
            keywordID: document.getElementById('edit_keyword').value,
            response: document.getElementById('edit_response').value,
        },
        success: () => {
            getResponse()
        }
    })
}


let refreshBot = () => {
    botID = document.getElementById('bot_name_input').value
    $.ajax({
        url: "PHP/getBotName.php",
        type: "post",
        data: {
            botID: botID,
        },
        success: (r) => {
            StartBot(r)
        }
    })
}