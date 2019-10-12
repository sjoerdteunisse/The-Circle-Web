$( "#chat .chatbar" ).click(function() {
    $( this ).parent( "#chat" ).toggleClass( "closeChat" );
});
$( "#chat .chatbar:before" ).click(function() {
    $( this ).parent( "#chat" ).toggleClass( "closeChat" );
});

function sendMessage( button ){
    var message = $(button).parent( ".webflow-style-input" ).find(".sendMessage").val();
    $(button).parent( ".webflow-style-input" ).find(".sendMessage").val("");
    alert(message);
    
};