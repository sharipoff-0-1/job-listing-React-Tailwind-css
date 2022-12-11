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
    return filters.every((filter) => tags.includes(filter));
  };

  const handleTagClick = (tag) => {
    if (filters.includes(tag)) return;
    setFilters([...filters, tag]);
  };

  const handleFilterClick = (passedFilter) => {
    setFilters(filters.filter((f) => f !== passedFilter));
  };

  const clearFunc = () => {
    setFilters([]);
  };

  const filteredJobs = jobs.filter(filterFunc);

  return (
    <>
      <header className="mb-12  bg-teal-600">
        <img
          className="w-full"
          src="./assets/images/bg-header-desktop.svg"
          alt="bg-image"
        />
      </header>
      <div className="container m-auto">
        {filters.length > 0 && (
          <div
            className=" p-4 mb-12 lg:mb-6 lg: -mt-16 flex flex-wrap items-center bg-white shadow-md mx-4 p-4 rounded text-center relative z-10
           "
          >
            {filters.map((filter) => (
              <span className="text-teal-600 font-bold text-sm mx-4 mb-2 pl-3 py-1.5 bg-teal-50 rounded">
                {filter}
                <span
                  onClick={() => handleFilterClick(filter)}
                  className="w-full cursor-pointer font-bold bg-teal-500 text-white text-base p-1.5 ml-1  rounded-r"
                >
                  x
                </span>
              </span>
            ))}
            <button
              onClick={clearFunc}
              className=" block ml-auto cursor-pointer text-gray-500 font-semibold capitalize bg-teal-100 p-1 px-2 rounded shadow-inner"
            >
              {" "}
              clear
            </button>
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
    </>
  );
}

export default App;
