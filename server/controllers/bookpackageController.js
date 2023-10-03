// controllers/bookpackageController.js

const BookPackage = require('../models/bookpackage');

exports.createBookPackage = async (req, res) => {
    try {
        const bookpackage = new BookPackage(req.body);
        await bookpackage.save();
        res.status(201).json({ message: 'BookPackage created successfully', bookpackage });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getBookPackages = async (req, res) => {
    try{
        const bookpackages = await BookPackage.find();
        res.json(bookpackages);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getBookPackageById = async (req, res) => {
    try {
        const bookpackage = await BookPackage.findById(req.params.id);
        if (!bookpackage) {
            return res.status(404).json({ error: 'BookPackage not found' });
        }
        res.json(bookpackage);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// exports.getByBookPackageCode = async (req, res) => {
//     try {
//         const bookpackages = await BookPackage.find({ code: req.params.code }).exec();

//         if (!bookpackages) {
//             return res.status(404).json({ error: 'BookPackage not found' });
//         }
//         res.json(bookpackages);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };
// exports.getByBookPackageCompanyName = async (req, res) => {
//     try {
//         const bookpackages = await BookPackage.find({ companyName: { $regex: req.params.companyName, $options: "i" }}).exec();

//         console.log('BookPackage not found');
//         if (!bookpackages) {

//             return res.status(404).json({ error: 'BookPackage not found' });
//         }
//         res.json(bookpackages);
//     } catch (error) {
//         console.log('BookPackage not found');

//         res.status(500).json({ error: error.message });
//     }
// };

exports.updateBookPackageById = async (req, res) => {
    try {
        const bookpackage = await BookPackage.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!bookpackage) {
            return res.status(404).json({ error: 'BookPackage not found' });
        }
        res.json({ message: 'BookPackage updated successfully', bookpackage });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteBookPackageById = async (req, res) => {
    try {
        const bookpackage = await BookPackage.findByIdAndRemove(req.params.id);
        if (!bookpackage) {
            return res.status(404).json({ error: 'BookPackage not found' });
        }
        res.json({ message: 'BookPackage deleted successfully', bookpackage });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// exports.deleteBookPackageByCompanyName = async (req, res) => {
//     try {
//         const bookpackage = await BookPackage.deleteOne({ companyName: { $regex: req.params.companyName, $options: "i" }});
//         if (!bookpackage) {
//             return res.status(404).json({ error: 'BookPackage not found' });
//         }
//         res.json({ message: 'BookPackage deleted successfully', bookpackage });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// exports.deleteBookPackageByCode = async (req, res) => {
//     try {
//         const bookpackage = await BookPackage.deleteOne({ code: req.params.code});
//         if (!bookpackage) {
//             return res.status(404).json({ error: 'BookPackage not found' });
//         }
//         res.json({ message: 'BookPackage deleted successfully', bookpackage });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };
