//searchbar
function SearchFunkcija(){ 
    var searchvalue = $("#searchbar").val();

    $(".card").removeClass("zabrisanje");
    $('.card:not(:contains('+ searchvalue +'))').addClass("zabrisanje");
  };


  $("filterforma").submit(function(){
    if('[$(".cijenaapartmana") <= $("cijenamax")][$(".cijenaapartmana") >= $("cijenamin")]' ){
      console.log("aaaa");
    }
  });





