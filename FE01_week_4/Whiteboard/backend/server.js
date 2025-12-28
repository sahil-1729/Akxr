const WebSocket = require("ws");

// initialize server with port 3000
const wss = new WebSocket.Server({ port: 3000 });

console.log("WebSocket server running on ws://localhost:3000");

// jab bhi any user join, if they make any changes in the canvas then forward it to other clients 
wss.on("connection", (socket) => {
    socket.on("message", (message) => {

        // broadcast message to all clients
        wss.clients.forEach(client => {
            if (client.readyState === WebSocket.OPEN) {
                // console.log(message.toString())

                client.send(message.toString());
            }
        });
    });
});
