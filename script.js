const sec_1 = document.querySelector('.sec_1');
const sec_2 = document.querySelector('.sec_2');
const sec_3 = document.querySelector('.sec_3');
window.addEventListener('scroll', function() {
  var scr_pos = window.pageYOffset;
  if(scr_pos <= 350) {
    sec_1.classList.add("anm_appear");
  } 
  else if( scr_pos > 350 && scr_pos <= 650) 
  {
    sec_2.classList.add("anm_appear");
  }
  else if(scr_pos > 650 && scr_pos <= 850) 
  {
    sec_3.classList.add("anm_appear");
  } 
  else if(scr_pos > 850 && scr_pos <= 900) 
  {          sec_1.classList.remove("anm_appear");
  sec_2.classList.remove("anm_appear");
  sec_3.classList.remove("anm_appear");
  }
});







