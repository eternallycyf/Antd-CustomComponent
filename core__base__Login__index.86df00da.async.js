"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[556],{28593:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval(`// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ base_Login; }
});

// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(5574);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);
// EXTERNAL MODULE: ./src/.umi-production/exports.ts + 39 modules
var _umi_production_exports = __webpack_require__(41997);
// EXTERNAL MODULE: ./node_modules/antd/es/form/index.js + 20 modules
var es_form = __webpack_require__(12029);
// EXTERNAL MODULE: ./node_modules/antd/es/input/index.js + 5 modules
var input = __webpack_require__(75008);
// EXTERNAL MODULE: ./node_modules/antd/es/checkbox/index.js + 2 modules
var es_checkbox = __webpack_require__(32808);
// EXTERNAL MODULE: ./node_modules/antd/es/button/index.js
var es_button = __webpack_require__(71577);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
;// CONCATENATED MODULE: ./src/core/base/Login/index.less?modules
// extracted by mini-css-extract-plugin
/* harmony default export */ var Loginmodules = ({"site-pro-form-login-container":"site-pro-form-login-container___c7bmz","site-form":"site-form___Bjlad"});
;// CONCATENATED MODULE: ./src/core/base/Login/Loading.less
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./src/core/base/Login/Loading.tsx




var Loading = function Loading() {
  (0,react.useEffect)(function () {
    var spinner = document.querySelector('.js-spinner');
    var spinnerClass = spinner.getAttribute('class');
    setTimeout(function () {
      if (spinnerClass) {
        spinner.setAttribute('class', "".concat(spinnerClass, " state-show state-away"));
      } else {
        spinner.setAttribute('class', "state-show state-away");
      }
    }, 1500);
    // spinner.style.display = 'none';
    setTimeout(function () {
      spinner.remove();
      window.localStorage.setItem('loading', 'false');
    }, 3000);
  }, []);
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: "state-spinner-fixed",
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "page_wrapper js-wrapper",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "spinner js-spinner",
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "spinner__overlay",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "spinner__big_circle"
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "spinner__all_circles_box",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: "spinner__circles_box",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                className: "spinner__circle spinner__circle--1"
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: "spinner__circles_box",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                className: "spinner__circle spinner__circle--2"
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: "spinner__circles_box",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                className: "spinner__circle spinner__circle--3"
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: "spinner__circles_box",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                className: "spinner__circle spinner__circle--4"
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: "spinner__circles_box",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                className: "spinner__circle spinner__circle--5"
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: "spinner__circles_box",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                className: "spinner__circle spinner__circle--6"
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: "spinner__circles_box",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                className: "spinner__circle spinner__circle--7"
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: "spinner__circles_box",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                className: "spinner__circle spinner__circle--8"
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: "spinner__circles_box",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                className: "spinner__circle spinner__circle--9"
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: "spinner__circles_box",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                className: "spinner__circle spinner__circle--10"
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: "spinner__circles_box",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                className: "spinner__circle spinner__circle--11"
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: "spinner__circles_box",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                className: "spinner__circle spinner__circle--12"
              })
            })]
          })]
        })
      })
    })
  });
};
/* harmony default export */ var Login_Loading = (Loading);
;// CONCATENATED MODULE: ./src/core/base/Login/index.tsx








var Login = function Login(_ref) {
  var dispatch = _ref.dispatch;
  var _useState = (0,react.useState)(false),
    _useState2 = slicedToArray_default()(_useState, 2),
    loading = _useState2[0],
    setLoading = _useState2[1];
  var _useState3 = (0,react.useState)(true),
    _useState4 = slicedToArray_default()(_useState3, 2),
    remember = _useState4[0],
    setRemember = _useState4[1];
  var onFinish = function onFinish(values) {
    var username = values.username,
      password = values.password;
    if (username === 'admin' && password === 'admin') {
      setLoading(true);
      dispatch({
        type: 'login/login',
        payload: {}
      });
      setTimeout(function () {
        _umi_production_exports.history.push('/');
      }, 2000);
    }
  };
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: Loginmodules["site-pro-form-login-container"],
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("section", {
        className: "absolute left-20 top-20 isolate overflow-hidden",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "absolute inset-0 -z-10 bg-[radial-gradient(30rem_30rem_at_top,theme(colors.indigo.100),white)] opacity-20"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "mx-auto max-w-1xl lg:max-w-2xl",
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)("figure", {
            className: "mt-10",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("blockquote", {
              className: "text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
                children: "All the gloom is left to the past, from the beginning of meeting you, the winter is gone, the Star River is bright!"
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("figcaption", {
              className: "mt-10",
              children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                className: "mt-4 flex items-center justify-center space-x-3 text-base",
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                  className: "font-semibold text-gray-900",
                  children: "Eternallycyf"
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("svg", {
                  viewBox: "0 0 2 2",
                  width: "3",
                  height: "3",
                  "aria-hidden": "true",
                  className: "fill-gray-900",
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)("circle", {
                    cx: "1",
                    cy: "1",
                    r: "1"
                  })
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                  className: "text-gray-600",
                  children: "\\uD83C\\uDF89 \\uD83C\\uDF89 \\uD83C\\uDF89"
                })]
              })
            })]
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(es_form/* default */.Z, {
        className: Loginmodules["site-form"],
        name: "basic",
        initialValues: {
          remember: remember
        },
        onFinish: onFinish,
        layout: "vertical",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default.Item */.Z.Item, {
          label: "Username",
          name: "username",
          rules: [{
            required: true,
            message: 'Please input your username!'
          }]
          // initialValue="admin"
          ,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(input/* default */.Z, {
            placeholder: "admin"
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default.Item */.Z.Item, {
          label: "Password",
          name: "password"
          // initialValue="admin"
          ,
          rules: [{
            required: true,
            message: 'Please input your password!'
          }],
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(input/* default.Password */.Z.Password, {
            placeholder: "admin"
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default.Item */.Z.Item, {
          name: "remember",
          valuePropName: "checked",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_checkbox/* default */.Z, {
            checked: remember,
            onChange: function onChange(e) {
              return setRemember(e.target.checked);
            },
            children: "Remember me"
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default.Item */.Z.Item, {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
            block: true,
            type: "primary",
            htmlType: "submit",
            children: "Submit"
          })
        })]
      }), loading && /*#__PURE__*/(0,jsx_runtime.jsx)(Login_Loading, {})]
    })
  });
};
/* harmony default export */ var base_Login = ((0,_umi_production_exports.connect)(function (_ref2) {
  var login = _ref2.login,
    global = _ref2.global;
  return {
    token: login.token,
    userInfo: global.userInfo
  };
})((0,_umi_production_exports.withRouter)(Login)));

//# sourceURL=webpack:///./src/core/base/Login/index.tsx_+_3_modules?`)}}]);
