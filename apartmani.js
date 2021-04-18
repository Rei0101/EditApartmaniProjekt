let Apartman = function(slika, naslov, lokacija, cijena ,brsoba){
    this.slika = slika;
    this.naslov = naslov;
    this.lokacija = lokacija;
    this.cijena = cijena;
    this.brsoba = brsoba;
    // tu cemo jos dodat opis
    let kartica = document.createElement("div");
    let karticaimg = document.createElement("img");
    let karticanaslov = document.createElement("h4");
    let karticalokacija = document.createElement("h6");
    let karticacijena = document.createElement("h6");
    let karticabrsoba = document.createElement("h6");
   
    
    
    
    kartica.style.height = "max-content";
    kartica.appendChild(karticaimg);
    kartica.appendChild(karticanaslov);
    kartica.appendChild(karticalokacija);
    kartica.appendChild(karticacijena); 
    kartica.appendChild(karticabrsoba);
    
    kartica.classList.add("card"); 
    karticanaslov.classList.add("cardnaslov"); 
    kartica.classList.add("cardimg"); 
    karticalokacija.classList.add("lokacijacard");
    document.getElementById("wrapper").append(kartica); 
    karticaimg.src = slika; 
    karticanaslov.innerHTML= naslov;
    karticacijena.innerHTML=cijena;
    karticalokacija.innerHTML=lokacija; 
    karticanaslov.innerHTML= naslov;
    karticabrsoba.innerHTML=brsoba;
   
    karticabrsoba.classList.add("brojsoba");
    karticacijena.classList.add("cijenaapartmana");
    

  

    let popup = document.getElementById("popup");
    let x = document.getElementById("close");
    let cijenaMin = document.getElementById("cijenamin");
    let cijenaMax = document.getElementById("cijenamax");
    
    let popupContent = document.getElementById("popup-content");
    kartica.addEventListener("click", otvori);
    x.addEventListener("click", zatvori);

   

 
    
    function otvori(){
        popup.classList.add("popup");
        x.classList.add("close");
        popupContent.classList.add("popup-content");
        x.style.display="block";
        popupContent.appendChild(x);
        popupContent.appendChild(karticanaslov);
        popupContent.appendChild(karticaimg);
        popupContent.appendChild(karticalokacija);
        popupContent.appendChild(karticacijena)
        popupContent.appendChild(karticabrsoba);
        
    }
    function zatvori(){
        kartica.appendChild(karticaimg);
        kartica.appendChild(karticanaslov);
        kartica.appendChild(karticalokacija);
        kartica.appendChild(karticacijena);
        kartica.appendChild(karticabrsoba);
        popupContent.removeChild(x);
        popupContent.classList.remove("popup-content");
        x.classList.remove("close");
        popup.classList.remove("popup");

    }
    
}

let apartmani1 = new Apartman('slike/slika2.jpg', "Villa Tulipan" , "Sinj" , 39  , 2  );
let apartmani2 = new Apartman("slike/slika3.jpg", "Blue Graden Apartman" , "K.Sućurac" , 29, 2);
let apartmani3 = new Apartman("slike/slika4.jpg", "Villa Demont" , "Solin" , 59 , 3);
let apartmani4 = new Apartman("slike/slika5.jpg", "Apartman Radić" , "Split" , 79 , 3);
let apartmani5 = new Apartman("slike/slika6.jpg", "Beach House 1" , "K.Stari" , 39 ,3);
let apartmani6 = new Apartman("slike/slika7.jpg", "Apartman Ivanić" , "Seget" , 29, 2);
let apartmani7 = new Apartman("slike/slika8.jpg", "Villa Monteri" , "Supetar" , 99, 4);
let apartmani8 = new Apartman("slike/slika9.jpg", "Apartman Balan" , "Supetar" , 59, 3);
let apartmani9 = new Apartman("slike/slika10.jpg", "Penthouse Klaudia" , "Split" , 149, 5);
let apartmani10 = new Apartman("slike/slika11.jpg", "Apartman Luxury" , "K.Kambelovac" , 89, 4);
let apartmani11 = new Apartman("slike/slika12.jpg", "Villa Lucia" , "Split" , 189, 5);
let apartmani12 = new Apartman("slike/slika13.jpg", "Apartman Maria" , "Trilj" , 29, 1);









