// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";


// Header
document.addEventListener("click", function (e) {
  const targetElement = e.target;
  if (targetElement.closest('.search-header__icon')) {
    document.documentElement.classList.add('search-open');
    e.preventDefault();
  } else if (!targetElement.closest('.search-header')) {
    document.documentElement.classList.remove('search-open');
  }
});