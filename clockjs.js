setInterval(rot, 1000);
let d, h, m, s, hdeg, dt, mo, yr;
let ho = document.getElementById("hr");
let mn = document.getElementById("min");
let sc = document.getElementById("sec");
let tmr = document.getElementById("tm");
let dtr = document.getElementById("dt");

let mor = false,
  aft = false,
  eve = false,
  nig = false;

let by = document.getElementsByTagName("body");
let pr = document.createElement("p");

let bd = document.getElementById("clk");

function rot() {
  d = new Date();
  h = d.getHours();
  m = d.getMinutes();
  s = d.getSeconds();
  dt = d.getDate();
  mo = d.getMonth();
  yr = d.getFullYear();
  mo++;

  hdeg = h * 30 + m / 2;

  if (h >= 6 && h < 12) {
    by[0].style.background =
      "linear-gradient(to right,rgb(169, 220, 253),rgb(250, 250, 170))";
    if (!mor) {
      let pr = document.createElement("p");

      mor = true;
      nig = false;
      pr.innerText = "Good Morning !!";
      pr.style.textAlign = "center";
      pr.style.fontSize = "2rem";

      by[0].appendChild(pr);
    }
  } else if (h >= 12 && h < 17) {
    by[0].style.background =
      "linear-gradient(to right,rgb(250, 250, 170),rgb(241, 145, 101))";
    if (!aft) {
      let pr = document.createElement("p");

      aft = true;
      mor = false;
      pr.innerText = "Good Afternoon !!";
      pr.style.textAlign = "center";
      pr.style.fontSize = "2rem";

      by[0].appendChild(pr);
    }
  } else if (h >= 17 && h < 21) {
    by[0].style.background =
      "linear-gradient(to right,rgb(241, 145, 101),rgb(34, 79, 119))";
    if (!eve) {
      let pr = document.createElement("p");

      eve = true;
      aft = false;
      pr.innerText = "Good Evening !!";
      pr.style.textAlign = "center";
      pr.style.fontSize = "2rem";

      by[0].appendChild(pr);
    }
  } else {
    by[0].style.background =
      "linear-gradient(to right,rgb(34, 79, 119),rgb(78, 104, 121))";

    if (!nig) {
      let pr = document.createElement("p");

      nig = true;
      eve = false;
      pr.innerText = "Good Night !!";
      pr.style.textAlign = "center";
      pr.style.fontSize = "2rem";

      by[0].appendChild(pr);
    }
  }

  ho.style.transform = "rotate(" + hdeg + "deg)";
  mn.style.transform = "rotate(" + m * 6 + "deg)";
  sc.style.transform = "rotate(" + s * 6 + "deg)";

  tmr.innerHTML = h + ":" + m + ":" + s;
  dtr.innerHTML = dt + "/" + mo + "/" + yr;
}

rot();
