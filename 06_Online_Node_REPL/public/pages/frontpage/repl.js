
const replCodeOutputDiv = document.getElementById("repl-code-output")
const replInputInput = document.getElementById("repl-input")

replInputInput.addEventListener('keyup', (event) => {
    if (event.key === "Enter") {
        runReplInput()
    }
})

function runReplInput() {
    const replCode = replInputInput.value
    replInputInput.value = "";

    addInput(replCode);

    fetch('/api/repl', {
        method: "POST",
        body: JSON.stringify({
            replCode
        }),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then((response) => response.json())
        .then(({ data }) => {
            console.log(data)

            if (data.error) {
                const error = data.error;
                addError(error)
            } else {
                addOutputAndresult(data.output + data.result);
            }
        })

}

function addInput(replCode) {
    const replPromptDiv = document.createElement("div");
    replPromptDiv.textContent = `> ${replCode}`;
    replPromptDiv.classList.add('repl-code-prompt')

    replCodeOutputDiv.appendChild(replPromptDiv);

    scrollToTheBottom();
}

function addError(error) {
    const replCodeErrorDiv = document.createElement("div");
    replCodeErrorDiv.textContent = `${error}!`;
    replCodeErrorDiv.classList.add('repl-code-error')

    replCodeOutputDiv.appendChild(replCodeErrorDiv);

    scrollToTheBottom();
}

function addOutputAndresult(output, result) {

    if (output) {
        const replOutputDiv = document.createElement("div");
        replOutputDiv.textContent = output;
        replOutputDiv.classList.add("repl-code-output");

        replCodeOutputDiv.appendChild(replOutputDiv);
    }

    const replResultDiv = document.createElement("div");
    replResultDiv.textContent = result;
    replResultDiv.classList.add("repl-code-result");

    replCodeOutputDiv.appendChild(replResultDiv);

    scrollToTheBottom();
}

function scrollToTheBottom() {
    replCodeOutputDiv.scrollTop = replCodeOutputDiv.scrollHeight;
}


