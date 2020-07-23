const successResponse = {
    "success": true,
    "isAuthenticated": true,
    "customerid": "IJ101"
}

const errorResponse = {
    "success": true,
    "isAuthenticated": false
}

const technicalError = {
    "success": false
}

exports.postLogin = (req, res, next) => {
    const clientID = req.body.client_id;
    const loginData = req.body.user;

    if (!clientID && !loginData) {
        res.status(401).send(technicalError);
        return;
    }
    else if (loginData.id  && loginData.password) {
        res.status(201).send(successResponse);
        return;
    }
    else {
        res.status(400).send(errorResponse);
        return;
    }
}