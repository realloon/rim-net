export interface User {
  id: string
  username: string
  nickname: string
}

export interface Post {
  id: string // 使用 uuid or ulid
  userId: string // 预留用户表 uuid or ulid
  boardId: number
  title: string
  content: string // markdown
  likes: number
  chats: number
  createdAt: number
  updatedAt: number
}

export interface Comment {
  id: string // 使用 uuid or ulid
  userId: string // 预留
  postId: string
  parentCommentId?: string
  content: string // markdown
  likes: number
  createdAt: number // 评论不允许再编辑
}
