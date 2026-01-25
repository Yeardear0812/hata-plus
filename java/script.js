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
