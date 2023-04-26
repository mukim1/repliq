import {
  MdOutlineInventory,
  MdOutlineLocalOffer,
  MdOutlineCategory,
  MdAnalytics,
} from "react-icons/md";
import { AiOutlineBorder } from "react-icons/ai";
import { FaBuffer } from "react-icons/fa";
import { BsPersonFill } from "react-icons/bs";
import { ImHome } from "react-icons/im";
import { RiSecurePaymentLine } from "react-icons/ri";
import { FcSettings } from "react-icons/fc";

export const linkItem = [
  {
    id: 1,
    name: "Dashboard",
    path: "/",
    icon: <ImHome />,
  },
  {
    id: 2,
    name: "Analytics",
    path: "/analytics",
    icon: <MdAnalytics />,
  },
  {
    id: 3,
    name: "Orders",
    path: "/order/orders",
    icon: <AiOutlineBorder />,
    subLink: [
      {
        id: 1,
        name: "Orders",
        path: "/order/orders",
      },
      {
        id: 2,
        name: "Create order",
        path: "/order/create",
      },
    ],
  },
  {
    id: 4,
    name: "Products",
    path: "/product/add",
    icon: <FaBuffer />,
    subLink: [
      {
        id: 1,
        name: "Add Product",
        path: "/product/add",
      },
      {
        id: 3,
        name: "Add By Image",
        path: "/product/addbyimg",
      },
      {
        id: 2,
        name: "Product List",
        path: "/product/list",
      },
    ],
  },
  {
    id: 5,
    name: "Category",
    path: "/category",
    icon: <MdOutlineCategory />,
  },
  {
    id: 6,
    name: "Inventory",
    path: "/inventory/add",
    icon: <MdOutlineInventory />,
    subLink: [
      {
        id: 1,
        name: "Add New Record",
        path: "/inventory/add",
      },
      {
        id: 2,
        name: "History",
        path: "/inventory/history",
      },
    ],
  },
  {
    id: 7,
    name: "Prome",
    path: "/promo",
    icon: <MdOutlineLocalOffer />,
  },
  {
    id: 8,
    name: "Payment",
    path: "/payment",
    icon: <RiSecurePaymentLine />,
  },
  {
    id: 9,
    name: "Profile",
    path: "/profile",
    icon: <BsPersonFill />,
  },
  {
    id: 10,
    name: "Settings",
    path: "/settings",
    icon: <FcSettings />,
  },
];
