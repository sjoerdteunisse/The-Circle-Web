$(document).ready(function(){
    //check the url
    var url = window.location.href; 

            
    $("#menu a").each(function() {
        //check if the url is the same
        if(url == (this.href)) { 
            $(this).closest("li").addClass("active");
        }
    });
});

