function moveButton() {
    const noBtn = document.getElementById("no-btn");
    
    // Generate random coordinates within the window
    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * (window.innerHeight - 100);
    
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

function acceptDate() {
    const container = document.querySelector(".container");
    
    // Change the content to show date choices (or a success message)
    container.innerHTML = `
        <img src="https://media.giphy.com/media/3oKIPnAiaMCws8nOsE/giphy.gif" alt="Happy dance">
        <h1>Yay! Knew you'd say yes. 🥰</h1>
        <p style="font-size: 18px; font-weight: bold; color: #333;">Choose your adventure:</p>
        <button onclick="alert('Dinner & Drinks it is! 🍷')" style="background:#ff4d4d; color:white; margin: 5px;">Fancy Dinner 🍝</button>
        <button onclick="alert('Casual vibes, let\'s go! 🍿')" style="background:#ff4d4d; color:white; margin: 5px;">Movies & Snacks 🎬</button>
        <button onclick="alert('Mini golf / Arcade showdown! 🕹️')" style="background:#ff4d4d; color:white; margin: 5px;">Arcade / Activity 🎳</button>
    `;
}
