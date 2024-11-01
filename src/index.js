import { sum } from "./modules/sum";

const root = document.getElementById("root");
root.textContent = sum(1, 2).toString();