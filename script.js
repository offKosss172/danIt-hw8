/* теория
1. -Опишіть своїми словами що таке Document Object Model (DOM)
все єлементы которые выводятся в браузере на странице - все дивы, спаны, то что имеет класс, или айди , или просто теги  
2. Яка різниця між властивостями HTML-елементів innerHTML та innerText?
innerText - это только текст, сам текст, его можем вызвать и работать с ним (текст кот находится в спане или диве или секции , именно тело текста)
innerHTML - обращается к тексту с тегов  в котором он находится (див, спан..) и к тем что там лежат ( b i u)
3. Як можна звернутися до елемента сторінки за допомогою JS? Який спосіб кращий?
на мой взглял -  document.querySelector , тут я не думаю класс то или ай ди или тег... этим вызываю что попадется, только в скобках уточняю
селектор (по аналогии с цсс)


*/

//задание 1   - Найти все элементы <p> на странице
const paragraphs = document.getElementsByTagName("p");

// Пройти по всем параграфам и установить цвет фона
for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.backgroundColor = "#ff0000";
}


// задание2
const optionsList = document.getElementById("optionsList");
console.log(optionsList);

// Найти родительский элемент и вывести его в консоль
const parentElement = optionsList.parentElement;
console.log(parentElement);

// Найти дочерние элементы и вывести их названия и типы
const childNodes = optionsList.childNodes;
for (let i = 0; i < childNodes.length; i++) {
  console.log(childNodes[i].nodeName + ": " + childNodes[i].nodeType);
}


/* задание 3 - или я туплю или задание не корректно я не вижу класса testParagraph в коде, я вижу айди такое - потому делаю
 предположение что в задании ошибка */
let testParagraph = document.querySelector('#testParagraph');
testParagraph.innerText = 'This is a paragraph';


// задание 4
const allElements = document.querySelectorAll(".test");
console.log(allgit initElements);

// задание 5
const mainHeader = document.querySelector(".main-header");
const nestedElements = mainHeader.querySelectorAll("*");

for (let i = 0; i < nestedElements.length; i++) {
  nestedElements[i].classList.add("nav-item");
  console.log(nestedElements[i]);}

  //задание 6
  const sectionTitles = document.querySelectorAll(".section-title");

for (let i = 0; i < sectionTitles.length; i++) {
  sectionTitles[i].classList.remove("section-title");
}