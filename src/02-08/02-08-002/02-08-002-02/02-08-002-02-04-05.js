function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 18,
  height: 28
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M13 0c-2.761 0-5 2.686-5 6v6.25C7.165 11.482 6.132 11 5 11c-2.761 0-5 2.686-5 6v11h2V17c0-2.21 1.343-4 3-4s3 1.79 3 4v4h2V6c0-2.21 1.343-4 3-4s3 1.79 3 4v4h2V6c0-3.314-2.239-6-5-6z"
}));

export default SvgComponent;