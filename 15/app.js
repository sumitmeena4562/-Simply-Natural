const filterbtns=document.querySelectorAll(".filter-btn");
const galleryItems=document.querySelectorAll(".gallery-item");


filterbtns.forEach(btn=>{
    btn.addEventListener("click",()=>{
        filterbtns.forEach(b=> b.classList.remove("active"));
        btn.classList.add("active");

        const filter=btn.dataset.filter;
         galleryItems.forEach(item=>{
            if(filter=="all"||item.classList.contains(filter)){
                item.classList.remove("hidden");
            }
            else{
                item.classList.add("hidden");
            }
         });
    });
});