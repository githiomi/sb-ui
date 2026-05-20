/* =========================================================
    PRIMITIVE COLORS
   ========================================================= */
const primary = {
    900: "#002a3b",
    800: "#00435e",
    700: "#004560",
    600: "#005374",
    500: "#00829d",
    400: "#009cbc",
};

const accent = {
    500: "#ffed00",
    400: "#fff351",
    300: "#d6d3a2",
};

const success = {
    700: "#01583E",
    600: "#047857",
    500: "#10B981",
    400: "#069668",
    300: "#3fa41a",
    200: "#0FE630",
};

const error = {
    700: "#561000",
    600: "#931F06",
    500: "#dc3545",
    400: "#F80505",
};

const warning = {
    700: "#583300",
    600: "#935801",
    500: "#f9a201",
};

const neutral = {
    900: "#000000",
    800: "#002a3b",
    700: "#004560",
    600: "#707070",
    500: "#a2a8a8",
    400: "#cccccc",
    300: "#F5F5F5",
    200: "#ffffff",
};

/* =========================================================
    OPACITY TOKENS (STANDARDIZED RGBA)
   ========================================================= */
const opacity = {
    black: {
        100: "rgba(0,0,0,0.3)",
        200: "rgba(0,0,0,0.5)",
        300: "rgba(0,0,0,0.7)",
        400: "rgba(0,0,0,0.75)",
    },

    primary: {
        100: "rgba(0,156,188,0.02)",
        200: "rgba(0,156,188,0.03)",
        300: "rgba(0,156,188,0.3)",
        400: "rgba(0,156,188,0.4)",
    },

    neutral: {
        100: "rgba(112,112,112,0.1)",
        200: "rgba(112,112,112,0.2)",
        300: "rgba(112,112,112,0.6)",
    },
};

/* =========================================================
    GRADIENTS
   ========================================================= */

const gradients = {
    body: "radial-gradient(circle, #004560 0%, #00435e 33%, #002a3b 100%)",
    overlayLeft:
        "linear-gradient(270deg, rgba(0,42,59,0) 0%, rgba(0,42,59,0.5) 48.8%, #002a3b 97.66%)",
    overlayRight:
        "linear-gradient(90deg, rgba(0,42,59,0) 0%, rgba(0,42,59,0.5) 48.8%, #002a3b 97.66%)",
};

/* =========================================================
    SEMANTIC TOKENS (LIGHT THEME)
   ========================================================= */
const light = {
    background: {
        primary: neutral[200],
        secondary: neutral[300],
        tertiary: neutral[400],
        surface: "#ffffff",
        inverse: primary[900],
    },

    text: {
        primary: neutral[900],
        secondary: neutral[600],
        tertiary: neutral[500],
        inverse: neutral[200],
        brand: primary[700],
        link: accent[500],
    },

    border: {
        default: opacity.neutral[200],
        subtle: opacity.neutral[100],
        strong: neutral[500],
    },

    button: {
        primary: {
            bg: accent[500],
            hover: accent[400],
            text: primary[700],
            disabledBg: accent[300],
        },

        secondary: {
            bg: primary[600],
            hover: primary[700],
            text: neutral[200],
        },

        ghost: {
            text: primary[700],
            hoverBg: opacity.neutral[100],
        },
    },

    status: {
        success: success[500],
        error: error[500],
        warning: warning[500],
        neutral: neutral[500],
    },
};

/* =========================================================
    SEMANTIC TOKENS (DARK THEME)
   ========================================================= */
const dark = {
    background: {
        primary: primary[900],
        secondary: primary[800],
        tertiary: primary[700],
        surface: primary[800],
        inverse: neutral[200],
    },

    text: {
        primary: neutral[200],
        secondary: neutral[500],
        tertiary: neutral[400],
        inverse: neutral[900],
        brand: primary[400],
        link: accent[500],
    },

    border: {
        default: opacity.primary[200],
        subtle: opacity.primary[100],
        strong: primary[600],
    },

    button: {
        primary: {
            bg: accent[500],
            hover: accent[400],
            text: primary[700],
            disabledBg: accent[300],
        },

        secondary: {
            bg: primary[600],
            hover: primary[700],
            text: neutral[200],
        },

        ghost: {
            text: neutral[200],
            hoverBg: opacity.black[100],
        },
    },

    status: {
        success: success[500],
        error: error[500],
        warning: warning[500],
        neutral: neutral[500],
    },
};

/* =========================================================
    FINAL EXPORT
   ========================================================= */

export const colors = {
    // primitives
    primary,
    accent,
    success,
    error,
    warning,
    neutral,
    opacity,
    gradients,

    // themes
    themes: {
        light,
        dark,
    },
};

export type ColorTheme = typeof light;
export type ThemeMode = keyof typeof colors.themes;
