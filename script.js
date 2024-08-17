document.getElementById('yes').addEventListener('click', function() {
    showMessage('ხოდა რას უცდი, დარეკე ნომერზე და შეუკვეთე🌯👏👇');
});

document.getElementById('no').addEventListener('click', function() {
    showMessage('შეჭამე აქ და შეგიყვარდება🌯');
});

function showMessage(message) {
    const messageWindow = document.querySelector('.message-window');
    messageWindow.querySelector('.message-content p').textContent = message;
    messageWindow.style.display = 'block';

    messageWindow.querySelector('.message-content button').addEventListener('click', function() {
        messageWindow.style.display = 'none';
    });
}
