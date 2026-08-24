import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { all } from "@awesome.me/kit-95d9831851/icons";

// Nuxt gère le CSS, sinon flash d'icônes géantes au chargement
config.autoAddCss = false;
library.add(...all);
console.log(
  all.length,
  all.map((i) => `${i.prefix}:${i.iconName}`),
);
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("FontAwesomeIcon", FontAwesomeIcon);
});
