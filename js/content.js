// Se obtiene el botón de la barra de arriba para desplegar las notificaciones
const notificationsButton = document.getElementsByTagName('ytd-notification-topbar-button-renderer');

// Se agrega la acción de obtener todos los elementos de las notificaciones al presionar el botón
notificationsButton[0].addEventListener('click', function(){ 

    console.log('Se desplegaron las notificaciones!');

    setTimeout(()=>{
        var videoNotifications = document.getElementsByTagName('ytd-notification-renderer');
        console.log('Notificaciones: ',videoNotifications.length);
    },200); // Se debe encontrar otra solución para poder obtener las notificaciones luego de presionar el botón

    videoNotifications.forEach((videoNotification)=>{
        var textElement = videoNotification.getElementsByTagName('metadata')[0];
        // <yt-formatted-string class="style-scope ytd-notification-renderer">hace 2 horas</yt-formatted-string>
    })

});