import cors from "cors";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

import {
  achievementsDashboardByUserId,
  beers,
  equipments,
  notificationPreferencesByUserId,
  paymentMethodsByUserId,
  promotions,
  referralDashboardByUserId,
  users,
  venues
} from "./data.js";
import { distanceKm, formatDistanceLabel } from "./geo.js";

const app = express();
app.use(cors());
app.use(express.json({ limit: "1mb" }));

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const adminDir = path.join(__dirname, "admin");

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

function readBasic(req) {
  const header = req.headers.authorization ?? "";
  const parts = header.split(" ");
  if (parts.length !== 2 || parts[0].toLowerCase() !== "basic") return null;
  try {
    const decoded = Buffer.from(parts[1], "base64").toString("utf8");
    const idx = decoded.indexOf(":");
    if (idx < 0) return null;
    return { user: decoded.slice(0, idx), pass: decoded.slice(idx + 1) };
  } catch {
    return null;
  }
}

function requireAdmin(req, res, next) {
  const creds = readBasic(req);
  const expectedUser = process.env.ADMIN_USER ?? "admin";
  const expectedPass = process.env.ADMIN_PASS ?? "admin123";
  if (!creds || creds.user !== expectedUser || creds.pass !== expectedPass) {
    res.setHeader("WWW-Authenticate", "Basic realm=\"beCard Admin\"");
    return res.status(401).send("Unauthorized");
  }
  next();
}

function readBearer(req) {
  const header = req.headers.authorization ?? "";
  const parts = header.split(" ");
  if (parts.length === 2 && parts[0].toLowerCase() === "bearer") return parts[1];
  return null;
}

function requireAuth(req, res, next) {
  const token = readBearer(req);
  if (!token) return res.status(401).json({ message: "Unauthenticated" });
  req.userId = "1";
  next();
}

app.post("/auth/login-json", (req, res) => {
  const email = (req.body?.email ?? "").toString().toLowerCase();
  const password = (req.body?.password ?? "").toString();
  const user = users.find((u) => u.email.toLowerCase() === email);
  if (!user || user.password !== password) return res.status(401).json({ message: "Credenciales inválidas" });

  const accessToken = `dev_${Math.random().toString(36).slice(2)}`;
  const refreshToken = `devr_${Math.random().toString(36).slice(2)}`;
  const expiresAt = new Date(Date.now() + 60 * 60 * 1000).toISOString();
  res.json({ accessToken, refreshToken, tokenType: "Bearer", expiresAt });
});

app.post("/auth/logout", requireAuth, (_req, res) => {
  res.json({ ok: true });
});

app.get("/auth/me", requireAuth, (req, res) => {
  const user = users.find((u) => u.id === req.userId);
  if (!user) return res.status(401).json({ message: "Unauthenticated" });
  res.json({
    id: user.id,
    email: user.email,
    name: user.name,
    avatar: user.avatar,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt
  });
});

app.post("/auth/refresh", requireAuth, (_req, res) => {
  const accessToken = `dev_${Math.random().toString(36).slice(2)}`;
  const refreshToken = `devr_${Math.random().toString(36).slice(2)}`;
  const expiresAt = new Date(Date.now() + 60 * 60 * 1000).toISOString();
  res.json({ accessToken, refreshToken, tokenType: "Bearer", expiresAt });
});

app.post("/auth/change-password", requireAuth, (_req, res) => {
  res.json({ ok: true });
});

app.post("/auth/2fa/setup", requireAuth, (req, res) => {
  const user = users.find((u) => u.id === req.userId);
  const email = user?.email ?? "user@becard.com";
  const secret = "JBSWY3DPEHPK3PXP";
  const otpauth_uri = `otpauth://totp/beCard:${encodeURIComponent(email)}?secret=${secret}&issuer=beCard`;
  res.json({ secret, otpauth_uri });
});

app.post("/auth/2fa/enable", requireAuth, (_req, res) => res.json({ ok: true }));
app.post("/auth/2fa/disable", requireAuth, (_req, res) => res.json({ ok: true }));

app.get("/auth/sessions", requireAuth, (_req, res) => {
  res.json({
    sessions: [
      { id: "sess_1", device_label: "iPhone 15", location: "Buenos Aires", last_active: "Hoy 10:12", is_current: true },
      { id: "sess_2", device_label: "Chrome Windows", location: "Buenos Aires", last_active: "Ayer 21:44", is_current: false }
    ]
  });
});

app.post("/auth/sessions/revoke", requireAuth, (_req, res) => res.json({ ok: true }));
app.post("/auth/sessions/register", requireAuth, (_req, res) => res.json({ ok: true }));

app.get("/", (_req, res) => res.redirect("/admin/"));

app.use("/admin", requireAdmin, express.static(adminDir));

app.get("/admin/api/state", requireAdmin, (_req, res) => {
  const safeUsers = users.map(({ password: _pw, ...rest }) => rest);
  res.json({
    users: safeUsers,
    venues,
    promotions,
    notification_preferences_by_user_id: Object.fromEntries(notificationPreferencesByUserId.entries()),
    payment_methods_by_user_id: Object.fromEntries(paymentMethodsByUserId.entries()),
    achievements_dashboard_by_user_id: Object.fromEntries(achievementsDashboardByUserId.entries()),
    referral_dashboard_by_user_id: Object.fromEntries(referralDashboardByUserId.entries()),
    beers,
    equipments
  });
});

app.put("/admin/api/state", requireAdmin, (req, res) => {
  const body = req.body && typeof req.body === "object" ? req.body : {};
  if (Array.isArray(body.venues)) {
    venues.length = 0;
    venues.push(...body.venues);
  }
  if (Array.isArray(body.promotions)) {
    promotions.length = 0;
    promotions.push(...body.promotions);
  }
  if (body.notification_preferences_by_user_id && typeof body.notification_preferences_by_user_id === "object") {
    notificationPreferencesByUserId.clear();
    for (const [k, v] of Object.entries(body.notification_preferences_by_user_id)) {
      if (v && typeof v === "object") notificationPreferencesByUserId.set(k, v);
    }
  }
  if (body.payment_methods_by_user_id && typeof body.payment_methods_by_user_id === "object") {
    paymentMethodsByUserId.clear();
    for (const [k, v] of Object.entries(body.payment_methods_by_user_id)) {
      if (Array.isArray(v)) paymentMethodsByUserId.set(k, v);
    }
  }
  if (body.achievements_dashboard_by_user_id && typeof body.achievements_dashboard_by_user_id === "object") {
    achievementsDashboardByUserId.clear();
    for (const [k, v] of Object.entries(body.achievements_dashboard_by_user_id)) {
      if (v && typeof v === "object") achievementsDashboardByUserId.set(k, v);
    }
  }
  if (body.referral_dashboard_by_user_id && typeof body.referral_dashboard_by_user_id === "object") {
    referralDashboardByUserId.clear();
    for (const [k, v] of Object.entries(body.referral_dashboard_by_user_id)) {
      if (v && typeof v === "object") referralDashboardByUserId.set(k, v);
    }
  }
  if (Array.isArray(body.beers)) {
    beers.length = 0;
    beers.push(...body.beers);
  }
  if (Array.isArray(body.equipments)) {
    equipments.length = 0;
    equipments.push(...body.equipments);
  }
  res.json({ ok: true });
});

app.get("/venues", (req, res) => {
  const lat = Number(req.query.lat);
  const lng = Number(req.query.lng);
  const hasLocation = Number.isFinite(lat) && Number.isFinite(lng);

  const list = venues.map((v) => {
    const km = hasLocation ? distanceKm({ latitude: lat, longitude: lng }, v.location) : null;
    return {
      id: v.id,
      name: v.name,
      category: v.category,
      description: v.description,
      distance_km: km,
      distance_label: km == null ? v.distance_label ?? "" : formatDistanceLabel(km),
      address_label: v.address,
      hours_label: v.hours,
      rating: v.rating,
      reviews_count: v.reviews_count,
      is_open_now: v.is_open_now,
      list_image_asset: v.list_image_asset,
      map_card_image_asset: v.map_card_image_asset,
      hero_image_asset: v.hero_image_asset,
      menu_sections: v.menu_sections
    };
  });

  res.json({ data: list });
});

app.get("/venues/:id", (req, res) => {
  const id = req.params.id;
  const v = venues.find((x) => x.id === id);
  if (!v) return res.status(404).json({ message: "Venue not found" });
  res.json({
    data: {
      id: v.id,
      name: v.name,
      category: v.category,
      description: v.description,
      distance_label: v.distance_label ?? "",
      address_label: v.address,
      hours_label: v.hours,
      rating: v.rating,
      reviews_count: v.reviews_count,
      is_open_now: v.is_open_now,
      list_image_asset: v.list_image_asset,
      map_card_image_asset: v.map_card_image_asset,
      hero_image_asset: v.hero_image_asset,
      menu_sections: v.menu_sections,
      location: v.location,
      phone: v.phone ?? null
    }
  });
});

app.get("/promotions", (req, res) => {
  const venueId = req.query.venue_id?.toString();
  const list = venueId ? promotions.filter((p) => p.venue_id === venueId) : promotions;
  const mapped = list.map((p) => {
    const venue = venues.find((v) => v.id === p.venue_id);
    return {
      id: p.id,
      venue_id: p.venue_id,
      venue_name: venue?.name ?? "",
      hours_label: venue?.hours ?? "",
      venue_location: venue?.location ?? null,
      title: p.title,
      subtitle: p.subtitle,
      tag_label: p.tag_label,
      hero_image_asset: p.hero_image_asset,
      valid_days_label: p.valid_days_label,
      valid_hours_label: p.valid_hours_label,
      terms: p.terms
    };
  });
  res.json({ data: mapped });
});

app.get("/promotions/:id", (req, res) => {
  const id = req.params.id;
  const p = promotions.find((x) => x.id === id);
  if (!p) return res.status(404).json({ message: "Promotion not found" });
  const venue = venues.find((v) => v.id === p.venue_id);
  res.json({
    data: {
      id: p.id,
      venue_id: p.venue_id,
      venue_name: venue?.name ?? "",
      hours_label: venue?.hours ?? "",
      venue_location: venue?.location ?? null,
      title: p.title,
      subtitle: p.subtitle,
      tag_label: p.tag_label,
      hero_image_asset: p.hero_image_asset,
      valid_days_label: p.valid_days_label,
      valid_hours_label: p.valid_hours_label,
      terms: p.terms
    }
  });
});

app.get("/notification-preferences", requireAuth, (req, res) => {
  const prefs = notificationPreferencesByUserId.get(req.userId) ?? notificationPreferencesByUserId.get("1");
  res.json(prefs ?? {});
});

app.put("/notification-preferences", requireAuth, (req, res) => {
  const body = req.body && typeof req.body === "object" ? req.body : {};
  const current = notificationPreferencesByUserId.get(req.userId) ?? {};
  const merged = { ...current, ...body, security_alerts_enabled: true };
  notificationPreferencesByUserId.set(req.userId, merged);
  res.json(merged);
});

app.get("/payment-methods", requireAuth, (req, res) => {
  const methods = paymentMethodsByUserId.get(req.userId) ?? [];
  res.json({ data: methods });
});

app.delete("/payment-methods/:id", requireAuth, (req, res) => {
  const id = req.params.id;
  const methods = paymentMethodsByUserId.get(req.userId) ?? [];
  paymentMethodsByUserId.set(
    req.userId,
    methods.filter((m) => m.id !== id)
  );
  res.json({ ok: true });
});

app.put("/payment-methods/:id", requireAuth, (req, res) => {
  const id = req.params.id;
  const title = (req.body?.title ?? "").toString();
  const methods = paymentMethodsByUserId.get(req.userId) ?? [];
  const updated = methods.map((m) => (m.id === id ? { ...m, title } : m));
  paymentMethodsByUserId.set(req.userId, updated);
  res.json({ ok: true });
});

app.post("/payment-methods/cards", requireAuth, (req, res) => {
  const last4 = (req.body?.card_number ?? "").toString().slice(-4) || "0000";
  const method = { id: `card_${Date.now()}`, type: "visa", title: "Visa", last4 };
  const methods = paymentMethodsByUserId.get(req.userId) ?? [];
  paymentMethodsByUserId.set(req.userId, [method, ...methods]);
  res.json(method);
});

app.post("/payment-methods/mercado-pago/connect", requireAuth, (req, res) => {
  const method = { id: `mp_${Date.now()}`, type: "mercado_pago", title: "Mercado Pago", masked: "Conectado" };
  const methods = paymentMethodsByUserId.get(req.userId) ?? [];
  paymentMethodsByUserId.set(req.userId, [method, ...methods]);
  res.json({ ok: true });
});

app.get("/achievements", requireAuth, (req, res) => {
  const dashboard = achievementsDashboardByUserId.get(req.userId) ?? achievementsDashboardByUserId.get("1");
  res.json({ data: dashboard ?? { unlocked_count: 0, achievements: [] } });
});

app.get("/referrals/dashboard", requireAuth, (req, res) => {
  const dashboard = referralDashboardByUserId.get(req.userId) ?? referralDashboardByUserId.get("1");
  res.json({ data: dashboard ?? {} });
});

app.get("/cervezas", (_req, res) => {
  res.json({ cervezas: beers });
});

app.get("/equipos", (_req, res) => {
  res.json({ equipos: equipments });
});

const port = Number(process.env.PORT ?? 8001);
app.listen(port, "0.0.0.0", () => {
  process.stdout.write(`becard-backend listening on http://0.0.0.0:${port}\n`);
});
