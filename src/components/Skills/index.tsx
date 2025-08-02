import React, { memo } from 'react';

import config from '../../config';

const Skills: React.FC = () => (
  <div className="row justify-content-center">
    <div className="col-md-12 example-title">
      <h3>
        Professional Skills <i className="fa fa-edit text-orange mx-2"/>
      </h3>
    </div>
    {
      config.professionalSkills?.map(({ label, icon, skills }, index) => (
        <React.Fragment key={index}>
          <div className="col-md-12 d-flex float-left mt-3 mb-2 mt-5">
            <h5 className="border-bottom-1 pb-2 font-weight-bold">
              <i className={`${icon} text-orange mx-2`}/> {label}
            </h5>
          </div>
          <div className="col-md-12 d-flex float-left">
            <ul className="mt-2 list-group list-group-horizontal ">
              {
                skills.map(({ skill, icon }, idx) => (
                  <li className="list-inline-item px-5" key={idx}>
                    <i className={`${icon} text-dark`}/>
                    <span className="d-inline-flex px-2"> {skill} </span>
                  </li>
                ))
              }
            </ul>
          </div>
        </React.Fragment>
      ))
    }
  </div>
);

export default memo(Skills);
