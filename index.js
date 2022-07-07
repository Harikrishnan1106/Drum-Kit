for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        var buttonInnerHtml = this.innerHTML;
        //console.log(buttonInnerHtml);
        makeSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
    })

    document.addEventListener("keypress", function (event) {
        //console.log(event);
        makeSound(event.key);
        buttonAnimation(buttonInnerHtml);
    })
    function makeSound(key) {
        switch (key) {
            case "w":
                // var crash = new Audio("sounds/crash.mp3");
                // crash.play();
                audioSound("sounds/crash.mp3");
                break;
            case "a":
                // var kick = new Audio("sounds/kick-bass.mp3");
                // kick.play();
                audioSound("sounds/kick-bass.mp3");
                break;
            case "s":
                // var snare = new Audio("sounds/snare.mp3");
                // snare.play();
                audioSound("sounds/snare.mp3");
                break;
            case "d":
                // var tom1 = new Audio("sounds/tom-1.mp3");
                // tom1.play();
                audioSound("sounds/tom-1.mp3");
                break;
            case "j":
                // var tom2 = new Audio("sounds/tom-2.mp3");
                // tom2.play();
                audioSound("sounds/tom-2.mp3");
                break;
            case "k":
                // var tom3 = new Audio("sounds/tom-3.mp3");
                // tom3.play();
                audioSound("sounds/tom-3.mp3");
                break;
            case "l":
                // var tom4 = new Audio("sounds/tom-4.mp3");
                // tom4.play();
                audioSound("sounds/tom-4.mp3");
                break;
            default:
                console.log(buttonInnerHtml);
                break;
        }
    }
    function audioSound(parameter) {
        var crash = new Audio(parameter);
        crash.play();
    }

    function buttonAnimation(currentKey) {
        var activeButton = document.querySelector("." + currentKey);
        activeButton.classList.add("pressed");
        setTimeout(function () {
            activeButton.classList.remove("pressed");
        }, 100);
    }
}