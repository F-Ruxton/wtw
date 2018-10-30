import React from 'react';
import _ from 'lodash/fp';
import classNames from 'classnames';
import { Image } from 'cloudinary-react';

const cName = 'About';

const teamMembers = {
  james: {
    name: 'James Pettitt',
    imagePublicId: 'team/james/slapping_1.jpg',
    imageLeft: true,
    imageProps: { heightOffset: -500 },
    text: 'Known as P to those who know him, James is a true artist of the land. A graduate of Architecture and Enviromental Design, James is able to view the environment with a critical eye and a rare perspective that enables him to thrive on forming the most unique trail features that are visually stunning and harmonious with the setting. Onve part of the former Clayspades and a member of 50to01 (See Wheel Love), James is an integral part of the Wharncliffe scene and organiser of the yearly Summer Solstice celebration thrown to bring the community together and enjoy the spiritual home.',
  },
  fred: {
    name: 'Fred Ruxton',
    imagePublicId: 'projects/peatys/digger/digger_bucket_closeup_1.jpg',
    imageLeft: false,
    imageProps: {
      style: {
        backgroundPosition: '-140px',
        transform: 'scale(2.2)',
      },
    },
    text: 'Humble and genuine, Fred has a passionate zeal for the natural environment and his role of creation within it. Hard work and his analytical mind has awarded him with a Masters in Physics, and are now being used to conveive of and develop stunning trail concepts. Mathematically pure curves and transitions are his forte, and a BMX background of bowls and jumps has given him and effortless style and flow that has helped shape his unique perspective of trail design.',
  },
  rob: {
    name: 'Rob Southern',
    imagePublicId: 'team/rob/rob_dirt_throw_1.jpg',
    imageLeft: true,
    text:'Longtime Wharncliffe local and another of the old Clayspades, Rob has been instrumental in the development of Wharncliffe trails over the past several years. With a mindset and philosophy well suited to the woods, Rob is able to visualise, form and analyse the necessary steps to excellence. Slapper in chiefm Rob will leave the edges and final stages looking gorgeous and smooth.',
  },
  kieran: {
    name: 'Kieran Kenney',
    imagePublicId: 'team/kk/kk_1.jpg',
    imageLeft: false,
    text: 'Working part time whilst in his final year of a course in photography at college, Kieran is a young gun endeavoring to make his mark on the world. Bursting onto the Wharncliffe scene two years ago, Kieran has turned heads with his edgework and energy for trail perfection. Talented in manay areas, Keiran brings with him a firey enthusiasm that makes him a valuable asset to the team.',
  },
};

const TeamMemberImage = ({ imagePublicId, heightOffset = 0, style = {} }) => (
  <div className={`${cName}__team-member--img`}>
    <Image
      style={style}
      publicId={imagePublicId}
      heightOffset={heightOffset}
    />
  </div>
);

const TeamMemberText = ({ name, text }) => (
  <React.Fragment>
    <h3 className={`${cName}__team-member--name`}>{name}</h3>
    <div className={`${cName}__team-member--text`}>
      {text}
    </div>
  </React.Fragment>
)

const TeamMember = ({ name, image, imageProps = {}, text, imageLeft = true }) => (
  <div
    className={classNames(
      `${cName}__team-member`,
      `${cName}__team-member--${imageLeft ? 'left' : 'right'}`
    )}
  >
    <div><TeamMemberImage image={image} {...imageProps} /></div>
    <div><TeamMemberText name={name} text={text} />     </div>
  </div>
);

const TeamSection = () => (
  <div className={`${cName}__team`}>
    <h1 className={`${cName}__heading`}>
      Team
    </h1>

    <div className={`${cName}__team--row`}>
      {_.map(t => <TeamMember key={t.name} {...t} />, [teamMembers.james, teamMembers.fred])}
    </div>
    <div className={`${cName}__team--row`}>
      {_.map(t => <TeamMember key={t.name} {...t} />, [teamMembers.rob, teamMembers.kieran])}
    </div>
  </div>
);

export default TeamSection;
