import { toTagImageRequest } from '../../utils/images/withImageFetch';

export const projectImageTags = {
  peatys_link_img: 'peatys_link_img',
};

const imageRequest = toTagImageRequest([
  projectImageTags.peatys_link_img,
]);

export default imageRequest;
