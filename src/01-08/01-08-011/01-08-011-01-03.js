function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 29,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8 15h15v15H8zM8 0h2v15H8zM19 4h2v11h-2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M27 9l1.406 1.406L23 15.812V15h-2l6-6zM1.625 15.813L8 22.186V25L.219 17.219l1.406-1.407z"
}));

export default SvgComponent;