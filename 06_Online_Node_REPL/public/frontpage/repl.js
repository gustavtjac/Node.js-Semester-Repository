    fetch('/api/repl',{
            method : "POST",
            body : JSON.stringify({
                replCode: 'console.log'
            }),
            headers : {
                "Content-Type": "application/json"

            }

        })
        .then((response) => response.json())
        .then((result) => {
            console.log(result)
        })
