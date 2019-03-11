
/*
  Повторить задание с оповещаниями (application/DecoratorExample), с
  использованием нескольких уровней абстракций, а именно паттерны:
  Decorator, Observer, Fabric

  Задача: Написать динамичную систему оповещений, которая будет отправлять
  сообщения все подписаным на неё "Мессенджерам".
  Картинки мессенджеров есть в папке public/images

  Класс оповещения должен иметь декоратор на каждый мессенджер.

  При создании обьекта класса Application нужно передавать обьект
  в котором будут находится те "Мессенджеры" который в результате будут
  подписаны на этот блок приложения.

  Отправка сообщения по "мессенджерам" должна происходить при помощи
  паттерна Observer.

  При отправке сообщения нужно создавать обьект соответствующего класса,
  для каждого типа оповещания.

  let header = new Application('slack', 'viber', 'telegramm');
  let feedback = new Application('skype', 'messanger', 'mail', telegram);

  btn.addEventListener('click', () => header.sendMessage(msg) );

  Архитектура:
  Application( messanges ) ->
    notfier = new Notifier
    renderInterface(){...}
  Notifier ->
    constructor() ->
      Fabric-> Фабрикой перебираете все типы месенджеров которые
      подписаны на эту Application;
    send() -> Отправляет сообщение всем подписчикам

*/

import Notifier from './baseDecoratorHT';
// import Notifier from './NotifierHT';

class Application {
  constructor() {
    this.notifierTarget = [
      { name: 'sms', image: 'images/sms.svg' },
      { name: 'mail', image: 'images/gmail.svg' },
      { name: 'telegram', image: 'images/telegram.svg' },
      { name: 'viber', image: 'images/viber.svg' },
      { name: 'slack', image: 'images/slack.svg' }
    ];
    this.notifier = new Notifier(this.notifierTarget);
    this.createInterface = this.createInterface.bind(this);
    this.node = null;
  }

  createInterface() {
    const root = document.getElementById('root');
    const AppNode = document.createElement('section');

    AppNode.className = 'notifer_app';
    // console.log( this.notifierTargets);
    AppNode.innerHTML = `
      <div class="notifer_app--container">
        <header>
          <input class="notifier__messanger" type="text">
          <button class="notifier__send">Send Message</button>
        </header>
        <div class="notifier__container">
          ${this.notifierTarget.map(item => `
            <div class="notifier__item" data-slug="${item.name}">
              <header class="notifier__header">
                <img width="25" src="${item.image}">
                <span>${item.name}</span>
              </header>
              <div class="notifier__messages"></div>
            </div>
          `).join('')}
        </div>
      </div> 
    `;
    const container = AppNode.querySelector('.notifier__container');
    const btn = AppNode.querySelector('.notifier__send');
    const input = AppNode.querySelector('.notifier__messanger');
    btn.addEventListener('click', () => {
      let value = input.value;
      this.notifier.sendMessage(value, this.node);
    });

    this.node = AppNode;
    root.appendChild(AppNode);
  }

}

const Demo = () => {
  const NotifierApp = new Application();
  NotifierApp.createInterface();

  console.log(NotifierApp)
}

export default Demo;