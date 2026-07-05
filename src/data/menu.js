// Fuente estructurada del menú. Datos originales en menu-chapiyork.md
// (única fuente de verdad — actualizar ahí primero y reflejar aquí).
//
// `glutenFree` queda en `false` para todos los platos hasta que el dueño
// confirme explícitamente cuáles son aptos sin gluten.

export const featuredDishes = [
  {
    slug: 'changua-el-dorado',
    name: 'Changua "El Dorado"',
    badge: 'Ganadora · Mejor changua de Bogotá',
    desc: 'Sopa tradicional bogotana, ganadora del concurso a la mejor changua de la ciudad. Leche de almendras, chapi-huevo, pan de yuca, calao, mezcla de quesos vegetales y picadillo de cilantro, tapada con masa de pan naan de cilantro.',
    price: '28.900',
    tilt: 'tilt-l',
  },
  {
    slug: 'chapiyorker',
    name: 'Chapiyorker',
    badge: 'Favorito de la casa',
    desc: 'Pan brioche de carbón activado con pesto criollo de guasca, rábano encurtido, veganesa de alcaparras, mostaza, orellanas apanadas en maíz y aguacate.',
    price: '29.900',
    tilt: 'tilt-r',
  },
  {
    slug: 'trilogia-de-fritos',
    name: 'Trilogía de Fritos',
    badge: 'Ideal para compartir',
    desc: 'Los tres fritos preferidos de Colombia: arepa de chapi-huevo, carimañola de queso y empanada que se cree aborrajado, con hogao y suero costeño.',
    price: '23.500',
    tilt: 'tilt-l',
  },
]

export const menuCategories = [
  {
    slug: 'entradas',
    title: 'Entradas',
    items: [
      { name: 'Empanada que se cree aborrajado', desc: 'Masa de plátano maduro rellena de queso vegano y bocadillo.', price: '7.900', glutenFree: false },
      { name: 'Carimañola de queso', desc: 'Frito del caribe de masa de yuca relleno de mezcla de quesos vegetales.', price: '8.900', glutenFree: false },
      { name: 'Arepa de queso', desc: 'Arepa de maíz blanco ahumada al carbón, rellena de quesos vegetales y ajillo.', price: '9.500', glutenFree: false },
      { name: 'Arepa de chapi huevo', desc: 'Masa de maíz frita rellena de chapi-huevo elaborado con tofu y papa criolla.', price: '8.900', glutenFree: false },
      { name: 'Arepa de queso y seitán', desc: 'Arepa ahumada al carbón con quesos vegetales, seitán de la casa y ajillo.', price: '13.500', glutenFree: false },
      { name: 'Pan de yuca', desc: 'Masa de almidón de yuca y mezcla de quesos vegetales.', price: '7.900', glutenFree: false },
      { name: 'Porción queso vegano', price: '4.500', glutenFree: false },
    ],
  },
  {
    slug: 'para-compartir',
    title: 'Para Compartir',
    items: [
      { name: 'Trilogía de fritos', desc: 'Arepa de chapi-huevo, carimañola de queso y empanada aborrajada, con hogao y suero costeño.', price: '23.500', glutenFree: false },
      { name: 'Patacón acevichado', desc: '4 patacones con ceviche caribeño de carve, alga wakame, salsa de tomate, inglesa, cebolla y pimentón, con aguacate y limón.', price: '23.500', glutenFree: false },
    ],
  },
  {
    slug: 'sopas',
    title: 'Sopas',
    items: [
      { name: 'Changua "El Dorado"', desc: 'Leche de almendras, chapi-huevo, pan de yuca, calao, quesos vegetales y cilantro, tapada con naan de cilantro.', price: '28.900', glutenFree: false },
      { name: 'Cazuela de no mariscos gratinada', desc: 'Caldo caribeño atomatado con algas wakame y 3 proteínas: orellanas, habas y tofu ahumado, gratinada. Con arroz de coco y 2 patacones con hogao.', price: '41.100', glutenFree: false },
      { name: 'Ajiaco', desc: 'Tubérculos andinos con guasca, orellanas desmechadas y arveja. Con arroz blanco, mazorca y ensalada de aguacate y alcaparras.', price: '39.400', glutenFree: false },
    ],
    extra: {
      label: 'Adiciones',
      items: [
        { name: 'Porción de arroz', price: '5.500' },
        { name: 'Porción patacón con hogao', price: '8.500' },
        { name: 'Papas a la francesa', price: '5.000' },
        { name: 'Ensalada de la casa', price: '5.000' },
        { name: 'Orellanas apanadas', price: '9.500' },
      ],
    },
  },
  {
    slug: 'arroces',
    title: 'Arroces',
    items: [
      { name: 'Tacu tacu', desc: 'Fusión del calentao paisa con la técnica del arroz en costra, coronado con lomo saltado de karnita de quinoa y chapi-huevo. Con aguacate y plátano maduro.', price: '33.500', glutenFree: false },
      { name: 'Arroz cimarrón', desc: 'Arroz salvaje del pacífico salteado con orellanas, chorizo y tofu ahumado, hierbas de azotea, bisque de no mariscos y ajonjolí. Con 2 patacones, limón y hogao.', price: '35.900', glutenFree: false },
    ],
  },
  {
    slug: 'los-de-siempre',
    title: 'Los de Siempre',
    items: [
      { name: 'Chapiyorker', desc: 'Pan brioche de carbón con pesto de guasca, rábano encurtido, veganesa de alcaparras, orellanas apanadas y aguacate.', price: '29.900', glutenFree: false },
      { name: 'Sanduche club', desc: 'Pan de semillas, lechuga y tomate con milanesa de quinoa, veganesa de berenjena ahumada, seitán y tocineta veg, bañado en queso cheddar vegetal.', price: '40.900', glutenFree: false },
      { name: 'Mazorcada', desc: 'Mazorca ahumada desgranada con seitán, papa ripio y maíz cancha en salsa barbacoa de mango biche. Gratinada, con pan de semillas y ajillo.', price: '29.900', glutenFree: false },
      { name: 'Perra', desc: 'Pan de perro relleno de seitán ahumado, coleslaw, queso rallado, papa ripio y veganesa ahumada.', price: '26.900', glutenFree: false },
      { name: 'Alitas coliflor barbacoa', desc: 'Salsa ahumada sobre alitas de coliflor, con papas fritas y bastones de apio y zanahoria.', price: '34.900', glutenFree: false },
      { name: 'Alitas coliflor chipotle', desc: 'Alitas bañadas en mezcla aromática y picante, con papas fritas y bastones de apio y zanahoria.', price: '35.900', glutenFree: false },
    ],
    extra: {
      label: 'Combos',
      items: [
        { name: 'Combo: papas a la francesa + bebida', price: '13.500' },
        { name: 'Porción papa a la francesa', price: '5.900' },
      ],
    },
  },
  {
    slug: 'postres',
    title: 'Postres',
    items: [
      { name: 'Brownie melcochudo', price: '8.500', glutenFree: false },
      { name: 'Chocoyork', price: '8.200', glutenFree: false },
      { name: 'Helado Nevarte · 1 bolita', price: '7.900', glutenFree: false },
      { name: 'Helado Nevarte · 2 bolitas (vainilla o chocolate)', price: '14.900', glutenFree: false },
      { name: 'Brownie con helado', price: '14.900', glutenFree: false },
      { name: 'Chocoyork con helado', price: '14.900', glutenFree: false },
    ],
  },
  {
    slug: 'bebidas-frias',
    title: 'Bebidas Frías',
    items: [
      { name: 'Jugos naturales (tamarindo, fresa, mango, feijoa)', price: '9.100' },
      { name: 'Limonada natural', price: '9.100' },
      { name: 'Limonada hierbabuena', price: '9.100' },
      { name: 'Kombucha (maracuyá, lulo o flor de jamaica)', price: '12.000' },
      { name: 'Coca-Cola Original / Zero', price: '9.500' },
      { name: 'Agua manantial', price: '9.100' },
      { name: 'Agua manantial con gas', price: '9.100' },
      { name: 'Malteadas (vainilla-amaretto, chocolate-canela, de temporada)', price: '23.500' },
    ],
  },
  {
    slug: 'la-pola',
    title: 'La Pola',
    items: [
      { name: 'Club Colombia', price: '13.500' },
      { name: 'Corona', price: '14.900' },
      { name: 'Michelada', price: '19.900' },
    ],
  },
  {
    slug: 'bebidas-calientes',
    title: 'Bebidas Calientes',
    items: [
      { name: 'Espresso', price: '6.100' },
      { name: 'Americano', price: '8.100' },
      { name: 'Tinto campesino', price: '8.500' },
      { name: 'Aromática', price: '6.100' },
      { name: 'Capuccino', price: '7.900' },
      { name: 'Latte', price: '9.500' },
      { name: 'Mocaccino', price: '9.700' },
    ],
  },
]
