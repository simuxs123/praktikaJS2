const btn=document.querySelector("#karamba");
const iframe=document.createElement("IFRAME");
iframe.setAttribute("src","https://www.youtube.com/embed/CWqrdzNoBKA");
iframe.classList.add("frame");
btn.addEventListener("click", function(){
    document.body.append(iframe);
})
