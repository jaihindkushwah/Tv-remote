// var c=1;
// function show(){
//     var sh=document.getElementById('dot');
//     var sh1=document.getElementById('dot1');
//     if(c%2===1){
//         sh.style.backgroundColor='red';
//         sh1.style.backgroundColor='red';
//         c=1;
//     }
//     else{
//         sh.style.backgroundColor='';
//         sh1.style.backgroundColor='';
//     }
    
//     c+=1;
// }
var c=1;
function show(){
    var tv=document.getElementById('tv2');
    if(c%2===1){
        tv.innerHTML='<video paused id="myVideo" preload="none" autoplay controls><source src="videos.mp4" type="video/mp4"></video>';
        c=1;
    }
    else{
        tv.innerHTML='';
    }
    c=c+1;
}
// button play pause
function playPause(){
    var video = document.getElementById('myVideo');
    if(video===null){
        return;
    }
    if (video.paused) {
        video.play(); 
        // $('.pause-btn').show();
        // $('.play-btn').hide();
    } else {
        video.pause(); 
        // $('.play-btn').show();
        // $('.pause-btn').hide();
    }
}
// forword and backward
function backward(){
    skip(-10);
}
function forward(){
    skip(10);
}
function skip(value) {
    var video = document.getElementById("myVideo");
    if(video===null){
        return;
    }
    if(video.currentTime<0){
        video.currentTime=0;
        return;
    }
    video.currentTime += value;
}  
// for sound increase
var updowncount=25;

function up(){
    var vid = document.getElementById("myVideo");
    if(vid===null){
        return;
    }
    if(updowncount < 100){
        updowncount+=5;
        vid.volume = updowncount/100;
        
    }
}
// for sound decrease
function down(){
    var vid = document.getElementById("myVideo");
    if(vid===null){
        return;
    }
    if(updowncount>0){
        updowncount-=5;
        vid.volume = updowncount/100;
    }
}

// for mute button
var mutecount=0;
function mute(){
    var vid = document.getElementById("myVideo");
    if(vid===null){
        return;
    }
    if(updowncount===0){
        vid.volume =.5;
        updowncount=50;
    }
    else if(mutecount%2===0){
        vid.volume = 0;
        mutecount=1;
    }else{
        vid.volume = updowncount/100;
        mutecount=0;}
}

// for Mute button
// $('.mute').click(function(){
//     if( $("#myVideo").prop('muted') ) {
//           $("#myVideo").prop('muted',false);
//       // or toggle class, style it with a volume icon sprite, change background-position
//     } else {
//       $("#myVideo").prop('muted',true);
//     }
// });
// indicator blinking
$('button').click(function() {
    var $elem = $('#dot'); 
    var oldBG = $elem.css('background-color');
    $elem.css('backgroundColor', '#FF0000');
    setTimeout(function() {
        $elem.css('background-color', oldBG);
    },100);
    var $elem1 = $('#dot1'); 
        var oldBG1 = $elem1.css('background-color');
        $elem1.css('backgroundColor', '#FF0000');
    setTimeout(function() {
        $elem1.css('background-color', oldBG1);
},100);
});

