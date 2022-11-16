const Medicine = require('../models/Medicines.model');
const Drugcategories = require('../models/Drugcategories.models');


module.exports.adminControler = {
    postMedicine: (req, res) => {
        Medicine.create({
            title: req.body.title,
            text: req.body.text,
            price: req.body.price,
            recipe: req.body.recipe,

        }).then((medic) => {
            res.json(medic)
        })
    },
    deleteMedicine: (req, res) => {
        Medicine.findByIdAndDelete(req.params.Id).then(() => {
            res.json('Препарат удален')
        })
    },
    patchMedicine: (req, res) => {
        Medicine.findByIdAndUpdate({ _id: req.params.Id }, {
            title: req.body.title,
            text: req.body.text,
            price: req.body.price,
            recipe: req.body.recipe
        }, {new: true}).then((medicine) => {
            res.json(medicine)
        })
    },

    postDrugcategories: (req, res) => {
        Drugcategories.create({

        }).then((drug) => {
            res.json(drug)
        })
    },
    deleteDrugcategories: (req, res) => {
        Drugcategories.findByIdAndDelete({_id: req.params.Id}, {
            title: req.body.title
        }, {new: true}).then(() => {
            res.json('Категория удалена')
        })
    },
    patchDrugcategories: (req, res) => {
        Drugcategories.findByIdAndUpdate({_id: req.params.Id },{
            title: req.body.title
        })
    }
}