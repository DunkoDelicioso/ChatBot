let num = 570394

function setup() {
  let speech = new p5.Speech()
  // let speechRec = new p5.SpeechRec("en-US", gotSpeech)
  // let continuous = true;
  // let interim = false;
  // speechRec.start(continuous, interim);
  

  let button = select('#submit')
  let user_input = select('#user_input')
  let output = select('#output')

  let bot = new RiveScript();

  bot.loadFile("mind.rive").then(loading_done).catch(loading_error);

  function loading_done() {
    console.log("Bot has finished loading!");
  
    // Now the replies must be sorted!
    bot.sortReplies();
  
    // And now we're free to get a reply from the brain!
  
    // RiveScript remembers user data by their username and can tell
    // multiple users apart.
    let username = "local-user";
  
    // NOTE: the API has changed in v2.0.0 and returns a Promise now.
    bot.reply(username, "Hello, bot!").then(function(reply) {
      console.log("The bot says: " + reply);
    });
  }


function loading_error(error, filename, lineno) {
  console.log("Error when loading files: " + error);
}

function gotSpeech(){
  if (speechRec.resultValue){
    let input = speechRec.resultString;

  }
}


  button.mousePressed(chat);

  function chat(){
    let input = user_input.value()
    bot.reply("local-user", input).then(function(reply) {
      console.log("Bot>", reply);
      output.html(reply);
      speech.speak(reply)
    });

    
  }

}
