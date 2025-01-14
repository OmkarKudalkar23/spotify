console.log("Gandi");
let audioElement = new Audio('songs/2.mp3');
let masterKeyPlay = document.getElementById("masterkeyPlay");
let gif = document.getElementById('gif');
let index=0;
let songItem=Array.from(document.querySelectorAll(".songitem"));
let songname = document.querySelector(".songname");
let progressbar = document.getElementById("progressbar");
let songs =[
    {songName:"Warriyo-Mortals[NCS - Release]", filePath:"1.mp3", coverPath:"1.jpg"},
    {songName:"Cielo Hyma-Huma", filePath:"2.mp3", coverPath:"2.jpg"},
    {songName:"DEAF KEV - invincible", filePath:"3.mp3", coverPath:"3.jpg"},
    {songName:"Different Heaven & EH!DE - My Heart", filePath:"4.mp3", coverPath:"4.jpg"},
    {songName:"Brodgya Funk", filePath:"5.mp3", coverPath:"5.jpg"},
    {songName:"Eternllex-SLAY!", filePath:"6.mp3", coverPath:"6.jpg"},
    {songName:"DarkKnight-Leo", filePath:"7.mp3", coverPath:"7.jpg"},
    {songName:"Versace-Sia", filePath:"8.mp3", coverPath:"8.jpg"},
    {songName:"Murder in the sky-Sam Brandon", filePath:"9.mp3", coverPath:"9.jpg"}
]
songItem.forEach((element,i)=>{
        console.log(element,i);
        element.getElementsByTagName("img")[0].src = songs[i].coverPath;
        element.getElementsByClassName("songname")[0].innerText = songs[i].songName;

})
masterKeyPlay.addEventListener("click",()=>{

    if(audioElement.paused || audioElement.currentTime<=0)
    {
        masterKeyPlay.classList.remove("fa-circle-play");
        masterKeyPlay.classList.add("fa-circle-pause");
        

        audioElement.play();
        gif.style.opacity="1";
    }
    else{
        masterKeyPlay.classList.remove("fa-circle-pause");
        masterKeyPlay.classList.add("fa-circle-play");
        audioElement.pause();
        gif.style.opacity="0";
    }
})
audioElement.addEventListener("timeupdate",()=>{

    console.log("Helo");
    let progress= parseInt((audioElement.currentTime)/(audioElement.duration)*100);
     console.log(progress);
     progressbar.value=progress;
})
progressbar.addEventListener("change",()=>{
     audioElement.currentTime=(progressbar.value*audioElement.duration)/100;

})
const makeAllPlays =() =>{ 
    Array.from(document.querySelectorAll(".songitemplay")).forEach((element)=>{
        element.classList.remove("fa-circle-pause");
        element.classList.add("fa-circle-play");

    })}
Array.from(document.querySelectorAll(".songitemplay")).forEach((element)=>{
      element.addEventListener("click",(e)=>{
        index = parseInt(e.target.id);
        gif.style.opacity="0";
        console.log(e);
        makeAllPlays();
        e.target.classList.remove("fa-circle-play");
        e.target.classList.add("fa-circle-pause");
        
        audioElement.currentTime=0;
        audioElement.src=`${index+1}.mp3`;
        audioElement.play();
        masterKeyPlay.classList.remove("fa-circle-play");
        masterKeyPlay.classList.add("fa-circle-pause");
        gif.style.opacity="1";
        document.querySelector(".songinfo").innerText=songs[index].songName;
       
      })
})
document.querySelector("#previous").addEventListener(("click"),()=>{
    if(index<=0)
    {
        index=0;
    }
    else{
        index--;
    }
    audioElement.currentTime=0;
    audioElement.src=`${index+1}.mp3`;
    audioElement.play();
    masterKeyPlay.classList.remove("fa-circle-play");
    masterKeyPlay.classList.add("fa-circle-pause");
    document.querySelector(".songinfo").innerText=songs[index].songName;
       
})
document.querySelector("#next").addEventListener(("click"),()=>{
    if(index>=9)
    {
        index=0;
    }
    else{
        index++;
    }
    audioElement.currentTime=0;
    audioElement.src=`${index+1}.mp3`;
    audioElement.play();
    masterKeyPlay.classList.remove("fa-circle-play");
    masterKeyPlay.classList.add("fa-circle-pause");
    document.querySelector(".songinfo").innerText=songs[index].songName;
       
})
