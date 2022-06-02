import React from 'react';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';

import { SearchContext } from '../App';

function Home() {
  let [items, setItems] = React.useState([]);
  let [isLoad, setLoadStatus] = React.useState(false);

  const { searchValue } = React.useContext(SearchContext);

  const pizzas = items.map((item) => <PizzaBlock key={item.imageUrl} {...item} />);
  const skeleton = [...new Array(6)].map((_, index) => <Skeleton key={index} />);

  React.useEffect(() => {
    const search = searchValue ? `?search=${searchValue}` : '';

    fetch(`https://62939adb089f87a57ac32c89.mockapi.io/Pizzas${search}`)
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setLoadStatus(true);
      });
  }, [searchValue]);

  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoad ? pizzas : skeleton}</div>
    </>
  );
}

export default Home;
