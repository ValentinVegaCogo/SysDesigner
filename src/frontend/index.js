let burger = document.getElementById("burger");
let profile = document.getElementById("profile");
let view = document.getElementById("view");
let options = document.getElementById("options");

burger.addEventListener("click", function () {
  burger.classList.toggle("open");
});

window.escapeHtml = function(code) {
  return code
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

window.getOutputElem = function (elem) {
  return elem.parentNode.getElementsByTagName("code")[0];
}

window.updateCodeOutput = function (elem, code) {
  let out = window.getOutputElem(elem);
  if (code[code.length - 1] === "\n") {
    code += " ";
  }
  out.innerHTML = window.escapeHtml(code);
  window.Prism.highlightElement(out);
}

window.onCodeInput = function (elem, event) {
  if (event.key === "Tab") {
    event.preventDefault();
    let code = elem.value;
    let bef = code.slice(0, elem.selectionStart);
    let aft = code.slice(elem.selectionEnd, code.length);
    let cursorPos = elem.selectionEnd + 4;
    elem.value = bef + "    " + aft;
    elem.selectionStart = cursorPos;
    elem.selectionEnd = cursorPos;
    updateCodeOutput(elem, elem.value);
  }
}

window.syncCodeScroll = function (elem) {
  let out = window.getOutputElem(elem);
  out.scrollTop = elem.scrollTop;
  out.scrollLeft = elem.scrollLeft;
}
