let tanya = true;
while (tanya) {
  // pilihan player
  const p = prompt("pilih: gajah,semut,manusia");

  // pilihan computer
  let com = Math.random();
  if (com === 0.33) {
    com = "gajah";
  } else if (com >= 0.34 && com <= 0.64) {
    com = "semut";
  } else {
    com = "manusia";
  }
  console.log(com);
  // tentukan rules
  let hasil = "";
  if (p === com) {
    hasil = "SERI";
  } else if (p === "gajah") {
    hasil = com === "semut" ? "KALAH" : "MENANG";
  } else if (p === "semut") {
    hasil = com === "manusia" ? "KALAH" : "menang";
  } else if (p === "manusia") {
    hasil = com === "gajah" ? "KALAH" : "MENANG";
  } else {
    hasil = "MASUKAN YANG BENER TOLOL!!";
  }
  // tampilkan hasil
  alert(
    `pilihan kamu iyalah ${p} \ndan pilihan computer iyalah ${com} \nmaka kamu >>>>${hasil}<<<<`
  );
  tanya = confirm("mau melanjutkan atau tidak?");
}
alert("terimah kasih sudah bermain");
