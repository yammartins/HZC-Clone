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
  price: number,
  duration: number,
  featured: boolean,
  description: string,
  type: 'VIDEO' | 'ART' ;
}

export type VideoHandles = StrapiHandles<Video>;
