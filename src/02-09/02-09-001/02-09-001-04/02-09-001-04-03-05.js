function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 46,
  height: 15
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M34 0l1.5 1.5h9v9L46 12V0H34z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M21.5 15a26.434 26.434 0 0018.75-7.75l.5-.5-1.438-1.438-.5.5C34.38 10.247 28.265 11 21.5 11c-6.765 0-12.879-.754-17.313-5.188L1.408 3 0 4.406 2.75 7.25A26.434 26.434 0 0021.5 15z"
}));

export default SvgComponent;