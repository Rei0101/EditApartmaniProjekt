//searchbar




function SearchFunkcija(){ 
    var searchvalue = $("#searchbar").val();

    $(".card").removeClass("zabrisanje");
    $('.card:not(:contains('+ searchvalue +'))').addClass("zabrisanje");
  };

  var cijenaminunos = parseInt($("#cijenamin").val());
  var cijenamaxunos = parseInt($("#cijenamax").val());
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
   */



  
    

    


  }); //kraj filter forme







