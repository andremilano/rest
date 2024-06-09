const response = (statusCode, data, message, res) => {
    res.status(statusCode).json({
        payload: {
            status: statusCode,
            data: data,
        },
        pesan: message,
        pagination: {
            prev: "",
            next: "",
            total: ""
        }
    })
}

module.exports = response;