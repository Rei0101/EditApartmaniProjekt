$(document).ready(function(){
$( function() {
    $( "#sortable" ).sortable({
      placeholder: "ui-state-highlight"
    });
    $( "#sortable" ).disableSelection();
  } );

//popup login
  $("#prvi").click(function(){
   PopupLogin();
   });

   function PopupLogin(){
    $("#loginpopup").fadeIn();
    $("#loginpopup").css({"visibility":"visible","display":"block"});
    $("nav,footer,div:not(#loginpopup)").css({ //koristia san nav footer div umisto cili body jer inace ne radi
      'filter':'blur(13px)',
   });

   $("#loginforma").submit(function( event ){
    var vrjimena = $("#valueimena").val();
    $(".ime").text(vrjimena); 
    event.preventDefault();
    hidepopuplogin();
    
   })



   }



   $("#exitbtn").click(function(){
    hidepopuplogin();
   });


   function hidepopuplogin(){
    $("#loginpopup").fadeOut();
    $("#loginpopup").css({"visibility":"hidden","display":"none"});
    $("nav,footer,div:not(#loginpopup)").css({ //koristia san nav footer div umisto cili body jer inace ne radi
      'filter':'blur(0px)',
   });


    }




    //povratne info popup

    $("#drugi").click(function(){
      PovPopup();
      });
   
      function PovPopup(){
       $("#povratnepopup").fadeIn();
       $("#povratnepopup").css({"visibility":"visible","display":"block"})
       
       $("nav,footer,div:not(#povratnepopup)").css({ //koristia san nav footer div umisto cili body jer inace ne radi
         'filter':'blur(13px)',
      });
   
      }
   
      $("#exitbtn2").click(function(){
       hidepopuppov();
      });
   
   
      function hidepopuppov(){
       $("#povratnepopup").fadeOut();
       $("#povratnepopup").css({"visibility":"hidden","display":"none"});
       $("nav,footer,div:not(#povratnepopup)").css({ //koristia san nav footer div umisto cili body jer inace ne radi
         'filter':'blur(0px)',
      });
   
   
       }


      //placanje popup
       $("#treci").click(function(){
        PopupPlacanje();
        });
     
        function PopupPlacanje(){
         $("#placanjepopup").fadeIn();
         $("#placanjepopup").css({"visibility":"visible","display":"block"})
        
         $("nav,footer,div:not(#placanjepopup)").css({ //koristia san nav footer div umisto cili body jer inace ne radi
           'filter':'blur(13px)',
        });
     
     
        }
     
     
     
        $("#exitbtn3").click(function(){
         hideplacanjepopup();
        });
     
     
        function hideplacanjepopup(){
         $("#placanjepopup").fadeOut();
         $("#placanjepopup").css({"visibility":"hidden","display":"none"});
         $("nav,footer,div:not(#placanjepopup)").css({ //koristia san nav footer div umisto cili body jer inace ne radi
           'filter':'blur(0px)',
        });
     
     
         }


        //za sortable
         $( ".selector" ).sortable({
          axis: "x"
          
        });
      
        $("#dodajgrad").click(function(){ 
          var imegrada =window.prompt("Molim Vas Unesite Ime Mjesta/Grada");
          var novigrad = $('<li class="ui-state-default"/>').appendTo('#sortable');
          novigrad.text(imegrada);
          
          
        ;})


        $("#paypal").click(function(){
            $("#placanjepopup").css({"display":"none","visibility":"hidden"});
            $("nav,footer,div:not(#placanjepopup)").css({ //koristia san nav footer div umisto cili body jer inace ne radi
              'filter':'blur(0px)',
              
           });
           $(".metodaplacanja").text("PayPal");

        })


        $("#mastercard").click(function(){
          $("#placanjepopup").css({"display":"none","visibility":"hidden"});
          $("nav,footer,div:not(#placanjepopup)").css({ //koristia san nav footer div umisto cili body jer inace ne radi
            'filter':'blur(0px)',
            
         });
         $(".metodaplacanja").text("Mastercard");

      })

      
      $("#applepay").click(function(){
        $("#placanjepopup").css({"display":"none","visibility":"hidden"});
        $("nav,footer,div:not(#placanjepopup)").css({ //koristia san nav footer div umisto cili body jer inace ne radi
          'filter':'blur(0px)',
          
       });
       $(".metodaplacanja").text("ApplePay");

    })
      
     

});