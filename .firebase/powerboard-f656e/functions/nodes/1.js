

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.b74dabf7.js","_app/immutable/chunks/scheduler.f64133fb.js","_app/immutable/chunks/index.dc929e09.js","_app/immutable/chunks/singletons.d407da35.js","_app/immutable/chunks/index.a4d72958.js"];
export const stylesheets = [];
export const fonts = [];
