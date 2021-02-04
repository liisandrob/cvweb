const diasEnMeses = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]


function refExp (dia, mes) {
    let diaDelAnio = dia;
    if (mes > 2 && moment().isLeapYear()) {
        diaDelAnio++;
    };
    for (i = 0; i < mes; i++) {
        diaDelAnio = diaDelAnio + diasEnMeses[i]
    };
    return diaDelAnio;
}

function cumpliAnios () {
    if (refExp(17, 9) <= moment().dayOfYear()) {
        return true;
    } else {
        return false;
    }
}

function level () {
    let nivel = parseInt(moment([1992, 8, 17]).fromNow(true).split(" ", 1));
    console.log(nivel)
    cumpliAnios() ? nivel = nivel + 1 : nivel;
    document.querySelector(".lvlText").textContent = `LEVEL ${nivel}`;
}

function expActual () {
    let experiencia
    if (cumpliAnios()) {
        experiencia = moment().dayOfYear() - refExp(17, 9);
    } else {
        experiencia = moment().dayOfYear() + 105;
    }
    document.getElementById("barraExp").value = `${experiencia}`;
}

/* BIRTH DATE  17/09/1992 */

level();
expActual();