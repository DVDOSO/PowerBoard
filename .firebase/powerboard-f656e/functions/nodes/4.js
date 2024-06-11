

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/dashboardGuest/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.9865f98f.js","_app/immutable/chunks/scheduler.f64133fb.js","_app/immutable/chunks/index.dc929e09.js","_app/immutable/chunks/NavbarGuest.44e0f5db.js","_app/immutable/chunks/navigation.4f7bca72.js","_app/immutable/chunks/singletons.d407da35.js","_app/immutable/chunks/index.a4d72958.js","_app/immutable/chunks/authStore.cad14b08.js","_app/immutable/chunks/each.1fd5ded5.js"];
export const stylesheets = ["_app/immutable/assets/4.ac90f692.css","_app/immutable/assets/NavbarGuest.8b12dc97.css"];
export const fonts = [];
