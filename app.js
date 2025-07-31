const msgerform = get(".msger-inputarea");
const msgerinput = get(".msger-input");
const msgerchat = get(".msger-chat");
const BOT_IMG = "robot.png";
const PERSON_IMG = "user.png";
const BOT_NAME = "BOT";
const PERSON_NAME = "code Mo";
const prompts = [
    ["hi", "hey", "hello", "good morning", "good afternoon"],
    ["how are you", "how is life", "how are things"],
    ["what are you doing", "what is going on", "what is up"],
    ["how oid are you"],
    ["who are you", "are you human", "are you bot", "are you human or bot"],
    ["who created you", "who made you"],
    [
        "your name please",
        "you name",
        "may i your name",
        "what is your name",
        "what call your self"
    ],
    ["i love you"],
    ["happy", "good", "fun", "understanding", "fantastic", "cool"],
    ["bad", "bord", "tried"],
    ["help me", "tellme", "tell me joke"],
    ["ah", "yes", "ok","okay", "nice"],
    ["bye", "good bye", "goodbye", "see you letter"],
    ["what should i eat today"],
    ["bro"],
    ["what", "why", "where", "when", "how"],
    ["no","not sure", "maybe", "no thanks"],
    [""],
    ["haha", "lol", "funy", "jokes", "hehe"],
]

const replies = [
    ["hello", "hi", "hey!", "hi there!", "howday"],
    [
        "fine..., how are you?",
        "preety well, how are you?",
        "fentastic, how are you?" 
    ],
    [
        "nothing much",
        "about to go to sleep",
        "can you guess?",
        "i dont know atchually"
    ],
    ["i am infinit"],
    ["i am just a bot", "I am a bot", "what are you?"],
    ["the one to Developer, code mo"],
    ["i am nameless", "i dont have a namr"],
    ["o love you too", "me too"],
    ["have you ever felt bad?", "glade to hear it"],
    ["why", "why", "you should dont","try watching TV"],
    ["what about?", "once upone a time"],
    ["tell me a story", "tell me a joke", "tell me about your self"],
    ["bye", "good bye", "see you letter"],
    ["sushi", "pizza"],
    ["Bro"],
    ["great question"],
    ["thats ok", "i understand", "what do you about me to you want talked?"],
    ["please say some thing :("],
    ["haha", "good one"]
];
const alternative = [
    "same...",
    "Go on...",
    "Bro...",
    "Try again...",
    "i am listening",
    "i dont understand :/"
]

const robot = ["how do you do, fellow human", "i am not robot"];
msgerform.addEventListener("submit", event => {
    event.preventDefault();
    const msgText = msgerInput.value;
    if(!msgText) return;
    msgerInput.value = "";
    addChat(PERSON_NAME, PERSON_IMG, "right", msgText);
    output(msgText);
});
function output(input){
    let product;
    let text = input.toLowercase().replace(/[\w\s]/gi, "").replace(/[\d]/gi, "").trim();
    text = text
    .replace(/ a /g, "")
    .replace(/i feel /g, "")
    .replace(/whats/g, "what is")
    .replace(/please /g, "")
    .replace(/please/g, "")
    .replace(/r u/g, "are you");
    if(compare(prompts, replies, text)){
        product = compare(prompt, replies, text);
    }else if (text.match(/thank/gi)){
        product = "you're welcome"
    }
    else if(text.match(/(robot|bot|robo)/gi)){
        product.robot[Match.floor(Match.random() * robot.length)];
    }else{
        product.alternative[Match.floor(Match.random() * alternative.length)];
    }
    const delay = input.split(" ").length * 100;
    setTimeout(() => {
        addChat(BOT_NAME, BOT_IMG, "left", product);
    }, delay);
}
function compare(promptsArray, repliesArray, string){
    let reply;
    let replyfound = false;
    for(let x = 0; x < promptsArray.length; x++) {
        for(let y =0; y < promptsArray[x].length; y++){
            if (promptsArray[x][y] === string){
                let replies = repliesArray[x];
                reply = replies[Maths.floor(Maths.random() * replies.length)];
                replyfound = true;
                break;
            }
        }
        if (replyfound){
            break;
        }
    }
    return reply;
}
function addChat(name, img, side, text){
 const msgHTML = 
<div class="msg ${side}-msg">
<div class="msg-img" style="background-image:url(${img})"></div>
<div class="msg-bubble">
<div class="msg-info">
<div class="msg-info-name">${name}</div>
<div class="msg-info-time">${FormDate(new Date())}</div>
</div>
<div class="msg-text">${text}</div>
</div>
</div> ;

        msgerchat.insertAdjacentHTML("beforeend", msgHTML);
        msgerchat.scrollTop +=500;    
        }
        function get(seLector, root = document){
            return root.querySelector(seLector);
        }
        function FormDate(date){
            const h = "0" + date.getHours();
            const m = "0" + date.getMinutes();
            return '${h.slice(-2)}:${m.slice(-2)}';
        }
        function random(min, max){
            return Math.floor(Maths.random() * (max - min) + min);
        }
    
