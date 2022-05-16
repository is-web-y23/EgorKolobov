var before_loadtime = new Date().getTime();
if ($("body").is(".home_page")) {
  var btnContainer = document.getElementsByClassName("menu__nav");

  // Получаем все кнопки class="menu__navigation"
  var btns = btnContainer[0].getElementsByClassName("menu__navigation");

  // В цикле проходимся по кнопкам и добавляем класс active на click-нутую кнопку
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }
}

var element = document.getElementsByClassName("footer_info");
var par = document.createElement("p"); // Создаём тег p

window.onload = Pageloadtime;

function Pageloadtime() {
  var aftr_loadtime = new Date().getTime();

  pgloadtime = (aftr_loadtime - before_loadtime);

  par = document.createElement("p"); // Создаём тег p
  text = document.createTextNode(" Load time client: " + pgloadtime + " ms"); // Создаём текстовое поле для тега p
  par.appendChild(text);
  element[0].appendChild(par);
}

let entrance = document.getElementById("my_button");
entrance.addEventListener("click", function() {
  event.preventDefault();
  localStorage.setItem("entrance", "true");
  document.location.reload();
});

let exit = document.getElementById("entrance");
exit.addEventListener("click", function() {
  localStorage.removeItem("entrance");
  document.location.reload();
});