// controllers/ReferralController.js

const Referral = require('../models/referral');

exports.createReferral = async (req, res) => {
    try {
        const referral = new Referral(req.body);
        await referral.save();
        res.status(201).json({ message: 'Referral created successfully', Referral });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getReferrals = async (req, res) => {
    try{
        const referrals = await Referral.find();
        res.json(referrals);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getReferralById = async (req, res) => {
    try {
        const referral = await Referral.findById(req.params.id);
        if (!referral) {
            return res.status(404).json({ error: 'Referral not found' });
        }
        res.json(referral);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// exports.getByReferralCode = async (req, res) => {
//     try {
//         const Referrals = await Referral.find({ code: req.params.code }).exec();

//         if (!Referrals) {
//             return res.status(404).json({ error: 'Referral not found' });
//         }
//         res.json(Referrals);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };
// exports.getByReferralCompanyName = async (req, res) => {
//     try {
//         const Referrals = await Referral.find({ companyName: { $regex: req.params.companyName, $options: "i" }}).exec();

//         console.log('Referral not found');
//         if (!Referrals) {

//             return res.status(404).json({ error: 'Referral not found' });
//         }
//         res.json(Referrals);
//     } catch (error) {
//         console.log('Referral not found');

//         res.status(500).json({ error: error.message });
//     }
// };

exports.updateReferralById = async (req, res) => {
    try {
        const referral = await Referral.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!referral) {
            return res.status(404).json({ error: 'Referral not found' });
        }
        res.json({ message: 'Referral updated successfully', referral });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteReferralById = async (req, res) => {
    try {
        const referral = await Referral.findByIdAndRemove(req.params.id);
        if (!referral) {
            return res.status(404).json({ error: 'Referral not found' });
        }
        res.json({ message: 'Referral deleted successfully', referral });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// exports.deleteReferralByCompanyName = async (req, res) => {
//     try {
//         const Referral = await Referral.deleteOne({ companyName: { $regex: req.params.companyName, $options: "i" }});
//         if (!Referral) {
//             return res.status(404).json({ error: 'Referral not found' });
//         }
//         res.json({ message: 'Referral deleted successfully', Referral });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// exports.deleteReferralByCode = async (req, res) => {
//     try {
//         const Referral = await Referral.deleteOne({ code: req.params.code});
//         if (!Referral) {
//             return res.status(404).json({ error: 'Referral not found' });
//         }
//         res.json({ message: 'Referral deleted successfully', Referral });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };
