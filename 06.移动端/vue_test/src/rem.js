function setRem() {
  // 设置html字体大小，让 1rem 等于 屏幕宽度的 1%
  // 获取屏幕宽度
  const width = document.documentElement.clientWidth;
  // 设置html标签的字体大小
  document.documentElement.style.fontSize = width / 100 + "px";
}

window.onresize = function () {
  setRem();
};

setRem();