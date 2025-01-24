let player1Selection = null;
let player2Selection = null;

function selectCharacter(element, player) {
    const img = element.querySelector('img');

    // Remove previous selection for the player
    const previousSelection = document.querySelector(`.selected.${player}`);
    if (previousSelection) {
        previousSelection.classList.remove('selected', player);
    }

    // Mark this character as selected for the player
    img.classList.add('selected', player);

    if (player === 'player1') {
        player1Selection = img.src;
    } else if (player === 'player2') {
        player2Selection = img.src;
    }
}

function startGame() {
    if (!player1Selection || !player2Selection) {
        alert('Please select a character for both players!');
        return;
    }

    // Pass selections to the game (for now, just display them)
    alert(`Player 1: ${player1Selection}\nPlayer 2: ${player2Selection}`);
}
