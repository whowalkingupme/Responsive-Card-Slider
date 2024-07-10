const swiper = new Swiper('.slider-wrapper', {
  // 啟用無限循環模式,允許輪播在到達最後一張幻燈片後回到第一張。
  loop: true,

  // 將滑鼠游標設置為"抓取"圖示,表示可以拖動幻燈片。
  grabCursor: true,

  // 設置幻燈片之間的間距為 30 像素。
  spaceBetween: 30,

   // Pagination bullets
  pagination: {
    el: '.swiper-pagination',

    // 指定用於顯示分頁點的元素。
    clickable: true,

    // 啟用動態分頁點,根據幻燈片數量自動調整分頁點的大小。
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    // 設定向前/向後箭頭的元素
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Responsive breakpoints

//   設置不同螢幕尺寸下的響應式選項。
// 0: { slidesPerView: 1 } 表示在螢幕寬度為 0 到 767 像素時,每個視圖顯示 1 張幻燈片。
// 768: { slidesPerView: 2 } 表示在螢幕寬度為 768 到 1023 像素時,每個視圖顯示 2 張幻燈片。
// 1024: { slidesPerView: 3 } 表示在螢幕寬度為 1024 像素及以上時,每個視圖顯示 3 張幻燈片。
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    },
  },

});