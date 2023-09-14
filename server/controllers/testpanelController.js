// controllers/testpanelController.js

const Testpanel = require('../models/testpanel');

exports.createTestpanel = async (req, res) => {
    try {
        const testpanel = new Testpanel(req.body);
        await testpanel.save();
        res.status(201).json({ message: 'Testpanel created successfully', testpanel });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getTestpanels = async (req, res) => {
    try{
        const testpanels = await Testpanel.find();
        res.json(testpanels);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getTestpanelById = async (req, res) => {
    try {
        const testpanel = await Testpanel.findById(req.params.id);
        if (!testpanel) {
            return res.status(404).json({ error: 'Testpanel not found' });
        }
        res.json(testpanel);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// exports.getByTestpanelCode = async (req, res) => {
//     try {
//         const testpanels = await Testpanel.find({ code: req.params.code }).exec();

//         if (!testpanels) {
//             return res.status(404).json({ error: 'Testpanel not found' });
//         }
//         res.json(testpanels);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };
// exports.getByTestpanelCompanyName = async (req, res) => {
//     try {
//         const testpanels = await Testpanel.find({ companyName: { $regex: req.params.companyName, $options: "i" }}).exec();

//         console.log('Testpanel not found');
//         if (!testpanels) {

//             return res.status(404).json({ error: 'Testpanel not found' });
//         }
//         res.json(testpanels);
//     } catch (error) {
//         console.log('Testpanel not found');

//         res.status(500).json({ error: error.message });
//     }
// };

exports.updateTestpanelById = async (req, res) => {
    try {
        const testpanel = await Testpanel.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!testpanel) {
            return res.status(404).json({ error: 'Testpanel not found' });
        }
        res.json({ message: 'Testpanel updated successfully', testpanel });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteTestpanelById = async (req, res) => {
    try {
        const testpanel = await Testpanel.findByIdAndRemove(req.params.id);
        if (!testpanel) {
            return res.status(404).json({ error: 'Testpanel not found' });
        }
        res.json({ message: 'Testpanel deleted successfully', testpanel });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// exports.deleteTestpanelByCompanyName = async (req, res) => {
//     try {
//         const testpanel = await Testpanel.deleteOne({ companyName: { $regex: req.params.companyName, $options: "i" }});
//         if (!testpanel) {
//             return res.status(404).json({ error: 'Testpanel not found' });
//         }
//         res.json({ message: 'Testpanel deleted successfully', testpanel });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// exports.deleteTestpanelByCode = async (req, res) => {
//     try {
//         const testpanel = await Testpanel.deleteOne({ code: req.params.code});
//         if (!testpanel) {
//             return res.status(404).json({ error: 'Testpanel not found' });
//         }
//         res.json({ message: 'Testpanel deleted successfully', testpanel });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };
