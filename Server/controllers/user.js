const users = [
    {
        success: true,
        customer: {
            id: 'IJ101',
            name: 'Ashwini Dhure',
            last_login: '30 June 2020',
            balance: '$3000',
            transaction: [
                {
                    date: '01 feb 2018',
                    desc: 'Room Rent',
                    amount: '$700'
                },
                {
                    date: '02 feb 2018',
                    desc: 'Morrision',
                    amount: '$40'
                }
            ]
        }
    }
]

const error = {
    "success": false
}

exports.postUser = (req, res, next) => {
    const customerID = req.body.customerid;
    if(!customerID) {
        res.status(400).send(error);
        return;
    }
    else if(customerID === users[0].customer.id) {
        res.status(201).send(users);
        return;
    }
    res.status(400).send(error);
}