const container = document.querySelector("#me")
const player = document.querySelector("#video-me")

let streamObject;

navigator.mediaDevices.getUserMedia({
    video: {
        width: {max: 100},
        height: {max: 100},
        frameRate: {max: 30}
    },
    audio: false,
}).then((stream) => {
    streamObject = stream
    player.srcObject = stream
}).catch((err) => {
    const status = document.querySelector("#status")
    status.innerHTML = "boom"
});