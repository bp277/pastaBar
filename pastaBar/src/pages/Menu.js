import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";


function Menu() {
  return (
    <div className="menu" id="menu" >
      <h1 className="menuTitle">Standard</h1>
      <div className="menuList">
        {MenuList.filter((pasta => pasta.type === 'standard')).map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              ingredients={menuItem.ingredients}
              price={menuItem.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
