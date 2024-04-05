// main.js
import { MyWysiwyg } from "./modules/my_wysiwyg.js";

const mw = new MyWysiwyg(document.querySelector("textarea"), {
  buttons: ["gras", "italique", "barré", "couleur", "police", "lien", "taille", "plus", "minus", "gauche", "centrer", "droite", "justifier", "enregistrer", "youtube", "dailymotion", "image",],
});
