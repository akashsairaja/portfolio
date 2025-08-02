import React, { memo } from 'react';

import config from '../../config';

const Academics: React.FC = () => (
  <div className="container-fluid">
    <div className="row justify-content-center">
      <div className="col-md-12 example-title">
        <h2>Education </h2>
      </div>
      <div className="col-xs-12 col-xs-offset-1 col-sm-8 col-md-12 col-xl-12 col-sm-offset-2">
        <ul className="timeline timeline-centered ">
          {
            config.academics?.map(({ mothAndYear, title, university, location }, index) => (
              <li className="timeline-item" key={index}>
                <div className="timeline-info">
                  <span> {mothAndYear} </span>
                </div>
                <div className="timeline-marker"/>
                <div className="timeline-content">
                  <h3 className="timeline-title mt-2">
                    {title}
                  </h3>
                  <pre className="my-2 overflow-hidden">
                    {university}
                    <br/>
                    {location}
                  </pre>
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  </div>
);

export default memo(Academics);
