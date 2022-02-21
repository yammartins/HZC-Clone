type DataHandles<T> = {
  id: number,
  attributes: T & {
    createdAt: string,
    updatedAt: Date,
    publishedAt: Date,
  }
};

type PaginationHandles = {
  page: number,
  total: number,
  pageSize: number,
  pageCount: number,
};

export type MediaStrapiHandles = {
  attributes: {
    url: string,
    caption: string,
    alternativeText: string,
  }
};

export interface StrapiHandles<T> {
  data: DataHandles<T>[],

  meta: {
    pagination: PaginationHandles,
  }
}
