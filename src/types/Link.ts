import type { AnchorHTMLAttributes } from 'vue'
import type { RouterLinkProps } from 'vue-router'

export default interface Link {
  name: string,
  href?: AnchorHTMLAttributes['href'],
  to?: RouterLinkProps['to'],
  handler? (e: Event): void,
}
