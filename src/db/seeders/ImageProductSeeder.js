"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "ImageProducts",
      [
        {
          productId: 1,
          image: "add-product.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productId: 2,
          image: "add-product.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productId: 3,
          image: "add-product.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productId: 4,
          image: "add-product.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productId: 5,
          image: "add-product.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productId: 6,
          image: "add-product.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productId: 7,
          image: "add-product.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productId: 8,
          image: "add-product.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productId: 9,
          image: "add-product.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productId: 10,
          image: "add-product.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productId: 11,
          image: "add-product.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productId: 12,
          image: "add-product.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productId: 13,
          image: "add-product.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productId: 14,
          image: "add-product.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productId: 15,
          image: "add-product.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productId: 16,
          image: "add-product.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productId: 17,
          image: "add-product.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productId: 18,
          image: "add-product.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("ImageProducts", null, {});
  },
};
