let onLoad = () => {
    getBotNames()

    let createBotButton = document.getElementById('create_bot_submit')
    createBotButton.addEventListener('click', () => {
        createBot()
        getBotNames()
    })

    let BotSelection = document.getElementById('bot_name_input')
    BotSelection.addEventListener('change', () => {
        getKeywords()
    })

    let Add_Edit_Keyword = document.getElementById('add_edit_keyword')
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
            document.getElementById('bot_name_input').innerHTML = r
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

let getKeywords = () => {
    $.ajax({
        url: "PHP/getKeywords.php",
        type: "post",
        data: {
            BotID: document.getElementById('bot_name_input').value,
        },
        success: (r) => {
            document.getElementById('keywords_list').innerHTML = r
        }
    })
}

let createKeyword = () => {
    $.ajax({
        url: "PHP/addKeyword.php",
        type: "post",
        data: {
            ConKeyword: document.getElementById('keyword_input').value,
            ConResponse: document.getElementById('response_input').value,
            ConBotID: document.getElementById('bot_name_input').value,
        },
        success: () => {
            console.log('Response Created')
        }
    })
}
