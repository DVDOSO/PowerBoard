import { c as create_ssr_component } from "../../chunks/ssr.js";
import "../../chunks/firebase.client.js";
import "firebase/auth";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".mainContainer.svelte-16y03jp{min-height:100vh;display:flex;flex-direction:column}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main class="mainContainer svelte-16y03jp">${slots.default ? slots.default({}) : ``} </main>`;
});
export {
  Layout as default
};
