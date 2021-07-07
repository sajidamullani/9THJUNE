$(document).ready(
    function(){     
        $("h1").click(function(e)
        {
            var content=$(this).html();
            alert("You have clicked on "+content.substr(13,4));
        });
       
    }
);
