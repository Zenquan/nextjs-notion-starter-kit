import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '256c24be22f74927b0649cd4d9e17a63',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Zenquan的博客',
  domain: 'https://blog.zenquan.vercel.app/',
  author: 'Zenquan',

  // open graph metadata (optional)
  description:
    'Zenquan的博客———前端折腾工程师，喜欢写代码、摄影，旅游，音乐、美食。',

  // social usernames (optional)
  twitter: '',
  github: 'zenquan',
  linkedin: '',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  //   pageUrlOverrides: {
  //     '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //     '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  //   },
  // pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  // navigationStyle: 'default'
  navigationStyle: 'custom',
  navigationLinks: [
    // {
    //   title: '文章',
    //   pageId: '320a75be452f4d49ab167064b1391f59'
    // },
    {
      title: '摄影',
      pageId: '02b08b289e424893a0eff50c5ac54eed'
    },
    {
      title: '关于',
      pageId: '03e0bfe0040842e9a187c30f5894655d'
    }
  ],
  cusdis: {
    host: 'https://cusdis.joyenjoy.tech',
    appId: 'fedf0eea-62f7-47c0-8cb2-d983aa41efc5' // your website id
  }
})
