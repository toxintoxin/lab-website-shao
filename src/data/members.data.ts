/**
 * 成员信息列表
 * name: 名字
 * avatar：头像链接，也可通过 "github:用户名" 使用 GitHub 头像
 * description：自我描述
 * githubUrl：GitHub 链接，可选
 * blogUrl：博客链接或其他媒体链接，可选
 */
const members: Member[] = [
  {
    name: 'Example',
    avatar: 'github:toxintoxin',
    description: 'short',
    githubUrl: 'https://github.com/toxintoxin',
    blogUrl: 'https://toxintoxin.github.io/memento/'
  },
  {
    name: 'Xiaoli Zhang',
    avatar: 'img/000.png',
    description: 'longlonglonglonglonglonglonglonglonglonglonglong',
  },
  {
    name: 'Qiangyou Wan',
    avatar: 'img/000.png',
    description: 'description',
  },
  {
    name: 'Siqi Li',
    avatar: 'img/000.png',
    description: 'description',
  },
  {
    name: 'Juan Cai',
    avatar: 'img/000.png',
    description: 'verylongverylongverylongverylongverylongverylongverylongverylongverylongverylongverylongverylongverylongverylongverylongverylongverylongverylongverylongverylongverylongverylongverylong',
  },
  {
    name: 'Danni Wei',
    avatar: 'img/000.png',
    description: 'description',
  },
  {
    name: 'Pengfei Cai',
    avatar: 'img/000.png',
    description: 'description',
  },
]

.map(it => ({
  ...it,
  avatar: handleAvatar(it.avatar)
}));

function handleAvatar(avatar: string) {
  var match = /^github\:(.+)$/.exec(avatar);
  if (match) return "https://avatars.githubusercontent.com/" + match[1] + "?s=256";
  return avatar;
}

export default members;