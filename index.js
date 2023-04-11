const confidenceButton = document.querySelector("#confidence__button");
const confidenceText = document.querySelector("#confidence__text");

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
  updateText(confidenceText, ".");
  initValues();
  riseNumber(confidenceText);
});
const messages = ["개쳐발랐죠?", "이놈의 자신감 부족놈!"];
const riseNumber = () => {
  frame += 1;
  if (frame % 5 === 0) {
    index += 1;
    updateText(confidenceText, messages[1].slice(0, index));
  }
  if (index === messages[1].length) window.cancelAnimationFrame(requestId);
  else requestId = window.requestAnimationFrame(riseNumber);
};
