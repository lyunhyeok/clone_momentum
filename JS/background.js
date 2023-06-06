const backgroundImages = [
    "background1.jpeg",
    "background2.jpeg",
    "background3.jpeg",
    "background4.jpeg"
]

const randomImage = backgroundImages[Math.floor(Math.random() * backgroundImages.length)];
//element 생성
const bgImage = document.createElement("img");

bgImage.src = `IMG/${randomImage}`;
bgImage.id = "bgImage";

// body 에 입력
document.body.appendChild(bgImage);