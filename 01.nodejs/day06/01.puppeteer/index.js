const puppeteer = require('puppeteer');

(async () => {
  // 1. 打开浏览器
  const browser = await puppeteer.launch({
    headless: false, // 有头模式
  });
  // 2. 新建一个标签页
  const page = await browser.newPage();
  // 3. 输入网址
  await page.goto('https://movie.douban.com/explore#!type=movie&tag=%E8%B1%86%E7%93%A3%E9%AB%98%E5%88%86&sort=recommend&page_limit=20&page_start=0', {
    waitUntil: 'load' 
  });
  // 4. 抓取页面数据
  const movies = await page.evaluate(() => {
    // 当前函数会在页面中调用
    const $a = $('.list>a');

    const data = [];

    for (let i = 0; i < $a.length; i++) {
      const item = $($a[i]);
      const url = item.attr('href');
      const img = item.find('img').attr('src');
      const [title, rate] = item.find('p').text().trim().replace(/\s+/, ' ').split(' ');
      
      data.push({
        url, // 详情页
        img, // 海报
        title, // 标题
        rate // 评分
      })
    }

    return data;
  });

  // console.log(movies);

  // 再去抓取其他数据
  for (let i = 0; i < movies.length; i++) {
    const movie = movies[i];
    await page.goto(movie.url, {
      waitUntil: 'load' 
    })
    const desc = await page.evaluate(() => {
      // 电影介绍
      
    })
    movie.desc = desc;
  }

  console.log(movies);

  // 5. 关闭浏览器
  await browser.close();
})();