let count=0;

document.getElementById("click-btn").addEventListener("click", function(){
   const inputText = document.getElementById("input text").value;
    count++
   const trList =document.getElementById("tr-list");
   const tr=document.createElement("tr");
   tr.id=`elem-${count}`
   tr.innerHTML=`
   <td>${count}</td>
   <td>${ inputText}</td>
   <td>
   <button class="btn btn-primary btn-sm accept-btn" data="elem-${count}">Complete</button>
   <button  class="btn btn-danger btn-sm delete-btn">delete</button>
   </td>
   `
   trList.appendChild(tr)
   document.getElementById("input text").value="";
   const deleteBtn=document.getElementsByClassName("delete-btn");
   for(const dBtn of deleteBtn){
    dBtn.addEventListener("click", function(event){
       event.target.parentNode.parentNode.style.display="none"
    })
   }


   const acceptBtn=document.getElementsByClassName("accept-btn");
   for(const aBtn of acceptBtn){
    aBtn.addEventListener("click", function(){
     const elemId = aBtn.getAttribute('data'); // elem-1
     const tr = document.getElementById(elemId);
     const complete =document.getElementById("complete");
     complete.appendChild(tr)
    })
   }

})