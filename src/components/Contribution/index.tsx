import React, { memo } from 'react';

import config from '../../config';

interface ContributionProps {
  isDarkMode: boolean;
}

const images = config.images;

const OpenSourceContribution: React.FC<ContributionProps> = ({ isDarkMode }) => (
  <div className="container">
    <h1 className="font-weight-light text-center text-lg-left mt-4 mb-0">Open Source Contributions</h1>
    <hr className="mt-2 mb-5"/>
    <div className="row text-center text-lg-left">
      {
        config.contribution?.map(({ title, projectUrl, imageKey }, index) => (
          <div className="col-lg-6 col-md-6 col-6" key={index}>
            <div className="text-dark my-2">
              {title}
              <span className="ml-5 page-link float-right">
                <a
                  rel="noopener noreferrer"
                  target="_blank" href={projectUrl}>
                  <i className="fa fa-git-square"/>  view code
                </a>
              </span>
            </div>
            <a rel="noopener noreferrer" href="#" className="d-block mb-4 h-100">
              <img className="img-fluid img-thumbnail"
                style={{ filter: isDarkMode ? 'invert(100%) hue-rotate(180deg)' : 'none' }}
                src={imageKey.includes('http') ? imageKey : images[imageKey as keyof typeof images]}
                alt={imageKey}/>
            </a>
          </div>
        ))
      }
    </div>
  </div>
);

export default memo(OpenSourceContribution);
