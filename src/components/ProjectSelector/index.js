import React from 'react';
import _ from 'lodash/fp';
import LinkImage from '../LinkImage';
import routes from '../Pages/routes';
import { getUrl } from '../../utils/navigation';
import withImageFetch from '../../utils/images/withImageFetch';
import imageRequest, { projectImageTags } from './imageRequest';
import './styles.css';

const cName = 'ProjectSelector';

const peatysProject = {
  id:       'peatys',
  title:    'Peatys',
  name:     'Peatys',
  linkText: 'Peatys',
  linkImg: {},
};

const ProjectSelector = ({ images = {}, projects = [] }) => {
  const { peatys_link_img } = images;

  const pr = [
    _.merge(peatysProject, { linkImg: peatys_link_img }),
  ];

  return (
    <div className={cName}>
      <div className={`${cName}__projects`}>
        { !_.isEmpty(_.compact([peatys_link_img])) &&
          _.map(project => (
            <LinkImage
              key={project.id + _.random(0, 100000)}
              className={`${cName}__link`}
              to={getUrl(routes.project, { ':id': project.id })}
              linkText={project.linkText}
              img={project.linkImg}
              style={{ opacity: 0.6 }}
              // transformations={[
              //   { quality: 'auto', fetchFormat: 'auto' },
              //   // { height: '400' },
              // ]}
              // width="400"
              // height="400"
              // crop="fill"
            />
          ), pr) }
      </div>
    </div>
  );
}

export default withImageFetch(imageRequest, ProjectSelector);
