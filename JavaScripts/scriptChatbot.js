function toggleChatbot() {
    const chatbot = document.getElementById('chatbot');
    chatbot.style.display = chatbot.style.display === 'none' || chatbot.style.display === '' ? 'flex' : 'none';
}

function sendMessage(text) {
    const input = document.getElementById('chatInput');
    const chatBody = document.getElementById('chatBody');
    const messageText = text || input.value;
    if (!messageText) return;

    const userMessage = document.createElement('div');
    userMessage.className = 'chatbot-message';
    userMessage.style.background = '#007bff';
    userMessage.style.color = 'white';
    userMessage.textContent = messageText;
    chatBody.appendChild(userMessage);
    input.value = '';

    setTimeout(() => {
        const botResponse = document.createElement('div');
        botResponse.className = 'chatbot-message';
        botResponse.textContent = getBotResponse(messageText);
        chatBody.appendChild(botResponse);
        chatBody.scrollTop = chatBody.scrollHeight;
    }, 500);
}

function getBotResponse(text) {
    const responses = {
        '¿Qué es este chatbot?': 'Soy un chatbot creado para responder preguntas básicas.',
        '¿Cómo funciona?': 'Simplemente selecciona una pregunta o escribe un mensaje.',
        '¿Qué tecnologías usas?': 'Uso HTML, CSS y JavaScript.',
        'Dame un consejo de programación': 'Practica todos los días y divide los problemas en partes pequeñas. 🚀'
    };
    return responses[text] || 'Lo siento, no entiendo esa pregunta.';
}