const ResponseModel = require('../modals/responseModel');

exports.handlePostRequest = (req, res, next) => {
    try {
        const { data } = req.body;
        if (!Array.isArray(data)) throw new Error("Invalid input format");
        
        const numbers = data.filter(item => !isNaN(item));
        const alphabets = data.filter(item => /^[A-Za-z]$/.test(item));
        const highestAlphabet = alphabets.length ? [alphabets.sort().reverse()[0]] : [];

        const response = new ResponseModel(true, "Ujjwal Kumar Pal", "22BCS10793@cuchd.in", "22BCS10793", numbers, alphabets, highestAlphabet);
        res.status(200).json(response);
    } catch (error) {
        next(error);
    }
};

exports.handleGetRequest = (req, res) => {
    res.status(200).json({ operation_code: 1 });
};