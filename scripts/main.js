const sectStatus = document.querySelector(".sectStatus");
const sectStat = document.querySelector(".sectStat")
const sectSpecial = document.querySelector(".sectSpecial");
const sectPerks = document.querySelector(".sectPerks")
const sectData = document.querySelector(".sectData");
const sectMap = document.querySelector(".sectMap");
const sectRadio = document.querySelector(".sectRadio");
const subNav = document.querySelector(".subNav");
const statusNav = document.getElementById("statusNav");
const specialNav = document.getElementById("specialNav");
const perksNav = document.getElementById("perksNav");
const statNav = document.getElementById("statNav");
const dataNav = document.getElementById("dataNav");
const mapNav = document.getElementById("mapNav");
const radioNav = document.getElementById("radioNav");
let estadoSubNav = 1;
let subSectorAbierto = 0;
let sectorAbierto = 0;
let sectorAct = 1;

/* 0 = oculto | 1 = visible */

function manejoSubNav (estadoDeseado) {
    if (estadoDeseado !== estadoSubNav) {
        switch (estadoDeseado) {
            case 0:
                document.querySelector(".statNav").style.display = "none";
                break;
            case 1:
                document.querySelector(".statNav").style.display = "flex";
                break;
        }
        estadoSubNav = estadoDeseado;
    } 
}

/* 0 = STATUS | 1 = SPECIAL | 2 = PERKS */

function manejoSubSector (sectorNuevo) {
    if (subSectorAbierto !== sectorNuevo) {
        switch (sectorNuevo) {
            case 0:
                sectStatus.style.display = "flex";
                sectSpecial.style.display = "none";
                sectPerks.style.display = "none";
                document.querySelector(".selectedSubNav").className = "unselectedSubNav";
                statusNav.className = "selectedSubNav";
                break;
            case 1:
                sectStatus.style.display = "none";
                sectSpecial.style.display = "grid";
                sectPerks.style.display = "none";
                document.querySelector(".selectedSubNav").className = "unselectedSubNav";
                specialNav.className = "selectedSubNav";
                break;
            case 2:
                sectStatus.style.display = "none";
                sectSpecial.style.display = "none";
                sectPerks.style.display = "grid";
                document.querySelector(".selectedSubNav").className = "unselectedSubNav";
                perksNav.className = "selectedSubNav";
                break;
        }
        subSectorAbierto = sectorNuevo;
    }
}

/* 0 = STAT | 1 = DATA | 2 = MAP | RADIO */

function abrirSection (sectorNuevo) {
    if (sectorAbierto !== sectorNuevo) {
        switch (sectorNuevo) {
            case 0:
                sectStat.style.display = "block";
                sectData.style.display = "none";
                sectMap.style.display = "none";
                sectRadio.style.display = "none";
                document.querySelector(".selectedNav").className = "unselectedNav";
                statNav.className = "selectedNav";
                manejoSubNav(1);
                break;
            case 1:
                sectStat.style.display = "none";
                sectRadio.style.display = "none";
                sectMap.style.display = "none";
                sectData.style.display = "block";
                document.querySelector(".selectedNav").className = "unselectedNav";
                dataNav.className = "selectedNav";
                manejoSubNav(0);
                break;
            case 2:
                sectStat.style.display = "none";
                sectData.style.display = "none";
                sectRadio.style.display = "none";
                sectMap.style.display = "flex";
                document.querySelector(".selectedNav").className = "unselectedNav";
                mapNav.className = "selectedNav";
                manejoSubNav(0);
                break;
            case 3:
                sectStat.style.display = "none";
                sectData.style.display = "none";
                sectMap.style.display = "none";
                sectRadio.style.display = "grid";
                document.querySelector(".selectedNav").className = "unselectedNav";
                radioNav.className = "selectedNav";
                manejoSubNav(0);
                break;
        }
        sectorAbierto = sectorNuevo;
    }
}