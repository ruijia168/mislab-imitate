



let img = document.getElementsByTagName('img');
let textBox = document.getElementsByClassName('text-box')
let clickAmount = document.getElementsByClassName('click-amount');
let a = document.getElementsByTagName('a');
let idCode = new Array();
let songName = document.getElementsByClassName('song-name');
let singer = document.getElementsByClassName('singer');
let ablumn = document.getElementsByClassName('ablumn');
let idCodeWord = new Array();
let wordcontainer = document.getElementsByClassName('song-word-box')[0];
//1.创建对象
const xhr = new XMLHttpRequest();
//2.初始化 设置请求方法和url
xhr.open('get', 'http://music.eleuu.com/personalized?limit=12');
//3.发送
xhr.send()
// 4.事件绑定 处理服务端返回的结果
// on when 当...时候
// readystate 是 xhr 对象中的属性, 表示状态0 1 2 3 4
// change 改变
xhr.onreadystatechange = function () {

    if (xhr.readyState === 4) {
        //判断响应状态码 200 404 403 401 500
        // 2xx 成功
        if (xhr.status >= 200 && xhr.status < 305) {

            const res = JSON.parse(xhr.responseText);

            console.log(res)

            // img.src = res.result[0].picUrl;

            // textBox.innerHTML=res.result[0].name;

            // clickAmount.innerHTML=res.result[0].playCount;


            for (let i = 0; i < 12; i++) {
                img[i].src = res.result[i].picUrl

                textBox[i].innerHTML = res.result[i].name;

                clickAmount[i].innerHTML = res.result[i].playCount;

                idCode[i] = res.result[i].id;
            }

        } else {
            alert('网络出现问题...')
        }
    }
}

for (let i = 0; i < 12; i++) {
    a[i].onclick = function () {

        let num = idCode[i]

        const xhr2 = new XMLHttpRequest();

        xhr2.open('get', 'http://music.eleuu.com/playlist/detail?id=' + idCode[i]);

        xhr2.send();

        xhr2.onreadystatechange = function () {
            if (xhr2.readyState === 4) {


                if (xhr2.status >= 200 && xhr2.status < 300) {

                    const res2 = JSON.parse(xhr2.responseText);

                    console.log(res2);
                    for (let j = 0; j < 10; j++) {

                        songName[j + 1].innerHTML = res2.playlist.tracks[j].name;

                        ablumn[j + 1].innerHTML = '《' + res2.playlist.tracks[j].al.name + '》';
                        if (res2.playlist.tracks[j].ar.length > 1)
                            singer[j + 1].innerHTML = res2.playlist.tracks[j].ar[0].name + '<br>' + res2.playlist.tracks[j].ar[1].name;
                        else {
                            singer[j + 1].innerHTML = res2.playlist.tracks[j].ar[0].name
                        }
                        idCodeWord[j] = res2.playlist.tracks[j].id;

                        //获取歌词
                        songName[j + 1].onclick = function () {

                            const xhr3 = new XMLHttpRequest();

                            xhr3.open('get', 'http://music.eleuu.com/lyric?id=' + idCodeWord[j]);

                            xhr3.send();

                            xhr3.onreadystatechange = function () {
                                if (xhr3.readyState === 4) {
                                    if (xhr3.status >= 200 && xhr3.status < 300) {

                                        const res3 = JSON.parse(xhr3.responseText);

                                        console.log(res3);

                                        let lyric = res3.lrc.lyric;

                                        newLyric = lyric.replace(/\[.*?\]/g, '<br>');

                                        wordcontainer.innerHTML = newLyric;
                                    } else {
                                        alert('网络在最后一步出现了问题');
                                    }
                                }
                            }
                        }
                    }



                } else {
                    alert('网络错误');
                }
            }
        }
    }


}






