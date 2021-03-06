function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 24,
  height: 19
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M.808 0H10v9.192L.808 0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M22.728 6.364l-8.485 8.485c-1.953 1.953-5.435 1.636-7.779-.707-1.562-1.562-.928-4.728 1.415-7.07l-4.95-4.95a9 9 0 000 12.727l1.414 1.414c2.734 2.734 7.483 2.418 10.607-.707l8.485-8.485-.707-.707z"
}));

export default SvgComponent;