

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/dashboard/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.8fe564f3.js","_app/immutable/chunks/scheduler.f64133fb.js","_app/immutable/chunks/index.dc929e09.js","_app/immutable/chunks/authStore.cad14b08.js","_app/immutable/chunks/index.a4d72958.js","_app/immutable/chunks/navigation.4f7bca72.js","_app/immutable/chunks/singletons.d407da35.js","_app/immutable/chunks/each.1fd5ded5.js"];
export const stylesheets = ["_app/immutable/assets/3.4c0ac41c.css"];
export const fonts = [];
