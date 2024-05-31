let check = document.querySelectorAll(".check")
let input = document.querySelectorAll(".input")
let error = document.querySelector("#error")
let sun = document.querySelector("#sun")
let completedTask = document.querySelector("#completedTask")
let barValue = document.querySelector('.barValue')

let checked = document.querySelector(".checked")
var valueOfBar = 0
var taskCompleted = 0
check.forEach((checkElement, checkIndex) => {
    checkElement.addEventListener("click", () => {
        if (checkElement.id == "click") {
            if (input[checkIndex].value == "" && checkElement.id == "click") {
                error.style.color = 'red'
            } else {
                error.style.color = '#858585'
            }
            input[checkIndex].style.color = "#48A300";
            checkElement.style.background = "url(images/check.png)";
            checkElement.style.backgroundSize = "cover";
            input[checkIndex].style.textDecorationLine = "line-through";
            checkElement.style.border = "none";
            checkElement.id = "clicked"
            valueOfBar += 33.33333333333333;
            barValue.style.width = valueOfBar + "%";
            taskCompleted += 1;
            completedTask.innerHTML = taskCompleted;
            sun.style.transform = "rotate(20deg)";
        } else {
            sun.style.transform = "rotate(-20deg)";
            error.style.color = '#858585'
            input[checkIndex].style.color = "#000";
            checkElement.style.background = "none";
            checkElement.style.border = "2px solid #000";
            input[checkIndex].style.textDecorationLine = "none";
            checkElement.id = "click"
            valueOfBar -= 33.33333333333333;
            barValue.style.width = valueOfBar + "%";
            taskCompleted -= 1;
            completedTask.innerHTML = taskCompleted;

        }
    })
});