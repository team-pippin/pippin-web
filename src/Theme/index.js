export const preset = {
  colors: {
    text: "#000",
    background: "#fff",
    primary: "#30c",
    secondary: "#07c",
    muted: "#f6f6f9",
    gray: "#dddddf",
    highlight: "hsla(205, 100%, 40%, 0.125)"
  },
  fonts: {
    body: "system-ui, sans-serif",
    heading: "inherit",
    monospace: "Menlo, monospace"
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  sizes: {
    avatar: 48,
    avatarMed: 36
  },
  radii: {
    default: 4,
    circle: 99999
  },
  shadows: {
    card: "0 0 16px rgba(0, 0, 0, .125)"
  },
  // rebass variants
  text: {
    heading: {
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading"
    },
    display: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
      fontSize: [5, 6, 7]
    },
    caps: {
      textTransform: "uppercase",
      letterSpacing: "0.1em"
    }
  },
  variants: {
    avatar: {
      width: "avatar",
      height: "avatar",
      borderRadius: "circle"
    },
    avatarMed: {
      width: "avatarMed",
      height: "avatarMed",
      borderRadius: "circle"
    },
    card: {
      p: 2,
      bg: "background",
      boxShadow: "card"
    },
    link: {
      color: "primary"
    },
    nav: {
      fontSize: 1,
      fontWeight: "bold",
      display: "inline-block",
      p: 2,
      color: "#333",
      textDecoration: "none",
      ":hover,:focus,.active": {
        color: "primary"
      }
    },
    navLogo: {
      fontSize: 4,
      fontWeight: "bold",
      display: "inline-block",
      color: "#333",
      textDecoration: "none",
      m: 3
    },
    schoolCardLink: {
      textDecoration: "none",
      color: "text",
      ":hover,:focus,.active": {
        color: "primary"
      }
    },
    sideNavItem: {
      color: "white",
      background: "primary",
      borderRadius: 4,
      "&:hover": {
        background: "secondary"
      }
    }
  },
  buttons: {
    primary: {
      fontSize: 2,
      fontWeight: "bold",
      color: "background",
      bg: "primary",
      borderRadius: 8,
      py: 3,
      px: 4,
      "&:hover": {
        bg: "text"
      }
    },
    outline: {
      variant: "buttons.primary",
      color: "primary",
      bg: "transparent",
      boxShadow: "inset 0 0 2px"
    },
    secondary: {
      variant: "buttons.primary",
      color: "background",
      bg: "secondary",
      "&:hover": {
        bg: "primary"
      }
    }
  },
  styles: {
    root: {
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body"
    }
  },
  forms: {
    input: {
      borderColor: "gray",
      "&:focus": {
        borderColor: "primary",
        boxShadow: t => `0 0 0 2px ${t.colors.primary}`,
        outline: "none"
      }
    },
    select: {},
    textarea: {},
    label: {
      fontSize: [1],
      fontWeight: "bold"
    },
    radio: {},
    checkbox: {}
  }
};

export default preset;
