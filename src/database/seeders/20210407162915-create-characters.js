'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    let characters = [
      {id: 1, image: '/img/characters/6b11099f-1423-4563-9a1c-ce5317774584.png', age: 14  ,name: 'Alice', weight: 47, history: "Alicia es una niña de buena familia que sueña con vivir en un mundo en el que todo fuera un disparate. Cuando ve pasar al Conejo Blanco, ella le sigue hasta el País de las Maravillas, donde hay cosas, lugares y personajes de lo más extraño. Tras pasar un día de locos en ese extraño mundo, Alicia quiere volver a casa, por lo que le pide ayuda al Gato Risón, quien la lleva a ver a la Reina de Corazones. Ésta, tras enfurecerse, manda a todas sus tropas a por Alicia. La persecución termina llevando a Alicia ante el Sr. Picaporte, quien hace ver a Alicia que está durmiendo. Y al final, Alicia se despierta, volviendo de nuevo a su mundo.", movieId: 1},
      {id: 2, image: '/img/characters/3b5cd847-3c94-473b-9401-34b245dd4904.png', age: 60  ,name: 'El Sombrerero Loco', weight: 68, history: 'Posiblemente es el personaje más loco del País de las Maravillas. Al parecer es un chiflado vendedor de sombreros. En la película él aparece celebrando la "Fiesta de No Cumpleaños" en el jardín de la casa de la Liebre de Marzo junto con el Lirón. Cuando aparece Alicia, ellos les explican el motivo del No Cumpleaños: le dicen que un día al año es su cumpleaños, pero que aun le quedan otros 364 días de No Cumpleaños.', movieId: 1},
      {id: 3, image: '/img/characters/7338081b-fefe-4a66-989f-22aa4ee98e07.png', age: 14 , name: 'Alice', weight: 50, history: 'Poco después de descubrir que ella está a punto de ser propuesto, de 14 años Alicia huye de una fiesta de compromiso. Al hacerlo descubre un conejo llamado Nivins McTwisp con un chaleco azul. Intrigada, Alicia decide seguirlo, incluso tan lejos como tropezando en su madriguera del conejo. Después de su caída en tierras Alicia llega al Submundo, una tierra de fantasía post-apocalíptica, donde varios animales, aparentemente, han estado esperando a alguien llamada "Alicia". Mientras que Nivins afirma que es Alicia, los otros animales tienen la impresión de que ella es "El mal de Alicia".', movieId: 2},
      {id: 4, image: '/img/characters/71214372-a106-419e-9c35-fb3d22a3ce9a.jpg', age: 14 , name: 'El Sombrerero Loco', weight: 60, history: 'Ya en los eventos de la película, Alicia se topa con el Sombrerero cuando Chessur la lleva al lugar de la eterna merienda. Aunque Alicia no logra recordar a Tarrant, este la reconoce ensegida invitándola a la merienda a la vez que le explica un poco más la actual situación del Submundo.', movieId: 2},
    ]
    await queryInterface.bulkInsert('characters', characters, {});
    
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
    await queryInterface.bulkDelete('characters', null, {});
  }
};
