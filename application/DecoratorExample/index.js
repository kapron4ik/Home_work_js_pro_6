import Notifier from './baseDecorator';
// import Notifier from './Notifier';


class Application{
  constructor(){
    this.notifierTargets = [
      {name: 'sms', image: 'images/sms.svg', type: 'kyivstar'},
      {name: 'sms', image: 'images/sms.svg', type: 'mts'},
      {name: 'mail', image: 'images/gmail.svg'},
      {name: 'telegram', image: 'images/telegram.svg'},
      {name: 'viber', image: 'images/viber.svg'},
      {name: 'slack', image: 'images/slack.svg'},
    ];
    this.notifier = new Notifier( this.notifierTargets );
    this.createInterface = this.createInterface.bind(this);
    this.node = null;
  }

  createInterface(){
    const root = document.getElementById('root');
    const AppNode = document.createElement('section');

    AppNode.className = 'notifer_app';
      console.log( this.notifierTargets);
    AppNode.innerHTML =
    `
      <div class="notifer_app--container">
        <header>
          <input class="notifier__messanger" type="text"/>
          <button class="notifier__send">Send Message</button>
        </header>
        <div class="notifier__container">
        ${
          this.notifierTargets.map( item =>
            `
            <div class="notifier__item" data-slug="${item.name}">
              <header class="notifier__header">
                <img width="25" src="${item.image}"/>
                <span>${item.name}</span>
              </header>
              <div class="notifier__messages"></div>
            </div>
            `).join('')
        }
        </div>
      </div>
    `;
    const container = AppNode.querySelector('.notifier__container');
    const btn = AppNode.querySelector('.notifier__send');
    const input = AppNode.querySelector('.notifier__messanger');
    btn.addEventListener('click', () => {
      let value = input.value;
      this.notifier.sendMessage(value, this.node);

      // this.notifier.send(value, container, 'sms');
      // this.notifier.send(value, container, 'mail');
      // this.notifier.send(value, container, 'viber');
      // this.notifier.send(value, container, 'telegram');
      // this.notifier.send(value, container, 'slack');

    });

    this.node = AppNode;
    root.appendChild(AppNode);
  }

}


const Demo = () => {
  const NotifierApp = new Application();
        NotifierApp.createInterface();

  console.log( NotifierApp );

  // const NotApp = new Application();
  // NotApp.createInterface();

  // const NotApp2 = new Application();
  // NotApp2.createInterface();
}

export default Demo;
