function Swiper(el, options = {}) {
  const container = document.querySelector(el);
  const wrapper = document.querySelector(".swiper-wrapper");
  const slides = document.querySelectorAll(".swiper-slide");

  const isLoop = options.loop;
  const isAutoplay = options.autoplay;
  const isPagination = options.pagination;

  const sliderLength = slides.length;

  let points = null;

  if (isPagination) {
    const pointsWrapper = document.querySelector(isPagination.el);

    let htmlStr = "";
    for (let i = 0; i < sliderLength; i++) {
      if (i === 0) {
        htmlStr += '<span class="active"></span>';
        continue;
      }
      htmlStr += "<span></span>";
    }

    pointsWrapper.innerHTML = htmlStr;

    points = document.querySelectorAll(`${isPagination.el} span`);
  }

  // 当前轮播图下标
  let currentIndex = 0;

  // 移动开始的位置
  let startPosition = 0;
  // 开始滑动的坐标
  let startX = 0;
  // wrapper元素开始位移的位置
  let offsetX = 0;
  // 位移的速度
  const speed = 5;
  // 屏幕宽度
  const containerWidth = container.clientWidth;
  // 开始过渡的临界值
  const criticalValue = containerWidth / 10;
  let isMove = false;

  let timer = null;

  if (isLoop) {
    // 克隆元素
    const firstSlide = slides[0].cloneNode(Infinity);
    wrapper.appendChild(firstSlide);
    // 克隆元素
    const lastSlide = slides[slides.length - 1].cloneNode(Infinity);
    wrapper.insertBefore(lastSlide, slides[0]);
    currentIndex = 1;
    // 初始化轮播图位置
    wrapper.style.transform = `translateX(${
      -currentIndex * containerWidth + "px"
    })`;
  }

  container.addEventListener("touchstart", function (e) {
    if (isMove) return;
    // 开始手的位置
    startPosition = startX = e.targetTouches[0].clientX;
    // 开始wrapper的位置
    offsetX = wrapper.getBoundingClientRect().left;
    wrapper.style.transition = `none`;

    isAutoplay && clearInterval(timer);
  });

  container.addEventListener("touchmove", function (e) {
    if (isMove) return;
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

  container.addEventListener("touchend", function (e) {
    if (isMove) return;
    // 结束点左标
    const endPosition = e.changedTouches[0].clientX;
    // 差值
    const distance = endPosition - startPosition;

    /*
    distance > 0  向右
      distance > criticalValue 继续向右 
       currentIndex--;
      distance < criticalValue 向左
       currentIndex不变
    distance < 0  向左
      -distance > criticalValue 继续向左 
       currentIndex++;
      -distance < criticalValue 向右
       currentIndex不变
  */

    if (distance > 0 && distance > criticalValue) {
      console.log("向右");
      currentIndex--;
    } else if (distance < 0 && -distance > criticalValue) {
      console.log("向左");
      currentIndex++;
    }

    move();
    isAutoplay && autoPlay();
  });

  function move() {
    isMove = true;
    setTimeout(() => {
      isMove = false;

      if (isLoop) {
        if (currentIndex === 0) {
          currentIndex = sliderLength;
          wrapper.style.transition = "none";
          wrapper.style.transform = `translateX(${
            -currentIndex * containerWidth + "px"
          })`;
        }

        if (currentIndex === 0) {
          currentIndex = sliderLength;
          wrapper.style.transition = "none";
          wrapper.style.transform = `translateX(${
            -currentIndex * containerWidth + "px"
          })`;
        }
        if (currentIndex === sliderLength + 1) {
          currentIndex = 1;
          wrapper.style.transition = "none";
          wrapper.style.transform = `translateX(${
            -currentIndex * containerWidth + "px"
          })`;
        }
      }

      // 处理小圆点
      if (!isPagination) return;

      for (let i = 0; i < points.length; i++) {
        const point = points[i];
        point.className = "";
        const index = isLoop ? currentIndex - 1 : currentIndex;
        points[index].className = "active";
      }
    }, 800);

    // 过渡效果
    wrapper.style.transition = "transform .8s";

    if (!isLoop) {
      // 没有无缝轮播
      if (currentIndex < 0) {
        currentIndex = 0;
      }
      if (currentIndex > sliderLength - 1) {
        currentIndex = sliderLength - 1;
      }
      wrapper.style.transform = `translateX(${
        -currentIndex * containerWidth + "px"
      })`;

      return;
    }

    // 有loop
    wrapper.style.transform = `translateX(${
      -currentIndex * containerWidth + "px"
    })`;
  }
  // 定时器 - 自动轮播
  function autoPlay() {
    timer = setInterval(() => {
      currentIndex++;
      move();
    }, 3000);
  }

  isAutoplay && autoPlay();
}
