# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [0.4.0](https://github.com/Sekai-World/sekai-viewer/compare/v0.3.2...v0.4.0) (2021-01-30)


### Features

* **api:** add putSekaiDeckList and deleteSekaiDeckList ([ad5ce76](https://github.com/Sekai-World/sekai-viewer/commits/ad5ce762f736c1055d056627c6fc634a1d64cf8a))
* **card:** medium thumbnail supports showing card power as well ([95511cd](https://github.com/Sekai-World/sekai-viewer/commits/95511cde0cb631565d015325e21248db3b9b6458))
* **card:** thumbnail show card data ([5cf7779](https://github.com/Sekai-World/sekai-viewer/commits/5cf77793e340d30f08dbeb9061d707ee3ded3d7d))
* **user:** add sekai card management board ([0b1e50c](https://github.com/Sekai-World/sekai-viewer/commits/0b1e50c74b5f0d59171b2bc2e42e690059c8d43b))
* **user:** allow modify skill level upon importing and modifying in list ([7931948](https://github.com/Sekai-World/sekai-viewer/commits/79319480f28c691fb778b620957f44c115ddc9c8))
* **user:** allow partial update sekai profile and user meta ([4c73e08](https://github.com/Sekai-World/sekai-viewer/commits/4c73e08f80e39ba0ec2421e02c27bf3c105637a1))
* **user:** import sekai cards ([76586e7](https://github.com/Sekai-World/sekai-viewer/commits/76586e7c505df215909763c7fe541e575e3be84d))
* **user:** load sekai user team ([6386169](https://github.com/Sekai-World/sekai-viewer/commits/6386169d819e0e580f6e7d7177bbb28cfb8c8f95))
* **user:** sekai profile sub components lazy laoding ([ad7d665](https://github.com/Sekai-World/sekai-viewer/commits/ad7d6650b2d1a75c88ec733ebb73bbca1cb96e1a))
* **utils:** add useLocalStorage and useToggle hooks ([0d8d7e9](https://github.com/Sekai-World/sekai-viewer/commits/0d8d7e95b81b88a2c1e0e18b62072529703e69ca))


### Bug Fixes

* **card:** thumbnail rarity star position ([eb4c394](https://github.com/Sekai-World/sekai-viewer/commits/eb4c394e2deac992a38f3a35bac93b07ea293356))
* **music:** audio player animation stop after seeking ([9029ec5](https://github.com/Sekai-World/sekai-viewer/commits/9029ec5bd8e52dd923091f9e64f05258d08aa9de))
* **music-recommend:** typo ([d800b76](https://github.com/Sekai-World/sekai-viewer/commits/d800b76bc1431220b7c479d0b82aaca787b184f6))
* **types:** remove SekaiCard, use ITeamCardState directly ([6fe9ad9](https://github.com/Sekai-World/sekai-viewer/commits/6fe9ad97dd1a078fa15d169349462dcb34dfbe27))
* **user:** correct auto total power calc process ([30a4e22](https://github.com/Sekai-World/sekai-viewer/commits/30a4e22355a49fd6391ccab3197dc84feda2c45b))
* **user:** due to change of other module ([0c4ab44](https://github.com/Sekai-World/sekai-viewer/commits/0c4ab446349a759b86f1c101b53ed690826667d3))
* **user:** sekai profile crash when no sekai profile created ([f674ec8](https://github.com/Sekai-World/sekai-viewer/commits/f674ec80b4ac0f501cfb6e112e144917225f1e18))
* card master rank icon level 5 ([4705fb8](https://github.com/Sekai-World/sekai-viewer/commits/4705fb8ddde251990379fd1d1fbdb226f8a1c444))
* preview download png instead of webp ([5a61fe1](https://github.com/Sekai-World/sekai-viewer/commits/5a61fe15c86fb0f40104f21617018e123c98d54d))


### Refactors

* **api:** strapi card model fix, add put and delete sekai card list api ([5c196c6](https://github.com/Sekai-World/sekai-viewer/commits/5c196c62cd54c108d99566c543dfee916963d1a5))
* **live2d:** read model list from remote ([1fbe666](https://github.com/Sekai-World/sekai-viewer/commits/1fbe666278a983a962eabc91455046605483395e))
* **user:** import card power instead of level ([83ed3b6](https://github.com/Sekai-World/sekai-viewer/commits/83ed3b653c43c242d9a6273d3d6a6e9618bbfd00))
* **user:** load team sekai team text change and space between sections ([18004d1](https://github.com/Sekai-World/sekai-viewer/commits/18004d10e2d18a8644452fa76f54f762d6b52fad))
* **user:** move update sekai profile button to same line of sekai id ([b130018](https://github.com/Sekai-World/sekai-viewer/commits/b130018de95a0d4a771443869b9e9cda39a4c360))
* **user:** remove unnecessary console.log ([793ce9e](https://github.com/Sekai-World/sekai-viewer/commits/793ce9e5a3195c454381af01071da7ca40320dfd))
* **user:** sekai id panel layout fix ([55308ae](https://github.com/Sekai-World/sekai-viewer/commits/55308aefefc7437cac614dde0a6fe1855c0b6b69))
* **user:** store more card states for calculating card power ([31fd647](https://github.com/Sekai-World/sekai-viewer/commits/31fd6472fbaf5b654c463067732eaaf5e08555f2))
* **user:** team manager layout change, edit card power, auto calc total power ([7288929](https://github.com/Sekai-World/sekai-viewer/commits/72889298949caab47599f6c82fff52d68e8d3a59))
* **user:** user card list changes when cloud card list changes ([9cdf769](https://github.com/Sekai-World/sekai-viewer/commits/9cdf7693e72eacef74e9ba3c8474f2b282aa252c))
* modify global scrollbar style (only for webkit) ([90badc9](https://github.com/Sekai-World/sekai-viewer/commits/90badc9aef7dcbaae7bf2000cbddccc11c1719b7))

### [0.3.2](https://github.com/Sekai-World/sekai-viewer/compare/v0.3.1...v0.3.2) (2021-01-18)


### Features

* sort by id for all list page ([a4f755e](https://github.com/Sekai-World/sekai-viewer/commits/a4f755e118b62bebd41e11e8e0393491d4f7ba2b))
* **event:** allow track more rankings ([d57d8fa](https://github.com/Sekai-World/sekai-viewer/commits/d57d8fae1eb887e1e015ce235d94b0999eeded6d))
* **music:** add music mv type filter ([2591712](https://github.com/Sekai-World/sekai-viewer/commits/25917120f277819d8e0a3891a7dd33191978760d))


### Bug Fixes

* language code not in list may cause error ([e7c9587](https://github.com/Sekai-World/sekai-viewer/commits/e7c9587052e07ef632bd1da4abaa4b97c628563b))
* **live2d:** wrong model size on mobile device full screen ([1ecafaa](https://github.com/Sekai-World/sekai-viewer/commits/1ecafaae19e1e882696289ea5be1e589999e8a97))
* **pwa:** update notification not shown in firefox ([09a1488](https://github.com/Sekai-World/sekai-viewer/commits/09a14887ff6fc5cb4c27edfc186feaf0fae09ecf))


### Refactors

* move spoiler tag inside image in grid view ([da1bcc2](https://github.com/Sekai-World/sekai-viewer/commits/da1bcc2086c6827b9850d7599e49bcc3aef56673))
* **annoucnement:** use created_at instead of published_at as publication time ([891a893](https://github.com/Sekai-World/sekai-viewer/commits/891a89388c02240f398fbc1a5df8755714876562))

### [0.3.1](https://github.com/Sekai-World/sekai-viewer/compare/v0.3.0...v0.3.1) (2021-01-16)


### Bug Fixes

* home screen white blank page bug ([a634397](https://github.com/Sekai-World/sekai-viewer/commits/a634397255e80b42ae5473142a95ea1a85d2bdd3))


### Refactors

* reduce load i18n json requests ([e6e26c4](https://github.com/Sekai-World/sekai-viewer/commits/e6e26c429fbcc5a50f75754aba28ec8058f713bd))

## [0.3.0](https://github.com/Sekai-World/sekai-viewer/compare/v0.2.2...v0.3.0) (2021-01-14)


### Features

* **announcement:** get by preferred languages ([83ce93d](https://github.com/Sekai-World/sekai-viewer/commits/83ce93ddf0931260784001b8d145f3854607fc37))
* **card:** add rarity filter for list ([5663d0d](https://github.com/Sekai-World/sekai-viewer/commits/5663d0dd73ab26f19cad57a5d3eb46a335dcddc3))
* **sw:** cache more resource ([bb8fffe](https://github.com/Sekai-World/sekai-viewer/commits/bb8fffe195feb3779f130e655a0ebf9ec9dcd625))
* **translate:** add language filters ([db7f1e6](https://github.com/Sekai-World/sekai-viewer/commits/db7f1e65ff9e4860e4781fa114ef4651c223a175))
* add honor title list page ([e68f498](https://github.com/Sekai-World/sekai-viewer/commits/e68f498912afbccfda62b9d39ace5c12e8a280ae))
* add main page skeleton to reduce white screen time ([c274215](https://github.com/Sekai-World/sekai-viewer/commits/c2742153ddf41447b17d4d4142d12eb91a570700))


### Bug Fixes

* **card:** comfy view text outside of box ([88ee74e](https://github.com/Sekai-World/sekai-viewer/commits/88ee74e27e542f97d512b2c4346306ee7cde041c))
* **mission:** character mission use translation strings ([35c4173](https://github.com/Sekai-World/sekai-viewer/commits/35c41733804a15e5655a4ebfe0e174dbb968bc89))
* **user:** restore bind sekai function ([d55ea15](https://github.com/Sekai-World/sekai-viewer/commits/d55ea15918e61cb6f8c768546ff877a8c16cfd65))


### Refactors

* **announcement:** remove author field ([8770428](https://github.com/Sekai-World/sekai-viewer/commits/8770428be2fcab71fcba4b1c0e27d6bbbd6d6702))
* import `useSWR`, remove refState for lists ([159d546](https://github.com/Sekai-World/sekai-viewer/commits/159d546e812c7ac728c12029c6dec5a4dcb11c3f))
* **home:** layout of links ([16fd1aa](https://github.com/Sekai-World/sekai-viewer/commits/16fd1aa250884f3f22a1b2b8706374a2958276a5))
* **music:** tag filter use chip instead of select ([7ba3f4c](https://github.com/Sekai-World/sekai-viewer/commits/7ba3f4c89d628bd04a01cf4c73427371c680ecdd))

### [0.2.2](https://github.com/Sekai-World/sekai-viewer/compare/v0.2.1...v0.2.2) (2021-01-10)


### Bug Fixes

* **mission:** beginner and normal mission reward icon strectched ([38e5b32](https://github.com/Sekai-World/sekai-viewer/commits/38e5b32eeffefc53e8d2a95f5a0240c50c9e56fb))
* **mission:** honor popup title translation ([5ff2250](https://github.com/Sekai-World/sekai-viewer/commits/5ff2250edb19f3aa4bdfb6ed63f2d790b507ebc4))
* **mission:** show honor group ([679ba58](https://github.com/Sekai-World/sekai-viewer/commits/679ba58b3adca97d943a2c43a6d3dfd77cd61c75))
* **storyreader:** story title translation ([e5b8fa7](https://github.com/Sekai-World/sekai-viewer/commits/e5b8fa7f0efc16d4f956540bce6943eeab28b351))
* **user:** profile page circular progress on submitting ([6ee764a](https://github.com/Sekai-World/sekai-viewer/commits/6ee764a6b2b90018d7243ffda51645bd8906d2f2))
*  avatar in usermeta could be null ([76f2870](https://github.com/Sekai-World/sekai-viewer/commits/76f2870448d1862ae45de1163fab2ae880a23ca9))


### Refactors

* **api:** sort languages by id asc ([c2bc965](https://github.com/Sekai-World/sekai-viewer/commits/c2bc965820fa0a9ef33e5e59237ccde7e034633d))
* **music:** music vocal type translation ([61578a8](https://github.com/Sekai-World/sekai-viewer/commits/61578a8708eb960bbff86cff3084dc54212ec53b))
* **virtual-live:** use accordion to replace collapse ([f1fa206](https://github.com/Sekai-World/sekai-viewer/commits/f1fa2062213411b30e5ce136c0fa34ae6737fc83))

### [0.2.1](https://github.com/Sekai-World/sekai-viewer/compare/v0.2.0...v0.2.1) (2021-01-10)


### Features

* **user:** allow user to edit preferred languages ([36ece0b](https://github.com/Sekai-World/sekai-viewer/commits/36ece0b9dd7b5465fb213996077ddcb06fbb57f5))


### Bug Fixes

* **announcement:** fetch only display language if not logged in ([36ad7a4](https://github.com/Sekai-World/sekai-viewer/commits/36ad7a49027e4b2bc96a7d3355f75d97215ef1c2))
* **gacha:** gacha simulator shows weird pull results ([4809029](https://github.com/Sekai-World/sekai-viewer/commits/4809029171071d8cb05493e6ed5689f39031b8db)), closes [#309](https://github.com/Sekai-World/sekai-viewer/issues/309)
* **widget:** set overflow to auto ([38cd6fe](https://github.com/Sekai-World/sekai-viewer/commits/38cd6fe19df41bb8cb991f0a833b09bc042d6d75))


### Refactors

* **user:** sekai profile to separate section ([16010c3](https://github.com/Sekai-World/sekai-viewer/commits/16010c32f713b8f2d2f39c97c38d092694362d5c))
