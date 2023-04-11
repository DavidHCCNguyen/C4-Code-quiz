function printHighScores() {
    var highScores = JSON.parse(window.localStorage.getItem("highscores")) || [];

    // displays the scores in desending order
    highScores.sort(function( a, b) {
        return b.score - a.score;
    });

    for (var i = 0; i < highScores.length; i += 1) {
        // create li tag for each high score
        var liTag = document.createElement('li');
        liTag.textContent = highScores[i].initials + ' - ' + highScores[i].score;
        // display on page
        var olEl = document.getElementById('highscores');
        olEl.appendChild(liTag);
      }
    }

    function clearHighscores() {
      window.localStorage.removeItem('highscores');
      window.location.reload();
    }

    document.getElementById('clear').onclick = clearHighscores;
    // run function when page loads
    printHighScores();