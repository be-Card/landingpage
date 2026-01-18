const $ = (id) => document.getElementById(id);

const stateUrl = "/admin/api/state";

const editors = {
  venues: $("editorVenues"),
  promotions: $("editorPromotions"),
  prefs: $("editorPrefs"),
  payments: $("editorPayments"),
  achievements: $("editorAchievements"),
  referrals: $("editorReferrals"),
  beers: $("editorBeers"),
  equipments: $("editorEquipments")
};

let currentTab = "overview";
let initialPayload = null;
let dirty = false;

function setDirty(value) {
  dirty = value;
  $("saveBtn").disabled = !dirty;
}

function toast(message, kind = "info") {
  const el = $("toast");
  el.textContent = message;
  el.classList.remove("hidden");
  el.style.borderColor = kind === "error" ? "rgba(237,44,44,0.9)" : "rgba(241,193,18,0.6)";
  window.clearTimeout(toast._t);
  toast._t = window.setTimeout(() => el.classList.add("hidden"), 2600);
}

function setActiveTab(tab) {
  currentTab = tab;
  document.querySelectorAll(".navItem").forEach((b) => b.classList.toggle("active", b.dataset.tab === tab));
  document.querySelectorAll(".tab").forEach((t) => t.classList.toggle("active", t.id === tab));
  $("pageTitle").textContent = tab === "overview" ? "Overview" : document.querySelector(`.navItem[data-tab="${tab}"]`)?.textContent ?? tab;
  $("pageSubtitle").textContent = tab === "overview" ? "Gestioná configuraciones del backend" : "Editá y guardá cambios";
}

async function loadState() {
  setDirty(false);
  const res = await fetch(stateUrl, { headers: { accept: "application/json" } });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const data = await res.json();
  initialPayload = data;

  $("apiBase").textContent = window.location.origin;
  $("countVenues").textContent = String(Array.isArray(data.venues) ? data.venues.length : 0);
  $("countPromotions").textContent = String(Array.isArray(data.promotions) ? data.promotions.length : 0);
  $("countUsers").textContent = String(Array.isArray(data.users) ? data.users.length : 0);

  $("snapshot").textContent = JSON.stringify(
    {
      venues: data.venues?.length ?? 0,
      promotions: data.promotions?.length ?? 0,
      users: data.users?.length ?? 0,
      updatedAt: new Date().toISOString()
    },
    null,
    2
  );

  editors.venues.value = JSON.stringify(data.venues ?? [], null, 2);
  editors.promotions.value = JSON.stringify(data.promotions ?? [], null, 2);
  editors.prefs.value = JSON.stringify(data.notification_preferences_by_user_id ?? {}, null, 2);
  editors.payments.value = JSON.stringify(data.payment_methods_by_user_id ?? {}, null, 2);
  editors.achievements.value = JSON.stringify(data.achievements_dashboard_by_user_id ?? {}, null, 2);
  editors.referrals.value = JSON.stringify(data.referral_dashboard_by_user_id ?? {}, null, 2);
  editors.beers.value = JSON.stringify(data.beers ?? [], null, 2);
  editors.equipments.value = JSON.stringify(data.equipments ?? [], null, 2);
}

function wireEditors() {
  Object.values(editors).forEach((ta) => {
    ta.addEventListener("input", () => setDirty(true));
  });
}

function parseJson(text, label) {
  try {
    return JSON.parse(text);
  } catch (e) {
    const msg = e?.message ? String(e.message) : "JSON inválido";
    throw new Error(`${label}: ${msg}`);
  }
}

async function saveState() {
  if (!dirty) return;

  const payload = {
    venues: parseJson(editors.venues.value, "Locales"),
    promotions: parseJson(editors.promotions.value, "Promos"),
    notification_preferences_by_user_id: parseJson(editors.prefs.value, "Notificaciones"),
    payment_methods_by_user_id: parseJson(editors.payments.value, "Pagos"),
    achievements_dashboard_by_user_id: parseJson(editors.achievements.value, "Logros"),
    referral_dashboard_by_user_id: parseJson(editors.referrals.value, "Referidos"),
    beers: parseJson(editors.beers.value, "Cervezas"),
    equipments: parseJson(editors.equipments.value, "Equipos")
  };

  const res = await fetch(stateUrl, {
    method: "PUT",
    headers: { "content-type": "application/json", accept: "application/json" },
    body: JSON.stringify(payload)
  });
  if (!res.ok) throw new Error(`Guardar falló (HTTP ${res.status})`);
  setDirty(false);
  toast("Cambios guardados", "ok");
  await loadState();
}

function wireNav() {
  document.querySelectorAll(".navItem").forEach((btn) => {
    btn.addEventListener("click", () => setActiveTab(btn.dataset.tab));
  });
}

async function init() {
  wireNav();
  wireEditors();
  $("reloadBtn").addEventListener("click", async () => {
    try {
      await loadState();
      toast("Estado actualizado");
    } catch (e) {
      toast(`Error al recargar: ${e.message}`, "error");
    }
  });
  $("saveBtn").addEventListener("click", async () => {
    try {
      await saveState();
    } catch (e) {
      toast(e.message ?? "Error al guardar", "error");
    }
  });

  window.addEventListener("beforeunload", (e) => {
    if (!dirty) return;
    e.preventDefault();
    e.returnValue = "";
  });

  try {
    await loadState();
  } catch (e) {
    toast(`No se pudo cargar el estado (¿auth?): ${e.message}`, "error");
  }
}

init();

