export const venues = [
  {
    id: "humulus",
    name: "Humulus Brewery",
    category: "Cervecería",
    description:
      "Cervecería artesanal con amplia variedad de estilos. Ambiente cálido y propuestas gastronómicas que maridan perfecto con nuestras cervezas.",
    address: "Av. Corrientes 1234, CABA",
    hours: "12:00 - 02:00",
    rating: 4.8,
    reviews_count: 234,
    is_open_now: true,
    location: { latitude: -34.6037, longitude: -58.3816 },
    list_image_asset: "assets/images/find_venues/mkenzom4-1dfnb21.png",
    map_card_image_asset: "assets/images/find_venues_map/mkeoy7ka-h6503zu.png",
    hero_image_asset: "assets/images/venue_detail/mkepffo7-pj2mc2b.png",
    menu_sections: [
      { id: "entradas", title: "Entradas", initially_expanded: false, items: [] },
      {
        id: "cervezas_tiradas",
        title: "Cervezas Tiradas",
        initially_expanded: true,
        items: [
          {
            id: "ipa_americana",
            title: "IPA Americana",
            price_label: "$1,800",
            image_asset: "assets/images/venue_detail/mkepffo7-7vwh61t.png",
            tags: ["IPA", "6.5%", "65 IBU"]
          },
          {
            id: "golden_ale",
            title: "Golden Ale",
            price_label: "$1,500",
            image_asset: "assets/images/venue_detail/mkepffo7-7vwh61t.png",
            tags: ["Golden Ale", "4.8%", "25 IBU"]
          },
          {
            id: "stout_imperial",
            title: "Stout Imperial",
            price_label: "$2,200",
            image_asset: "assets/images/venue_detail/mkepffo7-7vwh61t.png",
            tags: ["Stout", "8.2%", "45 IBU"]
          }
        ]
      },
      { id: "platos_principales", title: "Platos Principales", initially_expanded: false, items: [] },
      { id: "postres", title: "Postres", initially_expanded: false, items: [] }
    ]
  },
  {
    id: "conejo_negro",
    name: "Conejo Negro",
    category: "Bar Cervecero",
    description:
      "Cervecería artesanal con amplia variedad de estilos. Ambiente cálido y propuestas gastronómicas que maridan perfecto con nuestras cervezas.",
    address: "Av. Corrientes 4321, CABA",
    hours: "12:00 - 02:00",
    rating: 4.7,
    reviews_count: 198,
    is_open_now: true,
    location: { latitude: -34.608, longitude: -58.384 },
    list_image_asset: "assets/images/find_venues/mkenzom4-1dfnb21.png",
    map_card_image_asset: "assets/images/find_venues_map/mkeoy7ka-h6503zu.png",
    hero_image_asset: "assets/images/venue_detail/mkepffo7-pj2mc2b.png",
    menu_sections: [
      { id: "entradas", title: "Entradas", initially_expanded: false, items: [] },
      { id: "cervezas_tiradas", title: "Cervezas Tiradas", initially_expanded: true, items: [] }
    ]
  }
];

export const promotions = [
  {
    id: "promo_1",
    venue_id: "humulus",
    title: "Happy Hour 2x1 en IPAs",
    subtitle: "Todos los días de 18:00 a 20:00",
    tag_label: "2x1",
    hero_image_asset: "assets/images/promo_detail/mkfx27nu-wucwdt9.png",
    valid_days_label: "Lunes a Domingo",
    valid_hours_label: "18:00 - 20:00",
    terms: [
      "Válido solo en cervezas IPAs de barril",
      "Máximo 2 promociones por persona",
      "No acumulable con otras promociones",
      "Sujeto a disponibilidad"
    ]
  },
  {
    id: "promo_2",
    venue_id: "conejo_negro",
    title: "Tabla de picada + 4 pintas",
    subtitle: "Promoción para grupos",
    tag_label: "Grupo",
    hero_image_asset: "assets/images/promo_detail/mkfx27nu-wucwdt9.png",
    valid_days_label: "Lunes a Domingo",
    valid_hours_label: "18:00 - 20:00",
    terms: ["Válido para grupos", "Sujeto a disponibilidad"]
  }
];

export const users = [
  {
    id: "1",
    email: "admin@becard.com",
    name: "Usuario BeCard",
    password: "password123",
    avatar: null,
    createdAt: new Date("2024-01-01T00:00:00.000Z").toISOString(),
    updatedAt: new Date("2024-01-01T00:00:00.000Z").toISOString()
  },
  {
    id: "2",
    email: "user@becard.com",
    name: "Usuario Demo",
    password: "user123",
    avatar: null,
    createdAt: new Date("2024-01-01T00:00:00.000Z").toISOString(),
    updatedAt: new Date("2024-01-01T00:00:00.000Z").toISOString()
  }
];

export const notificationPreferencesByUserId = new Map([
  [
    "1",
    {
      push_enabled: true,
      email_enabled: true,
      whatsapp_enabled: false,
      security_alerts_enabled: true,
      transaction_confirmations_enabled: true,
      promotions_enabled: true,
      news_enabled: true
    }
  ]
]);

export const paymentMethodsByUserId = new Map([
  [
    "1",
    [
      {
        id: "mp_1",
        type: "mercado_pago",
        title: "Mercado Pago",
        masked: "Conectado"
      },
      {
        id: "card_1",
        type: "visa",
        title: "Visa",
        last4: "4242"
      }
    ]
  ]
]);

export const achievementsDashboardByUserId = new Map([
  [
    "1",
    {
      unlocked_count: 4,
      achievements: [
        {
          id: "first_recharge",
          title: "Primera Recarga",
          description: "Recarga saldo por primera vez",
          category: "recargas",
          icon: "money",
          unlocked: true,
          unlocked_at: "2025-01-15T00:00:00.000Z"
        },
        {
          id: "explorer_expert",
          title: "Explorador Experto",
          description: "Visita 10 locales adheridos",
          category: "locales",
          icon: "map",
          unlocked: true,
          unlocked_at: "2025-01-20T00:00:00.000Z"
        },
        {
          id: "beer_amateur",
          title: "Cervecero Amateur",
          description: "Registra 5 consumos de cerveza",
          category: "cervezas",
          icon: "beer",
          unlocked: true,
          unlocked_at: "2025-01-28T00:00:00.000Z"
        },
        {
          id: "recharge_10",
          title: "Recargador Pro",
          description: "Completa 10 recargas de saldo",
          category: "recargas",
          icon: "money",
          unlocked: false
        }
      ]
    }
  ]
]);

export const referralDashboardByUserId = new Map([
  [
    "1",
    {
      reward_amount: 200,
      referral_code: "MARTIN-GARCIA-25",
      total_earned: 600,
      pending: 400,
      invites: [
        { name: "Ana Martínez", email: "ana.m@email.com", status: "completed", reward_amount: 600 },
        { name: "Ana Martínez", email: "ana.m@email.com", status: "registered" },
        { name: "Ana Martínez", email: "ana.m@email.com", status: "pending" }
      ]
    }
  ]
]);

export const beers = [
  {
    id: 1,
    nombre: "IPA Americana",
    tipo: "IPA",
    abv: 6.5,
    ibu: 65,
    descripcion: "India Pale Ale",
    imagen: null,
    proveedor: "Humulus",
    activo: true,
    destacado: true,
    creado_el: "2024-01-01T00:00:00.000Z",
    creado_por: "admin",
    precio_actual: 1800,
    stock_total: 120
  }
];

export const equipments = [
  {
    id: 1,
    nombre_equipo: "Equipo 01",
    id_barril: 100,
    capacidad_actual: 5000,
    temperatura_actual: 4.2,
    ultima_limpieza: "2025-01-01",
    proxima_limpieza: "2025-02-01",
    id_estado_equipo: 1,
    id_punto_de_venta: 10,
    id_cerveza: 1,
    creado_el: "2024-01-01T00:00:00.000Z",
    estado: { estado: "Activo" },
    barril: { nombre: "Barril 100" },
    volumen_actual: 3500,
    nivel_barril_porcentaje: 70,
    punto_venta: { nombre: "Humulus Bar" },
    cerveza_actual: { nombre: "IPA Americana" }
  }
];
