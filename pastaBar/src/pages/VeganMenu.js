import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";


function VeganMenu() {
  return (
    <div className="menu" id="menu" >
      <h1 className="menuTitle">Vegan</h1>
      <div className="menuList">
        {MenuList.filter((pasta => pasta.type === 'vegan')).map((menuItem, key) => {
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

export default VeganMenu;
