(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~ui"],{

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/vue-style-loader/lib/addStylesClient.js":
/*!**************************************************************!*\
  !*** ./node_modules/vue-style-loader/lib/addStylesClient.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesClient; });
/* harmony import */ var _listToStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listToStyles */ "./node_modules/vue-style-loader/lib/listToStyles.js");
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = Object(_listToStyles__WEBPACK_IMPORTED_MODULE_0__["default"])(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = Object(_listToStyles__WEBPACK_IMPORTED_MODULE_0__["default"])(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "./node_modules/vue-style-loader/lib/listToStyles.js":
/*!***********************************************************!*\
  !*** ./node_modules/vue-style-loader/lib/listToStyles.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return listToStyles; });
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),

/***/ "./node_modules/vue/dist/vue.runtime.esm.js":
/*!**************************************************!*\
  !*** ./node_modules/vue/dist/vue.runtime.esm.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global, setImmediate) {/*!
 * Vue.js v2.5.16
 * (c) 2014-2018 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// these helpers produces better vm code in JS engines due to their
// explicitness and function inlining
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value e.g. [object Object]
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : typeof val === 'object'
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert a input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if a attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether the object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it... e.g.
 * PhantomJS 1.x. Technically we don't need this anymore since native bind is
 * now more performant in most browsers, but removing it would be breaking for
 * code that was able to run in PhantomJS 1.x, so this must be kept for
 * backwards compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/)
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/**
 * Return same value
 */
var identity = function (_) { return _; };

/**
 * Generate a static keys string from compiler modules.
 */


/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured'
];

/*  */

var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
})

/*  */

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = /[^\w.$]/;
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;

var supportsPassive = false;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = (function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm || {};
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */


var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// the current target watcher being evaluated.
// this is globally unique because there could be only one
// watcher being evaluated at any time.
Dep.target = null;
var targetStack = [];

function pushTarget (_target) {
  if (Dep.target) { targetStack.push(Dep.target); }
  Dep.target = _target;
}

function popTarget () {
  Dep.target = targetStack.pop();
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    vnode.children,
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    var augment = hasProto
      ? protoAugment
      : copyAugment;
    augment(value, arrayMethods, arrayKeys);
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through each property and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment an target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src, keys) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment an target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  if (!getter && arguments.length === 2) {
    val = obj[key];
  }
  var setter = property && property.set;

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ("development" !== 'production' && customSetter) {
        customSetter();
      }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ("development" !== 'production' &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    "development" !== 'production' && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ("development" !== 'production' &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    "development" !== 'production' && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;
  var keys = Object.keys(from);
  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (isPlainObject(toVal) && isPlainObject(fromVal)) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
      "development" !== 'production' && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  return childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
    "development" !== 'production' && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!/^[a-zA-Z][\w-]*$/.test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'can only contain alphanumeric characters and the hyphen, ' +
      'and must start with a letter.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def = dirs[key];
      if (typeof def === 'function') {
        dirs[key] = { bind: def, update: def };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);
  var extendsFrom = child.extends;
  if (extendsFrom) {
    parent = mergeOptions(parent, extendsFrom, vm);
  }
  if (child.mixins) {
    for (var i = 0, l = child.mixins.length; i < l; i++) {
      parent = mergeOptions(parent, child.mixins[i], vm);
    }
  }
  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ("development" !== 'production' && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */

function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ("development" !== 'production' && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }
  if (!valid) {
    warn(
      "Invalid prop: type check failed for prop \"" + name + "\"." +
      " Expected " + (expectedTypes.map(capitalize).join(', ')) +
      ", got " + (toRawType(value)) + ".",
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

/*  */

function handleError (err, vm, info) {
  if (vm) {
    var cur = vm;
    while ((cur = cur.$parent)) {
      var hooks = cur.$options.errorCaptured;
      if (hooks) {
        for (var i = 0; i < hooks.length; i++) {
          try {
            var capture = hooks[i].call(cur, err, vm, info) === false;
            if (capture) { return }
          } catch (e) {
            globalHandleError(e, cur, 'errorCaptured hook');
          }
        }
      }
    }
  }
  globalHandleError(err, vm, info);
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      logError(e, null, 'config.errorHandler');
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */
/* globals MessageChannel */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using both microtasks and (macro) tasks.
// In < 2.4 we used microtasks everywhere, but there are some scenarios where
// microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690) or even between bubbling of the same
// event (#6566). However, using (macro) tasks everywhere also has subtle problems
// when state is changed right before repaint (e.g. #6813, out-in transitions).
// Here we use microtask by default, but expose a way to force (macro) task when
// needed (e.g. in event handlers attached by v-on).
var microTimerFunc;
var macroTimerFunc;
var useMacroTask = false;

// Determine (macro) task defer implementation.
// Technically setImmediate should be the ideal choice, but it's only available
// in IE. The only polyfill that consistently queues the callback after all DOM
// events triggered in the same loop is by using MessageChannel.
/* istanbul ignore if */
if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  macroTimerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else if (typeof MessageChannel !== 'undefined' && (
  isNative(MessageChannel) ||
  // PhantomJS
  MessageChannel.toString() === '[object MessageChannelConstructor]'
)) {
  var channel = new MessageChannel();
  var port = channel.port2;
  channel.port1.onmessage = flushCallbacks;
  macroTimerFunc = function () {
    port.postMessage(1);
  };
} else {
  /* istanbul ignore next */
  macroTimerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

// Determine microtask defer implementation.
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  microTimerFunc = function () {
    p.then(flushCallbacks);
    // in problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else {
  // fallback to macro
  microTimerFunc = macroTimerFunc;
}

/**
 * Wrap a function so that if any code inside triggers state change,
 * the changes are queued using a (macro) task instead of a microtask.
 */
function withMacroTask (fn) {
  return fn._withTask || (fn._withTask = function () {
    useMacroTask = true;
    var res = fn.apply(null, arguments);
    useMacroTask = false;
    return res
  })
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    if (useMacroTask) {
      macroTimerFunc();
    } else {
      microTimerFunc();
    }
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) || key.charAt(0) === '_';
      if (!has && !isAllowed) {
        warnNonPresent(target, key);
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        warnNonPresent(target, key);
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      perf.clearMeasures(name);
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        cloned[i].apply(null, arguments$1);
      }
    } else {
      // return handler return value for single handlers
      return fns.apply(null, arguments)
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  vm
) {
  var name, def, cur, old, event;
  for (name in on) {
    def = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    /* istanbul ignore if */
    if (isUndef(cur)) {
      "development" !== 'production' && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur);
      }
      add(event.name, cur, event.once, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook (def, hookKey, hook) {
  if (def instanceof VNode) {
    def = def.data.hook || (def.data.hook = {});
  }
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook () {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor,
  context
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (isDef(factory.contexts)) {
    // already pending
    factory.contexts.push(context);
  } else {
    var contexts = factory.contexts = [context];
    var sync = true;

    var forceRender = function () {
      for (var i = 0, l = contexts.length; i < l; i++) {
        contexts[i].$forceUpdate();
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender();
      }
    });

    var reject = once(function (reason) {
      "development" !== 'production' && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender();
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (typeof res.then === 'function') {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isDef(res.component) && typeof res.component.then === 'function') {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            setTimeout(function () {
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender();
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          setTimeout(function () {
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn, once) {
  if (once) {
    target.$once(event, fn);
  } else {
    target.$on(event, fn);
  }
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var this$1 = this;

    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var this$1 = this;

    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$off(event[i], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    if (fn) {
      // specific handler
      var cb;
      var i$1 = cbs.length;
      while (i$1--) {
        cb = cbs[i$1];
        if (cb === fn || cb.fn === fn) {
          cbs.splice(i$1, 1);
          break
        }
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      for (var i = 0, l = cbs.length; i < l; i++) {
        try {
          cbs[i].apply(vm, args);
        } catch (e) {
          handleError(e, vm, ("event handler for \"" + event + "\""));
        }
      }
    }
    return vm
  };
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  var slots = {};
  if (!children) {
    return slots
  }
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

function resolveScopedSlots (
  fns, // see flow/vnode
  res
) {
  res = res || {};
  for (var i = 0; i < fns.length; i++) {
    if (Array.isArray(fns[i])) {
      resolveScopedSlots(fns[i], res);
    } else {
      res[fns[i].key] = fns[i].fn;
    }
  }
  return res
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    if (vm._isMounted) {
      callHook(vm, 'beforeUpdate');
    }
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var prevActiveInstance = activeInstance;
    activeInstance = vm;
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(
        vm.$el, vnode, hydrating, false /* removeOnly */,
        vm.$options._parentElm,
        vm.$options._refElm
      );
      // no need for the ref nodes after initial patch
      // this prevents keeping a detached DOM tree in memory (#5851)
      vm.$options._parentElm = vm.$options._refElm = null;
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    activeInstance = prevActiveInstance;
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function mountComponent (
  vm,
  el,
  hydrating
) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if ("development" !== 'production' && config.performance && mark) {
    updateComponent = function () {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;

      mark(startTag);
      var vnode = vm._render();
      mark(endTag);
      measure(("vue " + name + " render"), startTag, endTag);

      mark(startTag);
      vm._update(vnode, hydrating);
      mark(endTag);
      measure(("vue " + name + " patch"), startTag, endTag);
    };
  } else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  }

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, null, true /* isRenderWatcher */);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren
  var hasChildren = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    parentVnode.data.scopedSlots || // has new scoped slots
    vm.$scopedSlots !== emptyObject // has old scoped slots
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (hasChildren) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      try {
        handlers[i].call(vm);
      } catch (e) {
        handleError(e, vm, (hook + " hook"));
      }
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */


var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ("development" !== 'production' && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */

var uid$1 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$1; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = function () {};
      "development" !== 'production' && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    var dep = this$1.deps[i];
    if (!this$1.newDepIds.has(dep.id)) {
      dep.removeSub(this$1);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    this$1.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
    var this$1 = this;

  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this$1.deps[i].removeSub(this$1);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive(props, key, value, function () {
        if (vm.$parent && !isUpdatingChildComponent) {
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
    "development" !== 'production' && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
      "development" !== 'production' && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ("development" !== 'production' && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : userDef;
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : userDef.get
      : noop;
    sharedPropertyDefinition.set = userDef.set
      ? userDef.set
      : noop;
  }
  if ("development" !== 'production' &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (methods[key] == null) {
        warn(
          "Method \"" + key + "\" has an undefined value in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = methods[key] == null ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function (newData) {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      cb.call(vm, watcher.value);
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject).filter(function (key) {
        /* istanbul ignore next */
        return Object.getOwnPropertyDescriptor(inject, key).enumerable
      })
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    keys = Object.keys(val);
    ret = new Array(keys.length);
    for (i = 0, l = keys.length; i < l; i++) {
      key = keys[i];
      ret[i] = render(val[key], key, i);
    }
  }
  if (isDef(ret)) {
    (ret)._isVList = true;
  }
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ("development" !== 'production' && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    nodes = scopedSlotFn(props) || fallback;
  } else {
    var slotNodes = this.$slots[name];
    // warn duplicate slot usage
    if (slotNodes) {
      if ("development" !== 'production' && slotNodes._rendered) {
        warn(
          "Duplicate presence of slot \"" + name + "\" found in the same render tree " +
          "- this will likely cause render errors.",
          this
        );
      }
      slotNodes._rendered = true;
    }
    nodes = slotNodes || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
      "development" !== 'production' && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        if (!(key in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
      "development" !== 'production' && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () { return resolveSlots(children, parent); };

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = data.scopedSlots || emptyObject;
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */




// Register the component hook to weex native render engine.
// The hook will be triggered by native, not javascript.


// Updates the state of the component to weex native render engine.

/*  */

// https://github.com/Hanks10100/weex-native-directive/tree/master/component

// listening on native callback

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (
    vnode,
    hydrating,
    parentElm,
    refElm
  ) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance,
        parentElm,
        refElm
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor, context);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  // Weex specific: invoke recycle-list optimized @render function for
  // extracting cell-slot template.
  // https://github.com/Hanks10100/weex-native-directive/tree/master/component
  /* istanbul ignore if */
  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent, // activeInstance in lifecycle state
  parentElm,
  refElm
) {
  var options = {
    _isComponent: true,
    parent: parent,
    _parentVnode: vnode,
    _parentElm: parentElm || null,
    _refElm: refElm || null
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    hooks[key] = componentVNodeHooks[key];
  }
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input';(data.props || (data.props = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  if (isDef(on[event])) {
    on[event] = [data.model.callback].concat(on[event]);
  } else {
    on[event] = data.model.callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
    "development" !== 'production' && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ("development" !== 'production' &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if (isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    // reset _rendered flag on slots for duplicate slot check
    if (true) {
      for (var key in vm.$slots) {
        // $flow-disable-line
        vm.$slots[key]._rendered = false;
      }
    }

    if (_parentVnode) {
      vm.$scopedSlots = _parentVnode.data.scopedSlots || emptyObject;
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if (true) {
        if (vm.$options.renderError) {
          try {
            vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
          } catch (e) {
            handleError(e, vm, "renderError");
            vnode = vm._vnode;
          }
        } else {
          vnode = vm._vnode;
        }
      } else {}
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ("development" !== 'production' && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ("development" !== 'production' && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if ("development" !== 'production' && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;
  opts._parentElm = options._parentElm;
  opts._refElm = options._refElm;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var extended = Ctor.extendOptions;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = dedupe(latest[key], extended[key], sealed[key]);
    }
  }
  return modified
}

function dedupe (latest, extended, sealed) {
  // compare latest and sealed to ensure lifecycle hooks won't be duplicated
  // between merges
  if (Array.isArray(latest)) {
    var res = [];
    sealed = Array.isArray(sealed) ? sealed : [sealed];
    extended = Array.isArray(extended) ? extended : [extended];
    for (var i = 0; i < latest.length; i++) {
      // push original options and not sealed options to exclude duplicated options
      if (extended.indexOf(latest[i]) >= 0 || sealed.indexOf(latest[i]) < 0) {
        res.push(latest[i]);
      }
    }
    return res
  } else {
    return latest
  }
}

function Vue (options) {
  if ("development" !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ("development" !== 'production' && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ("development" !== 'production' && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */

function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    var this$1 = this;

    for (var key in this$1.cache) {
      pruneCacheEntry(this$1.cache, key, this$1.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
}

var builtInComponents = {
  KeepAlive: KeepAlive
}

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.5.16';

/*  */

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select,progress');
var mustUseProp = function (tag, type, attr) {
  return (
    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
  )
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,translate,' +
  'truespeed,typemustmatch,visible'
);

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : ''
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false
};

/*  */

function genClassForVnode (vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;
    if (childNode && childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode && parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return renderClass(data.staticClass, data.class)
}

function mergeClassData (child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class)
      ? [child.class, parent.class]
      : parent.class
  }
}

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template,blockquote,iframe,tfoot'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
  'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);



var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag)
};

function getTagNamespace (tag) {
  if (isSVG(tag)) {
    return 'svg'
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math'
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement (tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true
  }
  if (isReservedTag(tag)) {
    return false
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag]
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return (unknownElementCache[tag] = (
      el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
    ))
  } else {
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
  }
}

var isTextInputType = makeMap('text,number,password,search,email,tel,url');

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query (el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
      "development" !== 'production' && warn(
        'Cannot find element: ' + el
      );
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}

/*  */

function createElement$1 (tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm
}

function createElementNS (namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

function createTextNode (text) {
  return document.createTextNode(text)
}

function createComment (text) {
  return document.createComment(text)
}

function insertBefore (parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild (node, child) {
  node.removeChild(child);
}

function appendChild (node, child) {
  node.appendChild(child);
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.tagName
}

function setTextContent (node, text) {
  node.textContent = text;
}

function setStyleScope (node, scopeId) {
  node.setAttribute(scopeId, '');
}


var nodeOps = Object.freeze({
	createElement: createElement$1,
	createElementNS: createElementNS,
	createTextNode: createTextNode,
	createComment: createComment,
	insertBefore: insertBefore,
	removeChild: removeChild,
	appendChild: appendChild,
	parentNode: parentNode,
	nextSibling: nextSibling,
	tagName: tagName,
	setTextContent: setTextContent,
	setStyleScope: setStyleScope
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
}

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!isDef(key)) { return }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode (a, b) {
  return (
    a.key === b.key && (
      (
        a.tag === b.tag &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)
      ) || (
        isTrue(a.isAsyncPlaceholder) &&
        a.asyncFactory === b.asyncFactory &&
        isUndef(b.asyncFactory.error)
      )
    )
  )
}

function sameInputType (a, b) {
  if (a.tag !== 'input') { return true }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove () {
      if (--remove.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove.listeners = listeners;
    return remove
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  function isUnknownElement$$1 (vnode, inVPre) {
    return (
      !inVPre &&
      !vnode.ns &&
      !(
        config.ignoredElements.length &&
        config.ignoredElements.some(function (ignore) {
          return isRegExp(ignore)
            ? ignore.test(vnode.tag)
            : ignore === vnode.tag
        })
      ) &&
      config.isUnknownElement(vnode.tag)
    )
  }

  var creatingElmInVPre = 0;

  function createElm (
    vnode,
    insertedVnodeQueue,
    parentElm,
    refElm,
    nested,
    ownerArray,
    index
  ) {
    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // This vnode was used in a previous render!
      // now it's used as a new node, overwriting its elm would cause
      // potential patch errors down the road when it's used as an insertion
      // reference node. Instead, we clone the node on-demand before creating
      // associated DOM element for it.
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      if (true) {
        if (data && data.pre) {
          creatingElmInVPre++;
        }
        if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
          warn(
            'Unknown custom element: <' + tag + '> - did you ' +
            'register the component correctly? For recursive components, ' +
            'make sure to provide the "name" option.',
            vnode.context
          );
        }
      }

      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if ("development" !== 'production' && data && data.pre) {
        creatingElmInVPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */, parentElm, refElm);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (ref$$1.parentNode === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      if (true) {
        checkDuplicateKeys(children);
      }
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
    }
  }

  function isPatchable (vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) { i.create(emptyNode, vnode); }
      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    if (isDef(i = vnode.fnScopeId)) {
      nodeOps.setStyleScope(vnode.elm, i);
    } else {
      var ancestor = vnode;
      while (ancestor) {
        if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
          nodeOps.setStyleScope(vnode.elm, i);
        }
        ancestor = ancestor.parent;
      }
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) &&
      i !== vnode.context &&
      i !== vnode.fnContext &&
      isDef(i = i.$options._scopeId)
    ) {
      nodeOps.setStyleScope(vnode.elm, i);
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    if (true) {
      checkDuplicateKeys(newCh);
    }

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key)
          ? oldKeyToIdx[newStartVnode.key]
          : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
        } else {
          vnodeToMove = oldCh[idxInOld];
          if (sameVnode(vnodeToMove, newStartVnode)) {
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          }
        }
        newStartVnode = newCh[++newStartIdx];
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function checkDuplicateKeys (children) {
    var seenKeys = {};
    for (var i = 0; i < children.length; i++) {
      var vnode = children[i];
      var key = vnode.key;
      if (isDef(key)) {
        if (seenKeys[key]) {
          warn(
            ("Duplicate keys detected: '" + key + "'. This may cause an update error."),
            vnode.context
          );
        } else {
          seenKeys[key] = true;
        }
      }
    }
  }

  function findIdxInOld (node, oldCh, start, end) {
    for (var i = start; i < end; i++) {
      var c = oldCh[i];
      if (isDef(c) && sameVnode(node, c)) { return i }
    }
  }

  function patchVnode (oldVnode, vnode, insertedVnodeQueue, removeOnly) {
    if (oldVnode === vnode) {
      return
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }
      return
    }

    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) &&
      isTrue(oldVnode.isStatic) &&
      vnode.key === oldVnode.key &&
      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
    ) {
      vnode.componentInstance = oldVnode.componentInstance;
      return
    }

    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var hydrationBailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  // Note: style is excluded because it relies on initial clone for future
  // deep updates (#7063).
  var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate (elm, vnode, insertedVnodeQueue, inVPre) {
    var i;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    inVPre = inVPre || (data && data.pre);
    vnode.elm = elm;

    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.isAsyncPlaceholder = true;
      return true
    }
    // assert node match
    if (true) {
      if (!assertNodeMatch(elm, vnode, inVPre)) {
        return false
      }
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          // v-html and domProps: innerHTML
          if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
            if (i !== elm.innerHTML) {
              /* istanbul ignore if */
              if ("development" !== 'production' &&
                typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('server innerHTML: ', i);
                console.warn('client innerHTML: ', elm.innerHTML);
              }
              return false
            }
          } else {
            // iterate and compare children lists
            var childrenMatch = true;
            var childNode = elm.firstChild;
            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                childrenMatch = false;
                break
              }
              childNode = childNode.nextSibling;
            }
            // if childNode is not null, it means the actual childNodes list is
            // longer than the virtual children list.
            if (!childrenMatch || childNode) {
              /* istanbul ignore if */
              if ("development" !== 'production' &&
                typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
              }
              return false
            }
          }
        }
      }
      if (isDef(data)) {
        var fullInvoke = false;
        for (var key in data) {
          if (!isRenderedModule(key)) {
            fullInvoke = true;
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break
          }
        }
        if (!fullInvoke && data['class']) {
          // ensure collecting deps for deep class bindings for future updates
          traverse(data['class']);
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true
  }

  function assertNodeMatch (node, vnode, inVPre) {
    if (isDef(vnode.tag)) {
      return vnode.tag.indexOf('vue-component') === 0 || (
        !isUnknownElement$$1(vnode, inVPre) &&
        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
      )
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3)
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
      return
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue, parentElm, refElm);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else if (true) {
              warn(
                'The client-side rendered virtual DOM tree is not matching ' +
                'server-rendered content. This is likely caused by incorrect ' +
                'HTML markup, for example nesting block-level elements inside ' +
                '<p>, or missing <tbody>. Bailing hydration and performing ' +
                'full client-side render.'
              );
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }

        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm$1 = nodeOps.parentNode(oldElm);

        // create new node
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm$1,
          nodeOps.nextSibling(oldElm)
        );

        // update parent placeholder node element, recursively
        if (isDef(vnode.parent)) {
          var ancestor = vnode.parent;
          var patchable = isPatchable(vnode);
          while (ancestor) {
            for (var i = 0; i < cbs.destroy.length; ++i) {
              cbs.destroy[i](ancestor);
            }
            ancestor.elm = vnode.elm;
            if (patchable) {
              for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                cbs.create[i$1](emptyNode, ancestor);
              }
              // #6513
              // invoke insert hooks that may have been merged by create hooks.
              // e.g. for directives that uses the "inserted" hook.
              var insert = ancestor.data.hook.insert;
              if (insert.merged) {
                // start at index 1 to avoid re-invoking component mounted hook
                for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                  insert.fns[i$2]();
                }
              }
            } else {
              registerRef(ancestor);
            }
            ancestor = ancestor.parent;
          }
        }

        // destroy old node
        if (isDef(parentElm$1)) {
          removeVnodes(parentElm$1, [oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
}

function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update (oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode, 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode, 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    // $flow-disable-line
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      // $flow-disable-line
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  // $flow-disable-line
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
    }
  }
}

var baseModules = [
  ref,
  directives
]

/*  */

function updateAttrs (oldVnode, vnode) {
  var opts = vnode.componentOptions;
  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return
  }
  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  // #6666: IE/Edge forces progress value down to 1 before setting a max
  /* istanbul ignore if */
  if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr (el, key, value) {
  if (el.tagName.indexOf('-') > -1) {
    baseSetAttr(el, key, value);
  } else if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // technically allowfullscreen is a boolean attribute for <iframe>,
      // but Flash expects a value of "true" when used on <embed> tag
      value = key === 'allowfullscreen' && el.tagName === 'EMBED'
        ? 'true'
        : key;
      el.setAttribute(key, value);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true');
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    baseSetAttr(el, key, value);
  }
}

function baseSetAttr (el, key, value) {
  if (isFalsyAttrValue(value)) {
    el.removeAttribute(key);
  } else {
    // #7138: IE10 & 11 fires input event when setting placeholder on
    // <textarea>... block the first input event and remove the blocker
    // immediately.
    /* istanbul ignore if */
    if (
      isIE && !isIE9 &&
      el.tagName === 'TEXTAREA' &&
      key === 'placeholder' && !el.__ieph
    ) {
      var blocker = function (e) {
        e.stopImmediatePropagation();
        el.removeEventListener('input', blocker);
      };
      el.addEventListener('input', blocker);
      // $flow-disable-line
      el.__ieph = true; /* IE placeholder patched */
    }
    el.setAttribute(key, value);
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
}

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (
    isUndef(data.staticClass) &&
    isUndef(data.class) && (
      isUndef(oldData) || (
        isUndef(oldData.staticClass) &&
        isUndef(oldData.class)
      )
    )
  ) {
    return
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
}

/*  */

/*  */









// add a raw attr (use this in preTransforms)








// note: this only removes the attr from the Array (attrsList) so that it
// doesn't get processed by processAttrs.
// By default it does NOT remove it from the map (attrsMap) because the map is
// needed during codegen.

/*  */

/**
 * Cross-platform code generation for component v-model
 */


/**
 * Cross-platform codegen helper for generating v-model value assignment code.
 */

/*  */

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

/*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents (on) {
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    var event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
  // This was originally intended to fix #4521 but no longer necessary
  // after 2.5. Keeping it for backwards compat with generated code from < 2.4
  /* istanbul ignore if */
  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function createOnceHandler (handler, event, capture) {
  var _target = target$1; // save current target element in closure
  return function onceHandler () {
    var res = handler.apply(null, arguments);
    if (res !== null) {
      remove$2(event, onceHandler, capture, _target);
    }
  }
}

function add$1 (
  event,
  handler,
  once$$1,
  capture,
  passive
) {
  handler = withMacroTask(handler);
  if (once$$1) { handler = createOnceHandler(handler, event, capture); }
  target$1.addEventListener(
    event,
    handler,
    supportsPassive
      ? { capture: capture, passive: passive }
      : capture
  );
}

function remove$2 (
  event,
  handler,
  capture,
  _target
) {
  (_target || target$1).removeEventListener(
    event,
    handler._withTask || handler,
    capture
  );
}

function updateDOMListeners (oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, vnode.context);
  target$1 = undefined;
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
}

/*  */

function updateDOMProps (oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (isUndef(props[key])) {
      elm[key] = '';
    }
  }
  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) { vnode.children.length = 0; }
      if (cur === oldProps[key]) { continue }
      // #6601 work around Chrome version <= 55 bug where single textNode
      // replaced by innerHTML/textContent retains its parentNode property
      if (elm.childNodes.length === 1) {
        elm.removeChild(elm.childNodes[0]);
      }
    }

    if (key === 'value') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = isUndef(cur) ? '' : String(cur);
      if (shouldUpdateValue(elm, strCur)) {
        elm.value = strCur;
      }
    } else {
      elm[key] = cur;
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue (elm, checkVal) {
  return (!elm.composing && (
    elm.tagName === 'OPTION' ||
    isNotInFocusAndDirty(elm, checkVal) ||
    isDirtyWithModifiers(elm, checkVal)
  ))
}

function isNotInFocusAndDirty (elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true;
  // #6157
  // work around IE bug when accessing document.activeElement in an iframe
  try { notInFocus = document.activeElement !== elm; } catch (e) {}
  return notInFocus && elm.value !== checkVal
}

function isDirtyWithModifiers (elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if (isDef(modifiers)) {
    if (modifiers.lazy) {
      // inputs with lazy should only be updated when not in focus
      return false
    }
    if (modifiers.number) {
      return toNumber(value) !== toNumber(newVal)
    }
    if (modifiers.trim) {
      return value.trim() !== newVal.trim()
    }
  }
  return value !== newVal
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData (data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle
    ? extend(data.staticStyle, style)
    : style
}

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle (vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (
        childNode && childNode.data &&
        (styleData = normalizeStyleData(childNode.data))
      ) {
        extend(res, styleData);
      }
    }
  }

  if ((styleData = normalizeStyleData(vnode.data))) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(name, val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);
    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var vendorNames = ['Webkit', 'Moz', 'ms'];

var emptyStyle;
var normalize = cached(function (prop) {
  emptyStyle = emptyStyle || document.createElement('div').style;
  prop = camelize(prop);
  if (prop !== 'filter' && (prop in emptyStyle)) {
    return prop
  }
  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;
    if (name in emptyStyle) {
      return name
    }
  }
});

function updateStyle (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) &&
    isUndef(oldData.staticStyle) && isUndef(oldData.style)
  ) {
    return
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likely wants
  // to mutate it.
  vnode.data.normalizedStyle = isDef(style.__ob__)
    ? extend({}, style)
    : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
}

/*  */

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.add(c); });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.remove(c); });
    } else {
      el.classList.remove(cls);
    }
    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    cur = cur.trim();
    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}

/*  */

function resolveTransition (def) {
  if (!def) {
    return
  }
  /* istanbul ignore else */
  if (typeof def === 'object') {
    var res = {};
    if (def.css !== false) {
      extend(res, autoCssTransition(def.name || 'v'));
    }
    extend(res, def);
    return res
  } else if (typeof def === 'string') {
    return autoCssTransition(def)
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: (name + "-enter"),
    enterToClass: (name + "-enter-to"),
    enterActiveClass: (name + "-enter-active"),
    leaveClass: (name + "-leave"),
    leaveToClass: (name + "-leave-to"),
    leaveActiveClass: (name + "-leave-active")
  }
});

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined
  ) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined
  ) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser
  ? window.requestAnimationFrame
    ? window.requestAnimationFrame.bind(window)
    : setTimeout
  : /* istanbul ignore next */ function (fn) { return fn(); };

function nextFrame (fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass (el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass (el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds (
  el,
  expectedType,
  cb
) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) { return cb() }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo (el, expectedType) {
  var styles = window.getComputedStyle(el);
  var transitionDelays = styles[transitionProp + 'Delay'].split(', ');
  var transitionDurations = styles[transitionProp + 'Duration'].split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = styles[animationProp + 'Delay'].split(', ');
  var animationDurations = styles[animationProp + 'Duration'].split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0
      ? transitionTimeout > animationTimeout
        ? TRANSITION
        : ANIMATION
      : null;
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0;
  }
  var hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  }
}

function getTimeout (delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i])
  }))
}

function toMs (s) {
  return Number(s.slice(0, -1)) * 1000
}

/*  */

function enter (vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return
  }

  /* istanbul ignore if */
  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    transitionNode = transitionNode.parent;
    context = transitionNode.context;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return
  }

  var startClass = isAppear && appearClass
    ? appearClass
    : enterClass;
  var activeClass = isAppear && appearActiveClass
    ? appearActiveClass
    : enterActiveClass;
  var toClass = isAppear && appearToClass
    ? appearToClass
    : enterToClass;

  var beforeEnterHook = isAppear
    ? (beforeAppear || beforeEnter)
    : beforeEnter;
  var enterHook = isAppear
    ? (typeof appear === 'function' ? appear : enter)
    : enter;
  var afterEnterHook = isAppear
    ? (afterAppear || afterEnter)
    : afterEnter;
  var enterCancelledHook = isAppear
    ? (appearCancelled || enterCancelled)
    : enterCancelled;

  var explicitEnterDuration = toNumber(
    isObject(duration)
      ? duration.enter
      : duration
  );

  if ("development" !== 'production' && explicitEnterDuration != null) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode, 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode &&
        pendingNode.tag === vnode.tag &&
        pendingNode.elm._leaveCb
      ) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      removeTransitionClass(el, startClass);
      if (!cb.cancelled) {
        addTransitionClass(el, toClass);
        if (!userWantsControl) {
          if (isValidDuration(explicitEnterDuration)) {
            setTimeout(cb, explicitEnterDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave (vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data) || el.nodeType !== 1) {
    return rm()
  }

  /* istanbul ignore if */
  if (isDef(el._leaveCb)) {
    return
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);

  var explicitLeaveDuration = toNumber(
    isObject(duration)
      ? duration.leave
      : duration
  );

  if ("development" !== 'production' && isDef(explicitLeaveDuration)) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave () {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return
    }
    // record leaving element
    if (!vnode.data.show) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled) {
          addTransitionClass(el, leaveToClass);
          if (!userWantsControl) {
            if (isValidDuration(explicitLeaveDuration)) {
              setTimeout(cb, explicitLeaveDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

// only used in dev mode
function checkDuration (val, name, vnode) {
  if (typeof val !== 'number') {
    warn(
      "<transition> explicit " + name + " duration is not a valid number - " +
      "got " + (JSON.stringify(val)) + ".",
      vnode.context
    );
  } else if (isNaN(val)) {
    warn(
      "<transition> explicit " + name + " duration is NaN - " +
      'the duration expression might be incorrect.',
      vnode.context
    );
  }
}

function isValidDuration (val) {
  return typeof val === 'number' && !isNaN(val)
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength (fn) {
  if (isUndef(fn)) {
    return false
  }
  var invokerFns = fn.fns;
  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(
      Array.isArray(invokerFns)
        ? invokerFns[0]
        : invokerFns
    )
  } else {
    return (fn._length || fn.length) > 1
  }
}

function _enter (_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1 (vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {}

var platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
]

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var directive = {
  inserted: function inserted (el, binding, vnode, oldVnode) {
    if (vnode.tag === 'select') {
      // #6903
      if (oldVnode.elm && !oldVnode.elm._vOptions) {
        mergeVNodeHook(vnode, 'postpatch', function () {
          directive.componentUpdated(el, binding, vnode);
        });
      } else {
        setSelected(el, binding, vnode.context);
      }
      el._vOptions = [].map.call(el.options, getValue);
    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        el.addEventListener('compositionstart', onCompositionStart);
        el.addEventListener('compositionend', onCompositionEnd);
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        el.addEventListener('change', onCompositionEnd);
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },

  componentUpdated: function componentUpdated (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue);
      if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
        // trigger change event if
        // no matching option found for at least one value
        var needReset = el.multiple
          ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
          : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
        if (needReset) {
          trigger(el, 'change');
        }
      }
    }
  }
};

function setSelected (el, binding, vm) {
  actuallySetSelected(el, binding, vm);
  /* istanbul ignore if */
  if (isIE || isEdge) {
    setTimeout(function () {
      actuallySetSelected(el, binding, vm);
    }, 0);
  }
}

function actuallySetSelected (el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
    "development" !== 'production' && warn(
      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
      vm
    );
    return
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption (value, options) {
  return options.every(function (o) { return !looseEqual(o, value); })
}

function getValue (option) {
  return '_value' in option
    ? option._value
    : option.value
}

function onCompositionStart (e) {
  e.target.composing = true;
}

function onCompositionEnd (e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) { return }
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger (el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode (vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
    ? locateNode(vnode.componentInstance._vnode)
    : vnode
}

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay =
      el.style.display === 'none' ? '' : el.style.display;
    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (!value === !oldValue) { return }
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    if (transition$$1) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind (
    el,
    binding,
    vnode,
    oldVnode,
    isDestroy
  ) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
}

var platformDirectives = {
  model: directive,
  show: show
}

/*  */

// Provides transition support for a single element/component.
// supports transition mode (out-in / in-out)

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild (vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children))
  } else {
    return vnode
  }
}

function extractTransitionData (comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data
}

function placeholder (h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    })
  }
}

function hasParentTransition (vnode) {
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true
    }
  }
}

function isSameChild (child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag
}

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render (h) {
    var this$1 = this;

    var children = this.$slots.default;
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(function (c) { return c.tag || isAsyncPlaceholder(c); });
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    // warn multiple elements
    if ("development" !== 'production' && children.length > 1) {
      warn(
        '<transition> can only be used on a single element. Use ' +
        '<transition-group> for lists.',
        this.$parent
      );
    }

    var mode = this.mode;

    // warn invalid mode
    if ("development" !== 'production' &&
      mode && mode !== 'in-out' && mode !== 'out-in'
    ) {
      warn(
        'invalid <transition> mode: ' + mode,
        this.$parent
      );
    }

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild
    }

    if (this._leaving) {
      return placeholder(h, rawChild)
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + (this._uid) + "-";
    child.key = child.key == null
      ? child.isComment
        ? id + 'comment'
        : id + child.tag
      : isPrimitive(child.key)
        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
        : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(function (d) { return d.name === 'show'; })) {
      child.data.show = true;
    }

    if (
      oldChild &&
      oldChild.data &&
      !isSameChild(child, oldChild) &&
      !isAsyncPlaceholder(oldChild) &&
      // #6687 component root is a comment node
      !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)
    ) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild.data.transition = extend({}, data);
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild)
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild
        }
        var delayedLeave;
        var performLeave = function () { delayedLeave(); };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
      }
    }

    return rawChild
  }
}

/*  */

// Provides transition support for list items.
// supports move transitions using the FLIP technique.

// Because the vdom's children update algorithm is "unstable" - i.e.
// it doesn't guarantee the relative positioning of removed elements,
// we force transition-group to update its children into two passes:
// in the first pass, we remove all nodes that need to be removed,
// triggering their leaving transition; in the second pass, we insert/move
// into the final desired state. This way in the second pass removed
// nodes will remain where they should be.

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  render: function render (h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c
          ;(c.data || (c.data = {})).transition = transitionData;
        } else if (true) {
          var opts = c.componentOptions;
          var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
          warn(("<transition-group> children must be keyed: <" + name + ">"));
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children)
  },

  beforeUpdate: function beforeUpdate () {
    // force removing pass
    this.__patch__(
      this._vnode,
      this.kept,
      false, // hydrating
      true // removeOnly (!important, avoids unnecessary moves)
    );
    this._vnode = this.kept;
  },

  updated: function updated () {
    var children = this.prevChildren;
    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    // assign to this to avoid being removed in tree-shaking
    // $flow-disable-line
    this._reflow = document.body.offsetHeight;

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove (el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false
      }
      /* istanbul ignore if */
      if (this._hasMove) {
        return this._hasMove
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return (this._hasMove = info.hasTransform)
    }
  }
}

function callPendingCbs (c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition (c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation (c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
}

/*  */

// install platform specific utils
Vue.config.mustUseProp = mustUseProp;
Vue.config.isReservedTag = isReservedTag;
Vue.config.isReservedAttr = isReservedAttr;
Vue.config.getTagNamespace = getTagNamespace;
Vue.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue.options.directives, platformDirectives);
extend(Vue.options.components, platformComponents);

// install platform patch function
Vue.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating)
};

// devtools global hook
/* istanbul ignore next */
if (inBrowser) {
  setTimeout(function () {
    if (config.devtools) {
      if (devtools) {
        devtools.emit('init', Vue);
      } else if (
        "development" !== 'production' &&
        "development" !== 'test' &&
        isChrome
      ) {
        console[console.info ? 'info' : 'log'](
          'Download the Vue Devtools extension for a better development experience:\n' +
          'https://github.com/vuejs/vue-devtools'
        );
      }
    }
    if ("development" !== 'production' &&
      "development" !== 'test' &&
      config.productionTip !== false &&
      typeof console !== 'undefined'
    ) {
      console[console.info ? 'info' : 'log'](
        "You are running Vue in development mode.\n" +
        "Make sure to turn on production mode when deploying for production.\n" +
        "See more tips at https://vuejs.org/guide/deployment.html"
      );
    }
  }, 0);
}

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./node_modules/vuex/dist/logger.js":
/*!******************************************!*\
  !*** ./node_modules/vuex/dist/logger.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
	 true ? module.exports = factory() :
	undefined;
}(this, (function () { 'use strict';

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
function find (list, f) {
  return list.filter(f)[0]
}

/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */
function deepCopy (obj, cache) {
  if ( cache === void 0 ) cache = [];

  // just return if obj is immutable value
  if (obj === null || typeof obj !== 'object') {
    return obj
  }

  // if obj is hit, it is in circular structure
  var hit = find(cache, function (c) { return c.original === obj; });
  if (hit) {
    return hit.copy
  }

  var copy = Array.isArray(obj) ? [] : {};
  // put the copy into cache at first
  // because we want to refer it in recursive deepCopy
  cache.push({
    original: obj,
    copy: copy
  });

  Object.keys(obj).forEach(function (key) {
    copy[key] = deepCopy(obj[key], cache);
  });

  return copy
}

/**
 * forEach for object
 */

// Credits: borrowed code from fcomb/redux-logger

function createLogger (ref) {
  if ( ref === void 0 ) ref = {};
  var collapsed = ref.collapsed; if ( collapsed === void 0 ) collapsed = true;
  var filter = ref.filter; if ( filter === void 0 ) filter = function (mutation, stateBefore, stateAfter) { return true; };
  var transformer = ref.transformer; if ( transformer === void 0 ) transformer = function (state) { return state; };
  var mutationTransformer = ref.mutationTransformer; if ( mutationTransformer === void 0 ) mutationTransformer = function (mut) { return mut; };
  var logger = ref.logger; if ( logger === void 0 ) logger = console;

  return function (store) {
    var prevState = deepCopy(store.state);

    store.subscribe(function (mutation, state) {
      if (typeof logger === 'undefined') {
        return
      }
      var nextState = deepCopy(state);

      if (filter(mutation, prevState, nextState)) {
        var time = new Date();
        var formattedTime = " @ " + (pad(time.getHours(), 2)) + ":" + (pad(time.getMinutes(), 2)) + ":" + (pad(time.getSeconds(), 2)) + "." + (pad(time.getMilliseconds(), 3));
        var formattedMutation = mutationTransformer(mutation);
        var message = "mutation " + (mutation.type) + formattedTime;
        var startMessage = collapsed
          ? logger.groupCollapsed
          : logger.group;

        // render
        try {
          startMessage.call(logger, message);
        } catch (e) {
          console.log(message);
        }

        logger.log('%c prev state', 'color: #9E9E9E; font-weight: bold', transformer(prevState));
        logger.log('%c mutation', 'color: #03A9F4; font-weight: bold', formattedMutation);
        logger.log('%c next state', 'color: #4CAF50; font-weight: bold', transformer(nextState));

        try {
          logger.groupEnd();
        } catch (e) {
          logger.log('—— log end ——');
        }
      }

      prevState = nextState;
    });
  }
}

function repeat (str, times) {
  return (new Array(times + 1)).join(str)
}

function pad (num, maxLength) {
  return repeat('0', maxLength - num.toString().length) + num
}

return createLogger;

})));


/***/ }),

/***/ "./node_modules/vuex/dist/vuex.esm.js":
/*!********************************************!*\
  !*** ./node_modules/vuex/dist/vuex.esm.js ***!
  \********************************************/
/*! exports provided: Store, install, mapState, mapMutations, mapGetters, mapActions, createNamespacedHelpers, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Store", function() { return Store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "install", function() { return install; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapState", function() { return mapState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapMutations", function() { return mapMutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapGetters", function() { return mapGetters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapActions", function() { return mapActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNamespacedHelpers", function() { return createNamespacedHelpers; });
/**
 * vuex v3.0.1
 * (c) 2017 Evan You
 * @license MIT
 */
var applyMixin = function (Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if ( options === void 0 ) options = {};

      options.init = options.init
        ? [vuexInit].concat(options.init)
        : vuexInit;
      _init.call(this, options);
    };
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit () {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function'
        ? options.store()
        : options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
};

var devtoolHook =
  typeof window !== 'undefined' &&
  window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin (store) {
  if (!devtoolHook) { return }

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  });
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */


/**
 * forEach for object
 */
function forEachValue (obj, fn) {
  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isPromise (val) {
  return val && typeof val.then === 'function'
}

function assert (condition, msg) {
  if (!condition) { throw new Error(("[vuex] " + msg)) }
}

var Module = function Module (rawModule, runtime) {
  this.runtime = runtime;
  this._children = Object.create(null);
  this._rawModule = rawModule;
  var rawState = rawModule.state;
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors$1 = { namespaced: { configurable: true } };

prototypeAccessors$1.namespaced.get = function () {
  return !!this._rawModule.namespaced
};

Module.prototype.addChild = function addChild (key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild (key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild (key) {
  return this._children[key]
};

Module.prototype.update = function update (rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild (fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter (fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction (fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation (fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties( Module.prototype, prototypeAccessors$1 );

var ModuleCollection = function ModuleCollection (rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get (path) {
  return path.reduce(function (module, key) {
    return module.getChild(key)
  }, this.root)
};

ModuleCollection.prototype.getNamespace = function getNamespace (path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '')
  }, '')
};

ModuleCollection.prototype.update = function update$1 (rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
    var this$1 = this;
    if ( runtime === void 0 ) runtime = true;

  if (true) {
    assertRawModule(path, rawModule);
  }

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  if (!parent.getChild(key).runtime) { return }

  parent.removeChild(key);
};

function update (path, targetModule, newModule) {
  if (true) {
    assertRawModule(path, newModule);
  }

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if (true) {
          console.warn(
            "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
            'manual reload is needed'
          );
        }
        return
      }
      update(
        path.concat(key),
        targetModule.getChild(key),
        newModule.modules[key]
      );
    }
  }
}

var functionAssert = {
  assert: function (value) { return typeof value === 'function'; },
  expected: 'function'
};

var objectAssert = {
  assert: function (value) { return typeof value === 'function' ||
    (typeof value === 'object' && typeof value.handler === 'function'); },
  expected: 'function or object with "handler" function'
};

var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert
};

function assertRawModule (path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) { return }

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(
        assertOptions.assert(value),
        makeAssertionMessage(path, key, type, value, assertOptions.expected)
      );
    });
  });
}

function makeAssertionMessage (path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + (path.join('.')) + "\"";
  }
  buf += " is " + (JSON.stringify(value)) + ".";
  return buf
}

var Vue; // bind on install

var Store = function Store (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  if (true) {
    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "Store must be called with the new operator.");
  }

  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
  var strict = options.strict; if ( strict === void 0 ) strict = false;

  var state = options.state; if ( state === void 0 ) state = {};
  if (typeof state === 'function') {
    state = state() || {};
  }

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch (type, payload) {
    return dispatch.call(store, type, payload)
  };
  this.commit = function boundCommit (type, payload, options) {
    return commit.call(store, type, payload, options)
  };

  // strict mode
  this.strict = strict;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) { return plugin(this$1); });

  if (Vue.config.devtools) {
    devtoolPlugin(this);
  }
};

var prototypeAccessors = { state: { configurable: true } };

prototypeAccessors.state.get = function () {
  return this._vm._data.$$state
};

prototypeAccessors.state.set = function (v) {
  if (true) {
    assert(false, "Use store.replaceState() to explicit replace store state.");
  }
};

Store.prototype.commit = function commit (_type, _payload, _options) {
    var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    if (true) {
      console.error(("[vuex] unknown mutation type: " + type));
    }
    return
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator (handler) {
      handler(payload);
    });
  });
  this._subscribers.forEach(function (sub) { return sub(mutation, this$1.state); });

  if (
    "development" !== 'production' &&
    options && options.silent
  ) {
    console.warn(
      "[vuex] mutation type: " + type + ". Silent option has been removed. " +
      'Use the filter functionality in the vue-devtools'
    );
  }
};

Store.prototype.dispatch = function dispatch (_type, _payload) {
    var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    if (true) {
      console.error(("[vuex] unknown action type: " + type));
    }
    return
  }

  this._actionSubscribers.forEach(function (sub) { return sub(action, this$1.state); });

  return entry.length > 1
    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
    : entry[0](payload)
};

Store.prototype.subscribe = function subscribe (fn) {
  return genericSubscribe(fn, this._subscribers)
};

Store.prototype.subscribeAction = function subscribeAction (fn) {
  return genericSubscribe(fn, this._actionSubscribers)
};

Store.prototype.watch = function watch (getter, cb, options) {
    var this$1 = this;

  if (true) {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }
  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)
};

Store.prototype.replaceState = function replaceState (state) {
    var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule (path, rawModule, options) {
    if ( options === void 0 ) options = {};

  if (typeof path === 'string') { path = [path]; }

  if (true) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, 'cannot register the root module by using registerModule.');
  }

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule (path) {
    var this$1 = this;

  if (typeof path === 'string') { path = [path]; }

  if (true) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hotUpdate = function hotUpdate (newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit (fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties( Store.prototype, prototypeAccessors );

function genericSubscribe (fn, subs) {
  if (subs.indexOf(fn) < 0) {
    subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  }
}

function resetStore (store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM (store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    computed[key] = function () { return fn(store); };
    Object.defineProperty(store.getters, key, {
      get: function () { return store._vm[key]; },
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed: computed
  });
  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () { return oldVm.$destroy(); });
  }
}

function installModule (store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function makeLocalContext (store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if ("development" !== 'production' && !store._actions[type]) {
          console.error(("[vuex] unknown local action type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      return store.dispatch(type, payload)
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if ("development" !== 'production' && !store._mutations[type]) {
          console.error(("[vuex] unknown local mutation type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace
        ? function () { return store.getters; }
        : function () { return makeLocalGetters(store, namespace); }
    },
    state: {
      get: function () { return getNestedState(store.state, path); }
    }
  });

  return local
}

function makeLocalGetters (store, namespace) {
  var gettersProxy = {};

  var splitPos = namespace.length;
  Object.keys(store.getters).forEach(function (type) {
    // skip if the target getter is not match this namespace
    if (type.slice(0, splitPos) !== namespace) { return }

    // extract local getter type
    var localType = type.slice(splitPos);

    // Add a port to the getters proxy.
    // Define as getter property because
    // we do not want to evaluate the getters in this time.
    Object.defineProperty(gettersProxy, localType, {
      get: function () { return store.getters[type]; },
      enumerable: true
    });
  });

  return gettersProxy
}

function registerMutation (store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler (payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction (store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler (payload, cb) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload, cb);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err
      })
    } else {
      return res
    }
  });
}

function registerGetter (store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if (true) {
      console.error(("[vuex] duplicate getter key: " + type));
    }
    return
  }
  store._wrappedGetters[type] = function wrappedGetter (store) {
    return rawGetter(
      local.state, // local state
      local.getters, // local getters
      store.state, // root state
      store.getters // root getters
    )
  };
}

function enableStrictMode (store) {
  store._vm.$watch(function () { return this._data.$$state }, function () {
    if (true) {
      assert(store._committing, "Do not mutate vuex store state outside mutation handlers.");
    }
  }, { deep: true, sync: true });
}

function getNestedState (state, path) {
  return path.length
    ? path.reduce(function (state, key) { return state[key]; }, state)
    : state
}

function unifyObjectStyle (type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if (true) {
    assert(typeof type === 'string', ("Expects string as the type, but found " + (typeof type) + "."));
  }

  return { type: type, payload: payload, options: options }
}

function install (_Vue) {
  if (Vue && _Vue === Vue) {
    if (true) {
      console.error(
        '[vuex] already installed. Vue.use(Vuex) should be called only once.'
      );
    }
    return
  }
  Vue = _Vue;
  applyMixin(Vue);
}

var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState () {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function'
        ? val.call(this, state, getters)
        : state[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return
        }
        commit = module.context.commit;
      }
      return typeof val === 'function'
        ? val.apply(this, [commit].concat(args))
        : commit.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    val = namespace + val;
    res[key] = function mappedGetter () {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return
      }
      if ("development" !== 'production' && !(val in this.$store.getters)) {
        console.error(("[vuex] unknown getter: " + val));
        return
      }
      return this.$store.getters[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function'
        ? val.apply(this, [dispatch].concat(args))
        : dispatch.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

var createNamespacedHelpers = function (namespace) { return ({
  mapState: mapState.bind(null, namespace),
  mapGetters: mapGetters.bind(null, namespace),
  mapMutations: mapMutations.bind(null, namespace),
  mapActions: mapActions.bind(null, namespace)
}); };

function normalizeMap (map) {
  return Array.isArray(map)
    ? map.map(function (key) { return ({ key: key, val: key }); })
    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
}

function normalizeNamespace (fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map)
  }
}

function getModuleByNamespace (store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if ("development" !== 'production' && !module) {
    console.error(("[vuex] module namespace not found in " + helper + "(): " + namespace));
  }
  return module
}

var index_esm = {
  Store: Store,
  install: install,
  version: '3.0.1',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers
};


/* harmony default export */ __webpack_exports__["default"] = (index_esm);


/***/ }),

/***/ "./node_modules/vuikit/dist/vuikit.esm.js":
/*!************************************************!*\
  !*** ./node_modules/vuikit/dist/vuikit.esm.js ***!
  \************************************************/
/*! exports provided: default, Breadcrumb, BreadcrumbItem, Button, ButtonLink, ButtonGroup, Card, CardTitle, Drop, Dropdown, Grid, Icon, IconLink, IconButton, IconImage, Iconnav, IconnavVertical, IconnavItem, Label, Modal, ModalFull, ModalClose, ModalFullClose, ModalTitle, Nav, NavDropdown, NavItem, NavItemDivider, NavItemHeader, NavItemParent, Navbar, NavbarFull, NavbarDropbar, NavbarItem, NavbarLogo, NavbarToggle, NavbarNav, NavbarNavItem, NavbarNavDropdown, NavbarNavDropdownNav, Notification, Offcanvas, OffcanvasContent, OffcanvasBar, OffcanvasClose, Pagination, PaginationPages, PaginationPageFirst, PaginationPagePrev, PaginationPageNext, PaginationPageLast, Scrollspy, ScrollspyNav, SkeletonImage, SkeletonText, SkeletonTitle, Spinner, Sticky, Subnav, SubnavItem, SubnavItemDropdown, Table, TableTree, TableColumn, TableColumnSort, TableColumnSelect, TableColumnTree, Tabs, TabsVertical, TabsItem, Margin, Scroll, Tooltip, HeightMatch, HeightViewport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(setImmediate) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Breadcrumb", function() { return breadcrumb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbItem", function() { return breadcrumb_Item; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonLink", function() { return buttonLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonGroup", function() { return buttonGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return card; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardTitle", function() { return card_Title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Drop", function() { return Drop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dropdown", function() { return Dropdown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Grid", function() { return Grid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return icon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconLink", function() { return iconLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconButton", function() { return iconButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconImage", function() { return iconImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Iconnav", function() { return iconnav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconnavVertical", function() { return iconnavVertical; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconnavItem", function() { return iconnav_Item; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return label; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return modal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalFull", function() { return modalFull; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalClose", function() { return modal_Close; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalFullClose", function() { return modalFull_Close; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalTitle", function() { return modal_Title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nav", function() { return nav$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavDropdown", function() { return navDropdown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavItem", function() { return nav_Item; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavItemDivider", function() { return nav_ItemDivider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavItemHeader", function() { return nav_ItemHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavItemParent", function() { return nav_ItemParent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Navbar", function() { return navbar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarFull", function() { return navbarFull; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarDropbar", function() { return navbarDropbar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarItem", function() { return navbar_Item; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarLogo", function() { return navbar_Logo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarToggle", function() { return navbar_Toggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarNav", function() { return navbar_Nav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarNavItem", function() { return navbar_Nav_Item; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarNavDropdown", function() { return navbar_Nav_Dropdown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarNavDropdownNav", function() { return navbar_Nav_Dropdown_Nav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Notification", function() { return notification; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Offcanvas", function() { return offcanvas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffcanvasContent", function() { return offcanvasContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffcanvasBar", function() { return offcanvas_Bar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffcanvasClose", function() { return offcanvas_Close; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pagination", function() { return pagination; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationPages", function() { return pagination_Pages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationPageFirst", function() { return pagination_PageFirst; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationPagePrev", function() { return pagination_PagePrev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationPageNext", function() { return pagination_PageNext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationPageLast", function() { return pagination_PageLast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scrollspy", function() { return scrollspy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollspyNav", function() { return scrollspyNav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkeletonImage", function() { return skeletonImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkeletonText", function() { return skeletonText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkeletonTitle", function() { return skeletonTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Spinner", function() { return spinner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sticky", function() { return sticky; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Subnav", function() { return subnav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubnavItem", function() { return subnav_Item; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubnavItemDropdown", function() { return subnav_ItemDropdown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Table", function() { return Table; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableTree", function() { return tableTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableColumn", function() { return Column; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableColumnSort", function() { return table_ColumnSort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableColumnSelect", function() { return table_ColumnSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableColumnTree", function() { return table_ColumnTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tabs", function() { return tabs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsVertical", function() { return tabsVertical; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsItem", function() { return tabs_Item; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Margin", function() { return VkMargin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scroll", function() { return index$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tooltip", function() { return index$2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeightMatch", function() { return index$3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeightViewport", function() { return VkHeightViewport; });
/**
 * Vuikit 0.8.4
 * (c) 2018 Miljan Aleksic
 * @license MIT
**/

/* Substantial part of the code is adapted from UIkit,
  Copyright (c) 2013-2018 YOOtheme GmbH, getuikit.com */

var ref = Object.prototype;
var hasOwnProperty = ref.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}
var hyphenateRe = /([a-z\d])([A-Z])/g;
function hyphenate (str) {
  return str
    .replace(hyphenateRe, '$1-$2')
    .toLowerCase()
}
function toUpper (_, c) {
  return c ? c.toUpperCase() : ''
}
function ucfirst (str) {
  return str.length ? toUpper(null, str.charAt(0)) + str.slice(1) : ''
}
var strPrototype = String.prototype;
var startsWithFn = strPrototype.startsWith || function (search) { return this.lastIndexOf(search, 0) === 0 };
function startsWith (str, search) {
  return startsWithFn.call(str, search)
}
var endsWithFn = strPrototype.endsWith || function (search) { return this.substr(-search.length) === search };
function endsWith (str, search) {
  return endsWithFn.call(str, search)
}
var includesFn = function (search) { return ~this.indexOf(search) };
var includesStr = strPrototype.includes || includesFn;
var includesArray = Array.prototype.includes || includesFn;
function includes (obj, search) {
  return obj && (isString(obj) ? includesStr : includesArray).call(obj, search)
}
var isArray = Array.isArray;
function isFunction (obj) {
  return typeof obj === 'function'
}
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}
function isPlainObject (obj) {
  return isObject(obj) && Object.getPrototypeOf(obj) === Object.prototype
}
function isWindow (obj) {
  return isObject(obj) && obj === obj.window
}
function isDocument (obj) {
  return isObject(obj) && obj.nodeType === 9
}
function isJQuery (obj) {
  return isObject(obj) && !!obj.jquery
}
function isNode (element) {
  return typeof Node !== 'undefined' && element instanceof Node || isObject(element) && element.nodeType === 1
}
function isNodeCollection (element) {
  return typeof NodeList !== 'undefined' && element instanceof NodeList ||
    typeof HTMLCollection !== 'undefined' && element instanceof HTMLCollection
}
function isString (value) {
  return typeof value === 'string'
}
function isNumber (value) {
  return typeof value === 'number'
}
function isNumeric (value) {
  return isNumber(value) || isString(value) && !isNaN(value - parseFloat(value))
}
function isUndefined (value) {
  return value === void 0
}
function toFloat (value) {
  return parseFloat(value) || 0
}
function toNode (element) {
  return isNode(element) || isWindow(element) || isDocument(element)
    ? element
    : isNodeCollection(element) || isJQuery(element)
      ? element[0]
      : isArray(element)
        ? toNode(element[0])
        : null
}
var arrayProto = Array.prototype;
function toNodes (element) {
  return isNode(element)
    ? [element]
    : isNodeCollection(element)
      ? arrayProto.slice.call(element)
      : isArray(element)
        ? element.map(toNode).filter(Boolean)
        : isJQuery(element)
          ? element.toArray()
          : []
}
var assign = Object.assign || function (target) {
  var args = [], len = arguments.length - 1;
  while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];
  target = Object(target);
  for (var i = 0; i < args.length; i++) {
    var source = args[i];
    if (source !== null) {
      for (var key in source) {
        if (hasOwn(source, key)) {
          target[key] = source[key];
        }
      }
    }
  }
  return target
};
function each (obj, cb) {
  for (var key in obj) {
    if (cb.call(obj[key], obj[key], key) === false) {
      break
    }
  }
}
function clamp (number, min, max) {
  if ( min === void 0 ) min = 0;
  if ( max === void 0 ) max = 1;
  return Math.min(Math.max(number, min), max)
}
function noop () {}
function intersectRect (r1, r2) {
  return r1.left <= r2.right &&
        r2.left <= r1.right &&
        r1.top <= r2.bottom &&
        r2.top <= r1.bottom
}

function attr (element, name, value) {
  if (isObject(name)) {
    for (var key in name) {
      attr(element, key, name[key]);
    }
    return
  }
  if (isUndefined(value)) {
    element = toNode(element);
    return element && element.getAttribute(name)
  } else {
    toNodes(element).forEach(function (element) {
      if (isFunction(value)) {
        value = value.call(element, attr(element, name));
      }
      if (value === null) {
        removeAttr(element, name);
      } else {
        element.setAttribute(name, value);
      }
    });
  }
}
function hasAttr (element, name) {
  return toNodes(element).some(function (element) { return element.hasAttribute(name); })
}
function removeAttr (element, name) {
  element = toNodes(element);
  name.split(' ').forEach(function (name) { return element.forEach(function (element) { return element.removeAttribute(name); }
    ); }
  );
}
function filterAttr (element, attribute, pattern, replacement) {
  attr(element, attribute, function (value) { return value ? value.replace(pattern, replacement) : value; });
}
function data (element, attribute) {
  for (var i = 0, attrs = [attribute, ("data-" + attribute)]; i < attrs.length; i++) {
    if (hasAttr(element, attrs[i])) {
      return attr(element, attrs[i])
    }
  }
}

function query (selector, context) {
  return toNode(selector) || find(selector, isContextSelector(selector) ? context : document)
}
function find (selector, context) {
  return toNode(_query(selector, context, 'querySelector'))
}
function findAll (selector, context) {
  return toNodes(_query(selector, context, 'querySelectorAll'))
}
function _query (selector, context, queryFn) {
  if ( context === void 0 ) context = document;
  if (!selector || !isString(selector)) {
    return null
  }
  selector = selector.replace(contextSanitizeRe, '$1 *');
  var removes;
  if (isContextSelector(selector)) {
    removes = [];
    selector = selector.split(',').map(function (selector, i) {
      var ctx = context;
      selector = selector.trim();
      if (selector[0] === '!') {
        var selectors = selector.substr(1).trim().split(' ');
        ctx = closest(context.parentNode, selectors[0]);
        selector = selectors.slice(1).join(' ');
      }
      if (!ctx) {
        return null
      }
      if (!ctx.id) {
        ctx.id = "uk-" + (Date.now()) + i;
        removes.push(function () { return removeAttr(ctx, 'id'); });
      }
      return ("#" + (escape(ctx.id)) + " " + selector)
    }).filter(Boolean).join(',');
    context = document;
  }
  try {
    return context[queryFn](selector)
  } catch (e) {
    return null
  } finally {
    removes && removes.forEach(function (remove) { return remove(); });
  }
}
var contextSelectorRe = /(^|,)\s*[!>+~]/;
var contextSanitizeRe = /([!>+~])(?=\s+[!>+~]|\s*$)/g;
function isContextSelector (selector) {
  return isString(selector) && selector.match(contextSelectorRe)
}
function matches (element, selector) {
  var elProto = window.Element.prototype;
  var matchesFn = elProto.matches || elProto.webkitMatchesSelector || elProto.msMatchesSelector;
  return toNodes(element).some(function (element) { return matchesFn.call(element, selector); })
}
function closest (element, selector) {
  var elProto = window.Element.prototype;
  var closestFn = elProto.closest || function (selector) {
    var ancestor = this;
    do {
      if (matches(ancestor, selector)) {
        return ancestor
      }
      ancestor = ancestor.parentNode;
    } while (ancestor && ancestor.nodeType === 1)
  };
  if (startsWith(selector, '>')) {
    selector = selector.slice(1);
  }
  return isNode(element)
    ? element.parentNode && closestFn.call(element, selector)
    : toNodes(element).map(function (element) { return element.parentNode && closestFn.call(element, selector); }).filter(Boolean)
}
function escape (css) {
  var escapeFn = window.CSS && CSS.escape || function (css) { return css.replace(/([^\x7f-\uFFFF\w-])/g, function (match) { return ("\\" + match); }) };
  return isString(css) ? escapeFn.call(null, css) : ''
}

function isVisible (element) {
  return toNodes(element).some(function (element) { return element.offsetHeight || element.getBoundingClientRect().height; })
}
function filter (element, selector) {
  return toNodes(element).filter(function (element) { return matches(element, selector); })
}
function within (element, selector) {
  return !isString(selector)
    ? element === selector || (isDocument(selector)
      ? selector.documentElement
      : toNode(selector)).contains(toNode(element))
    : matches(element, selector) || closest(element, selector)
}

function on () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];
  var ref = getArgs(args);
  var target = ref[0];
  var type = ref[1];
  var selector = ref[2];
  var listener = ref[3];
  var useCapture = ref[4];
  target = toEventTarget(target);
  if (selector) {
    listener = delegate(target, selector, listener);
  }
  if (listener.length > 1) {
    listener = detail(listener);
  }
  type.split(' ').forEach(function (type) { return target && target.addEventListener(type, listener, useCapture); });
  return function () { return off(target, type, listener, useCapture); }
}
function off (target, type, listener, useCapture) {
  if ( useCapture === void 0 ) useCapture = false;
  target = toEventTarget(target);
  target && type.split(' ').forEach(function (type) { return target.removeEventListener(type, listener, useCapture); });
}
function once () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];
  var ref = getArgs(args);
  var element = ref[0];
  var type = ref[1];
  var selector = ref[2];
  var listener = ref[3];
  var useCapture = ref[4];
  var condition = ref[5];
  var off = on(element, type, selector, function (e) {
    var result = !condition || condition(e);
    if (result) {
      off();
      listener(e, result);
    }
  }, useCapture);
  return off
}
function trigger (target, event, detail) {
  return toEventTargets(target).reduce(function (notCanceled, target) { return notCanceled && target.dispatchEvent(createEvent(event, true, true, detail)); }
    , true)
}
function createEvent (e, bubbles, cancelable, detail) {
  if ( bubbles === void 0 ) bubbles = true;
  if ( cancelable === void 0 ) cancelable = false;
  if (isString(e)) {
    var event = document.createEvent('CustomEvent');
    event.initCustomEvent(e, bubbles, cancelable, detail);
    e = event;
  }
  return e
}
function getArgs (args) {
  if (isString(args[0])) {
    args[0] = find(args[0]);
  }
  if (isFunction(args[2])) {
    args.splice(2, 0, false);
  }
  return args
}
function delegate (element, selector, listener) {
  var this$1 = this;
  return function (e) {
    var target = e.target;
    var current = selector[0] === '>'
      ? findAll(selector, element).reverse().filter(function (element) { return within(target, element); })[0]
      : closest(target, selector);
    if (current) {
      e.delegate = element;
      e.current = current;
      listener.call(this$1, e);
    }
  }
}
function detail (listener) {
  return function (e) { return isArray(e.detail) ? listener.apply(listener, [e].concat(e.detail)) : listener(e); }
}
function isEventTarget (target) {
  return typeof window !== 'undefined' && 'EventTarget' in window
    ? target instanceof window.EventTarget
    : target && 'addEventListener' in target
}
function toEventTarget (target) {
  return isEventTarget(target) ? target : toNode(target)
}
function toEventTargets (target) {
  return isEventTarget(target)
    ? [target]
    : isArray(target)
      ? target.map(toEventTarget).filter(Boolean)
      : toNodes(target)
}

var doc = typeof document !== 'undefined' && document;
function isReady () {
  return doc && (document.readyState === 'complete' || document.readyState !== 'loading' && !document.documentElement.doScroll)
}
function ready (fn) {
  if (!doc) {
    return
  }
  if (isReady()) {
    fn();
    return
  }
  var handle = function () {
    unbind1();
    unbind2();
    fn();
  };
  var unbind1 = on(document, 'DOMContentLoaded', handle);
  var unbind2 = on(window, 'load', handle);
}
function append (parent, element) {
  parent = toNode(parent);
  return insertNodes(element, function (element) { return parent.appendChild(element); })
}
function before (ref, element) {
  ref = toNode(ref);
  return insertNodes(element, function (element) { return ref.parentNode.insertBefore(element, ref); })
}
function after (ref, element) {
  ref = toNode(ref);
  return insertNodes(element, function (element) { return ref.nextSibling
    ? before(ref.nextSibling, element)
    : append(ref.parentNode, element); }
  )
}
function insertNodes (element, fn) {
  element = isString(element) ? fragment(element) : element;
  return element
    ? 'length' in element
      ? toNodes(element).map(fn)
      : fn(element)
    : null
}
function remove (element) {
  toNodes(element).map(function (element) { return element.parentNode && element.parentNode.removeChild(element); });
}
var fragmentRE = /^\s*<(\w+|!)[^>]*>/;
var singleTagRE = /^<(\w+)\s*\/?>(?:<\/\1>)?$/;
function fragment (html) {
  var matches = singleTagRE.exec(html);
  if (matches) {
    return document.createElement(matches[1])
  }
  var container = document.createElement('div');
  if (fragmentRE.test(html)) {
    container.insertAdjacentHTML('beforeend', html.trim());
  } else {
    container.textContent = html;
  }
  return container.childNodes.length > 1 ? toNodes(container.childNodes) : container.firstChild
}

function addClass (element) {
  var args = [], len = arguments.length - 1;
  while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];
  apply$1(element, args, 'add');
}
function removeClass (element) {
  var args = [], len = arguments.length - 1;
  while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];
  apply$1(element, args, 'remove');
}
function removeClasses (element, cls) {
  filterAttr(element, 'class', new RegExp(("(^|\\s)" + cls + "(?!\\S)"), 'g'), '');
}
function replaceClass (element) {
  var args = [], len = arguments.length - 1;
  while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];
  args[0] && removeClass(element, args[0]);
  args[1] && addClass(element, args[1]);
}
function hasClass (element, cls) {
  return toNodes(element).some(function (element) { return element.classList.contains(cls); })
}
function toggleClass (element) {
  var args = [], len = arguments.length - 1;
  while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];
  if (!args.length) {
    return
  }
  args = getArgs$1(args);
  var force = !isString(args[args.length - 1]) ? args.pop() : [];
  args = args.filter(Boolean);
  toNodes(element).forEach(function (ref) {
    var classList = ref.classList;
    for (var i = 0; i < args.length; i++) {
      supports.Force
        ? classList.toggle.apply(classList, [args[i]].concat(force))
        : (classList[(!isUndefined(force) ? force : !classList.contains(args[i])) ? 'add' : 'remove'](args[i]));
    }
  });
}
function apply$1 (element, args, fn) {
  args = getArgs$1(args).filter(Boolean);
  args.length && toNodes(element).forEach(function (ref) {
    var classList = ref.classList;
    supports.Multiple
      ? classList[fn].apply(classList, args)
      : args.forEach(function (cls) { return classList[fn](cls); });
  });
}
function getArgs$1 (args) {
  return args.reduce(function (args, arg) { return args.concat.call(args, isString(arg) && includes(arg, ' ') ? arg.trim().split(' ') : arg); }
    , [])
}
var supports = {};
(function () {
  if (typeof document !== 'undefined' && document.createElement('_').classList) {
    var list = document.createElement('_').classList;
    list.add('a', 'b');
    list.toggle('c', false);
    supports.Multiple = list.contains('b');
    supports.Force = !list.contains('c');
    list = null;
  }
})();

var cssNumber = {
  'animation-iteration-count': true,
  'column-count': true,
  'fill-opacity': true,
  'flex-grow': true,
  'flex-shrink': true,
  'font-weight': true,
  'line-height': true,
  'opacity': true,
  'order': true,
  'orphans': true,
  'widows': true,
  'z-index': true,
  'zoom': true
};
function css (element, property, value) {
  return toNodes(element).map(function (element) {
    if (isString(property)) {
      property = propName(property);
      if (isUndefined(value)) {
        return getStyle(element, property)
      } else if (!value && value !== 0) {
        element.style.removeProperty(property);
      } else {
        element.style[property] = isNumeric(value) && !cssNumber[property] ? (value + "px") : value;
      }
    } else if (isArray(property)) {
      var styles = getStyles(element);
      return property.reduce(function (props, property) {
        props[property] = styles[propName(property)];
        return props
      }, {})
    } else if (isObject(property)) {
      each(property, function (value, property) { return css(element, property, value); });
    }
    return element
  })[0]
}
function getStyles (element, pseudoElt) {
  element = toNode(element);
  return element.ownerDocument.defaultView.getComputedStyle(element, pseudoElt)
}
function getStyle (element, property, pseudoElt) {
  return getStyles(element, pseudoElt)[property]
}
var vars = {};
function getCssVar (name) {
  if (!(name in vars)) {
    var element = append(document.documentElement, document.createElement('div'));
    addClass(element, ("var-" + name));
    try {
      vars[name] = getStyle(element, 'content', ':before').replace(/^["'](.*)["']$/, '$1');
      vars[name] = JSON.parse(vars[name]);
    } catch (e) {}
    document.documentElement.removeChild(element);
  }
  return vars[name]
}
var cssProps = {};
function propName (name) {
  var ret = cssProps[name];
  if (!ret) {
    ret = cssProps[name] = vendorPropName(name) || name;
  }
  return ret
}
var cssPrefixes = ['webkit', 'moz', 'ms'];
function vendorPropName (name) {
  var ref = document.createElement('_');
  var style = ref.style;
  name = hyphenate(name);
  if (name in style) {
    return name
  }
  var i = cssPrefixes.length, prefixedName;
  while (i--) {
    prefixedName = "-" + (cssPrefixes[i]) + "-" + name;
    if (prefixedName in style) {
      return prefixedName
    }
  }
}

function toMedia (value) {
  if (isString(value)) {
    if (value[0] === '@') {
      var name = "media-" + (value.substr(1));
      value = toFloat(getCssVar(name));
    } else if (isNaN(value)) {
      return value
    }
  }
  return value && !isNaN(value) ? ("(min-width: " + value + "px)") : false
}
function get (obj, path, defVal) {
  var result = isObject(obj) && isString(path)
    ? _get(obj, path)
    : undefined;
  return result === undefined
    ? defVal
    : result
}
function _get (obj, path) {
  return path.split('.').reduce(function (acc, val) { return acc && acc[val]; }, obj)
}
function range (start, stop, step) {
  if ( step === void 0 ) step = 1;
  if (typeof stop === 'undefined') {
    stop = start;
    start = 0;
  }
  return Array.from(new Array(Math.floor((stop - start) / step)), function (x, i) { return start + (i * step); })
}

function findParent (instance) {
  return findParents(instance).pop()
}
function findParents (instance) {
  var parents = [];
  var name = instance.$options.name;
  var parent = instance.$parent;
  while (parent) {
    if (parent.$options.name === name) {
      parents.unshift(parent);
    }
    parent = parent.$parent;
  }
  return parents
}
function apply$2 (instance, fn) {
  if (!instance || !instance._isVue) {
    return
  }
  fn(instance);
  instance.$children.forEach(function (child) { return apply$2(child, fn); });
}
function filterOutTextNodes (nodes) {
  return nodes.filter(function (n) { return n.tag || isAsyncPlaceholder(n); })
}
function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}
function mergeData () {
  var arguments$1 = arguments;
  for(var e,a,s={},t=arguments.length;t--;){ for(var r=0,c=Object.keys(arguments[t]);r<c.length;r++){ switch(e=c[r]){case"class":case"style":case"directives":Array.isArray(s[e])||(s[e]=[]), s[e]=s[e].concat(arguments$1[t][e]);break;case"staticClass":if(!arguments$1[t][e]){ break; }void 0===s[e]&&(s[e]=""), s[e]&&(s[e]+=" "), s[e]+=arguments$1[t][e].trim();break;case"on":case"nativeOn":s[e]||(s[e]={});for(var o=0,n=Object.keys(arguments[t][e]);o<n.length;o++){ a=n[o], s[e][a]?s[e][a]=[].concat(s[e][a],arguments$1[t][e][a]):s[e][a]=arguments$1[t][e][a]; }break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":s[e]||(s[e]={}), s[e]=__assign({},arguments$1[t][e],s[e]);break;case"slot":case"key":case"ref":case"tag":case"show":case"keepAlive":default:s[e]||(s[e]=arguments$1[t][e]);} } }return s}var __assign=Object.assign||function(e){
  var arguments$1 = arguments;
for(var a,s=1,t=arguments.length;s<t;s++){a=arguments$1[s];for(var r in a){ Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]); }}return e
};

var ElementBreadcrumb = {
  functional: true,
  render: function (h, ref) {
    var props = ref.props;
    var data = ref.data;
    var children = ref.children;
    return h('ul', mergeData(data, {
      class: 'uk-breadcrumb'
    }), children)
  }
}

var ElementBreadcrumbItem = {
  functional: true,
  props: {
    href: String,
    target: String,
    disabled: {
      type: Boolean,
      default: false
    }
  },
  render: function (h, ref) {
    var props = ref.props;
    var data = ref.data;
    var children = ref.children;
    var disabled = props.disabled;
    var href = props.href;
    var target = props.target;
    return h('li', mergeData(data, {
      class: {
        'uk-disabled': disabled
      }
    }), [
      (isUndefined(href) || disabled)
        ? h('span', children)
        : h('a', { attrs: { href: href, target: target } }, children)
    ])
  }
}

var breadcrumb = {
  name: 'VkBreadcrumb',
  functional: true,
  props: ElementBreadcrumb.props,
  render: ElementBreadcrumb.render
}

var breadcrumb_Item = {
  name: 'VkBreadcrumbItem',
  functional: true,
  props: ElementBreadcrumbItem.props,
  render: ElementBreadcrumbItem.render
}

var props = {
  active: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    validator: function (val) { return !val || /^(small|large)$/.test(val); }
  },
  type: {
    type: String,
    validator: function (val) { return !val || /^(primary|secondary|danger|text|link)$/.test(val); }
  }
};
var def = function (ref) {
  var obj;
  var type = ref.type;
  var active = ref.active;
  var size = ref.size;
  return ({
  class: ['uk-button', ("uk-button-" + (type || 'default')), ( obj = {
    'uk-active': active
  }, obj[("uk-button-" + size)] = size, obj)]
});
};

var ElementButton = {
  functional: true,
  props: assign({}, props, {
    htmlType: {
      type: String,
      default: 'button'
    }
  }),
  render: function render (h, ref) {
    var props$$1 = ref.props;
    var data = ref.data;
    var children = ref.children;
    var htmlType = props$$1.htmlType;
    return h('button', mergeData(data, def(props$$1), {
      attrs: {
        type: htmlType
      }
    }), children)
  }
}

var ElementButtonLink = {
  functional: true,
  props: props,
  render: function render (h, ref) {
    var props$$1 = ref.props;
    var data = ref.data;
    var children = ref.children;
    return h('a', mergeData(data, def(props$$1)), children)
  }
}

var ElementButtonGroup = {
  functional: true,
  render: function render (h, ref) {
    var data = ref.data;
    var children = ref.children;
    return h('div', mergeData(data, {
      class: 'uk-button-group'
    }), children)
  }
}

var button = {
  name: 'VkButton',
  functional: true,
  props: ElementButton.props,
  render: ElementButton.render
}

var buttonLink = {
  name: 'VkButtonLink',
  functional: true,
  props: ElementButtonLink.props,
  render: ElementButtonLink.render
}

var buttonGroup = {
  name: 'VkButtonGroup',
  functional: true,
  props: ElementButtonGroup.props,
  render: ElementButtonGroup.render
}

var ElementCard = {
  functional: true,
  props: {
    type: {
      type: String,
      default: 'default',
      validator: function (val) { return /^(default|primary|secondary|blank)$/.test(val); }
    },
    padding: {
      type: String,
      validator: function (val) { return !val || /^(small|large)$/.test(val); }
    },
    hover: {
      type: Boolean,
      default: false
    }
  },
  render: function render (h, ref) {
    var obj;
    var props = ref.props;
    var data = ref.data;
    var slots = ref.slots;
    var type = props.type;
    var padding = props.padding;
    var hover = props.hover;
    var _slots = slots();
    var body = _slots.body;
    if (!body || !body.length) {
      _slots.body = _slots.default;
      delete _slots.default;
    }
    return h('div', mergeData(data, {
      class: ['uk-card', ( obj = {
        'uk-card-hover': hover
      }, obj[("uk-card-" + type)] = type, obj[("uk-card-" + padding)] = padding, obj)]
    }), [
      _slots.default && _slots.default,
      _slots['media-top'] && h('div', { class: 'uk-card-media-top' }, _slots['media-top']),
      _slots.badge && h('div', { class: 'uk-card-badge' }, _slots.badge),
      _slots.header && h('div', { class: 'uk-card-header' }, _slots.header),
      _slots['media'] && h('div', { class: 'uk-card-media' }, _slots['media']),
      _slots.body && h('div', { class: 'uk-card-body' }, _slots.body),
      _slots.footer && h('div', { class: 'uk-card-footer' }, _slots.footer),
      _slots['media-bottom'] && h('div', { class: 'uk-card-media-bottom' }, _slots['media-bottom'])
    ])
  }
}

var ElementCardTitle = {
  functional: true,
  props: {
    tag: {
      type: String,
      default: 'h3'
    }
  },
  render: function render (h, ref) {
    var props = ref.props;
    var data = ref.data;
    var children = ref.children;
    return h(props.tag, mergeData(data, {
      class: 'uk-card-title'
    }), children)
  }
}

var card = {
  name: 'VkCard',
  functional: true,
  props: ElementCard.props,
  render: ElementCard.render
}

var card_Title = {
  name: 'VkCardTitle',
  functional: true,
  props: ElementCardTitle.props,
  render: ElementCardTitle.render
}

var VkRoot = {
  inserted: function inserted (el, binding, vnode) {
    vnode.context.$nextTick(function () {
      vnode.context.$root.$el.appendChild(el);
    });
  }
}

function noop$1 () {}
var warn = noop$1;
var tip = noop$1;
if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };
  warn = function (msg, vm) {
    if (hasConsole) {
      console.error("[Vuikit warn]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };
  tip = function (msg, vm) {
    if (hasConsole) {
      console.warn("[Vuikit tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };
  var formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>'
    }
    var name = typeof vm === 'string'
      ? vm
      : typeof vm === 'function' && vm.options
        ? vm.options.name
        : vm._isVue
          ? vm.$options.name || vm.$options._componentTag
          : vm.name;
    var file = vm._isVue && vm.$options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }
    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };
  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };
  var generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

var dirs = {
  width: ['x', 'left', 'right'],
  height: ['y', 'top', 'bottom']
};
function positionAt (element, target, elAttach, targetAttach, elOffset, targetOffset, flip, boundary) {
  elAttach = getPos(elAttach);
  targetAttach = getPos(targetAttach);
  var flipped = {element: elAttach, target: targetAttach};
  if (!element || !target) {
    return flipped
  }
  var dim = getDimensions(element);
  var targetDim = getDimensions(target);
  var position = targetDim;
  moveTo(position, elAttach, dim, -1);
  moveTo(position, targetAttach, targetDim, 1);
  elOffset = getOffsets(elOffset, dim.width, dim.height);
  targetOffset = getOffsets(targetOffset, targetDim.width, targetDim.height);
  elOffset['x'] += targetOffset['x'];
  elOffset['y'] += targetOffset['y'];
  position.left += elOffset['x'];
  position.top += elOffset['y'];
  boundary = getDimensions(boundary || window$1(element));
  if (flip) {
    each(dirs, function (ref, prop) {
      var dir = ref[0];
      var align = ref[1];
      var alignFlip = ref[2];
      if (!(flip === true || includes(flip, dir))) {
        return
      }
      var elemOffset = elAttach[dir] === align
        ? -dim[prop]
        : elAttach[dir] === alignFlip
          ? dim[prop]
          : 0;
      var targetOffset = targetAttach[dir] === align
        ? targetDim[prop]
        : targetAttach[dir] === alignFlip
          ? -targetDim[prop]
          : 0;
      if (position[align] < boundary[align] || position[align] + dim[prop] > boundary[alignFlip]) {
        var centerOffset = dim[prop] / 2;
        var centerTargetOffset = targetAttach[dir] === 'center' ? -targetDim[prop] / 2 : 0;
        elAttach[dir] === 'center' && (
          apply(centerOffset, centerTargetOffset) ||
                    apply(-centerOffset, -centerTargetOffset)
        ) || apply(elemOffset, targetOffset);
      }
      function apply (elemOffset, targetOffset) {
        var newVal = position[align] + elemOffset + targetOffset - elOffset[dir] * 2;
        if (newVal >= boundary[align] && newVal + dim[prop] <= boundary[alignFlip]) {
          position[align] = newVal;
          ['element', 'target'].forEach(function (el) {
            flipped[el][dir] = !elemOffset
              ? flipped[el][dir]
              : flipped[el][dir] === dirs[prop][1]
                ? dirs[prop][2]
                : dirs[prop][1];
          });
          return true
        }
      }
    });
  }
  offset(element, position);
  return flipped
}
function offset (element, coordinates) {
  element = toNode(element);
  if (coordinates) {
    var currentOffset = offset(element);
    var pos = css(element, 'position');
    ['left', 'top'].forEach(function (prop) {
      if (prop in coordinates) {
        var value = css(element, prop);
        element.style[prop] = ((coordinates[prop] - currentOffset[prop]) +
                toFloat(pos === 'absolute' && value === 'auto' ? position(element)[prop] : value)) + "px";
      }
    });
    return
  }
  return getDimensions(element)
}
function getDimensions (element) {
  element = toNode(element);
  var ref = window$1(element);
  var top = ref.pageYOffset;
  var left = ref.pageXOffset;
  if (isWindow(element)) {
    var height = element.innerHeight;
    var width = element.innerWidth;
    return {
      top: top,
      left: left,
      height: height,
      width: width,
      bottom: top + height,
      right: left + width
    }
  }
  var display = false;
  if (!isVisible(element)) {
    display = element.style.display;
    element.style.display = 'block';
  }
  var rect = element.getBoundingClientRect();
  if (display !== false) {
    element.style.display = display;
  }
  return {
    height: rect.height,
    width: rect.width,
    top: rect.top + top,
    left: rect.left + left,
    bottom: rect.bottom + top,
    right: rect.right + left
  }
}
function position (element) {
  element = toNode(element);
  var parent = offsetParent(element);
  var parentOffset = parent === docEl(element) ? {top: 0, left: 0} : offset(parent);
  var ref = ['top', 'left'].reduce(function (props, prop) {
    var propName$$1 = ucfirst(prop);
    props[prop] -= parentOffset[prop] +
            (toFloat(css(element, ("margin" + propName$$1))) || 0) +
            (toFloat(css(parent, ("border" + propName$$1 + "Width"))) || 0);
    return props
  }, offset(element));
  var top = ref.top;
  var left = ref.left;
  return {top: top, left: left}
}
function offsetParent (element) {
  var parent = toNode(element).offsetParent;
  while (parent && css(parent, 'position') === 'static') {
    parent = parent.offsetParent;
  }
  return parent || docEl(element)
}
var height = dimension('height');
var width = dimension('width');
function dimension (prop) {
  var propName$$1 = ucfirst(prop);
  return function (element, value) {
    element = toNode(element);
    if (isUndefined(value)) {
      if (isWindow(element)) {
        return element[("inner" + propName$$1)]
      }
      if (isDocument(element)) {
        var doc = element.documentElement;
        return Math.max(doc[("offset" + propName$$1)], doc[("scroll" + propName$$1)])
      }
      value = css(element, prop);
      value = value === 'auto' ? element[("offset" + propName$$1)] : toFloat(value) || 0;
      return getContentSize(prop, element, value)
    } else {
      css(element, prop, !value && value !== 0
        ? ''
        : getContentSize(prop, element, value) + 'px'
      );
    }
  }
}
function getContentSize (prop, element, value) {
  return css(element, 'boxSizing') === 'border-box' ? dirs[prop].slice(1).map(ucfirst).reduce(function (value, prop) { return value -
        toFloat(css(element, ("padding" + prop))) -
        toFloat(css(element, ("border" + prop + "Width"))); }
    , value) : value
}
function moveTo (position, attach, dim, factor) {
  each(dirs, function (ref, prop) {
    var dir = ref[0];
    var align = ref[1];
    var alignFlip = ref[2];
    if (attach[dir] === alignFlip) {
      position[align] += dim[prop] * factor;
    } else if (attach[dir] === 'center') {
      position[align] += dim[prop] * factor / 2;
    }
  });
}
function getPos (pos) {
  var x = /left|center|right/;
  var y = /top|center|bottom/;
  pos = (pos || '').split(' ');
  if (pos.length === 1) {
    pos = x.test(pos[0])
      ? pos.concat(['center'])
      : y.test(pos[0])
        ? ['center'].concat(pos)
        : ['center', 'center'];
  }
  return {
    x: x.test(pos[0]) ? pos[0] : 'center',
    y: y.test(pos[1]) ? pos[1] : 'center'
  }
}
function getOffsets (offsets, width, height) {
  var ref = (offsets || '').split(' ');
  var x = ref[0];
  var y = ref[1];
  return {
    x: x ? toFloat(x) * (endsWith(x, '%') ? width / 100 : 1) : 0,
    y: y ? toFloat(y) * (endsWith(y, '%') ? height / 100 : 1) : 0
  }
}
function flipPosition (pos) {
  switch (pos) {
    case 'left':
      return 'right'
    case 'right':
      return 'left'
    case 'top':
      return 'bottom'
    case 'bottom':
      return 'top'
    default:
      return pos
  }
}
function isInView (element, top, left) {
  if ( top === void 0 ) top = 0;
  if ( left === void 0 ) left = 0;
  element = toNode(element);
  var win = window$1(element);
  return intersectRect(element.getBoundingClientRect(), {
    top: top,
    left: left,
    bottom: top + height(win),
    right: left + width(win)
  })
}
function window$1 (element) {
  return isWindow(element) ? element : document$1(element).defaultView
}
function document$1 (element) {
  return toNode(element).ownerDocument
}
function docEl (element) {
  return document$1(element).documentElement
}

var BEFORE_POSITION = 'v-vk-position:before';
var AFTER_POSITION = 'v-vk-position:after';

var Directive = {
  inserted: function inserted (el, binding, vnode) {
    var ctx = getContext(el, binding, vnode);
    if (ctx) {
      position$1(ctx);
    }
  },
  componentUpdated: function componentUpdated (el, binding, vnode) {
    var ctx = getContext(el, binding, vnode);
    if (ctx) {
      position$1(ctx);
    }
  }
}
function position$1 (ctx) {
  var el = ctx.el;
  var props = ctx.props;
  var vnode = ctx.vnode;
  var target = props.target;
  var position$$1 = props.position;
  var offset$$1 = props.offset;
  var boundary = props.boundary;
  var flip = props.flip;
  var mainClass = props.mainClass;
  if ("development" !== 'production' && !position$$1.match(/^((top|bottom)-(left|center|right))|((left|right)-(top|center|bottom))$/)) {
    warn(("v-position -> '" + position$$1 + "' -> no valid position"), vnode);
  }
  if ("development" !== 'production' && (!target || !target.tagName)) {
    warn("v-position -> no valid target", vnode);
  }
  var ref = position$$1.split('-');
  var dir = ref[0];
  var align = ref[1];
  trigger(el, BEFORE_POSITION);
  var classesRx = new RegExp((mainClass + "-(top|bottom|left|right)(-[a-z]+)?"));
  el.className = el.className.replace(classesRx, '');
  css(el, { top: '', left: '' });
  var axis = getPositionAxis(position$$1);
  var elAttach = axis === 'x'
    ? ((flipPosition(dir)) + " " + align)
    : (align + " " + (flipPosition(dir)));
  var targetAttach = axis === 'x'
    ? (dir + " " + align)
    : (align + " " + dir);
  var elOffset = axis === 'x'
    ? ("" + (dir === 'left' ? -1 * offset$$1 : offset$$1))
    : (" " + (dir === 'top' ? -1 * offset$$1 : offset$$1));
  var targetOffset = null;
  var ref$1 = positionAt(
    el,
    target,
    elAttach,
    targetAttach,
    elOffset,
    targetOffset,
    flip,
    boundary
  ).target;
  var x = ref$1.x;
  var y = ref$1.y;
  dir = axis === 'x' ? x : y;
  align = axis === 'x' ? y : x;
  toggleClass(el, (mainClass + "-" + dir + "-" + align), offset$$1 === false);
  trigger(el, AFTER_POSITION);
}
function getOptions (ctx) {
  var vnode = ctx.vnode;
  var ref = ctx.binding;
  var value = ref.value;
  if ("development" !== 'production' && (isUndefined(value) || !isObject(value))) {
    warn('v-position -> configuration is missing or is not an Object', vnode.context);
  }
  var options = assign({
    target: null,
    position: 'top-center',
    boundary: window,
    flip: true,
    offset: false,
    mainClass: ''
  }, value);
  return options
}
function getContext (el, binding, vnode) {
  var ctx = { el: el, binding: binding, vnode: vnode };
  ctx.props = getOptions(ctx);
  if (!ctx.props) {
    binding.def.unbind(el, binding);
    return
  }
  return ctx
}
function getPositionAxis (position$$1) {
  var ref = position$$1.split('-');
  var dir = ref[0];
  return dir === 'top' || dir === 'bottom'
    ? 'y'
    : 'x'
}

var EventsMixin = {
  methods: {
    on: function on$1 () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];
      this._vk_events_off.push(on.apply(void 0, args));
    },
    off: function off$1 () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];
      off.apply(void 0, args);
    }
  },
  created: function created () {
    this._vk_events_off = [];
  },
  beforeDestroy: function beforeDestroy () {
    this._vk_events_off.forEach(function (off$$1) { return off$$1(); });
  }
}

function $ (selector, context) {
  return !isString(selector)
    ? toNode(selector)
    : isHtml(selector)
      ? toNode(fragment(selector))
      : find(selector, context)
}
function $$ (selector, context) {
  return !isString(selector)
    ? toNodes(selector)
    : isHtml(selector)
      ? toNodes(fragment(selector))
      : findAll(selector, context)
}
function isHtml (str) {
  return str[0] === '<' || str.match(/^\s*</)
}

function MouseTracker () {}
MouseTracker.prototype = {
  positions: [],
  position: null,
  init: function init () {
    var this$1 = this;
    this.positions = [];
    this.position = null;
    var ticking = false;
    this.unbind = on(document, 'mousemove', function (e) {
      if (ticking) {
        return
      }
      setTimeout(function () {
        var time = Date.now();
        var ref = this$1.positions;
        var length = ref.length;
        if (length && (time - this$1.positions[length - 1].time > 100)) {
          this$1.positions.splice(0, length);
        }
        this$1.positions.push({time: time, x: e.pageX, y: e.pageY});
        if (this$1.positions.length > 5) {
          this$1.positions.shift();
        }
        ticking = false;
      }, 5);
      ticking = true;
    });
  },
  cancel: function cancel () {
    if (this.unbind) {
      this.unbind();
    }
  },
  movesTo: function movesTo (target) {
    if (this.positions.length < 2) {
      return false
    }
    var p = offset(target);
    var position$$1 = this.positions[this.positions.length - 1];
    var ref = this.positions;
    var prevPos = ref[0];
    if (p.left <= position$$1.x && position$$1.x <= p.right && p.top <= position$$1.y && position$$1.y <= p.bottom) {
      return false
    }
    var points = [
      [{x: p.left, y: p.top}, {x: p.right, y: p.bottom}],
      [{x: p.right, y: p.top}, {x: p.left, y: p.bottom}]
    ];
    if (p.right <= position$$1.x) {
    } else if (p.left >= position$$1.x) {
      points[0].reverse();
      points[1].reverse();
    } else if (p.bottom <= position$$1.y) {
      points[0].reverse();
    } else if (p.top >= position$$1.y) {
      points[1].reverse();
    }
    return !!points.reduce(function (result, point) {
      return result + (slope(prevPos, point[0]) < slope(position$$1, point[0]) && slope(prevPos, point[1]) > slope(position$$1, point[1]))
    }, 0)
  }
};
function slope (a, b) {
  return (b.y - a.y) / (b.x - a.x)
}

var doc$1 = typeof document !== 'undefined' && document;
var win$1 = typeof window !== 'undefined' && window;
var nav = typeof navigator !== 'undefined' && navigator;
var isRtl = doc$1 && attr(document.documentElement, 'dir') === 'rtl';
var hasTouchEvents = win$1 && 'ontouchstart' in window;
var hasPointerEvents = win$1 && window.PointerEvent;
var hasTouch = hasTouchEvents ||
  (win$1 && window.DocumentTouch) && (doc$1 && document instanceof window.DocumentTouch) ||
  nav && navigator.maxTouchPoints;
var pointerDown = !hasTouch ? 'mousedown' : ("mousedown " + (hasTouchEvents ? 'touchstart' : 'pointerdown'));
var pointerMove = !hasTouch ? 'mousemove' : ("mousemove " + (hasTouchEvents ? 'touchmove' : 'pointermove'));
var pointerUp = !hasTouch ? 'mouseup' : ("mouseup " + (hasTouchEvents ? 'touchend' : 'pointerup'));
var pointerEnter = hasTouch && hasPointerEvents ? 'pointerenter' : 'mouseenter';
var pointerLeave = hasTouch && hasPointerEvents ? 'pointerleave' : 'mouseleave';

var props$1 = {
  target: {},
  boundary: {},
  boundaryAlign: {
    type: Boolean,
    default: false
  },
  flip: {
    type: [String, Boolean],
    default: true
  },
  position: {
    type: String,
    default: ("bottom-" + (isRtl ? 'right' : 'left')),
    validator: function (pos) { return /^(top|bottom)-(left|right|center|justify)$/.test(pos) ||
      /^(left|right)-(top|bottom|center|justify)$/.test(pos); }
  },
  offset: {
    type: [Boolean, Number],
    default: false
  },
  animation: {
    type: String,
    default: 'fade'
  },
  duration: {
    type: Number,
    default: 200
  },
  mode: {
    type: String,
    default: 'click hover'
  },
  delayShow: {
    type: Number,
    default: 0
  },
  delayHide: {
    type: Number,
    default: 800
  },
  mainClass: {
    type: String,
    default: 'uk-drop'
  }
}

var ElementDrop = {
  functional: true,
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  render: function render (h, ref) {
    var children = ref.children;
    var data = ref.data;
    var props = ref.props;
    var show = props.show;
    return h('div', mergeData(data, {
      class: {
        'uk-open': show
      },
      style: {
        display: show ? 'block' : null
      }
    }), children)
  }
}

var win$2 = typeof window !== 'undefined' && window;
var Promise = win$2 && 'Promise' in window ? window.Promise : PromiseFn;
var RESOLVED = 0;
var REJECTED = 1;
var PENDING = 2;
var async = win$2 && 'setImmediate' in window ? setImmediate : setTimeout;
function PromiseFn (executor) {
  this.state = PENDING;
  this.value = undefined;
  this.deferred = [];
  var promise = this;
  try {
    executor(
      function (x) {
        promise.resolve(x);
      },
      function (r) {
        promise.reject(r);
      }
    );
  } catch (e) {
    promise.reject(e);
  }
}
PromiseFn.reject = function (r) {
  return new PromiseFn(function (resolve, reject) {
    reject(r);
  })
};
PromiseFn.resolve = function (x) {
  return new PromiseFn(function (resolve, reject) {
    resolve(x);
  })
};
PromiseFn.all = function all (iterable) {
  return new PromiseFn(function (resolve, reject) {
    var result = [];
    var count = 0;
    if (iterable.length === 0) {
      resolve(result);
    }
    function resolver (i) {
      return function (x) {
        result[i] = x;
        count += 1;
        if (count === iterable.length) {
          resolve(result);
        }
      }
    }
    for (var i = 0; i < iterable.length; i += 1) {
      PromiseFn.resolve(iterable[i]).then(resolver(i), reject);
    }
  })
};
PromiseFn.race = function race (iterable) {
  return new PromiseFn(function (resolve, reject) {
    for (var i = 0; i < iterable.length; i += 1) {
      PromiseFn.resolve(iterable[i]).then(resolve, reject);
    }
  })
};
var p = PromiseFn.prototype;
p.resolve = function resolve (x) {
  var promise = this;
  if (promise.state === PENDING) {
    if (x === promise) {
      throw new TypeError('Promise settled with itself.')
    }
    var called = false;
    try {
      var then = x && x.then;
      if (x !== null && isObject(x) && isFunction(then)) {
        then.call(
          x,
          function (x) {
            if (!called) {
              promise.resolve(x);
            }
            called = true;
          },
          function (r) {
            if (!called) {
              promise.reject(r);
            }
            called = true;
          }
        );
        return
      }
    } catch (e) {
      if (!called) {
        promise.reject(e);
      }
      return
    }
    promise.state = RESOLVED;
    promise.value = x;
    promise.notify();
  }
};
p.reject = function reject (reason) {
  var promise = this;
  if (promise.state === PENDING) {
    if (reason === promise) {
      throw new TypeError('Promise settled with itself.')
    }
    promise.state = REJECTED;
    promise.value = reason;
    promise.notify();
  }
};
p.notify = function notify () {
  var this$1 = this;
  async(function () {
    if (this$1.state !== PENDING) {
      while (this$1.deferred.length) {
        var ref = this$1.deferred.shift();
        var onResolved = ref[0];
        var onRejected = ref[1];
        var resolve = ref[2];
        var reject = ref[3];
        try {
          if (this$1.state === RESOLVED) {
            if (isFunction(onResolved)) {
              resolve(onResolved.call(undefined, this$1.value));
            } else {
              resolve(this$1.value);
            }
          } else if (this$1.state === REJECTED) {
            if (isFunction(onRejected)) {
              resolve(onRejected.call(undefined, this$1.value));
            } else {
              reject(this$1.value);
            }
          }
        } catch (e) {
          reject(e);
        }
      }
    }
  });
};
p.then = function then (onResolved, onRejected) {
  var this$1 = this;
  return new PromiseFn(function (resolve, reject) {
    this$1.deferred.push([onResolved, onRejected, resolve, reject]);
    this$1.notify();
  })
};
p.catch = function (onRejected) {
  return this.then(undefined, onRejected)
};

function transition (element, props, duration, timing) {
  if ( duration === void 0 ) duration = 400;
  if ( timing === void 0 ) timing = 'linear';
  return Promise.all(toNodes(element).map(function (element) { return new Promise(function (resolve, reject) {
      for (var name in props) {
        var value = css(element, name);
        if (value === '') {
          css(element, name, value);
        }
      }
      var timer = setTimeout(function () { return trigger(element, 'transitionend'); }, duration);
      once(element, 'transitionend transitioncanceled', function (ref) {
        var type = ref.type;
        clearTimeout(timer);
        removeClass(element, 'uk-transition');
        css(element, {
          'transition-property': '',
          'transition-duration': '',
          'transition-timing-function': ''
        });
        type === 'transitioncanceled' ? reject() : resolve();
      }, false, function (ref) {
        var target = ref.target;
        return element === target;
      });
      addClass(element, 'uk-transition');
      css(element, assign({
        'transition-property': Object.keys(props).map(propName).join(','),
        'transition-duration': (duration + "ms"),
        'transition-timing-function': timing
      }, props));
    }); }
  ))
}
var Transition = {
  start: transition,
  stop: function stop (element) {
    trigger(element, 'transitionend');
    return Promise.resolve()
  },
  cancel: function cancel (element) {
    trigger(element, 'transitioncanceled');
  },
  inProgress: function inProgress (element) {
    return hasClass(element, 'uk-transition')
  }
};
var animationPrefix = 'uk-animation-';
var clsCancelAnimation = 'uk-cancel-animation';
function animate (element, animation, duration, origin, out) {
  var arguments$1 = arguments;
  if ( duration === void 0 ) duration = 200;
  return Promise.all(toNodes(element).map(function (element) { return new Promise(function (resolve, reject) {
      if (hasClass(element, clsCancelAnimation)) {
        requestAnimationFrame(function () { return Promise.resolve().then(function () { return animate.apply(void 0, arguments$1).then(resolve, reject); }
          ); }
        );
        return
      }
      var cls = animation + " " + animationPrefix + (out ? 'leave' : 'enter');
      if (startsWith(animation, animationPrefix)) {
        if (origin) {
          cls += " uk-transform-origin-" + origin;
        }
        if (out) {
          cls += " " + animationPrefix + "reverse";
        }
      }
      reset();
      once(element, 'animationend animationcancel', function (ref) {
        var type = ref.type;
        var hasReset = false;
        if (type === 'animationcancel') {
          reject();
          reset();
        } else {
          resolve();
          Promise.resolve().then(function () {
            hasReset = true;
            reset();
          });
        }
        requestAnimationFrame(function () {
          if (!hasReset) {
            addClass(element, clsCancelAnimation);
            requestAnimationFrame(function () { return removeClass(element, clsCancelAnimation); });
          }
        });
      }, false, function (ref) {
        var target = ref.target;
        return element === target;
      });
      css(element, 'animationDuration', (duration + "ms"));
      addClass(element, cls);
      function reset () {
        css(element, 'animationDuration', '');
        removeClasses(element, (animationPrefix + "\\S*"));
      }
    }); }
  ))
}
var inProgress = new RegExp((animationPrefix + "(enter|leave)"));
var Animation = {
  in: function in$1 (element, animation, duration, origin) {
    return animate(element, animation, duration, origin, false)
  },
  out: function out (element, animation, duration, origin) {
    return animate(element, animation, duration, origin, true)
  },
  inProgress: function inProgress$1 (element) {
    return inProgress.test(attr(element, 'class'))
  },
  cancel: function cancel (element) {
    trigger(element, 'animationcancel');
  }
};

var Transition$1 = {
  name: 'VkTransition',
  functional: true,
  props: {
    name: {
      type: [String, Array],
      required: true
    },
    duration: {
      type: Number
    },
    mode: {
      type: String,
      default: 'out-in'
    }
  },
  render: function render (h, ref) {
    var props = ref.props;
    var data = ref.data;
    var children = ref.children;
    var name = props.name;
    var duration = props.duration;
    var ref$1 = isString(name) ? [name, name] : name;
    var animationIn = ref$1[0];
    var animationOut = ref$1[1];
    var def = {
      props: {
        css: false,
        mode: props.mode
      },
      on: {
        enter: function enter (el, done) {
          animationIn
            ? Animation.in(el, ("uk-animation-" + animationIn), duration).then(done)
            : done();
        },
        leave: function leave (el, done) {
          animationOut
            ? Animation.out(el, ("uk-animation-" + animationOut), duration).then(done)
            : done();
        }
      }
    };
    return h('transition', def, children)
  }
}

var render = {
  mounted: function mounted () {
    this.$refs.target = this.queryElement(this.target) || this.$el.previousElementSibling;
    this.$refs.boundary = this.queryElement(this.boundary) || window;
    this.$forceUpdate();
  },
  render: function render (h) {
    var this$1 = this;
    var obj, obj$1;
    var ref = this;
    var position$$1 = ref.position;
    var ref$1 = this.$refs;
    var boundary = ref$1.boundary;
    var target = ref$1.target;
    var ref$2 = position$$1.split('-');
    var align = ref$2[1];
    var ref$3 = this;
    var boundaryAlign = ref$3.boundaryAlign;
    var animation = ref$3.animation;
    var duration = ref$3.duration;
    var mainClass = ref$3.mainClass;
    var flip = ref$3.flip;
    var offset$$1 = ref$3.offset;
    if (!target || !boundary) { return }
    position$$1 = position$$1.replace('justify', 'center');
    target = boundaryAlign ? boundary : target;
    var def = {
      on: ( obj = {}, obj[BEFORE_POSITION] = function (e) {
          var ref = this$1;
          var $el = ref.$el;
          var alignTo = offset(target);
          var boundaryOffset = offset(boundary);
          css($el, { width: '', height: '' });
          removeClass($el, (mainClass + "-stack"));
          if (align === 'justify') {
            var prop = getAxis(position$$1) === 'y' ? 'width' : 'height';
            css($el, prop, alignTo[prop]);
          } else if ($el.offsetWidth > Math.max(boundaryOffset.right - alignTo.left, alignTo.right - boundaryOffset.left)) {
            addClass($el, (mainClass + "-stack"));
          }
        }, obj),
      props: {
        show: this.shown
      },
      class: [mainClass, ( obj$1 = {}, obj$1[(mainClass + "-boundary")] = this.boundaryAlign, obj$1)],
      directives: [
        {
          name: 'show',
          value: this.shown
        },
        {
          name: 'vk-position',
          value: {
            flip: flip,
            offset: offset$$1,
            target: target,
            boundary: boundary,
            position: position$$1,
            mainClass: mainClass
          }
        }
      ]
    };
    return h(Transition$1, {
      props: {
        name: [animation],
        duration: duration
      }
    }, [
      h(ElementDrop, def, this.$slots.default)
    ])
  }
}
function getAxis (position$$1) {
  var ref = position$$1.split('-');
  var dir = ref[0];
  return dir === 'top' || dir === 'bottom'
    ? 'y'
    : 'x'
}

var SHOW = 'show';
var HIDE = 'hide';

var touch = {}, clickTimeout, swipeTimeout, tapTimeout, clicked;
function swipeDirection (ref) {
  var x1 = ref.x1;
  var x2 = ref.x2;
  var y1 = ref.y1;
  var y2 = ref.y2;
  return Math.abs(x1 - x2) >= Math.abs(y1 - y2) ? (x1 - x2 > 0 ? 'Left' : 'Right') : (y1 - y2 > 0 ? 'Up' : 'Down')
}
function cancelAll () {
  clickTimeout && clearTimeout(clickTimeout);
  swipeTimeout && clearTimeout(swipeTimeout);
  tapTimeout && clearTimeout(tapTimeout);
  clickTimeout = swipeTimeout = tapTimeout = null;
  touch = {};
}
ready(function () {
  on(document, 'click', function () { return clicked = true; }, true);
  on(document, pointerDown, function (e) {
    var target = e.target;
    var ref = getPos$1(e);
    var x = ref.x;
    var y = ref.y;
    var now = Date.now();
    var type = getType(e.type);
    if (touch.type && touch.type !== type) {
      return
    }
    touch.el = 'tagName' in target ? target : target.parentNode;
    clickTimeout && clearTimeout(clickTimeout);
    touch.x1 = x;
    touch.y1 = y;
    if (touch.last && now - touch.last <= 250) {
      touch = {};
    }
    touch.type = type;
    touch.last = now;
    clicked = e.button > 0;
  });
  on(document, pointerMove, function (e) {
    if (e.defaultPrevented) {
      return
    }
    var ref = getPos$1(e);
    var x = ref.x;
    var y = ref.y;
    touch.x2 = x;
    touch.y2 = y;
  });
  on(document, pointerUp, function (ref) {
    var type = ref.type;
    var target = ref.target;
    if (touch.type !== getType(type)) {
      return
    }
    if (touch.x2 && Math.abs(touch.x1 - touch.x2) > 30 || touch.y2 && Math.abs(touch.y1 - touch.y2) > 30) {
      swipeTimeout = setTimeout(function () {
        if (touch.el) {
          trigger(touch.el, 'swipe');
          trigger(touch.el, ("swipe" + (swipeDirection(touch))));
        }
        touch = {};
      });
    } else if ('last' in touch) {
      tapTimeout = setTimeout(function () { return trigger(touch.el, 'tap'); });
      if (touch.el && type !== 'mouseup' && within(target, touch.el)) {
        clickTimeout = setTimeout(function () {
          clickTimeout = null;
          if (touch.el && !clicked) {
            trigger(touch.el, 'click');
          }
          touch = {};
        }, 350);
      }
    } else {
      touch = {};
    }
  });
  on(document, 'touchcancel', cancelAll);
  on(window, 'scroll', cancelAll);
});
var touching = false;
if (typeof document !== 'undefined') {
  on(document, 'touchstart', function () { return touching = true; }, true);
  on(document, 'click', function () { touching = false; });
  on(document, 'touchcancel', function () { return touching = false; }, true);
}
function isTouch (e) {
  return touching || e.pointerType === 'touch'
}
function getPos$1 (e) {
  var touches = e.touches;
  var changedTouches = e.changedTouches;
  var ref = touches && touches[0] || changedTouches && changedTouches[0] || e;
  var x = ref.pageX;
  var y = ref.pageY;
  return {x: x, y: y}
}
function getType (type) {
  return type.slice(0, 5)
}

var active;
if (typeof document !== 'undefined' && typeof window !== 'undefined') {
  on(window, 'resize', function (ref) {
    var defaultPrevented = ref.defaultPrevented;
    var justified = active && /justify/.test(active.position);
    if (!defaultPrevented && justified) {
      active.$forceUpdate();
    }
  });
  on(document.documentElement, 'click', function (ref) {
    var target = ref.target;
    var defaultPrevented = ref.defaultPrevented;
    if (defaultPrevented || !active) {
      return
    }
    var clickedInside = function (drop) { return within(target, drop.$el); };
    var clickedTarget = function (drop) { return within(target, drop.$refs.target); };
    while (active && !clickedInside(active) && !clickedTarget(active)) {
      var parent = findParent(active);
      active._hide();
      active = parent;
    }
  });
}
var toggle = {
  data: function () { return ({
    shown: false
  }); },
  methods: {
    show: function show () {
      this.clearTimers();
      this.showTimer = setTimeout(this._show, this.delayShow);
    },
    _show: function _show () {
      while (active && !this.isChildOf(active) && !this.isParentOf(active)) {
        var parent = findParent(active);
        active._hide();
        active = parent;
      }
      this.shown = true;
      this.tracker.init();
      active = this;
      this.$emit(SHOW);
    },
    hide: function hide () {
      var hoverIdle = 200;
      this.clearTimers();
      this.isDelaying = this.tracker.movesTo(this.$el);
      if (this.isDelaying) {
        this.hideTimer = setTimeout(this.hide, hoverIdle);
      } else {
        this.hideTimer = setTimeout(this._hide, this.delayHide);
      }
    },
    _hide: function _hide () {
      this.shown = false;
      this.tracker.cancel();
      if (active === this) {
        var parent = findParent(active);
        active = parent || null;
      }
      this.$emit(HIDE);
    },
    clearTimers: function clearTimers () {
      clearTimeout(this.showTimer);
      clearTimeout(this.hideTimer);
      this.showTimer = null;
      this.hideTimer = null;
    },
    toggle: function toggle () {
      this.shown ? this._hide() : this.show();
    }
  },
  mounted: function mounted () {
    var this$1 = this;
    var ref = this;
    var on$$1 = ref.on;
    var show = ref.show;
    var hide = ref.hide;
    var toggle = ref.toggle;
    var mode = ref.mode;
    var clearTimers = ref.clearTimers;
    this.$nextTick(function () {
      if (/click/.test(mode) || hasTouch) {
        on$$1(this$1.$refs.target, 'click', toggle);
      }
      if (/hover/.test(mode)) {
        on$$1(this$1.$refs.target, pointerEnter, function (e) {
          if (isTouch(e)) {
            return
          }
          e.preventDefault();
          show();
        });
        on$$1(this$1.$refs.target, pointerLeave, function (e) {
          if (isTouch(e)) {
            return
          }
          e.preventDefault();
          hide();
        });
        on$$1(this$1.$el, pointerLeave, hide);
        on$$1(this$1.$el, pointerEnter, clearTimers);
      }
    });
  }
}

var Drop = {
  name: 'VkDrop',
  mixins: [render, toggle, EventsMixin],
  directives: {
    VkRoot: VkRoot,
    VkPosition: Directive
  },
  props: props$1,
  methods: {
    isParentOf: function isParentOf (instance) {
      var parents = findParents(instance);
      return includes(parents, this)
    },
    isChildOf: function isChildOf (instance) {
      var parents = findParents(this);
      return includes(parents, instance)
    },
    queryElement: function queryElement (el) {
      return isNode(el)
        ? el
        : isString(el)
          ? (get(this.$vnode.context.$refs, el) || $(el, this.$el))
          : el
    }
  },
  created: function created () {
    this.tracker = new MouseTracker();
  },
  beforeDestroy: function beforeDestroy () {
    if (this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el);
    }
  }
}

var Dropdown = {
  name: 'VkDropdown',
  extends: Drop,
  props: {
    mainClass: {
      default: 'uk-dropdown'
    }
  }
}

var ElementGrid = {
  functional: true,
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    divided: {
      type: Boolean,
      default: false
    },
    matched: {
      type: Boolean,
      default: false
    },
    gutter: {
      type: String,
      validator: function (val) { return !val || /^(small|medium|large|collapse)$/.test(val); }
    }
  },
  render: function render (h, ref) {
    var obj;
    var props = ref.props;
    var data = ref.data;
    var children = ref.children;
    var tag = props.tag;
    var gutter = props.gutter;
    var divided = props.divided;
    var matched = props.matched;
    return h(tag, mergeData(data, {
      class: ['uk-grid', ( obj = {
        'uk-grid-match': matched,
        'uk-grid-divider': divided
      }, obj[("uk-grid-" + gutter)] = gutter, obj)]
    }), children)
  }
}

var NAMESPACE = '__vkMargin';
var VkMargin = {
  bind: function bind$$1 (el, binding, vnode) {
    el[NAMESPACE] = {};
  },
  inserted: function inserted (el, binding, vnode) {
    vnode.context.$nextTick(function () { return update(el, { binding: binding, vnode: vnode }); }
    );
    el[NAMESPACE].unbind = on(window, 'resize', function () { return update(el, { binding: binding, vnode: vnode }); }
    );
  },
  componentUpdated: function componentUpdated (el, binding, vnode) {
    vnode.context.$nextTick(function () { return update(el, { binding: binding, vnode: vnode }); }
    );
  },
  unbind: function unbind (el) {
    if (!el[NAMESPACE]) {
      return
    }
    el[NAMESPACE].unbind();
    delete el[NAMESPACE];
  }
}
function update (el, ctx) {
  var opts = getOptions$1(ctx);
  var items = el.children;
  if (!items.length || !isVisible(el)) {
    return
  }
  var data = getRows(items);
  data.rows.forEach(function (row, i) { return row.forEach(function (el, j) {
      toggleClass(el, opts.margin, i !== 0);
      toggleClass(el, opts.firstColumn, j === 0);
    }); }
  );
  opts.onUpdate(el, data);
}
function getOptions$1 (ctx) {
  var ref = ctx.binding;
  var value = ref.value;
  if ("development" !== 'production' && value && !isObject(value)) {
    warn('v-vk-magin -> Object expected as configuration', ctx.vnode.context);
  }
  var options = assign({
    onUpdate: noop,
    margin: 'uk-margin-small-top',
    firstColumn: 'uk-first-column'
  }, value);
  return options
}
function getRows (items) {
  var data = {};
  var rows = [[]];
  data.stacks = true;
  for (var i = 0; i < items.length; i++) {
    var el = items[i];
    var dim = el.getBoundingClientRect();
    if (!dim.height) {
      continue
    }
    for (var j = rows.length - 1; j >= 0; j--) {
      var row = rows[j];
      if (!row[0]) {
        row.push(el);
        break
      }
      var leftDim = row[0].getBoundingClientRect();
      if (dim.top >= Math.floor(leftDim.bottom)) {
        rows.push([el]);
        break
      }
      if (Math.floor(dim.bottom) > leftDim.top) {
        data.stacks = false;
        if (dim.left < leftDim.left && !isRtl) {
          row.unshift(el);
          break
        }
        row.push(el);
        break
      }
      if (j === 0) {
        rows.unshift([el]);
        break
      }
    }
  }
  data.rows = rows;
  return data
}

var Grid = {
  name: 'VkGrid',
  directives: { VkMargin: VkMargin },
  props: assign({}, ElementGrid.props, {
    margin: {
      type: String,
      default: 'uk-grid-margin'
    },
    firstColumn: {
      type: String,
      default: 'uk-first-column'
    }
  }),
  render: function render (h) {
    var clsStack = 'uk-grid-stack';
    var ref = this;
    var margin = ref.margin;
    var firstColumn = ref.firstColumn;
    return h(ElementGrid, {
      props: this.$props,
      directives: [{
        name: 'vk-margin',
        value: {
          margin: margin,
          firstColumn: firstColumn,
          onUpdate: function (el, ref) {
            var stacks = ref.stacks;
            toggleClass(el, clsStack, stacks);
          }
        }
      }]
    }, this.$slots.default)
  }
}

var core = {
  functional: true,
  props: {
    icon: {
      type: String,
      required: true
    },
    ratio: {
      type: [Number, String],
      default: 1
    }
  },
  render: function render (h, ref) {
    var data = ref.data;
    var props = ref.props;
    var icon = props.icon;
    var ratio = props.ratio;
    var ref$1 = data.attrs || {};
    var width = ref$1.width;
    var height = ref$1.height;
    var viewBox = ref$1.viewBox;
    var Icon = h(("vk-icons-" + icon), {
      attrs: { width: width, height: height, viewBox: viewBox }
    });
    if (ratio !== 1) {
      Icon.data.attrs.width *= ratio;
      Icon.data.attrs.height *= ratio;
      Icon.data.attrs.ratio = ratio;
    }
    return Icon
  }
}

var ElementIcon = {
  functional: true,
  render: function (h, ref) {
      var data = ref.data;
      var children = ref.children;
      return h('span', mergeData(data, {
      class: 'uk-icon'
    }), children);
}
}

var ElementIconLink = {
  functional: true,
  props: {
    reset: {
      type: Boolean,
      default: false
    }
  },
  render: function render (h, ref) {
    var data = ref.data;
    var props = ref.props;
    var children = ref.children;
    var reset = props.reset;
    return h('a', mergeData(data, {
      class: ['uk-icon', {
        'uk-icon-link': reset
      }]
    }), children)
  }
}

var ElementIconButton = {
  functional: true,
  render: function render (h, ref) {
    var data = ref.data;
    var children = ref.children;
    return h('a', mergeData(data, {
      class: 'uk-icon uk-icon-button'
    }), children)
  }
}

var ElementIconImage = {
  functional: true,
  props: {
    src: {
      type: String,
      required: true
    }
  },
  render: function render (h, ref) {
    var data = ref.data;
    var props = ref.props;
    var src = props.src;
    return h('span', mergeData(data, {
      class: 'uk-icon uk-icon-image',
      style: {
        'background-image': ("url(" + src + ")")
      }
    }))
  }
}

var icon = {
  name: 'VkIcon',
  functional: true,
  props: core.props,
  render: function render (h, ref) {
    var data = ref.data;
    var props = ref.props;
    return h(ElementIcon, data, [
      h(core, mergeData(data, { props: props }))
    ])
  }
}

var iconLink = {
  name: 'VkIconLink',
  functional: true,
  props: assign({}, core.props, ElementIconLink.props),
  render: function render (h, ref) {
    var data = ref.data;
    var props = ref.props;
    var def = mergeData(data, { props: props });
    return h(ElementIconLink, def, [ h(core, def) ])
  }
}

var iconButton = {
  name: 'VkIconButton',
  functional: true,
  props: core.props,
  render: function render (h, ref) {
    var data = ref.data;
    var props = ref.props;
    return h(ElementIconButton, data, [
      h(core, mergeData(data, { props: props }))
    ])
  }
}

var iconImage = {
  name: 'VkIconImage',
  functional: true,
  props: ElementIconImage.props,
  render: ElementIconImage.render
}

var ElementIconnav = {
  functional: true,
  render: function render (h, ref) {
    var data = ref.data;
    var children = ref.children;
    return h('ul', mergeData(data, {
      class: 'uk-iconnav'
    }), children)
  }
}

var ElementIconnavVertical = {
  functional: true,
  render: function render (h, ref) {
    var data = ref.data;
    var children = ref.children;
    return h('ul', mergeData(data, {
      class: 'uk-iconnav uk-iconnav-vertical'
    }), children)
  }
}

var ElementIconnavItem = {
  functional: true,
  props: {
    href: String,
    target: String,
    active: {
      type: Boolean,
      default: false
    }
  },
  render: function render (h, ref) {
    var props = ref.props;
    var data = ref.data;
    var children = ref.children;
    var active = props.active;
    var href = props.href;
    var target = props.target;
    return h('li', mergeData(data, {
      class: { 'uk-active': active }
    }), [
      h(ElementIconLink, {
        attrs: { href: href, target: target }
      }, children)
    ])
  }
}

var iconnav = {
  name: 'VkIconnav',
  functional: true,
  render: ElementIconnav.render
}

var iconnavVertical = {
  name: 'VkIconnavVertical',
  functional: true,
  render: ElementIconnavVertical.render
}

var iconnav_Item = {
  name: 'VkIconnavItem',
  functional: true,
  props: assign({
    icon: {
      type: String,
      required: true
    }
  }, ElementIconnavItem.props),
  render: function render (h, ref) {
    var data = ref.data;
    var props = ref.props;
    return h(ElementIconnavItem, mergeData(data, { props: props }), [
      h(("vk-icons-" + (props.icon)))
    ])
  }
}

var ElementLabel = {
  functional: true,
  props: {
    type: {
      type: String,
      validator: function (val) { return !val || /^(success|warning|danger)$/.test(val); }
    }
  },
  render: function render (h, ref) {
    var obj;
    var data = ref.data;
    var props = ref.props;
    var children = ref.children;
    var type = props.type;
    return h('span', mergeData(data, {
      class: ['uk-label', ( obj = {}, obj[("uk-label-" + type)] = type, obj)]
    }), children)
  }
}

var label = {
  name: 'VkLabel',
  functional: true,
  props: ElementLabel.props,
  render: ElementLabel.render
}

var SHOWN = 'shown';
var HIDDEN = 'hidden';
var TOGGLE = 'update:show';
var KEYUP = 'keyup';

var doc$2 = typeof document !== 'undefined' && document.documentElement;
var active$1;
var activeModals;
var Transition$2 = {
  functional: true,
  render: function render (h, ref) {
    var data = ref.data;
    var children = ref.children;
    var modal = ref.parent;
    var def = {
      props: {
        css: false,
        appear: true
      },
      on: {
        beforeEnter: function beforeEnter () {
          addClass(doc$2, 'uk-modal-page');
        },
        enter: function enter (el, done) {
          var prev = active$1 !== modal && active$1;
          if (prev && !modal.stack) {
            prev.hide();
            once(prev.$el, 'transitionend', function () { return doEnter(el, done); }, false, function (e) { return e.target === prev.$el; });
            return
          }
          doEnter(el, done);
        },
        afterEnter: function afterEnter (el) {
          activeModals++;
          active$1 = modal;
          active$1.$emit(SHOWN);
        },
        beforeLeave: function beforeLeave (el) {
          removeClass(el, 'uk-open');
        },
        leave: function leave (el, done) {
          once(el, 'transitionend', done, false, function (e) { return e.target === el; });
        },
        afterLeave: function afterLeave (el) {
          activeModals--;
          if (!activeModals) {
            removeClass(doc$2, 'uk-modal-page');
          }
          if (active$1 === modal) {
            active$1 = null;
          }
          modal.$emit(HIDDEN);
        }
      }
    };
    function doEnter (el, done) {
      modal.$root.$el.appendChild(el);
      el.offsetWidth;
      once(el, 'transitionend', done, false, function (e) { return e.target === el; });
      setTimeout(function () { return addClass(el, 'uk-open'); }, 0);
    }
    return h('transition', def, children)
  }
}
on(doc$2, 'click', function (e) {
  if (!active$1) {
    return
  }
  var clickedOut = e.target === active$1.$el;
  if (clickedOut && !active$1.stuck) {
    active$1.$emit(TOGGLE, false);
  }
});
on(doc$2, 'keyup', function (e) {
  active$1 && active$1.$emit(KEYUP, e);
});

var doc$3 = typeof document !== 'undefined' && document.documentElement;
var core$1 = {
  mixins: [EventsMixin],
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    hide: function hide () {
      this.$emit(TOGGLE, false);
    }
  },
  beforeDestroy: function beforeDestroy () {
    if (this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el);
    }
    if (!activeModals) {
      removeClass(doc$3, 'uk-modal-page');
    }
  }
}

var VkModalOverflowAuto = {
  bind: function bind (el, binding) {
    el.vkModalOverflowAutoOff = on(window, 'resize', function () { return update$1(el, binding); });
    addClass(el, 'uk-overflow-auto');
  },
  inserted: function inserted (el, binding, vnode) {
    vnode.context.$nextTick(function () { return update$1(el, binding); });
  },
  componentUpdated: function componentUpdated (el, binding) {
    update$1(el, binding);
  },
  unbind: function unbind (el) {
    el.vkModalOverflowAutoOff();
  }
}
function update$1 (el, binding) {
  var modal = closest(el, '.uk-modal');
  var panel = closest(el, '.uk-modal-dialog');
  if (!panel || !modal) {
    return
  }
  var current = css(el, 'maxHeight');
  css(el, 'maxHeight', 150);
  css(el, 'maxHeight', Math.max(150, 150 + height(modal) - panel.offsetHeight));
  if (current !== css(el, 'maxHeight')) {
    update$1(el, binding);
  }
}

var ElementModal = {
  functional: true,
  props: {
    expand: {
      type: Boolean,
      default: false
    }
  },
  render: function render (h, ref) {
    var children = ref.children;
    var data = ref.data;
    var props = ref.props;
    var expand = props.expand;
    return h('div', mergeData(data, {
      class: ['uk-modal', {
        'uk-modal-container': expand
      }],
      style: {
        display: 'block'
      }
    }), children)
  }
}

var ElementModalFull = {
  functional: true,
  render: function render (h, ref) {
    var children = ref.children;
    var data = ref.data;
    var props = ref.props;
    return h('div', mergeData(data, {
      class: 'uk-modal uk-modal-full',
      style: {
        display: 'block'
      }
    }), children)
  }
}

var IconClose = {
  functional: true,
  render: function (h, ctx) {
    var props = ctx.props;
    var width = props.width || 14;
    var height = props.height || 14;
    var viewBox = props.viewBox || '0 0 14 14';
    return h('svg', {
      attrs: {
        version: '1.1',
        width: width,
        height: height,
        viewBox: viewBox
      },
      domProps: {
        innerHTML: '<path fill="none" stroke="#000" stroke-width="1.1" d="M1 1l12 12M13 1L1 13"/>'
      }
    })
  }
}

var IconCloseLarge = {
  functional: true,
  render: function (h, ctx) {
    var props = ctx.props;
    var width = props.width || 20;
    var height = props.height || 20;
    var viewBox = props.viewBox || '0 0 20 20';
    return h('svg', {
      attrs: {
        version: '1.1',
        width: width,
        height: height,
        viewBox: viewBox
      },
      domProps: {
        innerHTML: '<path fill="none" stroke="#000" stroke-width="1.4" d="M1 1l18 18M19 1L1 19"/>'
      }
    })
  }
}

var ElementModalClose = {
  functional: true,
  props: {
    large: {
      type: Boolean,
      default: false
    },
    outside: {
      type: Boolean,
      default: false
    }
  },
  render: function render (h, ref) {
    var obj;
    var data = ref.data;
    var props = ref.props;
    var large = props.large;
    var outside = props.outside;
    var def = {
      class: ['uk-close uk-icon', ( obj = {
        'uk-close-large': large
      }, obj["uk-modal-close-outside"] = outside, obj["uk-modal-close-default"] = !outside, obj)],
      attrs: {
        type: 'button'
      }
    };
    return h('button', mergeData(data, def), [
      h(large ? IconCloseLarge : IconClose)
    ])
  }
}

var ElementModalFullClose = {
  functional: true,
  props: {
    large: {
      type: Boolean,
      default: false
    }
  },
  render: function render (h, ref) {
    var data = ref.data;
    var props = ref.props;
    var large = props.large;
    var def = {
      class: ['uk-close uk-icon uk-modal-close-full', {
        'uk-close-large': large
      }],
      attrs: {
        type: 'button'
      }
    };
    return h('button', mergeData(data, def), [
      h(large ? IconCloseLarge : IconClose)
    ])
  }
}

var ElementModalTitle = {
  functional: true,
  props: {
    tag: {
      type: String,
      default: 'h2'
    }
  },
  render: function render (h, ref) {
    var props = ref.props;
    var data = ref.data;
    var children = ref.children;
    var tag = props.tag;
    return h(tag, mergeData(data, {
      class: 'uk-modal-title'
    }), children)
  }
}

var ElementModalBody = {
  functional: true,
  render: function render (h, ref) {
    var props = ref.props;
    var data = ref.data;
    var children = ref.children;
    return h('div', mergeData(data, {
      class: 'uk-modal-body'
    }), children)
  }
}

var ElementModalDialog = {
  functional: true,
  render: function render (h, ref) {
    var props = ref.props;
    var data = ref.data;
    var children = ref.children;
    return h('div', mergeData(data, {
      class: 'uk-modal-dialog'
    }), children)
  }
}

var ElementModalFooter = {
  functional: true,
  render: function render (h, ref) {
    var props = ref.props;
    var data = ref.data;
    var children = ref.children;
    return h('div', mergeData(data, {
      class: 'uk-modal-footer'
    }), children)
  }
}

var ElementModalHeader = {
  functional: true,
  render: function render (h, ref) {
    var props = ref.props;
    var data = ref.data;
    var children = ref.children;
    return h('div', mergeData(data, {
      class: 'uk-modal-header'
    }), children)
  }
}

var modal = {
  name: 'VkModal',
  extends: core$1,
  directives: {
    VkModalOverflowAuto: VkModalOverflowAuto
  },
  props: {
    stuck: {
      type: Boolean,
      default: false
    },
    overflowAuto: {
      type: Boolean,
      default: false
    },
    center: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: ''
    },
    stack: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    widthClasses: function widthClasses () {
      return this.size
        ? this.size.split(' ').map(function (size) { return ("uk-width-" + size); })
        : ''
    }
  },
  render: function render (h) {
    var this$1 = this;
    var def = {
      class: {
        'uk-flex uk-flex-top': this.center
      },
      style: {
        display: this.center ? 'flex' : 'block'
      },
      props: {
        expand: this.size === 'container'
      },
      directives: [{
        name: 'show',
        value: this.show
      }],
      on: {
      }
    };
    Object.keys(this.$slots).forEach(function (slot) { return each(this$1.$slots[slot], function (node) {
      if (node.fnOptions && node.fnOptions.name === 'VkModalClose') {
        assign(node.data, {
          on: { click: function (e) { return this$1.$emit(TOGGLE, false); } }
        });
      }
    }); });
    var modal = h(ElementModal, def, [
      h(ElementModalDialog, {
        class: [this.widthClasses, {
          'uk-margin-auto-vertical': this.center
        }]
      }, [
        this.$slots.dialog && this.$slots.dialog,
        this.$slots.header && h(ElementModalHeader, this.$slots.header),
        this.$slots.default && h(ElementModalBody, {
          directives: this.overflowAuto
            ? [{ name: 'vk-modal-overflow-auto' }]
            : []
        }, this.$slots.default),
        this.$slots.footer && h(ElementModalFooter, this.$slots.footer)
      ])
    ]);
    return h(Transition$2, [ modal ])
  }
}

var NAMESPACE$1 = '__vkHeightViewport';
var VkHeightViewport = {
  bind: function bind$$1 (el, binding, vnode) {
    el[NAMESPACE$1] = {};
  },
  inserted: function inserted (el, binding, vnode) {
    vnode.context.$nextTick(function () { return update$2(el, { binding: binding, vnode: vnode }); }
    );
    el[NAMESPACE$1].unbind = on(window, 'resize', function () { return update$2(el, { binding: binding, vnode: vnode }); }
    );
  },
  componentUpdated: function componentUpdated (el, binding, vnode) {
    vnode.context.$nextTick(function () { return update$2(el, { binding: binding, vnode: vnode }); }
    );
  },
  unbind: function unbind (el) {
    if (!el[NAMESPACE$1]) {
      return
    }
    el[NAMESPACE$1].unbind();
    delete el[NAMESPACE$1];
  }
}
function getOptions$2 (ctx) {
  var ref = ctx.binding;
  var value = ref.value;
  var modifiers = ref.modifiers;
  if ("development" !== 'production' && value && !isObject(value)) {
    warn('v-vk-height-viewport -> Object expected as configuration', ctx.vnode.context);
  }
  var options = assign({
    minHeight: 0,
    expand: false,
    offsetTop: false,
    offsetBottom: false
  }, modifiers, value);
  return options
}
function update$2 (el, ctx) {
  var opts = getOptions$2(ctx);
  css(el, 'boxSizing', 'border-box');
  var viewport = height(window);
  var minHeight;
  var offsetTop = 0;
  if (opts.expand) {
    css(el, {height: '', minHeight: ''});
    var diff = viewport - offsetHeight(document.documentElement);
    if (diff > 0) {
      minHeight = offsetHeight(el) + diff;
    }
  } else {
    var ref = offset(el);
    var top = ref.top;
    if (top < viewport / 2 && opts.offsetTop) {
      offsetTop += top;
    }
    if (opts.offsetBottom === true) {
      offsetTop += offsetHeight(el.nextElementSibling);
    } else if (isNumeric(opts.offsetBottom)) {
      offsetTop += (viewport / 100) * opts.offsetBottom;
    } else if (opts.offsetBottom && endsWith(opts.offsetBottom, 'px')) {
      offsetTop += toFloat(opts.offsetBottom);
    } else if (isString(opts.offsetBottom)) {
      offsetTop += offsetHeight(query(opts.offsetBottom, el));
    }
    minHeight = offsetTop ? ("calc(100vh - " + offsetTop + "px)") : '100vh';
  }
  if (!minHeight) {
    return
  }
  css(el, { height: '', minHeight: minHeight });
  var elHeight = el.offsetHeight;
  if (opts.minHeight && opts.minHeight > elHeight) {
    css(el, 'minHeight', opts.minHeight);
  }
  if (viewport - offsetTop >= elHeight) {
    css(el, 'height', minHeight);
  }
}
function offsetHeight (el) {
  return el && (el.offsetHeight || 0)
}

var modalFull = {
  name: 'VkModalFull',
  extends: core$1,
  directives: {
    VkHeightViewport: VkHeightViewport
  },
  render: function render (h) {
    var def = {
      props: {
        expand: 'full'
      },
      directives: [{
        name: 'show',
        value: this.show
      }]
    };
    var modal = h(ElementModalFull, def, [
      h(ElementModalDialog, {
        class: 'uk-flex uk-flex-center uk-flex-middle',
        directives: [{
          name: 'vk-height-viewport'
        }]
      }, this.$slots.default)
    ]);
    return h(Transition$2, [ modal ])
  }
}

var modal_Close = {
  name: 'VkModalClose',
  functional: true,
  props: ElementModalClose.props,
  render: ElementModalClose.render
}

var modalFull_Close = {
  name: 'VkModalFullClose',
  functional: true,
  props: ElementModalFullClose.props,
  render: ElementModalFullClose.render
}

var modal_Title = {
  name: 'VkModalTitle',
  functional: true,
  props: ElementModalTitle.props,
  render: ElementModalTitle.render
}

var ElementNav = {
  functional: true,
  props: {
    center: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'default',
      validator: function (val) { return /^(default|primary|blank)$/.test(val); }
    }
  },
  render: function render (h, ref) {
    var obj;
    var props = ref.props;
    var data = ref.data;
    var children = ref.children;
    var center = props.center;
    var type = props.type;
    return h('ul', mergeData(data, {
      class: ['uk-nav', ( obj = {
        'uk-nav-center': center
      }, obj[("uk-nav-" + type)] = type, obj)]
    }), children)
  }
}

var ElementNavDropdown = {
  functional: true,
  render: function render (h, ref) {
    var data = ref.data;
    var children = ref.children;
    return h('ul', mergeData(data, {
      class: 'uk-nav uk-dropdown-nav'
    }), children)
  }
}

var ElementNavItem = {
  functional: true,
  props: {
    icon: {},
    href: String,
    target: String,
    title: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  render: function render (h, ref) {
    var props = ref.props;
    var data = ref.data;
    var active = props.active;
    var icon$$1 = props.icon;
    var title = props.title;
    var href = props.href;
    var target = props.target;
    var content = title;
    if (icon$$1) {
      content = [
        h(ElementIcon, {
          class: 'uk-margin-small-right'
        }, [ icon$$1 ]),
        h('span', {
          class: 'uk-text-middle'
        }, title)
      ];
    }
    return h('li', mergeData(data, {
      class: { 'uk-active': active }
    }), [
      h('a', {
        attrs: { href: href, target: target }
      }, content)
    ])
  }
}

var ElementNavItemDivider = {
  functional: true,
  render: function render (h, ref) {
    var data = ref.data;
    return h('li', mergeData(data, {
      class: 'uk-nav-divider'
    }))
  }
}

var ElementNavItemHeader = {
  functional: true,
  props: {
    title: {
      type: String,
      required: true
    }
  },
  render: function render (h, ref) {
    var data = ref.data;
    var props = ref.props;
    return h('li', mergeData(data, {
      class: 'uk-nav-header'
    }), props.title)
  }
}

var ElementNavItemParent = {
  functional: true,
  props: {
    href: String,
    target: String,
    title: {
      type: String,
      required: true
    }
  },
  render: function render (h, ref) {
    var props = ref.props;
    var data = ref.data;
    var children = ref.children;
    var title = props.title;
    var href = props.href;
    var target = props.target;
    return h('li', mergeData(data, {
      class: 'uk-parent'
    }), [
      h('a', {
        attrs: { href: href, target: target }
      }, [ title ]),
      h('ul', {
        class: 'uk-nav-sub'
      }, children)
    ])
  }
}

var nav$1 = {
  name: 'VkNav',
  functional: true,
  props: ElementNav.props,
  render: ElementNav.render
}

var navDropdown = {
  name: 'VkNavDropdown',
  functional: true,
  render: ElementNavDropdown.render
}

var nav_Item = {
  name: 'VkNavItem',
  functional: true,
  props: assign({}, ElementNavItem.props, {
    icon: {
      type: String
    }
  }),
  render: function render (h, ref) {
    var data = ref.data;
    var props = ref.props;
    props.icon = props.icon && h(("vk-icons-" + (props.icon)));
    return h(ElementNavItem, mergeData(data, { props: props }))
  }
}

var nav_ItemDivider = {
  name: 'VkNavItemDivider',
  functional: true,
  render: ElementNavItemDivider.render
}

var nav_ItemHeader = {
  name: 'VkNavItemHeader',
  functional: true,
  props: ElementNavItemHeader.props,
  render: ElementNavItemHeader.render
}

var nav_ItemParent = {
  name: 'VkNavItemParent',
  functional: true,
  props: ElementNavItemParent.props,
  render: ElementNavItemParent.render
}

var ElementNavbarNavigation = {
  functional: true,
  props: {
    align: {
      type: String,
      default: 'left',
      validator: function (val) { return /^(left|center(-left|-right)?|right)$/.test(val); }
    }
  },
  render: function render (h, ref) {
    var data = ref.data;
    var props = ref.props;
    var children = ref.children;
    var align = props.align;
    var wrapContent = /center-(left|right)/.test(align);
    return h('div', mergeData(data, {
      class: ("uk-navbar-" + align)
    }), [
      wrapContent
        ? h('div', children)
        : children
    ])
  }
}

function renderSlots (h, slots) {
  return [
    (slots.left || slots.default) && h(ElementNavbarNavigation, [
      slots.left, slots.default
    ]),
    (slots.center || slots['center-left'] || slots['center-right']) && h(ElementNavbarNavigation, {
      props: { align: 'center' }
    }, [
      slots['center-left'] && h(ElementNavbarNavigation, {
        props: { align: 'center-left' }
      }, slots['center-left']),
      slots.center && slots.center,
      slots['center-right'] && h(ElementNavbarNavigation, {
        props: { align: 'center-right' }
      }, slots['center-right'])
    ]),
    slots.right && h(ElementNavbarNavigation, {
      props: { align: 'right' }
    }, slots.right)
  ]
}

var ElementNavbar = {
  functional: true,
  props: {
    container: {
      type: Boolean,
      default: true
    },
    transparent: {
      type: Boolean,
      default: false
    }
  },
  render: function render (h, ref) {
    var props = ref.props;
    var data = ref.data;
    var slots = ref.slots;
    var container = props.container;
    var transparent = props.transparent;
    return h('nav', mergeData(data, {
      class: ['uk-navbar', {
        'uk-navbar-container': container && !transparent,
        'uk-navbar-transparent': transparent
      }]
    }), renderSlots(h, slots()))
  }
}

var ElementNavbarFull = {
  functional: true,
  props: {
    expanded: {
      type: Boolean,
      default: false
    },
    transparent: {
      type: Boolean,
      default: false
    }
  },
  render: function render (h, ref) {
    var props = ref.props;
    var data = ref.data;
    var slots = ref.slots;
    var expanded = props.expanded;
    var transparent = props.transparent;
    return h('nav', mergeData(data, {
      class: ['uk-navbar-container', {
        'uk-navbar-transparent': transparent
      }]
    }), [
      h('div', {
        class: ['uk-container', {
          'uk-container-expand': expanded
        }]
      }, [
        h('div', {
          class: 'uk-navbar'
        }, renderSlots(h, slots()))
      ])
    ])
  }
}

var ElementNavbarDropbar = {
  functional: true,
  props: {
    slide: {
      type: Boolean,
      default: false
    }
  },
  render: function render (h, ref) {
    var data = ref.data;
    var props = ref.props;
    var slide = props.slide;
    return h('div', mergeData(data, {
      class: ['uk-navbar-dropbar', {
        'uk-navbar-dropbar-slide': slide
      }]
    }))
  }
}

var ElementNavbarItem = {
  functional: true,
  render: function render (h, ref) {
    var data = ref.data;
    var children = ref.children;
    return h('div', mergeData(data, {
      class: 'uk-navbar-item'
    }), children)
  }
}

var ElementNavbarLogo = {
  functional: true,
  render: function render (h, ref) {
    var data = ref.data;
    var children = ref.children;
    return h('span', mergeData(data, {
      class: 'uk-navbar-item uk-logo'
    }), children)
  }
}

var IconToggle = {
  functional: true,
  render: function (h, ctx) {
    var props = ctx.props;
    var width = props.width || 20;
    var height = props.height || 20;
    var viewBox = props.viewBox || '0 0 20 20';
    return h('svg', {
      attrs: {
        version: '1.1',
        width: width,
        height: height,
        viewBox: viewBox
      },
      domProps: {
        innerHTML: '<path d="M0 9h20v2H0zM0 3h20v2H0zM0 15h20v2H0z"/>'
      }
    })
  }
}

var ElementNavbarToggle = {
  functional: true,
  props: {
    title: {
      type: String,
      default: ''
    },
    icon: {
      type: Boolean,
      default: true
    }
  },
  render: function render (h, ref) {
    var props = ref.props;
    var data = ref.data;
    var children = ref.children;
    var icon$$1 = props.icon;
    var title = props.title;
    var Icon = icon$$1 && h(ElementIcon, {
      class: 'uk-navbar-toggle-icon'
    }, [ h(IconToggle) ]);
    return h('a', mergeData(data, {
      class: 'uk-navbar-toggle'
    }), [
      Icon,
      title && h('span', {
        class: 'uk-margin-small-left'
      }, title)
    ])
  }
}

var ElementNavbarNav = {
  functional: true,
  render: function render (h, ref) {
    var data = ref.data;
    var children = ref.children;
    return h('ul', mergeData(data, {
      class: 'uk-navbar-nav'
    }), children)
  }
}

var ElementNavbarNavItem = {
  functional: true,
  props: {
    icon: {},
    href: String,
    target: String,
    title: {
      type: String
    },
    subtitle: {
      type: String
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  render: function render (h, ref) {
    var props = ref.props;
    var data = ref.data;
    var children = ref.children;
    var active = props.active;
    var title = props.title;
    var subtitle = props.subtitle;
    var icon$$1 = props.icon;
    var href = props.href;
    var target = props.target;
    var Icon = icon$$1 && h(ElementIcon, {
      class: 'uk-margin-small-right'
    }, [ icon$$1 ]);
    var Subtitle = subtitle && h('div', [ title, h('div', {
      class: 'uk-navbar-subtitle'
    }, subtitle) ]);
    return h('li', mergeData(data, {
      class: { 'uk-active': active }
    }), [
      h('a', {
        attrs: { href: href, target: target }
      }, [
        Icon,
        Subtitle || title
      ]),
      children
    ])
  }
}

var ElementNavbarNavDropdownNav = {
  functional: true,
  render: function render (h, ref) {
    var data = ref.data;
    var children = ref.children;
    return h('ul', mergeData(data, {
      class: 'uk-nav uk-navbar-dropdown-nav'
    }), children)
  }
}

var navbar = {
  name: 'VkNavbar',
  functional: true,
  props: ElementNavbar.props,
  render: ElementNavbar.render
}

var navbarFull = {
  name: 'VkNavbarFull',
  functional: true,
  props: ElementNavbarFull.props,
  render: ElementNavbarFull.render
}

var SHOW$1 = SHOW;
var HIDE$1 = HIDE;
var navbarDropbar = {
  name: 'VkNavbarDropbar',
  props: {
    mode: {
      type: String,
      default: 'slide',
      validator: function (val) { return /^(slide|push)$/.test(val); }
    },
    duration: {
      type: Number,
      default: 200
    }
  },
  methods: {
    transitionDropbar: function transitionDropbar (dropdownEl) {
      var el = dropdownEl;
      var marginTop = toFloat(css(el, 'margin-top'));
      var marginBottom = toFloat(css(el, 'margin-bottom'));
      var height$$1 = el.offsetHeight + marginTop + marginBottom;
      this.transitionTo(height$$1, el);
    },
    transitionTo: function transitionTo (newHeight, el) {
      var dropbar = this.$refs.dropbar;
      var oldHeight = isVisible(dropbar) ? height(dropbar) : 0;
      el = oldHeight < newHeight && el;
      css(el, { height: oldHeight, overflow: 'hidden' });
      height(dropbar, oldHeight);
      Transition.cancel([el, dropbar]);
      return Transition
        .start([el, dropbar], { height: newHeight }, this.duration)
        .catch(noop)
        .finally(function () { return css(el, { height: '', overflow: '' }); })
    }
  },
  mounted: function mounted () {
    var this$1 = this;
    var dropdowns = get(this, '$children', [])
      .filter(function (child) { return /NavbarNavDropdown/.test(child.$options.name); })
      .map(function (c) { return c.$children[0]; });
    dropdowns.forEach(function (drop) {
      drop.$vnode.data.class['uk-navbar-dropdown-dropbar'] = true;
      drop.$on(SHOW$1, function () {
        this$1.$nextTick(function () {
          this$1.transitionDropbar(drop.$el);
        });
      });
      drop.$on(HIDE$1, function () {
        this$1.$nextTick(function () {
          var thereAreActiveDrops = active && within(active.$el, this$1.$el);
          if (!thereAreActiveDrops) {
            this$1.transitionDropbar(drop.$el);
          }
        });
      });
    });
  },
  render: function render (h) {
    return h('div', {
      class: 'uk-position-relative'
    }, [
      this.$slots.default,
      h(ElementNavbarDropbar, {
        ref: 'dropbar',
        props: {
          slide: this.mode === 'slide'
        }
      })
    ])
  }
}

var navbar_Item = {
  name: 'VkNavbarItem',
  functional: true,
  render: ElementNavbarItem.render
}

var navbar_Logo = {
  name: 'VkNavbarLogo',
  functional: true,
  render: ElementNavbarLogo.render
}

var navbar_Toggle = {
  name: 'VkNavbarToggle',
  functional: true,
  props: ElementNavbarToggle.props,
  render: ElementNavbarToggle.render
}

var navbar_Nav = {
  name: 'VkNavbarNav',
  functional: true,
  render: ElementNavbarNav.render
}

var navbar_Nav_Item = {
  name: 'VkNavbarNavItem',
  functional: true,
  props: assign({}, ElementNavbarNavItem.props, {
    icon: {
      type: String
    }
  }),
  render: function render (h, ref) {
    var data = ref.data;
    var props = ref.props;
    props.icon = props.icon && h(("vk-icons-" + (props.icon)));
    return h(ElementNavbarNavItem, mergeData(data, { props: props }))
  }
}

var SHOW$2 = SHOW;
var navbar_Nav_Dropdown = {
  name: 'VkNavbarNavDropdown',
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String
    },
    justified: {
      type: Boolean,
      default: false
    },
    align: {
      type: String,
      default: isRtl ? 'right' : 'left',
      validator: function (val) { return /^(left|center|right)$/.test(val); }
    },
    navbarAligned: {
      type: Boolean,
      default: false
    },
    mode: Drop.props.mode,
    offset: Drop.props.offset,
    animation: Drop.props.animation,
    duration: Drop.props.duration,
    delayShow: Drop.props.delayShow,
    delayHide: Drop.props.delayHide
  },
  computed: {
    navbar: function navbar () {
      return query('!.uk-navbar', this.$el)
    },
    dropbar: function dropbar () {
      return /NavbarDropbar/.test(get(this, '$parent.$options.name', ''))
        ? this.$parent
        : false
    }
  },
  mounted: function mounted () {
    var ref = this;
    var mode = ref.mode;
    var ref$1 = this.$refs.drop;
    var on = ref$1.on;
    var toggle = ref$1.toggle;
    var show = ref$1.show;
    var hide = ref$1.hide;
    var target = this.$refs.drop.$refs.target;
    if (/click/.test(mode) || hasTouch) {
      on(target, 'click', toggle);
    }
    if (/hover/.test(mode)) {
      on(target, pointerEnter, function (e) {
        if (isTouch(e)) {
          return
        }
        e.preventDefault();
        show();
      });
      on(this.dropbar ? this.dropbar.$el : target, pointerLeave, function (e) {
        if (isTouch(e)) {
          return
        }
        e.preventDefault();
        hide();
      });
    }
  },
  render: function render (h) {
    var this$1 = this;
    var obj, obj$1, obj$2;
    var ref = this;
    var title = ref.title;
    var justified = ref.justified;
    var mode = ref.mode;
    var align = ref.align;
    var navbarAligned = ref.navbarAligned;
    var subtitle = ref.subtitle;
    var defaultSlots = this.$slots.default || [];
    var childrenNodes = defaultSlots.filter(function (n) { return n.tag; });
    var colCount = childrenNodes.length;
    var Subtitle = subtitle && h('div', [ title, h('div', {
      class: 'uk-navbar-subtitle'
    }, subtitle) ]);
    return h('li', [
      h('a', [Subtitle || title]),
      h(Drop, {
        on: ( obj = {}, obj[SHOW$2] = function (e) {
            this$1.$forceUpdate();
          }, obj),
        nativeOn: ( obj$1 = {}, obj$1[pointerEnter] = function (e) {
            this$1.$refs.drop.clearTimers();
            if (/hover/.test(mode)) {
              this$1.$refs.drop.show();
            }
          }, obj$1[pointerLeave] = function (e) {
            if (!this$1.dropbar && /hover/.test(mode)) {
              this$1.$refs.drop.hide();
            }
          }, obj$1),
        ref: 'drop',
        class: ( obj$2 = {
          'uk-navbar-dropdown-dropbar': Boolean(this.dropbar),
          'uk-navbar-dropdown-boundary': justified || navbarAligned
        }, obj$2[("uk-navbar-dropdown-width-" + colCount)] = colCount > 1 && !justified, obj$2),
        props: assign({}, this.$props, {
          mode: '',
          position: justified
            ? 'bottom-justify'
            : ("bottom-" + align),
          mainClass: 'uk-navbar-dropdown',
          flip: justified ? 'x' : undefined,
          boundary: '!nav',
          boundaryAlign: justified || navbarAligned
        })
      }, [
        colCount >= 2
          ? h(Grid, {
            class: [
              'uk-navbar-dropdown-grid',
              ("uk-child-width-1-" + colCount + (colCount > 2 ? '@m' : ''))
            ]
          }, childrenNodes.map(function (child) { return h('div', [ child ]); }
          ))
          : defaultSlots
      ])
    ])
  }
}

var navbar_Nav_Dropdown_Nav = {
  name: 'VkNavbarNavDropdownNav',
  functional: true,
  render: ElementNavbarNavDropdownNav.render
}

var NAMESPACE$2 = '__vkNotification';
var MessageDirective = {
  inserted: function inserted (el, binding, vnode) {
    el[NAMESPACE$2] = {};
    var close = function () { return doClose(el, vnode); };
    var opts = el[NAMESPACE$2].options = binding.value;
    if (opts.timeout) {
      el[NAMESPACE$2].timer = setTimeout(close, opts.timeout);
    }
    on(el, 'click', close);
    on(el, pointerEnter, function () {
      if (el[NAMESPACE$2].timer) {
        clearTimeout(el[NAMESPACE$2].timer);
      }
    });
    on(el, pointerLeave, function () {
      if (opts.timeout) {
        el[NAMESPACE$2].timer = setTimeout(close, opts.timeout);
      }
    });
  },
  unbind: function unbind (el) {
    if (!el[NAMESPACE$2]) {
      return
    }
    clearTimeout(el[NAMESPACE$2].timer);
    delete el[NAMESPACE$2];
  }
}
function doClose (el, vnode) {
  clearTimeout(el[NAMESPACE$2].timer);
  trigger(el, 'close');
}

var MessageTransition = {
  functional: true,
  render: function render (h, ref) {
    var data = ref.data;
    var children = ref.children;
    var parent = ref.parent;
    var def = {
      props: {
        css: false,
        appear: true,
        tag: 'div'
      },
      on: {
        enter: function enter (el, done) {
          var marginBottom = toFloat(css(el, 'marginBottom'));
          css(el, { opacity: 0, marginTop: -el.offsetHeight, marginBottom: 0 });
          Transition.start(el, {
            opacity: 1,
            marginTop: 0,
            marginBottom: marginBottom
          }).then(done);
        },
        leave: function leave (el, done) {
          Transition.start(el, {
            opacity: 0,
            marginTop: -el.offsetHeight,
            marginBottom: 0
          }).then(done);
        }
      }
    };
    return h('transition-group', mergeData(data, def), children)
  }
}

var ElementNotification = {
  functional: true,
  props: {
    position: {
      type: String,
      default: 'top-center',
      validator: function (val) { return /^(top|bottom)-(left|center|right)$/.test(val); }
    }
  },
  render: function render (h, ref) {
    var props = ref.props;
    var data = ref.data;
    var children = ref.children;
    var position = props.position;
    return h('div', mergeData(data, {
      class: [
        'uk-notification',
        ("uk-notification-" + position)
      ]
    }), children)
  }
}

var ElementNotificationClose = {
  functional: true,
  render: function render (h, ref) {
    var data = ref.data;
    return h(ElementIconLink, mergeData(data, {
      class: 'uk-notification-close uk-close'
    }), [
      h(IconClose)
    ])
  }
}

var ElementNotificationMessage = {
  functional: true,
  props: {
    status: {
      type: String,
      default: '',
      validator: function (val) { return !val || /^(primary|success|warning|danger)$/.test(val); }
    }
  },
  render: function render (h, ref) {
    var obj;
    var props = ref.props;
    var data = ref.data;
    var children = ref.children;
    var status = props.status;
    return h('div', mergeData(data, {
      class: ['uk-notification-message', ( obj = {}, obj[("uk-notification-message-" + status)] = status, obj)]
    }), children)
  }
}

var isNotProd = "development" !== 'production';
var notification = {
  name: 'VkNotification',
  directives: {
    MessageDirective: MessageDirective
  },
  props: assign({}, ElementNotification.props, {
    timeout: {
      type: Number,
      default: 5000
    },
    messages: {
      type: Array,
      default: function () { return []; },
      validator: function (val) {
        if (!val.every(function (m) { return isObject(m) || isString(m); })) {
          isNotProd && warn('vk-notification -> each message is expected as Object or String');
          return false
        }
        return true
      }
    },
    status: ElementNotificationMessage.props.status
  }),
  computed: {
    $messages: function $messages () {
      var this$1 = this;
      var messages = this.messages.map(function (val) {
        var msg = isString(val) ? { message: val } : val;
        return assign({ status: this$1.status, timeout: this$1.timeout }, msg)
      });
      messages = this.removeDuplicates(messages);
      return messages
    }
  },
  methods: {
    triggerRemove: function triggerRemove (msg) {
      var this$1 = this;
      this.closeQueue = this.closeQueue || [];
      this.closeQueue.push(msg);
      clearTimeout(this.timer);
      this.timer = setTimeout(function () {
        var queue = [].concat( this$1.closeQueue );
        var messages = [].concat( this$1.$messages );
        this$1.closeQueue = [];
        queue.forEach(function (msg) {
          var index = messages.findIndex(function (m) { return m === msg; });
          messages.splice(index, 1);
        });
        this$1.$emit('update:messages', messages);
      });
    },
    removeDuplicates: function removeDuplicates (values) {
      var this$1 = this;
      var messages = [];
      var isDuplicated = function (msg) { return messages.find(function (m) {
        return this$1.getMessageId(m) === this$1.getMessageId(msg)
      }); };
      for (var i = 0; i < values.length; i++) {
        if (isDuplicated(values[i])) {
          isNotProd && tip('vk-notification -> duplicate messages are filtered out, consider adding a unique `key` to those.');
          continue
        }
        messages.push(values[i]);
      }
      return messages
    },
    getMessageId: function getMessageId (msg) {
      var validKeys = ['message', 'status', 'key', 'timeout'];
      return Object.keys(msg)
        .filter(function (k) { return validKeys.find(function (k) { return k; }); })
        .map(function (k) { return msg[k]; })
        .join(':')
    }
  },
  render: function render (h) {
    var this$1 = this;
    var ref = this;
    var position = ref.position;
    var MessageSlot = get(this, '$scopedSlots.default', function (msg) { return msg.message; });
    return h(ElementNotification, {
      props: { position: position }
    }, [
      h(MessageTransition, [
        this.$messages.map(function (msg, index) { return h(ElementNotificationMessage, {
            key: this$1.getMessageId(msg),
            props: msg,
            directives: [{
              name: 'message-directive',
              value: msg
            }],
            on: {
              close: function () { return this$1.triggerRemove(msg); }
            }
          }, [
            MessageSlot(msg),
            h(ElementNotificationClose)
          ]); }
        )
      ])
    ])
  }
}

var SHOWN$1 = 'shown';
var HIDDEN$1 = 'hidden';
var TOGGLE$1 = 'update:show';
var KEYUP$1 = 'keyup';

var active$2;
var scrollbarWidth;
var win$3 = typeof window !== 'undefined' && window;
var body = typeof document !== 'undefined' && document.body;
var doc$4 = typeof document !== 'undefined' && document.documentElement;
var scroll;
var getScrollbarWidth = function () { return width(win$3) - doc$4.offsetWidth; };
var events = {
  beforeEnter: function (el) {
    var ref = el.__vkOffcanvas;
    var $refs = ref.$refs;
    var $props = ref.$props;
    scrollbarWidth = getScrollbarWidth();
    scroll = scroll || { x: win$3.pageXOffset, y: win$3.pageYOffset };
    addClass(doc$4, 'uk-offcanvas-page');
    addClass(body, 'uk-offcanvas-container');
    if ($props.flipped) {
      addClass($refs.bar, 'uk-offcanvas-bar-flip');
      addClass($refs.content.parentNode, 'uk-offcanvas-flip');
    }
    if ($props.overlay) {
      addClass(body, 'uk-offcanvas-overlay');
    }
  },
  afterEnter: function afterEnter (el) {
    var ref = el.__vkOffcanvas;
    var $refs = ref.$refs;
    var $props = ref.$props;
    if ($props.overlay) {
      width($refs.content, width(win$3) - scrollbarWidth);
      height($refs.content, height(win$3));
      if (scroll) {
        $refs.content.scrollTop = scroll.y;
      }
    }
    active$2 = el.__vkOffcanvas;
    active$2.$emit(SHOWN$1);
  },
  afterLeave: function afterLeave (el) {
    var ref = el.__vkOffcanvas;
    var $refs = ref.$refs;
    var $props = ref.$props;
    if (!$props.overlay) {
      scroll = { x: win$3.pageXOffset, y: win$3.pageYOffset };
    } else if (!scroll) {
      var ref$1 = $refs.content;
      var x = ref$1.scrollLeft;
      var y = ref$1.scrollTop;
      scroll = { x: x, y: y };
    }
    removeClass($refs.bar, 'uk-offcanvas-bar-flip');
    removeClass($refs.content.parentNode, 'uk-offcanvas-flip');
    removeClass(doc$4, 'uk-offcanvas-page');
    removeClass(body, 'uk-offcanvas-container');
    removeClass(body, 'uk-offcanvas-overlay');
    body.scrollTop = scroll.y;
    css(body, 'overflowY', '');
    css(doc$4, 'overflowY', '');
    width($refs.content, '');
    height($refs.content, '');
    win$3.scrollTo(scroll.x, scroll.y);
    scroll = null;
    if (active$2 === el.__vkOffcanvas) {
      active$2 = null;
    }
    el.__vkOffcanvas.$emit(HIDDEN$1);
  }
};
on(doc$4, 'click', function (e) {
  if (!active$2) {
    return
  }
  var $refs = active$2.$refs;
  var $props = active$2.$props;
  var clickedOut = !$refs.bar.contains(e.target);
  if (clickedOut && !$props.stuck) {
    active$2.$emit(TOGGLE$1, false);
  }
});
on(doc$4, 'keyup', function (e) {
  active$2 && active$2.$emit(KEYUP$1, e);
});

var ElementOffcanvas = {
  functional: true,
  render: function render (h, ref) {
    var data = ref.data;
    var children = ref.children;
    return h('div', mergeData(data, {
      class: 'uk-offcanvas',
      style: {
        display: 'block'
      }
    }), children)
  }
}

var ElementOffcanvasContent = {
  functional: true,
  render: function render (h, ref) {
    var data = ref.data;
    var children = ref.children;
    return h('div', mergeData(data, {
      class: 'uk-offcanvas-content'
    }), children)
  }
}

var ElementOffcanvasBar = {
  functional: true,
  render: function render (h, ref) {
    var data = ref.data;
    var children = ref.children;
    return h('div', mergeData(data, {
      class: 'uk-offcanvas-bar'
    }), children)
  }
}

var ElementOffcanvasClose = {
  functional: true,
  props: {
    large: {
      type: Boolean,
      default: false
    }
  },
  render: function render (h, ref) {
    var data = ref.data;
    var props = ref.props;
    var large = props.large;
    var def = {
      class: ['uk-offcanvas-close uk-close uk-icon', {
        'uk-close-large': large
      }],
      attrs: {
        type: 'button'
      }
    };
    return h('button', mergeData(data, def), [
      h(large ? IconCloseLarge : IconClose)
    ])
  }
}

var TransitionNone = {
  functional: true,
  render: function render (h, ref) {
    var data = ref.data;
    var children = ref.children;
    var def = {
      props: {
        css: false
      },
      on: {
        enter: function (el, done) { return done(); },
        leave: function (el, done) { return done(); },
        beforeEnter: function beforeEnter (el) {
          var ref = el.__vkOffcanvas;
          var $refs = ref.$refs;
          var $props = ref.$props;
          events.beforeEnter(el);
          css(doc$4, 'overflowY', scrollbarWidth && $props.overlay
            ? 'scroll'
            : ''
          );
          addClass(el, 'uk-open');
          addClass($refs.bar, 'uk-offcanvas-none');
        },
        afterEnter: function afterEnter (el) {
          events.afterEnter(el);
        },
        afterLeave: function afterLeave (el) {
          var ref = el.__vkOffcanvas;
          var $refs = ref.$refs;
          removeClass(el, 'uk-open');
          removeClass($refs.bar, 'uk-offcanvas-none');
          events.afterLeave(el);
        }
      }
    };
    return h('transition', mergeData(def, data), children)
  }
}

var TransitionPush = {
  functional: true,
  render: function render (h, ref) {
    var data = ref.data;
    var children = ref.children;
    var def = {
      props: {
        css: false
      },
      on: {
        beforeEnter: function beforeEnter (el) {
          var ref = el.__vkOffcanvas;
          var $refs = ref.$refs;
          var $props = ref.$props;
          events.beforeEnter(el);
          css(doc$4, 'overflowY', $props.flipped && scrollbarWidth && $props.overlay
            ? 'scroll'
            : ''
          );
          addClass($refs.bar, 'uk-offcanvas-bar-animation uk-offcanvas-push');
        },
        enter: function enter (el, done) {
          var ref = el.__vkOffcanvas;
          var $refs = ref.$refs;
          height(el);
          addClass(el, 'uk-open');
          addClass($refs.content, 'uk-offcanvas-content-animation');
          once(el, 'transitionend', done, false, function (e) { return e.target === $refs.bar; });
        },
        afterEnter: function afterEnter (el) {
          events.afterEnter(el);
        },
        beforeLeave: function beforeLeave (el) {
          var ref = el.__vkOffcanvas;
          var $refs = ref.$refs;
          removeClass(el, 'uk-open');
          removeClass($refs.content, 'uk-offcanvas-content-animation');
        },
        leave: function leave (el, done) {
          var ref = el.__vkOffcanvas;
          var $refs = ref.$refs;
          var bar = $refs.bar;
          once(el, 'transitionend', done, false, function (e) { return e.target === bar; });
        },
        afterLeave: function afterLeave (el) {
          var ref = el.__vkOffcanvas;
          var $refs = ref.$refs;
          removeClass($refs.bar, 'uk-offcanvas-bar-animation uk-offcanvas-push');
          events.afterLeave(el);
        }
      }
    };
    return h('transition', mergeData(def, data), children)
  }
}

var TransitionSlide = {
  functional: true,
  render: function render (h, ref) {
    var data = ref.data;
    var children = ref.children;
    var def = {
      props: {
        css: false
      },
      on: {
        beforeEnter: function beforeEnter (el) {
          var ref = el.__vkOffcanvas;
          var $refs = ref.$refs;
          var $props = ref.$props;
          events.beforeEnter(el);
          css(doc$4, 'overflowY', scrollbarWidth && $props.overlay
            ? 'scroll'
            : ''
          );
          addClass($refs.bar, 'uk-offcanvas-bar-animation uk-offcanvas-slide');
        },
        enter: function enter (el, done) {
          var ref = el.__vkOffcanvas;
          var $refs = ref.$refs;
          height(el);
          addClass(el, 'uk-open');
          once(el, 'transitionend', done, false, function (e) { return e.target === $refs.bar; });
        },
        afterEnter: function afterEnter (el) {
          events.afterEnter(el);
        },
        beforeLeave: function beforeLeave (el) {
          removeClass(el, 'uk-open');
        },
        leave: function leave (el, done) {
          var ref = el.__vkOffcanvas;
          var $refs = ref.$refs;
          once(el, 'transitionend', done, false, function (e) { return e.target === $refs.bar; });
        },
        afterLeave: function afterLeave (el) {
          var ref = el.__vkOffcanvas;
          var $refs = ref.$refs;
          removeClass($refs.bar, 'uk-offcanvas-bar-animation uk-offcanvas-slide');
          events.afterLeave(el);
        }
      }
    };
    return h('transition', mergeData(def, data), children)
  }
}

var TransitionReveal = {
  functional: true,
  render: function render (h, ref) {
    var data = ref.data;
    var children = ref.children;
    var def = {
      props: {
        css: false
      },
      on: {
        beforeEnter: function beforeEnter (el) {
          var ref = el.__vkOffcanvas;
          var $refs = ref.$refs;
          var $props = ref.$props;
          events.beforeEnter(el);
          width($refs.content, width(win$3) - scrollbarWidth);
          css(doc$4, 'overflowY', $props.flipped && scrollbarWidth && $props.overlay
            ? 'scroll'
            : ''
          );
        },
        enter: function enter (el, done) {
          var ref = el.__vkOffcanvas;
          var $refs = ref.$refs;
          height(el);
          addClass(el, 'uk-open');
          addClass($refs.content, 'uk-offcanvas-content-animation');
          once(el, 'transitionend', done, false, function (e) { return e.target === $refs.reveal; });
        },
        afterEnter: function afterEnter (el) {
          events.afterEnter(el);
        },
        beforeLeave: function beforeLeave (el) {
          var ref = el.__vkOffcanvas;
          var $refs = ref.$refs;
          removeClass(el, 'uk-open');
          removeClass($refs.content, 'uk-offcanvas-content-animation');
        },
        leave: function leave (el, done) {
          var ref = el.__vkOffcanvas;
          var $refs = ref.$refs;
          once(el, 'transitionend', done, false, function (e) { return e.target === $refs.reveal; });
        },
        afterLeave: function afterLeave (el) {
          events.afterLeave(el);
        }
      }
    };
    return h('transition', mergeData(def, data), children)
  }
}

var Transitions = {
  none: TransitionNone,
  push: TransitionPush,
  slide: TransitionSlide,
  reveal: TransitionReveal
};
var offcanvas = {
  props: {
    show: {
      type: Boolean,
      default: false
    },
    flipped: {
      type: Boolean,
      default: false
    },
    stuck: {
      type: Boolean,
      default: false
    },
    overlay: {
      type: Boolean,
      default: false
    },
    mode: {
      type: String,
      default: 'slide',
      validator: function (val) { return /^(none|slide|push|reveal)$/.test(val); }
    }
  },
  mounted: function mounted () {
    this.$refs.content = query('.uk-offcanvas-content');
    this.$refs.bar = this.$el.querySelector('.uk-offcanvas-bar');
    if ("development" !== 'production' && !this.$refs.content) {
      warn('Offcanvas content element not detected -> make sure to wrap the offcanvas content with `vk-offcanvas-content` component or a custom `.uk-offcanvas-content` node.', this);
    }
    this.$el.__vkOffcanvas = this;
  },
  beforeDestroy: function beforeDestroy () {
    if (this.show) {
      events.afterLeave(this.$el);
    }
  },
  render: function render (h) {
    var nodes = this.$slots.default || [];
    var customBar = findBar(nodes);
    var bar = customBar || h(ElementOffcanvasBar, nodes);
    var content = h(ElementOffcanvas, {
      key: this.mode,
      class: {
        'uk-offcanvas-overlay': this.overlay
      },
      directives: [{
        name: 'show',
        value: this.show
      }]
    }, [
      this.mode === 'reveal'
        ? h('div', {
          class: 'uk-offcanvas-reveal',
          ref: 'reveal'
        }, [ bar ])
        : bar
    ]);
    return h(Transitions[this.mode], [ content ])
  }
}
function findBar (nodes) {
  return nodes
    .filter(function (n) { return n.tag && n.data; })
    .find(function (n) { return /offcanvas-bar/.test(getNodeClass(n)); })
}
function getNodeClass (node) {
  return (node.data.class || []).concat( [node.data.staticClass]).join(' ')
}

var offcanvasContent = {
  name: 'VkOffcanvasContent',
  functional: true,
  render: ElementOffcanvasContent.render
}

var offcanvas_Bar = {
  name: 'VkOffcanvasBar',
  functional: true,
  render: ElementOffcanvasBar.render
}

var offcanvas_Close = {
  name: 'VkOffcanvasClose',
  functional: true,
  props: ElementOffcanvasClose.props,
  render: ElementOffcanvasClose.render
}

var ElementPagination = {
  functional: true,
  props: {
    align: {
      type: String,
      default: 'left',
      validator: function (val) { return /^(left|center|right)$/.test(val); }
    }
  },
  render: function render (h, ref) {
    var obj;
    var props = ref.props;
    var data = ref.data;
    var children = ref.children;
    var align = props.align;
    return h('ul', mergeData(data, {
      class: ['uk-pagination', ( obj = {}, obj[("uk-flex-" + align)] = align !== 'left', obj)]
    }), children)
  }
}

var ElementPaginationPage = {
  functional: true,
  props: {
    active: {
      type: Boolean,
      default: false
    },
    title: {
      type: [String, Number],
      default: ''
    }
  },
  render: function (h, ref) {
    var props = ref.props;
    var data = ref.data;
    var active = props.active;
    var title = props.title;
    return h('li', {
      class: {
        'uk-active': active
      }
    }, [
      active
        ? h('span', title)
        : h('a', { on: data.on }, title)
    ])
  }
}

var Icon = {
  functional: true,
  render: function (h, ctx) {
    var props = ctx.props;
    var ratio = props.ratio || 1;
    var width = props.width || 7;
    var height = props.height || 12;
    var viewBox = props.viewBox || '0 0 7 12';
    if (ratio !== 1) {
      width = width * ratio;
      height = height * ratio;
    }
    return h('svg', {
      attrs: {
        version: '1.1',
        meta: 'icon-pagination-next ratio-' + ratio,
        width: width,
        height: height,
        viewBox: viewBox
      },
      domProps: {
        innerHTML: '<path fill="none" stroke="#000" stroke-width="1.2" d="M1 1l5 5-5 5"/>'
      }
    })
  }
}

var ElementPaginationPageNext = {
  functional: true,
  props: {
    title: {
      type: String,
      default: ''
    },
    expanded: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  render: function render (h, ref) {
    var props = ref.props;
    var data = ref.data;
    var listeners = ref.listeners;
    var title = props.title;
    var expanded = props.expanded;
    var disabled = props.disabled;
    delete data.on;
    return h('li', mergeData(data, {
      class: {
        'uk-disabled': disabled,
        'uk-margin-auto-left': expanded
      }
    }), [
      h('a', { on: listeners }, [
        title,
        h(ElementIcon, {
          class: ['uk-pagination-prev', {
            'uk-margin-small-left': title
          }]
        }, [ h(Icon) ])
      ])
    ])
  }
}

var Icon$1 = {
  functional: true,
  render: function (h, ctx) {
    var props = ctx.props;
    var ratio = props.ratio || 1;
    var width = props.width || 7;
    var height = props.height || 12;
    var viewBox = props.viewBox || '0 0 7 12';
    if (ratio !== 1) {
      width = width * ratio;
      height = height * ratio;
    }
    return h('svg', {
      attrs: {
        version: '1.1',
        meta: 'icon-pagination-prev ratio-' + ratio,
        width: width,
        height: height,
        viewBox: viewBox
      },
      domProps: {
        innerHTML: '<path fill="none" stroke="#000" stroke-width="1.2" d="M6 1L1 6l5 5"/>'
      }
    })
  }
}

var ElementPaginationPagePrev = {
  functional: true,
  props: {
    title: {
      type: String,
      default: ''
    },
    expanded: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  render: function render (h, ref) {
    var props = ref.props;
    var data = ref.data;
    var listeners = ref.listeners;
    var title = props.title;
    var expanded = props.expanded;
    var disabled = props.disabled;
    delete data.on;
    return h('li', mergeData(data, {
      class: {
        'uk-disabled': disabled,
        'uk-margin-auto-right': expanded
      }
    }), [
      h('a', { on: listeners }, [
        h(ElementIcon, {
          class: ['uk-pagination-prev', {
            'uk-margin-small-right': title
          }]
        }, [ h(Icon$1) ]),
        title
      ])
    ])
  }
}

function Matrix (ref) {
  if ( ref === void 0 ) ref = {};
  var total = ref.total; if ( total === void 0 ) total = 200;
  var page = ref.page; if ( page === void 0 ) page = 1;
  var perPage = ref.perPage; if ( perPage === void 0 ) perPage = 10;
  var range$$1 = ref.range; if ( range$$1 === void 0 ) range$$1 = 3;
  var matrix = [];
  var totalPages = Math.ceil(total / perPage);
  if (totalPages < 2) {
    return [1]
  }
  var mainPages = getMainPages({ page: page, range: range$$1, totalPages: totalPages });
  var first = mainPages[0];
  var last = mainPages[mainPages.length - 1];
  var prePages = range(1, (first <= 3) ? first : 2);
  var postPages = range(
    last >= (totalPages - 2) ? last + 1 : totalPages,
    totalPages + 1
  );
  var nextPage = 1
  ;[].concat(prePages, mainPages, postPages).forEach(function (p) {
    if (p === nextPage) {
      matrix.push(p);
      nextPage++;
    } else {
      matrix.push('...');
      matrix.push(p);
      nextPage = p + 1;
    }
  });
  return matrix
}
var getMainPages = function (ref) {
  var page = ref.page;
  var range$$1 = ref.range;
  var totalPages = ref.totalPages;
  var start = page - range$$1;
  var end = page + range$$1;
  if (end > totalPages) {
    end = totalPages;
    start = totalPages - (range$$1 * 2);
    start = start < 1 ? 1 : start;
  }
  if (start <= 1) {
    start = 1;
    end = Math.min((range$$1 * 2) + 1, totalPages);
  }
  return range(start, end + 1)
};

var pagination = {
  name: 'Pagination',
  directives: { VkMargin: VkMargin },
  props: assign({}, ElementPagination.props, {
    page: {
      type: Number,
      default: 1
    },
    perPage: {
      type: Number,
      required: true
    },
    total: {
      type: Number,
      required: true
    },
    range: {
      type: Number,
      default: 3
    }
  }),
  computed: {
    prevPage: function prevPage () {
      return this.page - 1
    },
    nextPage: function nextPage () {
      return this.page + 1
    },
    pages: function pages () {
      return Matrix({ total: this.total, page: this.page, perPage: this.perPage })
    },
    lastPage: function lastPage () {
      return this.pages[this.pages.length - 1]
    }
  },
  methods: {
    update: function update (page) {
      this.$emit('update:page', page);
    }
  },
  render: function render (h) {
    var this$1 = this;
    var nodes = (this.$slots.default || []).filter(function (node) { return node.tag; });
    return h(ElementPagination, {
      props: this.$props,
      directives: [{
        name: 'vk-margin'
      }]
    }, nodes.map(function (node) {
      if (!node.fnOptions) {
        "development" !== 'production' &&
          warn(("vk-pagination -> " + (node.tag) + " component is not functional"), this$1);
        return
      }
      return node.data.rerender
        ? h(node.fnOptions, mergeData(node.data, {
          rerendering: true
        }))
        : node
    }))
  }
}

var pagination_Pages = {
  functional: true,
  render: function (h, ref) {
    var data = ref.data;
    var props = ref.props;
    var parent = ref.parent;
    if (!data.rerendering) {
      return h('li', {
        rerender: true
      })
    }
    var currentPage = parent.page;
    return parent.pages.map(function (page) {
      var isPage = isNumber(page);
      return isPage
        ? h(ElementPaginationPage, {
          props: {
            title: page,
            active: currentPage === page
          },
          on: {
            click: function (e) { return parent.$emit('update:page', page); }
          }
        })
        : h('li', [ h('span', '...') ])
    })
  }
}

var pagination_PageFirst = {
  functional: true,
  props: ElementPaginationPagePrev.props,
  render: function render (h, ref) {
    var data = ref.data;
    var props = ref.props;
    var parent = ref.parent;
    var title = props.title;
    var expanded = props.expanded;
    if (!data.rerendering) {
      return h('li', mergeData(data, {
        rerender: true,
        props: props
      }))
    }
    return h(ElementPaginationPagePrev, {
      props: {
        title: title,
        expanded: expanded,
        disabled: parent.prevPage < 1
      },
      on: {
        click: function (e) { return parent.update(1); }
      }
    })
  }
}

var pagination_PagePrev = {
  functional: true,
  props: ElementPaginationPagePrev.props,
  render: function render (h, ref) {
    var data = ref.data;
    var props = ref.props;
    var parent = ref.parent;
    var title = props.title;
    var expanded = props.expanded;
    if (!data.rerendering) {
      return h('li', mergeData(data, {
        rerender: true,
        props: props
      }))
    }
    return h(ElementPaginationPagePrev, {
      props: {
        title: title,
        expanded: expanded,
        disabled: parent.prevPage < 1
      },
      on: {
        click: function (e) { return parent.update(parent.prevPage); }
      }
    })
  }
}

var pagination_PageNext = {
  functional: true,
  props: ElementPaginationPageNext.props,
  render: function render (h, ref) {
    var data = ref.data;
    var props = ref.props;
    var parent = ref.parent;
    var title = props.title;
    var expanded = props.expanded;
    if (!data.rerendering) {
      return h('li', mergeData(data, {
        rerender: true,
        props: props
      }))
    }
    return h(ElementPaginationPageNext, {
      props: {
        title: title,
        expanded: expanded,
        disabled: parent.nextPage > parent.lastPage
      },
      on: {
        click: function (e) { return parent.update(parent.nextPage); }
      }
    })
  }
}

var pagination_PageLast = {
  functional: true,
  props: ElementPaginationPageNext.props,
  render: function render (h, ref) {
    var data = ref.data;
    var props = ref.props;
    var parent = ref.parent;
    var title = props.title;
    var expanded = props.expanded;
    if (!data.rerendering) {
      return h('li', mergeData(data, {
        rerender: true,
        props: props
      }))
    }
    return h(ElementPaginationPageNext, {
      props: {
        title: title,
        expanded: expanded,
        disabled: parent.nextPage > parent.lastPage
      },
      on: {
        click: function (e) { return parent.update(parent.lastPage); }
      }
    })
  }
}

var fastdom = {
  reads: [],
  writes: [],
  read: function read (task) {
    this.reads.push(task);
    scheduleFlush();
    return task
  },
  write: function write (task) {
    this.writes.push(task);
    scheduleFlush();
    return task
  },
  clear: function clear (task) {
    return remove$1(this.reads, task) || remove$1(this.writes, task)
  },
  flush: function flush () {
    runTasks(this.reads);
    runTasks(this.writes.splice(0, this.writes.length));
    this.scheduled = false;
    if (this.reads.length || this.writes.length) {
      scheduleFlush();
    }
  }
};
function scheduleFlush () {
  if (!fastdom.scheduled) {
    fastdom.scheduled = true;
    requestAnimationFrame(fastdom.flush.bind(fastdom));
  }
}
function runTasks (tasks) {
  var task;
  while ((task = tasks.shift())) {
    task();
  }
}
function remove$1 (array, item) {
  var index = array.indexOf(item);
  return !!~index && !!array.splice(index, 1)
}

var DATA = '_vk_fastdom_data';
var FRAMES = '_vk_fastdom_frames';
var scroll$1 = 0;
var instances = [];
if (typeof window !== 'undefined') {
  on(window, 'load resize', function () { return instances.forEach(function (i) { return i.fastdomUpdate(); }); }
  );
  on(window, 'scroll', function (e) {
    e.dir = scroll$1 <= window.pageYOffset ? 'down' : 'up';
    e.scrollY = scroll$1 = window.pageYOffset;
    instances.forEach(function (inst) { return inst.fastdomUpdate(e); });
  });
}
var MixinFastdom = {
  methods: {
    fastdomUpdate: function fastdomUpdate (e, parents) {
      if ( parents === void 0 ) parents = false;
      e = createEvent(e || 'update');
      var instance = this;
      if (parents) {
        do {
          if (instance._fastdom_ready) {
            instance._fastdomUpdate(e);
          }
          instance = instance.$parent();
        } while (instance)
      } else {
        apply$2(instance, function (instance) {
          if (instance._fastdom_ready) {
            instance._fastdomUpdate(e);
          }
        });
      }
    },
    _fastdomUpdate: function _fastdomUpdate (e) {
      var this$1 = this;
      e = createEvent(e || 'update');
      var type = e.type;
      var updates = this.$options.fastdom;
      var ref = this[FRAMES];
      var reads = ref.reads;
      var writes = ref.writes;
      if (!updates) {
        return
      }
      updates.forEach(function (ref, i) {
        var read = ref.read;
        var write = ref.write;
        var events = ref.events;
        if (type !== 'update' && !includes(events, type)) {
          return
        }
        if (read && !includes(fastdom.reads, reads[i])) {
          reads[i] = fastdom.read(function () {
            var result = read.call(this$1, this$1[DATA], e);
            if (result === false && write) {
              fastdom.clear(writes[i]);
              delete writes[i];
            } else if (isPlainObject(result)) {
              assign(this$1[DATA], result);
            }
            delete reads[i];
          });
        }
        if (write && !includes(fastdom.writes, writes[i])) {
          writes[i] = fastdom.write(function () {
            write.call(this$1, this$1[DATA], e);
            delete writes[i];
          });
        }
      });
    }
  },
  created: function created () {
    this[DATA] = {};
    this[FRAMES] = { reads: {}, writes: {} };
    instances.push(this);
  },
  mounted: function mounted () {
    var this$1 = this;
    this._fastdom_ready || ready(function () {
      var hook = this$1.$options.domReady;
      hook && hook.call(this$1);
      this$1._fastdom_ready = true;
      this$1._fastdomUpdate();
    });
    this._fastdomUpdate();
  },
  beforeDestroy: function beforeDestroy () {
    var this$1 = this;
    instances.splice(instances.findIndex(function (inst) { return inst === this$1; }), 1);
  }
}

var scrollspy = {
  name: 'VkScrollspy',
  abstract: true,
  mixins: [EventsMixin, MixinFastdom],
  props: {
    cls: {
      type: Array,
      default: function () { return []; }
    },
    target: {
      default: false
    },
    hidden: {
      type: Boolean,
      default: true
    },
    offsetTop: {
      type: Number,
      default: 0
    },
    offsetLeft: {
      type: Number,
      default: 0
    },
    repeat: {
      type: Boolean,
      default: false
    },
    delay: {
      type: Number,
      default: 0
    }
  },
  classMapping: {
    inViewClass: 'uk-scrollspy-inview'
  },
  computed: {
    elements: function elements () {
      return this.target ? $$(this.target, this.$el) : [ this.$el ]
    }
  },
  fastdom: [
    {
      write: function write () {
        var ref = this.$options.classMapping;
        var inViewClass = ref.inViewClass;
        if (this.hidden) {
          css(filter(this.elements, (":not(." + inViewClass + ")")), 'visibility', 'hidden');
        }
      }
    },
    {
      read: function read (els) {
        var this$1 = this;
        this.elements.forEach(function (el, i) {
          var elData = els[i];
          if (!elData || elData.el !== el) {
            var cls = data(el, 'vk-scrollspy-class');
            elData = {el: el, toggles: cls && cls.split(',') || this$1.cls};
          }
          elData.show = isInView(el, this$1.offsetTop, this$1.offsetLeft);
          els[i] = elData;
        });
      },
      write: function write (els) {
        var this$1 = this;
        var ref = this.$options.classMapping;
        var inViewClass = ref.inViewClass;
        var index = this.elements.length === 1 ? 1 : 0;
        this.elements.forEach(function (el, i) {
          var elData = els[i];
          var cls = elData.toggles[i] || elData.toggles[0];
          if (elData.show && !elData.inview && !elData.timer) {
            var show = function () {
              css(el, 'visibility', '');
              addClass(el, inViewClass);
              toggleClass(el, cls);
              trigger(el, 'inview');
              this$1.fastdomUpdate();
              elData.inview = true;
              delete elData.timer;
            };
            if (this$1.delay && index) {
              elData.timer = setTimeout(show, this$1.delay * index);
            } else {
              show();
            }
            index++;
          } else if (!elData.show && elData.inview && this$1.repeat) {
            if (elData.timer) {
              clearTimeout(elData.timer);
              delete elData.timer;
            }
            css(el, 'visibility', this$1.hidden ? 'hidden' : '');
            removeClass(el, inViewClass);
            toggleClass(el, cls);
            trigger(el, 'outview');
            this$1.fastdomUpdate();
            elData.inview = false;
          }
        });
      },
      events: ['scroll', 'load', 'resize']
    }
  ],
  render: function render (h) {
    var children = this.$slots.default;
    if (!children) {
      return
    }
    children = filterOutTextNodes(children);
    if (!children.length) {
      return
    }
    if ("development" !== 'production' && children.length > 1) {
      warn('vk-scrollspy can only be used on a single element', this.$parent);
    }
    return children[0]
  }
}

var scrollspyNav = {
  name: 'VkScrollspyNav',
  abstract: true,
  mixins: [EventsMixin, MixinFastdom],
  props: {
    cls: {
      type: String,
      default: 'uk-active'
    },
    closest: {
      type: String,
      default: ''
    },
    overflow: {
      type: Boolean,
      default: true
    },
    offset: {
      type: Number,
      default: 0
    }
  },
  methods: {
    setComputed: function setComputed () {
      this.links = $$('a[href^="#"]', this.$el).filter(function (el) { return el.hash; });
      this.elements = this.closest ? closest(this.links, this.closest) : this.links;
      this.targets = $$(this.links.map(function (el) { return el.hash; }).join(','));
    }
  },
  fastdom: [
    {
      read: function read (data) {
        var this$1 = this;
        var scroll = window.pageYOffset + this.offset + 1;
        var max = height(document) - height(window) + this.offset;
        data.active = false;
        this.targets.every(function (el, i) {
          var ref = offset(el);
          var top = ref.top;
          var last = i + 1 === this$1.targets.length;
          if (!this$1.overflow && (i === 0 && top > scroll || last && top + el.offsetTop < scroll)) {
            return false
          }
          if (!last && offset(this$1.targets[i + 1]).top <= scroll) {
            return true
          }
          if (scroll >= max) {
            for (var j = this$1.targets.length - 1; j > i; j--) {
              if (isInView(this$1.targets[j])) {
                el = this$1.targets[j];
                break
              }
            }
          }
          return !(data.active = $(filter(this$1.links, ("[href=\"#" + (el.id) + "\"]"))))
        });
      },
      write: function write (ref) {
        var active = ref.active;
        this.links.forEach(function (el) { return el.blur(); });
        removeClass(this.elements, this.cls);
        if (active) {
          trigger(this.$el, 'active', [active, addClass(this.closest ? closest(active, this.closest) : active, this.cls)]);
        }
      },
      events: ['scroll', 'load', 'resize']
    }
  ],
  mounted: function mounted () {
    this.setComputed();
  },
  updated: function updated () {
    var this$1 = this;
    this.$nextTick(function () {
      this$1.setComputed();
      this$1.fastdomUpdate();
    });
  },
  render: function render (h) {
    var children = this.$slots.default;
    if (!children) {
      return
    }
    children = filterOutTextNodes(children);
    if (!children.length) {
      return
    }
    if ("development" !== 'production' && children.length > 1) {
      warn('vk-scrollspy can only be used on a single element', this.$parent);
    }
    return children[0]
  }
}

var ElementSkeleton = {
  functional: true,
  props: {
    animated: {
      type: Boolean,
      default: false
    },
    width: {
      type: [Boolean, Number],
      default: false
    },
    height: {
      type: [Boolean, Number],
      default: false
    }
  },
  render: function (h, ref) {
    var data = ref.data;
    var props = ref.props;
    var children = ref.children;
    var animated = props.animated;
    var width = props.width;
    var height = props.height;
    return h('div', mergeData({
      class: {
        'vk-skeleton--animated': animated
      },
      style: {
        width: (width + "px"),
        height: (height + "px")
      }
    }, data), [
      h('div', {
        class: 'vk-skeleton-content'
      })
    ])
  }
}

var ElementSkeletonImage = {
  functional: true,
  props: assign({}, ElementSkeleton.props, {
    width: {
      type: Number,
      default: 150
    },
    height: {
      type: Number,
      default: 120
    }
  }),
  render: function render (h, ref) {
    var data = ref.data;
    var props = ref.props;
    return h(ElementSkeleton, mergeData(data, {
      class: 'vk-skeleton-image',
      props: props
    }))
  }
}

var ElementSkeletonText = {
  functional: true,
  props: ElementSkeleton.props,
  render: function render (h, ref) {
    var data = ref.data;
    var props = ref.props;
    return h(ElementSkeleton, mergeData(data, {
      class: 'vk-skeleton-text',
      props: props
    }))
  }
}

var ElementSkeletonTitle = {
  functional: true,
  props: ElementSkeleton.props,
  render: function render (h, ref) {
    var data = ref.data;
    var props = ref.props;
    return h(ElementSkeleton, mergeData(data, {
      class: 'vk-skeleton-title',
      props: props
    }))
  }
}

var skeletonImage = {
  name: 'VkSkeletonImage',
  functional: true,
  props: ElementSkeletonImage.props,
  render: ElementSkeletonImage.render
}

var skeletonText = {
  name: 'VkSkeletonText',
  functional: true,
  props: ElementSkeletonText.props,
  render: ElementSkeletonText.render
}

var skeletonTitle = {
  name: 'VkSkeletonTitle',
  functional: true,
  props: ElementSkeletonTitle.props,
  render: ElementSkeletonTitle.render
}

var Icon$2 = {
  functional: true,
  render: function (h, ctx) {
    var props = ctx.props;
    var ratio = props.ratio || 1;
    var width = props.width || 30;
    var height = props.height || 30;
    var viewBox = props.viewBox || '0 0 30 30';
    if (ratio !== 1) {
      width = width * ratio;
      height = height * ratio;
    }
    return h('svg', {
      attrs: {
        version: '1.1',
        width: width,
        height: height,
        viewBox: viewBox
      },
      domProps: {
        innerHTML: '<circle fill="none" stroke="#000" cx="15" cy="15" r="14"/>'
      }
    })
  }
}

var ElementSpinner = {
  functional: true,
  props: {
    ratio: {
      type: [String, Number]
    }
  },
  render: function render (h, ref) {
    var props = ref.props;
    var data = ref.data;
    return h('div', mergeData(data, {
      class: ['uk-icon', 'uk-spinner']
    }), [
      h(Icon$2, { props: props })
    ])
  }
}

var spinner = {
  name: 'VkSpinner',
  functional: true,
  props: ElementSpinner.props,
  render: ElementSpinner.render
}

var ACTIVE = 'active';
var INACTIVE = 'inactive';

var sticky = {
  name: 'VkSticky',
  abstract: true,
  mixins: [EventsMixin, MixinFastdom],
  props: {
    top: {
      type: [Number, String],
      default: 0
    },
    bottom: {
      type: [Boolean, String],
      default: false
    },
    offset: {
      type: Number,
      default: 0
    },
    widthElement: {
      default: false
    },
    animation: {
      type: String,
      default: ''
    },
    showOnUp: {
      type: Boolean,
      default: false
    },
    media: {
      type: [Number, String]
    },
    selTarget: {
      type: String
    },
    target: {
      type: [Number, Boolean],
      default: false
    }
  },
  classMapping: {
    clsFixed: 'uk-sticky-fixed',
    clsBelow: 'uk-sticky-below',
    clsActive: 'uk-active',
    clsInactive: ''
  },
  data: function () { return ({
    isActive: false
  }); },
  computed: {
    outerHeight: function outerHeight () {
      return (this.isActive ? this.$refs.placeholder : this.$el).offsetHeight
    },
    $selTarget: function $selTarget () {
      return this.selTarget
        ? $(this.selTarget, this.$el)
        : this.$el
    }
  },
  fastdom: [
    {
      write: function write () {
        var ref = this.$refs;
        var placeholder = ref.placeholder;
        var widthElement = ref.widthElement;
        var outerHeight = (this.isActive ? placeholder : this.$el).offsetHeight;
        css(placeholder, assign(
          {height: css(this.$el, 'position') !== 'absolute' ? outerHeight : ''},
          css(this.$el, ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'])
        ));
        if (!within(placeholder, document)) {
          after(this.$el, placeholder);
          attr(placeholder, 'hidden', '');
        }
        attr(widthElement, 'hidden', null);
        this.width = widthElement.offsetWidth;
        attr(widthElement, 'hidden', this.isActive ? null : '');
        this.topOffset = offset(this.isActive ? placeholder : this.$el).top;
        this.bottomOffset = this.topOffset + outerHeight;
        var bottom = parseProp('bottom', this);
        this.stickAt = Math.max(toFloat(parseProp('top', this)), this.topOffset) - this.offset;
        this.stickUntil = bottom && bottom - outerHeight;
        this.inactive = this.media && !window.matchMedia(toMedia(this.media)).matches;
        if (this.isActive) {
          this.update();
        }
      },
      events: ['load', 'resize']
    },
    {
      read: function read (_, ref) {
        var scrollY = ref.scrollY; if ( scrollY === void 0 ) scrollY = window.pageYOffset;
        this.scroll = scrollY;
        return {
          scroll: scrollY,
          visible: isVisible(this.$el)
        }
      },
      write: function write (ref, ref$1) {
        var this$1 = this;
        var visible = ref.visible;
        var scroll = ref.scroll;
        if ( ref$1 === void 0 ) ref$1 = {};
        var dir = ref$1.dir;
        if (scroll < 0 || !visible || this.disabled || this.showOnUp && !dir) {
          return
        }
        if (this.inactive ||
          scroll < this.stickAt ||
          this.showOnUp && (scroll <= this.stickAt || dir === 'down' || dir === 'up' && !this.isActive && scroll <= this.bottomOffset)
        ) {
          if (!this.isActive) {
            return
          }
          this.isActive = false;
          if (this.animation && scroll > this.topOffset) {
            Animation.cancel(this.$el);
            Animation.out(this.$el, ("uk-animation-" + (this.animation))).then(function () { return this$1.hide(); }, noop);
          } else {
            this.hide();
          }
        } else if (this.isActive) {
          this.update();
        } else if (this.animation) {
          Animation.cancel(this.$el);
          this.show();
          Animation.in(this.$el, ("uk-animation-" + (this.animation))).catch(noop);
        } else {
          this.show();
        }
      },
      events: ['scroll']
    }
  ],
  methods: {
    show: function show () {
      this.isActive = true;
      this.update();
      attr(this.$refs.placeholder, 'hidden', null);
    },
    hide: function hide () {
      var ref = this.$options.classMapping;
      var clsFixed = ref.clsFixed;
      var clsBelow = ref.clsBelow;
      var clsActive = ref.clsActive;
      if (!this.isActive || hasClass(this.$selTarget, clsActive)) {
        this.$emit(INACTIVE);
      }
      removeClass(this.$el, clsFixed, clsBelow);
      css(this.$el, { position: '', top: '', width: '' });
      attr(this.$refs.placeholder, 'hidden', '');
    },
    update: function update () {
      var ref = this.$options.classMapping;
      var clsFixed = ref.clsFixed;
      var clsBelow = ref.clsBelow;
      var clsActive = ref.clsActive;
      var active = this.stickAt !== 0 || this.scroll > this.stickAt;
      var top = Math.max(0, this.offset);
      if (this.stickUntil && this.scroll > this.stickUntil - this.offset) {
        top = this.stickUntil - this.scroll;
      }
      css(this.$el, {
        position: 'fixed',
        top: (top + "px"),
        width: this.width
      });
      if (hasClass(this.$selTarget, clsActive)) {
        if (!active) {
          this.$emit(INACTIVE);
        }
      } else if (active) {
        this.$emit(ACTIVE);
      }
      toggleClass(this.$el, clsBelow, this.scroll > this.bottomOffset);
      addClass(this.$el, clsFixed);
    }
  },
  created: function created () {
    var this$1 = this;
    var ref = this.$options.classMapping;
    var clsActive = ref.clsActive;
    var clsInactive = ref.clsInactive;
    this.$on(ACTIVE, function () { return replaceClass(this$1.$selTarget, clsInactive, clsActive); });
    this.$on(INACTIVE, function () { return replaceClass(this$1.$selTarget, clsActive, clsInactive); });
  },
  mounted: function mounted () {
    addClass(this.$el, 'uk-sticky');
    this.$refs.placeholder = $('<div class="uk-sticky-placeholder"></div>');
    this.$refs.widthElement = (this.widthElement && query(this.widthElement)) || this.$refs.placeholder;
    if (!this.isActive) {
      this.hide();
    }
  },
  domReady: function domReady () {
    var this$1 = this;
    if (!(this.target && location.hash && window.pageYOffset > 0)) {
      return
    }
    var target = $(location.hash);
    if (target) {
      fastdom.read(function () {
        var ref = offset(target);
        var top = ref.top;
        var elTop = offset(this$1.$el).top;
        var elHeight = this$1.$el.offsetHeight;
        if (elTop + elHeight >= top && elTop <= top + target.offsetHeight) {
          window.scrollTo(0, top - elHeight - this$1.target - this$1.offset);
        }
      });
    }
  },
  beforeDestroy: function beforeDestroy () {
    var ref = this.$options.classMapping;
    var clsInactive = ref.clsInactive;
    if (this.isActive) {
      this.isActive = false;
      this.hide();
      removeClass(this.$selTarget, clsInactive);
    }
    remove(this.$refs.placeholder);
    this.$refs.placeholder = null;
    this.$refs.widthElement = null;
  },
  render: function render (h) {
    var children = this.$slots.default;
    if (!children) {
      return
    }
    children = filterOutTextNodes(children);
    if (!children.length) {
      return
    }
    if ("development" !== 'production' && children.length > 1) {
      warn('vk-sticky can only be used on a single element', this.$parent);
    }
    return children[0]
  }
}
function parseProp (prop, ref) {
  var $props = ref.$props;
  var $el = ref.$el;
  var propOffset = ref[(prop + "Offset")];
  var value = $props[prop];
  value = isString(value) && value === ''
    ? true
    : value;
  if (!value) {
    return
  }
  if (isNumeric(value)) {
    return propOffset + toFloat(value)
  } else if (isString(value) && /^-?\d+vh$/.test(value)) {
    return height(window) * toFloat(value) / 100
  } else {
    var el = value === true ? $el.parentNode : query(value, $el);
    if (el) {
      return offset(el).top + el.offsetHeight
    }
  }
}

var ElementSubnav = {
  functional: true,
  props: {
    divided: {
      type: Boolean,
      default: false
    },
    pill: {
      type: Boolean,
      default: false
    }
  },
  render: function render (h, ref) {
    var props = ref.props;
    var data = ref.data;
    var children = ref.children;
    var divided = props.divided;
    var pill = props.pill;
    return h('ul', mergeData(data, {
      class: ['uk-subnav', {
        'uk-subnav-divider': divided,
        'uk-subnav-pill': pill
      }]
    }), children)
  }
}

var ElementSubnavItem = {
  functional: true,
  props: {
    title: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  render: function (h, ref) {
    var props = ref.props;
    var data = ref.data;
    var listeners = ref.listeners;
    var title = props.title;
    var active = props.active;
    var disabled = props.disabled;
    delete data.on;
    return h('li', mergeData(data, {
      class: {
        'uk-active': active && !disabled,
        'uk-disabled': disabled
      }
    }), [ disabled
      ? h('span', title)
      : h('a', { on: listeners }, title)
    ])
  }
}

var ElementSubnavItemDropdown = {
  functional: true,
  props: {
    title: {
      type: String,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  render: function render (h, ref) {
    var props = ref.props;
    var data = ref.data;
    var children = ref.children;
    var disabled = props.disabled;
    var title = props.title;
    return h('li', mergeData(data, {
      class: {
        'uk-disabled': disabled
      }
    }), [
      disabled
        ? h('span', title)
        : children
    ])
  }
}

var subnav = {
  name: 'VkSubnav',
  props: assign({}, ElementSubnav.props, {
    activeItem: {}
  }),
  data: function (vm) { return ({
    state: {
      activeItem: vm.activeItem || filterItems(vm).shift().data.key || 0
    }
  }); },
  computed: {
    items: function items () {
      return (this.$slots.default || []).filter(function (n) { return n.tag; })
    }
  },
  watch: {
    activeItem: function activeItem (val) {
      this.state.activeItem = val;
    }
  },
  methods: {
    triggerUpdate: function triggerUpdate (val) {
      this.state.activeItem = val;
      this.$emit('update:activeItem', val);
    }
  },
  render: function render (h) {
    var this$1 = this;
    return h(ElementSubnav, {
      props: this.$props
    }, filterItems(this).map(function (node, index) {
      if ("development" !== 'production' && !node.fnOptions) {
        warn('vk-subvnav -> components must be functional', this$1);
      }
      var key = get(node, 'data.key', index);
      return node.data.rerender
        ? h(node.fnOptions, mergeData({}, node.data, {
          key: key,
          rerendering: true,
          props: {
            active: JSON.stringify(key) === JSON.stringify(this$1.state.activeItem)
          }
        }), node.children)
        : node
    }))
  }
}
function filterItems (vm) {
  return vm.$slots.default.filter(function (n) { return n.tag; })
}

var subnav_Item = {
  name: 'VkSubnavItem',
  functional: true,
  props: ElementSubnavItem.props,
  render: function render (h, ref) {
    var props = ref.props;
    var data = ref.data;
    var parent = ref.parent;
    if (data.rerendering) {
      delete data.class;
    }
    return h(ElementSubnavItem, mergeData(data, { props: props }, {
      rerender: true,
      on: {
        click: function (e) {
          e.preventDefault();
          parent.triggerUpdate(data.key);
        }
      }
    }))
  }
}

var IconTriangeDown = {
  functional: true,
  render: function (h, ref) {
    var props = ref.props;
    var width = props.width || 20;
    var height = props.height || 20;
    var viewBox = props.viewBox || '0 0 20 20';
    return h('svg', {
      attrs: {
        version: '1.1',
        width: width,
        height: height,
        viewBox: viewBox
      },
      domProps: {
        innerHTML: '<polygon points="5 7 15 7 10 12" />'
      }
    })
  }
}

var subnav_ItemDropdown = {
  name: 'VkSubnavItemDropdown',
  functional: true,
  props: assign({}, ElementSubnavItemDropdown.props, Dropdown.props, {
    mode: {
      type: String,
      default: 'click'
    }
  }),
  render: function render (h, ref) {
    var props = ref.props;
    var children = ref.children;
    var title = props.title;
    return h(ElementSubnavItemDropdown, { props: props }, [
      h('a', {
        class: ['uk-icon']
      }, [
        title + ' ',
        h(IconTriangeDown)
      ]),
      h(Dropdown, {
        props: props
      }, [
        children
      ])
    ])
  }
}

var MixinSort = {
  props: {
    sortedBy: {
      type: Object
    }
  }
}

var ROW_ID = '__vkTable_rowId';
var ROW_LEVEL = '__vkTable_rowLevel';
var ROW_CHILDREN_COUNT = '__vkTable_rowChildrenCount';
var ROW_CLICK_PREVENTED = '__vkTable_rowClickPrevented';
var ON_CLICK_ROW = 'click-row';
var UPDATE_SORTEDBY = 'update:sortedBy';
var UPDATE_EXPANDEDROWS = 'update:expandedRows';
var UPDATE_SELECTEDROWS = 'update:selectedRows';

var MixinSelect = {
  props: {
    selectedRows: {
      type: Array,
      default: function () { return []; }
    },
    rowSelectable: {
      type: Boolean,
      default: false
    },
    rowsSelectable: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    selectRow: function selectRow (row) {
      var id = row[ROW_ID];
      if (this.rowSelectable) {
        this.updateRowSelection([id]);
        return
      }
      var selectedRows = [].concat( this.selectedRows );
      selectedRows.push(id);
      this.updateRowSelection(selectedRows);
    },
    unselectRow: function unselectRow (row) {
      var id = row[ROW_ID];
      var index = this.selectedRows.indexOf(id);
      var selectedRows = [].concat( this.selectedRows );
      selectedRows.splice(index, 1);
      this.updateRowSelection(selectedRows);
    },
    toggleRowSelection: function toggleRowSelection (row) {
      this.isRowSelected(row)
        ? this.unselectRow(row)
        : this.selectRow(row);
    },
    toggleRowsSelection: function toggleRowsSelection () {
      var selectedRows = [];
      if (!this.allRowsSelected) {
        selectedRows = this.rows.map(function (row) { return row[ROW_ID]; });
      }
      this.updateRowSelection(selectedRows);
    },
    isRowSelected: function isRowSelected (row) {
      return this.selectedRows
        .find(function (id) { return JSON.stringify(id) === JSON.stringify(row[ROW_ID]); }) !== undefined
    },
    updateRowSelection: function updateRowSelection (selectedRows) {
      this.$emit(UPDATE_SELECTEDROWS, selectedRows);
    }
  },
  computed: {
    allRowsSelected: function allRowsSelected () {
      if (this.selectedRows && this.selectedRows.length < this.rows.length) {
        return false
      }
      var selected = this.rows.filter(this.isRowSelected);
      return selected.length === this.rows.length
    }
  },
  created: function created () {
    if (this.rowsSelectable || this.rowSelectable) {
      this.$on(ON_CLICK_ROW, this.toggleRowSelection);
    }
  }
}

var ElementTable = {
  functional: true,
  props: {
    divided: {
      type: Boolean,
      default: true
    },
    narrowed: {
      type: Boolean,
      default: false
    },
    cellMiddle: {
      type: Boolean,
      default: false
    },
    striped: {
      type: Boolean,
      default: false
    },
    hoverable: {
      type: Boolean,
      default: false
    },
    justified: {
      type: Boolean,
      default: false
    },
    responsive: {
      type: Boolean,
      default: false
    }
  },
  render: function render (h, ref) {
    var data = ref.data;
    var props = ref.props;
    var children = ref.children;
    return h('table', mergeData(data, {
      class: ['uk-table', {
        'uk-table-small': props.narrowed,
        'uk-table-hover': props.hoverable,
        'uk-table-middle': props.cellMiddle,
        'uk-table-divider': props.divided,
        'uk-table-striped': props.striped,
        'uk-table-justify': props.justified,
        'uk-table-responsive': props.responsive
      }]
    }), children)
  }
}

var ElementTableTd = {
  functional: true,
  props: {
    cellMiddle: {
      type: Boolean,
      default: false
    },
    shrinked: {
      type: Boolean,
      default: false
    },
    expanded: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: ''
    },
    linked: {
      type: Boolean,
      default: false
    },
    truncated: {
      type: Boolean,
      default: false
    },
    unwrapped: {
      type: Boolean,
      default: false
    }
  },
  render: function render (h, ref) {
    var obj;
    var data = ref.data;
    var props = ref.props;
    var children = ref.children;
    var cellMiddle = props.cellMiddle;
    var shrinked = props.shrinked;
    var expanded = props.expanded;
    var width = props.width;
    var linked = props.linked;
    var truncated = props.truncated;
    var unwrapped = props.unwrapped;
    return h('td', mergeData(data, {
      class: ( obj = {
        'uk-table-link': linked,
        'uk-table-middle': cellMiddle,
        'uk-table-shrink': shrinked,
        'uk-table-expand': expanded,
        'uk-text-nowrap': unwrapped,
        'uk-text-truncate': truncated
      }, obj[("uk-width-" + width)] = width, obj)
    }), children)
  }
}

var ElementTableTr = {
  functional: true,
  props: {
    active: {
      type: Boolean,
      default: false
    }
  },
  render: function render (h, ref) {
    var data = ref.data;
    var props = ref.props;
    var children = ref.children;
    var active = props.active;
    return h('tr', mergeData(data, {
      class: {
        'uk-active': active
      }
    }), children)
  }
}

var ElementTableTh = {
  functional: true,
  props: {
    shrinked: {
      type: Boolean,
      default: false
    },
    expanded: {
      type: Boolean,
      default: false
    }
  },
  render: function render (h, ref) {
    var data = ref.data;
    var props = ref.props;
    var children = ref.children;
    var shrinked = props.shrinked;
    var expanded = props.expanded;
    return h('th', mergeData(data, {
      class: {
        'uk-table-shrink': shrinked,
        'uk-table-expand': expanded
      }
    }), children)
  }
}

var ElementTableThSort = {
  functional: true,
  props: assign({}, ElementTableTh.props, {
    order: {
      type: String
    }
  }),
  render: function render (h, ref) {
    var data = ref.data;
    var props = ref.props;
    var children = ref.children;
    var order = props.order;
    return h(ElementTableTh, mergeData(data, {
      class: 'vk-table-column-sort uk-visible-hover-inline'
    }), [
      h('div', {
        class: 'uk-text-nowrap uk-position-relative'
      }, [
        children,
        h('span', mergeData(data, {
          class: ['vk-table-column-sort__arrow uk-position-absolute', {
            'uk-invisible': !order,
            'vk-table-column-sort__arrow--rotated': !order || order === 'asc'
          }]
        }))
      ])
    ])
  }
}

var Row = {
  functional: true,
  render: function render (h, ref) {
    var data = ref.data;
    var children = ref.children;
    var parent = ref.parent;
    var $row = data.$row;
    return h(ElementTableTr, {
      props: {
        active: parent.isRowSelected($row)
      },
      class: resolveClass(parent.rowClass, $row),
      on: {
        click: function (e) {
          var isPrevented = e[ROW_CLICK_PREVENTED];
          var isIgnoredTag = /^(A|BUTTON)$/.test(e.target.tagName);
          if (isPrevented || isIgnoredTag) {
            return
          }
          parent.$emit(ON_CLICK_ROW, $row);
        }
      }
    }, children)
  }
};
function Render (h, ref) {
  var rows = ref.rows;
  var props = ref.props;
  var columns = ref.columns;
  var table = ref.table;
  columns = columns.filter(function (node) {
    var isValid = node.fnOptions && node.fnOptions.headRender && node.fnOptions.cellRender;
    if ("development" !== 'production' && !isValid) {
      warn('vk-table -> some of the columns were filtered out because they were missing a head or cell render.');
    }
    return isValid
  });
  var isHeadless = !columns.some(
    function (node) { return node.children || get(node, 'data.props.title') || get(node, 'data.props.head'); }
  );
  return h(ElementTable, { props: props }, [
    isHeadless || h('thead', [
      h(ElementTableTr, columns.map(function (node) {
        var fnOptions = node.fnOptions;
        delete node.data.class;
        return h({
          functional: true,
          render: fnOptions.headRender
        }, node.data)
      }))
    ]),
    h('tbody', rows.map(function ($row, index) {
      return h(Row, { $row: $row },
        columns.map(function (node) {
          var ref = node.data;
          var props = ref.props;
          var slots = ref.slots;
          var scopedSlots = ref.scopedSlots;
          var fnOptions = node.fnOptions;
          if ("development" !== 'production' && !fnOptions) {
            warn('vk-table -> column must be a functional component', table);
          }
          if ("development" !== 'production' && !fnOptions.cellRender) {
            warn('vk-table -> column definition is missing cellRender', table);
          }
          return h({
            functional: true,
            render: fnOptions.cellRender
          }, { $row: $row, props: props, slots: slots, scopedSlots: scopedSlots })
        })
      )
    }))
  ])
}
function resolveClass (rowClass, row) {
  return isFunction(rowClass)
    ? rowClass(row)
    : rowClass
}

var Table = {
  name: 'VkTable',
  mixins: [ MixinSelect, MixinSort ],
  inheritAttrs: false,
  props: assign({}, ElementTable.props, {
    data: {
      type: Array,
      required: true
    },
    rowKey: {
      type: String,
      default: 'id'
    },
    rowClass: {
      type: Function
    }
  }),
  computed: {
    rows: function rows () {
      var this$1 = this;
      return this.data.map(function (_row, index) {
        var row = assign({}, _row);
        row[ROW_ID] = row[this$1.rowKey] || index;
        return row
      })
    }
  },
  render: function render (h) {
    var columns = get(this, '$slots.default', []).filter(function (n) { return n.tag; });
    return Render(h, {
      columns: columns,
      table: this,
      rows: this.rows,
      props: this.$props
    })
  }
}

var tableTree = {
  name: 'VkTableTree',
  extends: Table,
  props: {
    expandedRows: {
      type: Array,
      default: function () { return []; }
    },
    childrenKey: {
      type: String,
      default: 'children'
    }
  },
  computed: {
    rows: function rows () {
      var this$1 = this;
      var rows = [];
      var flatten = function (data, parent) {
        if ( parent === void 0 ) parent = {};
        var idCount = 0;
        data.forEach(function (_row) {
          var row = assign({}, _row);
          var children = row[this$1.childrenKey];
          var hasChildren = children && children.length;
          row[ROW_LEVEL] = parent[ROW_LEVEL] !== undefined
            ? parent[ROW_LEVEL] + 1
            : 0;
          row[ROW_ID] = row[this$1.rowKey]
            ? row[this$1.rowKey]
            : row[ROW_LEVEL] === 0
              ? ("" + (idCount++))
              : ((parent[ROW_ID]) + "_" + (idCount++));
          rows.push(row);
          if (hasChildren && this$1.isExpanded(row)) {
            flatten(children, row);
          }
          if (hasChildren) {
            row[ROW_CHILDREN_COUNT] = children.length;
            delete row[this$1.childrenKey];
          }
        });
      };
      flatten(this.data);
      return rows
    },
    thereAreSubLevels: function thereAreSubLevels () {
      return this.rows.some(function (row) { return row[ROW_CHILDREN_COUNT]; })
    }
  },
  methods: {
    isExpanded: function isExpanded (row) {
      return this.expandedRows
        .find(function (id) { return JSON.stringify(id) === JSON.stringify(row[ROW_ID]); }) !== undefined
    },
    toggleExpand: function toggleExpand (row) {
      var id = row[ROW_ID];
      var expandedRows = [].concat( this.expandedRows );
      var index = expandedRows.indexOf(id);
      var isExpanded = index !== -1;
      isExpanded
        ? expandedRows.splice(index, 1)
        : expandedRows.push(id);
      this.$emit(UPDATE_EXPANDEDROWS, expandedRows);
    }
  },
  render: function render (h) {
    var columns = (this.$slots.default || []).filter(function (n) { return n.tag; });
    return Render(h, {
      columns: columns,
      table: this,
      rows: this.rows,
      props: this.$props
    })
  }
}

function RenderCell (h, ctx, defaultContent) {
  var props = ctx.props;
  var data = ctx.data;
  var $row = data.$row;
  var cell = props.cell;
  var cellClass = props.cellClass;
  var cellValue = get($row, cell);
  var isEmpty = !isUndefined(cell) && isUndefined(cellValue);
  var scope = getCellScope(ctx);
  var slots = getCellSlots(ctx);
  var slot = isEmpty && slots.empty
    ? slots.empty
    : slots.default || defaultContent;
  return h(ElementTableTd, {
    props: props,
    class: cellClass
  }, [
    slot(scope)
  ])
}
function getCellScope (ref) {
  var data = ref.data;
  var props = ref.props;
  var parent = ref.parent;
  var $row = data.$row;
  var cell = props.cell;
  var cellValue = get($row, cell);
  var selected = parent.isRowSelected($row);
  var allSelected = parent.allRowsSelected;
  return { cell: cellValue, row: $row, selected: selected, allSelected: allSelected }
}
function getCellSlots (ref) {
  var data = ref.data;
  var defaultSlot = get(data, 'slots.default')
    ? function () { return get(data, 'slots.default'); }
    : get(data, 'scopedSlots.default');
  var emptySlot = get(data, 'slots.empty')
    ? function () { return get(data, 'slots.empty'); }
    : get(data, 'scopedSlots.empty');
  return {
    default: defaultSlot,
    empty: emptySlot
  }
}

var Column = {
  name: 'VkTableColumn',
  functional: true,
  props: assign({}, ElementTableTh.props, ElementTableTd.props, {
    cell: String,
    title: String,
    cellClass: String
  }),
  render: function render (h, ref) {
    var data = ref.data;
    var props = ref.props;
    var slots = ref.slots;
    data.slots = slots();
    return h('div', mergeData({}, data, { props: props }))
  },
  headRender: function headRender (h, ref) {
    var data = ref.data;
    var props = ref.props;
    return h(ElementTableTh, mergeData({}, data, {
      props: props,
      class: 'vk-table-column'
    }), props.title)
  },
  cellRender: function cellRender (h, ctx) {
    return RenderCell(h, ctx, function (ref) {
      var cell = ref.cell;
      return cell;
    })
  }
}

var table_ColumnSort = {
  name: 'VkTableColumnSort',
  functional: true,
  props: assign({}, Column.props, ElementTableThSort, {
    cell: {
      type: String,
      required: true
    }
  }),
  render: Column.render,
  cellRender: Column.cellRender,
  headRender: function headRender (h, ref) {
    var data = ref.data;
    var props = ref.props;
    var children = ref.children;
    var parent = ref.parent;
    var title = props.title;
    if ("development" !== 'production' && !parent.sortedBy) {
      warn("vk-table-column-sort -> the table 'sortedBy' prop is required when using this column.", parent);
    }
    return h(ElementTableThSort, mergeData(data, {
      props: assign({
        order: get(parent, ("sortedBy." + (props.cell)))
      }, props),
      on: {
        click: function (e) {
          var sortedBy = getNewSortOrder(parent.sortedBy, props.cell, e.shiftKey);
          parent.$emit(UPDATE_SORTEDBY, sortedBy);
        }
      }
    }), title || children)
  }
}
function getNewSortOrder (currentSort, by, multi) {
  var sort = {};
  var order = currentSort[by] === 'asc'
    ? 'desc'
    : 'asc';
  sort[by] = order;
  return multi
    ? assign({}, currentSort, sort)
    : sort
}

var ElementCheckbox = {
  functional: true,
  props: ['checked'],
  render: function render (h, ref) {
    var data = ref.data;
    var props = ref.props;
    var listeners = ref.listeners;
    var def = {
      staticClass: 'uk-checkbox',
      attrs: {
        type: 'checkbox'
      },
      domProps: {
        checked: props.checked
      },
      on: {
        change: function (e) {
          e.target.checked = props.checked;
        }
      }
    };
    return h('input', mergeData(data, def))
  }
}

var table_ColumnSelect = {
  name: 'VkTableColumnSelect',
  functional: true,
  props: assign({}, ElementTableTh.props, {
    cellClass: {
      type: String
    },
    headless: {
      type: Boolean,
      default: false
    },
    shrinked: {
      type: Boolean,
      default: true
    }
  }),
  render: Column.render,
  headRender: function headRender (h, ref) {
    var data = ref.data;
    var props = ref.props;
    var parent = ref.parent;
    var content = props.headless || h('span', {
      class: 'uk-form uk-text-center'
    }, [
      h(ElementCheckbox, {
        props: {
          checked: parent.allRowsSelected
        },
        on: {
          click: function (e) { return parent.toggleRowsSelection(); }
        }
      })
    ]);
    return h(ElementTableTh, mergeData(data, {
      props: { shrinked: true },
      class: 'vk-table-column-select'
    }), [ content ])
  },
  cellRender: function cellRender (h, ctx) {
    var parent = ctx.parent;
    return RenderCell(h, ctx, function (ref) {
      var row = ref.row;
      var selected = ref.selected;
      return h('span', {
      class: 'uk-form uk-text-center'
    }, [
      h(ElementCheckbox, {
        props: { checked: selected },
        on: {
          click: function (e) { return parent.toggleRowSelection(row); }
        }
      })
    ]);
    })
  }
}

var TreeArrow = {
  functional: true,
  props: ['rotated'],
  render: function (h, ref) {
    var listeners = ref.listeners;
    var props = ref.props;
    return h('span', {
      on: listeners,
      class: ['vk-table-column-tree__arrow', {
        'vk-table-column-tree__arrow--rotated': props.rotated
      }]
    })
  }
};
var TreeIndent = {
  functional: true,
  render: function (h, ref) {
    var children = ref.children;
    return h('span', { class: 'vk-table-column-tree__indent' }, children)
  }
};
var table_ColumnTree = {
  name: 'VkTableTreeColumn',
  functional: true,
  props: assign({}, Column.props),
  render: Column.render,
  headRender: Column.headRender,
  cellRender: function cellRender (h, ctx) {
    var parent = ctx.parent;
    return RenderCell(h, ctx, function (ref) {
      var row = ref.row;
      var cell = ref.cell;
      return [
      Array(row[ROW_LEVEL]).fill(h(TreeIndent)),
      parent.thereAreSubLevels && h(TreeIndent, [
        row[ROW_CHILDREN_COUNT] && h(TreeArrow, {
          props: {
            rotated: parent.isExpanded(row)
          },
          on: {
            click: function (e) {
              e[ROW_CLICK_PREVENTED] = true;
              parent.toggleExpand(row);
            }
          }
        })
      ]),
      h('span', cell)
    ];
    })
  }
}

var TAB_ID = '__vkTabs_id';

var isNotProd$1 = "development" !== 'production';
var core$2 = {
  props: {
    activeTab: {},
    animation: {
      type: String,
      default: ''
    },
    keepAlive: {
      type: Boolean,
      default: false
    }
  },
  data: function (vm) { return ({
    state: {
      activeTab: vm.activeTab || filterTabs(vm).shift().data.key || 0
    }
  }); },
  watch: {
    activeTab: function activeTab (val) {
      this.state.activeTab = val;
    }
  },
  computed: {
    activeTabContent: {
      get: function get$$1 () {
        var this$1 = this;
        return filterTabs(this).find(function (node) { return this$1.isActive(node.data[TAB_ID]); })
      },
      cache: false
    }
  },
  methods: {
    getTabs: function getTabs () {
      var this$1 = this;
      return filterTabs(this)
        .filter(function (node, index) {
          if (!node.componentOptions) {
            isNotProd$1 && warn(("vk-tabs -> failed to process '" + (node.tag) + "', seems is not a stateful component"), this$1);
            return false
          }
          node.key = get(node, 'data.key', index);
          node.data[TAB_ID] = node.key;
          return true
        })
    },
    setActiveTab: function setActiveTab (id) {
      this.state.activeTab = id;
      this.$emit('update:activeTab', id);
    },
    isActive: function isActive (id) {
      return JSON.stringify(this.state.activeTab) === JSON.stringify(id)
    }
  }
}
function filterTabs (vm) {
  return vm.$slots.default.filter(function (n) { return n.tag; })
}

var ElementTabs = {
  functional: true,
  props: {
    align: {
      type: String,
      default: 'left',
      validator: function (val) { return !val || /^(left|right|center|justify)$/.test(val); }
    },
    flipped: {
      type: Boolean,
      default: false
    }
  },
  render: function (h, ref) {
    var obj;
    var children = ref.children;
    var props = ref.props;
    var data = ref.data;
    var align = props.align;
    var flipped = props.flipped;
    return h('ul', mergeData(data, {
      class: ['uk-tab', ( obj = {
        'uk-tab-bottom': flipped,
        'uk-child-width-expand': align === 'justify'
      }, obj[("uk-flex-" + align)] = /^(right|center)$/.test(align), obj)]
    }), children)
  }
}

var ElementTabsVertical = {
  functional: true,
  props: {
    align: {
      type: String,
      default: 'left',
      validator: function (val) { return !val || /^(left|right)$/.test(val); }
    }
  },
  render: function (h, ref) {
    var props = ref.props;
    var data = ref.data;
    var children = ref.children;
    var align = props.align;
    return h('ul', mergeData(data, {
      class: ['uk-tab', ("uk-tab-" + align)]
    }), children)
  }
}

var ElementTabsItem = {
  functional: true,
  props: {
    icon: {},
    title: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  render: function render (h, ref) {
    var props = ref.props;
    var data = ref.data;
    var listeners = ref.listeners;
    var children = ref.children;
    var active = props.active;
    var disabled = props.disabled;
    var title = props.title;
    var icon$$1 = props.icon;
    delete data.on;
    return h('li', mergeData(data, {
      class: {
        'uk-active': active && !disabled,
        'uk-disabled': disabled
      }
    }), [
      h('a', { on: listeners }, [
        title,
        icon$$1 && h(ElementIcon, {
          class: 'uk-margin-small-left'
        }, [ icon$$1 ])
      ]),
      children
    ])
  }
}

var tabs = {
  name: 'VkTabs',
  extends: core$2,
  mixins: [EventsMixin],
  props: ElementTabs.props,
  render: function render (h) {
    var this$1 = this;
    var ref = this;
    var flipped = ref.flipped;
    var animation = ref.animation;
    var keepAlive = ref.keepAlive;
    var $props = ref.$props;
    var Tabs = this.getTabs();
    Tabs = Tabs.map(function (node, index) {
      var obj;
      var Tab = {
        functional: true,
        render: node.componentOptions.Ctor.options.tabRender
      };
      return h(Tab, ( obj = {}, obj[TAB_ID] = node.data[TAB_ID], obj.props = assign({}, node.componentOptions.propsData, {
          active: this$1.isActive(node.data[TAB_ID])
        }), obj))
    });
    return h('div', {
      class: {
        'uk-flex uk-flex-column-reverse': flipped
      }
    }, [
      h(ElementTabs, { props: $props }, Tabs),
      h('div', {
        class: { 'uk-margin': flipped }
      }, [
        h(Transition$1, {
          props: { name: animation }
        }, [
          keepAlive
            ? h('keep-alive', [ this.activeTabContent ])
            : this.activeTabContent
        ])
      ])
    ])
  }
}

var tabsVertical = {
  name: 'VkTabsVertical',
  extends: core$2,
  props: ElementTabsVertical.props,
  render: function render (h) {
    var this$1 = this;
    var ref = this;
    var align = ref.align;
    var animation = ref.animation;
    var keepAlive = ref.keepAlive;
    var $props = ref.$props;
    var Tabs = this.getTabs().map(function (node, index) {
      var obj;
      var Tab = {
        functional: true,
        render: node.componentOptions.Ctor.options.tabRender
      };
      return h(Tab, ( obj = {}, obj[TAB_ID] = node.data[TAB_ID], obj.props = assign({}, node.componentOptions.propsData, {
          active: this$1.isActive(node.data[TAB_ID])
        }), obj))
    });
    return h('div', {
      class: ['uk-grid', {
        'uk-flex uk-flex-row-reverse': align === 'right'
      }]
    }, [
      h('div', { class: 'uk-width-auto' }, [
        h(ElementTabsVertical, { props: $props }, Tabs)
      ]),
      h('div', { class: 'uk-width-expand' }, [
        h(Transition$1, {
          props: { name: animation }
        }, [
          keepAlive
            ? h('keep-alive', [ this.activeTabContent ])
            : this.activeTabContent
        ])
      ])
    ])
  }
}

var tabs_Item = {
  name: 'VkTabsItem',
  props: assign({}, ElementTabsItem.props, {
    icon: {
      type: String
    }
  }),
  render: function render (h) {
    return h('div', this.$slots.default)
  },
  tabRender: function tabRender (h, ref) {
    var data = ref.data;
    var props = ref.props;
    var children = ref.children;
    var parent = ref.parent;
    props.icon = props.icon && h(("vk-icons-" + (props.icon)));
    return h(ElementTabsItem, mergeData(data, {
      props: props,
      on: {
        click: function (e) {
          e.preventDefault();
          parent.setActiveTab(data[TAB_ID]);
        }
      }
    }), children)
  }
}



var components = /*#__PURE__*/Object.freeze({
Breadcrumb: breadcrumb,
BreadcrumbItem: breadcrumb_Item,
Button: button,
ButtonLink: buttonLink,
ButtonGroup: buttonGroup,
Card: card,
CardTitle: card_Title,
Drop: Drop,
Dropdown: Dropdown,
Grid: Grid,
Icon: icon,
IconLink: iconLink,
IconButton: iconButton,
IconImage: iconImage,
Iconnav: iconnav,
IconnavVertical: iconnavVertical,
IconnavItem: iconnav_Item,
Label: label,
Modal: modal,
ModalFull: modalFull,
ModalClose: modal_Close,
ModalFullClose: modalFull_Close,
ModalTitle: modal_Title,
Nav: nav$1,
NavDropdown: navDropdown,
NavItem: nav_Item,
NavItemDivider: nav_ItemDivider,
NavItemHeader: nav_ItemHeader,
NavItemParent: nav_ItemParent,
Navbar: navbar,
NavbarFull: navbarFull,
NavbarDropbar: navbarDropbar,
NavbarItem: navbar_Item,
NavbarLogo: navbar_Logo,
NavbarToggle: navbar_Toggle,
NavbarNav: navbar_Nav,
NavbarNavItem: navbar_Nav_Item,
NavbarNavDropdown: navbar_Nav_Dropdown,
NavbarNavDropdownNav: navbar_Nav_Dropdown_Nav,
Notification: notification,
Offcanvas: offcanvas,
OffcanvasContent: offcanvasContent,
OffcanvasBar: offcanvas_Bar,
OffcanvasClose: offcanvas_Close,
Pagination: pagination,
PaginationPages: pagination_Pages,
PaginationPageFirst: pagination_PageFirst,
PaginationPagePrev: pagination_PagePrev,
PaginationPageNext: pagination_PageNext,
PaginationPageLast: pagination_PageLast,
Scrollspy: scrollspy,
ScrollspyNav: scrollspyNav,
SkeletonImage: skeletonImage,
SkeletonText: skeletonText,
SkeletonTitle: skeletonTitle,
Spinner: spinner,
Sticky: sticky,
Subnav: subnav,
SubnavItem: subnav_Item,
SubnavItemDropdown: subnav_ItemDropdown,
Table: Table,
TableTree: tableTree,
TableColumn: Column,
TableColumnSort: table_ColumnSort,
TableColumnSelect: table_ColumnSelect,
TableColumnTree: table_ColumnTree,
Tabs: tabs,
TabsVertical: tabsVertical,
TabsItem: tabs_Item
});

var NAMESPACE$3 = '__vkScroll';
var index$1 = {
  bind: function bind$$1 (el, binding, vnode) {
    el[NAMESPACE$3] = {};
  },
  inserted: function inserted (el, binding, vnode) {
    el[NAMESPACE$3].options = getOptions$3({ binding: binding, vnode: vnode });
    el[NAMESPACE$3].unbind = on(el, 'click', function (e) {
      var opts = el[NAMESPACE$3].options;
      var isAnchor = e.target.nodeName === 'A';
      if (!isAnchor || (e.defaultPrevented && !opts.force)) {
        return
      }
      if (e.target === el || matches$1(el, e.target, opts.target)) {
        e.preventDefault();
        scrollTo(el, e.target, escape(e.target.hash).substr(1), opts);
      }
    });
  },
  componentUpdated: function componentUpdated (el, binding, vnode) {
    el[NAMESPACE$3].options = getOptions$3({ binding: binding, vnode: vnode });
  },
  unbind: function unbind (el) {
    if (!el[NAMESPACE$3]) {
      return
    }
    el[NAMESPACE$3].unbind();
    delete el[NAMESPACE$3];
  }
}
function scrollTo (el, fromEl, toEl, options) {
  toEl = (toEl && $(toEl)) || document.body;
  var docHeight = height(document);
  var winHeight = height(window);
  var target = offset(toEl).top - options.offset;
  if (target + winHeight > docHeight) {
    target = docHeight - winHeight;
  }
  if (!trigger(el, 'beforeScroll', { from: fromEl, to: toEl })) {
    return
  }
  var start = Date.now();
  var startY = window.pageYOffset;
  var step = function () {
    var currentY = startY + (target - startY) * ease(
      clamp((Date.now() - start) / options.duration)
    );
    window.scrollTo(window.pageXOffset, currentY);
    if (currentY !== target) {
      requestAnimationFrame(step);
    } else {
      trigger(el, 'afterScroll', { from: fromEl, to: toEl });
    }
  };
  step();
}
function ease (k) {
  return 0.5 * (1 - Math.cos(Math.PI * k))
}
function getOptions$3 (ctx) {
  var ref = ctx.binding;
  var value = ref.value;
  var modifiers = ref.modifiers;
  if (isString(value)) {
    value = { target: value };
  }
  return assign({
    offset: 0,
    target: 'a',
    force: false,
    duration: 1000
  }, modifiers, value)
}
function matches$1 (el, target, selector) {
  var matches$$1 = $$(("" + selector), el);
  var i = matches$$1.length;
  while (--i >= 0 && matches$$1[i] !== target) {}
  return i > -1
}

var NAMESPACE$4 = '__vkTooltip';
var index$2 = {
  bind: function bind$$1 (el, binding, vnode) {
    el[NAMESPACE$4] = {
      vnode: vnode,
      state: null,
      options: getOptions$4({ binding: binding })
    };
    if (hasAttr(el, 'title')) {
      el[NAMESPACE$4].prevTitle = attr(el, 'title');
      attr(el, { title: '' });
    }
  },
  inserted: function inserted (el, binding, vnode) {
    bindEvents(el);
  },
  componentUpdated: function componentUpdated (el, binding, vnode) {
    el[NAMESPACE$4].options = getOptions$4({ binding: binding });
  },
  unbind: function unbind (el, binding, vnode) {
    if (!el[NAMESPACE$4]) {
      return
    }
    hide(el);
    attr(el, { title: el[NAMESPACE$4].prevTitle || null });
    el[NAMESPACE$4].unbindEvents();
    delete el[NAMESPACE$4];
  }
}
function bindEvents (el) {
  var events = [
    on(el, ("focus " + pointerEnter + " " + pointerDown), function (e) {
      if (e.type !== pointerDown || !isTouch(e)) {
        show(el);
      }
    }),
    on(el, 'blur', function (e) { return hide(el); }),
    on(el, pointerLeave, function (e) {
      if (!isTouch(e)) {
        hide(el);
      }
    })
  ];
  el[NAMESPACE$4].unbindEvents = function () { return events.forEach(function (unbind) { return unbind(); }); };
}
function toggleIn (el) {
  var ref = el[NAMESPACE$4].options;
  var cls = ref.cls;
  var position$$1 = ref.position;
  var animation = ref.animation;
  var duration = ref.duration;
  if (!trigger(el, 'beforeShow')) {
    return Promise.reject()
  }
  var origin = el[NAMESPACE$4].origin = getOrigin(position$$1);
  var tooltip = el[NAMESPACE$4].tooltip = createTooltip(el);
  positionTooltip(el);
  addClass(tooltip, cls);
  el[NAMESPACE$4].hideTimer = setInterval(function () {
    if (!isVisible(el)) {
      hide(el);
    }
  }, 150);
  el[NAMESPACE$4].state = 'in';
  trigger(el, 'show');
  return Animation
    .in(tooltip, ("uk-animation-" + (animation[0])), duration, origin)
    .then(function () {
      el[NAMESPACE$4].state = 'active';
      trigger(el, 'shown');
    })
    .catch(function () {})
}
function toggleOut (el) {
  var ref = el[NAMESPACE$4];
  var tooltip = ref.tooltip;
  var ref$1 = el[NAMESPACE$4].options;
  var animation = ref$1.animation;
  var duration = ref$1.duration;
  if (!trigger(el, 'beforeHide')) {
    return Promise.reject()
  }
  Animation.cancel(tooltip);
  el[NAMESPACE$4].state = 'out';
  trigger(el, 'hide');
  if (!animation[1]) {
    return Promise.resolve().then(function () { return _hide(el); })
  }
  return Animation
    .out(tooltip, ("uk-animation-" + (animation[1])), duration, origin)
    .then(function () { return _hide(el); })
    .catch(function () {})
}
function show (el) {
  var ref = el[NAMESPACE$4];
  var state = ref.state;
  var ref$1 = el[NAMESPACE$4].options;
  var delay = ref$1.delay;
  if (state === 'active' || el[NAMESPACE$4].showTimer) {
    return
  }
  if (state === 'out') {
    Animation.cancel(el);
    _hide(el);
  }
  el[NAMESPACE$4].showTimer = setTimeout(function () { return toggleIn(el); }, delay);
}
function hide (el) {
  var ref = el[NAMESPACE$4];
  var state = ref.state;
  clearAllTimers(el);
  if (state === 'out' || (matches(el, 'input') && isFocused(el))) {
    return
  }
  toggleOut(el);
}
function _hide (el) {
  if (!el[NAMESPACE$4]) {
    return
  }
  var ref = el[NAMESPACE$4];
  var tooltip = ref.tooltip;
  var ref$1 = el[NAMESPACE$4].options;
  var cls = ref$1.cls;
  attr(el, 'aria-expanded', false);
  removeClass(tooltip, cls);
  tooltip && remove(tooltip);
  el[NAMESPACE$4].state = null;
  el[NAMESPACE$4].tooltip = null;
  trigger(el, 'hidden');
}
function clearAllTimers (el) {
  clearTimeout(el[NAMESPACE$4].showTimer);
  clearTimeout(el[NAMESPACE$4].hideTimer);
  el[NAMESPACE$4].showTimer = null;
  el[NAMESPACE$4].hideTimer = null;
}
function positionTooltip (el) {
  var target = el;
  var ref = el[NAMESPACE$4];
  var tooltip = ref.tooltip;
  var ref$1 = el[NAMESPACE$4].options;
  var clsPos = ref$1.clsPos;
  var position$$1 = ref$1.position;
  var ref$2 = el[NAMESPACE$4].options;
  var offset$$1 = ref$2.offset;
  var node;
  var ref$3 = position$$1.split('-');
  var dir = ref$3[0];
  var align = ref$3[1]; if ( align === void 0 ) align = 'center';
  removeClasses(tooltip, (clsPos + "-(top|bottom|left|right)(-[a-z]+)?"));
  css(tooltip, { top: '', left: '' });
  var axis = getAxis$1(position$$1);
  offset$$1 = isNumeric(offset$$1)
    ? offset$$1
    : (node = $(offset$$1))
      ? offset(node)[axis === 'x' ? 'left' : 'top'] - offset(target)[axis === 'x' ? 'right' : 'bottom']
      : 0;
  var elAttach = axis === 'x'
    ? ((flipPosition(dir)) + " " + align)
    : (align + " " + (flipPosition(dir)));
  var targetAttach = axis === 'x'
    ? (dir + " " + align)
    : (align + " " + dir);
  var elOffset = axis === 'x'
    ? ("" + (dir === 'left' ? -1 * offset$$1 : offset$$1))
    : ("" + (dir === 'top' ? -1 * offset$$1 : offset$$1));
  var targetOffset = null;
  var ref$4 = positionAt(
    tooltip,
    target,
    elAttach,
    targetAttach,
    elOffset,
    targetOffset,
    true
  ).target;
  var x = ref$4.x;
  var y = ref$4.y;
  dir = axis === 'x' ? x : y;
  align = axis === 'x' ? y : x;
  toggleClass(tooltip, (clsPos + "-" + dir + "-" + align), el[NAMESPACE$4].options.offset === false);
  return {
    dir: dir,
    align: align
  }
}
function getOptions$4 (ctx) {
  var ref = ctx.binding;
  var value = ref.value;
  var modifiers = ref.modifiers;
  if (isString(value)) {
    value = { title: value };
  }
  if (Object.keys(modifiers).length) {
    var firstKey = Object.keys(modifiers)[0];
    modifiers = { position: firstKey };
  }
  var options = assign({
    delay: 0,
    title: '',
    offset: false,
    duration: 100,
    position: 'top',
    container: true,
    cls: 'uk-active',
    clsPos: 'uk-tooltip',
    animation: 'scale-up'
  }, modifiers, value);
  options.position = hyphenate(options.position);
  options.animation = options.animation.split(' ');
  if (true) {
    var pos = options.position;
    if (!(/^(top|bottom)-(left|right)$/.test(pos) || /^(top|bottom|left|right)$/.test(pos))) {
      warn(("v-vk-tooltip -> '" + pos + "' is not a valid position value"), ctx.vnode);
    }
  }
  return options
}
function getAxis$1 (position$$1) {
  var ref = position$$1.split('-');
  var dir = ref[0];
  return dir === 'top' || dir === 'bottom' ? 'y' : 'x'
}
function getContainer (el) {
  var ref = el[NAMESPACE$4];
  var vnode = ref.vnode;
  var ref$1 = el[NAMESPACE$4].options;
  var container = ref$1.container;
  return (container === true && vnode.context.$root.$el) || (container && $(container))
}
function createTooltip (el) {
  var ref = el[NAMESPACE$4].options;
  var clsPos = ref.clsPos;
  var title = ref.title;
  var content = el[NAMESPACE$4].prevTitle || title;
  return append(getContainer(el), ("<div class=\"" + clsPos + "\" aria-hidden>\n    <div class=\"" + clsPos + "-inner\">" + content + "</div>\n  </div>"))
}
function getOrigin (position$$1) {
  var dir = position$$1[0];
  var align = position$$1[1];
  return getAxis$1(position$$1) === 'y'
    ? ((flipPosition(dir)) + "-" + align)
    : (align + "-" + (flipPosition(dir)))
}
function isFocused (el) {
  return el === document.activeElement
}

var NAMESPACE$5 = '__vkHeightMatch';
var index$3 = {
  bind: function bind$$1 (el, binding, vnode) {
    el[NAMESPACE$5] = {};
  },
  inserted: function inserted (el, binding, vnode) {
    vnode.context.$nextTick(function () { return update$3(el, { binding: binding, vnode: vnode }); }
    );
    el[NAMESPACE$5].unbind = on(window, 'resize', function () { return update$3(el, { binding: binding, vnode: vnode }); }
    );
  },
  componentUpdated: function componentUpdated (el, binding, vnode) {
    vnode.context.$nextTick(function () { return update$3(el, { binding: binding, vnode: vnode }); }
    );
  },
  unbind: function unbind (el) {
    if (!el[NAMESPACE$5]) {
      return
    }
    el[NAMESPACE$5].unbind();
    delete el[NAMESPACE$5];
  }
}
function update$3 (el, ctx) {
  var opts = getOptions$5(ctx);
  var elements = $$(opts.target, el);
  css(elements, 'minHeight', '');
  var rows = getRows$1(elements, opts.row);
  rows.forEach(function (els) {
    var ref = match(els);
    var height = ref.height;
    var elements = ref.elements;
    css(elements, 'minHeight', height);
  });
}
function getOptions$5 (ctx) {
  var ref = ctx.binding;
  var value = ref.value;
  if (isString(value)) {
    value = { target: value };
  }
  return assign({
    target: '> *',
    row: true
  }, value)
}
function getRows$1 (elements, row) {
  if (!row) {
    return [ elements ]
  }
  var lastOffset = false;
  return elements.reduce(function (rows, el) {
    if (lastOffset !== el.offsetTop) {
      rows.push([el]);
    } else {
      rows[rows.length - 1].push(el);
    }
    lastOffset = el.offsetTop;
    return rows
  }, [])
}
function match (elements) {
  if (elements.length < 2) {
    return {}
  }
  var max = 0;
  var heights = [];
  elements.forEach(function (el) {
    var style;
    var hidden;
    if (!isVisible(el)) {
      style = attr(el, 'style');
      hidden = attr(el, 'hidden');
      attr(el, {
        style: ((style || '') + ";display:block !important;"),
        hidden: null
      });
    }
    max = Math.max(max, el.offsetHeight);
    heights.push(el.offsetHeight);
    if (!isUndefined(style)) {
      attr(el, {style: style, hidden: hidden});
    }
  });
  elements = elements.filter(function (el, i) { return heights[i] < max; });
  return { height: max, elements: elements }
}



var directives = /*#__PURE__*/Object.freeze({
Margin: VkMargin,
Scroll: index$1,
Tooltip: index$2,
HeightMatch: index$3,
HeightViewport: VkHeightViewport
});

var Vuikit = {
  components: components,
  directives: directives,
  install: function install (Vue) {
    each(components, function (def, name) {
      Vue.component(("Vk" + name), def);
    });
    each(directives, function (def, name) {
      Vue.directive(("Vk" + name), def);
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Vuikit);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./node_modules/vuikit/lib/height-viewport.js":
/*!****************************************************!*\
  !*** ./node_modules/vuikit/lib/height-viewport.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/event */ "./node_modules/vuikit/lib/util/event.js");
/* harmony import */ var _util_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/style */ "./node_modules/vuikit/lib/util/style.js");
/* harmony import */ var _util_debug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/debug */ "./node_modules/vuikit/lib/util/debug.js");
/* harmony import */ var _util_selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/selector */ "./node_modules/vuikit/lib/util/selector.js");
/* harmony import */ var _util_dimensions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util/dimensions */ "./node_modules/vuikit/lib/util/dimensions.js");
/* harmony import */ var _util_lang__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util/lang */ "./node_modules/vuikit/lib/util/lang.js");
/**
 * Vuikit 0.8.4
 * (c) 2018 Miljan Aleksic
 * @license MIT
**/

/* Substantial part of the code is adapted from UIkit,
  Copyright (c) 2013-2018 YOOtheme GmbH, getuikit.com */








var NAMESPACE = '__vkHeightViewport';
var index = {
  bind: function bind (el, binding, vnode) {
    el[NAMESPACE] = {};
  },
  inserted: function inserted (el, binding, vnode) {
    vnode.context.$nextTick(function () { return update(el, { binding: binding, vnode: vnode }); }
    );
    el[NAMESPACE].unbind = Object(_util_event__WEBPACK_IMPORTED_MODULE_0__["on"])(window, 'resize', function () { return update(el, { binding: binding, vnode: vnode }); }
    );
  },
  componentUpdated: function componentUpdated (el, binding, vnode) {
    vnode.context.$nextTick(function () { return update(el, { binding: binding, vnode: vnode }); }
    );
  },
  unbind: function unbind (el) {
    if (!el[NAMESPACE]) {
      return
    }
    el[NAMESPACE].unbind();
    delete el[NAMESPACE];
  }
}
function getOptions (ctx) {
  var ref = ctx.binding;
  var value = ref.value;
  var modifiers = ref.modifiers;
  if ("development" !== 'production' && value && !Object(_util_lang__WEBPACK_IMPORTED_MODULE_5__["isObject"])(value)) {
    Object(_util_debug__WEBPACK_IMPORTED_MODULE_2__["warn"])('v-vk-height-viewport -> Object expected as configuration', ctx.vnode.context);
  }
  var options = Object(_util_lang__WEBPACK_IMPORTED_MODULE_5__["assign"])({
    minHeight: 0,
    expand: false,
    offsetTop: false,
    offsetBottom: false
  }, modifiers, value);
  return options
}
function update (el, ctx) {
  var opts = getOptions(ctx);
  Object(_util_style__WEBPACK_IMPORTED_MODULE_1__["css"])(el, 'boxSizing', 'border-box');
  var viewport = Object(_util_dimensions__WEBPACK_IMPORTED_MODULE_4__["height"])(window);
  var minHeight;
  var offsetTop = 0;
  if (opts.expand) {
    Object(_util_style__WEBPACK_IMPORTED_MODULE_1__["css"])(el, {height: '', minHeight: ''});
    var diff = viewport - offsetHeight(document.documentElement);
    if (diff > 0) {
      minHeight = offsetHeight(el) + diff;
    }
  } else {
    var ref = Object(_util_dimensions__WEBPACK_IMPORTED_MODULE_4__["offset"])(el);
    var top = ref.top;
    if (top < viewport / 2 && opts.offsetTop) {
      offsetTop += top;
    }
    if (opts.offsetBottom === true) {
      offsetTop += offsetHeight(el.nextElementSibling);
    } else if (Object(_util_lang__WEBPACK_IMPORTED_MODULE_5__["isNumeric"])(opts.offsetBottom)) {
      offsetTop += (viewport / 100) * opts.offsetBottom;
    } else if (opts.offsetBottom && Object(_util_lang__WEBPACK_IMPORTED_MODULE_5__["endsWith"])(opts.offsetBottom, 'px')) {
      offsetTop += Object(_util_lang__WEBPACK_IMPORTED_MODULE_5__["toFloat"])(opts.offsetBottom);
    } else if (Object(_util_lang__WEBPACK_IMPORTED_MODULE_5__["isString"])(opts.offsetBottom)) {
      offsetTop += offsetHeight(Object(_util_selector__WEBPACK_IMPORTED_MODULE_3__["query"])(opts.offsetBottom, el));
    }
    minHeight = offsetTop ? ("calc(100vh - " + offsetTop + "px)") : '100vh';
  }
  if (!minHeight) {
    return
  }
  Object(_util_style__WEBPACK_IMPORTED_MODULE_1__["css"])(el, { height: '', minHeight: minHeight });
  var elHeight = el.offsetHeight;
  if (opts.minHeight && opts.minHeight > elHeight) {
    Object(_util_style__WEBPACK_IMPORTED_MODULE_1__["css"])(el, 'minHeight', opts.minHeight);
  }
  if (viewport - offsetTop >= elHeight) {
    Object(_util_style__WEBPACK_IMPORTED_MODULE_1__["css"])(el, 'height', minHeight);
  }
}
function offsetHeight (el) {
  return el && (el.offsetHeight || 0)
}

/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ }),

/***/ "./node_modules/vuikit/lib/icons/close-icon.js":
/*!*****************************************************!*\
  !*** ./node_modules/vuikit/lib/icons/close-icon.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Vuikit 0.8.4
 * (c) 2018 Miljan Aleksic
 * @license MIT
**/

/* Substantial part of the code is adapted from UIkit,
  Copyright (c) 2013-2018 YOOtheme GmbH, getuikit.com */

var closeIcon = {
  functional: true,
  render: function (h, ctx) {
    var props = ctx.props;
    var width = props.width || 14;
    var height = props.height || 14;
    var viewBox = props.viewBox || '0 0 14 14';
    return h('svg', {
      attrs: {
        version: '1.1',
        width: width,
        height: height,
        viewBox: viewBox
      },
      domProps: {
        innerHTML: '<path fill="none" stroke="#000" stroke-width="1.1" d="M1 1l12 12M13 1L1 13"/>'
      }
    })
  }
}

/* harmony default export */ __webpack_exports__["default"] = (closeIcon);


/***/ }),

/***/ "./node_modules/vuikit/lib/icons/close-large.js":
/*!******************************************************!*\
  !*** ./node_modules/vuikit/lib/icons/close-large.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Vuikit 0.8.4
 * (c) 2018 Miljan Aleksic
 * @license MIT
**/

/* Substantial part of the code is adapted from UIkit,
  Copyright (c) 2013-2018 YOOtheme GmbH, getuikit.com */

var closeLarge = {
  functional: true,
  render: function (h, ctx) {
    var props = ctx.props;
    var width = props.width || 20;
    var height = props.height || 20;
    var viewBox = props.viewBox || '0 0 20 20';
    return h('svg', {
      attrs: {
        version: '1.1',
        width: width,
        height: height,
        viewBox: viewBox
      },
      domProps: {
        innerHTML: '<path fill="none" stroke="#000" stroke-width="1.4" d="M1 1l18 18M19 1L1 19"/>'
      }
    })
  }
}

/* harmony default export */ __webpack_exports__["default"] = (closeLarge);


/***/ }),

/***/ "./node_modules/vuikit/lib/mixins/events.js":
/*!**************************************************!*\
  !*** ./node_modules/vuikit/lib/mixins/events.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/event */ "./node_modules/vuikit/lib/util/event.js");
/**
 * Vuikit 0.8.4
 * (c) 2018 Miljan Aleksic
 * @license MIT
**/

/* Substantial part of the code is adapted from UIkit,
  Copyright (c) 2013-2018 YOOtheme GmbH, getuikit.com */



var events = {
  methods: {
    on: function on$1 () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];
      this._vk_events_off.push(_util_event__WEBPACK_IMPORTED_MODULE_0__["on"].apply(void 0, args));
    },
    off: function off$1 () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];
      _util_event__WEBPACK_IMPORTED_MODULE_0__["off"].apply(void 0, args);
    }
  },
  created: function created () {
    this._vk_events_off = [];
  },
  beforeDestroy: function beforeDestroy () {
    this._vk_events_off.forEach(function (off$$1) { return off$$1(); });
  }
}

/* harmony default export */ __webpack_exports__["default"] = (events);


/***/ }),

/***/ "./node_modules/vuikit/lib/modal.js":
/*!******************************************!*\
  !*** ./node_modules/vuikit/lib/modal.js ***!
  \******************************************/
/*! exports provided: constants, active, ElementModal, ElementModalFull, ElementModalClose, ElementModalFullClose, ElementModalTitle, ElementModalBody, ElementModalDialog, ElementModalFooter, ElementModalHeader, Modal, ModalFull, ModalClose, ModalFullClose, ModalTitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "constants", function() { return constants; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "active", function() { return active; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementModal", function() { return ElementModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementModalFull", function() { return ElementModalFull; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementModalClose", function() { return ElementModalClose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementModalFullClose", function() { return ElementModalFullClose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementModalTitle", function() { return ElementModalTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementModalBody", function() { return ElementModalBody; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementModalDialog", function() { return ElementModalDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementModalFooter", function() { return ElementModalFooter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementModalHeader", function() { return ElementModalHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return modal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalFull", function() { return modalFull; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalClose", function() { return modal_Close; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalFullClose", function() { return modalFull_Close; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalTitle", function() { return modal_Title; });
/* harmony import */ var _util_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/event */ "./node_modules/vuikit/lib/util/event.js");
/* harmony import */ var _util_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/class */ "./node_modules/vuikit/lib/util/class.js");
/* harmony import */ var _util_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/vue */ "./node_modules/vuikit/lib/util/vue.js");
/* harmony import */ var _icons_close_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons/close-icon */ "./node_modules/vuikit/lib/icons/close-icon.js");
/* harmony import */ var _icons_close_large__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons/close-large */ "./node_modules/vuikit/lib/icons/close-large.js");
/* harmony import */ var _mixins_events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mixins/events */ "./node_modules/vuikit/lib/mixins/events.js");
/* harmony import */ var _util_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./util/style */ "./node_modules/vuikit/lib/util/style.js");
/* harmony import */ var _util_dimensions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./util/dimensions */ "./node_modules/vuikit/lib/util/dimensions.js");
/* harmony import */ var _util_selector__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./util/selector */ "./node_modules/vuikit/lib/util/selector.js");
/* harmony import */ var _util_lang__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./util/lang */ "./node_modules/vuikit/lib/util/lang.js");
/* harmony import */ var _height_viewport__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./height-viewport */ "./node_modules/vuikit/lib/height-viewport.js");
/**
 * Vuikit 0.8.4
 * (c) 2018 Miljan Aleksic
 * @license MIT
**/

/* Substantial part of the code is adapted from UIkit,
  Copyright (c) 2013-2018 YOOtheme GmbH, getuikit.com */













var SHOWN = 'shown';
var HIDDEN = 'hidden';
var TOGGLE = 'update:show';
var KEYUP = 'keyup';

var constants = /*#__PURE__*/Object.freeze({
SHOWN: SHOWN,
HIDDEN: HIDDEN,
TOGGLE: TOGGLE,
KEYUP: KEYUP
});

var doc = typeof document !== 'undefined' && document.documentElement;
var active;
var activeModals;
var Transition = {
  functional: true,
  render: function render (h, ref) {
    var data = ref.data;
    var children = ref.children;
    var modal = ref.parent;
    var def = {
      props: {
        css: false,
        appear: true
      },
      on: {
        beforeEnter: function beforeEnter () {
          Object(_util_class__WEBPACK_IMPORTED_MODULE_1__["addClass"])(doc, 'uk-modal-page');
        },
        enter: function enter (el, done) {
          var prev = active !== modal && active;
          if (prev && !modal.stack) {
            prev.hide();
            Object(_util_event__WEBPACK_IMPORTED_MODULE_0__["once"])(prev.$el, 'transitionend', function () { return doEnter(el, done); }, false, function (e) { return e.target === prev.$el; });
            return
          }
          doEnter(el, done);
        },
        afterEnter: function afterEnter (el) {
          activeModals++;
          active = modal;
          active.$emit(SHOWN);
        },
        beforeLeave: function beforeLeave (el) {
          Object(_util_class__WEBPACK_IMPORTED_MODULE_1__["removeClass"])(el, 'uk-open');
        },
        leave: function leave (el, done) {
          Object(_util_event__WEBPACK_IMPORTED_MODULE_0__["once"])(el, 'transitionend', done, false, function (e) { return e.target === el; });
        },
        afterLeave: function afterLeave (el) {
          activeModals--;
          if (!activeModals) {
            Object(_util_class__WEBPACK_IMPORTED_MODULE_1__["removeClass"])(doc, 'uk-modal-page');
          }
          if (active === modal) {
            active = null;
          }
          modal.$emit(HIDDEN);
        }
      }
    };
    function doEnter (el, done) {
      modal.$root.$el.appendChild(el);
      el.offsetWidth;
      Object(_util_event__WEBPACK_IMPORTED_MODULE_0__["once"])(el, 'transitionend', done, false, function (e) { return e.target === el; });
      setTimeout(function () { return Object(_util_class__WEBPACK_IMPORTED_MODULE_1__["addClass"])(el, 'uk-open'); }, 0);
    }
    return h('transition', def, children)
  }
}
Object(_util_event__WEBPACK_IMPORTED_MODULE_0__["on"])(doc, 'click', function (e) {
  if (!active) {
    return
  }
  var clickedOut = e.target === active.$el;
  if (clickedOut && !active.stuck) {
    active.$emit(TOGGLE, false);
  }
});
Object(_util_event__WEBPACK_IMPORTED_MODULE_0__["on"])(doc, 'keyup', function (e) {
  active && active.$emit(KEYUP, e);
});

var ElementModal = {
  functional: true,
  props: {
    expand: {
      type: Boolean,
      default: false
    }
  },
  render: function render (h, ref) {
    var children = ref.children;
    var data = ref.data;
    var props = ref.props;
    var expand = props.expand;
    return h('div', Object(_util_vue__WEBPACK_IMPORTED_MODULE_2__["mergeData"])(data, {
      class: ['uk-modal', {
        'uk-modal-container': expand
      }],
      style: {
        display: 'block'
      }
    }), children)
  }
}

var ElementModalFull = {
  functional: true,
  render: function render (h, ref) {
    var children = ref.children;
    var data = ref.data;
    var props = ref.props;
    return h('div', Object(_util_vue__WEBPACK_IMPORTED_MODULE_2__["mergeData"])(data, {
      class: 'uk-modal uk-modal-full',
      style: {
        display: 'block'
      }
    }), children)
  }
}

var ElementModalClose = {
  functional: true,
  props: {
    large: {
      type: Boolean,
      default: false
    },
    outside: {
      type: Boolean,
      default: false
    }
  },
  render: function render (h, ref) {
    var obj;
    var data = ref.data;
    var props = ref.props;
    var large = props.large;
    var outside = props.outside;
    var def = {
      class: ['uk-close uk-icon', ( obj = {
        'uk-close-large': large
      }, obj["uk-modal-close-outside"] = outside, obj["uk-modal-close-default"] = !outside, obj)],
      attrs: {
        type: 'button'
      }
    };
    return h('button', Object(_util_vue__WEBPACK_IMPORTED_MODULE_2__["mergeData"])(data, def), [
      h(large ? _icons_close_large__WEBPACK_IMPORTED_MODULE_4__["default"] : _icons_close_icon__WEBPACK_IMPORTED_MODULE_3__["default"])
    ])
  }
}

var ElementModalFullClose = {
  functional: true,
  props: {
    large: {
      type: Boolean,
      default: false
    }
  },
  render: function render (h, ref) {
    var data = ref.data;
    var props = ref.props;
    var large = props.large;
    var def = {
      class: ['uk-close uk-icon uk-modal-close-full', {
        'uk-close-large': large
      }],
      attrs: {
        type: 'button'
      }
    };
    return h('button', Object(_util_vue__WEBPACK_IMPORTED_MODULE_2__["mergeData"])(data, def), [
      h(large ? _icons_close_large__WEBPACK_IMPORTED_MODULE_4__["default"] : _icons_close_icon__WEBPACK_IMPORTED_MODULE_3__["default"])
    ])
  }
}

var ElementModalTitle = {
  functional: true,
  props: {
    tag: {
      type: String,
      default: 'h2'
    }
  },
  render: function render (h, ref) {
    var props = ref.props;
    var data = ref.data;
    var children = ref.children;
    var tag = props.tag;
    return h(tag, Object(_util_vue__WEBPACK_IMPORTED_MODULE_2__["mergeData"])(data, {
      class: 'uk-modal-title'
    }), children)
  }
}

var ElementModalBody = {
  functional: true,
  render: function render (h, ref) {
    var props = ref.props;
    var data = ref.data;
    var children = ref.children;
    return h('div', Object(_util_vue__WEBPACK_IMPORTED_MODULE_2__["mergeData"])(data, {
      class: 'uk-modal-body'
    }), children)
  }
}

var ElementModalDialog = {
  functional: true,
  render: function render (h, ref) {
    var props = ref.props;
    var data = ref.data;
    var children = ref.children;
    return h('div', Object(_util_vue__WEBPACK_IMPORTED_MODULE_2__["mergeData"])(data, {
      class: 'uk-modal-dialog'
    }), children)
  }
}

var ElementModalFooter = {
  functional: true,
  render: function render (h, ref) {
    var props = ref.props;
    var data = ref.data;
    var children = ref.children;
    return h('div', Object(_util_vue__WEBPACK_IMPORTED_MODULE_2__["mergeData"])(data, {
      class: 'uk-modal-footer'
    }), children)
  }
}

var ElementModalHeader = {
  functional: true,
  render: function render (h, ref) {
    var props = ref.props;
    var data = ref.data;
    var children = ref.children;
    return h('div', Object(_util_vue__WEBPACK_IMPORTED_MODULE_2__["mergeData"])(data, {
      class: 'uk-modal-header'
    }), children)
  }
}

var doc$1 = typeof document !== 'undefined' && document.documentElement;
var core = {
  mixins: [_mixins_events__WEBPACK_IMPORTED_MODULE_5__["default"]],
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    hide: function hide () {
      this.$emit(TOGGLE, false);
    }
  },
  beforeDestroy: function beforeDestroy () {
    if (this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el);
    }
    if (!activeModals) {
      Object(_util_class__WEBPACK_IMPORTED_MODULE_1__["removeClass"])(doc$1, 'uk-modal-page');
    }
  }
}

var VkModalOverflowAuto = {
  bind: function bind (el, binding) {
    el.vkModalOverflowAutoOff = Object(_util_event__WEBPACK_IMPORTED_MODULE_0__["on"])(window, 'resize', function () { return update(el, binding); });
    Object(_util_class__WEBPACK_IMPORTED_MODULE_1__["addClass"])(el, 'uk-overflow-auto');
  },
  inserted: function inserted (el, binding, vnode) {
    vnode.context.$nextTick(function () { return update(el, binding); });
  },
  componentUpdated: function componentUpdated (el, binding) {
    update(el, binding);
  },
  unbind: function unbind (el) {
    el.vkModalOverflowAutoOff();
  }
}
function update (el, binding) {
  var modal = Object(_util_selector__WEBPACK_IMPORTED_MODULE_8__["closest"])(el, '.uk-modal');
  var panel = Object(_util_selector__WEBPACK_IMPORTED_MODULE_8__["closest"])(el, '.uk-modal-dialog');
  if (!panel || !modal) {
    return
  }
  var current = Object(_util_style__WEBPACK_IMPORTED_MODULE_6__["css"])(el, 'maxHeight');
  Object(_util_style__WEBPACK_IMPORTED_MODULE_6__["css"])(el, 'maxHeight', 150);
  Object(_util_style__WEBPACK_IMPORTED_MODULE_6__["css"])(el, 'maxHeight', Math.max(150, 150 + Object(_util_dimensions__WEBPACK_IMPORTED_MODULE_7__["height"])(modal) - panel.offsetHeight));
  if (current !== Object(_util_style__WEBPACK_IMPORTED_MODULE_6__["css"])(el, 'maxHeight')) {
    update(el, binding);
  }
}

var modal = {
  name: 'VkModal',
  extends: core,
  directives: {
    VkModalOverflowAuto: VkModalOverflowAuto
  },
  props: {
    stuck: {
      type: Boolean,
      default: false
    },
    overflowAuto: {
      type: Boolean,
      default: false
    },
    center: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: ''
    },
    stack: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    widthClasses: function widthClasses () {
      return this.size
        ? this.size.split(' ').map(function (size) { return ("uk-width-" + size); })
        : ''
    }
  },
  render: function render (h) {
    var this$1 = this;
    var def = {
      class: {
        'uk-flex uk-flex-top': this.center
      },
      style: {
        display: this.center ? 'flex' : 'block'
      },
      props: {
        expand: this.size === 'container'
      },
      directives: [{
        name: 'show',
        value: this.show
      }],
      on: {
      }
    };
    Object.keys(this.$slots).forEach(function (slot) { return Object(_util_lang__WEBPACK_IMPORTED_MODULE_9__["each"])(this$1.$slots[slot], function (node) {
      if (node.fnOptions && node.fnOptions.name === 'VkModalClose') {
        Object(_util_lang__WEBPACK_IMPORTED_MODULE_9__["assign"])(node.data, {
          on: { click: function (e) { return this$1.$emit(TOGGLE, false); } }
        });
      }
    }); });
    var modal = h(ElementModal, def, [
      h(ElementModalDialog, {
        class: [this.widthClasses, {
          'uk-margin-auto-vertical': this.center
        }]
      }, [
        this.$slots.dialog && this.$slots.dialog,
        this.$slots.header && h(ElementModalHeader, this.$slots.header),
        this.$slots.default && h(ElementModalBody, {
          directives: this.overflowAuto
            ? [{ name: 'vk-modal-overflow-auto' }]
            : []
        }, this.$slots.default),
        this.$slots.footer && h(ElementModalFooter, this.$slots.footer)
      ])
    ]);
    return h(Transition, [ modal ])
  }
}

var modalFull = {
  name: 'VkModalFull',
  extends: core,
  directives: {
    VkHeightViewport: _height_viewport__WEBPACK_IMPORTED_MODULE_10__["default"]
  },
  render: function render (h) {
    var def = {
      props: {
        expand: 'full'
      },
      directives: [{
        name: 'show',
        value: this.show
      }]
    };
    var modal = h(ElementModalFull, def, [
      h(ElementModalDialog, {
        class: 'uk-flex uk-flex-center uk-flex-middle',
        directives: [{
          name: 'vk-height-viewport'
        }]
      }, this.$slots.default)
    ]);
    return h(Transition, [ modal ])
  }
}

var modal_Close = {
  name: 'VkModalClose',
  functional: true,
  props: ElementModalClose.props,
  render: ElementModalClose.render
}

var modalFull_Close = {
  name: 'VkModalFullClose',
  functional: true,
  props: ElementModalFullClose.props,
  render: ElementModalFullClose.render
}

var modal_Title = {
  name: 'VkModalTitle',
  functional: true,
  props: ElementModalTitle.props,
  render: ElementModalTitle.render
}




/***/ }),

/***/ "./node_modules/vuikit/lib/util/attr.js":
/*!**********************************************!*\
  !*** ./node_modules/vuikit/lib/util/attr.js ***!
  \**********************************************/
/*! exports provided: attr, hasAttr, removeAttr, filterAttr, data */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attr", function() { return attr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasAttr", function() { return hasAttr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeAttr", function() { return removeAttr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterAttr", function() { return filterAttr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "data", function() { return data; });
/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lang */ "./node_modules/vuikit/lib/util/lang.js");
/**
 * Vuikit 0.8.4
 * (c) 2018 Miljan Aleksic
 * @license MIT
**/

/* Substantial part of the code is adapted from UIkit,
  Copyright (c) 2013-2018 YOOtheme GmbH, getuikit.com */



function attr (element, name, value) {
  if (Object(_lang__WEBPACK_IMPORTED_MODULE_0__["isObject"])(name)) {
    for (var key in name) {
      attr(element, key, name[key]);
    }
    return
  }
  if (Object(_lang__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(value)) {
    element = Object(_lang__WEBPACK_IMPORTED_MODULE_0__["toNode"])(element);
    return element && element.getAttribute(name)
  } else {
    Object(_lang__WEBPACK_IMPORTED_MODULE_0__["toNodes"])(element).forEach(function (element) {
      if (Object(_lang__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(value)) {
        value = value.call(element, attr(element, name));
      }
      if (value === null) {
        removeAttr(element, name);
      } else {
        element.setAttribute(name, value);
      }
    });
  }
}
function hasAttr (element, name) {
  return Object(_lang__WEBPACK_IMPORTED_MODULE_0__["toNodes"])(element).some(function (element) { return element.hasAttribute(name); })
}
function removeAttr (element, name) {
  element = Object(_lang__WEBPACK_IMPORTED_MODULE_0__["toNodes"])(element);
  name.split(' ').forEach(function (name) { return element.forEach(function (element) { return element.removeAttribute(name); }
    ); }
  );
}
function filterAttr (element, attribute, pattern, replacement) {
  attr(element, attribute, function (value) { return value ? value.replace(pattern, replacement) : value; });
}
function data (element, attribute) {
  for (var i = 0, attrs = [attribute, ("data-" + attribute)]; i < attrs.length; i++) {
    if (hasAttr(element, attrs[i])) {
      return attr(element, attrs[i])
    }
  }
}




/***/ }),

/***/ "./node_modules/vuikit/lib/util/class.js":
/*!***********************************************!*\
  !*** ./node_modules/vuikit/lib/util/class.js ***!
  \***********************************************/
/*! exports provided: addClass, removeClass, removeClasses, replaceClass, hasClass, toggleClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addClass", function() { return addClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeClass", function() { return removeClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeClasses", function() { return removeClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replaceClass", function() { return replaceClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasClass", function() { return hasClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleClass", function() { return toggleClass; });
/* harmony import */ var _attr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attr */ "./node_modules/vuikit/lib/util/attr.js");
/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lang */ "./node_modules/vuikit/lib/util/lang.js");
/**
 * Vuikit 0.8.4
 * (c) 2018 Miljan Aleksic
 * @license MIT
**/

/* Substantial part of the code is adapted from UIkit,
  Copyright (c) 2013-2018 YOOtheme GmbH, getuikit.com */




function addClass (element) {
  var args = [], len = arguments.length - 1;
  while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];
  apply(element, args, 'add');
}
function removeClass (element) {
  var args = [], len = arguments.length - 1;
  while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];
  apply(element, args, 'remove');
}
function removeClasses (element, cls) {
  Object(_attr__WEBPACK_IMPORTED_MODULE_0__["filterAttr"])(element, 'class', new RegExp(("(^|\\s)" + cls + "(?!\\S)"), 'g'), '');
}
function replaceClass (element) {
  var args = [], len = arguments.length - 1;
  while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];
  args[0] && removeClass(element, args[0]);
  args[1] && addClass(element, args[1]);
}
function hasClass (element, cls) {
  return Object(_lang__WEBPACK_IMPORTED_MODULE_1__["toNodes"])(element).some(function (element) { return element.classList.contains(cls); })
}
function toggleClass (element) {
  var args = [], len = arguments.length - 1;
  while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];
  if (!args.length) {
    return
  }
  args = getArgs(args);
  var force = !Object(_lang__WEBPACK_IMPORTED_MODULE_1__["isString"])(args[args.length - 1]) ? args.pop() : [];
  args = args.filter(Boolean);
  Object(_lang__WEBPACK_IMPORTED_MODULE_1__["toNodes"])(element).forEach(function (ref) {
    var classList = ref.classList;
    for (var i = 0; i < args.length; i++) {
      supports.Force
        ? classList.toggle.apply(classList, [args[i]].concat(force))
        : (classList[(!Object(_lang__WEBPACK_IMPORTED_MODULE_1__["isUndefined"])(force) ? force : !classList.contains(args[i])) ? 'add' : 'remove'](args[i]));
    }
  });
}
function apply (element, args, fn) {
  args = getArgs(args).filter(Boolean);
  args.length && Object(_lang__WEBPACK_IMPORTED_MODULE_1__["toNodes"])(element).forEach(function (ref) {
    var classList = ref.classList;
    supports.Multiple
      ? classList[fn].apply(classList, args)
      : args.forEach(function (cls) { return classList[fn](cls); });
  });
}
function getArgs (args) {
  return args.reduce(function (args, arg) { return args.concat.call(args, Object(_lang__WEBPACK_IMPORTED_MODULE_1__["isString"])(arg) && Object(_lang__WEBPACK_IMPORTED_MODULE_1__["includes"])(arg, ' ') ? arg.trim().split(' ') : arg); }
    , [])
}
var supports = {};
(function () {
  if (typeof document !== 'undefined' && document.createElement('_').classList) {
    var list = document.createElement('_').classList;
    list.add('a', 'b');
    list.toggle('c', false);
    supports.Multiple = list.contains('b');
    supports.Force = !list.contains('c');
    list = null;
  }
})();




/***/ }),

/***/ "./node_modules/vuikit/lib/util/debug.js":
/*!***********************************************!*\
  !*** ./node_modules/vuikit/lib/util/debug.js ***!
  \***********************************************/
/*! exports provided: warn, tip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warn", function() { return warn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tip", function() { return tip; });
/**
 * Vuikit 0.8.4
 * (c) 2018 Miljan Aleksic
 * @license MIT
**/

/* Substantial part of the code is adapted from UIkit,
  Copyright (c) 2013-2018 YOOtheme GmbH, getuikit.com */

function noop () {}
var warn = noop;
var tip = noop;
if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };
  warn = function (msg, vm) {
    if (hasConsole) {
      console.error("[Vuikit warn]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };
  tip = function (msg, vm) {
    if (hasConsole) {
      console.warn("[Vuikit tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };
  var formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>'
    }
    var name = typeof vm === 'string'
      ? vm
      : typeof vm === 'function' && vm.options
        ? vm.options.name
        : vm._isVue
          ? vm.$options.name || vm.$options._componentTag
          : vm.name;
    var file = vm._isVue && vm.$options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }
    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };
  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };
  var generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}




/***/ }),

/***/ "./node_modules/vuikit/lib/util/dimensions.js":
/*!****************************************************!*\
  !*** ./node_modules/vuikit/lib/util/dimensions.js ***!
  \****************************************************/
/*! exports provided: positionAt, offset, position, height, width, flipPosition, isInView, scrolledOver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "positionAt", function() { return positionAt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offset", function() { return offset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "position", function() { return position; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "height", function() { return height; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "width", function() { return width; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flipPosition", function() { return flipPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInView", function() { return isInView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrolledOver", function() { return scrolledOver; });
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style */ "./node_modules/vuikit/lib/util/style.js");
/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter */ "./node_modules/vuikit/lib/util/filter.js");
/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lang */ "./node_modules/vuikit/lib/util/lang.js");
/**
 * Vuikit 0.8.4
 * (c) 2018 Miljan Aleksic
 * @license MIT
**/

/* Substantial part of the code is adapted from UIkit,
  Copyright (c) 2013-2018 YOOtheme GmbH, getuikit.com */





var dirs = {
  width: ['x', 'left', 'right'],
  height: ['y', 'top', 'bottom']
};
function positionAt (element, target, elAttach, targetAttach, elOffset, targetOffset, flip, boundary) {
  elAttach = getPos(elAttach);
  targetAttach = getPos(targetAttach);
  var flipped = {element: elAttach, target: targetAttach};
  if (!element || !target) {
    return flipped
  }
  var dim = getDimensions(element);
  var targetDim = getDimensions(target);
  var position = targetDim;
  moveTo(position, elAttach, dim, -1);
  moveTo(position, targetAttach, targetDim, 1);
  elOffset = getOffsets(elOffset, dim.width, dim.height);
  targetOffset = getOffsets(targetOffset, targetDim.width, targetDim.height);
  elOffset['x'] += targetOffset['x'];
  elOffset['y'] += targetOffset['y'];
  position.left += elOffset['x'];
  position.top += elOffset['y'];
  boundary = getDimensions(boundary || window(element));
  if (flip) {
    Object(_lang__WEBPACK_IMPORTED_MODULE_2__["each"])(dirs, function (ref, prop) {
      var dir = ref[0];
      var align = ref[1];
      var alignFlip = ref[2];
      if (!(flip === true || Object(_lang__WEBPACK_IMPORTED_MODULE_2__["includes"])(flip, dir))) {
        return
      }
      var elemOffset = elAttach[dir] === align
        ? -dim[prop]
        : elAttach[dir] === alignFlip
          ? dim[prop]
          : 0;
      var targetOffset = targetAttach[dir] === align
        ? targetDim[prop]
        : targetAttach[dir] === alignFlip
          ? -targetDim[prop]
          : 0;
      if (position[align] < boundary[align] || position[align] + dim[prop] > boundary[alignFlip]) {
        var centerOffset = dim[prop] / 2;
        var centerTargetOffset = targetAttach[dir] === 'center' ? -targetDim[prop] / 2 : 0;
        elAttach[dir] === 'center' && (
          apply(centerOffset, centerTargetOffset) ||
                    apply(-centerOffset, -centerTargetOffset)
        ) || apply(elemOffset, targetOffset);
      }
      function apply (elemOffset, targetOffset) {
        var newVal = position[align] + elemOffset + targetOffset - elOffset[dir] * 2;
        if (newVal >= boundary[align] && newVal + dim[prop] <= boundary[alignFlip]) {
          position[align] = newVal;
          ['element', 'target'].forEach(function (el) {
            flipped[el][dir] = !elemOffset
              ? flipped[el][dir]
              : flipped[el][dir] === dirs[prop][1]
                ? dirs[prop][2]
                : dirs[prop][1];
          });
          return true
        }
      }
    });
  }
  offset(element, position);
  return flipped
}
function offset (element, coordinates) {
  element = Object(_lang__WEBPACK_IMPORTED_MODULE_2__["toNode"])(element);
  if (coordinates) {
    var currentOffset = offset(element);
    var pos = Object(_style__WEBPACK_IMPORTED_MODULE_0__["css"])(element, 'position');
    ['left', 'top'].forEach(function (prop) {
      if (prop in coordinates) {
        var value = Object(_style__WEBPACK_IMPORTED_MODULE_0__["css"])(element, prop);
        element.style[prop] = ((coordinates[prop] - currentOffset[prop]) +
                Object(_lang__WEBPACK_IMPORTED_MODULE_2__["toFloat"])(pos === 'absolute' && value === 'auto' ? position(element)[prop] : value)) + "px";
      }
    });
    return
  }
  return getDimensions(element)
}
function getDimensions (element) {
  element = Object(_lang__WEBPACK_IMPORTED_MODULE_2__["toNode"])(element);
  var ref = window(element);
  var top = ref.pageYOffset;
  var left = ref.pageXOffset;
  if (Object(_lang__WEBPACK_IMPORTED_MODULE_2__["isWindow"])(element)) {
    var height = element.innerHeight;
    var width = element.innerWidth;
    return {
      top: top,
      left: left,
      height: height,
      width: width,
      bottom: top + height,
      right: left + width
    }
  }
  var display = false;
  if (!Object(_filter__WEBPACK_IMPORTED_MODULE_1__["isVisible"])(element)) {
    display = element.style.display;
    element.style.display = 'block';
  }
  var rect = element.getBoundingClientRect();
  if (display !== false) {
    element.style.display = display;
  }
  return {
    height: rect.height,
    width: rect.width,
    top: rect.top + top,
    left: rect.left + left,
    bottom: rect.bottom + top,
    right: rect.right + left
  }
}
function position (element) {
  element = Object(_lang__WEBPACK_IMPORTED_MODULE_2__["toNode"])(element);
  var parent = offsetParent(element);
  var parentOffset = parent === docEl(element) ? {top: 0, left: 0} : offset(parent);
  var ref = ['top', 'left'].reduce(function (props, prop) {
    var propName = Object(_lang__WEBPACK_IMPORTED_MODULE_2__["ucfirst"])(prop);
    props[prop] -= parentOffset[prop] +
            (Object(_lang__WEBPACK_IMPORTED_MODULE_2__["toFloat"])(Object(_style__WEBPACK_IMPORTED_MODULE_0__["css"])(element, ("margin" + propName))) || 0) +
            (Object(_lang__WEBPACK_IMPORTED_MODULE_2__["toFloat"])(Object(_style__WEBPACK_IMPORTED_MODULE_0__["css"])(parent, ("border" + propName + "Width"))) || 0);
    return props
  }, offset(element));
  var top = ref.top;
  var left = ref.left;
  return {top: top, left: left}
}
function offsetParent (element) {
  var parent = Object(_lang__WEBPACK_IMPORTED_MODULE_2__["toNode"])(element).offsetParent;
  while (parent && Object(_style__WEBPACK_IMPORTED_MODULE_0__["css"])(parent, 'position') === 'static') {
    parent = parent.offsetParent;
  }
  return parent || docEl(element)
}
var height = dimension('height');
var width = dimension('width');
function dimension (prop) {
  var propName = Object(_lang__WEBPACK_IMPORTED_MODULE_2__["ucfirst"])(prop);
  return function (element, value) {
    element = Object(_lang__WEBPACK_IMPORTED_MODULE_2__["toNode"])(element);
    if (Object(_lang__WEBPACK_IMPORTED_MODULE_2__["isUndefined"])(value)) {
      if (Object(_lang__WEBPACK_IMPORTED_MODULE_2__["isWindow"])(element)) {
        return element[("inner" + propName)]
      }
      if (Object(_lang__WEBPACK_IMPORTED_MODULE_2__["isDocument"])(element)) {
        var doc = element.documentElement;
        return Math.max(doc[("offset" + propName)], doc[("scroll" + propName)])
      }
      value = Object(_style__WEBPACK_IMPORTED_MODULE_0__["css"])(element, prop);
      value = value === 'auto' ? element[("offset" + propName)] : Object(_lang__WEBPACK_IMPORTED_MODULE_2__["toFloat"])(value) || 0;
      return getContentSize(prop, element, value)
    } else {
      Object(_style__WEBPACK_IMPORTED_MODULE_0__["css"])(element, prop, !value && value !== 0
        ? ''
        : getContentSize(prop, element, value) + 'px'
      );
    }
  }
}
function getContentSize (prop, element, value) {
  return Object(_style__WEBPACK_IMPORTED_MODULE_0__["css"])(element, 'boxSizing') === 'border-box' ? dirs[prop].slice(1).map(_lang__WEBPACK_IMPORTED_MODULE_2__["ucfirst"]).reduce(function (value, prop) { return value -
        Object(_lang__WEBPACK_IMPORTED_MODULE_2__["toFloat"])(Object(_style__WEBPACK_IMPORTED_MODULE_0__["css"])(element, ("padding" + prop))) -
        Object(_lang__WEBPACK_IMPORTED_MODULE_2__["toFloat"])(Object(_style__WEBPACK_IMPORTED_MODULE_0__["css"])(element, ("border" + prop + "Width"))); }
    , value) : value
}
function moveTo (position, attach, dim, factor) {
  Object(_lang__WEBPACK_IMPORTED_MODULE_2__["each"])(dirs, function (ref, prop) {
    var dir = ref[0];
    var align = ref[1];
    var alignFlip = ref[2];
    if (attach[dir] === alignFlip) {
      position[align] += dim[prop] * factor;
    } else if (attach[dir] === 'center') {
      position[align] += dim[prop] * factor / 2;
    }
  });
}
function getPos (pos) {
  var x = /left|center|right/;
  var y = /top|center|bottom/;
  pos = (pos || '').split(' ');
  if (pos.length === 1) {
    pos = x.test(pos[0])
      ? pos.concat(['center'])
      : y.test(pos[0])
        ? ['center'].concat(pos)
        : ['center', 'center'];
  }
  return {
    x: x.test(pos[0]) ? pos[0] : 'center',
    y: y.test(pos[1]) ? pos[1] : 'center'
  }
}
function getOffsets (offsets, width, height) {
  var ref = (offsets || '').split(' ');
  var x = ref[0];
  var y = ref[1];
  return {
    x: x ? Object(_lang__WEBPACK_IMPORTED_MODULE_2__["toFloat"])(x) * (Object(_lang__WEBPACK_IMPORTED_MODULE_2__["endsWith"])(x, '%') ? width / 100 : 1) : 0,
    y: y ? Object(_lang__WEBPACK_IMPORTED_MODULE_2__["toFloat"])(y) * (Object(_lang__WEBPACK_IMPORTED_MODULE_2__["endsWith"])(y, '%') ? height / 100 : 1) : 0
  }
}
function flipPosition (pos) {
  switch (pos) {
    case 'left':
      return 'right'
    case 'right':
      return 'left'
    case 'top':
      return 'bottom'
    case 'bottom':
      return 'top'
    default:
      return pos
  }
}
function isInView (element, top, left) {
  if ( top === void 0 ) top = 0;
  if ( left === void 0 ) left = 0;
  element = Object(_lang__WEBPACK_IMPORTED_MODULE_2__["toNode"])(element);
  var win = window(element);
  return Object(_lang__WEBPACK_IMPORTED_MODULE_2__["intersectRect"])(element.getBoundingClientRect(), {
    top: top,
    left: left,
    bottom: top + height(win),
    right: left + width(win)
  })
}
function scrolledOver (element) {
  element = Object(_lang__WEBPACK_IMPORTED_MODULE_2__["toNode"])(element);
  var win = window(element);
  var doc = document(element);
  var elHeight = element.offsetHeight;
  var top = positionTop(element);
  var vp = height(win);
  var vh = vp + Math.min(0, top - vp);
  var diff = Math.max(0, vp - (height(doc) - (top + elHeight)));
  return Object(_lang__WEBPACK_IMPORTED_MODULE_2__["clamp"])(((vh + win.pageYOffset - top) / ((vh + (elHeight - (diff < vp ? diff : 0))) / 100)) / 100)
}
function positionTop (element) {
  var top = 0;
  do {
    top += element.offsetTop;
  } while ((element = element.offsetParent))
  return top
}
function window (element) {
  return Object(_lang__WEBPACK_IMPORTED_MODULE_2__["isWindow"])(element) ? element : document(element).defaultView
}
function document (element) {
  return Object(_lang__WEBPACK_IMPORTED_MODULE_2__["toNode"])(element).ownerDocument
}
function docEl (element) {
  return document(element).documentElement
}




/***/ }),

/***/ "./node_modules/vuikit/lib/util/dom.js":
/*!*********************************************!*\
  !*** ./node_modules/vuikit/lib/util/dom.js ***!
  \*********************************************/
/*! exports provided: isReady, ready, index, getIndex, empty, html, prepend, append, before, after, remove, wrapAll, wrapInner, unwrap, fragment, apply */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isReady", function() { return isReady; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ready", function() { return ready; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "index", function() { return index; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIndex", function() { return getIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return empty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "html", function() { return html; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prepend", function() { return prepend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "append", function() { return append; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "before", function() { return before; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "after", function() { return after; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapAll", function() { return wrapAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapInner", function() { return wrapInner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unwrap", function() { return unwrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fragment", function() { return fragment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apply", function() { return apply; });
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event */ "./node_modules/vuikit/lib/util/event.js");
/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lang */ "./node_modules/vuikit/lib/util/lang.js");
/**
 * Vuikit 0.8.4
 * (c) 2018 Miljan Aleksic
 * @license MIT
**/

/* Substantial part of the code is adapted from UIkit,
  Copyright (c) 2013-2018 YOOtheme GmbH, getuikit.com */




var doc = typeof document !== 'undefined' && document;
function isReady () {
  return doc && (document.readyState === 'complete' || document.readyState !== 'loading' && !document.documentElement.doScroll)
}
function ready (fn) {
  if (!doc) {
    return
  }
  if (isReady()) {
    fn();
    return
  }
  var handle = function () {
    unbind1();
    unbind2();
    fn();
  };
  var unbind1 = Object(_event__WEBPACK_IMPORTED_MODULE_0__["on"])(document, 'DOMContentLoaded', handle);
  var unbind2 = Object(_event__WEBPACK_IMPORTED_MODULE_0__["on"])(window, 'load', handle);
}
function index (element, ref) {
  return ref
    ? Object(_lang__WEBPACK_IMPORTED_MODULE_1__["toNodes"])(element).indexOf(Object(_lang__WEBPACK_IMPORTED_MODULE_1__["toNode"])(ref))
    : Object(_lang__WEBPACK_IMPORTED_MODULE_1__["toNodes"])((element = Object(_lang__WEBPACK_IMPORTED_MODULE_1__["toNode"])(element)) && element.parentNode.children).indexOf(element)
}
function getIndex (i, elements, current, finite) {
  if ( current === void 0 ) current = 0;
  if ( finite === void 0 ) finite = false;
  elements = Object(_lang__WEBPACK_IMPORTED_MODULE_1__["toNodes"])(elements);
  var length = elements.length;
  i = Object(_lang__WEBPACK_IMPORTED_MODULE_1__["isNumeric"])(i)
    ? Object(_lang__WEBPACK_IMPORTED_MODULE_1__["toNumber"])(i)
    : i === 'next'
      ? current + 1
      : i === 'previous'
        ? current - 1
        : index(elements, i);
  if (finite) {
    return Object(_lang__WEBPACK_IMPORTED_MODULE_1__["clamp"])(i, 0, length - 1)
  }
  i %= length;
  return i < 0 ? i + length : i
}
function empty (element) {
  element = Object(_lang__WEBPACK_IMPORTED_MODULE_1__["toNode"])(element);
  element.innerHTML = '';
  return element
}
function html (parent, html) {
  parent = Object(_lang__WEBPACK_IMPORTED_MODULE_1__["toNode"])(parent);
  return Object(_lang__WEBPACK_IMPORTED_MODULE_1__["isUndefined"])(html)
    ? parent.innerHTML
    : append(parent.hasChildNodes() ? empty(parent) : parent, html)
}
function prepend (parent, element) {
  parent = Object(_lang__WEBPACK_IMPORTED_MODULE_1__["toNode"])(parent);
  if (!parent.hasChildNodes()) {
    return append(parent, element)
  } else {
    return insertNodes(element, function (element) { return parent.insertBefore(element, parent.firstChild); })
  }
}
function append (parent, element) {
  parent = Object(_lang__WEBPACK_IMPORTED_MODULE_1__["toNode"])(parent);
  return insertNodes(element, function (element) { return parent.appendChild(element); })
}
function before (ref, element) {
  ref = Object(_lang__WEBPACK_IMPORTED_MODULE_1__["toNode"])(ref);
  return insertNodes(element, function (element) { return ref.parentNode.insertBefore(element, ref); })
}
function after (ref, element) {
  ref = Object(_lang__WEBPACK_IMPORTED_MODULE_1__["toNode"])(ref);
  return insertNodes(element, function (element) { return ref.nextSibling
    ? before(ref.nextSibling, element)
    : append(ref.parentNode, element); }
  )
}
function insertNodes (element, fn) {
  element = Object(_lang__WEBPACK_IMPORTED_MODULE_1__["isString"])(element) ? fragment(element) : element;
  return element
    ? 'length' in element
      ? Object(_lang__WEBPACK_IMPORTED_MODULE_1__["toNodes"])(element).map(fn)
      : fn(element)
    : null
}
function remove (element) {
  Object(_lang__WEBPACK_IMPORTED_MODULE_1__["toNodes"])(element).map(function (element) { return element.parentNode && element.parentNode.removeChild(element); });
}
function wrapAll (element, structure) {
  structure = Object(_lang__WEBPACK_IMPORTED_MODULE_1__["toNode"])(before(element, structure));
  while (structure.firstChild) {
    structure = structure.firstChild;
  }
  append(structure, element);
  return structure
}
function wrapInner (element, structure) {
  return Object(_lang__WEBPACK_IMPORTED_MODULE_1__["toNodes"])(Object(_lang__WEBPACK_IMPORTED_MODULE_1__["toNodes"])(element).map(function (element) { return element.hasChildNodes ? wrapAll(Object(_lang__WEBPACK_IMPORTED_MODULE_1__["toNodes"])(element.childNodes), structure) : append(element, structure); }
  ))
}
function unwrap (element) {
  Object(_lang__WEBPACK_IMPORTED_MODULE_1__["toNodes"])(element)
    .map(function (element) { return element.parentNode; })
    .filter(function (value, index, self) { return self.indexOf(value) === index; })
    .forEach(function (parent) {
      before(parent, parent.childNodes);
      remove(parent);
    });
}
var fragmentRE = /^\s*<(\w+|!)[^>]*>/;
var singleTagRE = /^<(\w+)\s*\/?>(?:<\/\1>)?$/;
function fragment (html) {
  var matches = singleTagRE.exec(html);
  if (matches) {
    return document.createElement(matches[1])
  }
  var container = document.createElement('div');
  if (fragmentRE.test(html)) {
    container.insertAdjacentHTML('beforeend', html.trim());
  } else {
    container.textContent = html;
  }
  return container.childNodes.length > 1 ? Object(_lang__WEBPACK_IMPORTED_MODULE_1__["toNodes"])(container.childNodes) : container.firstChild
}
function apply (node, fn) {
  if (!node || node.nodeType !== 1) {
    return
  }
  fn(node);
  node = node.firstElementChild;
  while (node) {
    apply(node, fn);
    node = node.nextElementSibling;
  }
}




/***/ }),

/***/ "./node_modules/vuikit/lib/util/event.js":
/*!***********************************************!*\
  !*** ./node_modules/vuikit/lib/util/event.js ***!
  \***********************************************/
/*! exports provided: win, on, off, once, trigger, createEvent, toEventTargets, preventClick */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "win", function() { return win; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "on", function() { return on; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "off", function() { return off; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "once", function() { return once; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trigger", function() { return trigger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEvent", function() { return createEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toEventTargets", function() { return toEventTargets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "preventClick", function() { return preventClick; });
/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter */ "./node_modules/vuikit/lib/util/filter.js");
/* harmony import */ var _selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selector */ "./node_modules/vuikit/lib/util/selector.js");
/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lang */ "./node_modules/vuikit/lib/util/lang.js");
/**
 * Vuikit 0.8.4
 * (c) 2018 Miljan Aleksic
 * @license MIT
**/

/* Substantial part of the code is adapted from UIkit,
  Copyright (c) 2013-2018 YOOtheme GmbH, getuikit.com */





var win = typeof window !== 'undefined' && window;
function on () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];
  var ref = getArgs(args);
  var target = ref[0];
  var type = ref[1];
  var selector = ref[2];
  var listener = ref[3];
  var useCapture = ref[4];
  target = toEventTarget(target);
  if (selector) {
    listener = delegate(target, selector, listener);
  }
  if (listener.length > 1) {
    listener = detail(listener);
  }
  type.split(' ').forEach(function (type) { return target && target.addEventListener(type, listener, useCapture); });
  return function () { return off(target, type, listener, useCapture); }
}
function off (target, type, listener, useCapture) {
  if ( useCapture === void 0 ) useCapture = false;
  target = toEventTarget(target);
  target && type.split(' ').forEach(function (type) { return target.removeEventListener(type, listener, useCapture); });
}
function once () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];
  var ref = getArgs(args);
  var element = ref[0];
  var type = ref[1];
  var selector = ref[2];
  var listener = ref[3];
  var useCapture = ref[4];
  var condition = ref[5];
  var off = on(element, type, selector, function (e) {
    var result = !condition || condition(e);
    if (result) {
      off();
      listener(e, result);
    }
  }, useCapture);
  return off
}
function trigger (target, event, detail) {
  return toEventTargets(target).reduce(function (notCanceled, target) { return notCanceled && target.dispatchEvent(createEvent(event, true, true, detail)); }
    , true)
}
function createEvent (e, bubbles, cancelable, detail) {
  if ( bubbles === void 0 ) bubbles = true;
  if ( cancelable === void 0 ) cancelable = false;
  if (Object(_lang__WEBPACK_IMPORTED_MODULE_2__["isString"])(e)) {
    var event = document.createEvent('CustomEvent');
    event.initCustomEvent(e, bubbles, cancelable, detail);
    e = event;
  }
  return e
}
function getArgs (args) {
  if (Object(_lang__WEBPACK_IMPORTED_MODULE_2__["isString"])(args[0])) {
    args[0] = Object(_selector__WEBPACK_IMPORTED_MODULE_1__["find"])(args[0]);
  }
  if (Object(_lang__WEBPACK_IMPORTED_MODULE_2__["isFunction"])(args[2])) {
    args.splice(2, 0, false);
  }
  return args
}
function delegate (element, selector, listener) {
  var this$1 = this;
  return function (e) {
    var target = e.target;
    var current = selector[0] === '>'
      ? Object(_selector__WEBPACK_IMPORTED_MODULE_1__["findAll"])(selector, element).reverse().filter(function (element) { return Object(_filter__WEBPACK_IMPORTED_MODULE_0__["within"])(target, element); })[0]
      : Object(_selector__WEBPACK_IMPORTED_MODULE_1__["closest"])(target, selector);
    if (current) {
      e.delegate = element;
      e.current = current;
      listener.call(this$1, e);
    }
  }
}
function detail (listener) {
  return function (e) { return Object(_lang__WEBPACK_IMPORTED_MODULE_2__["isArray"])(e.detail) ? listener.apply(listener, [e].concat(e.detail)) : listener(e); }
}
function isEventTarget (target) {
  return typeof window !== 'undefined' && 'EventTarget' in window
    ? target instanceof window.EventTarget
    : target && 'addEventListener' in target
}
function toEventTarget (target) {
  return isEventTarget(target) ? target : Object(_lang__WEBPACK_IMPORTED_MODULE_2__["toNode"])(target)
}
function toEventTargets (target) {
  return isEventTarget(target)
    ? [target]
    : Object(_lang__WEBPACK_IMPORTED_MODULE_2__["isArray"])(target)
      ? target.map(toEventTarget).filter(Boolean)
      : Object(_lang__WEBPACK_IMPORTED_MODULE_2__["toNodes"])(target)
}
function preventClick () {
  var timer = setTimeout(once(document, 'click', function (e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    clearTimeout(timer);
  }, true));
  trigger(document, 'touchcancel');
}




/***/ }),

/***/ "./node_modules/vuikit/lib/util/filter.js":
/*!************************************************!*\
  !*** ./node_modules/vuikit/lib/util/filter.js ***!
  \************************************************/
/*! exports provided: isVoidElement, isVisible, selInput, isInput, filter, within */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isVoidElement", function() { return isVoidElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isVisible", function() { return isVisible; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selInput", function() { return selInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInput", function() { return isInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return filter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "within", function() { return within; });
/* harmony import */ var _selector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selector */ "./node_modules/vuikit/lib/util/selector.js");
/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lang */ "./node_modules/vuikit/lib/util/lang.js");
/**
 * Vuikit 0.8.4
 * (c) 2018 Miljan Aleksic
 * @license MIT
**/

/* Substantial part of the code is adapted from UIkit,
  Copyright (c) 2013-2018 YOOtheme GmbH, getuikit.com */




var voidElements = {
  area: true,
  base: true,
  br: true,
  col: true,
  embed: true,
  hr: true,
  img: true,
  input: true,
  keygen: true,
  link: true,
  menuitem: true,
  meta: true,
  param: true,
  source: true,
  track: true,
  wbr: true
};
function isVoidElement (element) {
  return Object(_lang__WEBPACK_IMPORTED_MODULE_1__["toNodes"])(element).some(function (element) { return voidElements[element.tagName.toLowerCase()]; })
}
function isVisible (element) {
  return Object(_lang__WEBPACK_IMPORTED_MODULE_1__["toNodes"])(element).some(function (element) { return element.offsetHeight || element.getBoundingClientRect().height; })
}
var selInput = 'input,select,textarea,button';
function isInput (element) {
  return Object(_lang__WEBPACK_IMPORTED_MODULE_1__["toNodes"])(element).some(function (element) { return Object(_selector__WEBPACK_IMPORTED_MODULE_0__["matches"])(element, selInput); })
}
function filter (element, selector) {
  return Object(_lang__WEBPACK_IMPORTED_MODULE_1__["toNodes"])(element).filter(function (element) { return Object(_selector__WEBPACK_IMPORTED_MODULE_0__["matches"])(element, selector); })
}
function within (element, selector) {
  return !Object(_lang__WEBPACK_IMPORTED_MODULE_1__["isString"])(selector)
    ? element === selector || (Object(_lang__WEBPACK_IMPORTED_MODULE_1__["isDocument"])(selector)
      ? selector.documentElement
      : Object(_lang__WEBPACK_IMPORTED_MODULE_1__["toNode"])(selector)).contains(Object(_lang__WEBPACK_IMPORTED_MODULE_1__["toNode"])(element))
    : Object(_selector__WEBPACK_IMPORTED_MODULE_0__["matches"])(element, selector) || Object(_selector__WEBPACK_IMPORTED_MODULE_0__["closest"])(element, selector)
}




/***/ }),

/***/ "./node_modules/vuikit/lib/util/lang.js":
/*!**********************************************!*\
  !*** ./node_modules/vuikit/lib/util/lang.js ***!
  \**********************************************/
/*! exports provided: bind, hasOwn, hyphenate, camelize, ucfirst, startsWith, endsWith, includes, isArray, isFunction, isObject, isPlainObject, isWindow, isDocument, isJQuery, isNode, isNodeCollection, isBoolean, isString, isNumber, isNumeric, isUndefined, toBoolean, toNumber, toFloat, toNode, toNodes, toList, toMs, swap, assign, each, sortBy, clamp, noop, intersectRect, pointInRect, Dimensions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bind", function() { return bind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasOwn", function() { return hasOwn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hyphenate", function() { return hyphenate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "camelize", function() { return camelize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ucfirst", function() { return ucfirst; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startsWith", function() { return startsWith; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endsWith", function() { return endsWith; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "includes", function() { return includes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return isArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return isFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPlainObject", function() { return isPlainObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isWindow", function() { return isWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDocument", function() { return isDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isJQuery", function() { return isJQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNode", function() { return isNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNodeCollection", function() { return isNodeCollection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBoolean", function() { return isBoolean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return isNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumeric", function() { return isNumeric; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return isUndefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toBoolean", function() { return toBoolean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toNumber", function() { return toNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toFloat", function() { return toFloat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toNode", function() { return toNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toNodes", function() { return toNodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toList", function() { return toList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toMs", function() { return toMs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "swap", function() { return swap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assign", function() { return assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "each", function() { return each; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortBy", function() { return sortBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clamp", function() { return clamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return noop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intersectRect", function() { return intersectRect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pointInRect", function() { return pointInRect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dimensions", function() { return Dimensions; });
/**
 * Vuikit 0.8.4
 * (c) 2018 Miljan Aleksic
 * @license MIT
**/

/* Substantial part of the code is adapted from UIkit,
  Copyright (c) 2013-2018 YOOtheme GmbH, getuikit.com */

function bind (fn, context) {
  return function (a) {
    var l = arguments.length;
    return l ? l > 1 ? fn.apply(context, arguments) : fn.call(context, a) : fn.call(context)
  }
}
var ref = Object.prototype;
var hasOwnProperty = ref.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}
var hyphenateRe = /([a-z\d])([A-Z])/g;
function hyphenate (str) {
  return str
    .replace(hyphenateRe, '$1-$2')
    .toLowerCase()
}
var camelizeRE = /-(\w)/g;
function camelize (str) {
  return str.replace(camelizeRE, toUpper)
}
function toUpper (_, c) {
  return c ? c.toUpperCase() : ''
}
function ucfirst (str) {
  return str.length ? toUpper(null, str.charAt(0)) + str.slice(1) : ''
}
var strPrototype = String.prototype;
var startsWithFn = strPrototype.startsWith || function (search) { return this.lastIndexOf(search, 0) === 0 };
function startsWith (str, search) {
  return startsWithFn.call(str, search)
}
var endsWithFn = strPrototype.endsWith || function (search) { return this.substr(-search.length) === search };
function endsWith (str, search) {
  return endsWithFn.call(str, search)
}
var includesFn = function (search) { return ~this.indexOf(search) };
var includesStr = strPrototype.includes || includesFn;
var includesArray = Array.prototype.includes || includesFn;
function includes (obj, search) {
  return obj && (isString(obj) ? includesStr : includesArray).call(obj, search)
}
var isArray = Array.isArray;
function isFunction (obj) {
  return typeof obj === 'function'
}
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}
function isPlainObject (obj) {
  return isObject(obj) && Object.getPrototypeOf(obj) === Object.prototype
}
function isWindow (obj) {
  return isObject(obj) && obj === obj.window
}
function isDocument (obj) {
  return isObject(obj) && obj.nodeType === 9
}
function isJQuery (obj) {
  return isObject(obj) && !!obj.jquery
}
function isNode (element) {
  return typeof Node !== 'undefined' && element instanceof Node || isObject(element) && element.nodeType === 1
}
function isNodeCollection (element) {
  return typeof NodeList !== 'undefined' && element instanceof NodeList ||
    typeof HTMLCollection !== 'undefined' && element instanceof HTMLCollection
}
function isBoolean (value) {
  return typeof value === 'boolean'
}
function isString (value) {
  return typeof value === 'string'
}
function isNumber (value) {
  return typeof value === 'number'
}
function isNumeric (value) {
  return isNumber(value) || isString(value) && !isNaN(value - parseFloat(value))
}
function isUndefined (value) {
  return value === void 0
}
function toBoolean (value) {
  return isBoolean(value)
    ? value
    : value === 'true' || value === '1' || value === ''
      ? true
      : value === 'false' || value === '0'
        ? false
        : value
}
function toNumber (value) {
  var number = Number(value);
  return !isNaN(number) ? number : false
}
function toFloat (value) {
  return parseFloat(value) || 0
}
function toNode (element) {
  return isNode(element) || isWindow(element) || isDocument(element)
    ? element
    : isNodeCollection(element) || isJQuery(element)
      ? element[0]
      : isArray(element)
        ? toNode(element[0])
        : null
}
var arrayProto = Array.prototype;
function toNodes (element) {
  return isNode(element)
    ? [element]
    : isNodeCollection(element)
      ? arrayProto.slice.call(element)
      : isArray(element)
        ? element.map(toNode).filter(Boolean)
        : isJQuery(element)
          ? element.toArray()
          : []
}
function toList (value) {
  return isArray(value)
    ? value
    : isString(value)
      ? value.split(/,(?![^(]*\))/).map(function (value) { return isNumeric(value)
        ? toNumber(value)
        : toBoolean(value.trim()); })
      : [value]
}
function toMs (time) {
  return !time
    ? 0
    : endsWith(time, 'ms')
      ? toFloat(time)
      : toFloat(time) * 1000
}
function swap (value, a, b) {
  return value.replace(new RegExp((a + "|" + b), 'mg'), function (match) {
    return match === a ? b : a
  })
}
var assign = Object.assign || function (target) {
  var args = [], len = arguments.length - 1;
  while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];
  target = Object(target);
  for (var i = 0; i < args.length; i++) {
    var source = args[i];
    if (source !== null) {
      for (var key in source) {
        if (hasOwn(source, key)) {
          target[key] = source[key];
        }
      }
    }
  }
  return target
};
function each (obj, cb) {
  for (var key in obj) {
    if (cb.call(obj[key], obj[key], key) === false) {
      break
    }
  }
}
function sortBy (collection, prop) {
  return collection.sort(function (a, b) { return a[prop] - b[prop]; })
}
function clamp (number, min, max) {
  if ( min === void 0 ) min = 0;
  if ( max === void 0 ) max = 1;
  return Math.min(Math.max(number, min), max)
}
function noop () {}
function intersectRect (r1, r2) {
  return r1.left <= r2.right &&
        r2.left <= r1.right &&
        r1.top <= r2.bottom &&
        r2.top <= r1.bottom
}
function pointInRect (point, rect) {
  return intersectRect({top: point.y, bottom: point.y, left: point.x, right: point.x}, rect)
}
var Dimensions = {
  ratio: function ratio (dimensions, prop, value) {
    var obj;
    var aProp = prop === 'width' ? 'height' : 'width';
    return ( obj = {}, obj[aProp] = Math.round(value * dimensions[aProp] / dimensions[prop]), obj[prop] = value, obj)
  },
  contain: function contain (dimensions, maxDimensions) {
    var this$1 = this;
    dimensions = assign({}, dimensions);
    each(dimensions, function (_, prop) { return dimensions = dimensions[prop] > maxDimensions[prop]
      ? this$1.ratio(dimensions, prop, maxDimensions[prop])
      : dimensions; }
    );
    return dimensions
  },
  cover: function cover (dimensions, maxDimensions) {
    var this$1 = this;
    dimensions = this.contain(dimensions, maxDimensions);
    each(dimensions, function (_, prop) { return dimensions = dimensions[prop] < maxDimensions[prop]
      ? this$1.ratio(dimensions, prop, maxDimensions[prop])
      : dimensions; }
    );
    return dimensions
  }
};




/***/ }),

/***/ "./node_modules/vuikit/lib/util/misc.js":
/*!**********************************************!*\
  !*** ./node_modules/vuikit/lib/util/misc.js ***!
  \**********************************************/
/*! exports provided: toMedia, debounce, get, range */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toMedia", function() { return toMedia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "range", function() { return range; });
/* harmony import */ var _util_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/style */ "./node_modules/vuikit/lib/util/style.js");
/* harmony import */ var _util_lang__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/lang */ "./node_modules/vuikit/lib/util/lang.js");
/**
 * Vuikit 0.8.4
 * (c) 2018 Miljan Aleksic
 * @license MIT
**/

/* Substantial part of the code is adapted from UIkit,
  Copyright (c) 2013-2018 YOOtheme GmbH, getuikit.com */




function toMedia (value) {
  if (Object(_util_lang__WEBPACK_IMPORTED_MODULE_1__["isString"])(value)) {
    if (value[0] === '@') {
      var name = "media-" + (value.substr(1));
      value = Object(_util_lang__WEBPACK_IMPORTED_MODULE_1__["toFloat"])(Object(_util_style__WEBPACK_IMPORTED_MODULE_0__["getCssVar"])(name));
    } else if (isNaN(value)) {
      return value
    }
  }
  return value && !isNaN(value) ? ("(min-width: " + value + "px)") : false
}
function debounce (fn, wait, immediate) {
  var timeout;
  return function () {
    var context = this;
    var args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) { fn.apply(context, args); }
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) {
      fn.apply(context, args);
    }
  }
}
function get (obj, path, defVal) {
  var result = Object(_util_lang__WEBPACK_IMPORTED_MODULE_1__["isObject"])(obj) && Object(_util_lang__WEBPACK_IMPORTED_MODULE_1__["isString"])(path)
    ? _get(obj, path)
    : undefined;
  return result === undefined
    ? defVal
    : result
}
function _get (obj, path) {
  return path.split('.').reduce(function (acc, val) { return acc && acc[val]; }, obj)
}
function range (start, stop, step) {
  if ( step === void 0 ) step = 1;
  if (typeof stop === 'undefined') {
    stop = start;
    start = 0;
  }
  return Array.from(new Array(Math.floor((stop - start) / step)), function (x, i) { return start + (i * step); })
}




/***/ }),

/***/ "./node_modules/vuikit/lib/util/selector.js":
/*!**************************************************!*\
  !*** ./node_modules/vuikit/lib/util/selector.js ***!
  \**************************************************/
/*! exports provided: query, queryAll, find, findAll, matches, closest, parents, escape */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "query", function() { return query; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryAll", function() { return queryAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "find", function() { return find; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findAll", function() { return findAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matches", function() { return matches; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closest", function() { return closest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parents", function() { return parents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escape", function() { return escape; });
/* harmony import */ var _attr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attr */ "./node_modules/vuikit/lib/util/attr.js");
/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lang */ "./node_modules/vuikit/lib/util/lang.js");
/**
 * Vuikit 0.8.4
 * (c) 2018 Miljan Aleksic
 * @license MIT
**/

/* Substantial part of the code is adapted from UIkit,
  Copyright (c) 2013-2018 YOOtheme GmbH, getuikit.com */




function query (selector, context) {
  return Object(_lang__WEBPACK_IMPORTED_MODULE_1__["toNode"])(selector) || find(selector, isContextSelector(selector) ? context : document)
}
function queryAll (selector, context) {
  var nodes = Object(_lang__WEBPACK_IMPORTED_MODULE_1__["toNodes"])(selector);
  return nodes.length && nodes || findAll(selector, isContextSelector(selector) ? context : document)
}
function find (selector, context) {
  return Object(_lang__WEBPACK_IMPORTED_MODULE_1__["toNode"])(_query(selector, context, 'querySelector'))
}
function findAll (selector, context) {
  return Object(_lang__WEBPACK_IMPORTED_MODULE_1__["toNodes"])(_query(selector, context, 'querySelectorAll'))
}
function _query (selector, context, queryFn) {
  if ( context === void 0 ) context = document;
  if (!selector || !Object(_lang__WEBPACK_IMPORTED_MODULE_1__["isString"])(selector)) {
    return null
  }
  selector = selector.replace(contextSanitizeRe, '$1 *');
  var removes;
  if (isContextSelector(selector)) {
    removes = [];
    selector = selector.split(',').map(function (selector, i) {
      var ctx = context;
      selector = selector.trim();
      if (selector[0] === '!') {
        var selectors = selector.substr(1).trim().split(' ');
        ctx = closest(context.parentNode, selectors[0]);
        selector = selectors.slice(1).join(' ');
      }
      if (!ctx) {
        return null
      }
      if (!ctx.id) {
        ctx.id = "uk-" + (Date.now()) + i;
        removes.push(function () { return Object(_attr__WEBPACK_IMPORTED_MODULE_0__["removeAttr"])(ctx, 'id'); });
      }
      return ("#" + (escape(ctx.id)) + " " + selector)
    }).filter(Boolean).join(',');
    context = document;
  }
  try {
    return context[queryFn](selector)
  } catch (e) {
    return null
  } finally {
    removes && removes.forEach(function (remove) { return remove(); });
  }
}
var contextSelectorRe = /(^|,)\s*[!>+~]/;
var contextSanitizeRe = /([!>+~])(?=\s+[!>+~]|\s*$)/g;
function isContextSelector (selector) {
  return Object(_lang__WEBPACK_IMPORTED_MODULE_1__["isString"])(selector) && selector.match(contextSelectorRe)
}
function matches (element, selector) {
  var elProto = window.Element.prototype;
  var matchesFn = elProto.matches || elProto.webkitMatchesSelector || elProto.msMatchesSelector;
  return Object(_lang__WEBPACK_IMPORTED_MODULE_1__["toNodes"])(element).some(function (element) { return matchesFn.call(element, selector); })
}
function closest (element, selector) {
  var elProto = window.Element.prototype;
  var closestFn = elProto.closest || function (selector) {
    var ancestor = this;
    do {
      if (matches(ancestor, selector)) {
        return ancestor
      }
      ancestor = ancestor.parentNode;
    } while (ancestor && ancestor.nodeType === 1)
  };
  if (Object(_lang__WEBPACK_IMPORTED_MODULE_1__["startsWith"])(selector, '>')) {
    selector = selector.slice(1);
  }
  return Object(_lang__WEBPACK_IMPORTED_MODULE_1__["isNode"])(element)
    ? element.parentNode && closestFn.call(element, selector)
    : Object(_lang__WEBPACK_IMPORTED_MODULE_1__["toNodes"])(element).map(function (element) { return element.parentNode && closestFn.call(element, selector); }).filter(Boolean)
}
function parents (element, selector) {
  var elements = [];
  var parent = Object(_lang__WEBPACK_IMPORTED_MODULE_1__["toNode"])(element).parentNode;
  while (parent && parent.nodeType === 1) {
    if (matches(parent, selector)) {
      elements.push(parent);
    }
    parent = parent.parentNode;
  }
  return elements
}
function escape (css) {
  var escapeFn = window.CSS && CSS.escape || function (css) { return css.replace(/([^\x7f-\uFFFF\w-])/g, function (match) { return ("\\" + match); }) };
  return Object(_lang__WEBPACK_IMPORTED_MODULE_1__["isString"])(css) ? escapeFn.call(null, css) : ''
}




/***/ }),

/***/ "./node_modules/vuikit/lib/util/style.js":
/*!***********************************************!*\
  !*** ./node_modules/vuikit/lib/util/style.js ***!
  \***********************************************/
/*! exports provided: css, getStyles, getStyle, getCssVar, propName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyle", function() { return getStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCssVar", function() { return getCssVar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "propName", function() { return propName; });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./node_modules/vuikit/lib/util/dom.js");
/* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./class */ "./node_modules/vuikit/lib/util/class.js");
/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lang */ "./node_modules/vuikit/lib/util/lang.js");
/**
 * Vuikit 0.8.4
 * (c) 2018 Miljan Aleksic
 * @license MIT
**/

/* Substantial part of the code is adapted from UIkit,
  Copyright (c) 2013-2018 YOOtheme GmbH, getuikit.com */





var cssNumber = {
  'animation-iteration-count': true,
  'column-count': true,
  'fill-opacity': true,
  'flex-grow': true,
  'flex-shrink': true,
  'font-weight': true,
  'line-height': true,
  'opacity': true,
  'order': true,
  'orphans': true,
  'widows': true,
  'z-index': true,
  'zoom': true
};
function css (element, property, value) {
  return Object(_lang__WEBPACK_IMPORTED_MODULE_2__["toNodes"])(element).map(function (element) {
    if (Object(_lang__WEBPACK_IMPORTED_MODULE_2__["isString"])(property)) {
      property = propName(property);
      if (Object(_lang__WEBPACK_IMPORTED_MODULE_2__["isUndefined"])(value)) {
        return getStyle(element, property)
      } else if (!value && value !== 0) {
        element.style.removeProperty(property);
      } else {
        element.style[property] = Object(_lang__WEBPACK_IMPORTED_MODULE_2__["isNumeric"])(value) && !cssNumber[property] ? (value + "px") : value;
      }
    } else if (Object(_lang__WEBPACK_IMPORTED_MODULE_2__["isArray"])(property)) {
      var styles = getStyles(element);
      return property.reduce(function (props, property) {
        props[property] = styles[propName(property)];
        return props
      }, {})
    } else if (Object(_lang__WEBPACK_IMPORTED_MODULE_2__["isObject"])(property)) {
      Object(_lang__WEBPACK_IMPORTED_MODULE_2__["each"])(property, function (value, property) { return css(element, property, value); });
    }
    return element
  })[0]
}
function getStyles (element, pseudoElt) {
  element = Object(_lang__WEBPACK_IMPORTED_MODULE_2__["toNode"])(element);
  return element.ownerDocument.defaultView.getComputedStyle(element, pseudoElt)
}
function getStyle (element, property, pseudoElt) {
  return getStyles(element, pseudoElt)[property]
}
var vars = {};
function getCssVar (name) {
  if (!(name in vars)) {
    var element = Object(_dom__WEBPACK_IMPORTED_MODULE_0__["append"])(document.documentElement, document.createElement('div'));
    Object(_class__WEBPACK_IMPORTED_MODULE_1__["addClass"])(element, ("var-" + name));
    try {
      vars[name] = getStyle(element, 'content', ':before').replace(/^["'](.*)["']$/, '$1');
      vars[name] = JSON.parse(vars[name]);
    } catch (e) {}
    document.documentElement.removeChild(element);
  }
  return vars[name]
}
var cssProps = {};
function propName (name) {
  var ret = cssProps[name];
  if (!ret) {
    ret = cssProps[name] = vendorPropName(name) || name;
  }
  return ret
}
var cssPrefixes = ['webkit', 'moz', 'ms'];
function vendorPropName (name) {
  var ref = document.createElement('_');
  var style = ref.style;
  name = Object(_lang__WEBPACK_IMPORTED_MODULE_2__["hyphenate"])(name);
  if (name in style) {
    return name
  }
  var i = cssPrefixes.length, prefixedName;
  while (i--) {
    prefixedName = "-" + (cssPrefixes[i]) + "-" + name;
    if (prefixedName in style) {
      return prefixedName
    }
  }
}




/***/ }),

/***/ "./node_modules/vuikit/lib/util/vue.js":
/*!*********************************************!*\
  !*** ./node_modules/vuikit/lib/util/vue.js ***!
  \*********************************************/
/*! exports provided: findParent, findParents, findChilds, resolveSlots, apply, filterOutTextNodes, isAsyncPlaceholder, extractProps, mergeData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findParent", function() { return findParent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findParents", function() { return findParents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findChilds", function() { return findChilds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveSlots", function() { return resolveSlots; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apply", function() { return apply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterOutTextNodes", function() { return filterOutTextNodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAsyncPlaceholder", function() { return isAsyncPlaceholder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractProps", function() { return extractProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeData", function() { return mergeData; });
/* harmony import */ var _misc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./misc */ "./node_modules/vuikit/lib/util/misc.js");
/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lang */ "./node_modules/vuikit/lib/util/lang.js");
/**
 * Vuikit 0.8.4
 * (c) 2018 Miljan Aleksic
 * @license MIT
**/

/* Substantial part of the code is adapted from UIkit,
  Copyright (c) 2013-2018 YOOtheme GmbH, getuikit.com */




function findParent (instance) {
  return findParents(instance).pop()
}
function findParents (instance) {
  var parents = [];
  var name = instance.$options.name;
  var parent = instance.$parent;
  while (parent) {
    if (parent.$options.name === name) {
      parents.unshift(parent);
    }
    parent = parent.$parent;
  }
  return parents
}
function findChilds (instance) {
  var name = instance.$options.name;
  var childs = instance.$children
    .filter(function (child) { return child.$options.name === name; });
  childs.forEach(function (child) {
    childs = childs.concat( findChilds(child));
  });
  return childs
}
function resolveSlots (children) {
  return filterOutTextNodes(children).reduce(function (slots, n) {
    var name = Object(_misc__WEBPACK_IMPORTED_MODULE_0__["get"])(n, 'data.slot', 'default');
    slots[name] = slots[name] || [];
    if (n.tag === 'template') {
      slots[name].push.apply(slots[name], n.children || []);
    } else {
      slots[name].push(n);
    }
    return slots
  }, {})
}
function apply (instance, fn) {
  if (!instance || !instance._isVue) {
    return
  }
  fn(instance);
  instance.$children.forEach(function (child) { return apply(child, fn); });
}
function filterOutTextNodes (nodes) {
  return nodes.filter(function (n) { return n.tag || isAsyncPlaceholder(n); })
}
function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}
function extractProps () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];
  var props = {};
  for (var i = 0; i < args.length; i++) {
    var def = args[i];
    if (def !== null) {
      def.mixins && def.mixins.forEach(function (mixin) {
        Object(_lang__WEBPACK_IMPORTED_MODULE_1__["assign"])(props, mixin.props || {});
      });
      def.extends && Object(_lang__WEBPACK_IMPORTED_MODULE_1__["assign"])(props, extractProps(def.extends));
      def.props && Object(_lang__WEBPACK_IMPORTED_MODULE_1__["assign"])(props, def.props);
    }
  }
  return props
}
function mergeData () {
  var arguments$1 = arguments;
  for(var e,a,s={},t=arguments.length;t--;){ for(var r=0,c=Object.keys(arguments[t]);r<c.length;r++){ switch(e=c[r]){case"class":case"style":case"directives":Array.isArray(s[e])||(s[e]=[]), s[e]=s[e].concat(arguments$1[t][e]);break;case"staticClass":if(!arguments$1[t][e]){ break; }void 0===s[e]&&(s[e]=""), s[e]&&(s[e]+=" "), s[e]+=arguments$1[t][e].trim();break;case"on":case"nativeOn":s[e]||(s[e]={});for(var o=0,n=Object.keys(arguments[t][e]);o<n.length;o++){ a=n[o], s[e][a]?s[e][a]=[].concat(s[e][a],arguments$1[t][e][a]):s[e][a]=arguments$1[t][e][a]; }break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":s[e]||(s[e]={}), s[e]=__assign({},arguments$1[t][e],s[e]);break;case"slot":case"key":case"ref":case"tag":case"show":case"keepAlive":default:s[e]||(s[e]=arguments$1[t][e]);} } }return s}var __assign=Object.assign||function(e){
  var arguments$1 = arguments;
for(var a,s=1,t=arguments.length;s<t;s++){a=arguments$1[s];for(var r in a){ Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]); }}return e
};




/***/ })

}]);
//# sourceMappingURL=vendors~ui.chunk.bundle.js.map