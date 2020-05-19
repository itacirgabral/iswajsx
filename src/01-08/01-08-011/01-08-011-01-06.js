function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 29,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8 17h15v13H8zM8 0h2v15H8zM19 4h2v11h-2zM27 9l-6 6h2.813l4.593-4.594L27 9zM1.625 15.813L.219 17.218 7 24v-2.813l-5.375-5.375z"
}));

export default SvgComponent;