//годиник
  function digitalWatch() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;
    document.getElementById("digital_watch").innerHTML = hours + ":" + minutes + ":" + seconds;
    setTimeout("digitalWatch()", 1000);
  }
  //галелея
  /*
$(function() {
    var width=$('.slider-box').width();                     // Ширина слайдера.
    interval = 4000;                                    // Интервал смены слайдов.

    $('.slider img:last').clone().prependTo('.slider');     // Копия последнего слайда помещается в начало.
    $('.slider img').eq(1).clone().appendTo('.slider');     // Копия первого слайда помещается в конец.
    $('.slider').css('margin-left', -width);                // Контейнер .slider сдвигается влево на ширину одного слайда.
    setInterval('animation()',interval);                    // Запускается функция animation(), выполняющая смену слайдов.
});
function animation(){

    var margin = parseInt($('.slider').css('marginLeft'));  // Текущее смещение блока .slider
    width=$('.slider-box').width(),                     // Ширина слайдера.
        slidersAmount=$('.slider').children().length;       // Количество слайдов в слайдере.
    if(margin!=(-width*(slidersAmount-1)))                  // Если текущий слайд не последний,
    {
        margin=margin-width;                                  // то значение margin уменьшается на ширину слайда.
    }else{                                                  // Если показан последний слайд,
        $('.slider').css('margin-left', -width);              // то блок .slider возвращается в начальное положение,
        margin=-width*2;
    }
    $('.slider').animate({marginLeft:margin},1000);          // Блок .slider смещается влево на 1 слайд.
};*/

function getData(parent, city)
{
        console.log(parent)
        console.log(city)
    
        var URL = "http://api.openweathermap.org/data/2.5/weather?id=";
        var API_KEY = "04d92298c1985b8c8feb3dafc7defae9";
        var FULL_URL = URL + city + "&APPID=" + API_KEY; var XHR = new XMLHttpRequest();

        console.log(FULL_URL);

        XHR.open("GET", FULL_URL, true);
        XHR.send();

        XHR.onreadystatechange = function() 
        {
            if ((XHR.readyState === 4) && (XHR.status === 200)) 
            {
                var data = JSON.parse(XHR.responseText);

                var div = document.createElement("div");
                div.innerHTML = "<span class=\"name\">" + data.name + "</span>";
                parent.appendChild(div);

                var div = document.createElement("div");
                div.innerHTML = "<span class=\"temp\">Температура: " + (data.main.temp - 273.15).toFixed(1) + "<sup>o</sup>C</span>";
                parent.appendChild(div);

                var div = document.createElement("div");
                div.innerHTML = "<span class=\"humidity\">Вологість: " + data.main.humidity + "%</span>";
                parent.appendChild(div);
            }
        };
        
        console.log("-");

    return;
}