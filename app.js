const deg = 6;

const hr1 = document.getElementById('hr1');
const hr2 = document.getElementById('hr2');
const hr3 = document.getElementById('hr3');

const mn1 = document.getElementById('mn1');
const mn2 = document.getElementById('mn2');
const mn3 = document.getElementById('mn3');

const sc1 = document.getElementById('sc1');
const sc2 = document.getElementById('sc2');
const sc3 = document.getElementById('sc3');

 


let options = {weekday: 'long', month: 'short', year:'numeric', day: 'numeric'};

setInterval(()  => {
    let data = new Date();
    let tok = new Date(data.getTime() + 6*3600000);
    let lon = new Date(data.getTime() + 3600000*(-2))

    let mosDay = Intl.DateTimeFormat('en-US', options).format(data);
    let tokDay = Intl.DateTimeFormat('en-US', options).format(tok);
    let lonDay = Intl.DateTimeFormat('en-US', options).format(lon);

    document.getElementsByClassName('date')[0].innerHTML = mosDay;
    document.getElementsByClassName('date')[1].innerHTML = tokDay;
    document.getElementsByClassName('date')[2].innerHTML = lonDay;


    let h = data.getHours() * 30;
    let m = data.getMinutes() * deg;
    let s = data.getSeconds() * deg;

    let htok = tok.getHours() * 30;
    let mtok = tok.getMinutes() * deg;
    let stok = tok.getSeconds() * deg;

    let hlon = lon.getHours() * 30;
    let mlon = lon.getMinutes() * deg;
    let slon = lon.getSeconds() * deg;

    hr1.style.transform=`rotateZ(${h+m/12}deg)`;
    mn1.style.transform=`rotateZ(${m}deg)`;
    sc1.style.transform=`rotate(${s}deg)`;

    hr2.style.transform=`rotateZ(${htok+mtok/12}deg)`;
    mn2.style.transform=`rotateZ(${mtok}deg)`;
    sc2.style.transform=`rotate(${stok}deg)`;

    hr3.style.transform=`rotateZ(${hlon+mlon/12}deg)`;
    mn3.style.transform=`rotateZ(${mlon}deg)`;
    sc3.style.transform=`rotate(${slon}deg)`;
})