let bod = document.body
let contextMenu = document.getElementById("contextMenu")
let logx , logy


bod.addEventListener("contextmenu", function(event){
    event.preventDefault()
   logx = event.pageX
   logy = event.pageY
contextMenu.removeAttribute("style")
contextMenu.style.left = logx
contextMenu.style.top = logy

})

bod.addEventListener("click", function(){
    contextMenu.style.display = "none"

})