import Riceimg from "../assets/rice.jpg";
import friedriceimg from "../assets/friedrice.jpg";
import afangimg from "../assets/afang.jpg";
import Egusiimg from "../assets/Egusi.jpg";
import chickenimg from "../assets/chicken.jpg";
import pammyimg from "../assets/pammy.jpg";
import nkwobiimg from "../assets/nkwobi.jpg";




const menu = [
    {
        id: "food-001",
        vendorId: "vendor-001",
        name: "Jollof Rice & Chicken",
        category: "food",
        subcategory: "Rice",
        price: 3500,
        image: Riceimg,
        description:
            "Delicious smoky Nigerian jollof rice served with chicken.",
        rating: 4.9,
        popular: true,
    },

    {
        id: "food-002",
        vendorId: "vendor-001",
        name: "Fried Rice & Chicken",
        category: "food",
        subcategory: "Rice",
        price: 4000,
        image: friedriceimg,
        description:
            "Freshly prepared fried rice served with chicken.",
        rating: 4.8,
        popular: true,
    },

    {
        id: "food-003",
        vendorId: "vendor-001",
        name: "Afang Soup",
        category: "food",
        subcategory: "Soups",
        price: 3000,
        image: afangimg,
        description:
            "Rich and delicious Afang soup prepared with fresh ingredients.",
        rating: 4.9,
        popular: false,
    },

    {
        id: "food-004",
        vendorId: "vendor-001",
        name: "Egusi Soup",
        category: "food",
        subcategory: "Soups",
        price: 3000,
        image: Egusiimg,
        description:
            "Traditional Nigerian egusi soup cooked with delicious spices.",
        rating: 4.8,
        popular: false,
    },

    {
        id: "food-005",
        vendorId: "vendor-001",
        name: "Nkwobi",
        category: "food",
        subcategory: "proteins",
        price: 4000,
        image: nkwobiimg,
        description:
            "Smooth and freshly prepared nkwobi served with your favorite drink.",
        rating: 4.7,
        popular: false,
    },

    {
        id: "food-006",
        vendorId: "vendor-001",
        name: "Chicken",
        category: "food",
        subcategory: "Proteins",
        price: 1500,
        image: chickenimg,
        description:
            "Well-seasoned chicken prepared fresh for your meal.",
        rating: 4.8,
        popular: false,
    },

    {
        id: "food-007",
        vendorId: "vendor-001",
        name: "Local pammy Drink",
        category: "food",
        subcategory: "Drinks",
        price: 700,
        image: pammyimg,
        description:
            "A chilled soft drink to complete your meal.",
        rating: 4.6,
        popular: false,
    },
];

export default menu;
