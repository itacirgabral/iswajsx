function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 24,
  height: 25
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M11 7v4H7v2h4v4h2v-4h4v-2h-4V7h-2zM10.938.844L.344 11.438l1.406 1.406L12.344 2.25 10.938.844zM22.25 12.156L11.656 22.75l1.406 1.406 10.594-10.593-1.406-1.407z"
}));

export default SvgComponent;