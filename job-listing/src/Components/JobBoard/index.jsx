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
  const tags = [role, level];

  if (languages) {
    tags.push(...languages);
  }
  if (tools) {
    tags.push(...tools);
  }
  return (
    <div className="flex items-center justify-between bg-white shadow-md m-4 p-6 rounded-md">
      <div className="flex items-center ">
        <img src={`/assets${logo}`} alt={company} />
        <div className="ml-4">
          <h3 className="text-teal-500 font-bold">
            {company}
            {isNew && (
              <span className="mx-2 p-1 px-2 text-white text-sm rounded-xl bg-teal-600">
                NEW!
              </span>
            )}
            {featured && (
              <span className="mx-2 p-1 px-2 text-white text-sm rounded-xl bg-slate-800">
                FEATURED
              </span>
            )}
          </h3>
          <h2 className="text-black-500 font-bold my-1">{position}</h2>
          <p className="text-gray-500 text-sm font-medium">
            {postedAt} · {contract} · {location}
          </p>
        </div>
      </div>
      <div>
        <span></span>
        {tags
          ? tags.map((tag) => (
              <span className="text-teal-600 font-bold text-sm mx-2 p-2 bg-teal-50 rounded ">
                {tag}
              </span>
            ))
          : ""}
      </div>
    </div>
  );
}

export default JobBoard;
