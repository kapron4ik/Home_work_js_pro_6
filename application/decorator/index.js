// import Base from './basicUsage';
import BaseClass from './basicUsage_es6';

/*
  Декоратор — это структурный паттерн проектирования,
  который позволяет динамически добавлять объектам новую
  функциональность, оборачивая их в полезные «обёртки».

  https://refactoring.guru/ru/design-patterns/decorator
*/

const DecoratorDemo = () => {

  // console.log( 'DECORATOR AS DESIGN PATTERN DEMO!');
  // Base();
  BaseClass();
  // console.log( '- - - - - - - - - - - -');
};

export default DecoratorDemo;
