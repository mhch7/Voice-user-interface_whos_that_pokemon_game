var whos = new Audio(
  "https://cdn.glitch.global/fe9df4a8-0eba-4554-bd63-983e0396bf7c/whos-that-pokemon_.mp3?v=1681871223188"
);

let myImages = [
  "https://cdn.glitch.global/fe9df4a8-0eba-4554-bd63-983e0396bf7c/charmander.png?v=1681879814312",
  "https://cdn.glitch.global/fe9df4a8-0eba-4554-bd63-983e0396bf7c/dragonite.png?v=1681879812554",
  "https://cdn.glitch.global/fe9df4a8-0eba-4554-bd63-983e0396bf7c/evee.png?v=1681879812795",
  "https://cdn.glitch.global/fe9df4a8-0eba-4554-bd63-983e0396bf7c/jigglypuff.png?v=1681879813018",
  "https://cdn.glitch.global/fe9df4a8-0eba-4554-bd63-983e0396bf7c/mewtwo.png?v=1681879813202",
  "https://cdn.glitch.global/fe9df4a8-0eba-4554-bd63-983e0396bf7c/ninetails.png?v=1681879813477",
  "https://cdn.glitch.global/fe9df4a8-0eba-4554-bd63-983e0396bf7c/pickachu.png?v=1681879813710",
  "https://cdn.glitch.global/fe9df4a8-0eba-4554-bd63-983e0396bf7c/snorlax.png?v=1681879813904",
  "https://cdn.glitch.global/fe9df4a8-0eba-4554-bd63-983e0396bf7c/squirtle.png?v=1681879814117",
  "https://cdn.glitch.global/fe9df4a8-0eba-4554-bd63-983e0396bf7c/bulbasaur.png?v=1681879812306",
];

let pokemonAnswers = [
  "Charmander",
  "Dragonite",
  "Eevee",
  "Jigglypuff",
  "Mewtwo",
  "Ninetales",
  "Pikachu",
  "Snorlax",
  "Squirtle",
  "Bulbasaur",
];
var i = 1;
var tries = 1;
let answer = myImages[0];
function randomImg() {
  let num = Math.floor(Math.random() * myImages.length);

  answer = pokemonAnswers[num];
  return myImages[num];
}

function voiceParser(transcript) {
  if (transcript == "start") {
    speak("This is a game where you try to guess the Pokemon shown");
    speak("Choose between the following options");
    speak("Say start to play the game");
    speak("Say help for help with the game");
    speak("Say credits for collaborators");
  }
  if (transcript == "play") {
    document.getElementById("poke").src = randomImg();
    whos.play();
  }
  if (transcript == answer) {
    document.getElementById("poke").src = randomImg();
    document.getElementById("points").innerHTML = "Points: " + i++;
    speak("Correct!");
  } else if (
    transcript != answer &&
    transcript != "restart" &&
    transcript != "help" &&
    transcript != "start" &&
    transcript != "credits" &&
    transcript != "play"
  ) {
    speak("Try Again!");
    document.getElementById("tries").innerHTML = "Tries: " + tries++;
  }
  if (tries == 3) {
    speak("You lose");
    speak("Your score" + i);
    window.location.reload();
  }
  if (transcript == "restart") {
    window.location.reload();
  }
  if (transcript == "help") {
    speak("Try saying play and then try to guess the Pokemon shown");
    speak("To restart the game simply say restart");
  }
  if (transcript == "credits") {
    speak("Mario and Muhammed");
  }
}
