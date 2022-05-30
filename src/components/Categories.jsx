import React from 'react';

function Categories() {
  const [activeCategory, setCategory] = React.useState(0);
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <div className="categories">
      <ul>
        {categories.map((value, idx) => (
          <li
            key={idx}
            onClick={() => setCategory(idx)}
            className={activeCategory === idx ? 'active' : ''}>
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
