import { menuIcons } from "@/utils/icons";
import { BiBowlHot, BiUserCircle } from "react-icons/bi";
import Icon from "../icon";

const Menu = () => {
  return (
    <div className="h-full w-[80px] text-white flex flex-col items-center justify-between py-4 border-r border-white border-opacity-20">
      <Icon>
        <BiBowlHot size={38} />
      </Icon>

      <div className="flex flex-col gap-4">
        {menuIcons.map((icon, index) => {
          return <Icon key={index}>{icon.img}</Icon>;
        })}
      </div>

      <Icon>
        <BiUserCircle size={38} />
      </Icon>
    </div>
  );
};

export default Menu;
