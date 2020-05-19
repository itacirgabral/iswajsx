function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 20,
  height: 15
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M.243 1.657L11.556 12.97a4 4 0 005.657 0c2.734-2.734 3.05-6.85.707-9.193l-1.414 1.414c1.562 1.562 1.246 4.412-.707 6.364a2 2 0 01-2.828 0L9.7 8.286A3.5 3.5 0 105.634 4.22L1.656.243.243 1.657zm7.424 1.768a2 2 0 112.829 2.828 2 2 0 01-2.829-2.828z"
}));

export default SvgComponent;