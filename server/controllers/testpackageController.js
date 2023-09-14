// controllers/testpackageController.js

const Testpackage = require('../models/testpackage');

exports.createTestpackage = async (req, res) => {
    try {
        const testpackage = new Testpackage(req.body);
        await testpackage.save();
        res.status(201).json({ message: 'Testpackage created successfully', testpackage });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getTestpackages = async (req, res) => {
    try{
        const testpackages = await Testpackage.find();
        res.json(testpackages);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getTestpackageById = async (req, res) => {
    try {
        const testpackage = await Testpackage.findById(req.params.id);
        if (!testpackage) {
            return res.status(404).json({ error: 'Testpackage not found' });
        }
        res.json(testpackage);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// exports.getByTestpackageCode = async (req, res) => {
//     try {
//         const testpackages = await Testpackage.find({ code: req.params.code }).exec();

//         if (!testpackages) {
//             return res.status(404).json({ error: 'Testpackage not found' });
//         }
//         res.json(testpackages);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };
// exports.getByTestpackageCompanyName = async (req, res) => {
//     try {
//         const testpackages = await Testpackage.find({ companyName: { $regex: req.params.companyName, $options: "i" }}).exec();

//         console.log('Testpackage not found');
//         if (!testpackages) {

//             return res.status(404).json({ error: 'Testpackage not found' });
//         }
//         res.json(testpackages);
//     } catch (error) {
//         console.log('Testpackage not found');

//         res.status(500).json({ error: error.message });
//     }
// };

exports.updateTestpackageById = async (req, res) => {
    try {
        const testpackage = await Testpackage.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!testpackage) {
            return res.status(404).json({ error: 'Testpackage not found' });
        }
        res.json({ message: 'Testpackage updated successfully', testpackage });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteTestpackageById = async (req, res) => {
    try {
        const testpackage = await Testpackage.findByIdAndRemove(req.params.id);
        if (!testpackage) {
            return res.status(404).json({ error: 'Testpackage not found' });
        }
        res.json({ message: 'Testpackage deleted successfully', testpackage });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// exports.deleteTestpackageByCompanyName = async (req, res) => {
//     try {
//         const testpackage = await Testpackage.deleteOne({ companyName: { $regex: req.params.companyName, $options: "i" }});
//         if (!testpackage) {
//             return res.status(404).json({ error: 'Testpackage not found' });
//         }
//         res.json({ message: 'Testpackage deleted successfully', testpackage });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// exports.deleteTestpackageByCode = async (req, res) => {
//     try {
//         const testpackage = await Testpackage.deleteOne({ code: req.params.code});
//         if (!testpackage) {
//             return res.status(404).json({ error: 'Testpackage not found' });
//         }
//         res.json({ message: 'Testpackage deleted successfully', testpackage });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };
