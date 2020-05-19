function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 24,
  height: 24
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M12 6a6 6 0 100 12 6 6 0 000-12zm0 2a4 4 0 110 8 4 4 0 010-8z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 8a4 4 0 100 8 4 4 0 000-8zm0 2a2 2 0 110 4 2 2 0 010-4z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 10a2 2 0 100 4 2 2 0 000-4zM.333 13.06l10.606 10.607 1.415-1.414L1.747 11.646.333 13.061zM11.646 1.747l10.607 10.607 1.414-1.415L13.061.333l-1.415 1.414z"
}));

export default SvgComponent;