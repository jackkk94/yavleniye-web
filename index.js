$(document).on('ready', function () {
  $('.carousel').slick({
    infinite: false,
    arrows: false,
    initialSlide: 0,
    slidesToScroll: 1,
    slidesToShow: 4,
    variableWidth: true,
    centerMode: false,
    focusOnChange: false,
    focusOnSelect: false,
    draggable: true,
    swipe: true,
    swipeToSlide: true,
              
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1310,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
        },
      },

       {
        breakpoint: 740,
        settings: {
          slidesToShow: 2,
           infinite: true,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,

        },
      },
    ],
  });

  $('.carousel-prev').on('click', function () {
    $('.carousel').slick('slickPrev');
  });

  $('.carousel-next').on('click', function () {
    $('.carousel').slick('slickNext');
  });
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    const id = e.target.hash;
    if (!id) {
      return;
    }

    const el = document.getElementById(id);
    if (el) {
      document.getElementById(el).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  });
});

document.getElementById('textToCopy').addEventListener('click', async () => {
  if (!navigator.clipboard) {
    return;
  }

  try {
    await navigator.clipboard.writeText('Пожертвование для МРГ "Явление Духа и Силы"');
  } catch (err) {
    console.error('Не удалось скопировать текст: ', err);
  }
});

document.getElementById('menuToggler').addEventListener('click', async () => {
  const el = document.querySelector('.menu-mobile');
    if (el) {
     el.classList.toggle('opened')
    }
});



