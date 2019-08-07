(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/handler.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/graphql/dataSources/category.js":
/*!*********************************************!*\
  !*** ./src/graphql/dataSources/category.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async () => {\n  try {\n    const result = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.request({\n      url: \"https://api.chucknorris.io/jokes/categories\",\n      method: \"GET\"\n    });\n    const categories = [];\n    result.data.map(c => categories.push(c));\n    return categories;\n  } catch (error) {\n    return [error.message];\n  }\n});\n\n//# sourceURL=webpack:///./src/graphql/dataSources/category.js?");

/***/ }),

/***/ "./src/graphql/dataSources/joke.js":
/*!*****************************************!*\
  !*** ./src/graphql/dataSources/joke.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async category => {\n  try {\n    const result = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.request({\n      url: `https://api.chucknorris.io/jokes/random?category=${category}`,\n      method: \"GET\"\n    }); // return {\n    //   id: result.data.id,\n    //   value: result.data.value,\n    //   url: result.data.url,\n    //   created_at: result.data.json().created_at,\n    //   icon_url: result.data.json().icon_url,\n    //   categories: result.data.json().categories,\n    // };\n\n    return result.data;\n  } catch (e) {\n    return {\n      id: \"error\",\n      value: e.message,\n      url: \"error\"\n    };\n  }\n});\n\n//# sourceURL=webpack:///./src/graphql/dataSources/joke.js?");

/***/ }),

/***/ "./src/graphql/resolvers/category.js":
/*!*******************************************!*\
  !*** ./src/graphql/resolvers/category.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  Query: {\n    categories: async (source, args, {\n      dataSources\n    }, state) => {\n      return dataSources.categorySource(null);\n    },\n    category: async (source, args, {\n      dataSources\n    }, state) => {\n      // by using \"args\" argument we can get access\n      // to query arguments\n      const {\n        id\n      } = args;\n      const result = dataSources.categorySource([id]);\n\n      if (result && result[0]) {\n        return result[0];\n      }\n\n      return null;\n    } //   Joke: {\n    //     categories: async (source, args, { dataSources }) => {\n    //       console.dir(\"Executing Joke.category resolver\");\n    //       return dataSources.categorySource(source.joke);\n    //     }\n    //   }\n\n  }\n});\n\n//# sourceURL=webpack:///./src/graphql/resolvers/category.js?");

/***/ }),

/***/ "./src/graphql/resolvers/index.js":
/*!****************************************!*\
  !*** ./src/graphql/resolvers/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var merge_graphql_schemas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! merge-graphql-schemas */ \"merge-graphql-schemas\");\n/* harmony import */ var merge_graphql_schemas__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(merge_graphql_schemas__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _joke__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./joke */ \"./src/graphql/resolvers/joke.js\");\n/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./category */ \"./src/graphql/resolvers/category.js\");\n\n\n\nconst resolvers = [_joke__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _category__WEBPACK_IMPORTED_MODULE_2__[\"default\"]];\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(merge_graphql_schemas__WEBPACK_IMPORTED_MODULE_0__[\"mergeResolvers\"])(resolvers));\n\n//# sourceURL=webpack:///./src/graphql/resolvers/index.js?");

/***/ }),

/***/ "./src/graphql/resolvers/joke.js":
/*!***************************************!*\
  !*** ./src/graphql/resolvers/joke.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  Query: {\n    joke: async (source, args, {\n      dataSources\n    }, state) => {\n      // by using \"args\" argument we can get access\n      // to query arguments\n      const {\n        category\n      } = args;\n      return dataSources.jokeSource([category]);\n    },\n    jokes: async (source, args, {\n      dataSources\n    }, state) => {\n      return dataSources.jokeSource(null);\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/graphql/resolvers/joke.js?");

/***/ }),

/***/ "./src/graphql/types/category.graphql":
/*!********************************************!*\
  !*** ./src/graphql/types/category.graphql ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n    var doc = {\"kind\":\"Document\",\"definitions\":[{\"kind\":\"ObjectTypeDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"Category\"},\"interfaces\":[],\"directives\":[],\"fields\":[{\"kind\":\"FieldDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"value\"},\"arguments\":[],\"type\":{\"kind\":\"NonNullType\",\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"String\"}}},\"directives\":[]}]},{\"kind\":\"ObjectTypeDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"Query\"},\"interfaces\":[],\"directives\":[],\"fields\":[{\"kind\":\"FieldDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"categories\"},\"arguments\":[],\"type\":{\"kind\":\"NonNullType\",\"type\":{\"kind\":\"ListType\",\"type\":{\"kind\":\"NonNullType\",\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"String\"}}}}},\"directives\":[]},{\"kind\":\"FieldDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"category\"},\"arguments\":[{\"kind\":\"InputValueDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"id\"},\"type\":{\"kind\":\"NonNullType\",\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"String\"}}},\"directives\":[]}],\"type\":{\"kind\":\"NonNullType\",\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"Category\"}}},\"directives\":[]}]}],\"loc\":{\"start\":0,\"end\":116}};\n    doc.loc.source = {\"body\":\"type Category {\\n    value: String!\\n}\\n\\ntype Query {\\n    categories: [String!]!\\n    category(id: String!): Category!\\n}\",\"name\":\"GraphQL request\",\"locationOffset\":{\"line\":1,\"column\":1}};\n  \r\n\n    var names = {};\n    function unique(defs) {\n      return defs.filter(\n        function(def) {\n          if (def.kind !== 'FragmentDefinition') return true;\n          var name = def.name.value\n          if (names[name]) {\n            return false;\n          } else {\n            names[name] = true;\n            return true;\n          }\n        }\n      )\n    }\n  \r\n\n      module.exports = doc;\n    \r\n\n\n//# sourceURL=webpack:///./src/graphql/types/category.graphql?");

/***/ }),

/***/ "./src/graphql/types/index.js":
/*!************************************!*\
  !*** ./src/graphql/types/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var merge_graphql_schemas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! merge-graphql-schemas */ \"merge-graphql-schemas\");\n/* harmony import */ var merge_graphql_schemas__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(merge_graphql_schemas__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _joke_graphql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./joke.graphql */ \"./src/graphql/types/joke.graphql\");\n/* harmony import */ var _joke_graphql__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_joke_graphql__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _category_graphql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./category.graphql */ \"./src/graphql/types/category.graphql\");\n/* harmony import */ var _category_graphql__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_category_graphql__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(merge_graphql_schemas__WEBPACK_IMPORTED_MODULE_0__[\"mergeTypes\"])([_joke_graphql__WEBPACK_IMPORTED_MODULE_1___default.a, _category_graphql__WEBPACK_IMPORTED_MODULE_2___default.a], {\n  all: true\n}));\n\n//# sourceURL=webpack:///./src/graphql/types/index.js?");

/***/ }),

/***/ "./src/graphql/types/joke.graphql":
/*!****************************************!*\
  !*** ./src/graphql/types/joke.graphql ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n    var doc = {\"kind\":\"Document\",\"definitions\":[{\"kind\":\"ObjectTypeDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"Joke\"},\"interfaces\":[],\"directives\":[],\"fields\":[{\"kind\":\"FieldDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"id\"},\"arguments\":[],\"type\":{\"kind\":\"NonNullType\",\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"String\"}}},\"directives\":[]},{\"kind\":\"FieldDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"url\"},\"arguments\":[],\"type\":{\"kind\":\"NonNullType\",\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"String\"}}},\"directives\":[]},{\"kind\":\"FieldDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"icon_url\"},\"arguments\":[],\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"String\"}},\"directives\":[]},{\"kind\":\"FieldDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"value\"},\"arguments\":[],\"type\":{\"kind\":\"NonNullType\",\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"String\"}}},\"directives\":[]},{\"kind\":\"FieldDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"created_at\"},\"arguments\":[],\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"String\"}},\"directives\":[]},{\"kind\":\"FieldDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"categories\"},\"arguments\":[],\"type\":{\"kind\":\"ListType\",\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"String\"}}},\"directives\":[]}]},{\"kind\":\"ObjectTypeDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"Query\"},\"interfaces\":[],\"directives\":[],\"fields\":[{\"kind\":\"FieldDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"jokes\"},\"arguments\":[],\"type\":{\"kind\":\"ListType\",\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"Joke\"}}},\"directives\":[]},{\"kind\":\"FieldDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"joke\"},\"arguments\":[{\"kind\":\"InputValueDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"category\"},\"type\":{\"kind\":\"NonNullType\",\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"String\"}}},\"directives\":[]}],\"type\":{\"kind\":\"NonNullType\",\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"Joke\"}}},\"directives\":[]}]}],\"loc\":{\"start\":0,\"end\":187}};\n    doc.loc.source = {\"body\":\"type Joke {\\n  id: String!\\n  url: String!\\n  icon_url: String\\n  value: String!\\n  created_at: String\\n  categories: [String]\\n}\\n\\ntype Query {\\n  jokes: [Joke]\\n  joke(category: String!): Joke!\\n}\",\"name\":\"GraphQL request\",\"locationOffset\":{\"line\":1,\"column\":1}};\n  \r\n\n    var names = {};\n    function unique(defs) {\n      return defs.filter(\n        function(def) {\n          if (def.kind !== 'FragmentDefinition') return true;\n          var name = def.name.value\n          if (names[name]) {\n            return false;\n          } else {\n            names[name] = true;\n            return true;\n          }\n        }\n      )\n    }\n  \r\n\n      module.exports = doc;\n    \r\n\n\n//# sourceURL=webpack:///./src/graphql/types/joke.graphql?");

/***/ }),

/***/ "./src/handler.js":
/*!************************!*\
  !*** ./src/handler.js ***!
  \************************/
/*! exports provided: main */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"main\", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n//# sourceURL=webpack:///./src/handler.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var apollo_server_lambda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server-lambda */ \"apollo-server-lambda\");\n/* harmony import */ var apollo_server_lambda__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_lambda__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _graphql_resolvers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./graphql/resolvers */ \"./src/graphql/resolvers/index.js\");\n/* harmony import */ var _graphql_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./graphql/types */ \"./src/graphql/types/index.js\");\n/* harmony import */ var _graphql_dataSources_category__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./graphql/dataSources/category */ \"./src/graphql/dataSources/category.js\");\n/* harmony import */ var _graphql_dataSources_joke__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./graphql/dataSources/joke */ \"./src/graphql/dataSources/joke.js\");\n\n\n\n\n // creating the server\n\nconst server = new apollo_server_lambda__WEBPACK_IMPORTED_MODULE_0__[\"ApolloServer\"]({\n  // passing types and resolvers to the server\n  typeDefs: _graphql_types__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  resolvers: _graphql_resolvers__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  // initial context state, will be available in resolvers\n  context: () => ({}),\n  // an object that goes to the \"context\" argument\n  // when executing resolvers\n  dataSources: () => {\n    return {\n      categorySource: _graphql_dataSources_category__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n      jokeSource: _graphql_dataSources_joke__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    };\n  }\n});\n\nconst handler = (event, context, callback) => {\n  const handler = server.createHandler(); // tell AWS lambda we do not want to wait for NodeJS event loop\n  // to be empty in order to send the response\n\n  context.callbackWaitsForEmptyEventLoop = false; // process the request\n\n  return handler(event, context, callback);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (handler);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "apollo-server-lambda":
/*!***************************************!*\
  !*** external "apollo-server-lambda" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"apollo-server-lambda\");\n\n//# sourceURL=webpack:///external_%22apollo-server-lambda%22?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "merge-graphql-schemas":
/*!****************************************!*\
  !*** external "merge-graphql-schemas" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"merge-graphql-schemas\");\n\n//# sourceURL=webpack:///external_%22merge-graphql-schemas%22?");

/***/ })

/******/ })));