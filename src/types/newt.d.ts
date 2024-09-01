namespace Newt {
  export interface _sys {
    raw: {
      createdAt: string;
      updatedAt: string;
      firstPublishedAt: string;
      publishedAt: string;
    }
  }

  export interface Article {
    _id: string;
    _sys: Newt._sys;
    slug: string;
    title: string;
    pickup: boolean;
    issue: boolean;
    body: string;
    thumbnail: Emoji;
    categorys: Array<Category>,
  }
  
  export interface Category {
    _id: string;
    _sys: {
      createdAt: string;
      updatedAt: string;
      customOrder: number;
    },
    name: string;
    slug: string;
  }
  
  export interface Emoji {
    type: string;
    value: string;
  }
  
  export interface Thumbnail {
    _id: string;
    src: string;
    fileName: string;
    fileType: string;
    fileSize: number;
    width: number;
    height: number;
    title: string;
    altText: string;
    description: string;
    metadata: {};
  }
  
  export type LabLabel = 'progress' | 'task'
  
  export interface LabSubject {
    _id: string;
    _sys: Newt._sys;
    slug: string;
    title: string;
    status: Array<LabLabel>;
    pickup: boolean;
    body: string;
    thumbnail: Thumbnail;
    groups: Array<LabGroup>;
    'dev-note': Array<Note>;
    'ui-note': Array<Note>;
  }
  
  export interface Note {
    title: string;
    body: string;
    'url-type': boolean;
    thumbnail: Emoji;
    slug: string;
  }
  
  export interface LabGroup {
    title: string;
    slug: string;
    pickup: boolean;
    thumbnail: Thumbnail;
    body: string;
  }

  export type ContentsQa = Array<{
    slug: string;
    question: string;
    answer: string;
    group: ContentsQaCategory;
    references: string;
  }>

  export type ContentsQaCategory = Array<string>

  export type ContentsThumbnail = Array<{
    title: string,
    body: string,
    thumbnail: Newt.Thumbnail
  }>

  export type ContentsWorks = Array<{
    title: string,
    thumbnail: Newt.Thumbnail
    tags: Array<{
      property: string,
      value: string,
    }>,
    body: string,
  }>

  export type ContentsObject = Array<{
    property: "text",
    value: "text",
    group: "text"
  }>

  export interface Contents {
    _id: string;
    _sys: Newt._sys;
    slug: string;
    name: string; 
    "select-field": Array<string>;
    "qa-item-field": Newt.ContentsQa;
    "thumbnail-item-field": Newt.ContentsThumbnail;
    "works-field": Newt.ContentsWorks;
    "object-field": Newt.ContentsObject;
    display: boolean;
  }
}
