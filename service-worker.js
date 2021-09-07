/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "88337702ee16256397562670cb2edd72"
  },
  {
    "url": "api/cli.html",
    "revision": "8e206ecad48d4ee8e878f17cdb0c56a2"
  },
  {
    "url": "api/node.html",
    "revision": "4ce6f624ce349e68a33c1d13a179d992"
  },
  {
    "url": "architecture.png",
    "revision": "9a93cf6cea38878e19c5816d1af28b17"
  },
  {
    "url": "assets/css/0.styles.a4764e89.css",
    "revision": "1d75d0a7e2cb960f41910ba5f9c271ac"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.cc756456.js",
    "revision": "796f83186edd470b32be346bc16e667b"
  },
  {
    "url": "assets/js/100.0f7c9227.js",
    "revision": "6e6cf9e62fc519959c939c433c0d1c43"
  },
  {
    "url": "assets/js/101.dc6e3712.js",
    "revision": "18b5573fb47f3addb145d82153b13a73"
  },
  {
    "url": "assets/js/102.45b58600.js",
    "revision": "1fe957bb01e0f8834b074e75856d536a"
  },
  {
    "url": "assets/js/103.0fcb7775.js",
    "revision": "e24bdec693a8cdf0f9c04bacd51671cf"
  },
  {
    "url": "assets/js/104.e55cd789.js",
    "revision": "6c9e216b72ae91482728dcfcee1b1ef4"
  },
  {
    "url": "assets/js/105.edcb4fde.js",
    "revision": "583ffaff8af19590ecb06a324a489287"
  },
  {
    "url": "assets/js/106.c453f22c.js",
    "revision": "ef02d7a9ae483c95f060cb9a640f4b05"
  },
  {
    "url": "assets/js/107.6e1c1220.js",
    "revision": "7b488cb2488ab7bb84f71cefd007f888"
  },
  {
    "url": "assets/js/108.d4386562.js",
    "revision": "6f8e1de04ea385e931ac4ba4803c826e"
  },
  {
    "url": "assets/js/11.4f86b094.js",
    "revision": "cc443e2c5338757674849a1c5f22aefc"
  },
  {
    "url": "assets/js/12.1cfd0c51.js",
    "revision": "30ada40c2978bb1bc33733536a317e63"
  },
  {
    "url": "assets/js/13.84f66e57.js",
    "revision": "928bd4b0e2e2f5b08c23bfdebcd427ae"
  },
  {
    "url": "assets/js/14.f4165974.js",
    "revision": "cd583385f60f121eed3e7caf4a101c48"
  },
  {
    "url": "assets/js/15.c1ac044a.js",
    "revision": "1b451d4d4ff922fe88c4699abe439864"
  },
  {
    "url": "assets/js/16.f0998c63.js",
    "revision": "201b1af817dadf270aadf8ac2925da3f"
  },
  {
    "url": "assets/js/17.fe743358.js",
    "revision": "9c2bd0616a28eb74981d30f233a55930"
  },
  {
    "url": "assets/js/18.b332e92a.js",
    "revision": "4e89cf57ebc3e759bc9bff6438916c8d"
  },
  {
    "url": "assets/js/19.b9a374c5.js",
    "revision": "cf5a037a174229002586959e0ae9a86f"
  },
  {
    "url": "assets/js/20.cfebba38.js",
    "revision": "bb0d323fab5737e472cd633f2f8958e1"
  },
  {
    "url": "assets/js/21.99b8039f.js",
    "revision": "836fd060336b20d9362eec8ed6125add"
  },
  {
    "url": "assets/js/22.61ff2587.js",
    "revision": "287c177b34b05f75a806e88155b419d7"
  },
  {
    "url": "assets/js/23.ea85c706.js",
    "revision": "1f859d25720d0991d0d88857eecf047f"
  },
  {
    "url": "assets/js/24.8d3528bb.js",
    "revision": "25044a3e17e8d80a804020ea6e12305d"
  },
  {
    "url": "assets/js/25.5b446eac.js",
    "revision": "271bce0f39be44bdc7fa8145b859ab20"
  },
  {
    "url": "assets/js/26.e64823a5.js",
    "revision": "54200a2a640f26f21909cd6c3b042bf2"
  },
  {
    "url": "assets/js/27.b9b7ff84.js",
    "revision": "557878a2f726214745d78527a4fb351e"
  },
  {
    "url": "assets/js/28.f968f79a.js",
    "revision": "1c8c2245ad9dcbc2b43b914eb3b17243"
  },
  {
    "url": "assets/js/29.a18e1731.js",
    "revision": "10304875217a2c8969352359e1c291a0"
  },
  {
    "url": "assets/js/30.fa9ecb13.js",
    "revision": "3ea7743c24e42e0e9d77ae0cc1c7b04b"
  },
  {
    "url": "assets/js/31.aca39f20.js",
    "revision": "186126ee8518528ba33044d1532dfef4"
  },
  {
    "url": "assets/js/32.505fb902.js",
    "revision": "88c40fa126af1bf5532f42fec5672e4f"
  },
  {
    "url": "assets/js/33.a4550830.js",
    "revision": "dbd7c4bf4b98ad013cb32a5f1f156a29"
  },
  {
    "url": "assets/js/34.00a49833.js",
    "revision": "de948adea8fd5c64c691184d554ff80a"
  },
  {
    "url": "assets/js/35.14bbb4f9.js",
    "revision": "6b711a19df23f8611d5f98b56bc40b4a"
  },
  {
    "url": "assets/js/36.f7a62c94.js",
    "revision": "37737f9502366a77d54a09d1e2ffdd56"
  },
  {
    "url": "assets/js/37.0922af29.js",
    "revision": "68d22bebbe0ac41ef74a5e915825b55e"
  },
  {
    "url": "assets/js/38.e0296d37.js",
    "revision": "3d2dad994ae424652d199e6a71eb4c3b"
  },
  {
    "url": "assets/js/39.f6eb248c.js",
    "revision": "fbd6cd2cc4003e5ea29571928287a6f2"
  },
  {
    "url": "assets/js/40.18307aee.js",
    "revision": "c48df9a005fe38aa38665a03bb8bd5b0"
  },
  {
    "url": "assets/js/41.489ba69e.js",
    "revision": "7e16356dedd4df6a24b937d6fd1f8e19"
  },
  {
    "url": "assets/js/42.0298f1ce.js",
    "revision": "ee559fcf1f29cdeba4dc23b17e54af15"
  },
  {
    "url": "assets/js/43.bf0ebd8d.js",
    "revision": "3f00d587cc771aa1356bbc138961e26a"
  },
  {
    "url": "assets/js/44.81645b13.js",
    "revision": "3451a0d0510f0c9a55e64cb2d1c83185"
  },
  {
    "url": "assets/js/45.29696c9e.js",
    "revision": "7df2c6919e86920a09aa818e44edcae3"
  },
  {
    "url": "assets/js/46.884996e4.js",
    "revision": "0c43fae787332a96e5308240bca67ef7"
  },
  {
    "url": "assets/js/47.22f81fb1.js",
    "revision": "0b5e3a5a991fd9938f47a7d9ce607654"
  },
  {
    "url": "assets/js/48.8a232d47.js",
    "revision": "319cf105a222b799eb80a04771589db1"
  },
  {
    "url": "assets/js/49.ebe89997.js",
    "revision": "ee90f930395d8639e117bd5da6658d61"
  },
  {
    "url": "assets/js/5.c01ac57b.js",
    "revision": "27397b839f013b395df38c832a85a87e"
  },
  {
    "url": "assets/js/50.8b8559f5.js",
    "revision": "7d0e0a3934d4029f03c9981e30487626"
  },
  {
    "url": "assets/js/51.6efb8f96.js",
    "revision": "c5293b497114eb969669a11659277ed7"
  },
  {
    "url": "assets/js/52.e4168d6e.js",
    "revision": "d5f7f5a7cf102ef05a76300bc7796c53"
  },
  {
    "url": "assets/js/53.27240aed.js",
    "revision": "db4c80a2f19cae101515844c072cdffb"
  },
  {
    "url": "assets/js/54.33e921c1.js",
    "revision": "84b7fd2a267047cc639add9d8fca7857"
  },
  {
    "url": "assets/js/55.963835c0.js",
    "revision": "c3fa3c54feee948457e5e85a7a053c92"
  },
  {
    "url": "assets/js/56.417358d4.js",
    "revision": "d6f6ec6e99715ccbf9cf2e1247bb5a08"
  },
  {
    "url": "assets/js/57.4759df9e.js",
    "revision": "2eed03efed3b758cefb25cd421508b63"
  },
  {
    "url": "assets/js/58.ad005385.js",
    "revision": "6ee9ba2416b5076731e283e05bfbdce8"
  },
  {
    "url": "assets/js/59.1d4473f9.js",
    "revision": "ea73bdefc9dd47a46229b07e8bf3f019"
  },
  {
    "url": "assets/js/6.7d2988fc.js",
    "revision": "8a10ca8556415225e66289dc3636fefb"
  },
  {
    "url": "assets/js/60.f53e598a.js",
    "revision": "f99d8c9ed7a7d5fbd97122009f57af5b"
  },
  {
    "url": "assets/js/61.f3d13b1e.js",
    "revision": "27a985fd60c573093bf298d4334c187b"
  },
  {
    "url": "assets/js/62.4b43f21a.js",
    "revision": "70698f95a14d608ae3ccd25452ba9c57"
  },
  {
    "url": "assets/js/63.ffcd7795.js",
    "revision": "7f4e1617445c9fdd72c7bca254a51afc"
  },
  {
    "url": "assets/js/64.266451f3.js",
    "revision": "9245898feaacfbf655eec898bfdf1ceb"
  },
  {
    "url": "assets/js/65.3aa85547.js",
    "revision": "ab4fcff2d11029ff73ea1a54ee3a9006"
  },
  {
    "url": "assets/js/66.35b9292a.js",
    "revision": "833e8271f3cf118c4cea8fbffcecf584"
  },
  {
    "url": "assets/js/67.6746a4ed.js",
    "revision": "792d4b0f3ae0022a5f968b927909d98b"
  },
  {
    "url": "assets/js/68.3ca933c4.js",
    "revision": "513e6889460f2cff4ec223ec3b1a71c0"
  },
  {
    "url": "assets/js/69.7906b7a1.js",
    "revision": "db64f49512bd70c15cc83ba30b7f977c"
  },
  {
    "url": "assets/js/7.0103e5d9.js",
    "revision": "b248038d138e0fd91fa6c4b7964bd47c"
  },
  {
    "url": "assets/js/70.2b6bfc8a.js",
    "revision": "fc48622f07a366443246e39572cdbf8e"
  },
  {
    "url": "assets/js/71.7adb0939.js",
    "revision": "7b54501d5de88d5532353a8183df1069"
  },
  {
    "url": "assets/js/72.2a0f79aa.js",
    "revision": "f38897b52f3f922bdee3c9488365ea77"
  },
  {
    "url": "assets/js/73.afd3c6ef.js",
    "revision": "28ccc9fcdd3d7f8c565b82341f5d4c41"
  },
  {
    "url": "assets/js/74.19349e6d.js",
    "revision": "ebf38dea81017e22ed23997e189b2784"
  },
  {
    "url": "assets/js/75.499ce912.js",
    "revision": "f03e5f6fb49aac7aa722534f51351ad0"
  },
  {
    "url": "assets/js/76.83130231.js",
    "revision": "8350c4d310503167c564860555f68ddb"
  },
  {
    "url": "assets/js/77.dee58c29.js",
    "revision": "1db0623fb361623e1bb8bcc30241cbb6"
  },
  {
    "url": "assets/js/78.4c1e3989.js",
    "revision": "6db2d1df7c2868049de707921f231c96"
  },
  {
    "url": "assets/js/79.43fe148d.js",
    "revision": "9f52caebda51630c6bd0e54e7e4b5598"
  },
  {
    "url": "assets/js/8.60a91b09.js",
    "revision": "46060acbd08546927f79e16df47efb22"
  },
  {
    "url": "assets/js/80.519271ff.js",
    "revision": "efeae4895ac16fdae8a64b7cf162e256"
  },
  {
    "url": "assets/js/81.e1ac4d28.js",
    "revision": "1bdd22b1a1c2ada3337d2d7567b63d1c"
  },
  {
    "url": "assets/js/82.886a9b05.js",
    "revision": "a06e4fe3a884d05adfa76b98f5511d98"
  },
  {
    "url": "assets/js/83.4fec77d6.js",
    "revision": "ff4816099e8c6545136ee82966f4923c"
  },
  {
    "url": "assets/js/84.da8cc42c.js",
    "revision": "79b3c09121966338b886562336e15d2c"
  },
  {
    "url": "assets/js/85.0a65ff46.js",
    "revision": "2aa2375a849c2ca4dab253589affd73a"
  },
  {
    "url": "assets/js/86.e9ea81b8.js",
    "revision": "f3f35a77c229da244ee226ae7ffa2ec8"
  },
  {
    "url": "assets/js/87.2408958e.js",
    "revision": "8fcb9168d1eb164f79ae9b2d9aea6810"
  },
  {
    "url": "assets/js/88.9b7a216c.js",
    "revision": "765267e5d374198374407ff3c9df3068"
  },
  {
    "url": "assets/js/89.46b406e5.js",
    "revision": "c9c1851096763b276eb47d0fdd351377"
  },
  {
    "url": "assets/js/9.98cdd569.js",
    "revision": "4a0863136de2c2009f62b9cbfaa1dbad"
  },
  {
    "url": "assets/js/90.9c1a722d.js",
    "revision": "f7c521dd055b32d4eae1647335d6fa04"
  },
  {
    "url": "assets/js/91.dc3a15ad.js",
    "revision": "1f79494aed33b33c9c132771f6b5cb94"
  },
  {
    "url": "assets/js/92.b9370905.js",
    "revision": "2ad2e56d2a955d4ea7f21e54e1a2aba2"
  },
  {
    "url": "assets/js/93.d94532dc.js",
    "revision": "2ac503ece6e460cbc418c6d7c1d49f17"
  },
  {
    "url": "assets/js/94.8a901b8e.js",
    "revision": "5a4d16c379c918c493a6a6bfa66222fc"
  },
  {
    "url": "assets/js/95.8aa7c179.js",
    "revision": "3d9bb46261f59a565eb5956f99ced7d1"
  },
  {
    "url": "assets/js/96.c44a29a6.js",
    "revision": "ebadb80d09d2ea5032e9140c0b76fbc7"
  },
  {
    "url": "assets/js/97.1aebe3fc.js",
    "revision": "a1b5a660b628de76ab43bfc23338f259"
  },
  {
    "url": "assets/js/98.abddadee.js",
    "revision": "4a757f106842882a172184aa11ca4782"
  },
  {
    "url": "assets/js/99.8b03bac7.js",
    "revision": "621cc155eef5cd75c72f0fc202899cf2"
  },
  {
    "url": "assets/js/app.05e90227.js",
    "revision": "011eb33495b9b61c55355e8adc9c7c00"
  },
  {
    "url": "assets/js/vendors~docsearch.9668120d.js",
    "revision": "00022ce58b61947032bad1d9a87c4bff"
  },
  {
    "url": "assets/js/vendors~flowchart.26a5fd20.js",
    "revision": "e2bffacf84ad93b629b9db30c01afff3"
  },
  {
    "url": "assets/js/vendors~notification.e380e516.js",
    "revision": "3af87a56b7a8bb313941999b19c79bd2"
  },
  {
    "url": "config/index.html",
    "revision": "6b314c0bad9e1c8f5f2477c735f7194e"
  },
  {
    "url": "faq/index.html",
    "revision": "260dc2bccf66e79307b07dedef622276"
  },
  {
    "url": "guide/assets.html",
    "revision": "951b1945680fc815f7c2c121683370ee"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "f26794eac215347aa9ace939ec87f468"
  },
  {
    "url": "guide/deploy.html",
    "revision": "923358eeb7aa92cee77c25f044d9c6dd"
  },
  {
    "url": "guide/directory-structure.html",
    "revision": "c5d4ab8eb602f6e195f7e6dde24ecaf9"
  },
  {
    "url": "guide/frontmatter.html",
    "revision": "b0a23fb46f80d6135d6428e4f8f90c1b"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "52cb7a1aa51c30b37c217b14164673d3"
  },
  {
    "url": "guide/global-computed.html",
    "revision": "932495a9ca664ddcb48e48984cb5038f"
  },
  {
    "url": "guide/i18n.html",
    "revision": "306c83ce23925893df0cc8f91c0cb24c"
  },
  {
    "url": "guide/index.html",
    "revision": "b6217c221ac349d20d886254be66c30f"
  },
  {
    "url": "guide/markdown-slot.html",
    "revision": "c3582e88fa3d6126f9e34184657b9e98"
  },
  {
    "url": "guide/markdown.html",
    "revision": "5d309f4f804d31da707e3498d4230501"
  },
  {
    "url": "guide/permalinks.html",
    "revision": "510aad23ee7421a3f0a88124f17dfef8"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "e01eb4b1b585f88a8d6ea41d985249fe"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "c168944ac0eebd123aa4da8438c6090c"
  },
  {
    "url": "line-numbers-desktop.png",
    "revision": "7c8ccab7c4953ac2fb9e4bc93ecd25ac"
  },
  {
    "url": "line-numbers-mobile.gif",
    "revision": "580b860f45436c9a15a9f3bd036edd97"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "miscellaneous/design-concepts.html",
    "revision": "bd107b8cc98a489903635da7cb362cad"
  },
  {
    "url": "miscellaneous/glossary.html",
    "revision": "4d3cfeff2ea2a8336fcaa947676653fa"
  },
  {
    "url": "miscellaneous/local-development.html",
    "revision": "b340d20298c6b13b12e2718923531547"
  },
  {
    "url": "miscellaneous/migration-guide.html",
    "revision": "c733b781ac4eb3b51fa0270f67681582"
  },
  {
    "url": "plugin.png",
    "revision": "3e325210d3e3752e32818385fc4afbc9"
  },
  {
    "url": "plugin/context-api.html",
    "revision": "36eed36df5d1bf834f64ecb4ca19404d"
  },
  {
    "url": "plugin/index.html",
    "revision": "9160da4a5d9377cb282bfee7cbe34b92"
  },
  {
    "url": "plugin/life-cycle.html",
    "revision": "cc5130e85d36d1a591b473d6b4ea1b1b"
  },
  {
    "url": "plugin/official/plugin-active-header-links.html",
    "revision": "d5eaffc744305911e2da45b05b209e77"
  },
  {
    "url": "plugin/official/plugin-back-to-top.html",
    "revision": "d558696c2b1fc22a3f1f806f54bb5b56"
  },
  {
    "url": "plugin/official/plugin-blog.html",
    "revision": "9e7ee565ae1ea69723ee1551582806c5"
  },
  {
    "url": "plugin/official/plugin-google-analytics.html",
    "revision": "6393b56404b36684c31ab332181ddd81"
  },
  {
    "url": "plugin/official/plugin-last-updated.html",
    "revision": "8f8be1d2006c457517007dc0adeb7979"
  },
  {
    "url": "plugin/official/plugin-medium-zoom.html",
    "revision": "8284ab6c49e160914d2eef3f1f98cea3"
  },
  {
    "url": "plugin/official/plugin-nprogress.html",
    "revision": "c4c53ee71af9e2df290074edf967ff43"
  },
  {
    "url": "plugin/official/plugin-pwa.html",
    "revision": "9c5459a63c98777f05cf43db5d42d422"
  },
  {
    "url": "plugin/official/plugin-register-components.html",
    "revision": "d37b292c97c9c086c08100f7156f321e"
  },
  {
    "url": "plugin/official/plugin-search.html",
    "revision": "f585d1f197174a82f95d910a4f4e1b84"
  },
  {
    "url": "plugin/option-api.html",
    "revision": "f4a06a0af4afca941333d5be5dbe0271"
  },
  {
    "url": "plugin/using-a-plugin.html",
    "revision": "bb40c2e7dc16d65c2e13c8455426d5bc"
  },
  {
    "url": "plugin/writing-a-plugin.html",
    "revision": "43d2a1f63da26fd5f32b0658c76fcd39"
  },
  {
    "url": "theme/blog-theme.html",
    "revision": "ad772d3348de47541980dbf9fffd4ab1"
  },
  {
    "url": "theme/default-theme-config.html",
    "revision": "29ca7670f13b0fc2d5076b3c75f5fbac"
  },
  {
    "url": "theme/index.html",
    "revision": "919ed8d266c540231f0d966ad0f03937"
  },
  {
    "url": "theme/inheritance.html",
    "revision": "2a4c6f1c86a48f4dd752e0910108d63b"
  },
  {
    "url": "theme/option-api.html",
    "revision": "d978cc83db6a35004e7094dd72bc11c0"
  },
  {
    "url": "theme/using-a-theme.html",
    "revision": "026fff6d0cc8dde0ff800795c5aeaac3"
  },
  {
    "url": "theme/writing-a-theme.html",
    "revision": "cc167c518735e3465d7c5e0e3e162438"
  },
  {
    "url": "zh/api/cli.html",
    "revision": "aab2cfe22b7ad1701a349d0e7e9c895e"
  },
  {
    "url": "zh/api/node.html",
    "revision": "f08cd95ddd9d76b1d6e344c72ea9c1f9"
  },
  {
    "url": "zh/config/index.html",
    "revision": "f159b3e85d9d474ab216fc499016f14c"
  },
  {
    "url": "zh/faq/index.html",
    "revision": "615346197f240caa5fd477a905b79e91"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "ccb67b20ef41b44b252ba55eff009fe9"
  },
  {
    "url": "zh/guide/basic-config.html",
    "revision": "97188915f06dbe0c31076731b373d38d"
  },
  {
    "url": "zh/guide/deploy.html",
    "revision": "072894e24d9372abf9b19b38605c3361"
  },
  {
    "url": "zh/guide/directory-structure.html",
    "revision": "2f14d7d3c2dbdbcc79eb5eaca2d32dfc"
  },
  {
    "url": "zh/guide/frontmatter.html",
    "revision": "83c2c80d8978be1b804ffc9ed672cb2b"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "24190ad1f4aaa0141e01bc2223984cba"
  },
  {
    "url": "zh/guide/global-computed.html",
    "revision": "99e6d08b6ae9c6288b6d89297b18915f"
  },
  {
    "url": "zh/guide/i18n.html",
    "revision": "5a7d368133934ca33863404a08aaec43"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "07b609c7eca85a76a2b8cc3cf8d06ce0"
  },
  {
    "url": "zh/guide/markdown-slot.html",
    "revision": "489c3386d2256972ce6ca9727b0085a6"
  },
  {
    "url": "zh/guide/markdown.html",
    "revision": "11a0d8d6f251f6c0cd7dbd7d32e90d40"
  },
  {
    "url": "zh/guide/permalinks.html",
    "revision": "702859c6330856ce5eae387685902795"
  },
  {
    "url": "zh/guide/using-vue.html",
    "revision": "e09c546d0ff3d9312ac88d7be7d21d70"
  },
  {
    "url": "zh/index.html",
    "revision": "177d615db87e684ebd5bfe94586a315d"
  },
  {
    "url": "zh/miscellaneous/design-concepts.html",
    "revision": "6a070d62b6d0d781e388febf0f97035b"
  },
  {
    "url": "zh/miscellaneous/glossary.html",
    "revision": "44b5f17a828e17c630a1af0299647a00"
  },
  {
    "url": "zh/miscellaneous/local-development.html",
    "revision": "293e3ddc69e9b061bb60c25e224bde19"
  },
  {
    "url": "zh/miscellaneous/migration-guide.html",
    "revision": "a84ce4dc5c4183c367bc7f5f186fd201"
  },
  {
    "url": "zh/plugin/context-api.html",
    "revision": "667b096efae5c51219890bf38c934421"
  },
  {
    "url": "zh/plugin/index.html",
    "revision": "da7867eedb148e90387ff68fee622e3d"
  },
  {
    "url": "zh/plugin/life-cycle.html",
    "revision": "ab3732835e2fd346ddd589ff974a3737"
  },
  {
    "url": "zh/plugin/official/plugin-active-header-links.html",
    "revision": "583a1a4f88336da7b9316771e415d315"
  },
  {
    "url": "zh/plugin/official/plugin-back-to-top.html",
    "revision": "5fcb35459d76d60d223a424bb5c3b0c8"
  },
  {
    "url": "zh/plugin/official/plugin-blog.html",
    "revision": "72b23a5ff28ec2246ea64cf50647234b"
  },
  {
    "url": "zh/plugin/official/plugin-google-analytics.html",
    "revision": "0b20f4b4304c81fc1e08b7dd70f7e811"
  },
  {
    "url": "zh/plugin/official/plugin-last-updated.html",
    "revision": "f95915d89ca120c5d4cb86c905bc7f9c"
  },
  {
    "url": "zh/plugin/official/plugin-medium-zoom.html",
    "revision": "fedf4302857c46be51511d15547b0647"
  },
  {
    "url": "zh/plugin/official/plugin-nprogress.html",
    "revision": "35de2ddd5578bb4bf4026897463d4a4e"
  },
  {
    "url": "zh/plugin/official/plugin-pwa.html",
    "revision": "b29930e2a7d0175e8bcc490065aaa8b6"
  },
  {
    "url": "zh/plugin/official/plugin-register-components.html",
    "revision": "dd1526ce51dedf2e437420326db2071a"
  },
  {
    "url": "zh/plugin/official/plugin-search.html",
    "revision": "c69d6978deaceb706c572d44ec024a4c"
  },
  {
    "url": "zh/plugin/option-api.html",
    "revision": "e7f1a20d8d2c78c11ff320beee11f73e"
  },
  {
    "url": "zh/plugin/using-a-plugin.html",
    "revision": "67060d19c25e104ca252597cb65a53c0"
  },
  {
    "url": "zh/plugin/writing-a-plugin.html",
    "revision": "6b94138a783592c07a1e878da94b425a"
  },
  {
    "url": "zh/theme/blog-theme.html",
    "revision": "c8ba7cee735f0ec2bbefecb2b8d1b6f8"
  },
  {
    "url": "zh/theme/default-theme-config.html",
    "revision": "2a37c8868e667b2f2b6ee61df6bcd169"
  },
  {
    "url": "zh/theme/index.html",
    "revision": "9f09dc217069a5999cacd8d8138c71e0"
  },
  {
    "url": "zh/theme/inheritance.html",
    "revision": "98cc29d8e483eca62297ceeaa967be72"
  },
  {
    "url": "zh/theme/option-api.html",
    "revision": "ddfd0ea92e689169b82ba96f8113a342"
  },
  {
    "url": "zh/theme/using-a-theme.html",
    "revision": "8f306dd87fc088c508ad2d68c3b82946"
  },
  {
    "url": "zh/theme/writing-a-theme.html",
    "revision": "85c48a50a40f55e5954e46dfb2d0fd0b"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
