function ChangeBackground() {
    console.log("hi")
    const imgurl = "../IMG/"
    let Backgrounds = [
        "TempBG.jpeg",
        "BG (1).jpeg",
        "BG (2).jpeg",
        "BG (3).jpeg",
        "BG (4).jpeg",
    ]
    let RandomNumber = Math.floor(Math.random()*Backgrounds.length)
    let URL = `url(${imgurl}${Backgrounds[RandomNumber]})`
    console.log(URL)
    document.getElementsByClassName("BackgroundApplies").style.backgroundImage = URL
    console.log(document.body.style.backgroundImage)
}

window.addEventListener("focus", ChangeBackground)
console.log("Loaded!")