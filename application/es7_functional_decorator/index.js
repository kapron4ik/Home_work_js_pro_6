// export const FunctionDecorator = () => {

  /*
    Function Decorator:
  */
  // function fluent(fn){
  //   return function (...args){
  //     console.log( 'fluent args', args );
  //     fn.apply(this, args);
  //     return this; // <-----
  //   }
  // }

  // function decoratorName( fn ) {
  //   return function(...rest){      
  //     fn.apply(this, ...rest);
  //   }
  // }

  // const decoratorName = fn => (...rest) => {
  //   fn.apply(this, ...rest );
  // }

//   function Person(){}
//   Person.prototype.setName = function( first, last ){
//     this.first = first;
//     this.last = last;
//   };
//   Person.prototype.sayName = function(){
//     console.log( 'Person name is', this.first, this.last );
//   };

//   let Peter = new Person();
//       Peter.setName('Peter', 'Jackson');
//       Peter.sayName();
//       console.log(Peter);

//       Peter.setName('Peter', 'Parker').sayName().setName('Bilbo', 'Bagins').sayName().sayName();
// }

export const es7Decorator = () => {
  /*
    Декораторы принимают 3 аргумента:
      - target : обьект к которому применяется декоратор
      - key : название метода
      - descriptor : дескриптор метода или свойства обьекта, это обьект который определяет
      как эта функция должна работать.

      Object.defineProperty();

      Благодаря декоратору, мы можем применить, его к ф-и или обьекту и вернуть примененный дескриптор.
      Новый дескриптор который мы возвращаем, станет дескриптором функции к которой мы хотим его применить.

      Звучит немного не очевидно, и сразу не совсем понятно, что мы можем с этим делать.
      На самом деле эта механика очень гибкая. Одно из свойств аргумента descriptor это
      value, который является функцией которую мы хотим присвоить.
      Мы можем перезаписать это новой функцией или в целом делать что угодно с этой функцией.
  */

  // function fluentDecorator({target, key, descriptor}){
  //   console.log('target', target, 'key', key, 'descriptor', descriptor)
  //   const originFn = descriptor.value;
  //   descriptor.value = function( ...args ){
  //     originFn.apply(this, args);
  //     return this;
  //   }
  // }


//   function decorate( target, key, descriptor ){
//     console.log('target', target, 'key', key, 'descriptor', descriptor);
//     const originFn = descriptor.value;
//     descriptor.value = function(...args){
//       originFn.apply( target, args );
//       return target;
//     }
//   }

  // class Person{
  //   @fluentDecorator
  //   setName( first, last ){
  //     this.first = first;
  //     this.last = last;
  //   }
  //   @fluentDecorator
  //   sayName(){
  //     console.log('Person say:');
  //     console.log( 'Person name is', this.first, this.last );
  //   }
  // }

  // let Hobbit = new Person();
  //     Hobbit.setName('Barliman', 'Butterbur').sayName()
  //           .setName('222', '333').sayName();

// - - - - - - - - - - - - - - - - - - - - - -
//
  let Arr = Array(1000).fill(0).map( item => Math.floor(Math.random()*100) );
  console.log( Arr );
//   console.log( '- - - - - - - - - - - -');
//   //
  function time({  target, key, descriptor }){
//   // Делаем bind на случай если в нашей исходной функии используется this
    console.log( this, target, key, descriptor  );
    const originFn = descriptor.value;

    let index = 0;
    descriptor.value = function ( ...args){
      let id = index++;
      console.time( key + id );
      let value = originFn( ...args );
      console.timeEnd( key + id);
      return value;
    }
  }

  class SuperArray{
    constructor( S_Array ){
      this.array = S_Array;
      // this.squareAll = this.squareAll.bind(this);
    }
    
    squareAll = () => {
      Arr.map( x => x * x );
    }
    @time
    message = ( message ) => {
      console.log( message );
    }
  }

  let SuperrrArray = new SuperArray( Arr );
  SuperrrArray.squareAll();
  SuperrrArray.message('test');
  console.log( SuperrrArray )

  // const Obj = {
  //   @time
  //   squareAll( arr) {
  //     return arr.map( x => x * x );
  //   }
    // @time
    // message(message){
    //   console.log( message );
    // }
  // // }
  // let x = Obj.squareAll( Arr )
  // console.log( Arr, x);
//   //
//   // Obj.message('Hello');
//   // Obj.message('Hello');
//   // Obj.message('Hello');
//   // Obj.message('Hello');
//   //
//
//
} //end
