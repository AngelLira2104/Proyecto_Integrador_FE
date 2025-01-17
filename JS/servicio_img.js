'use strict'
const spanimagen = document.getElementById("inputImag");
const btnimagen = document.getElementById("inputImagee");
const inputimag = document.getElementById("inputImage");
//var img = document.getElementById("inputImagee").src;

let widget_clou = cloudinary.createUploadWidget({
    cloudName : 'dm2vif8t1',
    uploadPreset: 'AngelLira'

},(err,result) =>{
    // console.log('Imagen subida con exito', result.info);
    //  img.src = result.info.secure_url;
    //  console.log(img)
    // span
    if(!err && result & result.event === 'success'){
        console.log('Imagen subida con exito', result.info);
        spanimagen.src = result.info.secure_url;
    }
});

 btnimagen.addEventListener('click', ()=>{
      widget_clou.open();
 }, false);











 
// btnimagen.addEventListener('click',function(){
//      inputimag.click();
//  })
// inputimag.addEventListener('click',function(){
//     if (inputImag.value) {
//         spanimagen.innerHTML = inputimag.value;
//     }else{
//         spanimagen.innerHTML = "No hay imagen";
//      }
// })