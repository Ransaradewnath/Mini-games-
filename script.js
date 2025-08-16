// Launch selected game
function launchGame(game) {
  const gameArea = document.getElementById('gameArea');
  document.getElementById('gameModal').style.display = 'flex';

  if (game === 'dice') {
    gameArea.innerHTML = `
      <h2>🎲 Dice Roller</h2>
      <div class="dice-container">
        <div class="dice" id="dice"></div>
      </div>
      <button onclick="rollDice()">Roll Dice</button>
    `;
}

  if (game === 'memory') {
    gameArea.innerHTML = `
      <h2>🧠 Memory Game</h2>
      <div class="memory-grid" id="memoryGrid"></div>
    `;
    setupMemoryGame();
}

  if (game === 'rps') {
    gameArea.innerHTML = `
      <h2>✂️ Rock-Paper-Scissors</h2>
      <div class="rps-buttons">
        <button onclick="playRPS('rock')">🪨</button>
        <button onclick="playRPS('paper')">📄</button>
        <button onclick="playRPS('scissors')">✂️</button>
      </div>
      <div id="rpsResult" style="margin-top:1rem; font-size:1.5rem;"></div>
    `;
}
}

// Close modal
function closeGame() {
  document.getElementById('gameModal').style.display = 'none';
}

// 🎲 Dice Roller
function rollDice() {
  const dice = document.getElementById('dice');
  const roll = Math.floor(Math.random() * 6) + 1;
  dice.setAttribute('data-roll', roll);
}

// 🧠 Memory Game
function setupMemoryGame() {
  const emojis = ['🍎','🍌','🍇','🍓','🍒','🍍'];
  const cards = [...emojis,...emojis].sort(() => 0.5 - Math.random());
  const grid = document.getElementById('memoryGrid');
  grid.innerHTML = '';
  cards.forEach((emoji) => {
    const card = document.createElement('div');
    card.className = 'memory-card';
    card.innerHTML = `
      <div class="card-inner" data-emoji="${emoji}">
        <div class="card-front">❓</div>
        <div class="card-back">${emoji}</div>
      </div>
    `;
    card.addEventListener('click', () => flipCard(card));
    grid.appendChild(card);
});
}

let flippedCards = [];

function flipCard(card) {
  const inner = card.querySelector('.card-inner');
  if (flippedCards.length < 2 &&!inner.classList.contains('flipped')) {
    inner.classList.add('flipped');
    flippedCards.push(inner);
    if (flippedCards.length === 2) {
      setTimeout(checkMatch, 1000);
}
}
}

function checkMatch() {
  const [card1, card2] = flippedCards;
  if (card1.dataset.emoji === card2.dataset.emoji) {
    card1.parentElement.style.pointerEvents = 'none';
    card2.parentElement.style.pointerEvents = 'none';
} else {
    card1.classList.remove('flipped');
    card2.classList.remove('flipped');
}
  flippedCards = [];
}

// ✂️ Rock-Paper-Scissors
function playRPS(playerChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const botChoice = choices[Math.floor(Math.random() * 3)];
  let result = '';

  if (playerChoice === botChoice) result = 'Draw!';
  else if (
    (playerChoice === 'rock' && botChoice === 'scissors') ||
    (playerChoice === 'paper' && botChoice === 'rock') ||
    (playerChoice === 'scissors' && botChoice === 'paper')
) result = 'You Win!';
  else result = 'You Lose!';

  document.getElementById('rpsResult').textContent = `Bot chose ${botChoice}. ${result}`;
}

// 🌙 Theme Toggle
document.getElementById('themeToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
