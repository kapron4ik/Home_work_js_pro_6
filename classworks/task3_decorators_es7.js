/*

  Задание:
    1. Используя функциональный декоратор, написать декоратор который будет показывать
       аргументы и результат выполнения функции.

    2. Написать декоратор для класса, который будет преобразовывать аргументы в число,
       если они переданы строкой, и выводить ошибку если переданая переменная не
       может быть преобразована в число
*/

const Work1 = () => {

  function fluentDecorator({target, key, descriptor}){
      const originFn = descriptor.value;
      descriptor.value = function( ...args ){
        args.forEach((item,i,arr) => {
          if (isNaN(Number(item))){
            alert(`Переданая переменная "${item}" не может быть преобразована в число`);
          }
          else {
            arr.splice(i,1,Number(item))
          }
        })
        console.log ('arguments',args);
        let result = originFn.apply(this, args);
        console.log('result',result);
        return this;
      }
    }

  class CoolMath {
    @fluentDecorator
    addNumbers(a,b){ return a+b; }
    @fluentDecorator
    multiplyNumbers(a,b){ return a*b}
    @fluentDecorator
    minusNumbers(a,b){ return a-b }
  }
  let Calcul = new CoolMath();
  let x = Calcul.addNumbers(2, 2)
  let y = Calcul.multiplyNumbers("10", "2")
  let z = Calcul.minusNumbers(10, 2)

};

export default Work1;
