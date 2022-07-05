function getLocation() {
    var geolocationOptions = {
        enableHighAccuracy: true
    }
    navigator.geolocation.getCurrentPosition(geolocationSuccess, geolocationError, geolocationOptions);
}

function geolocationSuccess(position) {
    // position.cords.propriedade
    var msgLocation = `Latitude: ${position.coords.latitude}<br>Longitude: ${position.coords.longitude}`
    document.getElementById('localizacao').innerHTML = msgLocation;

}

function geolocationError(error) {
    // retorna um objeto com o código do erro e a mensagem
    alert(`Erro: ${error.message}`);
}