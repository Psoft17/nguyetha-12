// Tiện ích dùng chung — PHẢI nạp TRƯỚC mọi file trong js/data/,
// vì các file data gọi shuffleArr() ngay lúc nạp (vd: PV_GAME1_QUESTIONS = buildPvGame1()).

function shuffle(a){const b=[...a];for(let i=b.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[b[i],b[j]]=[b[j],b[i]]}return b}
function shuffleArr(a){return shuffle(a);}
