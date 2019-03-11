import { SmsNotifier, SlackNotifier,  ViberNotifier, GmailNotifier, TelegramNotifier } from './Notifier';

class BaseDecorator {
  constructor( clients ){
    let obs = clients.map( obs => {
      if( obs.name === 'sms' ){
        return new SmsNotifier(obs);
      } else if( obs.name === 'mail'){
        return new GmailNotifier(obs);
      } else if( obs.name === 'telegram'){
        return new TelegramNotifier(obs);
      } else if( obs.name === 'viber'){
        return new ViberNotifier(obs);
      } else if( obs.name === 'slack'){
        return new SlackNotifier(obs);
      }
    })
    this.clients = obs;
  }
  sendMessage( msg, baseNode ){
    this.clients.map( ( obs ) => {
      obs.send(msg, baseNode);
    });
  }

  addNotifier( notifier ){
    this.clients.push( notifier );
  }
}


export default BaseDecorator;
