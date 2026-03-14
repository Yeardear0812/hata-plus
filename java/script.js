burger.onclick = () => {
  mainnav.style.left = '0';
  black1.style.display = 'block';
};


black1.onclick = () => {
  mainnav.style.left = '-100%'; 
  submenu.style.display = 'none'; 
  subsubmenu.style.display = 'none'; 
  black1.style.display = 'none'; 
  
  callModal.style.display = 'none';  
};


cancel.onclick = (e) => {
  e.preventDefault(); 
  mainnav.style.left = '-100%';
  black1.style.display = 'none';
};


function openMenu(menu) {
  console.log(menu)
  menu.style.display = 'block'
  menu.style.position = 'fixed'
  menu.style.top = '0'
  menu.style.left = '0'
  menu.style.width = '100%'
  menu.style.zIndex = '1'
}
  
function closeMenu(menu) {
  menu.style.display = 'none'
  menu.style.position = 'static'
}
const submenu = document.querySelector('#submenu'),
  subsubmenu = document.querySelector('#subsubmenu')
if(window.innerWidth < 500) {
  btn.onclick = (e) => {
  e.preventDefault()
  openMenu(submenu)}
}
  
subbtn.onclick = (e) => {
  e.preventDefault()
  openMenu(subsubmenu)
}
  
cancelsub.onclick = (e) => {
  e.preventDefault()
  closeMenu(submenu)
}
cancelsubsub.onclick = (e) => {
  e.preventDefault()
  closeMenu(subsubmenu)
}
const callBtn = document.getElementById('callBtn');
const callModal = document.getElementById('callModal');
const closeCall = document.getElementById('closeCall');
callBtn.onclick = (e) => {
  e.preventDefault();
  callModal.style.display = 'flex';
  black1.style.display = 'block';
};
closeCall.onclick = () => {
  callModal.style.display = 'none';
  black1.style.display = 'none';
};
callModal.onclick = (e) => {
  if (e.target === callModal) {
    callModal.style.display = 'none';
    black1.style.display = 'none';
  }
};
const popup = document.querySelector(".box");
const popupImg = popup.querySelector("img");
const cancelPopup = document.querySelector(".canсle-box");
const figureImg = document.querySelectorAll("figure img");
figureImg.forEach(item => {
    item.onclick = () => {
        popup.style.display = "block";
        black1.style.display = "block";
        popupImg.src = item.getAttribute("src");
    }
});

cancelPopup.onclick = (e) => {
    e.preventDefault();
    popup.style.display = "none";
    black1.style.display = "none";
    popupImg.src = "";
};

// закриття по чорному фону
black1.onclick = () => {
    popup.style.display = "none";
    black1.style.display = "none";
    popupImg.src = "";
};