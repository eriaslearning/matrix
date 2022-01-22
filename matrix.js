const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let cw = window.innerWidth;
let ch = window.innerHeight;

let charArr = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
];

let maxCharCount = 1000;
let fallingCharArr = [];
let fontSize = 15;
let maxColumns = cw / fontSize;

canvas.width = cw;
canvas.height = ch;

let frames = 0;

class FallingChar {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    draw(ctx) {
        this.value = charArr[Math.floor(Math.random() * (charrArr.length - 1))].toUpperCase();
        this.speed = Math.random() * fontSize * 3 / 4 + fontSize * 3 / 4;

        ctx.fillStyle = "rgba(0, 255, 0)";
        ctx.font = frontSize + "px san-serif";
        ctx.fillText(this.value, this.x, this.y);
        this.y += this.speed;
    }
}