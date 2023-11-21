$(document).ready(function(){
    $(document).mousemove(function(event){
       var lightSize = $("#light").width() / 2; // Половина размера фонарика
       $("#light").css({
           "top": event.pageY - lightSize,  // Расчет положения сверху
           "left": event.pageX - lightSize // Расчет положения слева
       }); 
    }); 
});
