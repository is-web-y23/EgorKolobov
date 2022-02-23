var count = 0
document.getElementById('my_form').addEventListener('submit', function() {
    var days = this.elements.days.value
    var lessons = this.elements.lessons.value

    var container = document.getElementById('result')
    var div = document.createElement('div')
    var text_node = document.createTextNode('№')
    div.appendChild(text_node)
    container.appendChild(div)

    div = document.createElement('div')
    text_node = document.createTextNode('Название предмета')
    div.appendChild(text_node)
    container.appendChild(div)

    div = document.createElement('div')
    text_node = document.createTextNode('День недели')
    div.appendChild(text_node)
    container.appendChild(div)

    for (var i = 0; i < lessons; i++) {
        div = document.createElement('div')
        text_node = document.createTextNode(count+1)
        count++
        div.appendChild(text_node)
        container.appendChild(div)

        div = document.createElement('div')
        div.className += ` subject subject${count-1}`
        text_node = document.createTextNode('')
        div.appendChild(text_node)
        container.appendChild(div)

        div = document.createElement('div')
        text_node = document.createTextNode(days)
        div.appendChild(text_node)
        container.appendChild(div)
    }
    let element = document.getElementById('my_form2')
    element.style.display='block'
    // document.getElementById('my_form2').style('display:block')
    return false;
});

function del() {
    var container = document.getElementById('result');
    container.innerHTML = '';
    count = 0;
};

let num = 0;
document.getElementById('my_form2').addEventListener('submit', function() {
    num++;
    var number_lesson = this.elements.number_lesson.value;
    // var day = document.getElementById('days')
    var day = $( "#days option:selected" ).text();
    var column = document.getElementById('result');
    var div = column.getElementsByClassName('subject');
    var subject = {
        subject: this.elements.subject.value,
        day: day,
        num_lesson: number_lesson
    }
    var text_node = document.createTextNode(subject.subject);
    div[number_lesson-1].innerHTML = subject.subject;
    subject = JSON.stringify(subject)
    localStorage.setItem(`subject${num}`, subject);
    localStorage.setItem('number', num);
    // localStorage.clear()
});