// app.js
document.getElementById('messageForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const messageInput = document.getElementById('message');
    const message = messageInput.value;

    // Envía el mensaje al servidor
    fetch('/submit-message', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message })
    })
    .then(response => response.json())
    .then(data => {
        // Muestra el mensaje enviado en la página
        const messagesDiv = document.getElementById('messages');
        const messageElement = document.createElement('p');
        messageElement.textContent = data.message;
        messagesDiv.appendChild(messageElement);

        // Limpia el campo de entrada
        messageInput.value = '';
    });
});
