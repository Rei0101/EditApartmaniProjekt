//searchbar
function SearchFunkcija(){ 
    var searchvalue = $("#searchbar").val();

    $(".card").removeClass("zabrisanje");
    $('.card:not(:contains('+ searchvalue +'))').addClass("zabrisanje");
  };


  $("#botunforma").click(function(){
    

    if(cijenamaxunos < cijenaminunos ){
      alert("Maximalna Cijena Je Veća Od Minimalne.Molim Vas Namjestite Unos Tako Da Je Max Veći Od Minimuma");
    }
   

    var brojsobaunos = $("#brojsoba").val();
    var listabs = [];
    

    $('.card').each(function() {
        var $this = $(this);
        listabs.push({

            'brsobalol' : $this.find('.brojsoba').text()
     
        });
        //console.log(listabs);
    });

    for(i = 0;i < listabs.length;i++){
      //console.log(listabs[i].brsobalol);
      //console.log(brojsobaunos);

    if(listabs[i].brsobalol == brojsobaunos){
      
      $(".card").removeClass("zabrisanje");
      $('.brojsoba:not(:contains('+ brojsobaunos +'))').parent().addClass("zabrisanje");
      
    }
    else{
      //console.log("ne brisem se ");
    }
  }//kraj filtera za broj soba


  var cijenaminunos = parseInt($("#cijenamin").val());
  var cijenamaxunos = parseInt($("#cijenamax").val());
  
  var listacijena = [];

 

  $('.card').each(function() {
          var $this = $(this);
          listacijena.push({

              'vrcijena' : $this.find('.cijenaapartmana').text()
      
          });
          console.log(listacijena);
      });


      
    for(i = 0;i < listacijena.length;i++){
      //console.log(listacijena[i].vrcijena);
      if(parseInt(listacijena[i].vrcijena) <= parseInt(cijenamaxunos) && parseInt(listacijena[i].vrcijena) >= parseInt(cijenaminunos)){

        var nadeni = []; 
        
        nadeni.push( parseInt(listacijena[i].vrcijena)); //sve brojeve koje je nasa da odogovaraju uvjetu idu tu tako da izbrisemo sve kartice koje ga nemaju
        $('.cijenaapartmana:not(:contains('+ odinestomoraic +'))').parent().addClass("zabrisanje")

        
       
        
      }

      else{
        console.log("Ja Ne Odgovaram Uvjetima");
      }
    }
    

    


  }); //kraj filter forme







