// Coffee data and helpers shared by the coffee, detail and quiz pages.
const coffees = [
  {n:"Gedeb Washed", o:"Gedeb, Ethiopia", d:"Heirloom varieties", t:"single", r:"Ultralight", notes:"Jasmine, bergamot, white peach", w:"250g", p:28, f:"floral", b:"filter", x:2},
  {n:"Pink Bourbon", o:"Huila, Colombia", d:"Pink Bourbon", t:"single", r:"Light", notes:"Red grape, hibiscus, honey", w:"250g", p:24, f:"sweet", b:"any", x:1},
  {n:"Dim Light", o:"Colombia + Guatemala", d:"House blend", t:"blend", r:"Light", notes:"Caramel, stewed plum, milk chocolate", w:"340g", p:21, f:"sweet", b:"any", x:1},
  {n:"Afterglow", o:"Kenya + Ethiopia", d:"Filter blend", t:"blend", r:"Ultralight", notes:"Grapefruit, rhubarb, black tea", w:"250g", p:24, f:"complex", b:"filter", x:2},
  {n:"Misty Mountain Natural Geisha Lot 31", o:"Panama", d:"Geisha, natural", t:"reserve", r:"Ultralight", notes:"Passionfruit, lychee, honeysuckle, red berries", w:"100g", p:127, f:"fruity", b:"filter", x:3},
  {n:"Panama Laurina", o:"Boquete, Panama", d:"Laurina, washed", t:"reserve", r:"Ultralight", notes:"Lemon verbena, honeydew, white tea", w:"100g", p:64, f:"floral", b:"filter", x:3}
];
const hues = {
  "Gedeb Washed": ["#18211d","#6f7f5c","#f4e6d0","#d9c36a"],
  "Pink Bourbon": ["#220d1a","#8f2650","#f1c98a","#d94a72"],
  "Dim Light": ["#180f17","#5b2f4a","#e3b57d","#b5654a"],
  "Afterglow": ["#18111a","#a83f55","#f6d4b9","#f0804f"],
  "Misty Mountain Natural Geisha Lot 31": ["#111a26","#4d6a85","#f3e3df","#e0405a"],
  "Panama Laurina": ["#101b1a","#4f8f86","#f4f1d6","#d6e07a"]
};
const more = {
  "Gedeb Washed": {s:"Grown by smallholders around Gedeb in southern Ethiopia, where heirloom trees grow tall in forest shade. Cherries are picked ripe, washed and dried slowly on raised beds. We roast just to first crack so the jasmine stays loud.", p:"Washed", a:"1,900 to 2,200 m", h:"Nov to Jan", k:[4,3,1], b:["pour","V60",15,250,96,"medium fine","2:45 to 3:15","Pour gently to keep the florals clean."]},
  "Pink Bourbon": {s:"A rare Bourbon variety from the high slopes of Huila, Colombia, grown on family farms and dried slowly. It is the friendliest coffee we roast, with a jammy sweetness and a soft floral edge.", p:"Washed", a:"1,700 to 1,900 m", h:"Apr to Jun", k:[3,4,3], b:["pour","Cone dripper",15,250,95,"medium","2:45 to 3:15","Forgiving, so a good first light roast."]},

  "Dim Light": {s:"Our house blend. Colombian sweetness and Guatemalan structure, roasted light so both still taste like where they came from. It is the coffee to reach for most days, and it is friendly in nearly any brewer.", p:"Washed", a:"1,500 to 1,900 m", h:"Year round", k:[3,4,3], b:["pour","Batch or drip machine",60,1000,94,"medium","5:00 to 6:00","Use 60 g per litre for a full pot."]},
  "Afterglow": {s:"A filter blend built around a Kenyan lot for its fruit and a washed Ethiopian lot for florals and polish. It tastes like bright grapefruit tea that stays interesting as it cools. Roasted ultralight on purpose.", p:"Washed", a:"1,700 to 2,200 m", h:"Oct to Jan", k:[5,3,2], b:["pour","V60",15,250,96,"medium fine","2:45 to 3:15","Use soft, filtered water so the acidity can shine."]},
  
  "Misty Mountain Natural Geisha Lot 31": {s:"Misty Mountain is a select plot on the Longboard Coffee estate in Panama, high on a slope where cool mist slows the cherries as they ripen. Lot 31 is a natural Geisha, dried whole so the sugars concentrate in the bean. The cup is vibrant and tropical, with passionfruit and lychee over honeysuckle and red berries.", p:"Natural", a:"1,700 to 1,850 m", h:"Dec to Mar", k:[4,5,4], b:["pour","V60",12,200,92,"medium","2:30 to 3:00","Go a little cooler on the water to keep the florals above the fruit."]},
  "Panama Laurina": {s:"Laurina, also called Bourbon Pointu, is a natural mutation of Bourbon first found on Reunion Island. Its slim, pointed beans carry about half the caffeine of most arabica and make a soft, tea-like cup. This rare lot grows in Boquete, Panama, and we roast it ultralight so it stays delicate.", p:"Washed", a:"1,600 to 1,800 m", h:"Jan to Mar", k:[4,4,1], b:["pour","V60",12,200,92,"medium fine","2:30 to 3:00","Brew it a little cooler and let the tea-like sweetness lead."]}
};

const slug = n => n.toLowerCase().replace(/[^a-z0-9]+/g, "-");
const money = c => `${c.w}, $${c.p}`;

function art(c, cls = "") {
  const [a, b, d, e] = hues[c.n];
  return `<div class="art ${cls}" style="--g1:${a};--g2:${b};--g3:${d};--g4:${e}"><span>${c.n}</span></div>`;
}
function card(c) {
  return `<a class="card" href="coffee-detail.html?c=${slug(c.n)}">${art(c)}<div class="cap"><em>${c.notes}</em><span>${money(c)}</span></div></a>`;
}
