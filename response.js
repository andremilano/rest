const response = (statusCode, data, message, res) => {
    res.status(statusCode).json({
        payload: {
            status: statusCode,
            data: data,
        },
        pesan: message

        // optional
        // pagination: {
        //     prev: "",
        //     next: "",
        //     total: ""
        // }
    })
}

module.exports = response;