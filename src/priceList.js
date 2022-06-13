const priceList = [
  {
    service: "Мужская стрижка",
    price: "1 400 ₽",
  },
  {
    service: "Стрижка машинкой",
    price: "от 500 ₽",
  },
  {
    service: "Детская стрижка (с 6 до 10 лет)",
    price: "1 200 ₽",
  },
  {
    service: "Распаривание & бритье опасной бритвой",
    price: "1 800 ₽",
  },
  {
    service: "Бритье головы опасной бритвой",
    price: "1 100 ₽",
  },
  {
    service: "Укладка волос",
    price: "450 ₽",
  },
  {
    service: "Традиционное влажное бритье",
    price: "1 300 ₽",
  },
  {
    service: "Тонирование волос",
    price: "1 000 ₽",
  },
  {
    service: "Моделирование бороды",
    price: "1 000 ₽",
  },
  {
    service: "Окрашивание волос",
    price: "2 500 ₽",
  },
  {
    service: "Уход за бородой",
    price: "700 ₽",
  },
  {
    service: "Камуфляж",
    price: "от 1 000 ₽",
  },
  {
    service: "Воск (1 зона)",
    price: "500 ₽",
  },
  {
    service: "Black Mask + скраб",
    price: "900 ₽",
  },
  {
    service: "Мужской Маникюр / Педикюр",
    price: "1 500-2 000 ₽",
  },
];

export default function PriceList() {
  function renderPriceList(start, end) {
    return priceList.map((obj, index) => {
      return index >= start && index <= end ? (
        <a key={index} href="https://n739325.yclients.com">
          <li href="#">
            <p>{obj.service}</p>
            {/* <span className="dotLeaders"></span> */}
            <p>{obj.price}</p>
          </li>
        </a>
      ) : (
        ""
      );
    });
  }

  return (
    <div id="priceListContainer">
      <ul>{renderPriceList(0, priceList.length / 2)}</ul>
      <ul>{renderPriceList(priceList.length / 2, priceList.length)}</ul>
    </div>
  );
}
