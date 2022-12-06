// div 게임 판 배열
var cellArr = document.getElementsByClassName("game");
// 숫자 배열
var numArr = Array(0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0);

// 상하좌우 이동
function keylog(e)
  {
    console.log(e);
  }

// 게임 초기화
function init(){
    var ra = parseInt(Math.random()*3);
    for(var i=0; i<16; i++){
    	cellArr[i].innerHTML="";
    	numArr[i] = 0;
    }
    if(ra==0)
    {
        four();
    } 
    if(ra==1)
    {
        randomNum();
    } 
    if(ra==2)
    {
        randomNum();
        four();
    } 
}

// 게임 시작
function start(){
    document.getElementById("app").style.display = 'block';
    document.getElementById("start").style.display = 'none';
    document.getElementById("endd").style.display = 'none';
    document.getElementById("clear").style.display = 'none';
    document.getElementById("score").innerHTML = "0";
	init();
}

// 숫자 2 랜덤한곳 생성
function randomNum(){
    var done=false;
    while(done==false){
        var num = Math.floor(Math.random()*16);
        if(numArr[num] == 0){
        	numArr[num] = getNewNum();
            done=true;
        }
    }
    setNum();
}

// 숫자 4랜덤한곳 생성
function four(){
    var done=false;
    while(done==false){
        var num = Math.floor(Math.random()*16);
        if(numArr[num] == 0){
        	numArr[num] = fourr();
            done=true;
        }
    }
    setNum();
}

// 숫자 생성 (4)
function fourr(){
    return 4;
}

// 숫자 생성 (2)
function getNewNum(){
    return 2;
}

// div에 숫자 반영
function setNum(){
    for(var i=0; i<16; i++){
		cellArr[i].innerHTML = numArr[i] != 0 ? numArr[i] : ""; 
	}
}

// 오른쪽 이동
function keyArrowRight(){
    var isMoved=false;
    var access = false;
    var k;
    for(var i=14; i>0; i-=4){
        access = false;
        for(var j=i; j>=i-2; j--){
            if(numArr[j] != 0){
                k=j;
                while(k<(i+1) && (numArr[k+1]== numArr[k] || numArr[k+1] == 0) ){
                    if( numArr[k+1]==numArr[k] && access==false ){
                    	numArr[k+1] = numArr[k+1] + numArr[k];
                        numArr[k] = 0; 
                        isMoved=true;
                        access=true;
                    } else if( numArr[k+1]==numArr[k] && access==true ){
                    	access==false;
                    } else if(numArr[k+1] == 0){
                    	numArr[k+1] = numArr[k];
                        numArr[k] = 0; 
                        isMoved=true;
                    }
                    k++;
                }
            }
        }
        
    }
    score.innerHTML++;
    setNum();
    if(isMoved){
    	randomNum();
    } else{check();}
}

//왼쪽으로 이동
function keyArrowLeft(){
    var isMoved=false;
    var access = false;
    var k;
    for(var i=13; i>0; i-=4){
        access = false;
        for(var j=i; j<=i+2; j++){
            if(numArr[j] != 0){
                k=j;
                while(k>(i-(i%4)) && (numArr[k-1]==numArr[k] || numArr[k-1] == 0)){
                    if( numArr[k-1]== numArr[k] && access==false ){
                    	numArr[k-1] = numArr[k-1] + numArr[k];
                        numArr[k] = 0;
                        isMoved=true;
                        access=true;
                    }
                    else if( numArr[k-1] == numArr[k] && access==true ){
                    	access==false;
                    }
                    else if(numArr[k-1] ==  0 ){
                    	numArr[k-1] = numArr[k];
                        numArr[k] = 0;
                        isMoved=true;
                    }
                    k-=1;
                }
            }
        }
        
    }
    score.innerHTML++;
    setNum();
    if(isMoved){
    	randomNum();
    } else{check();}
}

//위로 이동
function keyArrowUp(){
    var isMoved=false;
    var access = false;
    var k;
    for(var i=7; i>3; i-=1){
        access = false;
        for(var j=i; j<(i+9); j+=4){
            if(numArr[j] != 0){
                k=j;
                while(k>=i && (numArr[k-4] == numArr[k] || numArr[k-4] == 0)){
                    if( numArr[k-4] == numArr[k] && access==false ){
                        numArr[k-4]=numArr[k-4]+numArr[k];
                        numArr[k] = 0;
                        isMoved=true;
                        access=true;
                    }
                    else if( numArr[k-4] == numArr[k] && access==true ){
                    	access==false;
                    }
                    else if(numArr[k-4] == 0){
                    	numArr[k-4]=numArr[k];
                        numArr[k] = 0; 
                        isMoved=true;
                    }
                    k-=4;
                }
            }
        }
    }
    score.innerHTML++;
    setNum();
    if(isMoved){
    	randomNum();
    } else{check();}
}

//아래로 이동
function keyArrowDown(){
    var isMoved=false;
    var access = false;
    var k;
    for(var i=11; i>7; i-=1){
        access = false;
        for(var j=i; j>=0; j=j-4){
            if(numArr[j] != 0){
                k=j;
                while(k<12 && (numArr[k+4]==numArr[k] || numArr[k+4] == 0)){
                    if( numArr[k+4] == numArr[k] && access==false ){
                    	numArr[k+4] = numArr[k+4]+numArr[k];
                        numArr[k] = 0;
                        isMoved=true;
                        access=true;
  
                    } else if( numArr[k+4] == numArr[k] && access==true ){
                    	access==false;
                    } else if(numArr[k+4] == 0){
                    	numArr[k+4] = numArr[k];
                        numArr[k] = 0; 
                        isMoved=true;
                    }
                    k+=4;
                }
            }
        }
    }
    score.innerHTML++;
    setNum();
    if(isMoved){
    	randomNum();
    } else{check();}
}

function keylog(e){
    console.log(e.key);
    switch(e.key){
        case 'ArrowRight':
            keyArrowRight();
            break;
        case 'ArrowLeft':
            keyArrowLeft();
            break;
        case 'ArrowUp':
            keyArrowUp();
            break;
        case 'ArrowDown':
            keyArrowDown();
            break;
            case 'Space':
            space();
            break;
        default:
            break;
    }
}
window.onkeydown = keylog;//윈도우가 키가 눌렸을때 키를 아록 있다.
function space()
{
    document.getElementById("endd").style.display = 'block';
}
function end() {
	document.getElementById("endd").style.display = 'block';
	document.getElementById("app").style.display = 'none';
	document.getElementById("score").innerHTML = "0";
}

// 게임 종료 체크
function check(){
	var x = false;
	for(var i =0 ;i<16;i++){
        switch(i){
            case (0):
                if(numArr[0]==numArr[1]||numArr[0]==numArr[4]){
                    x=true;    
                };
                break;
            case (1):
                if(numArr[1]==numArr[0]||numArr[1]==numArr[2]||numArr[1]==numArr[5]){
                    x=true;    
                };
                break;
            case (2):
                if(numArr[2]==numArr[1]||numArr[2]==numArr[3]||numArr[2]==numArr[6]){
                    x=true; 
                };
                break;
            case (3):
                if(numArr[3]==numArr[2]||numArr[3]==numArr[7]){
                    x=true; 
                };
                break;
            case (4):
                if(numArr[4]==numArr[0]||numArr[4]==numArr[5]||numArr[4]==numArr[8]){
                  x=true;   
                };
                break;
            case (5):
                if(numArr[5]==numArr[1]||numArr[5]==numArr[4]||numArr[5]==numArr[6]||numArr[5]==numArr[9]){
                    x=true; 
                };
                break;
            case (6):
                if(numArr[6]==numArr[2]||numArr[6]==numArr[5]||numArr[6]==numArr[7]||numArr[6]==numArr[10]){
                    x=true; 
                };
                break;
            case (7):
                if(numArr[7]==numArr[3]||numArr[7]==numArr[6]||numArr[7]==numArr[11]){
                    x=true; 
                };
                break;
            case (8):
                if(numArr[8]==numArr[4]||numArr[8]==numArr[9]||numArr[8]==numArr[12]){
                    x=true; 
                };
                break;
            case (9):
                if(numArr[9]==numArr[5]||numArr[9]==numArr[8]||numArr[9]==numArr[10]||numArr[9]==numArr[13]){
                    x=true; 
                };
                break;
            case (10):
                if(numArr[10]==numArr[6]||numArr[10]==numArr[9]||numArr[10]==numArr[11]||numArr[10]==numArr[14]){
                    x=true; 
                };
                break;
            case (11):
                if(numArr[11]==numArr[7]||numArr[11]==numArr[10]||numArr[11]==numArr[15]){
                    x=true; 
                };
                break;
            case (12):
                if(numArr[12]==numArr[8]||numArr[12]==numArr[13]){
                    x=true; 
                };
                break;
            case (13):
                if(numArr[13]==numArr[9]||numArr[13]==numArr[12]||numArr[13]==numArr[14]){
                    x=true; 
                };
                break;
            case (14):
                if(numArr[14]==numArr[10]||numArr[14]==numArr[13]||numArr[14]==numArr[15]){
                    x=true; 
                };
                break;
            case (15):
                if(numArr[15]==numArr[11]||numArr[15]==numArr[14]){
                    x=true; 
                };
                break;
        }
        
        if(numArr[i] == 0){
        	x=true; 
            break;
        }
	}
    if(!x){
    	end();
   	}
}