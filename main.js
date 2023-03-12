function krediHesapla() {
  let anaPara, vade, taksit, top;
  anaPara = document.getElementById("txtKrediTutari").value;
  let liste = document.getElementById("listVade");
  vade = liste.options[liste.selectedIndex].value;
  if (vade==12) {
    top = anaPara * 1.1;
  }
  else if (vade==24) {
    top = anaPara * 1.2;
  }
  else if (vade==36) {
    top = anaPara * 1.3;
  }
  else if (vade==48) {
    top = anaPara * 1.4;
  }
  taksit = top / vade;
  document.querySelector("#sonuc").innerHTML="Geri Ödenecek Tutar : "+ top +"</br>"+ "Aylık Taksit Tutar : " + taksit.toFixed(2);
  
}
