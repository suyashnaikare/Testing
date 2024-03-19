let body = document.querySelector("body");
let h3 = document.querySelector("h3");
let buttons = document.querySelectorAll(".button");
var gameseq = [];
var userseq = [];
var color = ["yellow", "red", "green", "blue"];
var is_started = false;
let level = 0;

for (butt of buttons) {
  butt.addEventListener("click", function () {
    let btn = this;

    blink(btn, "userblink");
  });
}

body.addEventListener("click", function () {
  if (!is_started) {
    is_started = true;
    levelup();
  }
});

function levelup() {
  level++;
  h3.innerHTML = `level ${level}`;
  let randcol = color[Math.floor(Math.random() * 4)];
  blink(document.querySelector(`.${randcol}`), "blink");
  gameseq.push(randcol);
  console.log(`game sequece is ${gameseq}`);
  userseq = [];
}

function blink(btn, clsname) {
  btn.classList.add(clsname);
  setTimeout(function () {
    btn.classList.remove(clsname);
  }, 300);

  if (clsname == "userblink") {
    if (is_started) {
      let usercol = btn.getAttribute("id");
      userseq.push(usercol);
      check(userseq.length - 1);
      console.log(`user sequence is ${userseq}`);
    }
  }
}

function check(ind) {
  if (userseq[ind] === gameseq[ind]) {
    if (userseq.length == gameseq.length) {
      setTimeout(levelup, 1000);
    }
  } else {
    h3.innerHTML = `<b>Game over please start Again</b><br>Score is ${level}<br>Press any key to Start again`;
    reset();
  }
}

function reset() {
  is_started = false;
  gameseq = [];
  userseq = [];
  level = 0;
}
