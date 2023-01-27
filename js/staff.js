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
          <button class="staff-btn">
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
