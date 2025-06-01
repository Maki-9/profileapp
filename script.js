const tg = window.Telegram.WebApp;
tg.ready();

const user = tg.initDataUnsafe.user;

document.getElementById("user-name").innerText = user.first_name;
document.getElementById("user-tag").innerText = '@' + user.username;
if (user.photo_url) {
  document.getElementById("user-avatar").src = user.photo_url;
}

// fetch баланс и подарки
fetch(`https://ваш-сервер.ru/api/user/${user.id}`)
  .then(res => res.json())
  .then(data => {
    document.getElementById("user-balance").innerText = `${data.balance} монет`;

    const container = document.getElementById("user-gifts");
    data.gifts.forEach(gift => {
      const giftEl = document.createElement('div');
      giftEl.className = 'p-2 bg-pink-100 rounded-xl text-center text-sm shadow';
      giftEl.innerHTML = `
        <img src="${gift.icon}" class="w-10 h-10 mx-auto mb-1" />
        ${gift.name}
      `;
      container.appendChild(giftEl);
    });
  });
