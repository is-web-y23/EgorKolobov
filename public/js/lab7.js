$('#btn_show_text').click(function(){
    const num = localStorage.getItem('number')
    let subjects = 'Предметы:\n'
    for(i = 1; i <= num; i++) {
        var subject = JSON.parse(localStorage.getItem(`subject${i}`))
        subjects += '№ ' + subject.num_lesson + ' ' + subject.subject + ' (' + subject.day + ')\n'
    }
    swal(subjects)
});
