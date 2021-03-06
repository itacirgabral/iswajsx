function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 10,
  height: 10
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M5.407.469l-.72.687L7.533 4l.687-.719L5.407.47zM1.157 4.688l-.688.718L3.282 8.22 4 7.53 1.157 4.688z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10 5.757V.807L9.006.83l-.022 3.91-4.22.023-.023 4.22-3.911.023L.808 10h4.95V5.757H10z"
}));

export default SvgComponent;