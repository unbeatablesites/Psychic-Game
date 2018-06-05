    var youWin = 0;
    var youLose = 0;
    var totalLosses = 0;
    var trysLeft = 10;
    var attempts = 0;
    var attempts = [];
    var i = 0;
 
    var chars = "abcdefghiklmnopqrstuvwxyz";
    
    var randomChar = '';

    
    function randomString() {
        var temp = Math.floor(Math.random() * chars.length);
        randomChar = chars[temp];
        return randomChar;
    }

    
    function reset() {
        trysLeft = 10;
        attempts.length = 0;
        i = 0;
        computerGuess = randomString();
    }
      
        var computerGuess = randomString();
    
    document.onkeyup = function(event) {

        
        var userGuess = event.key;

    
        attempts[i] = userGuess;
        
        if(userGuess === computerGuess ) {
            youWin++; 
            reset();
        } else {
            totalLosses++;
            trysLeft--;
        }

        i++;
        
        console.log(attempts);
        
        if(trysLeft == 0) {
            youLose++;
            reset();
        }

        var html = 
        
        "<p> Guess What letter I'm thinking of </p>" +
        "<p> youWin: " + youWin + "</p>" +
        "<p> youLose: " + youLose + "</p>" +
        "<p> Guesses Left: " + trysLeft + "</p>" +
        "<p> Your Guesses so far: " + attempts + "</p>";

        document.querySelector("#game").innerHTML = html;
    };