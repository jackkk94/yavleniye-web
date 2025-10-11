const VIDEOS = [
  { id: 456240127, title: 'Дмитрий Поляков - Край', duration: '41:48' },
  { id: 456240103, title: 'Дан Блинов - Лилии и птицы', duration: '55:34' },
  { id: 456240091, title: 'Дан Блинов - Два добра', duration: '45:38' },
  { id: 456240083, title: 'Алена Пияшева - Живые камни', duration: '53:16' },
  { id: 456240079, title: 'Константин Балдин - Секретный ингридиент', duration: '51:19' },
  { id: 456240065, title: 'Даниил Горбунов - Взломай рутину', duration: '29:23' },
  { id: 456240052, title: 'Дымченко Павел - Путь в Царство Небесное', duration: '42:45' },
  { id: 456240041, title: 'Дан Блинов - Новое Сердце', duration: '40:03' },
  { id: 456240016, title: 'Дан Блинов - Ошибка опытных', duration: '57:03' },
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
    const itemName = createElement('div', 'video-item-name', video.title)
    item.appendChild(itemName);
    const itemDuration = createElement('div', 'video-item-duration', video.duration)
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
