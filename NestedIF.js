const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Nama olahraga (lari/pushup/plank): ", (jawabanNama) => {
  readline.question("Durasi (menit): ", (jawabanDurasi) => {
    let olahraga = jawabanNama.toLowerCase().trim();
    let durasi = Number(jawabanDurasi);
    let kalori = 0;

    if (olahraga === "lari") {
      if (durasi >= 5) {
         kalori = (durasi / 5) * 60;
        console.log("Kalori terbakar:", kalori);
      } else {
        console.log("Durasi lari minimal 5 menit.");
      }
    } else if (olahraga === "pushup") {
      if (durasi >= 30) {
         kalori= (durasi / 30) * 200;
        console.log("Kalori terbakar:", kalori);
      } else {
        console.log("Durasi push-up minimal 30 menit.");
      }
    } else if (olahraga === "plank") {
      if (durasi >= 1) {
         kalori = durasi * 5;
        console.log("Kalori terbakar:", kalori);
      } else {
        console.log("Durasi plank minimal 1 menit.");
      }
    } else {
      console.log("Olahraga tidak dikenal.");
    }

    readline.close();
  });
});
