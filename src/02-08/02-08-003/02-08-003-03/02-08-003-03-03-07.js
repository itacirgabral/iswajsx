function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 29,
  height: 25
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M29 15.1V25h-9.9l1.415-1.414h7.07v-7.071L29 15.1z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1.423 1.665a4 4 0 015.657 0l12.728 12.728c1.795 1.795 7.07 2.829 7.07 2.829l-5.656 5.657s-.885-4.48-2.43-6.585a2.973 2.973 0 01-.752 1.281 3 3 0 11-4.243-4.242 2.98 2.98 0 011.348-.774l-1.989-1.988a2.98 2.98 0 01-.773 1.348A3 3 0 018.14 7.676a2.98 2.98 0 011.348-.774L5.665 3.08a2 2 0 00-2.828 0 1 1 0 000 1.414l3.536 3.535-1.415 1.415-3.535-3.536a3 3 0 010-4.243zM9.2 8.737a1.5 1.5 0 102.121 2.12 1.5 1.5 0 00-2.121-2.12zm5.657 5.656a1.5 1.5 0 102.121 2.122 1.5 1.5 0 00-2.121-2.122z"
}));

export default SvgComponent;