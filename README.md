# Блочна модель і позиціонування 
### Блочна модель
1. Блочні і текстові елементи.
1. `display`
  - `none`
  - `block`
  - `inline`
  - `inline-block`
  - `table-row`
  - `table-cell`
  - `run-in`
1. `width`
1. `height`
1. `margin`
  - накладання відступів
  - вихід відступів за межі батьківського елемента
1. `padding`
1. `border`
1. `box-sizing`
1. `overflow`

### Позиціонування
1. `vertical-align`
1. `position`
  - `static`
  - `relative`
  - `absolute`
  - `fixed`
  - `sticky`
1. `float`
1. `clear`

---
# Домашнє завдання
1. Зверстати шапку даного [макету](https://www.dropbox.com/s/oq6apyqrara7b4a/09_contact.psd?dl=0). А саме блоки з даного [скріншоту](http://screencast.com/t/gN7BwG27mdP)
1. Для верстки текту користуватись напрацюваннями з попереднього уроку:
  - Підключити файл стилів `normalize.css`.
  - Підключити нестандартний шрифт, що використовується на сторінці.


---
# Лінки
- [CSS для JavaScript-разработчика](https://learn.javascript.ru/css-for-js)
- [Блочная модель](http://xiper.net/learn/css/box-model/what-is-the-box-model)
- [Варианты «clearfix-хака» и его замен: сводная таблица](http://css-live.ru/articles-css/clearfix-block-formatting-context-methods-cheatsheet.html)
- [CSS позиционирование](http://html5book.ru/css-position/)
- [Как работает автоматическое позиционирование в CSS?](http://frontender.info/how-does-auto-positioning-work-in-css/)
- [Магические числа в CSS](http://frontender.info/magic-numbers-in-css/)
=======
# Об’єкти. Масиви.
### Оголошення об’єкта.
1. Поле. [?](https://learn.javascript.ru/object)
1. Метод. [?](https://learn.javascript.ru/object-methods#методы-у-объектов)
1. `this` [?](https://learn.javascript.ru/object-methods#доступ-к-объекту-через-this)
1. `toString` і `valueOf` [?](https://learn.javascript.ru/object-conversion)
1. `call`, `apply` [?](https://learn.javascript.ru/call-apply)
1. `bind` [?](https://learn.javascript.ru/bind)
1. `for…in`  [?](https://learn.javascript.ru/object-for-in)

### Оголошення масиву.
### Індекси.
### Методи масивів, `length`.
1. `arr.pop()`
1. `arr.push()`
1. `arr.shift()`
1. `arr.unshift()`
1. `arr.length`

---
# Домашнє завдання
1. Створити функцію для визначення:
    - Чи об'єкт пустий( `isEmpty(obj)` ). Функція повертає `boolean` значення.
    - Яка буде приймати параметр типу `sumData([array])`, перевіряти чи він порожній за допомогою функції `isEmpty`.
1. Створити об'єкт - `codeObj`, в якому буде масив - `length` з числами 45, 109, 32, 39, 1, 0. 
    Додати до нього число 95 з індексом 23(`data[23]`). Потім виконати функцію `sumData()`, для цього масиву.
    
1. ***Відсорувати `var data = 1, 2, 7, 10, 6, 9, 3, 8, 5, 4` методом бульбашки.
  
---
# Лінки
- [Хватит писать циклы for. Пришло время использовать Underscore.](http://frontender.info/stop-writing-for-loops-start-using-underscorejs/)
