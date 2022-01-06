// megjelenít egyetlen elemet
class Elem {
  constructor(szuloelem) {
    this.node = szuloelem;
    this.elem = szuloelem.append("<div><p></p></div>");
    this.elem = szuloelem.children("div:last");
    console.log(this.elem);
    this.aktiv = true;
    this.ertek = "";
    this.pElem = this.elem.children("p");
    this.elem.on("click", () => {
      if (this.aktiv) {
        this.kattintastrigger();
      }
      this.aktiv = false;
    });
  }
  setElem(ertek) {
      this.ertek= ertek;
    //console.log(ertek);
    this.pElem.html(ertek);
  }
  kattintastrigger() {
    let esemeny = new CustomEvent("kivalaszt", { detail: this });
    window.dispatchEvent(esemeny);
  }
}

class Jatekter {
  constructor(tomb) {
    const szuloelem = $("article");
    for (let index = 0; index < 9; index++) {
      const elem = new Elem(szuloelem);
      tomb.push(elem);
    }
    //elem.setElem("X");
  }
}
