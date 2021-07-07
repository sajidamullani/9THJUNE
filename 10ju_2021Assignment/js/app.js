const counter=(
    function(){
        
        console.log()
        var counterValue=1;
        // change By a particular value => 1,2,3
        function changeBy(val){
            
            counterValue=counterValue+val;
        }
        return {
            increment:function(){ 
               
                changeBy(1);
            },
            decrement:function(){
                
                changeBy(-1);
            },
            value:function(){
                 return counterValue;
                }
        };
    })();
    
    function onClick(event) {
        const result = document.getElementById("result");
        const calculate = document.getElementById("calculate");
        switch (event.target.id) {
            case "button1":
                counter.decrement()
                var totalprice=20*counter.value();
                break;
            case "button2":
                counter.increment()
                var totalprice=20*counter.value();
                break;
            default:
                console.log("default is called");
                break;
        }
        result.innerHTML = counter.value();
        calculate.innerHTML=totalprice;
    }