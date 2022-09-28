import PostFrontmatter from './PostFrontmatter'

export default interface Post extends PostFrontmatter {
  path?: string,
}
