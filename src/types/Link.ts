import type { RouterLinkProps } from 'vue-router'

export default interface Link {
  name: string,
  href: RouterLinkProps['to'],
  handler? (e: Event): void,
}
