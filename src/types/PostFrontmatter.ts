export default interface PostFrontmatter{
  title: string,
  date?: string,
  tags?: string[],
  original?: string,
  draft?: boolean,
}
