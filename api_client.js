
const apiUrl = "http://localhost:3000/"

const postNewTask = async (input) => {

    try {
        let data = { description: input, done: false }

        await fetch(apiUrl, {

            method: "POST",
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json" }
        })

    }
    catch (err) {

        console.log("Something went wrong " + err)
    }

    // works
};


const getAllTasks = async () => {

    try {

        const res = await fetch(apiUrl, {

            method: "GET",
            headers: { "Content-Type": "application/json" }
        })
            .then(response => response.json)
            .then(data => log(data))
    }
    catch (err) {

        log("Something went wrong " + err)
    }

}

const updateTask = async () => {

    try { }
    catch (err) {

        log("Something went wrong " + err)
    }

}

const deleteTask = async () => {

    try { }
    catch (err) {

        log("Something went wrong " + err)
    }

}