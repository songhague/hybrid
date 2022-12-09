// div 게임 판 배열
var cellArr = document.getElementsByClassName("game");
// 숫자 배열
var numArr = Array(0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0);

// 상하좌우 이동
function keylog(e)
  {
    console.log(e);
  }

  // 게임 시작
function start(){
    document.getElementById("app").style.display = 'block';//시작 클릭시 게임 판 등장
    document.getElementById("start").style.display = 'none';//시작 클릭시 처음 화면 안보이게 하기
    document.getElementById("endd").style.display = 'none';//시작 클릭시 gameover 화면 안보이게 하기
    document.getElementById("clear").style.display = 'none';//시작 클릭시 gameclear 화면 안보이게 하기
    document.getElementById("score").innerHTML = "0";//시작 클릭시 점수 0점
	init();//시작 클릭시 숫자 생성
}

// 게임 초기화
function init(){
    var ra = parseInt(Math.random()*3);//랜덤 3개를 설정
    for(var i=0; i<16; i++){
    	cellArr[i ].innerHTML="";
    	numArr[i] = 0;
    }
    if(ra==0)//0이 나왔을때 숫자 4
    {
        four();
    } 
    if(ra==1)//1이 나왔을때 숫자 2
    {
        randomNum();
    } 
    if(ra==2)//2이 나왔을때 숫자 2, 숫자 4
    {
        randomNum();
        four();
    } 
}

// 숫자 2 랜덤한곳 생성
function randomNum(){
    var done=false;
    while(done==false){
        var num = Math.floor(Math.random()*16);//랜덤한 16곳중
        if(numArr[num] == 0){
        	numArr[num] = getNewNum();//숫자2 생성
            done=true;
        }
    }
    setNum();
}

// 숫자 4랜덤한곳 생성
function four(){
    var done=false;
    while(done==false){
        var num = Math.floor(Math.random()*16);//랜덤한 16곳중
        if(numArr[num] == 0){
        	numArr[num] = fourr();//숫자4 생성
            done=true;
        }
    }
    setNum();//숫자 반영
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
        //배열의 i번째 값이 0이 아니면 배열을 빈칸으로함 game에 값을 추가
        setCellStyle(cellArr[i]); //game에 색을 넣음
	}
}
// 오른쪽 이동
function keyArrowRight(){
    var isMoved=false;//움직임을 감지
    var access = false;//한번에 합치는걸 막는다.
    var k;//배열의 값을 확인하는 코드
    for(var i=14; i>0; i-=4){
        access = false;
        for(var j=i; j>=i-2; j--){
            if(numArr[j] != 0){//배열의 j번째 값이 0이 아니면 실행
                k=j;
                while(k<(i+1) && (numArr[k+1]== numArr[k] || numArr[k+1] == 0) ){//오른쪽으로 이동 할때 한칸만 움직이는지 끝까지 움직이는지 확인
                    if( numArr[k+1]==numArr[k] && access==false ){//오른쪽 이동 합체 안함
                    	numArr[k+1] = numArr[k+1] + numArr[k];//오른쪽 이동
                        numArr[k] = 0; //배열값 0으로 초기화
                        isMoved=true;
                        access=true;
                    } else if( numArr[k+1]==numArr[k] && access==true ){//오른쪽으로 이동하면서 합쳐질때
                    	access==false;
                    } else if(numArr[k+1] == 0){//배열이 0이면
                    	numArr[k+1] = numArr[k];//배열의 k번째 값을 가짐
                        numArr[k] = 0;//배열 값 초기화
                        isMoved=true;
                    }
                    k++;//k값 증가
                }
            }
        }
    }
    score.innerHTML++;//숫자 1++
    setNum();//숫자 반영
    if(isMoved){//움직임이 감지 되면
    	randomNum();//숫자 2생성
    } else{check();}//게임을 더 할수 있는지 체크
}

//왼쪽으로 이동
function keyArrowLeft(){
    var isMoved=false;//움직임을 감지
    var access = false;//한번에 합치는걸 막는다.
    var k;//배열의 값을 확인하는 코드
    for(var i=13; i>0; i-=4){
        access = false;
        for(var j=i; j<=i+2; j++){
            if(numArr[j] != 0){//배열의 j번째 값이 0이 아니면 실행
                k=j;
                while(k>(i-(i%4)) && (numArr[k-1]==numArr[k] || numArr[k-1] == 0)){//왼쪽으로 이동 할때 한칸만 움직이는지 끝까지 움직이는지 확인
                    if( numArr[k-1]== numArr[k] && access==false ){//왼쪽 이동 합체 안함
                    	numArr[k-1] = numArr[k-1] + numArr[k];//왼쪽 이동
                        numArr[k] = 0;//배열값 0으로 초기화
                        isMoved=true;
                        access=true;
                    }
                    else if( numArr[k-1] == numArr[k] && access==true ){//왼쪽으로 이동하면서 합쳐질때
                    	access==false;
                    }
                    else if(numArr[k-1] ==  0 ){//배열이 0이면
                    	numArr[k-1] = numArr[k];//배열의 k번째 값을 가짐
                        numArr[k] = 0;//배열 값 초기화
                        isMoved=true;
                    }
                    k-=1;//k값 -1
                }
            }
        }   
    }
    score.innerHTML++;//숫자 1++
    setNum();//숫자 반영
    if(isMoved){//움직임이 감지 되면
    	randomNum();//숫자 2생성
    } else{check();}//게임을 더 할수 있는지 체크
}

//위로 이동
function keyArrowUp(){
    var isMoved=false;//움직임을 감지
    var access = false;//한번에 합치는걸 막는다.
    var k;//배열의 값을 확인하는 코드
    for(var i=7; i>3; i-=1){
        access = false;
        for(var j=i; j<(i+9); j+=4){
            if(numArr[j] != 0){//배열의 j번째 값이 0이 아니면 실행
                k=j;
                while(k>=i && (numArr[k-4] == numArr[k] || numArr[k-4] == 0)){//위로 이동 할때 한칸만 움직이는지 끝까지 움직이는지 확인
                    if( numArr[k-4] == numArr[k] && access==false ){//위로 이동 합체 안함
                        numArr[k-4]=numArr[k-4]+numArr[k];//위로 이동
                        numArr[k] = 0;//배열값 0으로 초기화
                        isMoved=true;
                        access=true;
                    }
                    else if( numArr[k-4] == numArr[k] && access==true ){//위로 이동하면서 합쳐질때
                    	access==false;
                    }
                    else if(numArr[k-4] == 0){//배열이 0이면
                    	numArr[k-4]=numArr[k];//배열의 k번째 값을 가짐
                        numArr[k] = 0;//배열 값 초기화
                        isMoved=true;
                    }
                    k-=4;//k값 -4
                }
            }
        }
    }
    score.innerHTML++;//숫자 1++
    setNum();//숫자 반영
    if(isMoved){//움직임이 감지 되면
    	randomNum();//숫자 2생성
    } else{check();}//게임을 더 할수 있는지 체크
}

//아래로 이동
function keyArrowDown(){
    var isMoved=false;//움직임을 감지
    var access = false;//한번에 합치는걸 막는다.
    var k;//배열의 값을 확인하는 코드
    for(var i=11; i>7; i-=1){
        access = false;
        for(var j=i; j>=0; j=j-4){
            if(numArr[j] != 0){//배열의 j번째 값이 0이 아니면 실행
                k=j;
                while(k<12 && (numArr[k+4]==numArr[k] || numArr[k+4] == 0)){//아래로 이동 할때 한칸만 움직이는지 끝까지 움직이는지 확인
                    if( numArr[k+4] == numArr[k] && access==false ){//아래로 이동 합체 안함
                    	numArr[k+4] = numArr[k+4]+numArr[k];//아래로 이동
                        numArr[k] = 0;//배열값 0으로 초기화
                        isMoved=true;
                        access=true;
                    } else if( numArr[k+4] == numArr[k] && access==true ){//아래로 이동하면서 합쳐질때
                    	access==false;
                    } else if(numArr[k+4] == 0){//배열이 0이면
                    	numArr[k+4] = numArr[k];//배열의 k번째 값을 가짐
                        numArr[k] = 0;//배열 값 초기화
                        isMoved=true;
                    }
                    k+=4;//k값 +4
                }
            }
        }
    }
    score.innerHTML++;//숫자 1++
    setNum();//숫자 반영
    if(isMoved){//움직임이 감지 되면
    	randomNum();//숫자 2생성
    } else{check();}//게임을 더 할수 있는지 체크
}

function keylog(e){
    console.log(e.key);//키 입력을 받음
    switch(e.key){
        case 'ArrowRight'://우측키 일때
            keyArrowRight();//오른쪽이동
            break;
        case 'ArrowLeft'://좌측키 일때
            keyArrowLeft();//왼쪽이동
            break;
        case 'ArrowUp'://위키 일때
            keyArrowUp();//위로이동
            break;
        case 'ArrowDown'://아래키 일때
            keyArrowDown();//아래이동
            break;
        default:
            break;
    }
}
window.onkeydown = keylog;//윈도우가 키가 눌렸을때 키를 기록 있다.

// 칸 색칠
function setCellStyle(game){
    var cellNum = parseInt(game.innerHTML);
    switch(cellNum){
        case 2://숫자 2일때 색
            game.style.color="#FFFFFF";
            game.style.background="#eb80f2";
            break;
        case 4://숫자 4일때 색
            game.style.color="#FFFFFF";
            game.style.background="#f5f1e4";
            break;
        case 8://숫자 8일때 색
            game.style.color="#FFFFFF";
            game.style.background="#D29271";
            break;
        case 16://숫자 16일때 색
            game.style.color="#FFFFFF";
            game.style.background="#d4f7cd";
            break;
        case 32://숫자 32일때 색
            game.style.color="#FFFFFF";
            game.style.background="#6499E1";
            break;
        case 64://숫자 64일때 색
            game.style.color="#FFFFFF";
            game.style.background="#4B89DC";
            break;
        case 128://숫자 128일때 색
            game.style.color="#FFFFFF";
            game.style.background="#447CC7";
            break;
        case 256://숫자 256일때 색
            game.style.color="#FFFFFF";
            game.style.background="#5ca0e0";
            break;
        case 512://숫자 512일때 색
            game.style.color="#FFFFFF";
            game.style.background="orange";
            break;
        case 1024://숫자 1024일때 색
            game.style.color="#FFFFFF";
            game.style.background="#eef0b1";
            break;
        case 2048://숫자 2048일때 색
            clearr();//게임 클리어
            game.style.color="#FFFFFF";
            game.style.background="yellow";
            break;
        default:
            if(cellNum>2048){//2048값 넘으면 실행
                game.style.color="#FFFFFF";
                game.style.background="#0A131F";
            }
            else{
                game.style.color="#684A23";
                game.style.background="#E5EEFA";
            }
            break;
    }
}
//게임종료
function end() {
	document.getElementById("endd").style.display = 'block';//게임 종료시 GameOver화면 등장
	document.getElementById("app").style.display = 'none';//게임 종료시 게임판 화면 안보이게 하기
	document.getElementById("score").innerHTML = "0";//게임 종료시 점수 0점
}
//게임클리어
function clearr()
{
    document.getElementById("clear").style.display = 'block';//게임 클리어하면  GameClear화면 등장
	document.getElementById("app").style.display = 'none';//게임 클리어하면 게임판 화면 안보이게 하기
	document.getElementById("score").innerHTML = "0";//게임 클리어하면  점수 0점
}

// 게임 종료 체크
function check(){
	var x = false;//x 합칠 수 있는지 확인.
	for(var i =0 ;i<16;i++){//0부터 15까지 반복
        switch(i){
            case (0)://0번째 배열 1번째 배열이 같거나 0번째 배열 4번째 배열이 같의면 실행
                if(numArr[0]==numArr[1]||numArr[0]==numArr[4]){
                    x=true;//x값 true    
                };
                break;
            case (1)://1번째 배열 0번째 배열이 같거나 1번째 배열 2번째 배열이 같거나 1번째 배열 5번째 배열이 같의면 실행
                if(numArr[1]==numArr[0]||numArr[1]==numArr[2]||numArr[1]==numArr[5]){
                    x=true;//x값 true     
                };
                break;
            case (2)://2번째 배열 1번째 배열이 같거나 2번째 배열 3번째 배열이 같거나 2번째 배열 6번째 배열이 같의면 실행
                if(numArr[2]==numArr[1]||numArr[2]==numArr[3]||numArr[2]==numArr[6]){
                    x=true;//x값 true
                };
                break;
            case (3)://3번째 배열 2번째 배열이 같거나 3번째 배열 7번째 배열이 같의면 실행
                if(numArr[3]==numArr[2]||numArr[3]==numArr[7]){
                    x=true;//x값 true
                };
                break;
            case (4)://4번째 배열 0번째 배열이 같거나 4번째 배열 5번째 배열이 같거나 4번째 배열 8번째 배열이 같의면 실행
                if(numArr[4]==numArr[0]||numArr[4]==numArr[5]||numArr[4]==numArr[8]){
                  x=true;//x값 true   
                };
                break;
            case (5)://5번째 배열 1번째 배열이 같거나 5번째 배열 4번째 배열이 같거나 5번째 배열 6번째 배열이 같거나 5번째 배열 9번째 배열이 같의면 실행
                if(numArr[5]==numArr[1]||numArr[5]==numArr[4]||numArr[5]==numArr[6]||numArr[5]==numArr[9]){
                    x=true;//x값 true  
                };
                break;
            case (6)://6번째 배열 2번째 배열이 같거나 6번째 배열 5번째 배열이 같거나 6번째 배열 7번째 배열이 같거나 6번째 배열 10번째 배열이 같의면 실행
                if(numArr[6]==numArr[2]||numArr[6]==numArr[5]||numArr[6]==numArr[7]||numArr[6]==numArr[10]){
                    x=true;//x값 true  
                };
                break;
            case (7)://7번째 배열 3번째 배열이 같거나 7번째 배열 6번째 배열이 같거나 7번째 배열 11번째 배열이 같의면 실행
                if(numArr[7]==numArr[3]||numArr[7]==numArr[6]||numArr[7]==numArr[11]){
                    x=true;//x값 true 
                };
                break;
            case (8)://8번째 배열 3번째 배열이 같거나 8번째 배열 9번째 배열이 같거나 8번째 배열 12번째 배열이 같의면 실행
                if(numArr[8]==numArr[4]||numArr[8]==numArr[9]||numArr[8]==numArr[12]){
                    x=true;//x값 true 
                };
                break;
            case (9)://9번째 배열 5번째 배열이 같거나 9번째 배열 8번째 배열이 같거나 9번째 배열 10번째 배열이 같거나 9번째 배열 13번째 배열이 같의면 실행
                if(numArr[9]==numArr[5]||numArr[9]==numArr[8]||numArr[9]==numArr[10]||numArr[9]==numArr[13]){
                    x=true;//x값 true
                };
                break;
            case (10)://10번째 배열 6번째 배열이 같거나 10번째 배열 9번째 배열이 같거나 10번째 배열 11번째 배열이 같거나 10번째 배열 14번째 배열이 같의면 실행
                if(numArr[10]==numArr[6]||numArr[10]==numArr[9]||numArr[10]==numArr[11]||numArr[10]==numArr[14]){
                    x=true;//x값 true 
                };
                break;
            case (11)://11번째 배열 7번째 배열이 같거나 11번째 배열 10번째 배열이 같거나 11번째 배열 15번째 배열이 같의면 실행
                if(numArr[11]==numArr[7]||numArr[11]==numArr[10]||numArr[11]==numArr[15]){
                    x=true;//x값 true
                };
                break;
            case (12)://12번째 배열 8번째 배열이 같거나 12번째 배열 13번째 배열이 같의면 실행
                if(numArr[12]==numArr[8]||numArr[12]==numArr[13]){
                    x=true;//x값 true
                };
                break;
            case (13)://13번째 배열 9번째 배열이 같거나 13번째 배열 12번째 배열이 같거나 13번째 배열 14번째 배열이 같의면 실행
                if(numArr[13]==numArr[9]||numArr[13]==numArr[12]||numArr[13]==numArr[14]){
                    x=true;//x값 true 
                };
                break;
            case (14)://14번째 배열 10번째 배열이 같거나 14번째 배열 13번째 배열이 같거나 14번째 배열 15번째 배열이 같의면 실행
                if(numArr[14]==numArr[10]||numArr[14]==numArr[13]||numArr[14]==numArr[15]){
                    x=true;//x값 true 
                };
                break;
            case (15)://15번째 배열 11번째 배열이 같거나 15번째 배열 14번째 배열이 같의면 실행
                if(numArr[15]==numArr[11]||numArr[15]==numArr[14]){
                    x=true;//x값 true
                };
                break;
        }
        
        if(numArr[i] == 0){//배열이 0이면 실행
        	x=true;////x값 true
            break;
        }
	}
    if(!x){////x값 false일때
    	end();//GameOver
   	}
}