import { c as create_ssr_component, a as subscribe } from "./ssr.js";
import { a as authStore } from "./authStore.js";
const NavbarGuest_svelte_svelte_type_style_lang = "";
const css = {
  code: '.containerNav.svelte-6rrti8{padding:1.2vh;background-color:rgba(0, 0, 0, 0.217);position:fixed;top:0;width:100%;height:7vh;z-index:5}ul.svelte-6rrti8,li.svelte-6rrti8{display:inline}button.svelte-6rrti8{font-family:"Mulish", sans-serif;background-color:transparent;border:transparent;color:rgb(255, 255, 255);padding:1vh;margin-right:0.5vh;margin-left:0.5vh;list-style-type:none;font-size:2vh;cursor:pointer;border-radius:5px;transition-duration:0.4s}button.svelte-6rrti8:hover{color:rgb(0, 22, 135)}.auth.svelte-6rrti8{float:right;display:inline}',
  map: null
};
const NavbarGuest = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_authStore;
  $$unsubscribe_authStore = subscribe(authStore, (value) => value);
  $$result.css.add(css);
  $$unsubscribe_authStore();
  return `<link rel="preconnect" href="https://fonts.googleapis.com"> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> <link href="https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200..1000;1,200..1000&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet"> <div class="containerNav svelte-6rrti8"><ul class="svelte-6rrti8"><li class="svelte-6rrti8"><button class="svelte-6rrti8" data-svelte-h="svelte-18ubz0h">Home</button></li> <div class="auth svelte-6rrti8"><li class="svelte-6rrti8"><button class="svelte-6rrti8" data-svelte-h="svelte-1mksi6v">Sign Up</button></li> <li class="svelte-6rrti8"><button class="svelte-6rrti8" data-svelte-h="svelte-7q95j3">Log In</button></li></div></ul> </div>`;
});
export {
  NavbarGuest as N
};
