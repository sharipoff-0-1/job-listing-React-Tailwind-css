import React, { useState, useEffect } from "react";
import JobBoard from "./Components/JobBoard";
import data from "./data/data.json";

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    setJobs(data);
  }, []);

  return (
    <div className="App">
      <header className="mb-20">
        <img
          className="w-full bg-teal-600"
          src="./assets/images/bg-header-desktop.svg"
          alt="bg-image"
        />
      </header>
      {jobs.length === 0 ? (
        <p>jobs are fetching...</p>
      ) : (
        jobs.map((job) => <JobBoard job={job} key={job.id} />)
      )}
    </div>
  );
}

export default App;
