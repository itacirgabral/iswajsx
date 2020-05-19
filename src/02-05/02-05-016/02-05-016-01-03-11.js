function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 32,
  height: 20
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M25 9v2h-9V9h9zM13 9v2H0V9h13zM25 17l7-7-7-7v2.844L29.156 10 25 14.156V17zM20 14l-5.5 5.5L9 14h1.414l4.086 4.086L18.586 14H20z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 0a3 3 0 013 3v8c0 1.005.387 1.899 1 2.594V15h-3v-1.406c.613-.695 1-1.59 1-2.594V3a2 2 0 00-4 0v4H9V3a3 3 0 013-3z"
}));

export default SvgComponent;