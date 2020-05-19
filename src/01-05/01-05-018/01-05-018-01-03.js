function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 18,
  height: 27
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M12 0L6 6v21h12V6l-6-6zM1.406 16.594L6 21.187V24l-6-6 1.406-1.406z"
}));

export default SvgComponent;