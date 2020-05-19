function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 30,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M15 15h8v15h-8z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M16 16h3v13h-3z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 15h15v2H0zM17 0h2v15h-2zM25.188 3l-5.844 12h2.219L27 3.875 25.188 3zM28 10l-5 5v2.813l6.438-6.407L28 10zM6 17l9 9v-2.813L8.812 17H6z"
}));

export default SvgComponent;