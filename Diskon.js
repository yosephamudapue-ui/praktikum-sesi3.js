const readline=
require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});
readline.question ("masukkan total belanja(Rp):",(jawaban) => {
    let total= Number(jawaban);
    let persen= 0;

    if(total >= 250000) {
        persen = 10;
    } else if (total >= 100000) {
        persen = 5;
    } else if (total >=50000) {
        persen = 3;
    } else {
        persen = 0;
    }
    let diskon= total * persen / 100;
    let bayar= total - diskon;
    console.log ("Total belanja anda adalah Rp" + total.toLocaleString("id-ID"));
    console.log ("Diskon yang diperoleh adalah Rp" + diskon.toLocaleString("id-ID"));
    console.log ("Total yang harus dibayar adalah Rp" + bayar.toLocaleString("id-ID"));
    readline.close();
});
