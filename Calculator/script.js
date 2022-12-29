const numGroup = document.getElementById("num")
const operatorGroup = document.getElementById("operator")
let expression = document.getElementById("input").value
const deleteBtn = document.getElementById("delete")
const clearBtn = document.getElementById("clear")
const equalBtn = document.getElementById("=")


const numberGroupPressed = e => {
    // console.log("num" + e.target.id)
    if (e.target.id != "num") {
        expression = expression + e.target.id
        document.getElementById("input").value = expression
    }
}
numGroup.addEventListener("click", numberGroupPressed)

const operatorGroupPressed = e => {
    // console.log("operator" + e.target.id)
    if (e.target.id != "operator") {
        expression = expression + e.target.id
        document.getElementById("input").value = expression
    }
}
operatorGroup.addEventListener("click", operatorGroupPressed)

deleteBtn.addEventListener("click", function(e) {
    //console.log("clear")
    expression = expression.substring(0, expression.length - 1)
    document.getElementById("input").value = expression
})

clearBtn.addEventListener("click", function(e) {
    expression = ""
    document.getElementById("input").value = expression
})

equalBtn.addEventListener("click", function(e) {
    // console.log("equal")
    solution = eval(expression)
    console.log(solution)
    expression = new String(solution)
    console.log(expression)
    document.getElementById("input").value = expression
})