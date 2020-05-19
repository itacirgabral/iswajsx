function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 29,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8 17h15v13H8zM14 0h2v15h-2zM27 9l1.406 1.406L23.813 15H21l6-6zM1.625 15.813L7 21.186V24L.219 17.219l1.406-1.407z"
}));

export default SvgComponent;