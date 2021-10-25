document.addEventListener('DOMContentLoaded', function() {
  let header = document.createElement('h1');
  let paragraph = document.createElement('p');
  let link = document.createElement('a');

  header.className = 'header';
  paragraph.className = 'paragraph';
  link.className = 'link';
  link.setAttribute('href', 'records.html');

  header.innerHTML = 'WELCOME BACK';
  paragraph.innerHTML = 'Press any card to start!';
  link.innerHTML = 'Рекорды и сохранение результата';

  document.body.prepend(header);
  header.insertAdjacentElement("afterend", paragraph);
  document.body.append(link);
});