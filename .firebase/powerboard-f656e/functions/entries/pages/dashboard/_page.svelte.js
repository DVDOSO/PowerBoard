import { c as create_ssr_component, a as subscribe, d as each, e as escape, b as add_attribute, v as validate_component, f as set_store_value } from "../../../chunks/ssr.js";
import { a as authStore } from "../../../chunks/authStore.js";
import { d as database } from "../../../chunks/firebase.client.js";
import "firebase/auth";
import { ref, push, remove, set, onValue } from "firebase/database";
import { w as writable, d as derived } from "../../../chunks/index.js";
const NavbarPrivate_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: '.containerNav.svelte-1vnjkc7{padding:1.2vh;position:fixed;top:0;width:100%;height:7vh;background-color:rgba(0, 0, 0, 0.217)}ul.svelte-1vnjkc7,li.svelte-1vnjkc7{display:inline}button.svelte-1vnjkc7{font-family:"Mulish", sans-serif;background-color:transparent;border:transparent;color:rgb(255, 255, 255);padding:1vh;margin-right:0.5vh;margin-left:0.5vh;list-style-type:none;font-size:2vh;cursor:pointer;border-radius:5px;transition-duration:0.4s}button.svelte-1vnjkc7:hover{color:rgb(0, 22, 135)}.auth.svelte-1vnjkc7{float:right;display:inline}',
  map: null
};
const NavbarPrivate = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$5);
  return `<link rel="preconnect" href="https://fonts.googleapis.com"> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> <link href="https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200..1000;1,200..1000&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet"> <div class="containerNav svelte-1vnjkc7"><ul class="svelte-1vnjkc7"><li class="svelte-1vnjkc7"><button class="svelte-1vnjkc7" data-svelte-h="svelte-18ubz0h">Home</button></li> <div class="auth svelte-1vnjkc7"><li class="svelte-1vnjkc7"><button class="svelte-1vnjkc7" data-svelte-h="svelte-1o27alj">Log Out</button></li></div></ul> </div>`;
});
const dbStore = writable({
  tasks: "",
  currentEdit: "",
  currentNameEdit: "",
  currentDescEdit: "",
  currentImpEdit: "",
  currentUrgEdit: "",
  currentColEdit: ""
});
const dataStore = writable({
  tasks: ""
});
const dbHandlers = {
  addTask: async (userId, task, desc, imp, urg, col, pro, com) => {
    const reference = ref(database, "users/" + userId + "/tasks");
    await push(reference, {
      task,
      description: desc,
      importance: imp,
      urgency: urg,
      color: col,
      inProgress: pro,
      completed: com
    });
  },
  removeTask: async (userId, taskId) => {
    const reference = ref(database, "users/" + userId + "/tasks/" + taskId);
    await remove(reference);
  },
  editTask: async (userId, taskId, task, desc, imp, urg, col, pro, com) => {
    const reference = ref(database, "users/" + userId + "/tasks/" + taskId);
    await set(reference, {
      task,
      description: desc,
      importance: imp,
      urgency: urg,
      color: col,
      inProgress: pro,
      completed: com
    });
  },
  getTasks: async (userId) => {
    const reference = ref(database, "users/" + userId + "/tasks");
    onValue(reference, (snapshot) => {
      const data = snapshot.val();
      dataStore.update((store) => {
        store.tasks = data;
        return store;
      });
    });
  }
};
const Board_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".containerMain.svelte-18saxt8{height:93vh;overflow:hidden;margin-left:44vw;margin-top:5vh;width:56vw;position:fixed}.plot.svelte-18saxt8{height:38.3vmax;width:38.3vmax;position:fixed;background-color:rgba(255, 255, 255, 0.459);border-radius:2vh;top:50%;transform:translateY(-50%)}circle.svelte-18saxt8{transition-duration:0.5s}svg.svelte-18saxt8{padding:2vh}.side.svelte-18saxt8{border-left:6px dotted rgba(255, 255, 255, 0.4);position:fixed;height:30vmax;width:15vmax;margin-left:38.3vw;word-wrap:break-word;padding:1.5vh;background-color:rgba(255, 255, 255, 0.459);border-top-right-radius:2vh;border-bottom-right-radius:2vh;color:white;top:50%;transform:translateY(-50%)}.taskTitle.svelte-18saxt8{font-family:'Mulish', sans-serif;font-size:1.7vmax;font-weight:700;padding-bottom:1vh;line-height:1.2}.taskDesc.svelte-18saxt8{font-size:1.2vmax;font-weight:400;font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;line-height:1.2}.horizontalArrow.svelte-18saxt8{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width:30vmax;z-index:-1}.verticalArrow.svelte-18saxt8{position:absolute;rotate:90deg;top:50%;left:10.8%;width:30vmax;z-index:-1}#line.svelte-18saxt8{border:none;border-top:.7vh rgba(255, 255, 255, 0.4) dotted}#left.svelte-18saxt8{position:fixed;margin-top:-5.7vh;margin-left:-1vw;font-size:8vh;font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;color:rgba(255, 255, 255, 0.4)}#right.svelte-18saxt8{position:fixed;margin-top:-5.7vh;margin-left:29vw;font-size:8vh;font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;color:rgba(255, 255, 255, 0.4)}#crises.svelte-18saxt8{position:absolute;left:63%;top:22.5%;font-size:3vmax;font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;color:rgba(255, 255, 255, 0.4);z-index:-1}#goals.svelte-18saxt8{position:absolute;left:18%;top:22.5%;font-size:3vmax;font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;color:rgba(255, 255, 255, 0.4);z-index:-1}#distractions.svelte-18saxt8{position:absolute;left:9%;top:66%;font-size:3vmax;font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;color:rgba(255, 255, 255, 0.4);z-index:-1}#interruptions.svelte-18saxt8{position:absolute;left:53%;top:66%;font-size:3vmax;font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;color:rgba(255, 255, 255, 0.4);z-index:-1}#importance.svelte-18saxt8{position:absolute;left:41%;top:3%;font-size:1.5vmax;font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;color:rgba(255, 255, 255, 0.4);z-index:-1}#urgency.svelte-18saxt8{position:absolute;left:89%;top:47%;font-size:1.5vmax;rotate:90deg;font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;color:rgba(255, 255, 255, 0.4);z-index:-1}circle.svelte-18saxt8{filter:drop-shadow(0px 0px 1px rgb(255, 255, 255))}",
  map: null
};
const Board = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_authStore;
  let $dots, $$unsubscribe_dots;
  $$unsubscribe_authStore = subscribe(authStore, (value) => value);
  let text = "";
  let description = "";
  const dots = derived(dataStore, ($dataStore) => {
    if ($dataStore && $dataStore.tasks) {
      return Object.values($dataStore.tasks).map((task) => ({
        id: task.task,
        desc: task.description,
        cx: task.urgency * 10,
        cy: (10 - task.importance) * 10,
        r: 2,
        fill: task.color
      }));
    } else {
      return [];
    }
  });
  $$unsubscribe_dots = subscribe(dots, (value) => $dots = value);
  $$result.css.add(css$4);
  $$unsubscribe_authStore();
  $$unsubscribe_dots();
  return `<div class="containerMain svelte-18saxt8"><div class="plot svelte-18saxt8"><div class="horizontalArrow svelte-18saxt8" data-svelte-h="svelte-dac3pq"><hr id="line" class="svelte-18saxt8"> <div id="left" class="svelte-18saxt8">˂</div> <div id="right" class="svelte-18saxt8">˃</div></div> <div class="verticalArrow svelte-18saxt8" data-svelte-h="svelte-u6p4eg"><hr id="line" class="svelte-18saxt8"> <div id="left" class="svelte-18saxt8">˂</div> <div id="right" class="svelte-18saxt8">˃</div></div> <div id="crises" class="svelte-18saxt8" data-svelte-h="svelte-13x6wiq">Crises</div> <div id="goals" class="svelte-18saxt8" data-svelte-h="svelte-6i41v0">Goals</div> <div id="distractions" class="svelte-18saxt8" data-svelte-h="svelte-3kfgzm">Distractions</div> <div id="interruptions" class="svelte-18saxt8" data-svelte-h="svelte-13sy1i8">Interruptions</div> <div id="importance" class="svelte-18saxt8" data-svelte-h="svelte-14dypc6">Importance</div> <div id="urgency" class="svelte-18saxt8" data-svelte-h="svelte-1j9bcde">Urgency</div> <svg height="100%" width="100%" viewBox="0 0 100 100" class="svelte-18saxt8">${each($dots, (dot) => {
    return `  <circle${add_attribute("cx", dot.cx, 0)}${add_attribute("cy", dot.cy, 0)}${add_attribute("r", dot.r, 0)}${add_attribute("fill", dot.fill, 0)} stroke-width="0.05vh" onmouseover="evt.target.setAttribute('stroke', 'white');" onmouseout="evt.target.setAttribute('stroke', 'none');" class="svelte-18saxt8"></circle>`;
  })}</svg></div> <div class="side svelte-18saxt8"><h1 class="taskTitle svelte-18saxt8">${escape(text)}</h1> <h2 class="taskDesc svelte-18saxt8">${escape(description)}</h2></div> </div>`;
});
const AddModal_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".title.svelte-11bti95.svelte-11bti95{margin-bottom:1vh;font-family:'Mulish', sans-serif;font-size:3vmin}input.svelte-11bti95.svelte-11bti95{margin:0.5vh;padding:0.5vh}dialog.svelte-11bti95.svelte-11bti95{width:34.7vw;height:50vh;border-radius:1em;border:none;box-shadow:0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);padding:0;position:fixed;top:25%;left:33%;overflow:hidden;background-color:rgba(255, 255, 255, 0.8);text-align:left}dialog.svelte-11bti95.svelte-11bti95::backdrop{background:rgba(0, 0, 0, 0.228)}dialog.svelte-11bti95>div.svelte-11bti95{padding:4vh}dialog[open].svelte-11bti95.svelte-11bti95{animation:svelte-11bti95-zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)}@keyframes svelte-11bti95-zoom{from{transform:scale(0)}to{transform:scale(1)}}dialog[open].svelte-11bti95.svelte-11bti95::backdrop{animation:svelte-11bti95-fade 0.2s ease-out}@keyframes svelte-11bti95-fade{from{opacity:0}to{opacity:1}}button.svelte-11bti95.svelte-11bti95{padding:0.6vh;position:fixed}.content.svelte-11bti95.svelte-11bti95{height:50vh;width:34.7vw}.bottom.svelte-11bti95.svelte-11bti95{position:absolute;justify-content:center;bottom:3%;left:41%}.modalButton.svelte-11bti95.svelte-11bti95{position:static;margin:1vh;padding:1vh;font-family:'Mulish', sans-serif;border:none;border-radius:5%;background:linear-gradient(-45deg, #e73c7e, #23a6d5);color:white;font-size:2vmin;box-shadow:0 0 1vh 0 rgba(0,0,0,0.7);transition-duration:0.4s;cursor:pointer}.modalButton.svelte-11bti95.svelte-11bti95:hover{box-shadow:0 0 2vh 0 rgba(0,0,0,0.9);background:linear-gradient(-45deg, #ff2377, #11befc)}.modalButton.svelte-11bti95.svelte-11bti95:active{box-shadow:0 0 2vh 0 rgba(0,0,0,0.9);background:linear-gradient(-45deg, #a9164e, #0c82ad)}.exit.svelte-11bti95.svelte-11bti95{position:absolute;right:5%;top:5%;border-radius:50%;border:0;background:none;color:black;width:3vmin;height:3.2vmin;transition-duration:0.4s;font-weight:800;font-size:1.5vmin;cursor:pointer}.exit.svelte-11bti95.svelte-11bti95:hover{background:rgb(255, 113, 113)}.task.svelte-11bti95.svelte-11bti95{width:30%;border:none;border-bottom:3px dashed rgb(191, 191, 191);background:none;transition:0.4s ease;font-family:'Mulish', sans-serif;font-size:2.5vmin;position:absolute}.task.svelte-11bti95.svelte-11bti95:focus{outline:none;border-bottom:3px solid rgb(50,50,50)}.desc.svelte-11bti95.svelte-11bti95{transition:0.4s ease;font-family:'Mulish', sans-serif;font-size:1.5vmin;position:absolute;top:30%;width:30.1vw;height:40%;padding:2%;resize:none;border:3px solid rgb(201, 201, 201)}.desc.svelte-11bti95.svelte-11bti95:focus{outline:none;border:3px solid rgb(50,50,50)}.imp.svelte-11bti95.svelte-11bti95{position:absolute;top:73%;left:10%;text-align:center}.urg.svelte-11bti95.svelte-11bti95{position:absolute;top:73%;right:10%;text-align:center}.head.svelte-11bti95.svelte-11bti95{font-family:'Mulish', sans-serif;font-size:2vmin}.slider.svelte-11bti95.svelte-11bti95{margin:0.7vmax;-webkit-appearance:none;border-radius:5px;background:#ffffff;outline:none;opacity:0.7;transition:0.2s;height:1vh}.slider.svelte-11bti95.svelte-11bti95::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:2vmin;height:2vmin;border-radius:50%;background:#21aeff;cursor:pointer}.slider.svelte-11bti95.svelte-11bti95::-moz-range-thumb{width:2vmin;height:2vmin;border-radius:50%;background:#21aeff;cursor:pointer}.slider.svelte-11bti95.svelte-11bti95::-webkit-slider-thumb:hover{background:#0d8cf0}.col.svelte-11bti95.svelte-11bti95{position:absolute;top:19%;left:77%;width:7vw;display:flex;flex-direction:row;align-items:center}.colorhead.svelte-11bti95.svelte-11bti95{font-family:'Mulish', sans-serif;font-size:2vmin;display:inline}.picker.svelte-11bti95.svelte-11bti95{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;cursor:pointer;background-color:transparent;width:1.7vmax;height:1.7vmax;float:right;display:inline}.picker.svelte-11bti95.svelte-11bti95::-webkit-color-swatch-wrapper{padding:0;margin:0}.picker.svelte-11bti95.svelte-11bti95::-webkit-color-swatch{border-radius:50%}.picker.svelte-11bti95.svelte-11bti95:hover{border:1px solid black;border-radius:50%}#center.svelte-11bti95.svelte-11bti95{text-align:center}",
  map: null
};
const AddModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_dataStore;
  let $$unsubscribe_authStore;
  $$unsubscribe_dataStore = subscribe(dataStore, (value) => value);
  $$unsubscribe_authStore = subscribe(authStore, (value) => value);
  let { showAddModal } = $$props;
  let { addTask } = $$props;
  let dialog;
  let taskName = "";
  let importance = "1";
  let urgency = "1";
  let taskColor = "#ff0000";
  if ($$props.showAddModal === void 0 && $$bindings.showAddModal && showAddModal !== void 0)
    $$bindings.showAddModal(showAddModal);
  if ($$props.addTask === void 0 && $$bindings.addTask && addTask !== void 0)
    $$bindings.addTask(addTask);
  $$result.css.add(css$3);
  $$unsubscribe_dataStore();
  $$unsubscribe_authStore();
  return `<link rel="preconnect" href="https://fonts.googleapis.com"> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> <link href="https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200..1000;1,200..1000&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet">  <dialog class="svelte-11bti95"${add_attribute("this", dialog, 0)}> <div class="content svelte-11bti95"> <button class="exit svelte-11bti95" autofocus data-svelte-h="svelte-mqrk3d">X</button> <div id="center" class="svelte-11bti95" data-svelte-h="svelte-g6z19b"><h2 class="title svelte-11bti95">Add Task</h2></div> <input class="task svelte-11bti95" type="text" placeholder="Task Name"${add_attribute("value", taskName, 0)}> <textarea class="desc svelte-11bti95" type="text" placeholder="Task Description">${escape("")}</textarea> <div class="imp svelte-11bti95"><p class="head svelte-11bti95">Importance: ${escape(importance)}</p> <input class="slider svelte-11bti95" type="range" min="1" max="9"${add_attribute("value", importance, 0)}></div> <div class="urg svelte-11bti95"><p class="head svelte-11bti95">Urgency: ${escape(urgency)}</p> <input class="slider svelte-11bti95" type="range" min="1" max="9"${add_attribute("value", urgency, 0)}></div> <div class="col svelte-11bti95"><p class="colorhead svelte-11bti95" data-svelte-h="svelte-qmu74s">Colour:</p> <input class="picker svelte-11bti95" type="color"${add_attribute("value", taskColor, 0)}></div> <div class="bottom svelte-11bti95"><button class="modalButton svelte-11bti95" data-svelte-h="svelte-5e767g">Add Task</button></div></div> </dialog>`;
});
const EditModal_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".title.svelte-x0t8c9.svelte-x0t8c9{margin-bottom:1vh;font-family:'Mulish', sans-serif;font-size:3vmin}input.svelte-x0t8c9.svelte-x0t8c9{margin:0.5vh;padding:0.5vh}dialog.svelte-x0t8c9.svelte-x0t8c9{width:34.7vw;height:50vh;border-radius:1em;border:none;box-shadow:0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);padding:0;position:fixed;top:25%;left:33%;overflow:hidden;background-color:rgba(255, 255, 255, 0.8);text-align:left}dialog.svelte-x0t8c9.svelte-x0t8c9::backdrop{background:rgba(0, 0, 0, 0.228)}dialog.svelte-x0t8c9>div.svelte-x0t8c9{padding:4vh}dialog[open].svelte-x0t8c9.svelte-x0t8c9{animation:svelte-x0t8c9-zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)}@keyframes svelte-x0t8c9-zoom{from{transform:scale(0)}to{transform:scale(1)}}dialog[open].svelte-x0t8c9.svelte-x0t8c9::backdrop{animation:svelte-x0t8c9-fade 0.2s ease-out}@keyframes svelte-x0t8c9-fade{from{opacity:0}to{opacity:1}}button.svelte-x0t8c9.svelte-x0t8c9{padding:0.6vh;position:fixed}.content.svelte-x0t8c9.svelte-x0t8c9{height:50vh;width:34.7vw}.bottom.svelte-x0t8c9.svelte-x0t8c9{position:absolute;justify-content:center;bottom:3%;left:38%}.modalButton.svelte-x0t8c9.svelte-x0t8c9{position:static;margin:1vh;padding:1vh;font-family:'Mulish', sans-serif;border:none;border-radius:5%;background:linear-gradient(-45deg, #e73c7e, #23a6d5);color:white;font-size:2vmin;box-shadow:0 0 1vh 0 rgba(0,0,0,0.7);transition-duration:0.4s;cursor:pointer}.modalButton.svelte-x0t8c9.svelte-x0t8c9:hover{box-shadow:0 0 2vh 0 rgba(0,0,0,0.9);background:linear-gradient(-45deg, #ff2377, #11befc)}.modalButton.svelte-x0t8c9.svelte-x0t8c9:active{box-shadow:0 0 2vh 0 rgba(0,0,0,0.9);background:linear-gradient(-45deg, #a9164e, #0c82ad)}.exit.svelte-x0t8c9.svelte-x0t8c9{position:absolute;right:5%;top:5%;border-radius:50%;border:0;background:none;color:black;width:3vmin;height:3.2vmin;transition-duration:0.4s;font-weight:800;font-size:1.5vmin;cursor:pointer}.exit.svelte-x0t8c9.svelte-x0t8c9:hover{background:rgb(255, 113, 113)}.task.svelte-x0t8c9.svelte-x0t8c9{width:30%;border:none;border-bottom:3px dashed rgb(191, 191, 191);background:none;transition:0.4s ease;font-family:'Mulish', sans-serif;font-size:2.5vmin;position:absolute}.task.svelte-x0t8c9.svelte-x0t8c9:focus{outline:none;border-bottom:3px solid rgb(50,50,50)}.desc.svelte-x0t8c9.svelte-x0t8c9{transition:0.4s ease;font-family:'Mulish', sans-serif;font-size:1.5vmin;position:absolute;top:30%;width:30.1vw;height:40%;padding:2%;resize:none;border:3px solid rgb(201, 201, 201)}.desc.svelte-x0t8c9.svelte-x0t8c9:focus{outline:none;border:3px solid rgb(50,50,50)}.imp.svelte-x0t8c9.svelte-x0t8c9{position:absolute;top:73%;left:10%;text-align:center}.urg.svelte-x0t8c9.svelte-x0t8c9{position:absolute;top:73%;right:10%;text-align:center}.head.svelte-x0t8c9.svelte-x0t8c9{font-family:'Mulish', sans-serif;font-size:2vmin}.slider.svelte-x0t8c9.svelte-x0t8c9{margin:0.7vmax;-webkit-appearance:none;border-radius:5px;background:#ffffff;outline:none;opacity:0.7;transition:0.2s;height:1vh}.slider.svelte-x0t8c9.svelte-x0t8c9::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:2vmin;height:2vmin;border-radius:50%;background:#21aeff;cursor:pointer}.slider.svelte-x0t8c9.svelte-x0t8c9::-moz-range-thumb{width:2vmin;height:2vmin;border-radius:50%;background:#21aeff;cursor:pointer}.slider.svelte-x0t8c9.svelte-x0t8c9::-webkit-slider-thumb:hover{background:#0d8cf0}.col.svelte-x0t8c9.svelte-x0t8c9{position:absolute;top:19%;left:77%;width:7vw;display:flex;flex-direction:row;align-items:center}.colorhead.svelte-x0t8c9.svelte-x0t8c9{font-family:'Mulish', sans-serif;font-size:2vmin;display:inline}.picker.svelte-x0t8c9.svelte-x0t8c9{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;cursor:pointer;background-color:transparent;width:1.7vmax;height:1.7vmax;float:right;display:inline}.picker.svelte-x0t8c9.svelte-x0t8c9::-webkit-color-swatch-wrapper{padding:0;margin:0}.picker.svelte-x0t8c9.svelte-x0t8c9::-webkit-color-swatch{border-radius:50%}.picker.svelte-x0t8c9.svelte-x0t8c9:hover{border:1px solid black;border-radius:50%}#center.svelte-x0t8c9.svelte-x0t8c9{text-align:center}",
  map: null
};
const EditModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $dbStore, $$unsubscribe_dbStore;
  let $$unsubscribe_dataStore;
  let $$unsubscribe_authStore;
  $$unsubscribe_dbStore = subscribe(dbStore, (value) => $dbStore = value);
  $$unsubscribe_dataStore = subscribe(dataStore, (value) => value);
  $$unsubscribe_authStore = subscribe(authStore, (value) => value);
  let { showEditModal } = $$props;
  let { editTask } = $$props;
  let dialog;
  let initialized = false;
  if ($$props.showEditModal === void 0 && $$bindings.showEditModal && showEditModal !== void 0)
    $$bindings.showEditModal(showEditModal);
  if ($$props.editTask === void 0 && $$bindings.editTask && editTask !== void 0)
    $$bindings.editTask(editTask);
  $$result.css.add(css$2);
  {
    if (showEditModal && !initialized) {
      dialog.showModal();
      $dbStore.currentNameEdit;
      $dbStore.currentImpEdit;
      $dbStore.currentUrgEdit;
      initialized = true;
    }
  }
  {
    if (!showEditModal) {
      initialized = false;
    }
  }
  $$unsubscribe_dbStore();
  $$unsubscribe_dataStore();
  $$unsubscribe_authStore();
  return ` <dialog class="svelte-x0t8c9"${add_attribute("this", dialog, 0)}> <div class="content svelte-x0t8c9"> <button class="exit svelte-x0t8c9" autofocus data-svelte-h="svelte-mqrk3d">X</button> <div id="center" class="svelte-x0t8c9" data-svelte-h="svelte-1tp6fmi"><h2 class="title svelte-x0t8c9">Edit Task</h2></div> <input class="task svelte-x0t8c9" type="text" placeholder="Task Name"${add_attribute("value", $dbStore.currentNameEdit, 0)}> <textarea class="desc svelte-x0t8c9" type="text" placeholder="Task Description">${escape($dbStore.currentDescEdit || "")}</textarea> <div class="imp svelte-x0t8c9"><p class="head svelte-x0t8c9">Importance: ${escape($dbStore.currentImpEdit)}</p> <input class="slider svelte-x0t8c9" type="range" min="1" max="9"${add_attribute("value", $dbStore.currentImpEdit, 0)}></div> <div class="urg svelte-x0t8c9"><p class="head svelte-x0t8c9">Urgency: ${escape($dbStore.currentUrgEdit)}</p> <input class="slider svelte-x0t8c9" type="range" min="1" max="9"${add_attribute("value", $dbStore.currentUrgEdit, 0)}></div> <div class="col svelte-x0t8c9"><p class="colorhead svelte-x0t8c9" data-svelte-h="svelte-qmu74s">Colour:</p> <input class="picker svelte-x0t8c9" type="color"${add_attribute("value", $dbStore.currentColEdit, 0)}></div> <div class="bottom svelte-x0t8c9"><button class="modalButton svelte-x0t8c9" data-svelte-h="svelte-onzak7">Make Changes</button></div></div> </dialog>`;
});
const TaskView_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".containerMain.svelte-ps6pc8{padding-top:4vh;height:73vh}.taskList.svelte-ps6pc8{margin-top:7vh;width:75%;display:inline-block;border-radius:5px;height:50vh;overflow:hidden;overflow-y:auto;position:relative}.title.svelte-ps6pc8{font-family:'Mulish', sans-serif;color:white;font-size:3.5vmin;position:absolute;margin-left:5vw}.addTask.svelte-ps6pc8{position:absolute;float:right;margin-left:12vmin;margin-top:0.3vh;z-index:5;color:white;border-radius:50%;width:4.2vh;height:4.2vh;background:linear-gradient(-45deg, #e73c7e, #23a6d5);border:none;font-size:4vh;box-shadow:0 0 1vh 0 rgba(0,0,0,0.7);transition-duration:0.4s}.addTask.svelte-ps6pc8:hover{box-shadow:0 0 2vh 0 rgba(0,0,0,0.9);background:linear-gradient(-45deg, #ff2377, #11befc)}.addTask.svelte-ps6pc8:active{box-shadow:0 0 2vh 0 rgba(0,0,0,0.9);background:linear-gradient(-45deg, #a9164e, #0c82ad)}.svelte-ps6pc8::-webkit-scrollbar{width:0.5vw}.svelte-ps6pc8::-webkit-scrollbar-thumb{background:rgba(255, 255, 255, 0.459);border-radius:10px}.svelte-ps6pc8::-webkit-scrollbar-thumb:hover{background:rgba(255, 255, 255, 0.8)}button.svelte-ps6pc8{cursor:pointer}",
  map: null
};
const TaskView = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $authStore, $$unsubscribe_authStore;
  let $dbStore, $$unsubscribe_dbStore;
  $$unsubscribe_authStore = subscribe(authStore, (value) => $authStore = value);
  $$unsubscribe_dbStore = subscribe(dbStore, (value) => $dbStore = value);
  let showAddModal = false;
  let showEditModal = false;
  function addButtonListeners() {
    let deleteButtons = document.getElementsByClassName("delButtons");
    for (let i = 0; i < deleteButtons.length; i++) {
      deleteButtons[i].addEventListener("click", () => {
        deleteTask(deleteButtons[i].id);
      });
    }
    let editButtons = document.getElementsByClassName("editButtons");
    for (let i = 0; i < editButtons.length; i++) {
      editButtons[i].addEventListener("click", () => {
        editModal(editButtons[i].id);
      });
    }
  }
  function addTask(taskName, taskDescription, importance, urgency, taskColor) {
    dbHandlers.addTask($authStore.currentUser.uid, taskName, taskDescription, importance, urgency, taskColor, false, false);
    updateTable();
  }
  function editModal(taskId) {
    dbStore.currentEdit = taskId;
    const reference = ref(database, "users/" + $authStore.currentUser.uid + "/tasks/" + dbStore.currentEdit);
    onValue(reference, (snapshot) => {
      set_store_value(dbStore, $dbStore.currentNameEdit = snapshot.val().task, $dbStore);
      set_store_value(dbStore, $dbStore.currentDescEdit = snapshot.val().description, $dbStore);
      set_store_value(dbStore, $dbStore.currentImpEdit = snapshot.val().importance, $dbStore);
      set_store_value(dbStore, $dbStore.currentUrgEdit = snapshot.val().urgency, $dbStore);
      set_store_value(dbStore, $dbStore.currentColEdit = snapshot.val().color, $dbStore);
    });
    showEditModal = true;
  }
  function editTask(taskId, taskName, taskDescription, importance, urgency, taskColor) {
    dbHandlers.editTask($authStore.currentUser.uid, taskId, taskName, taskDescription, importance, urgency, taskColor, false, false);
    updateTable();
  }
  function deleteTask(taskId) {
    dbHandlers.removeTask($authStore.currentUser.uid, taskId);
    updateTable();
  }
  function updateTable() {
    let taskList = document.getElementsByClassName("taskList");
    let table1 = document.getElementsByClassName("taskTable");
    table1[0].innerHTML = "";
    const reference = ref(database, "users/" + $authStore.currentUser.uid + "/tasks");
    onValue(reference, (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        let trow = document.createElement("tr");
        let tdata = document.createElement("td");
        tdata.innerHTML = '<p class="taskText">' + childSnapshot.val().task + '</p><div class="taskButtons"><button class="editButtons" id="' + childSnapshot.key + '">Edit</button><button class="delButtons" id="' + childSnapshot.key + '">Remove</button></div>';
        trow.appendChild(tdata);
        table1[0].appendChild(trow);
      });
    });
    let style = document.createElement("style");
    style.innerHTML = 'table, td {width: 100%; border-bottom: rgba(255,255,255,0.5) solid 1px;}table {border-collapse: collapse;}td {padding: 1vh; height: 6vh; display: flex; align-items: center;}.taskText {display: inline; font-family: "Mulish", sans-serif; font-size: 1.1vmax; margin-right: 2vw; color: white;}.taskButtons {display: inline; margin-left:auto;}.editButtons {cursor: pointer; padding: 0.5vh; margin: 0.5vh; box-shadow: 0 0 1vh 0 rgba(0,0,0,0.7); font-family: "Mulish", sans-serif; font-size: 0.7vmax; color: white; border-radius:25%; background: rgba(230, 230, 230, 0.5); border: none; transition-duration: 0.2s;}.delButtons {cursor: pointer; padding: 0.5vh; margin: 0.5vh; box-shadow: 0 0 1vh 0 rgba(0,0,0,0.7);font-family: "Mulish", sans-serif; font-size: 0.7vmax; color: white; border-radius:12%; background: rgba(255, 48, 48, 0.5); border: none; transition-duration: 0.2s;}.editButtons:hover {box-shadow: 0 0 1vh 0 rgba(0,0,0,0.8); background: rgba(230, 230, 230, 0.7);}.delButtons:hover {box-shadow: 0 0 1vh 0 rgba(0,0,0,0.8); background: rgba(255, 48, 48, 0.7);}';
    taskList[0].appendChild(style);
    addButtonListeners();
  }
  $$result.css.add(css$1);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<link rel="preconnect" href="https://fonts.googleapis.com" class="svelte-ps6pc8"> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin class="svelte-ps6pc8"> <link href="https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200..1000;1,200..1000&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet" class="svelte-ps6pc8"> <div class="containerMain svelte-ps6pc8"><h1 class="title svelte-ps6pc8" data-svelte-h="svelte-31v16d">Tasks</h1> <button class="addTask svelte-ps6pc8" data-svelte-h="svelte-1tofbvj">+</button> <div class="taskList svelte-ps6pc8"><table class="taskTable svelte-ps6pc8" data-svelte-h="svelte-1rb8v6q"></table> ${validate_component(AddModal, "AddModal").$$render(
      $$result,
      { addTask, showAddModal },
      {
        showAddModal: ($$value) => {
          showAddModal = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(EditModal, "EditModal").$$render(
      $$result,
      { editTask, showEditModal },
      {
        showEditModal: ($$value) => {
          showEditModal = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div> </div>`;
  } while (!$$settled);
  $$unsubscribe_authStore();
  $$unsubscribe_dbStore();
  return $$rendered;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".webpage.svelte-1mdbg6s{height:100vh;background:linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab, #23a6d5, #e73c7e, #ee7752);background-size:400% 400%;animation:svelte-1mdbg6s-gradient 30s infinite ease}.containerMain.svelte-1mdbg6s{width:44vw;margin-top:7vh;height:93vh;position:fixed;text-align:center}#taskView.svelte-1mdbg6s{padding-top:2vh;padding-left:2vw;padding-right:2vw}@keyframes svelte-1mdbg6s-gradient{0%{background-position:0% 50%\r\n        }50%{background-position:100% 50%\r\n        }100%{background-position:0% 50%\r\n        }}.welcome.svelte-1mdbg6s{font-family:'Ubuntu', sans-serif;font-weight:400;color:white;font-size:2vw;word-wrap:break-word;margin-top:7vh}hr.svelte-1mdbg6s{border:0;height:1px;background:rgba(255, 255, 255, 0.5);margin-top:7vh;width:30vw;margin-left:7vw}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $authStore, $$unsubscribe_authStore;
  $$unsubscribe_authStore = subscribe(authStore, (value) => $authStore = value);
  let email;
  authStore.subscribe((curr) => {
    email = curr?.currentUser?.email;
  });
  $$result.css.add(css);
  $$unsubscribe_authStore();
  return `  <link rel="preconnect" href="https://fonts.googleapis.com"> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> <link href="https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200..1000;1,200..1000&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet"> <title data-svelte-h="svelte-o1os5">PowerBoard</title> ${$authStore.currentUser !== null ? `<div class="webpage svelte-1mdbg6s">${validate_component(NavbarPrivate, "NavbarPrivate").$$render($$result, {}, {}, {})} ${validate_component(Board, "Board").$$render($$result, {}, {}, {})} <div class="containerMain svelte-1mdbg6s"><h2 class="welcome svelte-1mdbg6s">Welcome ${escape(email)}!</h2> <hr class="svelte-1mdbg6s"> <div id="taskView" class="svelte-1mdbg6s">${validate_component(TaskView, "TaskView").$$render($$result, {}, {}, {})}</div></div></div>` : `<div data-svelte-h="svelte-15ryvna">Loading...</div>`}`;
});
export {
  Page as default
};
