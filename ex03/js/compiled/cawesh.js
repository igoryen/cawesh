$( document ).ready( function(){

    $modal = $("#myModal");
    var modal = document.getElementById('myModal'); 

    $modal_closer = $modal.find("span.closemodal");
    $modal_closer.on("click", function(){
        $modal.hide();
        $( "body" ).removeClass("modal-open");
    });


    $("#myBtn").on( "click", function(){
        console.log("click!");

                if ( $( window ).width() <= 600 ) {

                       $modal.fadeIn( 50, function(){
                var f = 3; 
                $("#mdl_wrapper").height( $( window ).height() - (40*f) );
                $(this).css("display", "flex");

            });


                    }
        else {
            $modal.show().css("display", "flex");
        }

                $( "body" ).addClass("modal-open");

    });


        window.onclick = function(event) {
        if (event.target == modal) {
            $modal.hide(); 
            $( "body" ).removeClass("modal-open");
        }
    }
});
//# sourceMappingURL=cawesh.js.map
