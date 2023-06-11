"use strict";

const faker = require("faker");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const bills = [];

    for (let i = 0; i < 30; i++) {
      bills.push({
        purchaseDate: faker.date.between("2021-01-01", "2023-12-31"),
        totalMoney: faker.random.number(),
        userId: faker.random.number({ min: 2, max: 5 }),
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }

    await queryInterface.bulkInsert("Bills", bills);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Bills", null, {});
  },
};
