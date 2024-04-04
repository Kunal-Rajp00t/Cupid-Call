let noBtn = document.querySelector("#no");
let yesBtn = document.querySelector("#yes");
let msg = document.querySelector("#que");

let initialNoBtnPosition = null;

let imageSec = document.querySelector(".img-section");
let yesClicked = false;

yesBtn.addEventListener("click", () => {
    msg.style.color = "#FD3A3A";
    msg.innerHTML = `Awwww... I knew it ${'\u2764'} !!`;
    imageSec.style.backgroundImage = "url('img9.jpg')";
    yesClicked = true;

    if (initialNoBtnPosition) {
        noBtn.style.position = 'absolute';
        noBtn.style.left = initialNoBtnPosition.x + 'px';
        noBtn.style.top = initialNoBtnPosition.y + 'px';
    }
});
let i = 1;
noBtn.addEventListener("click", () => {
    if (!initialNoBtnPosition) {
        // Store the initial position of the "no" button
        initialNoBtnPosition = {
            x: parseFloat(noBtn.style.left),
            y: parseFloat(noBtn.style.top)
        };
    }
    // Generate random positions within the viewport
    let randomX = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    let randomY = Math.random() * (window.innerHeight - noBtn.offsetHeight);

    // Apply new positions
    noBtn.style.position = 'absolute';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';


    if (!yesClicked) {
        imageSec.style.backgroundImage = `url('img${i}.jpg')`;
        i = (i % 5) + 1;
        if (i == 2) {
            msg.innerHTML = `Aree maan jao cutie.`;

        } else if (i == 3) {
            msg.innerHTML = `Aise mana mat karo jaanu !`;

        } else if (i == 4) {
            msg.innerHTML = `Maar khaa ke hi maanogi kya.`;

        } else if (i == 1) {
            msg.innerHTML = `Kitne nakhre karogiiii`;

        }else if (i == 5) {
            msg.innerHTML = `Lo phool ab maan jaoo !!!`;

        }
    }
})
