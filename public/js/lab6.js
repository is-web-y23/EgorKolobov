const LIMIT = 10 // Кол-во сообщений
let from = LIMIT
let url = 'https://jsonplaceholder.typicode.com/poss'
let data = []

setTimeout(()=>{
    fetch(url)
        .then(response => { // Если всё ок
            if (!response.ok) {
                throw `${response.status}`
            }
            return response.json().then((result) => {
                data = result // json
                listRender(data.slice(0, LIMIT)) // покажет от 0 до 10 сообщений
            })
        })
        .catch(response => { // если хреново
            document.querySelector("#messages").innerHTML = "Что-то пошло не так!"
        })
}, 3000)

function listRender(items) { // передаю LIMIT элементов
    let itemsArr = items.map(function(item) {
        return createList(item);
    });

    let content = ``;
    itemsArr.forEach(function(itemInfo) {
        content += itemInfo;
    });

    document.querySelector("#messages").innerHTML = content
}

function createList(item) {
    return `
    <h4 style="padding-top: 10px">${item.title}</h4>
    <p class="chat_p">${item.body}</p>
  `
}

back.onclick = () => {
    from -= LIMIT
    const to = from
    from -= LIMIT
    if(from >= 0){
        listRender(data.slice(from, to))
    }
    else {
        from += LIMIT
    }
    from += LIMIT
}

forward.onclick = () => {
    const to = from + LIMIT
    listRender(data.slice(from, to))
    from = to
}