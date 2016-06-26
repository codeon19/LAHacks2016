var main= function() {
    $('form').submit(function(event) {
        var $input = $(event.target).find('input');
        var comment = $input.val();
        
        if(comment != "") {
            var html = $('<li>').text(comment);
            html.prependTo('#comments');
            $input.val("");
        }
        
        return false;
    });
}

var evenOrOdd = 0;

$('form').submit(function() {
    
    if(evenOrOdd % 2 == 0){
        $('#something').animate({ backgroundColor: "red" }, 1000);
    }
    else{
        $('#something').animate({ backgroundColor: "green" }, 1000);
    }
    
    evenOrOdd++;
    
});

<!-- When the document is ready, call it --> 
$(document).ready(main);