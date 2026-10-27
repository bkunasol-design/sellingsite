// Coffee data and helpers shared by the coffee, detail and quiz pages.
// ====================================================================
//  YOUR OWN PICTURES: this is the list to edit
//
//  1. Put two pictures in the images folder, named after the coffee:
//       images/nyeri-kamwangi.png        (the square tile)
//       images/nyeri-kamwangi-wide.png   (the wide banner on its own page)
//  2. Add one line for that coffee below. The word says what color the
//     coffee's name should be on each picture:
//       "dark"  = dark name, for pictures that are light in the top-left
//       "light" = white name, for pictures that are dark in the top-left
//  Coffees that are not listed here keep the generated gradient.
// ====================================================================
const pictures = {
  "Gedeb Heirloom Washed":   { tile: "dark", wide: "dark" },
  "Nyeri Kamwangi AA": { tile: "light", wide: "dark" },
  "Pink Bourbon":   { tile: "light", wide: "light" },
  "Sidama Natural": { tile: "dark", wide: "dark" },
  "Dim Light":      { tile: "dark", wide: "dark" },
  "Afterglow":      { tile: "dark", wide: "light" },
  "Quiet Hours":    { tile: "light", wide: "light" },
  "Night Shift":    { tile: "light", wide: "dark" }
};

const coffees = [
  {n:"Gedeb Heirloom Washed", o:"Gedeb, Ethiopia", d:"Heirloom varieties", t:"single", r:"Ultralight", notes:"Jasmine, Lemon, White Peach", w:"250g", p:28, f:"floral", b:"filter", x:2},
  {n:"Nyeri Kamwangi AA", o:"Nyeri, Kenya", d:"SL28, SL34", t:"single", r:"Ultralight", notes:"Nectarine, Maple Syrup, Nutmeg, Banana", w:"250g", p:26, f:"fruity", b:"filter", x:2},
  {n:"Pink Bourbon", o:"Huila, Colombia", d:"Pink Bourbon", t:"single", r:"Light", notes:"Red grape, hibiscus, honey", w:"250g", p:24, f:"sweet", b:"any", x:1},
  {n:"Sidama Natural", o:"Sidama, Ethiopia", d:"Heirloom varieties", t:"single", r:"Light", notes:"Blueberry, strawberry jam, cream soda", w:"250g", p:27, f:"fruity", b:"filter", x:3},
  {n:"Dim Light", o:"Colombia + Guatemala", d:"House blend", t:"blend", r:"Light", notes:"Caramel, stewed plum, milk chocolate", w:"340g", p:21, f:"sweet", b:"any", x:1},
  {n:"Afterglow", o:"Kenya + Ethiopia", d:"Filter blend", t:"blend", r:"Ultralight", notes:"Grapefruit, rhubarb, black tea", w:"250g", p:24, f:"complex", b:"filter", x:2},
  {n:"Quiet Hours", o:"Brazil + Ethiopia", d:"Espresso blend", t:"blend", r:"Light", notes:"Brown sugar, cherry, hazelnut", w:"340g", p:23, f:"sweet", b:"espresso", x:1},
  {n:"Night Shift", o:"Ethiopia + Brazil", d:"Espresso blend", t:"blend", r:"Light", notes:"Raspberry, cocoa, orange peel", w:"340g", p:25, f:"fruity", b:"espresso", x:2},
  {n:"Misty Mountain Natural Geisha Lot 31", o:"Panama", d:"Geisha, natural", t:"reserve", r:"Ultralight", notes:"Passionfruit, lychee, honeysuckle, red berries", w:"100g", p:127, f:"fruity", b:"filter", x:3},
  {n:"Boquete Geisha", o:"Boquete, Panama", d:"Geisha, washed", t:"reserve", r:"Ultralight", notes:"Orange blossom, lemongrass, peach tea", w:"100g", p:72, f:"floral", b:"filter", x:2},
  {n:"Gesha Village", o:"Bench Maji, Ethiopia", d:"Gesha, natural", t:"reserve", r:"Ultralight", notes:"Rose, mango, honeysuckle", w:"100g", p:58, f:"floral", b:"filter", x:3},
  {n:"Panama Laurina NB-8", o:"Boquete, Panama", d:"Laurina, washed", t:"reserve", r:"Ultralight", notes:"Lemon verbena, honeydew, white tea", w:"100g", p:64, f:"floral", b:"filter", x:3}
];
const hues = {
  "Gedeb Heirloom Washed": ["#18211d","#6f7f5c","#f4e6d0","#d9c36a"],
  "Nyeri Kamwangi AA": ["#150d24","#5a2358","#f2c4a0","#e0562b"],
  "Pink Bourbon": ["#220d1a","#8f2650","#f1c98a","#d94a72"],
  "Sidama Natural": ["#12183a","#4b3f9a","#f3e0e2","#e24a68"],
  "Dim Light": ["#180f17","#5b2f4a","#e3b57d","#b5654a"],
  "Afterglow": ["#18111a","#a83f55","#f6d4b9","#f0804f"],
  "Quiet Hours": ["#150e0c","#6d3329","#dcbb91","#b0583f"],
  "Night Shift": ["#130b12","#8a2250","#f3c590","#e6802c"],
  "Boquete Geisha": ["#16211d","#8d9f55","#fbe9d0","#e8c777"],
  "Gesha Village": ["#1f1217","#b9475d","#fbeacb","#f2a83a"],
  "Misty Mountain Natural Geisha Lot 31": ["#111a26","#4d6a85","#f3e3df","#e0405a"],
  "Panama Laurina NB-8": ["#101b1a","#4f8f86","#f4f1d6","#d6e07a"]
};
const more = {
  "Gedeb Heirloom Washed": {
    s:"This is a Washed Yirgacheffe coffee from the subregion of Gedeb and the YCFCU cooperative. This area is also known as the Gedeo Zone and produces several lots of coffee each year, of varying quality. The very best grade for an Ethiopia is Grade 1, but the mill decided to produce a special microlot better than Grade 1, so they are calling this Grade 0, and claiming zero defects. In fairness, I can't find any defects, so I think they achieved their goal. We really like this one. It has really zippy acidity, nice mouthfeel, some floral notes, no fermented or earthy notes, and it's pretty easy to roast. You don't want to roast it too far out of the first cracks. This is where you find theflavors of citrus, sugarcane and floral undertones. Drink it slowly and methodically and enjoy the flashes of different fruity and floral flavors in each sip.", 
    p:"Washed", 
    a:"1,900 to 2,200 m", 
    h:"Nov to Jan", 
    k:[4,3,1], 
    b:["pour","V60",15,250,96,"medium fine","2:45 to 3:15","Pour gently to keep the florals clean."]
  },

  "Nyeri Kamwangi AA": {
    s:"The Kamwangi cooperative in Kirinyaga is consistently one of the highest quality producing wet mills in Kenya. This year’s harvest is no different, showcasing dense sugars and unique complex flavors similar to nectarines, banana and maple. Due to the clever isolation system while sorting coffees though mass, this AA lot is the largest and most concentrated of all the coffees washed in this year’s production.", 
    p:"Double washed", 
    a:"1,700 to 1,900 m", 
    h:"Oct to Dec", 
    k:[5,3,2], 
    b:["pour","Flat bottom dripper",15,250,96,"medium fine","3:00 to 3:30","Let the cup cool a little. The fruit gets sweeter."]
  },

  "Pink Bourbon": {
    s:"A rare Bourbon variety from the high slopes of Huila, Colombia, grown on family farms and dried slowly. It is the friendliest coffee we roast, with a jammy sweetness and a soft floral edge.", 
    p:"Washed", 
    a:"1,700 to 1,900 m", 
    h:"Apr to Jun", k:[3,4,3], 
    b:["pour","Cone dripper",15,250,95,"medium","2:45 to 3:15","Forgiving, so a good first light roast."]},
  "Sidama Natural": {
    s:"Sidama cherries are dried whole on raised beds and turned by hand for weeks, so the fruit sugars soak into the bean. The cup is loud and jammy. We roast it light so it stays bright instead of boozy.", 
    p:"Natural", 
    a:"1,900 to 2,200 m", 
    h:"Nov to Jan", 
    k:[3,5,3], 
    b:["pour","Flat bottom dripper",15,240,94,"medium","2:30 to 3:00","Slightly cooler water keeps the jam from turning winey."]
  },

  "Dim Light": {
    s:"Our house blend. Colombian sweetness and Guatemalan structure, roasted light so both still taste like where they came from. It is the coffee to reach for most days, and it is friendly in nearly any brewer.", 
    p:"Washed", 
    a:"1,500 to 1,900 m", 
    h:"Year round", 
    k:[3,4,3], 
    b:["pour","Batch or drip machine",60,1000,94,"medium","5:00 to 6:00","Use 60 g per litre for a full pot."]
  },

  "Afterglow": {
    s:"A filter blend built around a Kenyan lot for its fruit and a washed Ethiopian lot for florals and polish. It tastes like bright grapefruit tea that stays interesting as it cools. Roasted ultralight on purpose.", 
    p:"Washed", 
    a:"1,700 to 2,200 m", 
    h:"Oct to Jan", 
    k:[5,3,2], 
    b:["pour","V60",15,250,96,"medium fine","2:45 to 3:15","Use soft, filtered water so the acidity can shine."]
  },

  "Quiet Hours": {
    s:"Made for espresso. A Brazilian base brings brown sugar and nuts, and an Ethiopian lot adds cherry and lift. Light roasts can be sharp in the portafilter, so we blended this one to be sweet and easy.", 
    p:"Natural and washed", 
    a:"1,100 to 2,100 m", 
    h:"Year round", 
    k:[3,4,4], 
    b:["espresso","Espresso",18,40,94,"fine","28 to 32 s","Lovely with milk, it keeps its sweetness."]
  },
  "Night Shift": {
    s:"A fruit-forward espresso blend: natural Ethiopian for raspberry and Brazilian for cocoa and body. It pulls bright and tastes like orange peel on dark chocolate. It stays lively in milk without turning roasty.", 
    p:"Natural", 
    a:"1,100 to 2,100 m", 
    h:"Year round", 
    k:[4,4,4], 
    b:["espresso","Espresso",18,42,95,"fine","30 to 34 s","Run it a touch longer to calm the acidity."]
  },

  "Boquete Geisha": {
    s:"Geisha from the volcanic slopes of Boquete, Panama, grown in shade and picked by hand in several passes. It is the most delicate coffee we sell, closer to a perfumed tea than to coffee. Brew it gently.", 
    p:"Washed", 
    a:"1,600 to 1,800 m", 
    h:"Dec to Mar", 
    k:[4,3,1], 
    b:["pour","V60",12,200,93,"medium fine","2:30 to 3:00","Cooler water keeps the lemongrass sweet."]
  },

  "Gesha Village": {
    s:"Gesha grows in the forest near Bench Maji in southwest Ethiopia, the region where the variety was first collected. Dried carefully as a natural, it is lush, floral and layered. Brew it slowly and let it cool.", 
    p:"Natural", 
    a:"1,900 to 2,100 m", 
    h:"Dec to Feb", 
    k:[4,5,2], 
    b:["pour","V60",12,200,92,"medium","2:30 to 3:00","Taste it at three different temperatures."]
  },

  "Misty Mountain Natural Geisha Lot 31": {
    s:"Misty Mountain is a select plot on the Longboard Coffee estate in Panama, high on a slope where cool mist slows the cherries as they ripen. Lot 31 is a natural Geisha, dried whole so the sugars concentrate in the bean. The cup is vibrant and tropical, with passionfruit and lychee over honeysuckle and red berries.", 
    p:"Natural", 
    a:"1,700 to 1,850 m", 
    h:"Dec to Mar", 
    k:[4,5,4], 
    b:["pour","V60",12,200,92,"medium","2:30 to 3:00","Go a little cooler on the water to keep the florals above the fruit."]
  },

  "Panama Laurina NB-8": {
    s:"This Laurina comes from Camiseta, the Suárez family's farm in El Salto, the cool high ground above Boquete on the road up to Volcán Barú. The family named this lot La Leyenda, the legend, for their father, who with their mother pioneered these farms and planted the first Laurina trees at the estate 70 years ago. The seed is still that heirloom line.It was picked on 27 December 2025 at 1780 masl. The cherries were floated and sorted by hand, then sealed in tanks for 48 hours before drying whole. They dried 27 days in the shade on African beds, cooled by the mountain breeze, and finished with 8 hours in a static dryer at 39 °C. Laurina, also known as Bourbon Pointu, is a natural mutation of Bourbon with small pointed beans and naturally low caffeine.We taste mandarin and grape, panela sweetness, and a green tea finish.", 
    p:"Natural", 
    a:"1,700 to 1,800 m", 
    h:"Dec to Jan", 
    k:[4,4,1], 
    b:["pour","V60",12,200,92,"medium fine","2:30 to 3:00","Brew it a little cooler and let the tea-like sweetness lead."]
  }
};

const slug = n => n.toLowerCase().replace(/[^a-z0-9]+/g, "-");
const money = c => `${c.w}, $${c.p}`;

// Tile with the name in the top-left corner. Uses your picture if the coffee is in the "pictures" list at the top of this file.
function art(c, cls = "") {
  const [a, b, d, e] = hues[c.n];
  const vars = `--g1:${a};--g2:${b};--g3:${d};--g4:${e}`;
  const p = pictures[c.n];
  if (!p) return `<div class="art ${cls}" style="${vars}"><span>${c.n}</span></div>`;
  const wide = cls.includes("wide");
  const file = `images/${slug(c.n)}${wide ? "-wide" : ""}.png`;
  const dark = (wide ? p.wide : p.tile) === "dark" ? "dark" : "";
  // If the picture can't be found, say where we looked in the console and fall back to the gradient
  return `<div class="art pic ${dark} ${cls}" style="${vars}"><img src="${file}" alt="" onerror="console.warn('Picture not found:', this.src); this.parentNode.classList.remove('pic', 'dark'); this.remove()"><span>${c.n}</span></div>`;
}
function card(c) {
  return `<a class="card" href="coffee-detail.html?c=${slug(c.n)}">${art(c)}<div class="cap"><em>${c.notes}</em><span>${money(c)}</span></div></a>`;
}