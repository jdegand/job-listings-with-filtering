import JobComponent from './components/JobComponent';
import './components/JobListComponent.css';
import React from 'react';
import './App.css';
import data from './assets/data.json';

class App extends React.Component {

  constructor(){
    super();

    this.state = {
      data: [...data],
      searchTerms: [],
    }
  }

  handleClick = (e) => {
    this.setState({
      data: this.state.data.filter((item) => item.languages.includes(e.target.innerText) || item.tools.includes(e.target.innerText))
    })
}

  render() {

    return (
    <div className="App">
      <>
      <ul>
      { this.state.data.map((job)=> {
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
               handleClick={this.handleClick}
               />
      })
    }
    </ul>
    </>
    </div>
  )
}
}

export default App;
