import React from 'react';

function JobComponent(props){

     let langTools = [];
     if(props.tools){
       langTools.push(...props.tools);
     }
     if(props.languages){
       langTools.push(...props.languages)
     }

        return (
                <li key={props.id}>
                  <div className="grid container">
                    <div className="img-div">
                      <img className="img" src={props.logo} alt="" />
                      <div className="description-div">
                          <div className="flex">
                            <div className="company">
                            <span className="companyName">{props.company}</span>
                            {props.new && <span className="new">NEW!</span>}
                            {props.featured && <span className="featured">FEATURED</span>}
                            </div>
                          </div>
                          <div className="position-container">
                            <div className="position">{props.position}</div>
                          </div>
                          <div>
                            <div className="description-bottom-row">{props.postedAt} · {props.contract} · {props.location}</div>
                          </div>
                          </div>
                        </div>
                         <div className="langTools-container">
                          {langTools.map((item, index) => <span key={index} className="span" onClick={props.handleClick}>{item}</span>)}
                         </div>
                      </div>
                </li>
              )
}

export default JobComponent;
