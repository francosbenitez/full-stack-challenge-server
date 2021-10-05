module.exports = (sequelize, Sequelize) => {
    const user = sequelize.define('user', {     
        user_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            required: true
        },   
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: {
                msg: "The email already exists"
            },
            validate: {
                notNull: {
                    msg: "You must put a value"
                }
            }
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "You must put a value"
                }
            }
        }
    });
    return user;
};