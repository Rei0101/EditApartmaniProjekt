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
    let karticacijenatekst = document.createElement("h6");
    let karticabrsobatekst = document.createElement("h6");
    
    karticacijenatekst.innerHTML=" €/noć";
    karticabrsobatekst.innerHTML=" soba/be";
    kartica.style.height = "max-content";
    kartica.appendChild(karticaimg);
    kartica.appendChild(karticanaslov);
    kartica.appendChild(karticalokacija);
    kartica.appendChild(karticacijena); 
    kartica.appendChild(karticacijenatekst);
    karticacijena.style.paddingTop="10px";
    karticacijenatekst.style.paddingBottom="10px";
    kartica.appendChild(karticabrsoba);
    kartica.appendChild(karticabrsobatekst);
    kartica.classList.add("card"); //ko attributre samo malo kraca i zgodnija linija
    karticanaslov.classList.add("cardnaslov"); //ko attributre samo malo kraca i zgodnija linija
    kartica.classList.add("cardimg"); //ko attributre samo malo kraca i zgodnija linija
    document.getElementById("wrapper").append(kartica); 
    karticaimg.src = slika; //postavlja pozadinu
    karticanaslov.innerHTML= naslov;
    karticacijena.innerHTML=cijena;// + " €/noć";
    karticalokacija.innerHTML=lokacija; //postavi sta ce pisat u h4
    karticanaslov.innerHTML= naslov;
    karticabrsoba.innerHTML=brsoba;// + " soba/be";
    //karticacijena.appendChild(karticacijenatekst);
    //karticabrsoba.appendChild(karticabrsobatekst);
    karticabrsoba.classList.add("brojsoba");
    karticacijena.classList.add("cijenaapartmana");
    //let sobetxt = document.createElement("h6").innerHTML=" Sobe";
    //let cijenatxt = document.createElement("h5").innerHTML=" €/Noć";
    //karticabrsoba.append(sobetxt);
    //karticacijena.append(cijenatxt);

  

    let popup = document.getElementById("popup")
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
//triban ovamo dodat jos da se property-i u divu ne maknu kad se otvori pop-up
    }
    
}

let apartmani1 = new Apartman('slike/slika1.jpg', "Villa Tulipan" , "Sinj" , 49  , 2  );
let apartmani2 = new Apartman("slike/slika1.jpg", "Blue Graden Apartman" , "K.Sućurac" , 29, 2);
let apartmani3 = new Apartman("slike/slika1.jpg", "Villa Demont" , "Solin" , 59 , 3);
let apartmani4 = new Apartman("slike/slika1.jpg", "Apartman Radić" , "Split" , 79 , 3);
let apartmani5 = new Apartman("slike/slika1.jpg", "Beach House 1" , "K.Stari" , 39 ,3);
let apartmani6 = new Apartman("slike/slika1.jpg", "Apartman Ivanić" , "Seget" , 29, 2);
let apartmani7 = new Apartman("slike/slika1.jpg", "Villa Monteri" , "Supetar" , 99, 4);
let apartmani8 = new Apartman("slike/slika1.jpg", "Apartman Balan" , "Supetar" , 59, 3);
let apartmani9 = new Apartman("slike/slika1.jpg", "Penthouse Klaudia" , "Split" , 149, 5);
let apartmani10 = new Apartman("slike/slika1.jpg", "Apartman Luxury" , "K.Kambelovac" , 89, 4);
let apartmani11 = new Apartman("slike/slika1.jpg", "Villa Lucia" , "Split" , 189, 5);
let apartmani12 = new Apartman("slike/slika1.jpg", "Apartman Maria" , "Trilj" , 29, 1);









