// Задача 5 - 3
// использование методов класса
// Напиши класс Storage, который будет создавать объекты для управления
// складом товаров.При вызове будет получать один аргумент - начальный
// массив товаров, и записывать его в свойство items.

// Добавь методы класса:

// getItems() - возвращает массив текущих товаров
// addItem(item) - получает новый товар и добавляет его к текущим
// removeItem(item) - получает товар и, если он есть, удаляет его из текущих

// Write code under this line

class Storage {
  constructor(array) {
    this.items = array;
    // this.items = items;
  }

  getItems(array) {
    return this.items;
  }

  addItem(item) {
    for (let arrayItem of this.items) {
      if (arrayItem !== item) {
        this.items.push(item);
        break;
      }
    }
  }

  removeItem(item) {
    for (let i = 0; i < this.items.length; i += 1) {
      if (this.items[i] === item) {
        this.items.splice(i, 1);
      }
    }
  }
}

// console.log(typeof Storage);
// 'function'

const goods = ["Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор"];

const storage = new Storage(goods);

console.log(storage.getItems());
/* [
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор'
] */

storage.addItem("Дроид");
console.log(storage.getItems());
/* [
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
  'Дроид'
] */

storage.removeItem("Пролонгер");
console.log(storage.getItems());
/* [
  'Нанитоиды',
  'Железные жупи',
  'Антигравитатор',
  'Дроид'
] */
