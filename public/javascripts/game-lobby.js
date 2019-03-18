const socket = io('http://localhost:3001');

socket.on('hello', data => {
    console.log(data);
});