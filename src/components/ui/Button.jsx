import React from 'react';

export default function Button({text, cssTextColor, cssBgColor, cssPadding, cssRounded, fontSize, onClick}) {
    return (
        <button className={`${cssTextColor} ${cssBgColor} ${cssPadding} ${cssRounded} ${fontSize} mt-1 hover:brightness-110`} onClick={onClick}>
            {text}
        </button>
    );
}

