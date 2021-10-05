module.exports = (sequelize, Sequelize) => {
    const operation = sequelize.define('operation', {
        operation_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            required: true
        },
        user_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            required: true
        },
        concept: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "You must put a value"
                }
            }
        },
        amount: {
            type: Sequelize.DOUBLE,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "You must put a value"
                },
                isDecimal: {
                    msg: "You must put a numeric value"
                }
            }
        },
        date: {
            type: Sequelize.DATE,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'You must put a value'
                },
                isDate: {
                    msg: 'You must put a date'
                }
            }
        },
        category: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "You must put a value"
                }
            }
        },
        type: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "You must put a value"
                }
            }
        }
    });
    return operation;
};