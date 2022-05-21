let onLoad = () => {
    let change_response = document.getElementById('edit_keyword')
    change_response.addEventListener('change', () => {
        getResponse()
    })

    let createBotButton = document.getElementById('create_bot_submit')
    createBotButton.addEventListener('click', () => {
        createBot()
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
    Refresh_BTN.addEventListener('click', () => {
        refreshBot()
    })

    let Edit_Bot = document.getElementById('edit_bot_submit')
    Edit_Bot.addEventListener('click', () => {
        editBot()
    })

    let Del_Keyword = document.getElementById('delete_keyword')
    Del_Keyword.addEventListener('click', () => {
        deleteKeyword()
    })
    
    //console.log('Starting web')
    getBotNames()
}

let getBotNames = () => {
    //console.log('getting bot names')
    $.ajax({
        url: "PHP/getBotNames.php",
        type: "post",
        data: {},
        dataType: "html",
        success: (r) => {
            //console.log(r)
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
            displayCodeToCopy()
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
            getBotNames()
        }
    })
}

let createKeyword = () => {
    if (document.getElementById('msg_type_input').value === 1) {
        $.ajax({
            url: "PHP/addKeyword.php",
            type: "post",
            data: {
                keyword: document.getElementById('keyword_input').value,
                response: document.getElementById('response_input').value,
                botID: document.getElementById('bot_name_input').value,
            },
            success: (r) => {
                console.log(r)
                getKeywords()
            }
        })
    }
    else {
        $.ajax({
            url: "PHP/addSpecialKeyword.php",
            type: "post",
            data: {
                response: document.getElementById('response_input').value,
                botID: document.getElementById('bot_name_input').value,
                type: document.getElementById('msg_type_input').value,
            },
            success: (r) => {
                console.log(r)
                getKeywords()
            }
        })
    }
    
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

let editBot = () => {
    $.ajax({
        url: "PHP/editBot.php",
        type: "post",
        data: {
            OldBotname: document.getElementById('bot_name_input').value,
            botName: document.getElementById('bot_name_edit_input').value,
            mainColor: document.getElementById('edit_main_color_input').value,
            secColor: document.getElementById('edit_secondary_color_input').value,
            position: document.getElementById('edit_position_input').value,
        },
        success: () => {
            getBotNames()
            getResponse()
        }
    })
}


let refreshBot = () => {
    botID = document.getElementById('bot_name_input').value
    if(document.getElementById('ConIdDisplayBTN')) {
        let DisplayBTN = document.getElementById('ConIdDisplayBTN')
        DisplayBTN.parentNode.removeChild(DisplayBTN)
        let BotBox = document.getElementById('ConIdBotBox')
        BotBox.parentNode.removeChild(BotBox)
    }
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

let deleteKeyword = () => {
    $.ajax({
        url: "PHP/delKeyword.php",
        type: "post",
        data: {
            keywordID: document.getElementById('edit_keyword').value,
        },
        success: () => {
            getBotNames()
            getKeywords()
        }
    })
}

let deleteBot = () => {
    $.ajax({
        url: "PHP/delBot.php",
        type: "post",
        data: {
            botID: document.getElementById('bot_name_input').value
        },
        success: () => {
            getBotNames()
            getKeywords()
        }

    })
}

let displayCodeToCopy = () => {
    document.getElementById('copyThisCode').innerHTML = '&ltscript src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous" referrerpolicy="no-referrer"&gt&lt/script&gt' +
    '&ltscript src="https://kit.fontawesome.com/3ed253b427.js" crossorigin="anonymous"&gt&lt/script&gt' +
    '&ltscript src="https://lab.uzlabina.cz/~boudafr/ConnorWeb/ConnorBot/Connor.js" defer onload="StartBot(\''+ document.getElementById('bot_name_input').options[document.getElementById('bot_name_input').selectedIndex].text +'\')"&gt&lt/script&gt' +
    '&ltlink rel="stylesheet" href="https://lab.uzlabina.cz/~boudafr/ConnorWeb/ConnorBot/ConnorStyles.css"&gt'
}

