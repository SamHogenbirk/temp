let log = console.log

const refs = {

    mainList: document.getElementById("main-list"),
    checkBox: document.getElementsByClassName("check"),
    delete: document.getElementsByClassName("delete-button"),
    submit: document.getElementById("submit"),
    textInput: document.getElementById("input")

}

const indexCheckbox = () => {

    Array.from(refs.checkBox).forEach(element => {


        element.addEventListener('mouseup', function (e) {

            if (e.target.checked === false) {
                e.target.nextElementSibling.setAttribute('style', 'text-decoration: line-through;')
            } else if (e.target.checked === true) {
                e.target.nextElementSibling.setAttribute('style', 'text-decoration: none;')
            }

        })
    })
}

const indexDelete = () => {

    Array.from(refs.delete).forEach((item) => {

        item.addEventListener('click', function (e) {

            this.parentNode.remove()

        })
    })

}

refs.submit.addEventListener('click', (e) => {

    e.preventDefault()
    const input = refs.textInput.value
    postNewTask(input)
    createListItem(input)

    refs.textInput.value = ""

});

const createListItem = (input) => {

    newLi = document.createElement("li")
    newLi.setAttribute("class", "list-item")

    NewBox = document.createElement("input")
    NewBox.setAttribute("type", "checkbox")
    NewBox.setAttribute("class", "check")

    newTask = document.createElement("input")
    newTask.setAttribute("type", "text")
    newTask.value = input

    newDel = document.createElement("button")
    newDel.setAttribute("class", "delete-button")
    newDel.innerHTML = "delete"

    newLi.appendChild(NewBox)
    newLi.appendChild(newTask)
    newLi.appendChild(newDel)

    refs.mainList.appendChild(newLi)

    indexCheckbox()
    indexDelete()
}








