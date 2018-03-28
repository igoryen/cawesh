$( document ).ready( function(){
    // console.log("cawesh ex3 ready");

    $modal = $("#myModal");
    var modal = document.getElementById('myModal'); // Get the modal

    $modal_closer = $modal.find("span.closemodal");
    $modal_closer.on("click", function(){
        $modal.hide();
        $( "body" ).removeClass("modal-open");
    });


    $("#myBtn").on( "click", function(){
        console.log("click!");
        
        if ( $( window ).width() <= 600 ) {
           
            $modal.fadeIn( 50, function(){
                // alert("now")
                var f = 3; // f for "factor"
                $("#mdl_wrapper").height( $( window ).height() - (40*f) );
                $(this).css("display", "flex");

            });
            

        }
        else {
            // alert("not less!")
            $modal.show().css("display", "flex");
        }
        
        $( "body" ).addClass("modal-open");

    });

    
    window.onclick = function(event) {
        if (event.target == modal) {
            $modal.hide(); // When the user clicks anywhere outside of the modal, close it
            $( "body" ).removeClass("modal-open");
        }
    }
});