"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Products",
      [
        {
          name: "Son môi Bbia",
          description: "Son môi bình dân",
          importPrice: 0,
          quantity: 0,
          price: 0,
          productTypeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tom ford lip color",
          description: "Son môi cao cấp",
          importPrice: 0,
          quantity: 0,
          price: 0,
          productTypeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Son dưỡng dầu dừa bến tre the Cocoon",
          description: "Son dưỡng",
          importPrice: 0,
          quantity: 0,
          price: 0,
          productTypeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Son dưỡng Vaseline",
          description: "Son dưỡng",
          importPrice: 0,
          quantity: 0,
          price: 0,
          productTypeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Nước tẩy trang thương hiệu La Roche-Posay",
          description: "Nước tẩy trang cao cấp",
          importPrice: 0,
          quantity: 0,
          price: 0,
          productTypeId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Nước tẩy trang thương hiệu Bioderma",
          description: "Nước tẩy trang cao cấp",
          importPrice: 0,
          quantity: 0,
          price: 0,
          productTypeId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Nước tẩy trang thông minh Caryophy Smart Cleansing Water.",
          description: "Nước tẩy trang cao cấp",
          importPrice: 0,
          quantity: 0,
          price: 0,
          productTypeId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tẩy trang Nivea",
          description: "Tẩy trang bình dân",
          importPrice: 0,
          quantity: 0,
          price: 0,
          productTypeId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sữa rửa mặt Cetaphil gentle cleanser",
          description: "Sữa rửa mặt bình dân",
          importPrice: 0,
          quantity: 0,
          price: 0,
          productTypeId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sữa rửa mặt Cerave Foaming Facial Cleanser",
          description: "Sữa rửa mặt cao cấp",
          importPrice: 0,
          quantity: 0,
          price: 0,
          productTypeId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Kiehl’s Calendula Deep Cleansing Foaming Face Wash",
          description: "Sữa rửa mặt cao cấp",
          importPrice: 0,
          quantity: 0,
          price: 0,
          productTypeId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sữa rửa mặt Hada labo perfect white",
          description: "Sữa rửa mặt bình dân",
          importPrice: 0,
          quantity: 0,
          price: 0,
          productTypeId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Kem dưỡng ẩm Vichy Aqualia Thermal",
          description: "Kem dưỡng ẩm cao cấp",
          importPrice: 0,
          quantity: 0,
          price: 0,
          productTypeId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Kem dưỡng ẩm Laneige Water bank",
          description: "Kem dưỡng ẩm bình dân",
          importPrice: 0,
          quantity: 0,
          price: 0,
          productTypeId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Kem dưỡng ẩm Neutrogena cho da dầu",
          description: "Kem dưỡng ẩm bình dân",
          importPrice: 0,
          quantity: 0,
          price: 0,
          productTypeId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Kem dưỡng ẩm Innisfree",
          description: "Kem dưỡng ẩm bình dân",
          importPrice: 0,
          quantity: 0,
          price: 0,
          productTypeId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Christian louboutin",
          description: "Son môi cao cấp",
          importPrice: 0,
          quantity: 0,
          price: 0,
          productTypeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Clarins gentle exfoliator brightening",
          description: "Toner cao cấp",
          importPrice: 0,
          quantity: 0,
          price: 0,
          productTypeId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Products", null, {});
  },
};
