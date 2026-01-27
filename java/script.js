burger.onclick = () => {
    mainnav.style.left = '0';
    black1.style.display = 'block';
};

black1.onclick = () => {
    mainnav.style.left = '-100%';
    black1.style.display = 'none';
};

cancel.onclick = (e) => {
    e.preventDefault(); 
    mainnav.style.left = '-100%';
    black1.style.display = 'none';
};

function openMenu(id) {
    id.style.display = 'block'
    id.style.position = 'fixed'
    id.style.top = '0'
    id.style.left = '0'
    id.style.width = '100%'
    id.style.zIndex = '1'
}
  
function closeMenu(id) {
    id.style.display = 'none'
    id.style.position = 'static'
}
if(window.innerWidth < 500) {
    btn.onclick = (e) => {
    e.preventDefault()
    openMenu(submenu)
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
}
  
  