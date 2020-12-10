function pageLoaded()  {

    //toDo applikációt készítünk. Alapértelmezésben 10 üres mező áll rendelkezésre, amelyhez szabadon hozzáadhatóak új mezők is.
    //Minden mezőbe bepipálhatjuk, hogy készen vagyunk. Van input mező és van egyéb pipálási lehetőség és törlési gomb

    //1. az id=root-ba egy változót definiálok

  let rootE = document.getElementById("root");

  //2. eltároljuk egy változóba a minimum sorok számát (10) , mert nincs tömbünk.
    let rowNumber = 10;

  //3. egy változóba elmentjük a html egy során div sort checkbox, text input és törlés gomb
  let row = `
      <div class="row">
        <input type="checkbox" class="checkbox">
        <input type="text" class="text">
        <button type="button" class="delete">Törlés</button>
      </div>
  `;
      console.log(row);

  //4. tízszer megismételjük a 3. lépést for ciklussal és hozzáadjuk a html root div-hez
    for (let index=0; index < rowNumber; index++) {
      rootE.insertAdjacentHTML("beforeend", row);
    }


  //5. Listán kívülre egy hozzáadás gomb (insertAdjecentHTML afterend)

  rootE.insertAdjacentHTML("afterend", `
      
    <button id="addbtn">új sor hozzáadása</button>

  `);


  //6. A gombot működésre bírjuk: hozzáadjuk a click eseményt.addEventListener.click-kel

  function newItem() {
    rootE.insertAdjacentHTML("beforeend", row);

    //TODO: rá kéne tenni az eseményfigyelőt az újonnan hozzáadott sorokhoz a 70-es sor
  }

  document.getElementById("addbtn").addEventListener("click", newItem);

  //7. kijelölöm className alapján az összes törlés gombot és elmentem egy változóba. querySelectorAll
  let removeBtns = rootE.querySelectorAll(".delete");
  //console.log(removeBtns);

  //8. minden törlés gombra ráteszünk egy click eseményt (for ciklus)
 function removeItem(e) {
//console.log(e, target);
//e.target.parentElement.classList.add("clicked");

e.target.parentElement.remove();
}
for (let index = 0; index < removeBtns.length; index++) {

 removeBtns[index].addEventListener("click", removeItem);
}

  //9. Melyik gomb melyik soroz tartozik: Parentjének az outerHTML a kijelölése





}
window.addEventListener("load", pageLoaded);