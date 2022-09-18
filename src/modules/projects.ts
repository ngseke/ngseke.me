interface Item {
  title: string,
  name: string,
  description: string,
  github?: string,
  link?: string,
}

interface Category {
  title: string,
  cover: string,
  list: Item[],
}

export default [
  {
    title: 'Extension',
    cover: 'https://images.unsplash.com/photo-1541512416146-3cf58d6b27cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80',
    list: [
      {
        title: 'LeetCode Night',
        name: 'leetcode-night',
        description: 'LeetCode 深色模式的瀏覽器擴充功能',
        github: 'https://github.com/ngseke/leetcode-night',
      },
    ],
  },
  {
    title: 'MCIP',
    cover: 'https://images.unsplash.com/photo-1615917063840-0b7c196e29c1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80',
    list: [
      {
        title: 'MCIP Official Website',
        name: 'mcip',
        description: '《樂台計畫》官方網站',
        github: 'https://github.com/ngseke/mcip.ml',
        link: 'https://mcip.ml',
      },
      {
        title: 'MCIP CMS',
        name: 'mcip-cms',
        description: '《樂台計畫》後台管理系統',
      },
    ],
  },
  {
    title: 'Web',
    cover: 'https://images.unsplash.com/photo-1505356822725-08ad25f3ffe4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
    list: [
      {
        title: 'Koasu',
        name: 'koasu',
        description: '白話字台語歌詞網誌',
        github: 'https://github.com/ngseke/koasu',
        link: 'https://ngseke.github.io/koasu/',
      },
      {
        title: 'Sinopac Dual Currency Card Calc.',
        name: 'credit-card-calc',
        description: '永豐幣倍卡回饋計算機',
        github: 'https://github.com/ngseke/sinopac-dual-currency-card-calculator',
        link: 'https://ngseke.github.io/sinopac-dual-currency-card-calculator/',
      },
      {
        title: 'EM Optimization Lab',
        name: 'emo',
        description: '《電磁最佳化實驗室》網站',
        github: 'https://github.com/ngseke/emo',
        link: 'https://myweb.ntut.edu.tw/~yschen/',
      },
      {
        title: 'Realtime Monitor',
        name: 'realtime',
        description: '測速網站爬蟲工具',
      },
      {
        title: 'BOSS, Beverage Online Shop System',
        name: 'boss',
        description: '線上飲料購物系統',
        github: 'https://github.com/ngseke/boss',
      },
    ],
  },
  {
    title: 'Game',
    cover: 'https://images.unsplash.com/photo-1528804431125-842f17de657b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1160&q=80',
    list: [
      {
        title: 'Flip Card',
        description: 'Emoji 翻牌配對遊戲',
        github: 'https://github.com/ngseke/vue-flip-card',
        link: 'https://ngseke.github.io/vue-flip-card/',
      },
      {
        title: 'Gomoku',
        name: 'gomoku',
        description: '線上五子棋對戰',
        github: 'https://github.com/ngseke/gomoku',
        link: 'https://gomoku.ga/',
      },
      {
        title: 'Tic Tac Toe',
        name: 'tic-tac-toe',
        description: '圈圈叉叉亂鬥',
        github: 'https://github.com/ngseke/tic-tac-toe',
        link: 'https://ngseke.github.io/tic-tac-toe/',
      },
      {
        title: 'Raise Your Red Flag',
        name: 'flag',
        description: '以 Webcam 重現經典團康遊戲《紅旗舉起來》',
        github: 'https://github.com/ngseke/Raise-Your-Red-Flag',
        link: 'https://raise-flag.web.app/',
      },
      {
        title: 'Typing Typing!',
        name: 'typingtyping',
        description: '8-bit 復古風格打字遊戲',
        github: 'https://github.com/ngseke/Typing-Typing',
        link: '/file/TypingTyping.zip',
      },
    ],
  },
  {
    title: 'Design',
    cover: 'https://images.unsplash.com/photo-1616941245386-fc2f3458836f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80',
    list: [
      {
        title: 'NTUT-CSIE & NTUB-ACC Camp, 2017',
        name: 'camp2017',
        description: '迎新活動《會炒不加辣，果資不加糖》品牌識別設計',
      },
      {
        title: 'Shanlinliang',
        name: 'shanlinliang',
        description: '虛構涼扇品牌廣告',
      },
    ],
  },
] as Category[]
