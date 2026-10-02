let currentCard = 0;

let cardOpened = false;



const cards = [

  {
    title: "Our Beginning ❤️",

    text: "Sometimes the smallest moments become the beginning of something beautiful.",

    extra: `
        <div class="beginning-card">

            <div class="beginning-year">
                2022
            </div>

            <div class="beginning-icon">
                🌸
            </div>

            <h3>
                Fountain Park
            </h3>

            <p>
                I still remember the first time we met.
            </p>

            <p>
                I approached you to help me with my
                CAD drawing...
            </p>

            <p class="special-line">
                And I had absolutely no idea that
                this little moment would introduce me
                to someone who would become so important
                to me. ❤️
            </p>

            <div class="beginning-ending">
                Little did I know...
                <br>
                this was only the beginning. 🥹
            </div>

        </div>
    `
},


  {
    title: "Things I Love About You 🫶🏻",

    text: "I couldn't say these things when your friends asked me...",

    extra: `
        <div class="reasons-intro">

            <p>
                When your friends asked me about you,
                I couldn't really tell them what I felt.
            </p>

            <p class="sorry-line">
                I'm sorry for that. ❤️
            </p>

            <p>
                So let me make up for it right here...
                by telling you the things I love about you. 🥹
            </p>

            <p class="tap-hint">
                Tap each heart to find out. 💗
            </p>

        </div>

        <div class="reason-grid">

            <button class="reason-button" onclick="revealReason(0)">
                ❤️
                <span>1</span>
            </button>

            <button class="reason-button" onclick="revealReason(1)">
                ❤️
                <span>2</span>
            </button>

            <button class="reason-button" onclick="revealReason(2)">
                ❤️
                <span>3</span>
            </button>

            <button class="reason-button" onclick="revealReason(3)">
                ❤️
                <span>4</span>
            </button>

            <button class="reason-button" onclick="revealReason(4)">
                ❤️
                <span>5</span>
            </button>

        </div>

        <div id="reasonDisplay" class="reason-display">
            <p>Choose a heart... 💗</p>
        </div>
    `
},

{
    title: "One Of My Favourite Memories 🥹",

    text: "Some moments become memories without us realizing it.",

    extra: `
        <div class="memory-gallery">

            <div class="memory-counter">
                Memory <span id="memoryNumber">1</span> of 3
            </div>

            <img
                id="memoryImage"
                src="images/Memory1.jpeg"
                class="memory-photo"
            >

            <p id="memoryCaption" class="photo-caption">
                One of those moments I'd choose to live again. ❤️
            </p>

            <div class="gallery-buttons">

                <button onclick="previousMemory()">
                    ←
                </button>

                <button onclick="nextMemory()">
                    →
                </button>

            </div>

        </div>

        <p>
            And somehow, the little moments with you
            are the ones I remember the most. 🥹
        </p>
    `
},

 {
    title: "Our Little Story ❤️",

    text: "From a simple CAD drawing to something I never want to lose...",

    extra: `
        <div class="timeline">

            <div class="timeline-item">
                <div class="timeline-heart">🌸</div>

                <h3>2022 — The First Hello</h3>

                <p>
                    We met for the first time at Fountain Park.
                    I still remember that moment when I approached
                    you to help me with my CAD drawing.
                    Little did I know that a simple CAD drawing
                    would introduce me to someone so special. ❤️
                </p>
            </div>


            <div class="timeline-item">
                <div class="timeline-heart">🫶🏻</div>

                <h3>2023 — Our Friendship Grew</h3>

                <p>
                    Slowly, I started getting to know you more.
                    Our friendship grew, and we began going out
                    in groups with our friends.
                    Those little moments became some of my favourite memories.
                </p>
            </div>


            <div class="timeline-item">
                <div class="timeline-heart">✨</div>

                <h3>20 October 2025 — Finding Each Other Again</h3>

                <p>
                    Somehow, life made us lose touch again...
                    until one simple message brought us back.
                    Just a simple "Happy Diwali" from you,
                    but it started something beautiful all over again. 🥹
                </p>
            </div>


            <div class="timeline-item">
                <div class="timeline-heart">💌</div>

                <h3>14 February 2026 — A Little Confession</h3>

                <p>
                    Valentine's Day became a little more special
                    when we had our little confession on the highway.
                    A moment I'll always keep close to my heart. ❤️
                </p>
            </div>


            <div class="timeline-item">
                <div class="timeline-heart">❤️</div>

                <h3>12 March 2026 — Finally Us</h3>

                <p>
                    And then, on 12th March,
                    we finally became a "we".
                    From friendship to love...
                    somehow, we found our way here.
                </p>
            </div>


            <div class="timeline-item">
                <div class="timeline-heart">♾️</div>

                <h3>Today — To Forever</h3>

                <p>
                    We've had beautiful moments,
                    difficult moments, silly fights,
                    laughter and everything in between.
                    But if there's one thing I know,
                    it's that I want to keep writing
                    this story with you.
                    Today, tomorrow and hopefully...
                    to forever. ❤️
                </p>
            </div>

        </div>
    `
},

  {
    title: "Our Little Things 🥰",

    text: "The little things that became our favourite things...",

    extra: `
        <div class="little-things-intro">

            <p>
                Maybe these things seem small...
                but they're some of the things
                I'll always remember about us. ❤️
            </p>

            <p class="tap-hint">
                Tap each one to unlock a little memory. 🥹
            </p>

        </div>

        <div class="little-things-grid">

            <button
                class="little-thing"
                onclick="showLittleThing(0)">
                🛣️
                <span>Kharar Weekends</span>
            </button>

            <button
                class="little-thing"
                onclick="showLittleThing(1)">
                ☕
                <span>Our Favourites</span>
            </button>

            <button
                class="little-thing"
                onclick="showLittleThing(2)">
                🫶🏻
                <span>Distance</span>
            </button>

            <button
                class="little-thing"
                onclick="showLittleThing(3)">
                🥹
                <span>Our Visits</span>
            </button>

            <button
                class="little-thing"
                onclick="showLittleThing(4)">
                🛌
                <span>Our Cuddles</span>
            </button>

            <button
                class="little-thing"
                onclick="showLittleThing(5)">
                🐃
                <span>Bhains & Moti</span>
            </button>

        </div>

        <div id="littleThingDisplay" class="little-thing-display">

            <p>
                Tap something above... 💗
            </p>

        </div>
    `
},


   {
    title: "One Last Little Question 👀",

    text: "Before you reach the end... I want to know if you know me this well. ❤️",

    extra: `
        <div class="guess-game">

            <p class="guess-question">
                After everything we've been through,
                what do you think I want the most?
            </p>

            <div class="guess-options">

                <button onclick="chooseGuess(this, false)">
                    🛍️ More Shopping
                </button>

                <button onclick="chooseGuess(this, false)">
                    🍕 Unlimited Food
                </button>

                <button onclick="chooseGuess(this, true)">
                    ❤️ More Memories With You
                </button>

            </div>

            <div id="guessResult" class="guess-result"></div>

        </div>
    `
},
  {
    title: "Are You Ready? 🥺",

    text: "You've reached the last little piece of this journey...",

    extra: `
        <div class="final-card-message">

            <div class="final-heart">
                ❤️
            </div>

            <p>
                From a simple CAD drawing in 2022...
                to Kharar weekends...
                to long-distance visits...
                to all our little fights, laughs,
                cuddles and memories...
            </p>

            <p class="final-highlight">
                Somehow, all those little moments
                brought us here. 🥹
            </p>

            <p>
                And if I could choose again,
                I'd still choose you.
                ❤️
            </p>

            <div class="ready-line">
                One last thing is waiting for you... 💌
            </div>

        </div>
    `
}

];



function startJourney() {

    document
        .getElementById("welcome")
        .classList.remove("active");

    document
        .getElementById("cards")
        .classList.add("active");

    loadCard();

}



function loadCard() {

    const card = cards[currentCard];
    const loveCard = document.querySelector(".love-card");

const cardStyles = [
    {
        background: "#fff4e6",
        borderRadius: "35px 10px 35px 10px",
        border: "3px solid #f3c6a8"
    },

    {
        background: "#ffeaf2",
        borderRadius: "50px",
        border: "3px solid #ef9db8"
    },

    {
        background: "#fffdf2",
        borderRadius: "8px",
        border: "5px solid #d8c29d"
    },

    {
        background: "#f5edff",
        borderRadius: "40px 12px 40px 12px",
        border: "3px solid #c9a8e8"
    },

    {
        background: "#eaf9f3",
        borderRadius: "20px 50px 20px 50px",
        border: "3px solid #9ed6c0"
    },

    {
        background: "#eef5ff",
        borderRadius: "50px 15px 50px 15px",
        border: "3px dashed #9dbbe5"
    },

    {
        background: "#fff0f5",
        borderRadius: "50px",
        border: "4px solid #d94f76"
    }
];

const style = cardStyles[currentCard];

loveCard.style.setProperty(
    "background",
    style.background,
    "important"
);

loveCard.style.setProperty(
    "border-radius",
    style.borderRadius,
    "important"
);

loveCard.style.setProperty(
    "border",
    style.border,
    "important"
);
    document.querySelector(".love-card").className =
    `love-card card-${currentCard + 1}`;

    document.getElementById("cardNumber").innerText =
        `💌 ${String(currentCard + 1).padStart(2, '0')}`;

    document.getElementById("cardTitle").innerText =
        card.title;

    document.getElementById("cardText").innerText =
        card.text;

    document.getElementById("extraContent").innerHTML =
        "";

    document.getElementById("openButton").innerText =
        "Open Card ❤️";

    cardOpened = false;

    document.getElementById("progressText").innerText =
        `Card ${currentCard + 1} of ${cards.length}`;

}



function openCard() {

    if (!cardOpened) {

        const card = cards[currentCard];

        document.getElementById("extraContent").innerHTML =
            card.extra;

        document.getElementById("openButton").innerText =
            currentCard === cards.length - 1
                ? "Continue ❤️"
                : "Next Card 💌";

       cardOpened = true;

if (currentCard === 3) {
    animateTimeline();
}

return;
    }


    if (currentCard < cards.length - 1) {

        currentCard++;

        loadCard();

    } else {

        showFinal();

    }

}



function showFinal() {

    document
        .getElementById("cards")
        .classList.remove("active");

    document
        .getElementById("final")
        .classList.add("active");

}



function revealMessage() {

    document
        .getElementById("finalMessage")
        .classList.remove("hidden");

    document.querySelector(".final-box button").style.display =
        "none";

    createHearts();

}



function createHearts() {

    for (let i = 0; i < 25; i++) {

        setTimeout(() => {

            const heart = document.createElement("div");

            heart.className = "heart-float";

            heart.innerText =
                Math.random() > 0.5 ? "❤️" : "💗";

            heart.style.left =
                Math.random() * 100 + "vw";

            heart.style.fontSize =
                (15 + Math.random() * 25) + "px";

            document.body.appendChild(heart);


            setTimeout(() => {

                heart.remove();

            }, 6000);

        }, i * 150);

    }

}



/* Keep hearts floating in the background */

setInterval(() => {

    const heart = document.createElement("div");

    heart.className = "heart-float";

    heart.innerText = "♡";

    heart.style.left =
        Math.random() * 100 + "vw";

    document.body.appendChild(heart);


    setTimeout(() => {

        heart.remove();

    }, 6000);

}, 1200);
const memories = [

    {
        image: "images/Memory1.jpeg",
        caption: "One of those moments I'd choose to live again. ❤️"
    },

    {
        image: "images/Memory2.jpeg",
        caption: "A memory I'll always keep close to my heart. 🥹"
    },

    {
        image: "images/Memory3.jpeg",
        caption: "Just us... and one of my favourite memories. 🫶🏻"
    }

];

let currentMemory = 0;


function showMemory() {

    document.getElementById("memoryImage").src =
        memories[currentMemory].image;

    document.getElementById("memoryCaption").innerText =
        memories[currentMemory].caption;

    document.getElementById("memoryNumber").innerText =
        currentMemory + 1;

}


function nextMemory() {

    currentMemory++;

    if (currentMemory >= memories.length) {
        currentMemory = 0;
    }

    showMemory();

}


function previousMemory() {

    currentMemory--;

    if (currentMemory < 0) {
        currentMemory = memories.length - 1;
    }

    showMemory();

}
function animateTimeline() {

    const items = document.querySelectorAll(".timeline-item");

    items.forEach((item, index) => {

        setTimeout(() => {

            item.classList.add("show");

        }, index * 500);

    });

}

const reasons = [

    `Jab main tumhare room pe aati hoon na,
    tum mujhe koi kaam hi nahi karne dete. 😂
    "Tum rehne do, main kar lunga" is basically
    your favourite dialogue.
    At this point, I think you're training me
    to do absolutely nothing. 😭❤️`,

    `I love the way you care about me. 🫶🏻
    Jab main tumhare saath hoti hoon,
    mujhe har cheez ke baare mein itna sochna
    nahi padta.
    There's just this feeling that I'm safe
    when I'm with you. ❤️`,

    `I really admire your hard work and patience
    towards your work. ✨
    The way you keep going and stay patient
    genuinely motivates me to work harder too.
    You inspire me without even trying. 🥹❤️`,

    `And then there's your next-level patience
    with my tantrums. 😂
    I honestly don't know how you handle
    all my moods, complaints and drama
    without running away. 😭
    But you still stay and deal with me patiently.
    Thank you for loving this slightly dramatic
    version of me. ❤️`,

    `Okay... this one is slightly embarrassing. 🙈
    But I really like your hands. ❤️
    There's just something about them
    that I find really attractive.
    And yes... this is something I probably
    wouldn't have been able to say
    when your friends asked me. 😂❤️`

];


function revealReason(index) {

    const display =
        document.getElementById("reasonDisplay");

    display.innerHTML =
        `<p class="reason-text">${reasons[index]}</p>`;

    document
        .querySelectorAll(".reason-button")
        .forEach((button, i) => {

            if (i === index) {
                button.classList.add("opened");
            }

        });

}
const littleThings = [

    `January to May 2026...
    weekends meant you visiting Kharar. ❤️
    Our long walks, the Kharar roads,
    and all those little moments together
    are something I'll always remember. 🥹`,

    `Saini, Chai Ishq Ki Chai, Chaap
    and of course... Kulfi. 😂❤️
    Somehow these became some of
    our favourite food memories.
    Basically, our dates were
    50% food and 50% us. 😭`,

    `Then after 11 May,
    the long-distance chapter started. 🥺
    But distance never really stopped us.
    It just made every meeting
    feel even more special. ❤️`,

    `We still managed to visit each other
    almost every month. 🥹
    Sometimes once...
    sometimes twice...
    and last month, somehow even THREE times. ❤️
    I guess distance really didn't stand
    much of a chance against us. 🫶🏻`,

    `Our idea of spending the entire day together?
    Cuddling, eating, sleeping...
    and then doing it all over again. 😂❤️
    Honestly, I could happily spend
    an entire day like that with you.`,

    `And obviously...
    "Bhains" and "Moti". 😭😂

    Your taunts should technically
    annoy me...

    BUT THEN YOU SAY
    "meri bhains" or "meri moti"...

    and somehow everything is forgiven. 🥹❤️`
];


function showLittleThing(index) {

    const display =
        document.getElementById("littleThingDisplay");

    display.innerHTML =
        `<p class="little-thing-text">
            ${littleThings[index]}
        </p>`;

    document
        .querySelectorAll(".little-thing")
        .forEach((button, i) => {

            if (i === index) {
                button.classList.add("selected");
            }

        });

}
function chooseGuess(button, correct) {

    const result =
        document.getElementById("guessResult");

    document
        .querySelectorAll(".guess-options button")
        .forEach(btn => {
            btn.disabled = true;
        });

    if (correct) {

        result.innerHTML = `
            <p>
                Okayyy... you know me pretty well. 🥹❤️
            </p>

            <p>
                Because honestly,
                I just want more little moments,
                more laughter, more cuddles,
                more food dates...
                and more <b>us</b>.
            </p>
        `;

    } else {

        result.innerHTML = `
            <p>
                Nice try! 😂❤️
            </p>

            <p>
                But you know what I actually want?
                <br>
                <b>More memories with you. 🥹</b>
            </p>
        `;

    }

    result.classList.add("show");
}