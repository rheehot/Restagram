export interface ICommentState {
  id: number;
  authorId: string;
  authorProfile: string;
  content: string;
  time: number;
  likes: number;
  isILike: boolean;
  replies: number;
}

export interface ICommentsState {
  authorId: string;
  authorProfile: string;
  content: string;
  time: number;
  images: string[];
  comments: ICommentState[];
}
