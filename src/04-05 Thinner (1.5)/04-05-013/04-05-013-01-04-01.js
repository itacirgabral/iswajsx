function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 24,
  height: 47
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 22l3.219 3.219L0 28.437l5 5V40h5v7l4.656-4.656L19.281 47h.125L23 43.437l1 1V43l-1-1-3.625 3.625-4.75-4.688L11 44.563V39H6v-6l-4.563-4.563 3.22-3.218L1.436 22l4.375-4.406-2.562-6.219L12 8.281V2.156l5.531 3.219L21.5 1.437l2.5 2.5V2.5L21.5 0l-4.094 4.094L11 .406v7.188L1.969 10.78l2.687 6.563L0 22z"
}));

export default SvgComponent;