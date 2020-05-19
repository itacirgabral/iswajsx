function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 19,
  height: 19
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M4 4h15v15H4z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3.25 1.563c-.38.034-.656.312-.656.312l-.469.438c.088-.089.104-.073-.25.28-.707.708 0 1.407 0 1.407L4 6.125 6.125 4 4.25 2.156C4.162 2.068 4 1.875 4 1.875c-.265-.265-.522-.333-.75-.313zM6 6v2H4v3h2v6h6v-6h7V8h-7V6H6z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1.169 1.88s-1.415 1.413 0 2.828l2.828 2.828L7.533 4 4.704 1.172s-1.414-1.414-2.828 0l-.707.707zm.707.706l.707-.707s.707-.707 1.414 0L6.118 4 3.997 6.122 1.876 4s-.707-.707 0-1.414z"
}));

export default SvgComponent;