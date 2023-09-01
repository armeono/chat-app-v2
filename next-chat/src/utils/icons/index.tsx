import { BiMessageDetail, BiCog } from "react-icons/bi";

export const menuIcons = [
  {
    type: "message",
    img: <BiMessageDetail size={38} />,
    link: "/chat",
  },
  {
    type: "settings",
    img: <BiCog size={38} />,
    link: "/settings",
  },
];
