function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 23,
  height: 20
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 1v9.9L9.9 1H0zm1.016 1.016l6.475-.022L.994 8.491l.022-6.475z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4.243 6.657l8.485 8.485a4 4 0 005.657 0l1.414-1.414c2.734-2.734 3.05-6.85.707-9.192l-4.95 4.95c1.562 1.561 2.196 3.46 1.415 4.242a2 2 0 01-2.829 0L5.657 5.243 4.243 6.657z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M.707 18.678l.707.707L19.8 1l-.707-.707L.707 18.678z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1.016 2.016L.994 8.491l6.497-6.497-6.475.022z",
  fill: "#fff"
}));

export default SvgComponent;