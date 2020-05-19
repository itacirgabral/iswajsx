function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 29,
  height: 20
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M19 5h9.9l-1.415 1.414h-7.07v7.071L19 14.9V5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2.03.757l6.098 6.1a3.5 3.5 0 114.066 4.066l6.099 6.098a3 3 0 004.243 0c1.171-1.172.855-3.388-.708-4.95l4.243-4.243a6 6 0 010 8.486l-2.121 2.121a5 5 0 01-7.071 0L.615 2.172 2.03.757zm8.131 5.304a2 2 0 102.829 2.828 2 2 0 00-2.829-2.828z"
}));

export default SvgComponent;