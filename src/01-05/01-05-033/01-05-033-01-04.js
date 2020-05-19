function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 20,
  height: 21
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M12 5h8v15h-8z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M13 6h6v13h-6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7.5 0C3.358 0 0 2.239 0 5h3c0-1.105 2.015-2 4.5-2 1.665 0 3.097.403 3.875 1h3.469c-.7-2.278-3.72-4-7.344-4zM0 16c0 2.761 3.358 5 7.5 5 .88 0 1.715-.095 2.5-.281v-2.063A9.159 9.159 0 017.5 19C4.462 19 2 17.657 2 16H0z"
}));

export default SvgComponent;