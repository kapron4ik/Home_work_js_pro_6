

const DecoratorClass = () => {

  console.log( 'DECORATOR ON CLASSES!');

  class Human {
    constructor(name){
      this.name = name;
      this.currentTemperature = 0;
      this.minTemperature = -10;

      console.log(`new Human ${this.name} arrived!`, this);
    }

    changeTemperature(changeValue){
      console.log(
        'current', this.currentTemperature + changeValue,
        'min', this.minTemperature
      );
      let prevTemperature = this.currentTemperature;
      this.currentTemperature = this.currentTemperature + changeValue;

      if( this.currentTemperature < this.minTemperature ){
        console.error(`Temperature is to low: ${this.currentTemperature}. ${this.name} died :(`);
      } else {
        if( this.currentTemperature > prevTemperature  ) {
          console.log(`Temperature is growing. Seems someone go to Odessa or drink some hot tea?`)
        } else {
          console.log(`It's cold outside (${this.currentTemperature} deg), please wear some clothes, or ${this.name} will die!`);
        }
      }
    }
  }

  let Debra = new Human('Debra');
      Debra.changeTemperature(-5);
      Debra.changeTemperature(6);
      Debra.changeTemperature(-16);

  class DressedHuman extends Human{
    constructor(name){
      super(name);
      this.clothes = [
        { name: 'jacket', temperatureResistance: 20},
        { name: 'hat', temperatureResistance: 5},
        { name: 'scarf', temperatureResistance: 10},
      ];
      this.minTemperature = this.minTemperature - this.clothes.reduce(
          (currentResistance, clothe ) => {
            console.log('currentResistance', currentResistance,  'clothe', clothe);
            return currentResistance + clothe.temperatureResistance;
          }, 0
        );
      console.log(`Dressed Human ${name}`, this);
    }
  }

  let Masuka = new DressedHuman('Masuka');
      Masuka.changeTemperature(-25);
      Masuka.changeTemperature(-26);

}


export default DecoratorClass;
