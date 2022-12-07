import React, { useState, useEffect } from "react";
import JobBoard from "./Components/JobBoard";
import data from "./data/data.json";

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    setJobs(data);
  }, []);

  return (
    <div>
      <h1 className="text-3xl">hellooooooooo</h1>
      {jobs.length === 0 ? (
        <p>jobs are fetching...</p>
      ) : (
        jobs.map((job) => <JobBoard job={job} key={job.id} />)
      )}
    </div>
  );
}

export default App;
