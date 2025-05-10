'use strict';

const btnImagen = document.getElementById("btnImagen");
const imgInput = document.getElementById("inputImage");

let widget_cloudinary = cloudinary.createUploadWidget({
    cloudName: 'dipv5k366',
    uploadPreset: 'imgProductos'
}, (err, result) => {
    if(!err && result && result.event === 'success'){
        //console.log('Imagen subida con exito', result.info);
        imgInput.value = result.info.secure_url;
    }
});
btnImagen.addEventListener('click', () => {
    widget_cloudinary.open();
}, false);