function taqti(w) {
    //Replace order is extremely important
    return w.replace(/[।॥०१२३४५६७८९॰,ंँ]/g, '').replace(/[-]/g, ' ').replace(/[आईऊऍऎएऐऑऒओऔ]/g, 2).replace(/[अइउ]/g, 1).replace(/[कखगघङचछजझञटठडढणतथदधनऩपफबभमयरऱलळऴवशषसहक़ख़ग़ज़ड़ढ़फ़य़]/g, 1).replace(/1[ाीूॅेैोौॉ]/g, 2).replace(/1[िुृ]/g, 1).replace(/11्/g, 2).replace(/^1्/g, '').replace(/11$/g, 2);
}
function splitScentence(s) {
    let res = [];
    for (let w of s.split(' ')) {
        res.push(taqti(w))
    }
    return res.join(' ');
}
function run() {
    let t1 = document.querySelector('#t1');
    let t2 = document.querySelector('#t2');
    t2.value = splitScentence(t1.value);
}