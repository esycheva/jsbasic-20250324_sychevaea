/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this.elem = rows;
  }

  get elem() {
    return this._elem;
  }

  set elem(rows) {
    let root = document.createElement('table');
    let html = `
      <thead>
        <tr>
          <td>Имя</td>
          <td>Возраст</td>
          <td>Зарплата</td>
          <td>Город</td>
          <td></td>
        </tr>
      </thead>
      <tbody></tbody>
    `;
    root.insertAdjacentHTML('afterbegin', html);

    let body = root.querySelector('tbody');
    rows.forEach((item) => {
      let rowHtml = `
        <tr>
          <td>${item.name}</td>
          <td>${item.age}</td>
          <td>${item.salary}</td>
          <td>${item.city}</td>
          <td><button>X</button></td>
        </tr>
      `;
      body.insertAdjacentHTML('beforeend', rowHtml);
    })
    root.onclick = function(event){
      let target = event.target; // где клик?

      if (target.tagName != 'BUTTON') return;

      let tr = event.target.closest('tr');

      tr.remove();
    }
    this._elem = root;
  }
}
