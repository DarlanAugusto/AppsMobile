function tirarFoto() {
    var cameraOptions = {
        quality: 100,
        destinationType: 0,
        targetWidth: 400,
        targetHeight: 400,
        mediaType: 0,
        correctOrientation: true,
        sourceType: 0

    }
    // abre a camera
    navigator.camera.getPicture(cameraSeccess, cameraError, cameraOptions);
}

function cameraSeccess(imageData) {
    var image = document.getElementById('imagem');

    // setando src da imagem base64
    image.src = "data:image/jpeg;base64," + imageData;
}

function cameraError(msgError) {
    alert(msgError);
}