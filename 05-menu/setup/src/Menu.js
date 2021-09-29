import React from "react";

const Menu = ({ items, selected }) => {
  console.log("🚀TCL: ~ file: Menu.js ~ line 4 ~ Menu ~ selected", selected);
  const filterItem = items.filter((item) => {
    return item.category === selected;
  });
  console.log(
    "🚀TCL: ~ file: Menu.js ~ line 6 ~ Menu ~ filterItem",
    filterItem
  );
  return (
    <div className="section-center">
      {/* {items && selected === "all"
        ? items.map(({ id, img, category, title, desc, price }) => (
            <article className="menu-item" key={id}>
              <img src={img} alt={title} className="photo" />
              <div className="item-info">
                <header>
                  <h4>{title}</h4>
                  <h4 className="price">${price}</h4>
                </header>
                <p className="item-text">{desc}</p>
              </div>
            </article>
          ))
        : items
            .filter((selectedItem) => selectedItem === selected.category)
            .map(({ id, img, category, title, desc, price }) => (
              <article className="menu-item" key={id}>
                <img src={img} alt={title} className="photo" />
                <div className="item-info">
                  <header>
                    <h4>{title}</h4>
                    <h4 className="price">${price}</h4>
                  </header>
                  <p className="item-text">{desc}</p>
                </div>
              </article>
            ))} */}
      {items
        .filter((item) => {
          if (selected === "all") {
            return item;
          }
          return item.category === selected;
        })
        .map(({ id, img, title, desc, price }) => (
          <article className="menu-item" key={id}>
            <img src={img} alt={title} className="photo" />
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">${price}</h4>
              </header>
              <p className="item-text">{desc}</p>
            </div>
          </article>
        ))}
    </div>
  );
};

export default Menu;
