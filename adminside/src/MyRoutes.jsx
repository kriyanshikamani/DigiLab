import React from 'react'

import DashBoard from './components/DashBoard/DashBoard.jsx';
import Reports from './components/Reports/Reports.jsx';
import { Routes ,Route} from 'react-router-dom';
import Addpatient from './components/Addpatient/Addpatient.jsx';
import All_cases from './components/All_cases/All_cases.jsx';
import Patients from './components/Patients/Patients.jsx';
import ReferralDoctors from './components/Referral_doctors/ReferralDoctors.jsx';
import TestPackages from './components/Lab/TestPackages.jsx';
import EditTestPanel from './components/Lab/EditTestPanel.jsx';
import TestPanel from './components/Lab/TestPanel.jsx';
import UpdatePatientsDetails from './components/Patients/UpdatePatientsDetails.jsx';
import ViewPatientDetails from './components/Patients/ViewPatientDetails.jsx';
import Payments from './components/Payments/Payments.jsx';
import EditReferralDoctors from './components/Referral_doctors/EditReferralDoctors.jsx';
import EditTestPackage from './components/Lab/EditTestPackage.jsx';

import { MdPayments } from 'react-icons/md';
import ViewTestPanel from './components/Lab/ViewTestPanel.jsx';
import TestCategory from './components/TestCategory/TestCategory.jsx';
import AddNewCategory from './components/TestCategory/AddNewCategory.jsx';
import EditTestCategory from './components/TestCategory/EditTestCategory.jsx';
import PatientBill from './components/Addpatient/PatientBill.jsx';
import Completebloodcount from './components/FillTestData/Completebloodcount.jsx';
import AddTestPanel from './components/Lab/AddTestPanel.jsx';
import User from './components/Manage/User.jsx';
import AddUser from './components/Manage/AddUser.jsx';
import EditUser from './components/Manage/EditUser.jsx';
import CbcWithAbCount from './components/FillTestData/CbcWithAbCount.jsx';
import CbcWithEsr from './components/FillTestData/CbcWithEsr.jsx';
import LiverFunctionTest from './components/FillTestData/LiverFunctionTest.jsx';
import AddReferral from './components/Addpatient/AddReferral.jsx';
import AddTestPackages from './components/Lab/AddTestPackages.jsx';

const MyRoutes = () => {
  return (
  <>
    <Routes>
        <Route path="/" element={<DashBoard/>}/>
        <Route path="/add-patient" element={<Addpatient/>}/>
        <Route path="/add-referral" element={<AddReferral/>}/>
        <Route path="patient-bill/:patientId" element={<PatientBill/>}/>
        {/* <Route path="/complete-blood-count" element={<Completebloodcount/>}/> */}
        {/* <Route path="/cbc-with-abosulte-count" element={<CbcWithAbCount/>}/> */}
        {/* <Route path="/cbc-with-esr" element={<CbcWithEsr/>}/> */}
        <Route path="/liver-function-test" element={<LiverFunctionTest/>}/>
        <Route path="/user" element={<User/>}/>
        <Route path="/add-user" element={<AddUser/>}/>
        <Route path="/edit-user/:userId" element={<EditUser/>}/>

        
       <Route path="/patients" element={<Patients/>}/>
      <Route path="/update-patient-details" element={<UpdatePatientsDetails/>}/>
      <Route path="/view-patient-details" element={<ViewPatientDetails/>}/>

     
      <Route path="/payments" element={<Payments/>}/>

        <Route path="/referral-doctors" element={<ReferralDoctors/>}/>
<Route path="/edit-referral-doctors/:referralId" element={<EditReferralDoctors />} />

        <Route path="/test-packages" element={<TestPackages/>}/>
        <Route path="/edit-test-panel/:testpanelId" element={<EditTestPanel/>}/>
        <Route path="/view-test-panel" element={<ViewTestPanel/>}/>
        <Route path="/add-test-panel" element={<AddTestPanel/>}/>
        <Route path="/add-test-package" element={<AddTestPackages/>}/>
        <Route path="/edit-test-package/:testpackageId" element={<EditTestPackage/>}/>

        <Route path="/reports" element={<Reports/>}/>
        <Route path="/test-panels" element={<TestPanel/>}/>
        <Route path="/test-categories" element={<TestCategory/>}/>
        <Route path="/add-category" element={<AddNewCategory/>}/>
        <Route path="/edit-test-category/:testcategoryId" element={<EditTestCategory/>}/>
        <Route path="/all-cases" element={<All_cases/>}/>

        {/* <Route path="/edit" */}
        <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  </>
  )
}

export default MyRoutes