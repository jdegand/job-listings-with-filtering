import React from 'react';
import JobComponent from './JobComponent';
import './JobListComponent.css';

function JobListComponent(props) {

  let jobs = props.jobs.map((job)=> {
    return <JobComponent
            key={job.id}
            company={job.company}
            logo={job.logo}
            new={job.new}
            featured={job.featured}
            position={job.position}
            role={job.role}
            level={job.level}
            postedAt={job.postedAt}
            contract={job.contract}
            location={job.location}
            languages={job.languages}
            tools={job.tools}
            />
  })
  return (
    <ul>
      {jobs}
    </ul>
  )
}

export default JobListComponent;
