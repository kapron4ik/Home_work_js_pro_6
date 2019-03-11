const BaseDemo = () => {

    console.log( 'DECORATOR BASE!');

      function Human( name ){
        this.name = name;
        this.currentTemperature = 0;
        this.minTemperature = -10;

        console.log( this, `new Human ${this.name} arrived!`);
      }

      Human.prototype.ChangeTemperature = function( changeValue ){
        console.log(
          'current', this.currentTemperature + changeValue,
          'min', this.minTemperature
        );

        this.currentTemperature += changeValue;
        if( this.currentTemperature < this.minTemperature ){
          console.error(`Temperature is to low: ${this.currentTemperature}. ${this.name} died :(`);
        } else {
          console.log(`It's cold outside (${this.currentTemperature} deg), please wear some clothes, or ${this.name} will die!`);
        }
      };

      let Morgan = new Human('Morgan');
          Morgan.ChangeTemperature(-5);
          Morgan.ChangeTemperature(-6);
    

      function DressedHuman( Human ){
        this.name = Human.name;
        this.clothes = [
          { name: 'jacket', temperatureResistance: 20},
          { name: 'hat', temperatureResistance: 5},
          { name: 'scarf', temperatureResistance: 10},
        ];
        this.currentTemperature = 0;
        this.minTemperature = Human.minTemperature - this.clothes.reduce(
            (currentResistance, clothe ) => {
              console.log('currentResistance', currentResistance,  'clothe', clothe);
              return currentResistance + clothe.temperatureResistance;
            }, 0
          );
        console.log(`new Human ${this.name} arrived! He can survive in temperature ${this.minTemperature}`, this);
      }
      DressedHuman.prototype = Object.create(Human.prototype);

      let Dexter = new DressedHuman( new Human('Dexter') );
      console.log( Dexter );
          Dexter.ChangeTemperature(-6);
          Dexter.ChangeTemperature(-16);
          Dexter.ChangeTemperature(-16);
          Dexter.ChangeTemperature(-26);

};

export default BaseDemo;
