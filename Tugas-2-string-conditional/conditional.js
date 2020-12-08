//If-else

var nama = "Alina";
var peran = "Penyihir";

if (nama != "" && peran === "") {
  console.log(`Halo ${nama}, Pilih peranmu untuk memulai game!`);
} else if (nama != "" && peran === "Penyihir") {
  console.log(`"Selamat datang di Dunia Werewolf, ${nama}"
    "Halo Penyihir ${nama}, kamu dapat melihat siapa yang menjadi werewolf!"`);
} else if (nama != "" && peran === "Guard") {
  console.log(`"Selamat datang di Dunia Werewolf, ${nama}"
    "Halo Guard ${nama}, kamu akan membantu melindungi temanmu dari serangan werewolf."`);
} else if (nama != "" && peran === "Werewolf") {
  console.log(`"Selamat datang di Dunia Werewolf, ${nama}"
  "Halo Werewolf ${nama}, Kamu akan memakan mangsa setiap malam!" `);
} else {
  console.log("Nama harus diisi!");
}

//swich break
var hari = 5;
var bulan = 12;
var tahun = 1945;
var month = "";

if (tahun < 1900 || tahun > 2200) {
  console.log("masukan tahun dengan angka antara 1900 - 2200");
} else if (hari < 1 || hari > 31) {
  console.log("masukan hari dengan angka antara 1 - 31");
} else {
  switch (bulan) {
    case 1:
      month = "Januari";
      break;
    case 1:
      month = "February";
      break;
    case 2:
      month = "Maret";
      break;
    case 3:
      month = "April";
      break;
    case 4:
      month = "Mei";
      break;
    case 5:
      month = "Juni";
      break;
    case 7:
      month = "Juli";
    case 8:
      month = "Agustus";
    case 9:
      month = "September";
    case 10:
      month = "Oktober";
    case 11:
      month = "November";
    case 12:
      month = "Desember";
  }

  var formatDate = `${hari} ${month} ${tahun}`;
  console.log(formatDate);
}
