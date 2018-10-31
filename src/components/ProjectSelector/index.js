import React from 'react';
import _ from 'lodash/fp';
import LinkImage from '../LinkImage';
import routes from '../Pages/routes';
import { getUrl } from '../../utils/navigation';
import './styles.css';

const cName = 'ProjectSelector';

const peatysProject = {
  id: 'peatys',
  title: 'Peatys',
  name: 'Peatys',
  linkText: 'Peatys',
  linkImg: {
    public_id: '/projects/peatys/building/rollin_fwd_1PS.jpg',
    tag: 'peatys_link_img',
  },
  gallery: {
    tag: 'peatys_gallery',
  },
  textImages: {
    tag: 'peatys_text_img',
  }
};

const ProjectSelector = ({ projects = [] }) => {
  const pr = [
    peatysProject,
  ];

  return (
    <div className={cName}>
      <div className={`${cName}__projects`}>
        { _.map(project => (
            <LinkImage
              key={project.id + _.random(0, 100000)}
              className={`${cName}__link`}
              to={getUrl(routes.project, { ':id': project.id })}
              linkText={project.linkText}
              img={project.linkImg}
              transformations={[
                { quality: 'auto', fetchFormat: 'auto' },
                // { height: '400' },
              ]}
            />
          ), pr) }
      </div>
    </div>
  );
}

export default ProjectSelector;
