function keyArrowRight(){
    console.log("Right Pressed.");
    let blocks = document.getElementsByClassName("blockPrefab");
    for (let i = 0; i < blocks.length; i++){
        blocks[i].style.left = 20;
        console.log(blocks[i].style.left);
        if(blocks[i].style.left == '20px')
        {
            //이찬희질문사항
            var a = blocks[i].style.left;
            a = Number(a.replace(/px$/, ''));
            console.log(a);
            a += 450;
            console.log(a);
            blocks[i].style.left = a; 
        }       
    }
}

function keyArrowLeft(){
    console.log("Left Pressed.");
    let blocks = document.getElementsByClassName("blockPrefab");
    for (let i = 0; i < blocks.length; i++){
        if(blocks[i].style.left == 470)
            blocks[i].style.left -= 450;        
    }
}
function keyArrowUp(){
    console.log("Up Pressed.");
    let blocks = document.getElementsByClassName("blockPrefab");
    for (let i = 0; i < blocks.length; i++){
        blocks[i].style.top = 20;        
    }
}
function keyArrowDown(){
    console.log("Down Pressed.");
    let blocks = document.getElementsByClassName("blockPrefab");
    for (let i = 0; i < blocks.length; i++){
        blocks[i].style.top = 470;        
    }
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
        default:
            break;
    }
}

window.onkeydown = keylog;