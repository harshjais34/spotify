console.log("welcome to spotify");
let songIndex=0;
let audioElement= new Audio('songs/1.mp3');
let masterplayer=document.getElementById('masterplayer');
let  myProgressBar=document.getElementById('myProgressBar');
let songitems = Array.from(document.getElementsByClassName('songitems'));
let mastersong=document.getElementById('mastersong');
let songs=[
{ songName:"Let me  love you" , filePath:"songs/1.mp3",coverPath:"cover/1.jpg" },
{ songName:"whenever whenever" , filePath:"songs/2.mp3",coverPath:"javascript/cover/2.jpg" },
 
{ songName:"deva deva" , filePath:"songs/3.mp3",coverPath:"javascript/cover/3.jpg" },
{ songName:"ishq wala love" , filePath:"songs/4.mp3",coverPath:"javascript/cover/4.jpg" },
{ songName:"disco " , filePath:"songs/5.mp3",coverPath:"javascript/cover/5.jpg" },
{ songName:"kal ho naa ho" , filePath:"songs/6.mp3",coverPath:"javascript/cover/6.jpg" },
]
songitems.forEach((element ,i )=>{
    element.getElementsByTagName("img")[0].scr= songs[i].coverPath;
    element.getElementsByClassName("SongName")[0].innerText = songs[i].songName;

})

// listen to events
//handle play /pause click
masterplayer.addEventListener('click',()=>{
if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplayer.classList.remove('fa-play-circle');
        masterplayer.classList.add('fa-pause-circle');
      
    }
    else
    {
        audioElement.pause();
        masterplayer.classList.remove('fa-pause-circle');
        masterplayer.classList.add('fa-play-circle');
    }
   
})
audioElement.addEventListener('timeupdate',()=>{
    
    // update  seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    
    myProgressBar.value=progress;
    })
    myProgressBar.addEventListener('change',()=>{

        audioElement.currentTime = myProgressBar.value * audioElement.duration/100;

    })
    const makeAllPlays=()=>{
        Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
            element.classList.remove('fa-pause-circle');
            element.classList.add('fa-play-circle');
    
})
}
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.addEventListener('click',(e)=>{
      makeAllPlays();
      songIndex = parseInt(e.target.id);
      e.target.classList.remove('fa-play-circle');
      e.target.classList.add('fa-pause-circle');
      mastersong.innerText = songs[songIndex].songName;
      audioElement.src = `songs/${songIndex + 1}.mp3`;
      audioElement.currentTime=0;
      audioElement.play();
      masterplayer.classList.remove('fa-play-circle'); 
      masterplayer.classList.add('fa-pause-circle');  
        })
    })
    // next song 
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9)
    {
        songIndex=0
        }

    else{
        songIndex +=1;
    }
    audioElement.src = `songs/ ${songIndex+ 1}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    mastersong.innerText = songs[songIndex].songName;
   masterplayer.classList.remove('fa-play-circle');
   masterplayer.classList.add('fa-pause-circle')
        }) 
    // pevious song move 
        document.getElementById('previous').addEventListener('click',()=>{
            if(songIndex<=0)
            {
                songIndex=0;
            }
            else{
                songIndex-=1;
            }
            audioElement.src = `songs/ ${songIndex+1}.mp3`;
            audioElement.play();
            audioElement.currentTime = 0;
           
         
           masterplayer.innerText = songs[songIndex].songName;
            masterplayer.classList.remove('fa-play-circle'); 
            masterplayer.classList.add('fa-play-pause'); 
            
                })
        
    
    