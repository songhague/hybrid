var img_num = 1;
function le(){
  img_num--;
  if(img_num <= 0)
      img_num++;
  document.getElementById("img1").src="cal_img0"+img_num.toString()+".png";
}
function ri(){
  img_num++;
  if(img_num >= 6)
      img_num--;
  document.getElementById("img1").src="cal_img0"+img_num.toString()+".png";
}
