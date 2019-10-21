'use strict';
module.exports = (sequelize, DataTypes) => {
    const Company = sequelize.define('Company', {
        name: {
            type:DataTypes.STRING,
            allowNull: false,
        },
    });
    Company.associate = function (models) {
        Company.hasMany(models.Employee, {
            foreignKey: 'companyId',
            as: 'employees',
        })
    };
    return Company;
};