import { curry } from "./fx.js";
import "./index.css";
const confidenceButton = document.querySelector("#confidence__button");
const confidenceText = document.querySelector("#confidence__text");

function* arrayLoopGenerator(arr) {
  let i = 0;
  while (true) {
    yield arr[i++];
    if (i === arr.length) i = 0;
  }
}

function* arrayRandomGenerator(arr) {
  let random = Math.floor(Math.random() * arr.length);
  let prev;
  while (true) {
    while (random === prev) {
      random = Math.floor(Math.random() * arr.length);
    }
    prev = random;
    console.log(random);
    yield arr[random];
  }
}

const buttonDisableToggle = arrayLoopGenerator([
  () => confidenceButton.setAttribute("disabled", "disabled"),
  () => confidenceButton.removeAttribute("disabled"),
]);

const messages = arrayRandomGenerator([
  "개 쳐발랐죠?",
  "아무것도 못하죠?",
  "시험 당일 새벽 4시, 어디선가 자신감이 솟구친다",
  "이놈의 자신감 부족놈! 이제부터 당당하게 살아가자구!",
  "쫄?",
  "내가 정말로 굽고 싶었던 건 이 썩어빠진 세상이었단다",
  "당신은 이 세상에서 제일 멋진 사람인 것 같아!",
  "너가 짱이야~",
  "어쩔",
  "나는 천재다",
  "자신감에는 근거가 없다",
]);

const updateText = (el, text) => (el.innerHTML = text);

let frame = 0;
let index = 0;
let requestId;
const initValues = () => {
  frame = 0;
  index = 0;
  requestId = undefined;
};

confidenceButton.addEventListener("click", () => {
  buttonDisableToggle.next().value();
  updateText(confidenceText, ".");
  initValues();
  writeText(messages.next().value);
});

const writeText = (text) => {
  frame += 1;
  if (frame % 3 === 0) {
    index += 1;
    updateText(confidenceText, text.slice(0, index));
  }
  if (index === text.length) {
    buttonDisableToggle.next().value();
    window.cancelAnimationFrame(requestId);
  } else requestId = window.requestAnimationFrame(() => writeText(text));
};
