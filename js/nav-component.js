class NavComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav>
                <div class="nav-logo">
                    <a href="index.html">
                        <img src="images/MAClogo.png" alt="Magic Ain't Cheap Logo">
                    </a>
                </div>
                <div class="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="rules.html">Rules</a></li>
                    <li><a href="glossary.html">Glossary</a></li>
                    <li><a href="rewards.html">Reward Cards</a></li>
                    <li><a href="challenges.html">Challenges</a></li>
                    <li><a href="treasure.html">Treasure</a></li>
                    <li><a href="floor-generator.html">Floor Generator</a></li>
                    <li><a href="game-maps.html">Game Maps</a></li>
                    <li><a href="changelog.html">Changelog</a></li>
                </ul>
            </nav>
        `;
    }
}

customElements.define('nav-component', NavComponent);
