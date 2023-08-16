import React, { useState } from 'react';
import download_report from "../../assets/download_report.png";
import laboratory_report from "../../assets/laboratory_report.png";

const DownloadReport = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [downloadedReport, setDownloadedReport] = useState(null);
  const [showWarning, setShowWarning] = useState(false);

  const downloadreport = [
    {
      id: 'example1',
      password: 'password1',
      report: 'Report Data 1',
      reportUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.rmlonline.com%2Fsite%2Fsections%2F281&psig=AOvVaw28txoRxk3Z-Vpo46fnjwqP&ust=1691055396433000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLD5xLPWvYADFQAAAAAdAAAAABAE' // Replace with actual report URL
    },
    {
      id: 'example2',
      password: 'password2',
      report: 'Report Data 2',
      reportUrl: 'https://example.com/report2.pdf' // Replace with actual report URL
    },
    // Add more JSON data entries as needed
  ];

  const handleDownload = () => {
    if (downloadedReport) {
      window.open(downloadedReport.reportUrl, '_blank');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const matchedReport = downloadreport.find((item) => item.id === id && item.password === password);
    if (matchedReport) {
      setDownloadedReport(matchedReport);
      setShowWarning(false); // Reset the warning state
    } else {
      setDownloadedReport(null);
      setShowWarning(true); // Display the warning
    }
  };

  return (
    <div className="w-10/12 mx-auto flex justify-center items-center h-screen">
      <div className="max-w-md mx-auto mt-6 p-6 bg-white rounded shadow-md w-full">
        <h2 className="text-xl font-semibold mb-4">View All Your Test Reports</h2>
        {showWarning && (
          <p className="text-red-600 mb-2">Incorrect ID or password. Please try again.</p>
        )}
        <img src={download_report} alt="download_report" className="h-32 mt-4" />
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="id" className="block text-sm font-medium text-gray-700">
              Enter ID
            </label>
            <input
              type="text"
              id="id"
              className="mt-1 p-2 border rounded w-full"
              value={id}
              onChange={(e) => setId(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 p-2 border rounded w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Submit
          </button>
        </form>
        {downloadedReport ? (
          <button
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300 ease-in-out transform hover:scale-105 mt-2"
            onClick={handleDownload}
          >
            Show Report
          </button>
        ) : null}
      </div>
      <div className="mx-4 mt-4 w-8/12 h-3/6">
        <img src={laboratory_report} alt="laboratory_report" />
      </div>
    </div>
  );
};

export default DownloadReport;
