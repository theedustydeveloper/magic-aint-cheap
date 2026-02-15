// ===== MODAL FUNCTIONALITY =====
let modal = null;

function createModal() {
    if (modal) return modal;
    
    modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="card" id="cardDisplay">
                <!-- Card content will be inserted here -->
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    
    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    return modal;
}

function openModal(cardData, cardType) {
    const modal = createModal();
    const cardDisplay = document.getElementById('cardDisplay');
    
    let cardHTML = '';
    
    if (cardType === 'reward') {
        cardHTML = createRewardCard(cardData);
    } else if (cardType === 'challenge') {
        cardHTML = createChallengeCard(cardData);
    } else if (cardType === 'monster') {
        cardHTML = createMonsterCard(cardData);
    } else if (cardType === 'environment') {
        cardHTML = createEnvironmentCard(cardData);
    } else if (cardType === 'treasure') {
        cardHTML = createTreasureCard(cardData);
    }
    
    cardDisplay.innerHTML = cardHTML;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// ===== CARD TEMPLATES =====

function createRewardCard(card) {
    return `
        <span class="close" onclick="closeModal()">&times;</span>
        <div class="card-header">
            <h2 class="card-title">${card['Card Name']}</h2>
            <span class="card-type">${card.Type}</span>
            <span class="card-cost">${card.Gold}G</span>
        </div>
        <div class="card-body">
            ${card.Rating ? `<div class="card-stat"><span class="card-stat-label">Rating</span><span class="card-stat-value">${card.Rating}</span></div>` : ''}
            ${card.Tags && card.Tags !== '-' ? `<div class="card-stat"><span class="card-stat-label">Tags</span><span class="card-stat-value">${card.Tags}</span></div>` : ''}
            ${card.Stat && card.Stat !== '-' ? `<div class="card-stat"><span class="card-stat-label">Stat</span><span class="card-stat-value">${card.Stat} ${card['Stat Bonus'] !== '0' ? '+' + card['Stat Bonus'] : ''}</span></div>` : ''}
            ${card['Die Affinity'] && card['Die Affinity'] !== '-' ? `<div class="card-stat"><span class="card-stat-label">Die Affinity</span><span class="card-stat-value">${card['Die Affinity']}</span></div>` : ''}
            ${card.Description && card.Description !== '-' ? `<div class="card-stat"><span class="card-stat-label">Description</span><span class="card-stat-value">${card.Description}</span></div>` : ''}
            ${card['Card Bonus'] && card['Card Bonus'] !== '-' ? `<div class="card-stat"><span class="card-stat-label">Card Bonus</span><span class="card-stat-value">${card['Card Bonus']}</span></div>` : ''}
            ${card.Slot && card.Slot !== '-' ? `<div class="card-stat"><span class="card-stat-label">Slot</span><span class="card-stat-value">${card.Slot}</span></div>` : ''}
            ${card['Block Type'] && card['Block Type'] !== '' ? `<div class="card-stat"><span class="card-stat-label">Block Type</span><span class="card-stat-value">${card['Block Type']}</span></div>` : ''}
        </div>
        <div class="card-footer">
            <p style="color: var(--text-dim); margin-top: 1rem;">Card ID: ${card.ID}</p>
        </div>
    `;
}

function createChallengeCard(card) {
    return `
        <span class="close" onclick="closeModal()">&times;</span>
        <div class="card-header">
            <h2 class="card-title">${card.Thematic_Name}</h2>
            <span class="card-type">${card.Type}</span>
            <span class="card-cost">${card.Difficulty}</span>
        </div>
        <div class="card-body">
            <div class="card-stat"><span class="card-stat-label">Challenge ID</span><span class="card-stat-value">${card.ID}</span></div>
            <div class="card-stat"><span class="card-stat-label">Level</span><span class="card-stat-value">${card.Level || 'N/A'}</span></div>
            ${card.Monsters && card.Monsters !== 'None' ? `<div class="card-stat"><span class="card-stat-label">Monsters</span><span class="card-stat-value">${card.Monsters} (${card['Monster_Count_1-2P']}/${card['Monster_Count_3-4P']})</span></div>` : ''}
            ${card.Special_Monster_Rules && card.Special_Monster_Rules !== 'None' ? `<div class="card-stat"><span class="card-stat-label">Special Monster Rules</span><span class="card-stat-value">${card.Special_Monster_Rules}</span></div>` : ''}
            ${card.Objects && card.Objects !== 'None' ? `<div class="card-stat"><span class="card-stat-label">Objects</span><span class="card-stat-value">${card.Objects} (${card['Object_Count_1-2P']}/${card['Object_Count_3-4P']})</span></div>` : ''}
            ${card.Required_Tests && card.Required_Tests !== 'None' ? `<div class="card-stat"><span class="card-stat-label">Required Tests</span><span class="card-stat-value">${card.Required_Tests}</span></div>` : ''}
            ${card.Environment && card.Environment !== 'None' ? `<div class="card-stat"><span class="card-stat-label">Environment</span><span class="card-stat-value">${card.Environment}</span></div>` : ''}
            <div class="card-stat"><span class="card-stat-label">Win Condition</span><span class="card-stat-value">${card.Win_Condition}</span></div>
            <div class="card-stat"><span class="card-stat-label">Time Limit</span><span class="card-stat-value">${card.Time_Limit_Rounds} rounds</span></div>
            <div class="card-stat"><span class="card-stat-label">Success Reward</span><span class="card-stat-value">${card.Success_Gold}${card.Success_Bonus && card.Success_Bonus !== 'None' ? ' + ' + card.Success_Bonus : ''}</span></div>
            <div class="card-stat"><span class="card-stat-label">Failure Penalty</span><span class="card-stat-value">${card.Failure_HP_Loss}${card.Failure_Hide_Next === 'Yes' ? ' + Hide next card' : ''}</span></div>
            <div class="card-stat"><span class="card-stat-label">Treasure</span><span class="card-stat-value">${card.Treasure_Die} (${card.Treasure_Target}) ${card.Treasure_Chance}</span></div>
        </div>
    `;
}

function createMonsterCard(card) {
    return `
        <span class="close" onclick="closeModal()">&times;</span>
        <div class="card-header">
            <h2 class="card-title">${card.Name}</h2>
            <span class="card-type">${card.Type}</span>
            <span class="card-cost">Tier ${card.Tier}</span>
        </div>
        <div class="card-body">
            <div class="card-stat"><span class="card-stat-label">HP</span><span class="card-stat-value">${card.HP}</span></div>
            <div class="card-stat"><span class="card-stat-label">Block</span><span class="card-stat-value">${card.Block}</span></div>
            <div class="card-stat"><span class="card-stat-label">Initiative</span><span class="card-stat-value">${card.Initiative}</span></div>
            <div class="card-stat"><span class="card-stat-label">Stats</span><span class="card-stat-value">M:${card.Might} S:${card.Speed} I:${card.Intelligence} W:${card.Willpower} C:${card.Charm} L:${card.Luck}</span></div>
            <div class="card-stat"><span class="card-stat-label">Weapon</span><span class="card-stat-value">${card['Weapon/Attack']}</span></div>
            <div class="card-stat"><span class="card-stat-label">Damage</span><span class="card-stat-value">${card.Damage_Formula}</span></div>
            <div class="card-stat"><span class="card-stat-label">Dice</span><span class="card-stat-value">${card.Dice_Affinity}</span></div>
            <div class="card-stat"><span class="card-stat-label">Crit Effect</span><span class="card-stat-value">${card.Dice_Bonus_Effect}</span></div>
            <div class="card-stat"><span class="card-stat-label">Target</span><span class="card-stat-value">${card.Target_Selection}</span></div>
            ${card.Abilities ? `<div class="card-stat"><span class="card-stat-label">Abilities</span><span class="card-stat-value">${card.Abilities}</span></div>` : ''}
            ${card.Ability_Details ? `<div class="card-stat"><span class="card-stat-label">Ability Details</span><span class="card-stat-value">${card.Ability_Details}</span></div>` : ''}
        </div>
        <div class="card-footer">
            <p style="color: var(--text-dim); font-style: italic; margin-top: 1rem;">${card.Thematic_Notes}</p>
        </div>
    `;
}

function createEnvironmentCard(card) {
    return `
        <span class="close" onclick="closeModal()">&times;</span>
        <div class="card-header">
            <h2 class="card-title">${card.Name}</h2>
            <span class="card-type">Environment</span>
            <span class="card-cost">${card.Floor}</span>
        </div>
        <div class="card-body">
            <div class="card-stat"><span class="card-stat-label">Effect</span><span class="card-stat-value">${card.Effect}</span></div>
            <div class="card-stat"><span class="card-stat-label">Affects</span><span class="card-stat-value">${card.Affects}</span></div>
            ${card.Damage_Type !== 'N/A' ? `<div class="card-stat"><span class="card-stat-label">Damage Type</span><span class="card-stat-value">${card.Damage_Type}</span></div>` : ''}
            <div class="card-stat"><span class="card-stat-label">Duration</span><span class="card-stat-value">${card.Duration}</span></div>
        </div>
        <div class="card-footer">
            <p style="color: var(--text-dim); font-style: italic; margin-top: 1rem;">${card.Thematic_Description}</p>
        </div>
    `;
}

function createTreasureCard(card) {
    return `
        <span class="close" onclick="closeModal()">&times;</span>
        <div class="card-header">
            <h2 class="card-title">${card.Card_Name}</h2>
            <span class="card-type">Treasure</span>
            <span class="card-cost">${card.Difficulty}</span>
        </div>
        <div class="card-body">
            <div class="card-stat"><span class="card-stat-label">Floor</span><span class="card-stat-value">${card.Floor}</span></div>
            <div class="card-stat"><span class="card-stat-label">Tests Required</span><span class="card-stat-value">${card.Test_Count} (${card.Test_Composition})</span></div>
            <div class="card-stat"><span class="card-stat-label">Reward Type</span><span class="card-stat-value">${card.Reward_Type}</span></div>
            <div class="card-stat"><span class="card-stat-label">Reward</span><span class="card-stat-value">${card.Reward_Details}</span></div>
        </div>
        <div class="card-footer">
            <p style="color: var(--text-dim); font-style: italic; margin-top: 1rem;">${card.Thematic_Description}</p>
        </div>
    `;
}

// ===== ACTIVE NAV LINK =====
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    // Hamburger menu functionality
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('nav ul');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking a link
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }

    // ===== PAGE BANNER EFFECTS =====
    initPageBanner();
    initHomepageHero();
});

function initPageBanner() {
    const banner = document.querySelector('.page-banner');
    if (!banner) return;

    const bannerBg = banner.querySelector('.page-banner-bg');
    const accents = banner.querySelectorAll('.banner-accent');

    // Parallax scroll effect
    let ticking = false;

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const scrolled = window.pageYOffset;
                const parallaxSpeed = 0.5;

                if (bannerBg) {
                    bannerBg.style.transform = `translateY(${scrolled * parallaxSpeed}px) scale(1.1)`;
                }

                ticking = false;
            });
            ticking = true;
        }
    });

    // Mouse movement effect for accent elements
    let mouseX = 0;
    let mouseY = 0;
    let bannerRect = banner.getBoundingClientRect();

    // Update banner rect on resize
    window.addEventListener('resize', () => {
        bannerRect = banner.getBoundingClientRect();
    });

    banner.addEventListener('mousemove', (e) => {
        mouseX = e.clientX - bannerRect.left;
        mouseY = e.clientY - bannerRect.top;

        accents.forEach((accent, index) => {
            // Different movement speeds for each accent
            const speed = (index + 1) * 0.02;
            const centerX = bannerRect.width / 2;
            const centerY = bannerRect.height / 2;

            const deltaX = (mouseX - centerX) * speed;
            const deltaY = (mouseY - centerY) * speed;

            // Add rotation for some accents
            const rotation = index % 2 === 0 ? (mouseX - centerX) * 0.01 : 0;

            accent.style.transform = `translate(${deltaX}px, ${deltaY}px) rotate(${rotation}deg)`;
        });
    });

    // Reset positions when mouse leaves
    banner.addEventListener('mouseleave', () => {
        accents.forEach((accent) => {
            accent.style.transform = 'translate(0, 0) rotate(0deg)';
        });
    });

    // Add floating animation
    accents.forEach((accent, index) => {
        const delay = index * 0.5;
        const duration = 3 + (index * 0.5);

        accent.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;
    });
}

function initHomepageHero() {
    const hero = document.querySelector('.homepage-hero');
    if (!hero) return;

    const heroBg = hero.querySelector('.homepage-hero-bg');
    const accents = hero.querySelectorAll('.banner-accent');

    // Parallax scroll effect
    let ticking = false;

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const scrolled = window.pageYOffset;
                const parallaxSpeed = 0.5;

                if (heroBg) {
                    heroBg.style.transform = `translateY(${scrolled * parallaxSpeed}px) scale(1.1)`;
                }

                ticking = false;
            });
            ticking = true;
        }
    });

    // Mouse movement effect for accent elements
    let mouseX = 0;
    let mouseY = 0;
    let heroRect = hero.getBoundingClientRect();

    // Update hero rect on resize
    window.addEventListener('resize', () => {
        heroRect = hero.getBoundingClientRect();
    });

    hero.addEventListener('mousemove', (e) => {
        mouseX = e.clientX - heroRect.left;
        mouseY = e.clientY - heroRect.top;

        accents.forEach((accent, index) => {
            const speed = (index + 1) * 0.02;
            const centerX = heroRect.width / 2;
            const centerY = heroRect.height / 2;

            const deltaX = (mouseX - centerX) * speed;
            const deltaY = (mouseY - centerY) * speed;

            const rotation = index % 2 === 0 ? (mouseX - centerX) * 0.01 : 0;

            accent.style.transform = `translate(${deltaX}px, ${deltaY}px) rotate(${rotation}deg)`;
        });
    });

    // Reset positions when mouse leaves
    hero.addEventListener('mouseleave', () => {
        accents.forEach((accent) => {
            accent.style.transform = 'translate(0, 0) rotate(0deg)';
        });
    });

    // Add floating animation
    accents.forEach((accent, index) => {
        const delay = index * 0.5;
        const duration = 3 + (index * 0.5);

        accent.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;
    });
}
