const pictures = {
  "Gedeb Heirloom Washed":   { tile: "dark", wide: "dark" },
  "Nyeri Kamwangi AA": { tile: "light", wide: "dark" },
  "Pink Bourbon":   { tile: "light", wide: "light" },
  "Sidama Natural": { tile: "dark", wide: "dark" },
  "Dim Light":      { tile: "dark", wide: "dark" },
  "Afterglow":      { tile: "dark", wide: "light" },
  "Quiet Hours":    { tile: "light", wide: "light" },
  "Night Shift":    { tile: "light", wide: "dark" },
  "Boquete Gesha": {tile: "light", wide: "light"},
  "Misty Mountain Natural Gesha Lot 31": {tile: "light", wide: "light"},
  "Gesha Village": {tile: "light", wide: "light"},
  "Panama Laurina NB-8": {tile: "light", wide: "light"}
};

const coffees = [
  {n:"Gedeb Heirloom Washed", o:"- Gedeb, Ethiopia", d:"- Heirloom", t:"single", r:"- Ultralight", notes:"Jasmine, Lemon, White Peach", w:"250g", p:28, f:"floral", b:"filter", x:2},
  {n:"Nyeri Kamwangi AA", o:"- Nyeri, Kenya", d:"- SL28 & SL34", t:"single", r:"- Ultralight", notes:"Nectarine, Maple Syrup, Nutmeg, Banana", w:"250g", p:26, f:"fruity", b:"filter", x:2},
  {n:"Pink Bourbon", o:"- Huila, Colombia", d:"- Pink Bourbon", t:"single", r:"- Light", notes:"Red grape, hibiscus, honey", w:"250g", p:24, f:"sweet", b:"any", x:1},
  {n:"Sidama Natural", o:"- Sidama, Ethiopia", d:"- Heirloom", t:"single", r:"- Light", notes:"Blueberry, strawberry jam, cream soda", w:"250g", p:27, f:"fruity", b:"filter", x:3},
  {n:"Dim Light", o:"- Colombia + Guatemala", d:"- House blend", t:"blend", r:"- Light", notes:"Caramel, stewed plum, milk chocolate", w:"340g", p:21, f:"sweet", b:"any", x:1},
  {n:"Afterglow", o:"- Kenya + Ethiopia", d:"- Filter blend", t:"blend", r:"- Ultralight", notes:"Grapefruit, rhubarb, black tea", w:"250g", p:24, f:"complex", b:"filter", x:2},
  {n:"Quiet Hours", o:"- Brazil + Ethiopia", d:"- Espresso blend", t:"blend", r:"- Light", notes:"Brown sugar, cherry, hazelnut", w:"340g", p:23, f:"sweet", b:"espresso", x:1},
  {n:"Night Shift", o:"- Ethiopia + Brazil", d:"- Espresso blend", t:"blend", r:"- Light", notes:"Raspberry, cocoa, orange peel", w:"340g", p:25, f:"fruity", b:"espresso", x:2},
  {n:"Misty Mountain Natural Gesha Lot 31", o:"- Boquete, Panama", d:"Gesha", t:"reserve", r:"- Ultralight", notes:"Passionfruit, lychee, honeysuckle, red berries", w:"50g", p:127, f:"fruity", b:"filter", x:3},
  {n:"Boquete Gesha", o:"- Boquete, Panama", d:"- Gesha", t:"reserve", r:"- Ultralight", notes:"Orange blossom, lemongrass, peach tea", w:"100g", p:72, f:"floral", b:"filter", x:2},
  {n:"Gesha Village", o:"- Narsha, Bench Maji, Ethiopia", d:"- Gesha", t:"reserve", r:"- Light", notes:"red berries, lemon, honeysuckle", w:"100g", p:58, f:"floral", b:"filter", x:3},
  {n:"Panama Laurina NB-8", o:"- Boquete, Panama", d:"- Laurina", t:"reserve", r:"- Ultralight", notes:"Lemon verbena, honeydew, white tea", w:"100g", p:64, f:"floral", b:"filter", x:3}
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
  "Boquete Gesha": ["#16211d","#8d9f55","#fbe9d0","#e8c777"],
  "Gesha Village": ["#1f1217","#b9475d","#fbeacb","#f2a83a"],
  "Misty Mountain Natural Gesha Lot 31": ["#111a26","#4d6a85","#f3e3df","#e0405a"],
  "Panama Laurina NB-8": ["#101b1a","#4f8f86","#f4f1d6","#d6e07a"]
};
const more = {
  "Gedeb Heirloom Washed": {
    s:"This is a Washed Yirgacheffe coffee from the subregion of Gedeb and the YCFCU cooperative. This area is also known as the Gedeo Zone and produces several lots of coffee each year, of varying quality. The very best grade for an Ethiopia is Grade 1, but the mill decided to produce a special microlot better than Grade 1, so they are calling this Grade 0, and claiming zero defects. In fairness, I can't find any defects, so I think they achieved their goal. We really like this one. It has really zippy acidity, nice mouthfeel, some floral notes, no fermented or earthy notes, and it's pretty easy to roast. You don't want to roast it too far out of the first cracks. This is where you find theflavors of citrus, sugarcane and floral undertones. Drink it slowly and methodically and enjoy the flashes of different fruity and floral flavors in each sip.", 
    p:"- Washed", 
    a:"- 1,900 to 2,200 m", 
    h:"- Nov to Jan", 
    k:[4,3,1], 
    b:["pour","V60",15,250,96,"medium fine","2:45 to 3:15","Pour gently to keep the florals clean."]
  },

  "Nyeri Kamwangi AA": {
    s:"Kamwangi is a factory, which is Kenya’s word for a washing station. It sits on the slopes of Mount Kenya, where about 1,500 smallholders farm plots averaging half an acre. It is one of two factories run by the New Ngariama Cooperative Society, and we look forward to its AA lot every year. AA is the largest bean size of the harvest, and this lot is dense, sweet and concentrated. Kenya’s double wash adds a long soak in tanks after the first wash, which builds acidity and fruit complexity. That helps explain the nectarine, banana and maple syrup, with a little nutmeg on the end. Acidity is big and the body is light. We roast it ultralight to keep the SL28 and SL34 clarity. Brew it as a filter and let it cool a little before you decide what you think.", 
    p:"- Double washed", 
    a:"- 1,700 to 1,900 m", 
    h:"- Oct to Dec", 
    k:[5,3,2], 
    b:["pour","Flat bottom dripper",15,250,96,"medium fine","3:00 to 3:30","Let the cup cool a little. The fruit gets sweeter."]
  },

  "Pink Bourbon": {
    s:"This comes from the high slopes of Huila in southern Colombia, from family farms that wash the coffee and dry it slowly. The name is a bit of a misnomer. Genetic testing has linked the variety to Ethiopian landrace types rather than true Bourbon, which is probably why roasters compare its cup to Geisha, Ethiopian and Kenyan coffees. Ours is jammy and gentle: red grape and hibiscus over a honey finish, with medium acidity and body. It’s the friendliest coffee we roast and a good first light roast for anyone still deciding if they like them. Pour-over or AeroPress will show it off.", 
    p:"- Washed", 
    a:"- 1,700 to 1,900 m", 
    h:"- Apr to Jun", k:[3,4,3], 
    b:["pour","Cone dripper",15,250,95,"medium","2:45 to 3:15","Forgiving, so a good first light roast."]
  },

  "Sidama Natural": {
    s:"n Sidama, southern Ethiopia, farmers dry whole cherries on raised beds and turn them by hand for weeks. The fruit sugars soak into the bean as it dries. These are heirloom varieties grown at 1,900 to 2,200 meters and picked from November to January. The cup is loud and jammy: blueberry, strawberry jam and cream soda, with sweetness at 5/5. Some naturals drift into boozy, fermented territory. We roast light so this one stays bright and clean. Brew it on a filter, or pour it over ice if you want the fruit front and center.", 
    p:"- Natural", 
    a:"- 1,900 to 2,200 m", 
    h:"- Nov to Jan", 
    k:[3,5,3], 
    b:["pour","Flat bottom dripper",15,240,94,"medium","2:30 to 3:00","Slightly cooler water keeps the jam from turning winey."]
  },

  "Dim Light": {
    s:"Dim Light is our house blend, the bag we reach for on an ordinary morning. The Colombian coffee brings the sweetness, with caramel and stewed plum. The Guatemalan coffee brings the structure, with a milk chocolate base. Both are washed and grown at 1,500 to 1,900 meters. We roast light enough that each still tastes like where it came from. It’s balanced and forgiving in almost any brewer, whether drip, pour-over, French press or moka pot. It’s also the one we’d hand to a friend who doesn’t drink much specialty coffee.", 
    p:"- Washed", 
    a:"- 1,500 to 1,900 m", 
    h:"- Year round", 
    k:[3,4,3], 
    b:["pour","Batch or drip machine",60,1000,94,"medium","5:00 to 6:00","Use 60 g per litre for a full pot."]
  },

  "Afterglow": {
    s:"Afterglow is our filter blend, built from two coffees that need each other. A Kenyan lot brings the fruit, with grapefruit and rhubarb and Kenya’s punchy acidity. A washed Ethiopian lot adds florals and polish. Together they taste like bright grapefruit tea, and the black tea note grows as the cup cools. We roast it ultralight on purpose, so expect high acidity and a light body. Use a paper filter and a slow pour, and keep sipping as it drops in temperature.", 
    p:"- Washed", 
    a:"- 1,700 to 2,200 m", 
    h:"- Oct to Jan", 
    k:[5,3,2], 
    b:["pour","V60",15,250,96,"medium fine","2:45 to 3:15","Use soft, filtered water so the acidity can shine."]
  },

  "Quiet Hours": {
    s:"This is our espresso for people who think light roasts taste sharp. A Brazilian base brings brown sugar, hazelnut and body, and an Ethiopian lot adds cherry and lift. We blended for sweetness so it stays easy in the portafilter. It’s friendly straight or in milk. If a shot tastes sharp, grind a touch finer and let it run a little longer. I would also say that this is also one of are darkest(still pretty light) roast profiles", 
    p:"- Natural and washed", 
    a:"- 1,100 to 2,100 m", 
    h:"- Year round", 
    k:[3,4,4], 
    b:["espresso","Espresso",18,40,94,"fine","28 to 32 s","Lovely with milk, it keeps its sweetness."]
  },

  "Night Shift": {
    s:"Night Shift is our fruit-forward espresso. A natural Ethiopian lot brings the raspberry, and a Brazilian coffee brings cocoa and body. It pulls bright and tastes like orange peel on dark chocolate. It has enough weight to stay lively in milk without turning roasty. Acidity, sweetness and body all sit at 4/5, so it works as a straight shot, a flat white, or anything in between.", 
    p:"- Natural", 
    a:"- 1,100 to 2,100 m", 
    h:"- Year round", 
    k:[4,4,4], 
    b:["espresso","Espresso",18,42,95,"fine","30 to 34 s","Run it a touch longer to calm the acidity."]
  },

  "Boquete Gesha": {
    s:"Gesha was first collected in Ethiopia in 1931 and made its name in Panama. This washed lot comes from the volcanic slopes of Boquete. It’s grown in shade at 1,600 to 1,800 meters and picked by hand over several passes. It’s the most delicate coffee we sell, closer to a perfumed tea than to coffee, with orange blossom, lemongrass and peach tea in a very light body. Brew it gently with a slow pour and no rush. It’s worth tasting next to our Gesha Village to see what the same variety does on opposite sides of the world.", 
    p:"- Washed", 
    a:"- 1,600 to 1,800 m", 
    h:"- Dec to Mar", 
    k:[4,3,1], 
    b:["pour","V60",12,200,93,"medium fine","2:30 to 3:00","Cooler water keeps the lemongrass sweet."]
  },

  "Gesha Village": {
    s:"This vibrant natural from Narsha layers jasmine honeysuckle and rose over lemon, lime, mandarin orange, and ripe red berries. After careful selection and floating, the whole cherries begin drying in full sun for five days before moving into the darkroom for a 33-day drying period. Bright citric acidity gives the cup energy, while delicate florals and red fruit create a clean, expressive finish. Meticulously selected, handpicked, floated and then the cherries were taken to a raised African beds to begin the drying process on full sun for 5 days and transferred to the darkroom to complete the final drying.", 
    p:"- Natural", 
    a:"- 1,900 to 2,100 m", 
    h:"- Dec to Feb", 
    k:[4,5,2], 
    b:["pour","V60",12,200,92,"medium","2:30 to 3:00","Taste it at three different temperatures."]
  },

  "Misty Mountain Natural Gesha Lot 31": {
    s:"Misty Mountain is a select plot on the Longboard Coffee estate in Boquete, Panama, at 1,700 to 1,850 meters. A cool, mist-shrouded climate there slows the ripening of the cherries. The farm borders virgin forest, its microclimate swings between sunny, breezy months and misty ones, and Justin Boudeman(rest in peace, love you Justin) farms it with organic and biodynamic practices. Lot 31 is a natural Geisha, dried whole so the sugars concentrate in the bean. The cup is vibrant and tropical, with passionfruit and lychee over honeysuckle and red berries. Brew it carefully on a filter, and let it open up as it cools.", 
    p:"- Natural", 
    a:"- 1,700 to 1,850 m", 
    h:"- Dec to Mar", 
    k:[4,5,4], 
    b:["pour","V60",12,200,92,"medium","2:30 to 3:00","Go a little cooler on the water to keep the florals above the fruit."]
  },

  "Panama Laurina NB-8": {
    s:"This Laurina comes from Camiseta, the Suárez family's farm in El Salto, the cool high ground above Boquete on the road up to Volcán Barú. The family named this lot La Leyenda, the legend, for their father, who with their mother pioneered these farms and planted the first Laurina trees at the estate 70 years ago. The seed is still that heirloom line.It was picked on 27 December 2025 at 1780 masl. The cherries were floated and sorted by hand, then sealed in tanks for 48 hours before drying whole. They dried 27 days in the shade on African beds, cooled by the mountain breeze, and finished with 8 hours in a static dryer at 39 °C. Laurina, also known as Bourbon Pointu, is a natural mutation of Bourbon with small pointed beans and naturally low caffeine.We taste mandarin and grape, panela sweetness, and a green tea finish.", 
    p:"- Natural", 
    a:"- 1,700 to 1,800 m", 
    h:"- Dec to Jan", 
    k:[4,4,1], 
    b:["pour","V60",12,200,92,"medium fine","2:30 to 3:00","Brew it a little cooler and let the tea-like sweetness lead."]
  }
};

const slug = n => n.toLowerCase().replace(/[^a-z0-9]+/g, "-");
const money = c => `${c.w}, $${c.p}`;


function art(c, cls = "") {
  const [a, b, d, e] = hues[c.n];
  const vars = `--g1:${a};--g2:${b};--g3:${d};--g4:${e}`;
  const p = pictures[c.n];
  if (!p) return `<div class="art ${cls}" style="${vars}"><span>${c.n}</span></div>`;
  const wide = cls.includes("wide");
  const file = `images/${slug(c.n)}${wide ? "-wide" : ""}.png`;
  const dark = (wide ? p.wide : p.tile) === "dark" ? "dark" : "";

  return `<div class="art pic ${dark} ${cls}" style="${vars}"><img src="${file}" alt="" onerror="console.warn('Picture not found:', this.src); this.parentNode.classList.remove('pic', 'dark'); this.remove()"><span>${c.n}</span></div>`;
}
function card(c) {
  return `<a class="card" href="coffee-detail.html?c=${slug(c.n)}">${art(c)}<div class="cap"><em>${c.notes}</em><span>${money(c)}</span></div></a>`;
}