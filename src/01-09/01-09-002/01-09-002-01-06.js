function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 23,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8 14a8 8 0 110 16 8 8 0 010-16zM10 0v12.219A9.895 9.895 0 008 12V0h2zM17 3l1.781.906-5.062 9.906A9.937 9.937 0 0012 12.845L17 3zM21 10l1.406 1.406-5.687 5.688a9.946 9.946 0 00-1.157-1.657L21 10z"
}));

export default SvgComponent;