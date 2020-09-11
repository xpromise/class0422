const container = document.querySelector(".swiper-container");
const wrapper = document.querySelector(".swiper-wrapper");

// 开始滑动的坐标
let startX = 0;
let offsetX = 0;
const speed = 5;

container.addEventListener("touchstart", function (e) {
  // 开始手的位置
  startX = e.targetTouches[0].clientX;
  // 开始wrapper的位置
  offsetX = wrapper.getBoundingClientRect().left;
});

container.addEventListener("touchmove", function (e) {
  // 结束点左标
  const endX = e.targetTouches[0].clientX;
  // 差值
  const distance = endX - startX;

  let endOffsetX;

  if (distance > 0) {
    console.log("向右");
    endOffsetX = offsetX + speed;
  } else {
    console.log("向左");
    endOffsetX = offsetX - speed;
  }

  wrapper.style.transform = `translateX(${endOffsetX + "px"})`;

  // 同步坐标
  startX = endX;
  offsetX = endOffsetX;
});
