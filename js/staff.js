const staff = [
  {
    id: 0,
    img: "../images/staff1.png",
    name: "Шарлотта Яблочная",
    post: "Официантка",
  },
  {
    id: 1,
    img: "../images/staff2.png",
    name: "Аида Турдалиева",
    post: "Официантка",
  },
  {
    id: 2,
    img: "../images/staff3.png",
    name: "Максим Растанаев",
    post: "Официантка",
  },
  {
    id: 3,
    img: "../images/staff4.png",
    name: "Анна Нечаева",
    post: "Официантка",
  },
  {
    id: 4,
    img: "../images/staff5.png",
    name: "Александр Невмержицкий",
    post: "Официантка",
  },
  {
    id: 5,
    img: "../images/staff6.png",
    name: "Роза Ашурова",
    post: "Официантка",
  },
  {
    id: 6,
    img: "../images/staff2.png",
    name: "Роза Ашурова",
    post: "Официантка",
  },
  {
    id: 7,
    img: "../images/staff2.png",
    name: "Роза Ашурова",
    post: "Официантка",
  },
  {
    id: 8,
    img: "../images/staff2.png",
    name: "Роза Ашурова",
    post: "Официантка",
  },
  {
    id: 9,
    img: "../images/staff2.png",
    name: "Роза Ашурова",
    post: "Официантка",
  },
];

staff.map((el) => {
  document.querySelector(".staff").innerHTML += `<div class="staff-one">
          <div class="staff-info">
            <img src="${el.img}" alt="" class="staff-info__img" />
            <div class="staff-info__about">
              <p class="staff-info__name">${el.name}</p>
              <span class="staff-info__post">${el.post}</span>
            </div>
          </div>
          <button onclick="oneOffer(${el.id})" class="staff-btn">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              stroke="#747D88"
              xmlns="http://www.w3.org/2000/svg"
              class="arrowRight"
            >
              <path
                d="M4.95835 14.3199L22.4583 14.3199"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.0164 21.3484L4.95812 14.3204L12.0164 7.29126"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>`;
});

let isOne = false;

function oneOffer(id) {
  if (!isOne) {
    document.getElementById("allOffers").classList.add("hidden");
    document.getElementById("oneOffer").classList.remove("hidden");
    isOne = !isOne;
    staff.map((el) => {
      if (el.id === id) {
        document.getElementById("oneOffer").innerHTML = `
          <button onclick="oneOffer(0)" class="offers-arrowLeft">
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.95835 14.3199L22.4583 14.3199"
            stroke="#747D88"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12.0164 21.3484L4.95812 14.3204L12.0164 7.29126"
            stroke="#747D88"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <div class="one-offer__box">
        <img src="${el.img}" alt="" class="one-offer__img" />
        <div class="one-offer__text center">
          <p class="staff-info__name center">${el.name}</p>
          <span>получит вашу благодарность</span>
        </div>
      </div>
      <form action="#" class="mt-5">
        <span class="phone-text">Введите сумму</span>
        <label for="offer" class="login-label mb-5">
          <input class="offer-input" type="text" id="offer" placeholder="0 ₼" />
        </label>
        <span class="offer-input__info">От 3 до 100 ₼</span>
        <div class="offer-btns">
          <button onclick="offerValue(3)" class="offer-btn">3 ₼</button>
          <button onclick="offerValue(5)" class="offer-btn">5 ₼</button>
          <button onclick="offerValue(10)" class="offer-btn">10 ₼</button>
          <button onclick="offerValue(15)" class="offer-btn">15 ₼</button>
        </div>
      </form>
      <div class="offer-rating">
        <p class="offer-rating__text">Вам всё понравилось?</p>
        <div class="stars">
          <svg
            width="29"
            height="28"
            viewBox="0 0 29 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.35426 17.4125L5.57096 18.0341L6.35426 17.4124L1.47885 11.2692L9.03407 9.16485L8.76575 8.20152L9.03407 9.16485C9.49712 9.03588 9.89823 8.74445 10.164 8.34392L14.5 1.80875L18.836 8.34392C19.1018 8.74445 19.5029 9.03588 19.9659 9.16485L27.5211 11.2692L22.6457 17.4125C22.3469 17.789 22.1937 18.2605 22.2142 18.7407L22.5475 26.5765L15.1983 23.838L14.8492 24.7751L15.1983 23.838C14.7479 23.6702 14.2521 23.6702 13.8017 23.838L14.1508 24.7751L13.8017 23.838L6.45249 26.5765L6.78585 18.7407C6.80628 18.2605 6.65306 17.789 6.35426 17.4125Z"
              stroke="#747D88"
              stroke-width="2"
            />
          </svg>
          <svg
            width="29"
            height="28"
            viewBox="0 0 29 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.35426 17.4125L5.57096 18.0341L6.35426 17.4124L1.47885 11.2692L9.03407 9.16485L8.76575 8.20152L9.03407 9.16485C9.49712 9.03588 9.89823 8.74445 10.164 8.34392L14.5 1.80875L18.836 8.34392C19.1018 8.74445 19.5029 9.03588 19.9659 9.16485L27.5211 11.2692L22.6457 17.4125C22.3469 17.789 22.1937 18.2605 22.2142 18.7407L22.5475 26.5765L15.1983 23.838L14.8492 24.7751L15.1983 23.838C14.7479 23.6702 14.2521 23.6702 13.8017 23.838L14.1508 24.7751L13.8017 23.838L6.45249 26.5765L6.78585 18.7407C6.80628 18.2605 6.65306 17.789 6.35426 17.4125Z"
              stroke="#747D88"
              stroke-width="2"
            />
          </svg>
          <svg
            width="29"
            height="28"
            viewBox="0 0 29 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.35426 17.4125L5.57096 18.0341L6.35426 17.4124L1.47885 11.2692L9.03407 9.16485L8.76575 8.20152L9.03407 9.16485C9.49712 9.03588 9.89823 8.74445 10.164 8.34392L14.5 1.80875L18.836 8.34392C19.1018 8.74445 19.5029 9.03588 19.9659 9.16485L27.5211 11.2692L22.6457 17.4125C22.3469 17.789 22.1937 18.2605 22.2142 18.7407L22.5475 26.5765L15.1983 23.838L14.8492 24.7751L15.1983 23.838C14.7479 23.6702 14.2521 23.6702 13.8017 23.838L14.1508 24.7751L13.8017 23.838L6.45249 26.5765L6.78585 18.7407C6.80628 18.2605 6.65306 17.789 6.35426 17.4125Z"
              stroke="#747D88"
              stroke-width="2"
            />
          </svg>
          <svg
            width="29"
            height="28"
            viewBox="0 0 29 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.35426 17.4125L5.57096 18.0341L6.35426 17.4124L1.47885 11.2692L9.03407 9.16485L8.76575 8.20152L9.03407 9.16485C9.49712 9.03588 9.89823 8.74445 10.164 8.34392L14.5 1.80875L18.836 8.34392C19.1018 8.74445 19.5029 9.03588 19.9659 9.16485L27.5211 11.2692L22.6457 17.4125C22.3469 17.789 22.1937 18.2605 22.2142 18.7407L22.5475 26.5765L15.1983 23.838L14.8492 24.7751L15.1983 23.838C14.7479 23.6702 14.2521 23.6702 13.8017 23.838L14.1508 24.7751L13.8017 23.838L6.45249 26.5765L6.78585 18.7407C6.80628 18.2605 6.65306 17.789 6.35426 17.4125Z"
              stroke="#747D88"
              stroke-width="2"
            />
          </svg>
          <svg
            width="29"
            height="28"
            viewBox="0 0 29 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.35426 17.4125L5.57096 18.0341L6.35426 17.4124L1.47885 11.2692L9.03407 9.16485L8.76575 8.20152L9.03407 9.16485C9.49712 9.03588 9.89823 8.74445 10.164 8.34392L14.5 1.80875L18.836 8.34392C19.1018 8.74445 19.5029 9.03588 19.9659 9.16485L27.5211 11.2692L22.6457 17.4125C22.3469 17.789 22.1937 18.2605 22.2142 18.7407L22.5475 26.5765L15.1983 23.838L14.8492 24.7751L15.1983 23.838C14.7479 23.6702 14.2521 23.6702 13.8017 23.838L14.1508 24.7751L13.8017 23.838L6.45249 26.5765L6.78585 18.7407C6.80628 18.2605 6.65306 17.789 6.35426 17.4125Z"
              stroke="#747D88"
              stroke-width="2"
            />
          </svg>
        </div>
      </div>
      <form action="#" class="comment">
        <span class="phone-text">Коментарий</span>
        <label for="offer" class="login-label mb-5">
          <input class="offer-comment" type="text" id="comment" />
        </label>
        <div class="agree">
          <button onclick="checkbox()" class="checkbox">
            <svg
              id="checkbox"
              width="20"
              height="16"
              viewBox="0 0 20 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="opacity"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.7824 0.676604C19.0824 0.916611 19.131 1.35438 18.891 1.65439L7.76056 15.5674C7.63695 15.7219 7.45339 15.8165 7.25582 15.8274C7.05825 15.8384 6.86537 15.7647 6.72545 15.6248L1.16023 10.0595C0.888565 9.78787 0.888565 9.34741 1.16023 9.07574C1.4319 8.80407 1.87237 8.80407 2.14403 9.07574L7.15967 14.0914L17.8046 0.785247C18.0446 0.485238 18.4823 0.436597 18.7824 0.676604Z"
                fill="#06BEE1"
              />
            </svg>
          </button>
          <span class="agree-text"
            >Я хочу компенсировать комиссию сервиса транзакций 39₼, чтобы
            покрыть стоимость оплатой карты и поддержание сайта</span
          >
        </div>
        <button class="agree-btn">Оплатить картой</button>
      </form>
        `;
      }
    });
  } else {
    document.getElementById("allOffers").classList.remove("hidden");
    document.getElementById("oneOffer").classList.add("hidden");
    isOne = !isOne;
  }
}

function offerValue(sum) {
  document.getElementById("offer").value = `${sum} ₼`;
}

let isCheck = false;

function checkbox() {
  if (!isCheck) {
    document.getElementById("checkbox").classList.remove("opacity");
    isCheck = !isCheck;
  } else {
    document.getElementById("checkbox").classList.add("opacity");
    isCheck = !isCheck;
  }
}
