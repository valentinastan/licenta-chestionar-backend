'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Questions', [
      {
        text: 'In general, cu ce frecventa consumati legume proaspete?'
      },
      {
        text: 'Cat de des achizitionati legume proaspete?'
      },
      {
        text: 'Ce procent din cantitatea totala de alimente consumate intr-o luna este alocat consumului de legume proaspete?'
      },
      {
        text: 'Ce produse din categoria legume proaspete ati consumat in ultima luna?',
      },
      {
        text: 'De unde obisnuiti sa va procurati legumele proaspete?',
      },
      {
        text: 'Va rugam sa mentionati, in ordinea importantei, principalele trei criterii de care tineti cont in alegerea legumelor proaspete?',
      },
      {
        text: 'Referindu-va la categoriile de legume proaspete cultivate si in Romania, care dintre urmatoarele'+
        ' afirmatii referitoare la achizitionarea lor vi se potriveste cel mai bine?',
      },
      {
        text: 'Preferati sa achizitionati legume proaspete in extrasezon?',
      },
      {
        text: 'Ce legume v-ati dori sa puteti achizitiona pe tot parcursul anului, chiar si in sezonul rece?',
      },
      {
        text: 'Cu cat ati fi dispus sa platiti mai mult pentru un kilogram de legume ecologice comparativ cu un kilogram de legume conventionale?',
      },
      {
        text: 'Cat de multumit sunteti cu privire la legumele proaspete pe care le achizitionati in momentul actual?',
      },
      {
        text: 'Cat de dificil va este sa gasiti legume proaspete conform asteptarilor dumneavoastra?',
      },
      {
        text: 'Care este varsta dumneavoastra?',
      },
      {
        text: 'Sexul dumneavoastra?',
      },
      {
        text: 'Care este numarul de persoane care locuiesc in gospodaria dumneavoastra?',
      },
      {
        text: 'Din care copii sub 18 ani?',
      },
      {
        text: 'Care este starea civila a dumneavoastra?',
      },
      {
        text: 'Care este ultima scoala absolvita?',
      },
      {
        text: 'Ocupatia dumneavoastra actuala?',
      },
      {
        text: 'Care este, cu aproximatie, venitul lunar net al dumneavoastra?',
      },
      {
        text: 'Cum apreciati veniturile dumneavoastra in raport cu necesitatile pe care le aveti?',
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Questions', null, {});
  }
};
