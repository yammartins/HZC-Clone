import { StrapiHandles, MediaStrapiHandles } from './strapi';

export interface Video {
  name: string,
  video: {
    id: number,
    data: MediaStrapiHandles,
  },
  banner: {
    id: number,
    data: MediaStrapiHandles,
  },
  views: number,
  duration: number,
  featured: boolean,
  description: string,
}

export type VideoHandles = StrapiHandles<Video>;
