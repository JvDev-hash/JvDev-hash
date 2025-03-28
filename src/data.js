// This data is passed to be used in the replacers. Like a ".env" file.
// I opted to not use .env so it is possible to create custom objects, arrays and logic here.
// You can modify, create or delete any property you want.
const { colors } = require('./theme');

module.exports = {
  user: 'JvDev-hash',
  startedProgramming: '1/10/2015',
  repoQuantity: 6,
  header: {
    styles: {
      align: 'center',
      style: 'for-the-badge',
      color: colors.lightSecondary.base,
      logoColor: colors.lightSecondary.over,
    },
    image: {
      src: 'src/resources/images/nickgabe.png',
      width: 600,
    },
    description: "👋 Heyyy! I'm João Victor, a brazilian programmer and future Devops engineer.",
    badges: [
      {
        type: 'badge',
        name: 'linkedin',
        href: 'https://linkedin.com/in/joao-victor-barbosa-andrade/',
      },
      {
        type: 'badge',
        name: 'notion',
        href: 'http://bit.ly/biblioteca-devops',
        logo: 'notion',
      },
      {
        type: 'views',
      },
    ],
  },
  aboutme: {
    list: ['* João Victor, 26 years', '* Java programmer and Devops student', '* Currently studying Kubernetes and Python'],
  },
  skillswall: {
    styles: {
      style: 'for-the-badge',
      align: 'left',
      highlightColor: colors.primary,
      wallColors: [colors.secondary, colors.lightSecondary],
    },
    randomOrder: true,
    skills: [
      { name: 'JavaScript'},
      { name: 'HTML5' },
      { name: 'Markdown' },
      { name: 'CSS3'},
      { name: 'Python', isHighlighted: true},
      { name: 'Shell Script', logo: 'gnu-bash', isHighlighted: true },
      { name: 'Jenkins', isHighlighted: true },
      { name: 'jQuery' },
      { name: 'Kubernetes', isHighlighted: true },
      { name: 'Linux', isHighlighted: true },
      { name: 'Bootstrap' },
      { name: 'Node.JS'},
      { name: 'Express.js', logo: 'express' },
      { name: 'MongoDB' },
      { name: 'SQLite' },
      { name: 'Git'},
      { name: 'GitHub' },
      { name: 'Visual Studio Code' },
      { name: 'PHP' },
      { name: 'Docker', isHighlighted: true },
    ],
  },
  recentworks: {
    styles: {
      title_color: colors.primary.base,
      text_color: colors.secondary.over,
      bg_color: colors.secondary.base,
      border_color: colors.black.base,
      icon_color: colors.secondary.over,
    },
  },
  socialMedias: {
    styles: {
      align: 'left',
      style: 'for-the-badge',
      color: colors.lightSecondary.base,
      logoColor: colors.lightSecondary.over,
    },
    links: [
      {
        name: 'linkedin',
        href: 'https://linkedin.com/in/joao-victor-barbosa-andrade/',
      },
      {
        name: 'email',
        logo: 'gmail',
        href: 'mailto:jvbaprof@gmail.com',
      },
      {
        name: 'azbis',
        logo: 'discord',
        labelColor: colors.secondary.base,
      },
    ],
  },
  githubStats: {
    styles: {
      style: 'for-the-badge',
      align: 'center',
      title_color: colors.primary.base,
      text_color: colors.secondary.over,
      bg_color: colors.secondary.base,
      border_color: colors.black.base,
      show_icons: true,
      icon_color: colors.secondary.over,
      rank_icon: 'github',
    },
  },
};
