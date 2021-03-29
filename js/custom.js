const twitter = document.getElementById("twitter");
const instagram = document.getElementById("instagram");


twitter.addEventListener("mouseenter", e => {
    twitter.src = "./images/twitter-hover.png"
})

twitter.addEventListener("mouseleave", e => {
    twitter.src = "./images/twitter.png"
})

instagram.addEventListener("mouseenter", e => {
    instagram.src = "./images/instagram-hover.png"
})

instagram.addEventListener("mouseleave", e => {
    instagram.src = "./images/instagram.png"
})