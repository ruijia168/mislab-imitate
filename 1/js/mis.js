
        window.onload = function(){
            //控制弹幕速度 随机数组
            let speedArr = new Array(20);

            var h = 0 ;
            

            for(let i = 0 ;i<20;i++){
                speedArr[i]= Math.random();

                speedArr[i]= speedArr[i]*100;

                if(speedArr[i]>=20){
                    speedArr[i] = speedArr[i]%10 + 10;

                    }else if(speedArr[i]<10){

                        speedArr[i] = speedArr[i] + 10
                    }

                    console.log(speedArr[i])

                document.getElementsByClassName('member-middle-right-toLeft')[0].children[i].style.animationDuration = speedArr[i]+'s';

                document.getElementsByClassName('member-middle-right-toRight')[0].children[i].style.animationDuration = speedArr[i]+'s';
            }
           
    
            //学员系统
            let studentSystem = document.getElementById('students-system');
            studentSystem.onclick=function(){
                alert('尚未开发，敬请期待');
            }
            let allA = document.getElementsByClassName('a');
            let index = 0;
            let num = 0;
            let lunbolist = document.getElementsByClassName('lunbolist');
            let li = document.getElementsByClassName('li');
            for(let i =0 ;i<allA.length;i++)
            {
                
               var clickclick = allA[i].onclick = function(){
                   
                h = i ;

                   if(i==0){
                       li[i].style.opacity = '1';
                       li[1].style.opacity = '0';
                       li[2].style.opacity = '0';
                       li[3].style.opacity = '0';
                       li[4].style.opacity = '0';
                       allA[i].style.backgroundColor = 'rgb(80,80,80)';
                       allA[1].style.backgroundColor = '#d9d9d9';
                       allA[2].style.backgroundColor = '#d9d9d9';
                       allA[3].style.backgroundColor = '#d9d9d9';
                       allA[4].style.backgroundColor = '#d9d9d9';
                       allA[i].style.width = '40px';
                       allA[1].style.width ='30PX';
                       allA[2].style.width ='30PX';
                       allA[3].style.width ='30PX';
                       allA[4].style.width ='30PX';
                   }else if(i==1){
                    li[i].style.opacity = '1';
                       li[i].style.marginLeft ='-100%';
                       li[0].style.opacity = '0';
                       li[2].style.opacity = '0';
                       li[3].style.opacity = '0';
                       li[4].style.opacity = '0';
                       allA[i].style.backgroundColor = 'rgb(80,80,80)';
                       allA[0].style.backgroundColor = '#d9d9d9';
                       allA[2].style.backgroundColor = '#d9d9d9';
                       allA[3].style.backgroundColor = '#d9d9d9';
                       allA[4].style.backgroundColor = '#d9d9d9';
                       allA[i].style.width = '40px';
                       allA[0].style.width ='30PX';
                       allA[2].style.width ='30PX';
                       allA[3].style.width ='30PX';
                       allA[4].style.width ='30PX';
                   }else if(i==2){
                    li[i].style.opacity = '1';
                       li[i].style.marginLeft ='-200%';
                       li[0].style.opacity = '0';
                       li[1].style.opacity = '0';
                       li[3].style.opacity = '0';
                       li[4].style.opacity = '0';
                       allA[i].style.backgroundColor = 'rgb(80,80,80)';
                       allA[0].style.backgroundColor = '#d9d9d9';
                       allA[1].style.backgroundColor = '#d9d9d9';
                       allA[3].style.backgroundColor = '#d9d9d9';
                       allA[4].style.backgroundColor = '#d9d9d9';
                       allA[i].style.width = '40px';
                       allA[0].style.width ='30PX';
                       allA[1].style.width ='30PX';
                       allA[3].style.width ='30PX';
                       allA[4].style.width ='30PX';
                   }else if(i==3){
                    li[i].style.opacity = '1';
                       li[i].style.marginLeft ='-300%';
                       li[0].style.opacity = '0';
                       li[1].style.opacity = '0';
                       li[2].style.opacity = '0';
                       li[4].style.opacity = '0';
                       allA[i].style.backgroundColor = 'rgb(80,80,80)';
                       allA[0].style.backgroundColor = '#d9d9d9';
                       allA[2].style.backgroundColor = '#d9d9d9';
                       allA[1].style.backgroundColor = '#d9d9d9';
                       allA[4].style.backgroundColor = '#d9d9d9';
                       allA[i].style.width = '40px';
                       allA[0].style.width ='30PX';
                       allA[2].style.width ='30PX';
                       allA[1].style.width ='30PX';
                       allA[4].style.width ='30PX';
                }else if(i==4){
                    li[i].style.opacity = '1';
                       li[i].style.marginLeft ='-400%';
                       li[0].style.opacity = '0';
                       li[1].style.opacity = '0';
                       li[2].style.opacity = '0';
                       li[3].style.opacity = '0';  
                       allA[i].style.backgroundColor = 'rgb(80,80,80)';
                       allA[0].style.backgroundColor = '#d9d9d9';
                       allA[2].style.backgroundColor = '#d9d9d9';
                       allA[3].style.backgroundColor = '#d9d9d9';
                       allA[1].style.backgroundColor = '#d9d9d9';
                       allA[i].style.width = '40px';
                       allA[0].style.width ='30PX';
                       allA[2].style.width ='30PX';
                       allA[3].style.width ='30PX';
                       allA[1].style.width ='30PX';            
                }
                  
            }

        }
         //自动播放轮播
         
         // 两秒后模拟点击
         let timer3 = setInterval(settime=function() {
             // IE
             if(document.all) {
                 document.getElementById("clickMe").click();
             }
             // 其它浏览器
             else {
                 var e = document.createEvent("MouseEvents");
     
                 e.initEvent("click", true, true);
     
                let clickA = document.getElementsByClassName('a');
     
             //    console.log(h)
     
                if(clickA[h].dispatchEvent(e)){
     
                  h++;
                 
                 if(h==5){
                     
                     h=0
     
                 }
                 
             }}
         }, 2000);
         
         let falg = true ;
         //鼠标在轮播图上取消默认行为
         document.getElementsByClassName('lunbokuaianzhuo')[0].onmousemove = function(){
            console.log('不OK')
             clearInterval(timer3)
            falg=true  ;
         }
           //鼠标移开，继续轮播图
           document.getElementsByClassName('xuanxian')[0].onmouseout = function(){
            
            if(falg==true ){
                timer3 =setInterval(settime, 2000);
                falg=false;
                console.log('成功')
            }
           
            
           
        }

      //固定定位箭头
    var backToTopIcon = document.getElementsByClassName('back-to-top-icon')[0];

    var timer = null;
    
    var isTop = true;
    //获取页面可视区高度
    var clientHeight = document.documentElement.clientHeight;
    //滚动条滚动时触发
    // window.onscroll = function() {
    //   //显示回到顶部按钮
    //   // var osTop = document.documentElement.scrollTop || document.body.scrollTop;
    //   // if (osTop >= clientHeight) {
    //   // 	btn.style.display = "block";
    //   // } else {
    //   // 	btn.style.display = "none";
    //   // };
    //   //回到顶部过程中用户滚动滚动条，停止定时器
        //向上箭头
     
    // };
    
  
    //首页箭头
    let headerBottom =  document.getElementsByClassName('headerbottom')[0];
    headerBottom.onclick =function(){

         timer2 = setInterval(function(){

            

            var ossTop2 = document.documentElement.scrollTop || document.body.scrollTop;

            let isspeed2 = 6 ;
            
            document.documentElement.scrollTop = ossTop2 + isspeed2 ;

            //到第二页
            limittop = 50 + 'px' ;

            if(ossTop2 >800){
                
                clearInterval(timer2)
            };
            // console.log(ossTop2)
        },1)
    }
    window.onscroll = function() {
        //向上箭头
        if (!isTop) {
        clearInterval(timer);
      };
      isTop = false;
      backToTopIcon.onclick = function() {
      //设置定时器
      timer = setInterval(function() {
        //获取滚动条距离顶部高度
        var osTop = document.documentElement.scrollTop || document.body.scrollTop;
        var ispeed = -30;
        document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed;
        //到达顶部，清除定时器
        if (osTop == 0) {
          clearInterval(timer);
        };
         isTop = true; 
      }, 1);
    };
    let osTop3 = document.documentElement.scrollTop || document.body.scrollTop;
    let leftBigBox = document.getElementById('leftbigbox');
    let leftBigBox2 = document.getElementById('leftbigbox2');
    let osTop4 = document.documentElement.scrollTop || document.body.scrollTop;
    if(osTop3 - 550 > 0){
           
        document.getElementById('leftbigbox').style.display = 'block' ;
        document.getElementById('leftbigbox2').style.display = 'none' ;
        document.getElementById('rightbigbox').style.display = 'block' ;
        document.getElementById('rightbigbox2').style.display = 'none' ;
        document.getElementById('back-to-top-icon').style.display = 'block' ;
        
    }
    if(osTop3 == 0) {document.getElementById('back-to-top-icon').style.display = 'none' ;}
    if(osTop4 - 1800 > 0){

document.getElementById('mainbody').style.display = 'block' ;
    document.getElementById('mainbody2').style.display = 'none' ;
}
  }
  
        }
        
   