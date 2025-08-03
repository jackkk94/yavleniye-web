const COPY_TEXT_BUTTON = document.getElementById('textToCopy');
const MENU_TOGGLER = document.getElementById('menuToggler');
const COPY_TEXT_SUCCESS_MESSAGE = 'Текст скопирован';
const COPY_TEXT_ERROR_MESSAGE = 'Не удалось скопировать текст: ';
const TEXT_TO_COPY = 'Пожертвование для МРГ "Явление Духа и Силы"';

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

COPY_TEXT_BUTTON.addEventListener('click', async () => {
  if (!navigator.clipboard) {
    return;
  }

  try {
    await navigator.clipboard.writeText(TEXT_TO_COPY);

    const textElement = document.querySelector('#textToCopy .text');
    const originalText = textElement.innerHTML;
    if (textElement && originalText) {
      textElement.innerHTML = COPY_TEXT_SUCCESS_MESSAGE;

      COPY_TEXT_BUTTON.classList.add('pulse');
      setTimeout(() => {
        textElement.innerHTML = originalText;
        COPY_TEXT_BUTTON.classList.remove('pulse');
      }, 1000);
    }
  } catch (err) {
    console.error(COPY_TEXT_ERROR_MESSAGE, err);
  }
});

MENU_TOGGLER.addEventListener('click', async () => {
  const el = document.querySelector('.menu-mobile');
  if (el) {
    el.classList.toggle('opened');
  }
});

const handleModalClick = ({ currentTarget, target }) => {
  const isClickedOnBackdrop = target === currentTarget;

  if (isClickedOnBackdrop) {
    currentTarget.close();
  }
};

function openModal(id) {
  if (!id) return;
  const modal = document.getElementById(id);
  if (!modal) return;

  modal.showModal();
  setTimeout(() => {
    modal.addEventListener('click', handleModalClick);
  }, 0);
}
