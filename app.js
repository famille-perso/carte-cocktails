const COCKTAILS = [
  {
    id: "moscow-mule",
    kind: "cocktail",
    name: "Moscow Mule",
    family: "Mule · Vodka",
    tagline: "Frais, gingembre, ultra désaltérant.",
    short: "Vodka · Ginger beer · Citron vert",
    degree: "≈ 12° · Alcoolisé",
    badges: ["🫚 Ginger beer", "🧊 Gros glaçons", "🍈 Citron vert"],
    art: "mule",
    bg: "linear-gradient(135deg,#3a2b18,#1a3a34 60%,#101a18)",
    ingredients: [
      "<strong>6 cl</strong> de vodka",
      "<strong>12 cl</strong> de ginger beer bien fraîche",
      "<strong>1 cl</strong> de jus de citron vert",
      "Gros glaçons + rondelle de citron vert + graines de grenade",
    ],
    steps: [
      "Remplissez le verre de gros glaçons.",
      "Versez la vodka puis le jus de citron vert.",
      "Complétez avec la ginger beer, mélangez doucement.",
      "Décorez de graines de grenade et citron vert. Servez avec une paille.",
    ],
    serve: "Toujours servir très frais.",
  },
  {
    id: "london-mule",
    kind: "cocktail",
    name: "London Mule",
    family: "Mule · Gin",
    tagline: "La version londonienne, plus botanique et florale.",
    short: "Gin · Ginger beer · Citron vert",
    degree: "≈ 12° · Alcoolisé",
    badges: ["🫚 Ginger beer", "🧊 Gros glaçons", "🔴 Graines de grenade"],
    art: "mule",
    bg: "linear-gradient(135deg,#2e2a4a,#1d3a34 65%,#101a18)",
    ingredients: [
      "<strong>6 cl</strong> de gin London Dry",
      "<strong>12 cl</strong> de ginger beer",
      "<strong>1 cl</strong> de jus de citron vert",
      "Gros glaçons + zeste de citron + graines de grenade",
    ],
    steps: [
      "Remplissez le verre de gros glaçons.",
      "Ajoutez le gin et le citron vert.",
      "Allongez de ginger beer, remuez une fois.",
      "Zeste de citron exprimé au-dessus + graines de grenade.",
    ],
    serve: "Servir très frais. Rondelle de concombre en option.",
  },
  {
    id: "caribbean-mule",
    kind: "cocktail",
    name: "Caribbean Mule",
    family: "Mule · Rhum",
    tagline: "Soleil des îles : rhum ambré, citron vert et gingembre.",
    short: "Rhum ambré · Ginger beer · Citron vert",
    degree: "≈ 12° · Alcoolisé",
    badges: ["🏝️ Rhum ambré", "🫚 Gingembre", "🧊 Gros glaçons"],
    art: "mule",
    bg: "linear-gradient(135deg,#4a2a14,#1d4a3a 60%,#0f1f1a)",
    ingredients: [
      "<strong>6 cl</strong> de rhum ambré",
      "<strong>12 cl</strong> de ginger beer",
      "<strong>2 cl</strong> de jus de citron vert",
      "Gros glaçons + graines de grenade + tranche d’ananas (option)",
    ],
    steps: [
      "Remplissez le verre de gros glaçons.",
      "Versez le rhum et le citron vert.",
      "Complétez de ginger beer.",
      "Décorez de graines de grenade + ananas pour le côté caribéen.",
    ],
    serve: "Paille large. Sucre de canne en bordure si envie.",
  },
  {
    id: "cuba-libre",
    kind: "cocktail",
    name: "Cuba Libre",
    family: "Classique · Rhum & Cola",
    tagline: "L’original de 1900 : rhum, cola et beaucoup de citron vert.",
    short: "Rhum · Cola · Citron vert",
    degree: "≈ 10° · Alcoolisé",
    badges: ["🥤 Cola", "🍈 Citron vert", "🧊 Gros glaçons"],
    art: "cola",
    bg: "linear-gradient(135deg,#3d1712,#1e1410 65%,#0f0d0a)",
    ingredients: [
      "<strong>5 cl</strong> de rhum cubain / ambré",
      "<strong>10 cl</strong> de cola",
      "<strong>2 cl</strong> de jus de citron vert (~1/2 citron)",
      "2 quartiers de citron vert + gros glaçons",
    ],
    steps: [
      "Remplissez un grand verre de gros glaçons.",
      "Pressez les quartiers de citron vert, déposez-les dans le verre.",
      "Versez le rhum puis le cola bien frais.",
      "Mélangez délicatement une fois. Servez aussitôt.",
    ],
    serve: "Cola versé en dernier pour garder les bulles.",
  },
  {
    id: "mojito",
    kind: "cocktail",
    name: "Mojito",
    family: "Classique · Menthe",
    tagline: "Le préféré des terrasses : menthe pilée, rhum, bulles.",
    short: "Rhum blanc · Menthe · Citron vert · Eau gazeuse",
    degree: "≈ 10° · Alcoolisé",
    badges: ["🌿 Menthe fraîche", "🍈 Citron vert", "🧊 Gros glaçons"],
    art: "mojito",
    bg: "linear-gradient(135deg,#1e4a2e,#123324 60%,#0c1a12)",
    ingredients: [
      "<strong>5 cl</strong> de rhum blanc",
      "<strong>3 cl</strong> de jus de citron vert",
      "<strong>2 c. à café</strong> de sucre de canne",
      "8 feuilles de menthe + eau gazeuse + gros glaçons",
    ],
    steps: [
      "Pilez doucement menthe + sucre + citron vert (sans déchirer la menthe).",
      "Ajoutez le rhum, remplissez de gros glaçons aux 3/4.",
      "Complétez d’eau gazeuse, mélangez de bas en haut.",
      "Couronnez de gros glaçons + tête de menthe tapée.",
    ],
    serve: "2 pailles courtes. Ne mixez jamais la menthe au shaker.",
  },
  {
    id: "aperol-spritz",
    kind: "cocktail",
    name: "Aperol Spritz",
    family: "Spritz · Italie",
    tagline: "Orange amer iconique de Venise. 3-2-1, inratable.",
    short: "Prosecco · Aperol · Eau gazeuse · Orange",
    degree: "≈ 8° · Alcoolisé",
    badges: ["🍊 Aperol", "🍾 Prosecco", "🧊 Gros glaçons"],
    art: "spritz",
    bg: "linear-gradient(135deg,#6b2a10,#a34d16 55%,#2a1508)",
    ingredients: [
      "<strong>6 cl</strong> de prosecco",
      "<strong>4 cl</strong> d’Aperol",
      "<strong>2 cl</strong> d’eau gazeuse",
      "Gros glaçons + 1/2 rondelle d’orange",
    ],
    steps: [
      "Remplissez un grand verre de gros glaçons.",
      "Versez le prosecco, puis l’Aperol, puis l’eau gazeuse.",
      "Un demi-tour de cuillère, pas plus.",
      "Glissez la rondelle d’orange. Servez aussitôt.",
    ],
    serve: "Ratio mémo : 3 volumes prosecco, 2 Aperol, 1 gazeuse.",
  },
  {
    id: "hugo-spritz",
    kind: "cocktail",
    name: "Hugo Spritz",
    family: "Spritz · Sureau",
    tagline: "Floral et léger : sureau, menthe et prosecco.",
    short: "Prosecco · Sureau · Eau gazeuse · Menthe",
    degree: "≈ 7° · Alcoolisé",
    badges: ["🌸 Sureau", "🌿 Menthe", "🧊 Gros glaçons"],
    art: "hugo",
    bg: "linear-gradient(135deg,#2a4a2e,#7aa06a 60%,#1a2a1e)",
    ingredients: [
      "<strong>6 cl</strong> de prosecco",
      "<strong>3 cl</strong> de sirop de fleur de sureau",
      "<strong>4 cl</strong> d’eau gazeuse",
      "Menthe + citron vert + gros glaçons",
    ],
    steps: [
      "Menthe légèrement tapée au fond du verre + gros glaçons.",
      "Versez le sirop de sureau puis le prosecco.",
      "Allongez d’eau gazeuse, mélangez doucement.",
      "Ajoutez un quartier de citron vert.",
    ],
    serve: "Très frais, parfait en apéritif d’été.",
  },
  {
    id: "vodka-martini",
    kind: "cocktail",
    name: "Vodka Martini « James Bond »",
    family: "Martini · Shaken, not stirred",
    tagline: "La commande de 007 : vodka glacée, pointe de vermouth.",
    short: "Vodka · Vermouth dry · Olive ou citron",
    degree: "≈ 25° · Fort",
    badges: ["🍸 Shaker", "🫒 Olive / twist", "❄️ Très froid"],
    art: "martini",
    bg: "linear-gradient(135deg,#1c2a4a,#2a3a5a 60%,#0c1220)",
    ingredients: [
      "<strong>6 cl</strong> de vodka (glacée idéalement)",
      "<strong>1 cl</strong> de vermouth dry",
      "Gros glaçons + zeste de citron ou 1 olive verte",
      "Version cinéma : 3 doses gin + 1 vodka + 1/2 Lillet",
    ],
    steps: [
      "Rafraîchissez le verre au congélateur.",
      "Au shaker rempli de glace : vodka + vermouth.",
      "Shakez 10 secondes bien franchement — comme Bond.",
      "Filtrez dans le verre glacé, zeste ou olive.",
    ],
    serve: "Servir givré, sans glace. À siroter lentement.",
  },
  {
    id: "gin-tonic",
    kind: "cocktail",
    name: "Gin Tonic",
    family: "Classique · Gin",
    tagline: "Simple et parfait quand gin et tonic sont glacés.",
    short: "Gin · Tonic · Citron",
    degree: "≈ 9° · Alcoolisé",
    badges: ["🫏 Genévrier", "🫧 Tonic premium", "🧊 Gros glaçons"],
    art: "gintonic",
    bg: "linear-gradient(135deg,#1e3a4a,#2a5a6a 60%,#0e1e26)",
    ingredients: [
      "<strong>5 cl</strong> de gin",
      "<strong>12 cl</strong> de tonic premium bien froid",
      "Gros glaçons + zeste de citron / concombre / romarin",
      "Option : baie de genièvre, poivre rose",
    ],
    steps: [
      "Remplissez un grand verre de gros glaçons.",
      "Versez le gin, remuez pour rafraîchir.",
      "Versez le tonic doucement le long du verre.",
      "Exprimez le zeste, déposez le garnish.",
    ],
    serve: "Tonic toujours décapsulé minute.",
  },
];

const SPIRITS = [
  {
    id: "flor-de-cana-12",
    kind: "spirit",
    name: "Flor de Caña 12 ans",
    family: "Rhum · Nicaragua",
    tagline: "Rhum ambré vieilli 12 ans, doux, boisé et généreux.",
    short: "Rhum ambré · Nicaragua · 12 ans",
    degree: "40°",
    badges: ["🇳🇮 Nicaragua", "🛢️ 12 ans en fût", "🌱 Distillerie durable"],
    art: "bottle",
    bg: "linear-gradient(135deg,#4a2a10,#7a4d16 55%,#241505)",
    profile: [
      "<strong>Nez :</strong> vanille, caramel, fruits secs et miel",
      "<strong>Bouche :</strong> ronde et boisée, cacao, canne à sucre",
      "<strong>Finale :</strong> longue, douce, légèrement épicée",
    ],
    service: [
      "Se déguste sec, à température ambiante.",
      "Avec 2 gros glaçons pour l’ouvrir en douceur.",
      "Magnifique en digestif, ou en base d’un vieux rhum arrangé.",
    ],
  },
  {
    id: "bear-brother-2b",
    kind: "spirit",
    name: "Bear Brother 2B",
    family: "Spiritueux · Fiche à compléter",
    tagline: "La fiche de dégustation arrive — dis-moi en plus !",
    short: "Spiritueux · fiche à compléter",
    degree: "—",
    badges: ["📝 Fiche à compléter"],
    art: "bottle",
    bg: "linear-gradient(135deg,#2a2a3a,#4a4a5a 60%,#14141c)",
    profile: [
      "<strong>Type :</strong> à préciser (whisky, rhum, autre ?)",
      "<strong>Origine :</strong> à préciser",
      "<strong>Dégustation :</strong> on la complète ensemble",
    ],
    service: [
      "Envoie-moi le type, l’âge et le degré.",
      "Et comment tu le sers : sec, glaçons, cocktail ?",
      "Je mets la fiche à jour aussitôt.",
    ],
  },
];

const ART = {
  mule: `<svg viewBox="0 0 200 200" fill="none" aria-hidden="true">
    <ellipse cx="100" cy="168" rx="52" ry="10" fill="black" opacity=".35"/>
    <path d="M55 55h90l-8 90a14 14 0 0 1-14 13H77a14 14 0 0 1-14-13l-8-90z" fill="#b46a2e" stroke="#f3cd7e" stroke-width="4"/>
    <path d="M55 55h90l-2 18H57l-2-18z" fill="#8a4d1f"/>
    <path d="M145 75c18 2 24 14 20 28-4 13-16 20-30 19" stroke="#f3cd7e" stroke-width="7" stroke-linecap="round"/>
    <circle cx="80" cy="48" r="6" fill="#cdeac0" opacity=".9"/><circle cx="96" cy="40" r="4.5" fill="#cdeac0" opacity=".7"/><circle cx="112" cy="48" r="5" fill="#cdeac0" opacity=".85"/>
    <path d="M78 72c4-6 12-8 18-4" stroke="#7dd87d" stroke-width="5" stroke-linecap="round"/>
    <circle cx="125" cy="66" r="11" fill="#c8f169" stroke="#5a7a2a" stroke-width="3"/>
  </svg>`,
  cola: `<svg viewBox="0 0 200 200" fill="none" aria-hidden="true">
    <ellipse cx="100" cy="170" rx="44" ry="9" fill="black" opacity=".35"/>
    <path d="M72 40h56l-6 116a10 10 0 0 1-10 10h-24a10 10 0 0 1-10-10L72 40z" fill="#f3e6c8" opacity=".95" stroke="#e8b34b" stroke-width="4"/>
    <path d="M76 70h48l-4 86H80l-4-86z" fill="#4a1c0e"/>
    <path d="M76 70h48l-1 22H77l-1-22z" fill="#7a2e15"/>
    <circle cx="90" cy="120" r="4" fill="#ffb46a" opacity=".8"/><circle cx="108" cy="135" r="3" fill="#ffb46a" opacity=".7"/><circle cx="100" cy="105" r="2.5" fill="#ffd9a0"/>
    <rect x="96" y="14" width="8" height="40" rx="4" fill="#d94a3a" transform="rotate(12 100 30)"/>
    <circle cx="70" cy="60" r="12" fill="#a8e05f" stroke="#4a7a2a" stroke-width="3"/>
  </svg>`,
  mojito: `<svg viewBox="0 0 200 200" fill="none" aria-hidden="true">
    <ellipse cx="100" cy="170" rx="46" ry="9" fill="black" opacity=".35"/>
    <path d="M70 50h60l-7 108a12 12 0 0 1-12 11H89a12 12 0 0 1-12-11L70 50z" fill="#dff0d0" opacity=".95" stroke="#8fd18f" stroke-width="4"/>
    <path d="M74 88h52l-5 70H79l-5-70z" fill="#5da85d"/>
    <path d="M74 88h52l-1 18H75l-1-18z" fill="#e8f5d8"/>
    <path d="M95 60c-2-8 4-14 10-16M105 62c4-6 12-7 16-3" stroke="#2e7a3a" stroke-width="5" stroke-linecap="round"/>
    <rect x="97" y="20" width="7" height="52" rx="3.5" fill="#c9bda9" transform="rotate(10 100 40)"/>
    <circle cx="72" cy="96" r="10" fill="#c8f169" stroke="#4a7a2a" stroke-width="3"/>
  </svg>`,
  spritz: `<svg viewBox="0 0 200 200" fill="none" aria-hidden="true">
    <ellipse cx="100" cy="170" rx="48" ry="9" fill="black" opacity=".35"/>
    <path d="M60 35h80v10c0 30-14 48-30 62v52a10 10 0 0 1-10 10h0a10 10 0 0 1-10-10v-52C74 93 60 75 60 45V35z" fill="#ffe9c8" opacity=".95" stroke="#e8b34b" stroke-width="4"/>
    <path d="M64 78c10-6 22-9 36-9s26 3 36 9c-2 18-12 30-24 40H88C76 108 66 96 64 78z" fill="#e8641e"/>
    <path d="M64 78c10-6 22-9 36-9s26 3 36 9l-1 8H65l-1-8z" fill="#ff9a3d"/>
    <circle cx="120" cy="130" r="16" fill="#ff9a2e" stroke="#fff" stroke-width="3"/>
    <path d="M120 114v32M104 130h32" stroke="#fff" stroke-width="2.5"/>
    <circle cx="95" cy="100" r="3" fill="#fff" opacity=".8"/><circle cx="110" cy="108" r="2.4" fill="#fff" opacity=".7"/>
  </svg>`,
  hugo: `<svg viewBox="0 0 200 200" fill="none" aria-hidden="true">
    <ellipse cx="100" cy="170" rx="48" ry="9" fill="black" opacity=".35"/>
    <path d="M60 35h80v10c0 30-14 48-30 62v52a10 10 0 0 1-10 10h0a10 10 0 0 1-10-10v-52C74 93 60 75 60 45V35z" fill="#eef7e8" opacity=".96" stroke="#a8d5a2" stroke-width="4"/>
    <path d="M64 82c10-6 22-9 36-9s26 3 36 9c-2 16-12 27-24 36H88C76 109 66 98 64 82z" fill="#cfe8b8"/>
    <circle cx="88" cy="70" r="4" fill="#fff"/><circle cx="102" cy="64" r="3" fill="#fff"/><circle cx="114" cy="72" r="3.5" fill="#fff"/>
    <path d="M80 100c6-8 16-10 24-5" stroke="#3a7a4a" stroke-width="5" stroke-linecap="round"/>
    <circle cx="128" cy="128" r="13" fill="#d8efc0" stroke="#5a8a4a" stroke-width="3"/>
  </svg>`,
  martini: `<svg viewBox="0 0 200 200" fill="none" aria-hidden="true">
    <ellipse cx="100" cy="170" rx="40" ry="8" fill="black" opacity=".35"/>
    <path d="M45 60h110L100 115 45 60z" fill="#e8f2f8" opacity=".95" stroke="#c9d8e2" stroke-width="4" stroke-linejoin="round"/>
    <path d="M60 60h80L100 102 60 60z" fill="#bfe0ea"/>
    <path d="M100 115v40M78 170h44" stroke="#c9d8e2" stroke-width="7" stroke-linecap="round"/>
    <circle cx="108" cy="82" r="8" fill="#7ab648" stroke="#3e6a1e" stroke-width="2.5"/>
    <path d="M92 40l16 20" stroke="#c9bda9" stroke-width="4" stroke-linecap="round"/>
  </svg>`,
  gintonic: `<svg viewBox="0 0 200 200" fill="none" aria-hidden="true">
    <ellipse cx="100" cy="170" rx="46" ry="9" fill="black" opacity=".35"/>
    <path d="M62 40h76v12c0 28-12 46-28 58v48a10 10 0 0 1-10 10h0a10 10 0 0 1-10-10v-48C74 98 62 80 62 52V40z" fill="#e6f2f5" opacity=".95" stroke="#9ac5d1" stroke-width="4"/>
    <path d="M66 92h68c-2 14-10 24-22 32H88C76 116 68 106 66 92z" fill="#cfe8ee"/>
    <circle cx="92" cy="110" r="3" fill="#fff"/><circle cx="106" cy="118" r="2.5" fill="#fff"/><circle cx="100" cy="100" r="2" fill="#fff"/>
    <circle cx="126" cy="70" r="14" fill="#d8f0c0" stroke="#5a8a4a" stroke-width="3"/>
    <path d="M84 66c5-7 14-8 20-3" stroke="#3a7a4a" stroke-width="5" stroke-linecap="round"/>
  </svg>`,
  bottle: `<svg viewBox="0 0 200 200" fill="none" aria-hidden="true">
    <ellipse cx="100" cy="172" rx="42" ry="8" fill="black" opacity=".35"/>
    <rect x="90" y="18" width="20" height="26" rx="4" fill="#3a2e1e" stroke="#e8b34b" stroke-width="3"/>
    <rect x="94" y="10" width="12" height="12" rx="3" fill="#e8b34b"/>
    <path d="M90 44c0 10-16 16-16 32v72a14 14 0 0 0 14 14h24a14 14 0 0 0 14-14V76c0-16-16-22-16-32H90z" fill="#2e1f10" stroke="#e8b34b" stroke-width="4"/>
    <path d="M76 96h48v52H76z" fill="#7a3d10"/>
    <path d="M76 96h48v14H76z" fill="#a35a1e"/>
    <rect x="84" y="118" width="32" height="22" rx="3" fill="#f6efe2"/>
    <path d="M88 124h24M88 129h24M88 134h16" stroke="#7a4d16" stroke-width="2" stroke-linecap="round"/>
  </svg>`,
};

function artFor(c) {
  return ART[c.art] || ART.mule;
}

const grid = document.getElementById("grid");
const gridSpirits = document.getElementById("grid-spirits");
const pill = document.getElementById("count-pill");
const pageTitle = document.getElementById("page-title");
const introText = document.getElementById("intro-text");
const tabCocktails = document.getElementById("tab-cocktails");
const tabSpiritueux = document.getElementById("tab-spiritueux");
const backdrop = document.getElementById("sheet-backdrop");
const sheet = document.getElementById("sheet");

function cardHtml(c, ctaLabel) {
  return (
    '<div class="card-art" style="background:' + c.bg + '">' + artFor(c) + "</div>" +
    '<div class="card-body">' +
    '<p class="card-family">' + c.family + "</p>" +
    "<h2>" + c.name + "</h2>" +
    "<p>" + c.short + "</p>" +
    '<div class="card-foot"><span class="degree">' + c.degree + '</span><span class="cta">' + ctaLabel + "</span></div>" +
    "</div>"
  );
}

function renderCards() {
  grid.innerHTML = "";
  COCKTAILS.forEach((c) => {
    const btn = document.createElement("button");
    btn.className = "card";
    btn.setAttribute("aria-label", "Voir " + c.name);
    btn.innerHTML = cardHtml(c, "Voir →");
    btn.addEventListener("click", () => openSheet(c));
    grid.appendChild(btn);
  });
  gridSpirits.innerHTML = "";
  SPIRITS.forEach((s) => {
    const btn = document.createElement("button");
    btn.className = "card";
    btn.setAttribute("aria-label", "Voir " + s.name);
    btn.innerHTML = cardHtml(s, "Voir →");
    btn.addEventListener("click", () => openSheet(s));
    gridSpirits.appendChild(btn);
  });
}

function showTab(which) {
  const isCocktails = which === "cocktails";
  grid.hidden = !isCocktails;
  gridSpirits.hidden = isCocktails;
  tabCocktails.classList.toggle("active", isCocktails);
  tabSpiritueux.classList.toggle("active", !isCocktails);
  tabCocktails.setAttribute("aria-selected", String(isCocktails));
  tabSpiritueux.setAttribute("aria-selected", String(!isCocktails));
  pageTitle.textContent = isCocktails ? "Cocktails de Cams" : "Spiritueux de Cams";
  pill.textContent = isCocktails ? COCKTAILS.length + " cocktails" : SPIRITS.length + " spiritueux";
  introText.textContent = isCocktails
    ? "Touchez une carte pour voir la recette complète, les doses et le pas-à-pas en grand format."
    : "Touchez une bouteille pour voir la fiche de dégustation et les conseils de service.";
  window.scrollTo({ top: 0 });
}

function openSheet(item) {
  const isSpirit = item.kind === "spirit";
  document.getElementById("sheet-art").style.background = item.bg;
  document.getElementById("sheet-art").innerHTML = artFor(item);
  document.getElementById("sheet-family").textContent = item.family;
  document.getElementById("sheet-title").textContent = item.name;
  document.getElementById("sheet-tagline").textContent = item.tagline;
  document.getElementById("sheet-h3-a").textContent = isSpirit ? "Profil de dégustation" : "Ingrédients";
  document.getElementById("sheet-badges").innerHTML =
    item.badges.map((b) => "<span>" + b + "</span>").join("") +
    "<span>⚠️ L’abus d’alcool est dangereux pour la santé</span>";
  const listA = isSpirit ? item.profile : item.ingredients;
  document.getElementById("sheet-ingredients").innerHTML = listA.map((i) => "<li>" + i + "</li>").join("");
  backdrop.hidden = false;
  sheet.hidden = false;
  sheet.scrollTop = 0;
  document.body.style.overflow = "hidden";
  document.getElementById("sheet-close").focus();
}

function closeSheet() {
  backdrop.hidden = true;
  sheet.hidden = true;
  document.body.style.overflow = "";
}

tabCocktails.addEventListener("click", () => showTab("cocktails"));
tabSpiritueux.addEventListener("click", () => showTab("spiritueux"));
document.getElementById("sheet-close").addEventListener("click", closeSheet);
backdrop.addEventListener("click", closeSheet);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !sheet.hidden) closeSheet();
});

renderCards();
showTab("cocktails");
