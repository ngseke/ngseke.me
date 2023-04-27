import { PostFrontmatter } from './PostFrontmatter'

export interface Post extends PostFrontmatter {
  path?: string,
}
