import pictureA from "../assets/images/a.jpg";
import pictureB from "../assets/images/b.jpg";

type Product = {
  id: string;
  name: string;
  price: number;
  picture: string;
};

const products: Product[] = [
  {
    id: "a",
    name: "A",
    price: 10,
    picture: pictureA,
  },
  {
    id: "b",
    name: "B",
    price: 20,
    picture: pictureB,
  },
];

export default products;
