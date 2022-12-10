import React, { useState, useEffect } from "react";
import JobBoard from "./Components/JobBoard";
import data from "./data/data.json";

function App() {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    setJobs(data);
  }, []);

  const filterFunc = ({ role, level, tools, languages }) => {
    if (filters.length === 0) {
      return true;
    }

    const tags = [role, level];

    if (languages) {
      tags.push(...languages);
    }
    if (tools) {
      tags.push(...tools);
    }
    return tags.some((tag) => filters.includes(tag));
  };

  const handleTagClick = (tag) => {
    if (filters.includes(tag)) return;
    setFilters([...filters, tag]);
  };

  const handleFilterClick = (passedFilter) => {
    setFilters(filters.filter((f) => f !== passedFilter));
  };

  const filteredJobs = jobs.filter(filterFunc);

  return (
    <div className="App">
      <header className="mb-12  bg-teal-600">
        <img
          className="w-full"
          src="./assets/images/bg-header-desktop.svg"
          alt="bg-image"
        />
      </header>
      {filters.length > 0 && (
        <div className=" p-4 mb-12 sm:mb-6 flex bg-white shadow-md mx-4  p-4 rounded ">
          {filters.map((filter) => (
            <span className="text-teal-600 font-bold text-sm mx-1 pl-3 py-1.5 bg-teal-50 rounded">
              {filter}
              <span
                onClick={() => handleFilterClick(filter)}
                className="w-full cursor-pointer font-bold bg-teal-500 text-white text-base p-1.5 ml-1 rounded-r"
              >
                x
              </span>
            </span>
          ))}
        </div>
      )}
      {jobs.length === 0 ? (
        <p>jobs are fetching...</p>
      ) : (
        filteredJobs.map((job) => (
          <JobBoard handleTagClick={handleTagClick} job={job} key={job.id} />
        ))
      )}
    </div>
  );
}

export default App;
