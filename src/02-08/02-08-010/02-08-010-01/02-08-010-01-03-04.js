function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 29,
  height: 20
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M10 5H.1l1.415 1.414h7.07v7.071L10 14.9V5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M26.97.757l-6.098 6.1a3.5 3.5 0 10-4.066 4.066l-6.099 6.098a3 3 0 01-4.243 0c-1.171-1.172-.855-3.388.708-4.95L2.929 7.828a6 6 0 000 8.486l2.121 2.121a5 5 0 007.071 0L28.385 2.172 26.97.757zM18.84 6.061a2 2 0 11-2.829 2.828 2 2 0 012.829-2.828z"
}));

export default SvgComponent;