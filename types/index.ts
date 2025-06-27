export interface Post {
  id: string
  author: string
  title: string
  content: string
  likes: number
  chats: number
  createdAt: number
  updatedAt: number
}

export interface Comment {
  id: string
  postId: string
  parentCommentId?: string
  author: string
  content: string
  likes: number
  createdAt: number
}
