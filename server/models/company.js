module.exports = function(sequelize, DataTypes) {
  var Company = sequelize.define('Company', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING
    },
    websiteUrl: {
      type: DataTypes.STRING
    },
    crunchBaseUrl: {
      type: DataTypes.STRING
    },
    angelListUrl: {
      type: DataTypes.STRING
    },
    status: {
      type: DataTypes.STRING,
      values: ['Operating', 'Exited', 'Dead']
    },
    cohort: {
      type: DataTypes.INTEGER
    },
    year: {
      type: DataTypes.INTEGER
    },
    exitValue: {
      type: DataTypes.INTEGER
    },
    colValue: {
      type: DataTypes.STRING
    },
    fundingValue: {
      type: DataTypes.BIGINT
    },
    description: {
      type: DataTypes.STRING
    }
  }, {
    classMethods: {
      // associate: function(models) {
      //   Product.hasMany(models.Inventory)
      // }
    }
  });

  return Company;
};