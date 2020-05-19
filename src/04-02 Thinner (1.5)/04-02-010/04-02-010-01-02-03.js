function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 6
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M9 1v5H8V2H4V1h5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 0v2.5A3.5 3.5 0 003.5 6c1.742.005 2.702-1.19 3.5-2.281V3h-.719c-.737.524-1.487 1.034-2.781 1C2.12 4 1 3.328 1 2.5V0H0zM21 1v5h-1V2h-4V1h5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 0v2.5A3.5 3.5 0 0015.5 6c1.742.005 2.702-1.19 3.5-2.281V3h-.719c-.737.524-1.487 1.034-2.781 1-1.38 0-2.5-.672-2.5-1.5V0h-1z"
}));

export default SvgComponent;