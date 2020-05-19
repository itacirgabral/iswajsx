function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 19,
  height: 8
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M17.938 0l-3 3C13.351 4.585 10.91 5 8.5 5s-4.852-.416-6.438-2l-.53-.531L.468 3.53 2.5 5.5a8.45 8.45 0 006 2.5c2.344 0 4.459-.968 6-2.5L19 1.062 17.937 0z"
}));

export default SvgComponent;