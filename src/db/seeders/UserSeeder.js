"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "Admin",
          email: "admin@gmail.com",
          password:
            "$2a$12$jRX0GBYAr/XPUAiZYZjnruZ4TT65438891S3g0djTjOEo3wgErdn.", // "admin"
          address: "Thai Binh",
          phone: "0345",
          roleId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "User_1",
          email: "user_1@gmail.com",
          password:
            "$2a$12$wxnc0mT9whF38RhVYOJOc.atdUf7xB5aWh0ngoNt0P0bmQAkRUq0i", // "user1"
          address: "Ha Noi",
          phone: "034567",
          roleId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
