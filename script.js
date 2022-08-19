    let digitalElemento = document.querySelector('.digital');
    let sElemento = document.querySelector('.p_s');
    let mElemento = document.querySelector('.p_m');
    let hElemento = document.querySelector('.p_h');

function atualizarRelogio(){
    let now = new Date();
    let hora = now.getHours();
    let minutos = now.getMinutes();
    let segundos = now.getSeconds();


    digitalElemento.innerHTML = `${zeroFixo(hora)}:${zeroFixo(minutos)}:${zeroFixo(segundos)}`;
    let sDeg = ((360 / 60) * segundos) - 90;
    let mDeg = ((360 / 60) * minutos) - 90;
    let hDeg = ((360 / 12) * hora) - 90;
    sElemento.style.transform = `rotate(${sDeg}deg)`;
    mElemento.style.transform = `rotate(${mDeg}deg)`;
    hElemento.style.transform = `rotate(${hDeg}deg)`;



}
 

function zeroFixo(time) {
    if(time < 10) {
        return '0' +time;
    } else {
        return time;
    }
}

setInterval(atualizarRelogio, 1000);
atualizarRelogio();
