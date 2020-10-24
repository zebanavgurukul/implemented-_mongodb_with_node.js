const UserModel = require("../models/UserModel");

module.exports = {
    create : (req, res) => {
        let user = new UserModel ({
            First_Name : req.body.First_Name,
            Last_Name : req.body.Last_Name,
            email : req.body.email,
            password :req.body.password,
            age : req.body.age,
            team : req.body.team
        });
        user.save()
            .then(result => {
                res.json({ success: true, result : result });
            })
            .catch(err => {
                res.json({ success: false, result : err });
            });
    },
    update : (req,res) => {
        UserModel.findByIdAndUpdate({_id : req.params._id},req.body)
        .then(user => {
            res.json(user);
        })
        .catch(err => {
            res.json({ success: false, result : err });
        });
    },
    get : (req,res) => {
        UserModel.find()
        .then(result => {
            res.json({ success : true, result : result});
        })
        .catch((err) => {
            res.json({ success : true, result : result});
        })
    },
    getID : (req,res) => {
        UserModel.findById({_id : req.params._id})
        .then(result => {
            res.json({ success : true, result : result});
        })
        .catch((err) => {
            res.json({ success : true, result : result});
        })
    },
    delete : (req, res) =>{
        UserModel.findByIdAndRemove({_id : req.params._id})
        .then((result) => {
            res.json({ success : true, result : result})
        })
        .catch((err) => {
            res.json({ success : true, result : result});
        })
    }
}