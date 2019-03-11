/*

  Задание: используя паттерн декоратор, модифицировать класс Human из примера basicUsage.

  0.  Создать новый конструктор, который будет принимать в себя человека как аргумент,
      и будем добавлять ему массив обьектов coolers (охладители), а него внести обьекты
      например мороженное, вода, сок и т.д в виде: {name: 'icecream', temperatureCoolRate: -5}

  1.  Расширить обработку функции ChangeTemperature в прототипе human таким образом,
      что если темпаретура становится выше 30 градусов то мы берем обьект из массива coolers
      и "охлаждаем" человека на ту температуру которая там указана.

      Обработку старого события если температура уходит вниз поставить с условием, что температура ниже нуля.
      Если температура превышает 50 градусов, выводить сообщение error -> "{Human.name} зажарился на солнце :("

  2.  Бонус: добавить в наш прототип нашего нового класса метод .addCooler(), который
      будет добавлять "охладитель" в наш обьект. Сделать валидацию что бы через этот метод
      нельзя было прокинуть обьект в котором отсутствует поля name и temperatureCoolRate.
      Выводить сообщение с ошибкой про это.

*/
const BeachParty = () => {

  class Human {
    constructor(name){
      this.name = name;
      this.currentTemperature = 0;
      this.minTemperature = -10;
      this.maxTemperature = 50;
      this.criticalTemperature = 30;

      console.log(`new Human ${this.name} arrived!`, this);
    }

    changeTemperature(changeValue){
      console.log(
        'current', this.currentTemperature + changeValue,
        'min', this.minTemperature,
        'max', this.maxTemperature,
        'critical', this.criticalTemperature
      );
      let prevTemperature = this.currentTemperature;
      this.currentTemperature += changeValue;
      if(this.currentTemperature < 0){
        if( this.currentTemperature < this.minTemperature ){
          console.error(`Temperature is to low: ${this.currentTemperature}. ${this.name} died :(`);
        } else {
          if( this.currentTemperature > prevTemperature  ) {
            console.log(`Temperature is growing. Seems someone go to Odessa or drink some hot tea?`)
          } else {
            console.error(`It's cold outside (${this.currentTemperature} deg), please wear some clothes, or ${this.name} will die!`);
          }
        }
      } else {
        if (this.currentTemperature > this.maxTemperature){
          console.log(`Temperature is to high: ${this.currentTemperature}. ${this.name} roasted in the sun :(`);
        } else {
          if (this.currentTemperature > this.criticalTemperature){
              for ( let i=0 ; i < this.coolers.length; i++){
                this.currentTemperature += this.coolers[i].temperatureCoolRate;
                console.log(`${this.name} ate ${this.coolers[i].name}`)
                console.log(`current`, this.currentTemperature);
                if (this.currentTemperature <= this.criticalTemperature) break;
              } 
          }
          else {
            console.log(`Getting hot!`);
          }
        }
      }
    } 
  }

  class CoolersHuman extends Human{
    constructor(name){
      super(name);
      this.coolers = [
        {name: 'icecream', temperatureCoolRate: -5},
        {name: 'beer', temperatureCoolRate: -10},
        {name: 'mojito', temperatureCoolRate: -15}
      ];
      // this.maxTemperature = 50;
    }
  }

  let Garry = new CoolersHuman('Garry');
      Garry.changeTemperature(25);
      Garry.changeTemperature(6);
      Garry.changeTemperature(16);
      Garry.changeTemperature(21);
      Garry.changeTemperature(50);

}

export default BeachParty;
