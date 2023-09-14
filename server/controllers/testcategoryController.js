// controllers/testcategoryController.js

const Testcategory = require('../models/testcategory');

exports.createTestcategory = async (req, res) => {
    try {
        const testcategory = new Testcategory(req.body);
        await testcategory.save();
        res.status(201).json({ message: 'Testcategory created successfully', testcategory });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getTestcategorys = async (req, res) => {
    try{
        const testcategorys = await Testcategory.find();
        res.json(testcategorys);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getTestcategoryById = async (req, res) => {
    try {
        const testcategory = await Testcategory.findById(req.params.id);
        if (!testcategory) {
            return res.status(404).json({ error: 'Testcategory not found' });
        }
        res.json(testcategory);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// exports.getByTestcategoryCode = async (req, res) => {
//     try {
//         const testcategorys = await Testcategory.find({ code: req.params.code }).exec();

//         if (!testcategorys) {
//             return res.status(404).json({ error: 'Testcategory not found' });
//         }
//         res.json(testcategorys);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };
// exports.getByTestcategoryCompanyName = async (req, res) => {
//     try {
//         const testcategorys = await Testcategory.find({ companyName: { $regex: req.params.companyName, $options: "i" }}).exec();

//         console.log('Testcategory not found');
//         if (!testcategorys) {

//             return res.status(404).json({ error: 'Testcategory not found' });
//         }
//         res.json(testcategorys);
//     } catch (error) {
//         console.log('Testcategory not found');

//         res.status(500).json({ error: error.message });
//     }
// };

exports.updateTestcategoryById = async (req, res) => {
    try {
        const testcategory = await Testcategory.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!testcategory) {
            return res.status(404).json({ error: 'Testcategory not found' });
        }
        res.json({ message: 'Testcategory updated successfully', testcategory });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteTestcategoryById = async (req, res) => {
    try {
        const testcategory = await Testcategory.findByIdAndRemove(req.params.id);
        if (!testcategory) {
            return res.status(404).json({ error: 'Testcategory not found' });
        }
        res.json({ message: 'Testcategory deleted successfully', testcategory });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// exports.deleteTestcategoryByCompanyName = async (req, res) => {
//     try {
//         const testcategory = await Testcategory.deleteOne({ companyName: { $regex: req.params.companyName, $options: "i" }});
//         if (!testcategory) {
//             return res.status(404).json({ error: 'Testcategory not found' });
//         }
//         res.json({ message: 'Testcategory deleted successfully', testcategory });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// exports.deleteTestcategoryByCode = async (req, res) => {
//     try {
//         const testcategory = await Testcategory.deleteOne({ code: req.params.code});
//         if (!testcategory) {
//             return res.status(404).json({ error: 'Testcategory not found' });
//         }
//         res.json({ message: 'Testcategory deleted successfully', testcategory });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };
