function Carousel(carouselID) {
    this.proyecto = carouselID;
    this.container = document.getElementById(carouselID);
    this.slides = this.container.querySelectorAll('.carousel');
    this.cantSlidesTotal = this.slides.length - 1;
    this.slideActual = 0;
    generateCarouselCounter(carouselID, this.slides.length);
    this.slide(this.slideActual, this.proyecto);
}

Carousel.prototype.next = function (intervalo) {
    (this.slideActual === this.cantSlidesTotal) ? this.slideActual = 0 : this.slideActual++;
    this.stop();
    this.slide(this.slideActual, this.proyecto); 
}

Carousel.prototype.prev = function(intervalo) {
    (this.slideActual === 0) ? this.slideActual = this.cantSlidesTotal : this.slideActual--;
    this.stop();
    this.slide(this.slideActual, this.proyecto);
}

Carousel.prototype.stop = function () {
	clearTimeout(this.run);
};

Carousel.prototype.slide = function (index, carouselID) {
    if (index >= 0 && index <= this.cantSlidesTotal) {
        for (let s = 0; s <= this.cantSlidesTotal; s++) {
            this.stop();
            if (s === index) {
                document.getElementsByClassName(carouselID)[s].classList.add("counter-on");
                this.slides[s].style.display = "inline-block";
            } else {
                this.slides[s].style.display = "none";
                document.getElementsByClassName(carouselID)[s].classList.remove("counter-on");
            }
        }
    } else {
        alert("Index " + index + " no existe. Displanicle: 0 - " + this.cantSlidesTotal)
    }
}

function generateCarouselCounter(carouselID, cantidad) {
    let containerS = document.getElementById(carouselID);
    let counterContainer = document.createElement("div");
    containerS.append(counterContainer);
    containerS.style.display = "flex";
    for (let i = 0; i < cantidad; i++) {
        let counter = document.createElement("span");
        counter.className = `${carouselID} carousel-counter`;
        counterContainer.append(counter);
    }

}

let podcast = new Carousel("podcast");

let gifos = new Carousel("gifos");