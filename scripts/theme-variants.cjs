const THEME_SCOPES = {
  keyword: [
    "keyword",
    "keyword.control",
    "storage",
    "storage.type",
    "storage.modifier",
    "punctuation.separator.key-value",
    "punctuation.separator.key-value.properties"
  ],
  string: [
    "string",
    "string.unquoted",
    "string.unquoted.properties",
    "meta.property-value",
    "meta.property-value.properties"
  ],
  comment: [
    "comment",
    "comment.line.number-sign",
    "comment.line.exclamation",
    "punctuation.definition.comment"
  ],
  function: [
    "entity.name.function",
    "support.function",
    "meta.function-call",
    "variable.function",
    "support.function.property-list"
  ],
  variable: [
    "variable",
    "support.variable",
    "variable.other.key",
    "variable.other.key.properties",
    "entity.other.attribute-name",
    "entity.other.attribute-name.properties"
  ],
  number: [
    "constant.numeric",
    "number",
    "constant.numeric.integer",
    "constant.numeric.float"
  ],
  type: [
    "entity.name.type",
    "support.type",
    "storage.type"
  ],
  class: [
    "entity.name.class",
    "support.class"
  ],
  constant: [
    "constant",
    "support.constant",
    "variable.other.constant",
    "constant.language.boolean",
    "constant.language.boolean.properties",
    "constant.character.escape",
    "constant.character.escape.properties"
  ]
};

const paletteOptions = [
  {
    id: "white",
    label: "White",
    light: {
      bg: "#EEE7E0",
      fg: "#514944",
      accent: "#C2CFDE",
      soft: "#E2D8CF",
      muted: "#A8998F",
      status: "#DCCFC5"
    },
    dark: {
      bg: "#3A3532",
      fg: "#E8DFD9",
      accent: "#D2DFEC",
      soft: "#4A433F",
      muted: "#B1A39A",
      status: "#554D48"
    },
    tokens: {
      keyword: "#B09CC9",
      string: "#96B28B",
      function: "#89AFCB",
      number: "#D3A28B",
      type: "#A89AD1",
      class: "#A9B7DF",
      constant: "#C59DAE"
    }
  },
  {
    id: "black",
    label: "Black",
    light: {
      bg: "#E7EBEF",
      fg: "#40474D",
      accent: "#A5B3C4",
      soft: "#D7DDE3",
      muted: "#8C969E",
      status: "#CDD5DD"
    },
    dark: {
      bg: "#2B3137",
      fg: "#DCE4E9",
      accent: "#B3C0D0",
      soft: "#384048",
      muted: "#96A0AA",
      status: "#454E56"
    },
    tokens: {
      keyword: "#A9B9CE",
      string: "#9DB8A5",
      function: "#93B0C5",
      number: "#D2AA95",
      type: "#B1A8CF",
      class: "#ACB8D9",
      constant: "#C0A3B0"
    }
  },
  {
    id: "pink",
    label: "Pink",
    light: {
      bg: "#F7EAF0",
      fg: "#5A4951",
      accent: "#DDB0C0",
      soft: "#EED4DE",
      muted: "#AE919D",
      status: "#E5C7D3"
    },
    dark: {
      bg: "#473640",
      fg: "#F4E6EC",
      accent: "#E3A9BE",
      soft: "#59424E",
      muted: "#B999A6",
      status: "#694C59"
    },
    tokens: {
      keyword: "#C4A0D9",
      string: "#A8C7A0",
      function: "#96BED4",
      number: "#E3B39E",
      type: "#C9B0E5",
      class: "#B7C0ED",
      constant: "#E0A7BE"
    }
  },
  {
    id: "aqua",
    label: "Aqua",
    light: {
      bg: "#EAF3F7",
      fg: "#42545C",
      accent: "#B1D0DE",
      soft: "#DCE9EF",
      muted: "#92A7B0",
      status: "#D1E3EB"
    },
    dark: {
      bg: "#2D3D46",
      fg: "#D7E4EA",
      accent: "#9CC7D8",
      soft: "#3A4D57",
      muted: "#96AAB3",
      status: "#49606B"
    },
    tokens: {
      keyword: "#91A8CC",
      string: "#92B99D",
      function: "#7DB0C2",
      number: "#D8A78F",
      type: "#AB9ED3",
      class: "#9DB1E4",
      constant: "#C79BAA"
    }
  },
  {
    id: "yellow",
    label: "Yellow",
    light: {
      bg: "#F7F0D8",
      fg: "#595142",
      accent: "#DFC98F",
      soft: "#EDE1B8",
      muted: "#AA9B79",
      status: "#E4D4A6"
    },
    dark: {
      bg: "#4A442D",
      fg: "#F5EDCF",
      accent: "#E7CB74",
      soft: "#5A5238",
      muted: "#BBB07E",
      status: "#6A6140"
    },
    tokens: {
      keyword: "#B59DD4",
      string: "#9FBE91",
      function: "#8FB9CF",
      number: "#E4B07D",
      type: "#C2B2E1",
      class: "#BCC5EA",
      constant: "#D0A5AF"
    }
  },
  {
    id: "orange",
    label: "Orange",
    light: {
      bg: "#F8EBDF",
      fg: "#584A41",
      accent: "#DEB69A",
      soft: "#EDD8C8",
      muted: "#AB8F80",
      status: "#E4C9B3"
    },
    dark: {
      bg: "#44342D",
      fg: "#F0E1D9",
      accent: "#E4B18D",
      soft: "#56423A",
      muted: "#BA9B8C",
      status: "#685046"
    },
    tokens: {
      keyword: "#BD9FD3",
      string: "#A3C194",
      function: "#93B8CB",
      number: "#E2A57C",
      type: "#C7B0E0",
      class: "#B7C0E6",
      constant: "#D5A1AE"
    }
  },
  {
    id: "green",
    label: "Green",
    light: {
      bg: "#E8F3E8",
      fg: "#455347",
      accent: "#B1D2B5",
      soft: "#D7E6DA",
      muted: "#92A794",
      status: "#CBDCCF"
    },
    dark: {
      bg: "#304035",
      fg: "#DDE9DF",
      accent: "#AAD7AE",
      soft: "#3E5144",
      muted: "#97B19A",
      status: "#506554"
    },
    tokens: {
      keyword: "#9EAED2",
      string: "#99C3A0",
      function: "#8AB6C8",
      number: "#D9A88D",
      type: "#B6A9DC",
      class: "#A8BAE6",
      constant: "#CDA0B2"
    }
  },
  {
    id: "gray",
    label: "Gray",
    light: {
      bg: "#E8EAEE",
      fg: "#474B52",
      accent: "#C1C8D1",
      soft: "#D8DCE3",
      muted: "#949CA5",
      status: "#CDD3DB"
    },
    dark: {
      bg: "#34383E",
      fg: "#DEE2E8",
      accent: "#BEC7D3",
      soft: "#434850",
      muted: "#9CA3AF",
      status: "#545A63"
    },
    tokens: {
      keyword: "#A9B2D2",
      string: "#A2BEA8",
      function: "#95B5CA",
      number: "#D3AA95",
      type: "#B7AED6",
      class: "#B0BCE0",
      constant: "#C6A8B4"
    }
  },
  {
    id: "brown",
    label: "Brown",
    light: {
      bg: "#F0E6DD",
      fg: "#564A43",
      accent: "#CFB5A2",
      soft: "#E3D3C7",
      muted: "#A28C7F",
      status: "#D9C4B5"
    },
    dark: {
      bg: "#40352F",
      fg: "#E8DED8",
      accent: "#D3B09A",
      soft: "#51423B",
      muted: "#B0988B",
      status: "#635049"
    },
    tokens: {
      keyword: "#B59FD3",
      string: "#A5C19B",
      function: "#95B7CD",
      number: "#D9A07F",
      type: "#C0AFDE",
      class: "#B6C0E5",
      constant: "#D0A1AD"
    }
  }
];

function hexToRgb(hex) {
  const normalized = hex.replace("#", "");
  return {
    r: Number.parseInt(normalized.slice(0, 2), 16),
    g: Number.parseInt(normalized.slice(2, 4), 16),
    b: Number.parseInt(normalized.slice(4, 6), 16)
  };
}

function rgbToHex({ r, g, b }) {
  return `#${[r, g, b].map((value) => Math.max(0, Math.min(255, Math.round(value))).toString(16).padStart(2, "0")).join("")}`;
}

function mix(base, target, weight) {
  const baseRgb = hexToRgb(base);
  const targetRgb = hexToRgb(target);
  return rgbToHex({
    r: baseRgb.r * (1 - weight) + targetRgb.r * weight,
    g: baseRgb.g * (1 - weight) + targetRgb.g * weight,
    b: baseRgb.b * (1 - weight) + targetRgb.b * weight
  });
}

function lighten(hex, amount) {
  return mix(hex, "#ffffff", amount);
}

function darken(hex, amount) {
  return mix(hex, "#000000", amount);
}

function createColors(tone, mode) {
  const isLight = mode === "light";
  const selection = mix(tone.accent, tone.bg, isLight ? 0.5 : 0.38);
  const sidebarBackground = mix(tone.soft, tone.bg, isLight ? 0.45 : 0.42);
  const activityBackground = mix(tone.soft, tone.bg, isLight ? 0.62 : 0.6);

  return {
    foreground: tone.fg,
    "editor.background": tone.bg,
    "editor.foreground": tone.fg,
    "editor.selectionBackground": selection,
    "editorCursor.foreground": isLight ? darken(tone.accent, 0.18) : lighten(tone.accent, 0.1),
    "editorLineNumber.foreground": mix(tone.fg, tone.bg, isLight ? 0.55 : 0.42),
    "editorLineNumber.activeForeground": mix(tone.accent, tone.fg, isLight ? 0.4 : 0.3),
    "editorIndentGuide.background1": mix(tone.bg, tone.fg, isLight ? 0.08 : 0.14),
    "editorIndentGuide.activeBackground1": mix(tone.accent, tone.fg, isLight ? 0.55 : 0.35),
    "editorWhitespace.foreground": mix(tone.bg, tone.fg, isLight ? 0.06 : 0.1),
    "editorInlayHint.foreground": tone.muted,
    "editorInlayHint.background": mix(sidebarBackground, tone.bg, isLight ? 0.2 : 0.35),
    "sideBar.foreground": tone.fg,
    "sideBar.background": sidebarBackground,
    "sideBarTitle.foreground": tone.fg,
    "list.activeSelectionForeground": isLight ? darken(tone.fg, 0.12) : lighten(tone.fg, 0.12),
    "list.activeSelectionBackground": selection,
    "list.inactiveSelectionForeground": tone.fg,
    "list.inactiveSelectionBackground": mix(selection, tone.bg, isLight ? 0.18 : 0.35),
    "activityBar.foreground": tone.fg,
    "activityBar.background": activityBackground,
    "statusBar.foreground": isLight ? darken(tone.fg, 0.12) : lighten(tone.fg, 0.12),
    "statusBar.background": tone.status,
    "tab.activeForeground": isLight ? darken(tone.fg, 0.12) : lighten(tone.fg, 0.12),
    "tab.inactiveForeground": tone.muted,
    "titleBar.activeForeground": isLight ? darken(tone.fg, 0.12) : lighten(tone.fg, 0.12),
    "titleBar.inactiveForeground": tone.muted
  };
}

function createTokenColors(tokenSet, tone, mode) {
  const isLight = mode === "light";
  const commentColor = isLight ? mix(tokenSet.constant, tone.bg, 0.55) : mix(tone.muted, tokenSet.constant, 0.22);
  const variableColor = isLight ? mix(tone.fg, tokenSet.function, 0.15) : mix(tone.fg, tokenSet.function, 0.08);
  const adjust = (hex) => (isLight ? darken(hex, 0.04) : lighten(hex, 0.14));

  return [
    { name: "Keyword", scope: THEME_SCOPES.keyword, settings: { foreground: adjust(tokenSet.keyword) } },
    { name: "String", scope: THEME_SCOPES.string, settings: { foreground: adjust(tokenSet.string) } },
    { name: "Comment", scope: THEME_SCOPES.comment, settings: { fontStyle: "italic", foreground: commentColor } },
    { name: "Function", scope: THEME_SCOPES.function, settings: { foreground: adjust(tokenSet.function) } },
    { name: "Variable", scope: THEME_SCOPES.variable, settings: { foreground: variableColor } },
    { name: "Number", scope: THEME_SCOPES.number, settings: { foreground: adjust(tokenSet.number) } },
    { name: "Type", scope: THEME_SCOPES.type, settings: { foreground: adjust(tokenSet.type) } },
    { name: "Class", scope: THEME_SCOPES.class, settings: { foreground: adjust(tokenSet.class) } },
    { name: "Constant", scope: THEME_SCOPES.constant, settings: { foreground: adjust(tokenSet.constant) } }
  ];
}

function createVariant(palette, mode) {
  const tone = palette[mode];
  const modeLabel = mode === "light" ? "Light" : "Dark";
  const name = `Soft Pastel ${palette.label} ${modeLabel}`;
  return {
    paletteId: palette.id,
    name,
    mode,
    uiTheme: mode === "light" ? "vs" : "vs-dark",
    fileName: `${name}-color-theme.json`,
    theme: {
      name,
      colors: createColors(tone, mode),
      tokenColors: createTokenColors(palette.tokens, tone, mode)
    }
  };
}

const variants = paletteOptions.flatMap((palette) => [createVariant(palette, "light"), createVariant(palette, "dark")]);
const themeNames = variants.map((variant) => variant.name);

module.exports = {
  paletteOptions,
  themeNames,
  variants
};