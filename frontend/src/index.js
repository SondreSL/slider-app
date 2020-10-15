// Start the Elm application.
var app = Elm.Main.init({
  node: document.getElementById("root"),
});

// Create your WebSocket.
// var socket = new WebSocket("wss://echo.websocket.org");
var socket = new WebSocket("ws://localhost:9160");

// When a command goes to the `sendMessage` port, we pass the message
// along to the WebSocket.
app.ports.sendMessage.subscribe(function (message) {
  socket.send(message);
});

// When a message comes into our WebSocket, we pass the message along
// to the `messageReceiver` port.
socket.addEventListener("message", function (event) {
  app.ports.messageReceiver.send(event.data);
});

// If you want to use a JavaScript library to manage your WebSocket
// connection, replace the code in JS with the alternate implementation.