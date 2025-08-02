import React, { memo } from 'react';

import config from '../../config';

const Projects: React.FC = () => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-12 col-xl-12">
        {
          config.projects?.map(({ icon, title, client, description, company }, index) => (
            <div className="card my-4" key={index}>
              <div className="card d-flex card-title py-2">
                <span className="d-flex">
                  <strong className="d-flex-inline mr-auto ">
                    <i className={`${icon} ml-5 text-orange mx-2`}/>
                    {title}
                  </strong>
                  <strong className=" d-flex-inline ml-auto mr-3">
                    Client : {client}
                  </strong>
                </span>
              </div>
              <div className="card-body text-wrap text-left">
                <p>
                  {description}
                </p>
              </div>
              <div className="card-footer">
                <span className="d-flex mr-auto">
                  <strong className="px-2">Company : </strong> {company}
                </span>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  </div>
);

export default memo(Projects);
