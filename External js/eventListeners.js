document.getElementById("calc-btn").addEventListener("click", function(){
    let firstInput = document.getElementById("first-input").value
    let secondInput = document.getElementById("second-input").value

    let result = divide(Number(firstInput) ,Number(secondInput))
    document.getElementById("result").innerHTML = result
})  