/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => { // webpackBootstrap
  "use strict";
  var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

        __webpack_require__.r(__webpack_exports__);
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./log */ "./src/log.js");
/* harmony import */ var _log2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./log2 */ "./src/log2.js");
        console.log("Hello World!");


        document.getElementsByTagName('html')[0].addEventListener('click', async () => {
          let { test } = await __webpack_require__.e(/*! import() */ "src_test_js").then(__webpack_require__.bind(__webpack_require__, /*! ./test */ "./src/test.js"));
          console.log(test)
        })
          ; (0, _log__WEBPACK_IMPORTED_MODULE_0__.log)();
        (0, _log2__WEBPACK_IMPORTED_MODULE_1__.log2)();
        console.log('end');

        //# sourceURL=webpack://my-webpack-project/./src/index.js?;

        /***/
      })


  });
  /************************************************************************/
  // The module cache
  var __webpack_module_cache__ = {};

  // The require function
  function __webpack_require__(moduleId) {
    // Check if module is in cache
    var cachedModule = __webpack_module_cache__[moduleId];
    if (cachedModule !== undefined) {
      return cachedModule.exports;

    }
    // Create a new module (and put it into the cache)
    var module = __webpack_module_cache__[moduleId] = {
      // no module.id needed
      // no module.loaded needed
      exports: {}

    };

    // Execute the module function
    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);

    // Return the exports of the module
    return module.exports;

  }

  // expose the modules object (__webpack_modules__)
  __webpack_require__.m = __webpack_modules__;

  /************************************************************************/
  /* webpack/runtime/chunk loaded */
  (() => {
    //此块区域用于父子依赖处理，在依赖chunk加载完毕后才会执行代码
    var deferred = [];//存放内容 liru[[['log','log2'],()=>{ __webpack_require__('./src/index.js'),poriority（优先级）}]]
    __webpack_require__.O = (result, chunkIds, fn, priority) => {
      //如果参数携带chunkIds，说明依赖其他chunk，那么推进去
      if (chunkIds) {
        priority = priority || 0;
        
        for (var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) {
          //根据优先级比较进行插队 优先级从低到高排列
          deferred[i] = deferred[i - 1];
        }
        //能读取到i 因为上面用的var
        deferred[i] = [chunkIds, fn, priority];
        return;

      }
      //每有一个chunk加载完成都会触发webpackJsonpCallback最后会触发__webpack_require__.O，然后遍历deffered，查看每一项有没有满足条件的（依赖chunk加载完毕）满足后执行对应项存起来的函数
      //比如本示例中最后两行__webpack_require__.O(undefined, ["log2", "log"], () => (__webpack_require__("./src/index.js")))，index.js必须在log和log2加载完成后才可以执行，log2和log加载完成后都会触发每有一个chunk加载完成都会触发webpackJsonpCallback最后会触发__webpack_require__.O，然后走下面逻辑，
      var notFulfilled = Infinity;
      for (var i = 0; i < deferred.length; i++) {
        var [chunkIds, fn, priority] = deferred[i];
        var fulfilled = true;
        for (var j = 0; j < chunkIds.length; j++) {
          //Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j]))) 也就是__webpack_require__.O.j(chunkIds),判断此chunk状态是否完毕，完毕后从依赖数组移除
          if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
            chunkIds.splice(j--, 1);

          } else {
            fulfilled = false;
            if (priority < notFulfilled) notFulfilled = priority;

          }

        }
        if (fulfilled) {
          deferred.splice(i--, 1)
          var r = fn();
          if (r !== undefined) result = r;

        }

      }
      return result;

    };

  })();

  /* webpack/runtime/define property getters */
  (() => {
    // define getter functions for harmony exports
    __webpack_require__.d = (exports, definition) => {
      for (var key in definition) {
        if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
          Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });

        }

      }

    };

  })();

  /* webpack/runtime/ensure chunk */
  (() => {
    __webpack_require__.f = {};
    // This file contains only the entry chunk.
    // The chunk loading function for additional chunks
    //用于加载异步chunk  import()这种
    __webpack_require__.e = (chunkId) => {
      return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
        __webpack_require__.f[key](chunkId, promises);//触发 f.j
        return promises;

      }, []));

    };

  })();

  /* webpack/runtime/get javascript chunk filename */
  (() => {
    // This function allow to reference async chunks
    __webpack_require__.u = (chunkId) => {
      // return url for filenames based on template
      return "" + chunkId + ".js";

    };

  })();

  /* webpack/runtime/global */
  (() => {
    __webpack_require__.g = (function () {
      if (typeof globalThis === 'object') return globalThis;
      try {
        return this || new Function('return this')();

      } catch (e) {
        if (typeof window === 'object') return window;

      }

    })();

  })();

  /* webpack/runtime/hasOwnProperty shorthand */
  (() => {
    __webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))

  })();

  /* webpack/runtime/load script */
  (() => {
    var inProgress = {};
    var dataWebpackPrefix = "my-webpack-project:";
    // loadScript function to load a script via script tag
    __webpack_require__.l = (url, done, key, chunkId) => {
      if (inProgress[url]) { inProgress[url].push(done); return; }
      var script, needAttach;
      if (key !== undefined) {
        var scripts = document.getElementsByTagName("script");
        for (var i = 0; i < scripts.length; i++) {
          var s = scripts[i];
          if (s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }

        }

      }
      if (!script) {
        needAttach = true;
        script = document.createElement('script');

        script.charset = 'utf-8';
        script.timeout = 120;
        if (__webpack_require__.nc) {
          script.setAttribute("nonce", __webpack_require__.nc);

        }
        script.setAttribute("data-webpack", dataWebpackPrefix + key);
        script.src = url;

      }
      inProgress[url] = [done];
      var onScriptComplete = (prev, event) => {
        // avoid mem leaks in IE.
        script.onerror = script.onload = null;
        clearTimeout(timeout);
        var doneFns = inProgress[url];
        delete inProgress[url];
        script.parentNode && script.parentNode.removeChild(script);
        doneFns && doneFns.forEach((fn) => (fn(event)));
        if (prev) return prev(event);

      }
        ;
      var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
      script.onerror = onScriptComplete.bind(null, script.onerror);
      script.onload = onScriptComplete.bind(null, script.onload);
      needAttach && document.head.appendChild(script);

    };

  })();

  /* webpack/runtime/make namespace object */
  (() => {
    // define __esModule on exports
    __webpack_require__.r = (exports) => {
      if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

      }
      Object.defineProperty(exports, '__esModule', { value: true });

    };

  })();

  /* webpack/runtime/publicPath */
  (() => {
    var scriptUrl;
    if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
    var document = __webpack_require__.g.document;
    if (!scriptUrl && document) {
      if (document.currentScript)
        scriptUrl = document.currentScript.src
      if (!scriptUrl) {
        var scripts = document.getElementsByTagName("script");
        if (scripts.length) scriptUrl = scripts[scripts.length - 1].src

      }

    }
    // When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
    // or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
    if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
    scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
    __webpack_require__.p = scriptUrl;

  })();

  /* webpack/runtime/jsonp chunk loading */
  (() => {
    // no baseURI

    // object to store loaded and loading chunks
    // undefined = chunk not loaded, null = chunk preloaded/prefetched
    // [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
    var installedChunks = {
      "main": 0

    };

    __webpack_require__.f.j = (chunkId, promises) => {
      // JSONP chunk loading for javascript
      var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
      if (installedChunkData !== 0) { // 0 means "already installed".

        // a Promise means "currently loading".
        if (installedChunkData) {
          promises.push(installedChunkData[2]);

        } else {
          if (true) { // all chunks have JS
            // setup Promise in chunk cache
            var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
            promises.push(installedChunkData[2] = promise);
            //installedChunks存入要加载的chunk 格式 [promise的resolve，promise的reject,promise本身]

            // start chunk loading
            var url = __webpack_require__.p + __webpack_require__.u(chunkId);
            // create error before stack unwound to get useful stacktrace later
            var error = new Error();
            var loadingEnded = (event) => {
              //chunk加载失败抛错逻辑
              if (__webpack_require__.o(installedChunks, chunkId)) {
                installedChunkData = installedChunks[chunkId];
                if (installedChunkData !== 0) installedChunks[chunkId] = undefined;
                if (installedChunkData) {
                  var errorType = event && (event.type === 'load' ? 'missing' : event.type);
                  var realSrc = event && event.target && event.target.src;
                  error.message = 'Loading chunk ' + chunkId + ' failed.(' + errorType + ': ' + realSrc + ')';
                  error.name = 'ChunkLoadError';
                  error.type = errorType;
                  error.request = realSrc;
                  installedChunkData[1](error);

                }

              }

            };
            __webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);//创建script标签 来加载chunk

          } else installedChunks[chunkId] = 0;

        }

      }

    };

    // no prefetching

    // no preloaded

    // no HMR

    // no HMR manifest

    __webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);

    // install a JSONP callback for chunk loading
    var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
      var [chunkIds, moreModules, runtime] = data;
      // add "moreModules" to the modules object,
      // then flag all "chunkIds" as loaded and fire callback
      var moduleId, chunkId, i = 0;
      if (chunkIds.some((id) => (installedChunks[id] !== 0))) {
        for (moduleId in moreModules) {
          if (__webpack_require__.o(moreModules, moduleId)) {
            //chunk内容挂载到__webpack_modules__ ,因为前面定义了__webpack_require__.m就指向__webpack_modules__
            __webpack_require__.m[moduleId] = moreModules[moduleId];
          }
        }
        if (runtime) var result = runtime(__webpack_require__);
      }
      if (parentChunkLoadingFunction) parentChunkLoadingFunction(data);
      for (; i < chunkIds.length; i++) {
        chunkId = chunkIds[i];
        if (__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
          //如果installChunks已经有这个chunk的记录并且不是0，null,undefined（也就是代表是个加载中的promise）,那么触发resolve,并标记为0（已完成） 
          //import()也就是异步加载chunk的成功回调在这里触发（f.j方法给他存的数据类型是这种 installedChunks:{'main':0,'async_module':[promise的resolve,promise的reject,promise]}）
          installedChunks[chunkId][0]();
        }
        debugger
        installedChunks[chunkId] = 0;
      }
      debugger
      return __webpack_require__.O(result);
    }
    var chunkLoadingGlobal = self["webpackChunkmy_webpack_project"] = self["webpackChunkmy_webpack_project"] || [];
    chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
    //相当于劫持了webpackChunkmy_webpack_project的push（其他chunk加载完后会自动触发push来把自身内容推进来）
    //触发后执行webpackJsonpCallback自己的逻辑，并且还把webpackChunkmy_webpack_project的原本的push方法通过参数传了进去并且执行,所以不仅执行了webpackJsonpCallback的逻辑，最后也把chunk内容放到了webpackChunkmy_webpack_project里
    chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
  })();

  /************************************************************************/

  // startup
  // Load entry module and return exports
  // This entry module depends on other loaded chunks and execution need to be delayed
  var __webpack_exports__ = __webpack_require__.O(undefined, ["log2", "log"], () => (__webpack_require__("./src/index.js")))
  __webpack_exports__ = __webpack_require__.O(__webpack_exports__);


})()
  ;