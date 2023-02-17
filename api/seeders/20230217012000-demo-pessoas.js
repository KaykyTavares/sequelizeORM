'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Pessoas', [
      {
        nome: 'Kayky',
        ativo: true,
        email: 'kayky@kayky.com',
        role: 'Estudante',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Erik',
        ativo: true,
        email: 'erik@erik.com',
        role: 'Docente',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Ana',
        ativo: true,
        email: 'ana@ana.com',
        role: 'Docente',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Maylon',
        ativo: true,
        email: 'maylon@maylon.com',
        role: 'Estudante',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Antonio',
        ativo: true,
        email: '',
        role: 'Docente',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Samira',
        ativo: true,
        email: 'antonio@antonio.com',
        role: 'Estudante',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Kevin',
        ativo: true,
        email: 'kevin@kevin.com',
        role: 'Estudante',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Maria',
        ativo: true,
        email: 'maria@maria.com',
        role: 'Docente',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Lupi',
        ativo: true,
        email: 'lupi@lupi.com',
        role: 'Docente',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Melissa',
        ativo: true,
        email: 'melissa@melissa.com',
        role: 'Estudante',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Pessoas', null, {});
  }
};
