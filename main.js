//searchbar




function SearchFunkcija(){ 
    var searchvalue = $("#searchbar").val();

    $(".card").removeClass("zabrisanje");
    $('.card:not(:contains('+ searchvalue +'))').addClass("zabrisanje");
  };

  var cijenaminunos = parseInt($("#cijenamin").val());
  var cijenamaxunos = parseInt($("#cijenamax").val());
  
  var listacijena = [];

 

  $('.card').each(function() {
          var $this = $(this);
          listacijena.push({

              'vrcijena' : $this.find('.cijenaapartmana').text()
      
          });
          //console.log(listacijena);
      });


      let nadeni = [];
    for(i = 0;i < listacijena.length;i++){
    
      
      if(parseInt(listacijena[i].vrcijena) <= parseInt(cijenamaxunos) && parseInt(listacijena[i].vrcijena) >= parseInt(cijenaminunos)){
        nadeni.push(listacijena[i].vrcijena);
        console.log(nadeni);
        
        if((jQuery.inArray(listacijena[i].vrcijena, nadeni))){
         
          console.log("jednaka");
        }
        else{
          $(".cijenaapartmana").parent().addClass("zabrisanje");
          console.log("nije tu");
        }

        
       
        
      }

      else{
        console.log("Ja Ne Odgovaram Uvjetima");
        
      }
    }

    for(i = 0;i < listabs.length;i++){
      //console.log(listabs[i].brsobalol);
      //console.log(brojsobaunos);

    if(listabs[i].brsobalol == brojsobaunos){
      
      $(".card").removeClass("zabrisanje");
      $('.brojsoba:not(:contains('+ brojsobaunos +'))').parent().addClass("zabrisanje");
      
    }
    else{
      console.log("ne brisem se ");
    }
  }//kraj filtera za broj soba
 

/*   
  let djecacard = $(".card");

  let cijene = djecacard.childNodes;
  console.log(cijene);

  let searchitem = parseInt(event.currentTarget.value);
  
  
  for(i = 0;i < djecacard.length;i++){
    console.log(djecacard);
      if(parseInt(djecacard[i].textContent) >= cijenaminunos && parseInt(djecacard[i].textContent) <= cijenamaxunos ){
        console.log(djecacard[i].textContent);
        djecacard[i].style.display="block";
        
      } 
      else{
        djecacard[i].style.display = "none";
      }
    }
   



  
    

    


  });*/ //kraj filter forme







