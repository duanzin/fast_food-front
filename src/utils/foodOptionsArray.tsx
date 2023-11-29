import basicImg from "../images/combos/basic.png";
import chickenImg from "../images/combos/chicken.png";
import tripleImg from "../images/combos/triple.png";
import cheeseImg from "../images/combos/xtracheese.png";
import friedImg from "../images/acompanhamentos/friedChicken.png";
import friesImg from "../images/acompanhamentos/fries.png";
import nuggetImg from "../images/acompanhamentos/nuggets.png";
import onionImg from "../images/acompanhamentos/onion.png";
import cokeImg from "../images/bebidas/coke.png";
import fantaImg from "../images/bebidas/fanta.png";
import teaImg from "../images/bebidas/icedTea.png";
import juiceImg from "../images/bebidas/juice.png";
import bananaImg from "../images/sobremesas/banana.png";
import icecreamImg from "../images/sobremesas/icecream.png";
import shakeImg from "../images/sobremesas/milkshake.png";
import sundaeImg from "../images/sobremesas/sundae.png";

type FoodOption = {
  category: string;
  options: {
    name: string;
    image: string;
    price: number;
    description: string;
  }[];
};

const foodOptions: FoodOption[] = [
  {
    category: "combos",
    options: [
      {
        name: "Burgão da casa",
        image: basicImg,
        price: 19.9,
        description: "Hamburger grelhado com queijo e bacon",
      },
      {
        name: "Frango crocante",
        image: chickenImg,
        price: 22.9,
        description: "Hamburger de frango",
      },
      {
        name: "Torre de carne",
        image: tripleImg,
        price: 31.9,
        description: "Hamburger com tres carnes",
      },
      {
        name: "Queijo extra",
        image: cheeseImg,
        price: 24.9,
        description: "Hamburger com queijo extra",
      },
    ],
  },
  {
    category: "acompanhamentos",
    options: [
      {
        name: "Frango frito",
        image: friedImg,
        price: 19.9,
        description: "Prato de frango frito",
      },
      {
        name: "Batata frita",
        image: friesImg,
        price: 8.99,
        description: "Porção de batata frita",
      },
      {
        name: "Nuggets",
        image: nuggetImg,
        price: 14.0,
        description: "Pacote com 10 nuggets",
      },
      {
        name: "Aneis de cebola",
        image: onionImg,
        price: 10.9,
        description: "Porção de aneis de cebola frita",
      },
    ],
  },
  {
    category: "bebidas",
    options: [
      {
        name: "Coca-cola",
        image: cokeImg,
        price: 3.99,
        description: "Copo de coca cola",
      },
      {
        name: "Fanta laranja",
        image: fantaImg,
        price: 3.99,
        description: "Copo de fanta laranja",
      },
      {
        name: "Chá gelado",
        image: teaImg,
        price: 3.99,
        description: "Copo de chá gelado",
      },
      {
        name: "Suco de laranja",
        image: juiceImg,
        price: 3.99,
        description: "Copo de suco de laranja",
      },
    ],
  },
  {
    category: "sobremesas",
    options: [
      {
        name: "Banana split",
        image: bananaImg,
        price: 7.0,
        description: "Banana com sorvete, chantily e calda de chocolate",
      },
      {
        name: "Sorvete de casquinha",
        image: icecreamImg,
        price: 6.9,
        description: "Casquinha com 4 sabores de sorvete",
      },
      {
        name: "Milkshake",
        image: shakeImg,
        price: 6.0,
        description: "Milkshake de chocolate",
      },
      {
        name: "Sundae",
        image: sundaeImg,
        price: 8.0,
        description: "Sundae de chocolate",
      },
    ],
  },
];

export default foodOptions;
