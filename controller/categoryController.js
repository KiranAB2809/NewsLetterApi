// import CategoryList from '../models/category';

const CategoryList = [
    {
        "id": 1,
        "name": "General"
    },
    {
        "id": 2,
        "name": "Technical"
    },
    {
        "id": 3,
        "name": "Success Story"
    },
    {
        "id": 4,
        "name": "Did you know?"
    },
    {
        "id": 5,
        "name": "Awards and Reconization"
    },
    {
        "id": 6,
        "name": "Advertisement"
    }
];

var categoryController = () => {
    var get = (req, res) => {
        res.json(CategoryList);
    }
    return {
        get: get
    }
}


module.exports = categoryController;