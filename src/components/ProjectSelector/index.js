import React from 'react';
import _ from 'lodash/fp';
import LinkImage from '../LinkImage';
import ImageFetch from '../ImageFetch';
import routes from '../Pages/routes';
import { getUrl } from '../../utils/navigation';
import './styles.css';

const cName = 'ProjectSelector';

const projectImageTags = {
  peatys_link_img: 'peatys_link_img',
};
const { peatys_link_img } = projectImageTags;

const peatysProject = {
  id:       'peatys',
  title:    'Peatys',
  name:     'Peatys',
  linkText: 'Peatys',
  linkImg: {},
};

const requestList = _.map(
  tag => ({ name: tag, type: 'tag', tag }),
  [peatys_link_img],
);

const ProjectSelector = ({ images = {}, projects = [] }) => {
  const { peatys_link_img } = images;

  const pr = [
    _.merge(peatysProject, { linkImg: peatys_link_img }),
  ];
  console.log(pr);

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

export default ImageFetch(requestList, ProjectSelector);
