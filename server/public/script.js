const socket = io();
const mypeer = new Peer(undefined, {
    host:'/',
    port:'3001',
})

// DOM Element
const videoGrid = document.querySelector('#video-grid');
const myVideo = document.createElement('video');
myVideo.muted  = true
const peers = {};


navigator.mediaDevices.getUserMedia({
    audio:true,
    video:true
}).then(stream =>{
    addVideoStream(myVideo, stream);

    mypeer.on('call', call=>{
        call.answer(stream);
        const video = document.createElement('video')
        call.on('stream', userVideoStream=>{
            addVideoStream(video, userVideoStream)
        })
    })

    socket.on('conn', userId=>{
        connectTonewUser(userId, stream)
    })
})

// working with room and users
console.log('working in script')

socket.on('disconn', userId=>{

    if(peers[userId]){peers[userId].close()}
})

mypeer.on('open', id=>{
    socket.emit('join-room', ROOM_ID, id);   
})


// Video Funtions
const connectTonewUser=(userId, stream)=>{
    const call = mypeer.call(userId,stream)
    const video = document.createElement('video')
    call.on('stream', userVideoStream=>{
        addVideoStream(video,userVideoStream)
    })

    peers[userId] = call;

    call.on('close', ()=>{
        video.remove();
    })
}

const addVideoStream = (video, stream)=>{
    video.srcObject = stream;
    video.addEventListener('loadedmetadata', ()=>{
        video.play()
    })

    videoGrid.append(video);
}