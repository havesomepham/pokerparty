const WebSocket = require('ws');
const server = new WebSocket.Server({ port: 3000 });

server.on('connection', (socket) => {
  console.log('Client connected');

  // Example: Send a letter of the alphabet every time the server receives a space bar press
  let alphabetIndex = 0;
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  const sendAlphabetLetter = () => {
    const letter = alphabet[alphabetIndex % alphabet.length];
    socket.send(letter);
    alphabetIndex++;
  };

  // Listen for space bar presses
  socket.on('message', (message) => {
    if (message == ' ') {
      sendAlphabetLetter();
    }
  });

  socket.on('close', () => {
    console.log('Client disconnected');
  });
});


