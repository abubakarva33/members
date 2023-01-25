const form = document.getElementById('form')
const n = document.getElementById('name')
const users = document.getElementById('users')
const choose = document.getElementById('choose')
const show = document.getElementById('show')


const nameList = []

// from
form.addEventListener('submit', function (event) {
    event.preventDefault()
    let name = n.value
    nameList.push(name)

    const newLi = document.createElement('li')
    newLi.innerText = name
    users.appendChild(newLi)

    n.value = ''
})

choose.addEventListener('click', function (event) {
    const random = Math.floor(Math.random() * nameList.length)
    if(nameList.length === 0){
        return alert('Please insert a name')
    }
    const selected = nameList[random]
    show.innerText = selected
})