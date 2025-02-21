class ResponseModel {
    constructor(is_success, user_id, email, roll_number, numbers, alphabets, highest_alphabet) {
        this.is_success = is_success;
        this.user_id = user_id;
        this.email = email;
        this.roll_number = roll_number;
        this.numbers = numbers;
        this.alphabets = alphabets;
        this.highest_alphabet = highest_alphabet;
    }
}

module.exports = ResponseModel;