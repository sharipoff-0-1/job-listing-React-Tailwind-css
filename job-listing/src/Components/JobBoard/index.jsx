import React from "react";

// "id": 1,
//     "company": "Photosnap",
//     "logo": "/images/photosnap.svg",
//     "new": true,
//     "featured": true,
//     "position": "Senior Frontend Developer",
//     "role": "Frontend",
//     "level": "Senior",
//     "postedAt": "1d ago",
//     "contract": "Full Time",
//     "location": "USA Only",
//     "languages": ["HTML", "CSS", "JavaScript"],
//     "tools": []

function JobBoard({
  job: {
    company,
    logo,
    isNew,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
  },
}) {
  return (
    <div className="flex bg-white shadow-md m-4 p-4">
      <div>
        <img src={`/assets${logo}`} alt={company} />
      </div>
      <div className="ml-4">
        <h3>{company}</h3>
        <h2>{position}</h2>
        <p>
          {postedAt} · {contract} · {location}
        </p>
      </div>
      <div></div>
    </div>
  );
}

export default JobBoard;
