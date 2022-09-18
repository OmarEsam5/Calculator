let out1T = document.getElementById("output1-t")
let out1B = document.getElementById("output1-b")
let out2 = document.getElementById("output2")
let operation = document.querySelectorAll("[data-operation]")
let numbers = document.querySelectorAll("[data-number]")
let delet = document.querySelector("[data-delete]")
let deletAll = document.querySelector("[data-all-claer]")
let equals = document.querySelector("[data-equals]")
let operationContainer = document.querySelector(".output-top span")

let eleD;
let outNimber = true;
// console.log(numbers[0].textContent)

numbers.forEach((ele) => {

    if (ele.textContent == ".") {
        eleD = ele
    }

    ele.addEventListener("click", (e) => {

        if (out1T.textContent != "" && operationContainer.textContent != "" && out1B.textContent != "" && out2.textContent != "") {

            out1B.textContent = ""
            out1T.textContent = ""
            out2.textContent = ""
            operationContainer.textContent = ""
            outNimber = true;
            eleD.setAttribute("data-number", '')

        }

        if (e.target.hasAttribute("data-number") && outNimber === true) {

            if (out2.textContent === "0") {

                out2.textContent = ""

            }

            out2.innerHTML += e.target.textContent

        }

        if (e.target.textContent == ".") {

            e.target.removeAttribute("data-number");

        }

    })

})


operation.forEach((ele) => {

    ele.addEventListener("click", (e) => {

        outNimber = true;

        if (out1T.textContent != "" && out1B.textContent == "" && operationContainer.textContent != "" && out2.textContent != "") {

            if (operationContainer.textContent == "+") {

                out1B.textContent = out2.textContent;

                out2.textContent = +out1T.textContent + +out1B.textContent;

            }

            if (operationContainer.textContent == "-") {

                out1B.textContent = out2.textContent;

                out2.textContent = +out1T.textContent - +out1B.textContent;

            }

            if (operationContainer.textContent == "×") {

                out1B.textContent = out2.textContent;

                out2.textContent = +out1T.textContent * +out1B.textContent;

            }

            if (operationContainer.textContent == "÷") {

                out1B.textContent = out2.textContent;

                out2.textContent = +out1T.textContent / +out1B.textContent;

            }

        }

        if (out2.textContent != "") {

            out1T.textContent = out2.textContent

        }


        if (out1T.textContent != "") {

            if (out1B.textContent == "") {

                operationContainer.textContent = e.target.textContent;

                out2.textContent = "";

            } else {

                operationContainer.textContent = e.target.textContent;

                out1B.textContent = "";

                out2.textContent = "";

            }

        }

        if (out2.textContent == "") {

            eleD.setAttribute("data-number", '')

        }

    })

})


equals.onclick = () => {

    if (operationContainer.textContent != "" && out2.textContent != "" && out1B.textContent == "") {

        outNimber = false;

        if (operationContainer.textContent == "+") {

            out1B.textContent = out2.textContent;

            out2.textContent = +out1T.textContent + +out1B.textContent

        }
        if (operationContainer.textContent == "-") {

            out1B.textContent = out2.textContent;

            out2.textContent = +out1T.textContent - +out1B.textContent

        }
        if (operationContainer.textContent == "×") {

            out1B.textContent = out2.textContent;

            out2.textContent = +out1T.textContent * +out1B.textContent

        }
        if (operationContainer.textContent == "÷") {

            out1B.textContent = out2.textContent;

            out2.textContent = +out1T.textContent / +out1B.textContent

        }

    }

}


deletAll.onclick = () => {
    out1B.textContent = ""
    out1T.textContent = ""
    out2.textContent = ""
    operationContainer.textContent = ""
    outNimber = true;
    eleD.setAttribute("data-number", '')
}


delet.onclick = () => {

    out2.textContent = out2.textContent.slice(0, out2.textContent.length -1)

    if (out2.textContent.includes(".") === false) {

        eleD.setAttribute("data-number", '')

    }

}
