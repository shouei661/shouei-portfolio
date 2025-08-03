const worksData = {
  all: [


    {    
      img: "assets1/works-image/All-Bakery Yellow.png",
      title: "トーストパン工房イラスト",
      year: "2025",
      link: "toast-detail.html"
    },
    {
      img: "assets1/works-image/all-Workplace Pink Blue.png",
      title: "ワークスペースイラスト",
      year: "2025",
      link: "workplace-detail.html"
    },
        {
      img: "assets1/works-image/pink-koala.png",
      title: "コアラのキッチンイラスト",
      year: "2025",
      link: "koala-detail.html"
    },
    {
      img: "assets1/works-image/ALL-cafe-web.png",
      title: "パーノワールカフェサイト",
      year: "2025",
      link: "cafe-web-detail.html"
    },

    {
      img: "assets1/works-image/All-hotel-web.png",
      title: "シオラ海辺の旅館サイト",
      year: "2025",
      link: "hotel-web-detail.html"
    },
    {
      img: "assets1/works-image/All-shouei-web.png",
      title: "ショウエイのポートフォリオ",
      year: "2025",
      link: "portfilo-web-detail.html"
    },
       {     
      img: "assets1/works-image/all-hotel-banner.png",
      title: "夏休みキャンペーンバナー",
      year: "2025",
      link: "hotel-banner-detail.html"
    },
    {
      img: "assets1/works-image/all-cafe-app-dowanload-banner.png",
      title: "アプリダウンロードバナー",
      year: "2025",
      link: "cafe-app-banner-detail.html"
    },
    
  ],
  website: [
    {
      img: "assets1/works-image/ALL-cafe-web.png",
      title: "パーノワールカフェサイト",
      year: "2025",
      link: "cafe-web-detail.html"
    },
    {
      img: "assets1/works-image/All-hotel-web.png",
      title: "シオラ海辺の旅館サイト",
      year: "2025",
      link: "hotel-web-detail.html"
    },
    {
      img: "assets1/works-image/All-shouei-web.png",
      title: "ショウエイのポートフォリオ",
      year: "2025",
      link: "portfilo-web-detail.html"
    }
  ],
  app: [
    {
      img: "assets1/works-image/all-cafe-app.png",
      title: "カフェ公式アプリ",
      year: "2025",
      link: "cafe-app-detail.html"
    }
  ],
  banner: [
    {
      img: "assets1/works-image/all-cafe-banner.png",
      title: "ラテ新品発売バナー",
      year: "2025",
      link: "cafe-banner-detail.html"
    },
    {
      img: "assets1/works-image/all-hotel-banner.png",
      title: "夏休みキャンペーンバナー",
      year: "2025",
      link: "hotel-banner-detail.html"
    },
    {
      img: "assets1/works-image/all-cafe-app-dowanload-banner.png",
      title: "アプリダウンロードバナー",
      year: "2025",
      link: "cafe-app-banner-detail.html"
    }
  ],
  others: [
    {
      img: "assets1/works-image/All-Bakery Yellow.png",
      title: "トーストパン工房イラスト",
      year: "2024",
      link: "koala-detail.html"
    },
    {
      img: "assets1/works-image/All-koala.png",
      title: "コアラのキッチンイラスト",
      year: "2025",
      link: "koala-detail.html"
    },
    {
      img: "assets1/works-image/all-Workplace Pink Blue.png",
      title: "ワークスペースイラスト",
      year: "2025",
      link: "logo-design-detail.html"
    }
  ]
};

const tagButtons = document.querySelectorAll('.tag');
const worksGrid = document.querySelector('.works-grid');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

let currentCategory = 'all';
let currentPage = 0;
const itemsPerPage = 2;

function renderWorks(category, page = 0) {
  worksGrid.innerHTML = '';
  const allWorks = worksData[category] || [];
  const start = page * itemsPerPage;
  const end = start + itemsPerPage;
  const pageWorks = allWorks.slice(start, end);

  pageWorks.forEach(work => {
    const workHTML = `
      <a href="${work.link}" class="work-item">
        <div class="work-box">
          <img src="${work.img}" alt="${work.title}" />
        </div>
        <div class="work-info-wrapper">
          <div class="work-info">
            <span class="work-year">${work.year}</span>
            <span class="work-title">${work.title}</span>
          </div>
        </div>
      </a>
    `;
    worksGrid.insertAdjacentHTML('beforeend', workHTML);
  });
}

renderWorks(currentCategory, currentPage);

tagButtons.forEach(button => {
  button.addEventListener('click', () => {
    tagButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    currentCategory = button.dataset.category;
    currentPage = 0;
    renderWorks(currentCategory, currentPage);
  });
});

rightArrow.addEventListener('click', () => {
  const maxPages = Math.ceil((worksData[currentCategory] || []).length / itemsPerPage);
  if (currentPage < maxPages - 1) {
    currentPage++;
    renderWorks(currentCategory, currentPage);
  }
});

leftArrow.addEventListener('click', () => {
  if (currentPage > 0) {
    currentPage--;
    renderWorks(currentCategory, currentPage);
  }
});

