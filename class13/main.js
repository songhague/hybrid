function keylog(e)
  {
    console.log(e);
  }

window.onkeydown = keylog;//윈도우가 키가 눌렸을때 키를 아록 있다.

  //window.onkeydown = (e)=>{console.log(e);}; 위에껄 줄인거
  (function(){
    document.addEventListener('keydown',function(e){
        let key = e.keyCode;
        let sungtt = document.getElementById('sungtt');
        let n = document.getElementById('sungtt').style.right=`${x}`;
        console.log(key);
        if(key == 37){
            
        }if(key == 38){
            
        }if(key == 39){
           
        }if(key ==40){
            
        }
    });
}());