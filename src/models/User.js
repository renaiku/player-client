/**
 * Represents an user
 * @type {User}
 */
class User {

    /** @type {number} */
    id;

    /** @type {string} */
    name;

    /**
     * @description constructor of the model
     * 
     * @param {Object} user
     * @param {number} user.id
     * @param {string} user.name
     * 
     * @returns {User} an User
     */
    constructor(user) {
        this.id = user.id;
        this.name = user.name;
    }

}

export default User;