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
import DecoratorBase from './decorator';

DecoratorBase();


const BeachParty = () => {

  class CoolersHuman extends DressedHuman{
    constructor(name){
      super(name);
      this.name
    }
  }
  console.log( 'your code ');

}

export default BeachParty;