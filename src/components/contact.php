<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $to = "lnfsolucionesdigitales@gmail.com"; // Reemplaza con tu dirección de correo electrónico
    $subject = "Nuevo mensaje desde el formulario de contacto";
    $body = "Nombre: $name\nCorreo electrónico: $email\nPaquete a consultar: $subject\nMensaje: $message";

    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        http_response_code(200);
        echo "¡El mensaje ha sido enviado!";
    } else {
        http_response_code(500);
        echo "Error al enviar el mensaje, por favor inténtalo de nuevo más tarde.";
    }
} else {
    http_response_code(403);
    echo "Ha ocurrido un problema al enviar el formulario, por favor intenta de nuevo.";
}
?>
