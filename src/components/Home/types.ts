export interface IShortComment {
  id: number;
  author: string;
  content: string;
}

export interface IPostState {
  id: number;
  authorProfile: string;
  authorId: string;
  isIFollow: boolean;
  images: string[];
  content: string;
  numOfLikes: number;
  numOfComments: number;
  recentComments: IShortComment[];
  time: number;
  isILike: boolean;
}
