import {
  ChartColumn,
  Home,
  NotepadText,
  Package,
  PackagePlus,
  Settings,
  ShoppingBag,
  UserCheck,
  UserPlus,
  Users,
  type LucideIcon,
} from "lucide-react";
import Profile from "../assets/profile.png";
import Product from "../assets/product.png";

interface NavbarLinks {
  title: string;
  links: Navlist[];
}
interface Navlist {
  label: string;
  icon: LucideIcon;
  path: string;
}

export const navbarLinks: NavbarLinks[] = [
  {
    title: "Dashboard",
    links: [
      {
        label: "Dashboard",
        icon: Home,
        path: "/",
      },
      {
        label: "Analytics",
        icon: ChartColumn,
        path: "/analytics",
      },
      {
        label: "Reports",
        icon: NotepadText,
        path: "/reports",
      },
    ],
  },
  {
    title: "Customers",
    links: [
      {
        label: "Customers",
        icon: Users,
        path: "/customers",
      },
      {
        label: "New customer",
        icon: UserPlus,
        path: "/new-customer",
      },
      {
        label: "Verified customers",
        icon: UserCheck,
        path: "/verified-customers",
      },
    ],
  },
  {
    title: "Products",
    links: [
      {
        label: "Products",
        icon: Package,
        path: "/products",
      },
      {
        label: "New product",
        icon: PackagePlus,
        path: "/new-product",
      },
      {
        label: "Inventory",
        icon: ShoppingBag,
        path: "/inventory",
      },
    ],
  },
  {
    title: "Settings",
    links: [
      {
        label: "Settings",
        icon: Settings,
        path: "/settings",
      },
    ],
  },
];

interface OverviewData {
  name: string;
  total: number;
}
export const overviewData: OverviewData[] = [
  {
    name: "Jan",
    total: 1500,
  },
  {
    name: "Feb",
    total: 2000,
  },
  {
    name: "Mar",
    total: 1000,
  },
  {
    name: "Apr",
    total: 5000,
  },
  {
    name: "May",
    total: 2000,
  },
  {
    name: "Jun",
    total: 5900,
  },
  {
    name: "Jul",
    total: 2000,
  },
  {
    name: "Aug",
    total: 5500,
  },
  {
    name: "Sep",
    total: 2000,
  },
  {
    name: "Oct",
    total: 4000,
  },
  {
    name: "Nov",
    total: 1500,
  },
  {
    name: "Dec",
    total: 2500,
  },
];

interface RecentSale {
  id: number;
  name: string;
  email: string;
  image: string;
  total: number;
}

export const recentSaleData: RecentSale[] = [
  {
    id: 1,
    name: "Olivia Maetin",
    email: "olivia.martin@email.com",
    image: Profile,
    total: 1500,
  },
  {
    id: 2,
    name: "James Smith",
    email: "james.smith@email.com",
    image: Profile,
    total: 2000,
  },
  {
    id: 3,
    name: "Sophia Brown",
    email: "sophia.brown@email.com",
    image: Profile,
    total: 4000,
  },
  {
    id: 4,
    name: "Noah Wilson",
    email: "noah.wilson@email.com",
    image: Profile,
    total: 1500,
  },
  {
    id: 5,
    name: "Emma Jones",
    email: "emma.jones@email.com",
    image: Profile,
    total: 2500,
  },
  {
    id: 6,
    name: "William Taylor",
    email: "william.taylor@email.com",
    image: Profile,
    total: 4500,
  },
  {
    id: 7,
    name: "Isabella Johnson",
    email: "isabella.johnson@email.com",
    image: Profile,
    total: 5300,
  },
];

interface TopProduct {
  number: number;
  name: string;
  image: string;
  description: string;
  price: number;
  status: string;
  rating: number;
}

export const topProducts: TopProduct[] = [
  {
    number: 1,
    name: "Wireless Headphones",
    image: Product,
    description: "High-quality noise-canceling wireless headphones.",
    price: 99.99,
    status: "In Stock",
    rating: 4.5,
  },
  {
    number: 2,
    name: "Smartphone",
    image: Product,
    description: "Latest 5G smartphone excellent camera features.",
    price: 799.99,
    status: "In Stock",
    rating: 4.7,
  },
  {
    number: 3,
    name: "Gaming Laptop",
    image: Product,
    description: "Powerful gaming laptop with high-end graphics.",
    price: 1299.99,
    status: "In Stock",
    rating: 4.8,
  },
  {
    number: 4,
    name: "Smartwatch",
    image: Product,
    description: "Stylish smartwatch with fitness tracking features.",
    price: 199.99,
    status: "Out of Stock",
    rating: 4.4,
  },
  {
    number: 5,
    name: "Bluetooth Speaker",
    image: Product,
    description: "Portable Bluetooth speaker with deep bass sound.",
    price: 59.99,
    status: "In Stock",
    rating: 4.3,
  },
  {
    number: 6,
    name: "4K Monitor",
    image: Product,
    description: "Ultra HD 4K monitor with stunning color accuracy.",
    price: 399.99,
    status: "In Stock",
    rating: 4.6,
  },
  {
    number: 7,
    name: "Mechanical Keyboard",
    image: Product,
    description: "Mechanical keyboard with customizable RGB lighting.",
    price: 89.99,
    status: "In Stock",
    rating: 4.7,
  },
  {
    number: 8,
    name: "Wrieless Mouse",
    image: Product,
    description: "Ergonomic wireless mouse with precision tracking.",
    price: 49.99,
    status: "In Stock",
    rating: 4.5,
  },
  {
    number: 9,
    name: "Action Camera",
    image: Product,
    description: "Waterproof action camera with 4k video recording.",
    price: 249.99,
    status: "In Stock",
    rating: 4.8,
  },
  {
    number: 10,
    name: "External Hard Drive",
    image: Product,
    description: "Portable 2TB external hard drive for data storage.",
    price: 79.99,
    status: "Out of Stock",
    rating: 4.5,
  },
];
