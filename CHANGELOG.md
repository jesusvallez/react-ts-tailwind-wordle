### 1.3.0 (2022-08-14)

##### Chores

* **package:**  update scripts ([8754bde5](https://github.com/jesusvallez/react-ts-tailwind-wordle/commit/8754bde5e0b9d099d360a3b8b2d4b0c655037d42))
* **test:**  check types before run test ([3dadee64](https://github.com/jesusvallez/react-ts-tailwind-wordle/commit/3dadee6437009b1509eebcb541c708dbb93aa8e0))
* **build:**  avoid test to compile project ([3f54753e](https://github.com/jesusvallez/react-ts-tailwind-wordle/commit/3f54753e02ad0a06c6d898da92f2609e2ad46e39))
* **deps:**  update deps ([3e145b4e](https://github.com/jesusvallez/react-ts-tailwind-wordle/commit/3e145b4e85f2546970bdbf71a14f17a3a12ed4ac))

##### Documentation Changes

* **readme:**
  *  updated roadmap ([b58112bc](https://github.com/jesusvallez/react-ts-tailwind-wordle/commit/b58112bcf3b7351cffdb1fb3a9859a9d21398a92))
  *  updated roadmap ([8546f678](https://github.com/jesusvallez/react-ts-tailwind-wordle/commit/8546f6786857c456321153b3ae2aaa582986b408))
  *  updated installation ([d22780c7](https://github.com/jesusvallez/react-ts-tailwind-wordle/commit/d22780c7dba4f3723e6b2a9788073d0166c766ad))

##### New Features

* **darkmode:**
  *  added new button to change theme ([112fc24f](https://github.com/jesusvallez/react-ts-tailwind-wordle/commit/112fc24f9550bdf38f25bf745691e52d876b0cf0))
  *  created context and hook to change theme ([e651cc3a](https://github.com/jesusvallez/react-ts-tailwind-wordle/commit/e651cc3afc1c18dcf37c89792f4edf06d4748610))
  *  changed some variables to base darkmode ([0134a9e5](https://github.com/jesusvallez/react-ts-tailwind-wordle/commit/0134a9e542b27fb3ed7140cdd9dd543c02bca5fb))
* **hooks:**  added new hooks to know theme from system and localstorage ([7acbc40a](https://github.com/jesusvallez/react-ts-tailwind-wordle/commit/7acbc40a96ee7b6d18894429748ed4c43b93f0ca))

##### Bug Fixes

* **index:**  removed favicon call ([8a5f79ee](https://github.com/jesusvallez/react-ts-tailwind-wordle/commit/8a5f79eec6e2e7b292f8faf518e1dc538bc86ca3))

##### Performance Improvements

* **button:**  prevent render onkeypress ([a9b0d3c1](https://github.com/jesusvallez/react-ts-tailwind-wordle/commit/a9b0d3c1b0f0477e7f00bc18e4ce33e97a503553))

##### Refactors

* **animation:**  created new animation to flip cards ([b9b30ecd](https://github.com/jesusvallez/react-ts-tailwind-wordle/commit/b9b30ecda6c13c5a9cd61b875a5bc10bf635e15d))

##### Tests

* **card:**  fix card test ([6f36b80b](https://github.com/jesusvallez/react-ts-tailwind-wordle/commit/6f36b80b84632805d1881e5e59186a8676792274))

#### 1.2.1 (2022-08-11)

##### Documentation Changes

* **readme:**
  *  updated roadmap ([1c09fd7a](https://github.com/jesusvallez/react-ts-tailwind-wordle/commit/1c09fd7a10f28417367def26483f7f56d4b1b61b))
  *  removed duplicated link ([f7487ba0](https://github.com/jesusvallez/react-ts-tailwind-wordle/commit/f7487ba0c10ae69ddc0aa40a5a7f640076719ab7))

### 1.2.0 (2022-08-11)

##### Chores

* **deps:**  update deps ([5a8f4624](https://github.com/jesusvallez/react-ts-tailwind-wordle/commit/5a8f4624042630aa8f6b0a8c8cb69891947138f5))
* **components:**  removed unused component ([7de06be3](https://github.com/jesusvallez/react-ts-tailwind-wordle/commit/7de06be39dfe25fa90ee35b0751dcc25f05695f6))

##### Documentation Changes

* **readme:**  updated interesting links ([3956ad34](https://github.com/jesusvallez/react-ts-tailwind-wordle/commit/3956ad34f962415ef2a024f8bd0ef406da611393))

##### New Features

* **cheats:**  removed cheats from panel ([daad3ca2](https://github.com/jesusvallez/react-ts-tailwind-wordle/commit/daad3ca2d0b1a975f623cc1797fc80f7b15f3a4f))
* **animation:**
  *  added new pop animation to card component ([24a7037c](https://github.com/jesusvallez/react-ts-tailwind-wordle/commit/24a7037cf6766f0cc667e9fa6b9bf5d2a265c84b))
  *  added news animations ([44ef961e](https://github.com/jesusvallez/react-ts-tailwind-wordle/commit/44ef961e4d0b366af224417e876a59a66e84838f))
* **component:**  created fadein component ([e5c14d26](https://github.com/jesusvallez/react-ts-tailwind-wordle/commit/e5c14d262eb7c0fce95dec13fe97c99f28c96765))
* **congrats:**  created modal component ([e5baed55](https://github.com/jesusvallez/react-ts-tailwind-wordle/commit/e5baed555d76d6dd70875c679a577f816960f4fd))
* **reset:**  created button component to reset game and start again ([018fc045](https://github.com/jesusvallez/react-ts-tailwind-wordle/commit/018fc04546b4a13b9ba523648d62e425f455307f))
* **transition:**  improve performance using lazy loading ([d0c0a3cf](https://github.com/jesusvallez/react-ts-tailwind-wordle/commit/d0c0a3cf1925d8a1b4682f3fa7a381faaa75c20b))

##### Bug Fixes

* **key:**  prevent default key when press enter ([656c5282](https://github.com/jesusvallez/react-ts-tailwind-wordle/commit/656c52827fc73e89b23299ee56d2e6097547afc8))

##### Refactors

* **hook:**  solution is generated in useWordle ([ebefaa6b](https://github.com/jesusvallez/react-ts-tailwind-wordle/commit/ebefaa6b7fdab23b5cf2d0605691376d40480d8c))

### 1.1.0 (2022-08-07)

##### Chores

* **husky:**
  *  added hasky rule when changelog is updated ([ec29ab3d](https://github.com/jesusvallez/react-ts-tailwind-wordle/commit/ec29ab3d250715eb97cdfacaba36e4f21b77b69c))
  *  install and configure husky ([ec812c11](https://github.com/jesusvallez/react-ts-tailwind-wordle/commit/ec812c1125302968e4118ed3347230092b73aafc))
* **package:**  update scripts ([276c5925](https://github.com/jesusvallez/react-ts-tailwind-wordle/commit/276c59254b24646419a350421672fe6c4cb6f5e5))

##### Documentation Changes

* **readme:**  updated roadmap ([9b3fece8](https://github.com/jesusvallez/react-ts-tailwind-wordle/commit/9b3fece81d8015731a355a301dce153429d67cc2))

##### Tests

* **init:**  created boilerplate and added some test ([76157855](https://github.com/jesusvallez/react-ts-tailwind-wordle/commit/76157855f92cbddd6da360ea497903643b0e951c))

#### 1.0.1 (2022-08-07)

##### Chores

* **package:**
  *  update scripts ([fd15cdae](https://github.com/jesusvallez/react-ts-tailwind-wordle/commit/fd15cdae3d776328b1008d14c00f8b93b6b832ca))
  *  remove standard-version from package ([b8296982](https://github.com/jesusvallez/react-ts-tailwind-wordle/commit/b8296982afe9064195cd9bc0c5516bdc6f72b4b4))
  *  update dependencies ([23d91dae](https://github.com/jesusvallez/react-ts-tailwind-wordle/commit/23d91dae8b0403896c63f002617efc6216d9e761))

##### Documentation Changes

* **changelog:**  added changelog ([2a118906](https://github.com/jesusvallez/react-ts-tailwind-wordle/commit/2a118906fb620dfbe46eeb1ea097a48db849af04))

#### 1.0.0 (2022-08-07)

##### Chores

* **deps:**
  *  update deps ([1f6cad55](https://github.com/jesusvallez/react-ts-tailwind-wordle/commit/1f6cad55d7d5b5d300d8a4c8146d342d84650c50))
  *  update deps and added plugin to sort classnames ([66f69615](https://github.com/jesusvallez/react-ts-tailwind-wordle/commit/66f69615056ecafa0501912271400398ff2e7eb7))
* **readme:**
  *  added links to readme ([cb183dce](https://github.com/jesusvallez/react-ts-tailwind-wordle/commit/cb183dce49b76f30c2490f17e65c44e0a4c3ff36))
  *  added readme.md to project ([931c6843](https://github.com/jesusvallez/react-ts-tailwind-wordle/commit/931c6843c80919b370dcb5cefd09ed47797ddb68))
* **helpers:**  updated models and created helpers ([4a54c543](https://github.com/jesusvallez/react-ts-tailwind-wordle/commit/4a54c543d7f031fcc72cb0541a689f52c2d464a4))
* **config:**
  *  confetti models ([fbd5384d](https://github.com/jesusvallez/react-ts-tailwind-wordle/commit/fbd5384d5a826aed0a819001bdc205694a36def2))
  *  added confetti and svgr pluging ([31424942](https://github.com/jesusvallez/react-ts-tailwind-wordle/commit/31424942a5223e57787ea8d18e9cbeac2612fa2d))

##### New Features

* **wordle:**
  *  improve wordle generator function ([e391af7d](https://github.com/jesusvallez/react-ts-tailwind-wordle/commit/e391af7d192c5dbeaa279ad34587ceaa1d6885fa))
  *  added animation delay and improve performance ([a92fb74e](https://github.com/jesusvallez/react-ts-tailwind-wordle/commit/a92fb74eff74a1da830e793c9e576d73abf265fe))
  *  added animation when word is correct ([79851318](https://github.com/jesusvallez/react-ts-tailwind-wordle/commit/79851318ba39854af9584828b3ae623c4099f43e))
  *  create board and optimized hook ([029fd212](https://github.com/jesusvallez/react-ts-tailwind-wordle/commit/029fd212ea8f91c21373bd1a9d8dd7bab22b405e))
* **confetti:**  added confetti container ([5fff6669](https://github.com/jesusvallez/react-ts-tailwind-wordle/commit/5fff6669abb57a4758a1f699a7323153d814a9d8))
* **init:**  init project ([20e75bb8](https://github.com/jesusvallez/react-ts-tailwind-wordle/commit/20e75bb82e4d2a0a051cba6ee492984c75b547ca))

