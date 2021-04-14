function SearchFunkcija(){ // ne radi u docuemnt.ready(nesto ka browser ne moze dohvatit vrijednost)
    var searchvalue = $("#searchbar").val();

    $(".card").removeClass("zabrisanje");
    $('.card:not(:contains('+ searchvalue +'))').addClass("zabrisanje");
  };




