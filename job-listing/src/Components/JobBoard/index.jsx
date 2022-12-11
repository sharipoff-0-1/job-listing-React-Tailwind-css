import React from "react";

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
  handleTagClick,
}) {
  const tags = [role, level];

  if (languages) {
    tags.push(...languages);
  }
  if (tools) {
    tags.push(...tools);
  }
  return (
    <div
      className={`flex flex-col lg:flex-row lg:items-center justify-between bg-white shadow-md mx-4 p-4 mb-16 lg:mb-6 rounded ${
        featured && "border-l-4 border-teal-500 border-solid"
      }`}
    >
      <div className="flex flex-col mb-4 lg:flex-row">
        <img
          className="w-14 h-14 -mt-12 mb-4 lg:mt-0 lg:w-20 lg:h-20 lg:mb-0"
          src={`/assets${logo}`}
          alt={company}
        />
        <div className="ml-1 lg:ml-4 ">
          <h3 className="text-teal-500 font-bold">
            {company}
            {isNew && (
              <span className="mx-2 p-1 px-2 text-white text-sm rounded-xl bg-teal-600">
                NEW!
              </span>
            )}
            {featured && (
              <span className="mx-2 p-1 px-2 text-white text-sm rounded-xl bg-slate-8di00">
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
      <div className=" border-t-2 py-5 flex flex-wrap lg:border-0 justify-items-end pr-2">
        {tags
          ? tags.map((tag) => (
              <span
                onClick={() => handleTagClick(tag)}
                className="cursor-pointer text-teal-600 font-bold text-sm mx-1 mb-3 p-2 bg-teal-50 rounded "
              >
                {tag}
              </span>
            ))
          : ""}
      </div>
    </div>
  );
}

export default JobBoard;
