function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 24,
  height: 37
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M24 0v22L9 37l-1.406-1.406L22 21.187V5H0V0h24z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M22 5v16.188L7.594 35.593 9 37H7.562l-1.406-1.406L4.75 37H2.031l-.75-.75 1.5-1.531c-1.248-1.974-.91-4.746.969-6.625 1.88-1.88 4.651-2.217 6.625-.969l1.5-1.5L14 27.75l7-7V6H0V5h22zM9 37l15-15v1.438L10.406 37H9zm2.875-9.969l-1.406 1.438c-1.562-1.562-4.243-1.414-6 .343-1.758 1.758-1.937 4.438-.375 6L2.687 36.25l.72.688 9.187-9.188-.719-.719zm-3.813 1.844c.512.061.978.29 1.344.656l-4.25 4.219c-.976-.976-.828-2.703.344-3.875.586-.586 1.327-.936 2.031-1 .176-.016.36-.02.532 0z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12.586 27.75l-9.193 9.193-.707-.707 1.415-1.415c-1.563-1.562-1.404-4.253.353-6.01 1.757-1.757 4.448-1.916 6.01-.353l1.415-1.415.707.707zm-3.182 1.768c-.977-.976-2.718-.818-3.89.354-1.17 1.171-1.33 2.912-.353 3.889l4.243-4.243z"
}));

export default SvgComponent;