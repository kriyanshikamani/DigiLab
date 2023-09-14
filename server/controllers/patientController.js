// controllers/PatientController.js

const Patient = require("../models/patient");

exports.createPatient = async (req, res) => {
  try {
    const patient = new Patient(req.body);
    await patient.save();
    res.status(201).json({ message: "Patient created successfully", patient });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getPatients = async (req, res) => {
  try {
    const patients = await Patient.find();
    res.json(patients);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getPatientById = async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.id);
    if (!patient) {
      return res.status(404).json({ error: "Patient not found" });
    }
    res.json(patient);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// exports.getByPatientCode = async (req, res) => {
//     try {
//         const Patients = await Patient.find({ code: req.params.code }).exec();

//         if (!Patients) {
//             return res.status(404).json({ error: 'Patient not found' });
//         }
//         res.json(Patients);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };
// exports.getByPatientCompanyName = async (req, res) => {
//     try {
//         const Patients = await Patient.find({ companyName: { $regex: req.params.companyName, $options: "i" }}).exec();

//         console.log('Patient not found');
//         if (!Patients) {

//             return res.status(404).json({ error: 'Patient not found' });
//         }
//         res.json(Patients);
//     } catch (error) {
//         console.log('Patient not found');

//         res.status(500).json({ error: error.message });
//     }
// };

exports.updatePatientById = async (req, res) => {
  try {
    const patient = await Patient.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!patient) {
      return res.status(404).json({ error: "Patient not found" });
    }
    res.json({ message: "Patient updated successfully", patient });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deletePatientById = async (req, res) => {
  try {
    const patient = await Patient.findByIdAndRemove(req.params.id);
    if (!patient) {
      return res.status(404).json({ error: "Patient not found" });
    }
    res.json({ message: "Patient deleted successfully", patient });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// exports.deletePatientByCompanyName = async (req, res) => {
//     try {
//         const Patient = await Patient.deleteOne({ companyName: { $regex: req.params.companyName, $options: "i" }});
//         if (!Patient) {
//             return res.status(404).json({ error: 'Patient not found' });
//         }
//         res.json({ message: 'Patient deleted successfully', Patient });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// exports.deletePatientByCode = async (req, res) => {
//     try {
//         const Patient = await Patient.deleteOne({ code: req.params.code});
//         if (!Patient) {
//             return res.status(404).json({ error: 'Patient not found' });
//         }
//         res.json({ message: 'Patient deleted successfully', Patient });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };
