console.log("Welcome to Spotify")

//Initialize the variable
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');

let gif = document.getElementById('gif');

let songItems = Array.from(document.getElementsByClassName('songItem'));


let songs = [
    {songName: "Kahte hai khuda", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Sayad mp3 song Love Aaj Kal", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Kesariya mp3 song ", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Tu hi hai aashiqui mp3 song ", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Jeene de naa mp3 song", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Pal pal dil ke pass mp3 song", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Chand ke paar chalo mp3 song", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Divine", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Raftaar", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    // {songName: "Kaam Bhari", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"},

]

songItems.forEach((element, i)=>{
    console.log(element, i)
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByTagName('songName')[0].innerText = songs[i].songName;
   

})

// audioElement.play();

//Handle play/Pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
    
})
audioElement.addEventListener('timeupdate',()=>{
    //update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})