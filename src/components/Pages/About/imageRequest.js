import { toTagImageRequest } from '../../../utils/images/withImageFetch';

export const aboutImageTags = {
  about_gallery : 'about_gallery',
  about_team    : 'about_team',
};

const imageRequest = toTagImageRequest([
  aboutImageTags.about_gallery,
  aboutImageTags.about_team,
]);

export default imageRequest;
