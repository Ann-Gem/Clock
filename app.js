const deg = 6;
const options = {weekday: 'long', month: 'short', year:'numeric', day: 'numeric'};
const day = document.getElementsByClassName('date');

function today(opt, city) {
    return Intl.DateTimeFormat('en-US', opt).format(city);
}

class Clock {
    constructor(idCity, idHour, idMin, idSec) {
        this.hr = document.getElementById(idHour);
        this.mn = document.getElementById(idMin);
        this.sc = document.getElementById(idSec);
        this.city = document.getElementById(idCity);
    }
    transform(h, m ,s) {
        this.hr.style.transform = `rotateZ(${h+m/12}deg)`;
        this.mn.style.transform = `rotateZ(${m}deg)`;
        this.sc.style.transform = `rotateZ(${s}deg)`;
    }
}

let mosTime = new Clock('mos', 'hr1', 'mn1', 'sc1');
let tokTime = new Clock('tok', 'hr2', 'mn2', 'sc2');
let lonTime = new Clock('lon', 'hr3', 'mn3', 'sc3');


setInterval(()  => {
    let mos = new Date();
    let tok = new Date(mos.getTime() + 6*3600000);
    let lon = new Date(mos.getTime() + 3600000*(-2))

    let mosDay = today(options, mos);
    let tokDay = today(options, tok);
    let lonDay = today(options, lon);

    day[0].innerText = mosDay;
    day[1].innerText = tokDay;
    day[2].innerText = lonDay;

    let hmos = mos.getHours() * 30;
    let mmos = mos.getMinutes() * deg;
    let smos = mos.getSeconds() * deg;

    let htok = tok.getHours() * 30;
    let mtok = tok.getMinutes() * deg;
    let stok = tok.getSeconds() * deg;

    let hlon = lon.getHours() * 30;
    let mlon = lon.getMinutes() * deg;
    let slon = lon.getSeconds() * deg;

    mosTime.transform(hmos, mmos, smos);
    tokTime.transform(htok, mtok, stok);
    lonTime.transform(hlon, mlon, slon);

  }, 1000)