var mainMenuHeaderText = ["Fill Your Life With Adventures,", "Create Your Own Story", "Welcome to Tourist's Destiny"];
var counter = 0;
var delay = setInterval(change, 10000);

function change() {
    document.getElementById("changeHeader").innerHTML = mainMenuHeaderText[counter];
    counter++;
    if (counter >= mainMenuHeaderText.length) {
        counter = 0;
    }
}