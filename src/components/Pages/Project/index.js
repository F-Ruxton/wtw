import React from 'react';
import _ from 'lodash/fp';
import Header from '../../Header';
import withImageFetch from '../../../utils/images/withImageFetch';
import './styles.css';

const cName = 'Project';

const ProjectContent = ({ project = {} }) => (
  <div className={cName}>
    <div className={`${cName}__header`}>
      <Header>{_.get('title', project)}</Header>
    </div>

    <div className={`${cName}__gallery`}>
      Gallery here
    </div>
  </div>
);

const Project = ({ project = {} }) => {
  const { imageRequest } = project;

  const ProjectWithImageRequest = withImageFetch(imageRequest, ProjectContent);

  return <ProjectWithImageRequest project={project} />;
}

export default Project;
