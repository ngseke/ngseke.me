export default interface ProjectFrontmatter{
  title: string,
  briefDescription?: string,
  cover?: string,
  githubLink?: string,
  demoLink?: string,
  period?: string | [string, string],
  members?: string[],
}
