document.getElementById("download-btn").addEventListener("click",function(){
    var element = document.querySelector(".container");
    html2pdf()
    .set({margin:0.5,filename:'Resume-SumitMeena.pdf',html2canvas:{scale:2}})
    .from(element)
    .save();
});