function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 8
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M21 4l-4-4-.719.719L19.594 4 16.28 7.281 17 8l4-4z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 3.5v1h5v-1h-5zM9 4L5 0l-.719.719L7.594 4 4.28 7.281 5 8l4-4z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 3.5v1h5v-1H0z"
}));

export default SvgComponent;