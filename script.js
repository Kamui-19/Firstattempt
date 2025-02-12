let clickCount = 0; 

function handleYesClick() {
    alert("Yay! I love you too! ❤️");
}

function handleNoClick() {
    let noButton = document.querySelector(".no-button");
    let yesButton = document.querySelector(".yes-button");

    clickCount++; 

    if (clickCount < 4) {
        
        let newSize = 20 - clickCount * 5; 
        noButton.style.fontSize = newSize + "px";
        noButton.style.padding = (10 - clickCount * 2) + "px";
    } else {
       
        noButton.style.display = "none";  
        yesButton.style.width = "100vw";
        yesButton.style.height = "100vh";
        yesButton.style.fontSize = "50px";
    }
}
