import { StrapiHandles, MultiStrapiHandles, MediaStrapiHandles } from './strapi';

export interface Pico {
  title: string,
  banner: {
    id: number,
    data: MediaStrapiHandles,
  },
  views: number,
  latitude: number,
  longitude: number,
  zoom: number;
  text: string,
}

export type PicoHandles = StrapiHandles<Pico>;
export type PicosHandles = MultiStrapiHandles<Pico>;
