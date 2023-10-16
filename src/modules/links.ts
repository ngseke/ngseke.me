import { faEnvelope, faFileAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faDiscord } from '@fortawesome/free-brands-svg-icons'

export const LINKS = {
  cakeResume: {
    icon: faFileAlt,
    url: 'https://www.cakeresume.com/ngseke',
    title: 'CakeResume',
  },
  hackmd: {
    icon: faFileAlt,
    url: 'https://hackmd.io/@xq',
    title: 'HackMD Notes',
  },
  github: {
    icon: faGithub,
    url: 'https://github.com/ngseke',
    title: 'GitHub',
  },
  githubNgsekeMe: {
    icon: faGithub,
    url: 'https://github.com/ngseke/ngseke.me',
    title: 'GitHub: ngseke.me',
  },
  githubGist: {
    icon: faGithub,
    url: 'https://gist.github.com/ngseke',
    title: 'GitHub Gist',
  },
  linkedin: {
    icon: faLinkedin,
    url: 'https://www.linkedin.com/in/ngseke/',
    title: 'LinkedIn',
  },
  email: {
    icon: faEnvelope,
    url: 'mailto:ngseke@gmail.com',
    title: 'Email',
  },
  discord: {
    icon: faDiscord,
    url: 'https://discordapp.com/users/533670703874965520',
    title: 'Discord',
  },
} as const
