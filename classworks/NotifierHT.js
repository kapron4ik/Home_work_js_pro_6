class Notifier {
  send(msg, baseNode, block) {
    console.log('CLASS NTIFIER: mesage was sended:', msg);
    const target = baseNode.querySelector(`.notifier__item[data-slug="${block}"]`);
    console.log('target', target);
    target.innerHTML += `<div>${msg}</div>`;
  }
}


export default Notifier;

export class SmsNotifier extends Notifier {
  send (msg, baseNode, block = 'sms'){
    //...
    super.send(msg, baseNode, block);
  }
}

export class ViberNotifier extends Notifier {
  send( msg, baseNode, block = 'viber'){
    //...
    super.send(msg, baseNode, block);
  }
}

export class GmailNotifier extends Notifier {
  send( msg, baseNode, block = 'mail' ){
    //...
    super.send(msg, baseNode, block);
  }
}

export class TelegramNotifier extends Notifier {
  send( msg, baseNode, block = 'telegram' ){
    //...
    super.send(msg, baseNode, block);
  }
}

export class SlackNotifier extends Notifier {
  send( msg, baseNode, block = 'slack' ){
    //...
    super.send(msg, baseNode, block);
  }
}