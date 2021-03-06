function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 23,
  height: 16
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M23 3.272V16H10.272l1.414-1.414h9.9v-9.9L23 3.272zM1.787 3.272a8 8 0 0111.314 0c1.795 1.795 7.07 2.829 7.07 2.829l-7.07 7.07s-1.034-5.275-2.829-7.07C7.93 3.757 4.763 3.124 3.201 4.686c-1.562 1.562-.296 5.361 2.828 8.486l-1.414 1.414C.71 10.68-.556 5.616 1.787 3.272z"
}));

export default SvgComponent;