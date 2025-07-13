$(document).on('ready', function () {
  $('.carousel').slick({
    infinite: false,
    arrows: false,
    initialSlide: 0,
    slidesToScroll: 1,
    slidesToShow: 5,
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
      }
    },
{
      breakpoint: 1280,
      settings: {
        slidesToShow: 3,
      }
    }]
  });

  $('#prev').on('click', function () {
    $('.carousel').slick('slickPrev');
  });

  $('#next').on('click', function () {
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
