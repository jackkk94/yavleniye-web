const VIDEOS = [
  { id: 456240103, title: 'Дан Блинов - Лилии и птицы', duration: '55:44' },
  { id: 456240091, title: 'Дан Блинов - Два добра', duration: '45:38' },
  { id: 456240127, title: 'Дмитрий Поляков - Край', duration: '41:48' },
  { id: 456240041, title: 'Дан Блинов - Новое Сердце', duration: '40:03' },
  { id: 456240223, title: 'Константин Балдин - Недоношенное покаяние | 5 октября', duration: '1:59:44' },
  { id: 456239898, title: 'Дан Блинов - Даже если нет', duration: '45:52' },
  { id: 456239715, title: 'Мария Бондаренко "Это проповедь" | 16 февраля', duration: '48:54' },
  { id: 456239636, title: 'Дан Блинов "Чудный обмен" | 12 января', duration: '42:36' },
  { id: 456239885, title: 'Дан Блинов - Благодать и Истина', duration: '55:11' },
];

const VIDEO_OID = -75418384;

const videoPlayerContainer = document.getElementById('video-player');
const videoListContainer = document.getElementById('video-list');
const videoCountContainer = document.getElementById('videoCount');

function createVkIframe(oid, id, autoplay = false) {
  const autoplayParam = autoplay ? '1' : '0';
  const src = `https://vk.com/video_ext.php?oid=${oid}&id=${id}&hd=2&autoplay=${autoplayParam}`;
  const iframe = document.createElement('iframe');
  iframe.setAttribute('src', src);
  iframe.setAttribute('allow', 'autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;');
  iframe.setAttribute('allowfullscreen', '');
  iframe.style.width = '100%';
  iframe.style.height = '100%';
  iframe.style.backgroundColor = '#000';
  iframe.frameBorder = '0';
  return iframe;
}

let currentVideoIndex = 0;

function renderVideoPlayer(index) {
  videoPlayerContainer.innerHTML = '';
  const video = VIDEOS[index];
  const iframe = createVkIframe(VIDEO_OID, video.id, false);
  videoPlayerContainer.appendChild(iframe);

  document.querySelectorAll('.video-item').forEach((item, i) => {
    item.classList.toggle('active', i === index);
  });

  currentVideoIndex = index;
}

function createElement(tag, className = '', value) {
  const el = document.createElement(tag);
  el.classList.add(className);
  if (value) {
    el.textContent = value;
  }

  return el;
}

function renderVideoList() {
  videoCountContainer.textContent = VIDEOS?.length ?? 0;

  VIDEOS.forEach((video, index) => {
    const item = createElement('div', 'video-item');
    const itemOrder = createElement('div', 'video-item-order', index + 1);
    item.appendChild(itemOrder);
    const itemName = createElement('div', 'video-item-name', video.title);
    item.appendChild(itemName);
    const itemDuration = createElement('div', 'video-item-duration', video.duration);
    item.appendChild(itemDuration);

    item.addEventListener('click', () => {
      if (index !== currentVideoIndex) {
        renderVideoPlayer(index);
      }
    });
    videoListContainer.appendChild(item);
  });
}

window.addEventListener('DOMContentLoaded', () => {
  renderVideoList();
  renderVideoPlayer(0);
});
