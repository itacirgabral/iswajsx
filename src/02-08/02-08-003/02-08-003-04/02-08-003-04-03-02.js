function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 23,
  height: 40
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M23 8l-7 7-7-7h2l5 5 5-5h2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 0a5 5 0 015 5v3h-2V5a3 3 0 00-3-3h-1a4 4 0 00-4 4v6.563A3.99 3.99 0 019 12a4 4 0 110 8 3.99 3.99 0 01-2-.563v3.125A3.99 3.99 0 019 22a4 4 0 110 8 4 4 0 01-1.969-.531C7.378 33.545 12 40 12 40H0s5-6.972 5-11V6a6 6 0 016-6h1zM9 14a2 2 0 100 4 2 2 0 000-4zm0 10a2 2 0 100 4 2 2 0 000-4z"
}));

export default SvgComponent;