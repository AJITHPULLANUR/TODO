window.addEventListener("load", () => {
  const form = document.querySelector("#maindiv");
  const exactinput = document.querySelector("#first-input");
  const lastinput = document.querySelector("#namesinputs");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = exactinput.value;
    if (!name) {
      alert( "Please fill your Name");
      return;
    }

    const sec = document.createElement("div");
    sec.classList.add("secondiv");

    const biggg = document.createElement("div");
    biggg.classList.add("big");

    sec.appendChild(biggg);

    const font = document.createElement("input");
    font.classList.add("anewcss");
    font.type = "text";
    font.value = name;
    font.setAttribute("readonly", "readonly");

    biggg.appendChild(font);

    const diff = document.createElement("div");
    diff.classList.add("change");
    biggg.appendChild(diff)

    const butten = document.createElement("button");
    butten.classList.add("editcss");
    butten.innerText = "EDIT";

    diff.appendChild(butten);
    lastinput.appendChild(sec);

    butten.addEventListener("click", (e) => {
      if (butten.innerText.toLowerCase() == "edit") {
        butten.innerText = "save";
        font.removeAttribute("readonly");
        font.focus();
      } else {
        butten.innerText = "EDIT";
        font.setAttribute("readonly", "readonly");
      }

    });

    const del =document.createElement("button")
    del.classList.add("deletecss")
    del.innerText="DELETE"
    diff.appendChild(del)
    del.addEventListener('click',()=>{
        lastinput.removeChild(sec)

    })

    

  });
  
});
