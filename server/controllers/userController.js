// controllers/userController.js

const User = require('../models/user');

exports.createUser = async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json({ message: 'User created successfully', user });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getUsers = async (req, res) => {
    try{
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// exports.getByUserCode = async (req, res) => {
//     try {
//         const users = await User.find({ code: req.params.code }).exec();

//         if (!users) {
//             return res.status(404).json({ error: 'User not found' });
//         }
//         res.json(users);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };
// exports.getByUserCompanyName = async (req, res) => {
//     try {
//         const users = await User.find({ companyName: { $regex: req.params.companyName, $options: "i" }}).exec();

//         console.log('User not found');
//         if (!users) {

//             return res.status(404).json({ error: 'User not found' });
//         }
//         res.json(users);
//     } catch (error) {
//         console.log('User not found');

//         res.status(500).json({ error: error.message });
//     }
// };

exports.updateUserById = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json({ message: 'User updated successfully', user });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteUserById = async (req, res) => {
    try {
        const user = await User.findByIdAndRemove(req.params.id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json({ message: 'User deleted successfully', user });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// exports.deleteUserByCompanyName = async (req, res) => {
//     try {
//         const user = await User.deleteOne({ companyName: { $regex: req.params.companyName, $options: "i" }});
//         if (!user) {
//             return res.status(404).json({ error: 'User not found' });
//         }
//         res.json({ message: 'User deleted successfully', user });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// exports.deleteUserByCode = async (req, res) => {
//     try {
//         const user = await User.deleteOne({ code: req.params.code});
//         if (!user) {
//             return res.status(404).json({ error: 'User not found' });
//         }
//         res.json({ message: 'User deleted successfully', user });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };
