import acomImg from "../images/categorias/acompanhamento.png";
import bebidaImg from "../images/categorias/bebidas.png";
import comboImg from "../images/categorias/combos.png";
import sobreImg from "../images/categorias/sobremesa.png";

type categoryArrayType = {
    category: string;
    image: string;
  };

const categoryArray: categoryArrayType[] = [
  {
    category: "Combos",
    image: comboImg,
  },
  {
    category: "Acompanhamentos",
    image: acomImg,
  },
  {
    category: "Bebidas",
    image: bebidaImg,
  },
  {
    category: "Sobremesas",
    image: sobreImg,
  },
];

export default categoryArray;
