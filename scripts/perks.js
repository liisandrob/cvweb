function mostrarImgPerk(perk) {
    resetImgPerks();
    let perkSeleccionada = perk + "Img";
    document.getElementById(perkSeleccionada).style.display = "block";
}

function resetImgPerks() {
    document.getElementById("viajarImg").style.display = "none";
    document.getElementById("capacitacionImg").style.display = "none";
    document.getElementById("proactivoImg").style.display = "none";
    document.getElementById("equipoImg").style.display = "none";
    document.getElementById("adaptableImg").style.display = "none";
    document.getElementById("innovadorImg").style.display = "none";
    document.getElementById("petImg").style.display = "none";
}