

document.getElementById("searchBtn").addEventListener("click",function(){
    
    const loadingBtn =document.querySelector(".loading-control");
    loadingBtn.style.display ="block";
    
    var dots = window.setInterval( function() {
        var wait = document.getElementById("wait");
        if ( wait.innerHTML.length > 3 ) 
            wait.innerHTML = "";
        else 
            wait.innerHTML += ".";
        }, 1100);
})








