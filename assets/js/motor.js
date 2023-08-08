
// if (window.innerWidth < 768) {
// 	[].slice.call(document.querySelectorAll('[data-bss-disabled-mobile]')).forEach(function (elem) {
// 		elem.classList.remove('animated');
// 		elem.removeAttribute('data-bss-hover-animate');
// 		elem.removeAttribute('data-aos');
// 		elem.removeAttribute('data-bss-parallax-bg');
// 		elem.removeAttribute('data-bss-scroll-zoom');
// 	});
// }


// document.addEventListener('DOMContentLoaded', function() {
// }, false);

function Motor (Merek, Tahun, Warna, Harga){
	this.Merek = Merek;
	this.Tahun = Tahun;
	this.Warna = Warna;
	this.Harga = Harga;
		
}
var Honda = new Motor("Honda Scoopy", "2023", "Pink", "Rp 21,88 Juta");
var Yamaha = new Motor("Yamaha YZF R6 ", "2013", "Blue", "Rp 270 juta");
var Kawasaki = new Motor("kawasaki KLX ", "2020", "green", "Rp 33 Juta");


var motor_scoopy = document.getElementsByClassName("Motor");
motor_scoopy[0].innerHTML = Honda.Merek;
motor_scoopy[1].innerHTML = Honda.Tahun;
motor_scoopy[2].innerHTML = Honda.Warna;
motor_scoopy[3].innerHTML = Honda.Harga;
motor_scoopy[4].innerHTML = Yamaha.Merek;
motor_scoopy[5].innerHTML = Yamaha.Tahun;
motor_scoopy[6].innerHTML = Yamaha.Warna;
motor_scoopy[7].innerHTML = Yamaha.Harga;
motor_scoopy[8].innerHTML = Kawasaki.Merek;
motor_scoopy[9].innerHTML = Kawasaki.Tahun;
motor_scoopy[10].innerHTML = Kawasaki.Warna;
motor_scoopy[11].innerHTML = Kawasaki.Harga;












