window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-DHFESG53SJ');

timePasado = 0;


intervaloActual2 = setInterval(()=>{
	if (timePasado >= 4) {
	     clearInterval(intervaloActual2)
		} else timePasado++;
	},800);

addEventListener("load",()=>{
	intervaloActual = setInterval(()=>{
		if (timePasado >= 4) {
			document.getElementById('loader').style.animation = "desaparecer 1s forwards"
			document.querySelector(".progress").style.animation = "desaparecerAbajo 0.20s forwards"
			setTimeout(()=>{
	document.getElementById('loader').style.display = "none";
			},800)
	     clearInterval(intervaloActual)
		}
	},100)
})
scroll(0,0)