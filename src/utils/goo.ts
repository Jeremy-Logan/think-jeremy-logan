import React from 'react';

interface GooProps {
    children: React.ReactNode;
    className?: string;
    composite?: boolean;
    intensity?: 'weak' | 'medium' | 'strong';
    id?: string;
    style?: React.CSSProperties;
}

const Goo: React.FC<GooProps> = ({
    children,
    className,
    composite = false,
    intensity = 'medium',
    id = 'gooey-react',
    style
}) => {
    const blur = intensity === 'weak' ? 8 : intensity === 'strong' ? 16 : 12;
    const alpha = blur * 6;
    const shift = alpha / -2;
    const r = '1 0 0 0 0';
    const g = '0 1 0 0 0';
    const b = '0 0 1 0 0';
    const a = `0 0 0 ${alpha} ${shift}`;
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("svg", {
        style: {
            pointerEvents: 'none',
            position: 'absolute'
        }
    }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("filter", {
        colorInterpolationFilters: "sRGB",
        id: id
    }, /*#__PURE__*/React.createElement("feGaussianBlur", {
        stdDeviation: blur
    }), /*#__PURE__*/React.createElement("feColorMatrix", {
        values: `${r} ${g} ${b} ${a}`
    }), composite && /*#__PURE__*/React.createElement("feComposite", {
        in: "SourceGraphic"
    })))), /*#__PURE__*/React.createElement("div", {
        className: className,
        style: {
            ...style,
            filter: `url(#${id})`
        }
    }, children));
};

export default Goo;