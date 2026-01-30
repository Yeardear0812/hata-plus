burger.onclick = () => {
  mainnav.style.left = '0';
  black1.style.display = 'block';
};


black1.onclick = () => {
  mainnav.style.left = '-100%'; 
  submenu.style.display = 'none'; 
  subsubmenu.style.display = 'none'; 
  black1.style.display = 'none'; 
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
  
  
  
  