
// 有了Promise对象，就可以将异步操作以同步的操作的流程表达出来，避免了层层嵌套的回调函数。

        let img = document.getElementsByTagName('img');
        let textBox = document.getElementsByClassName('text-box')
        let clickAmount = document.getElementsByClassName('click-amount');
        let a = document.getElementsByTagName('a');
        let idCode = new Array();
        let songName = document.getElementsByClassName('song-name');
        let singer  = document.getElementsByClassName('singer');
        let ablumn =document.getElementsByClassName('ablumn');
        let idCodeWord = new Array();
        let wordcontainer = document.getElementsByClassName('song-word-box')[0];
const sendAjax =(url) => {
    return new Promise((resolve,reject) => {

             const xhr = new XMLHttpRequest();
           
            xhr.open('get',url);
         
            xhr.send()
             xhr.onreadystatechange = function(){

                if(xhr.readyState === 4){
                 
                    if(xhr.status >= 200 && xhr.status<305){
                    
                        const res = JSON.parse(xhr.responseText);
                        
                        resolve(res)
                
                    }else{
                    reject(xhr.status)
                    }
                }
            }})}
           
           
    sendAjax('http://music.eleuu.com/personalized?limit=12').then(value=>{
        for(let i=0 ;i<12 ;i++){
                        console.log(value)

                        img[i].src = value.result[i].picUrl

                        textBox[i].innerHTML =value.result[i].name;

                        clickAmount[i].innerHTML =value.result[i].playCount;

                        idCode[i] = value.result[i].id; 
                }
    },reason=>{
        console.log(reason)
    })

    for(let i =0 ;i<12 ;i++){

        a[i].onclick =()=>{
            
            sendAjax('http://music.eleuu.com/playlist/detail?id='+idCode[i]).then(value=>{
                
                for(let j =0 ;j<10 ;j++){

            songName[j+1].innerHTML = value.playlist.tracks[j].name;

            ablumn[j+1].innerHTML = '《'+value.playlist.tracks[j].al.name+'》';
            if( value.playlist.tracks[j].ar.length>1)
            singer[j+1].innerHTML = value.playlist.tracks[j].ar[0].name+'<br>'+value.playlist.tracks[j].ar[1].name;
            else{
                singer[j+1].innerHTML = value.playlist.tracks[j].ar[0].name
            }
            idCodeWord[j] = value.playlist.tracks[j].id;

            //获取歌词
            songName[j+1].onclick = function(){

                sendAjax('http://music.eleuu.com/lyric?id='+idCodeWord[j]).then(value=>{
                    let lyric =value.lrc.lyric;

            newLyric = lyric.replace(/\[.*?\]/g,'<br>');

            wordcontainer.innerHTML = newLyric;
                },reason=>{
                    console.log(reason)
                })
            
            }
            }
                                    
                                },reason=>{
                                    console.log(reason)
                                })


                            }
                        }