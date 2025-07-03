import baseTheme from "@lekoarts/gatsby-theme-minimal-blog/src/gatsby-plugin-theme-ui/index"

const theme = {
  ...baseTheme,
  styles: {
    ...baseTheme.styles,
    root: {
      ...baseTheme.styles?.root,
      fontWeight: "400",
    },
    a: {
      ...baseTheme.styles?.a,
      "@media (max-width: 470px)": {
        textDecoration: "underline",
        fontSize: ["1.1em"]
      },
    },
    p: {
      ...baseTheme.styles?.p,
      fontSize: ["1.25em"],
      fontWeight: "400",
    },
    ul: {
      ...baseTheme.styles?.ul,
      li: {
        ...baseTheme.styles?.ul?.li,
        fontSize: ["1.25em"],
      },
    },
    ol: {
      ...baseTheme.styles?.ol,
      li: {
        ...baseTheme.styles?.ol?.li,
        fontSize: ["1.25em"],
      },
    },
    h1: { ...baseTheme.styles?.h1, fontWeight: "heading", },
    h2: { ...baseTheme.styles?.h2, fontWeight: "heading", fontSize: ["2.25rem"]},
    h3: { ...baseTheme.styles?.h3, fontWeight: "heading", fontSize: ["1.25rem"] },
    h4: { ...baseTheme.styles?.h4, fontWeight: "heading" },
    h5: { ...baseTheme.styles?.h5, fontWeight: "heading" },
    h6: { ...baseTheme.styles?.h6, fontWeight: "heading" },
  },
  layout: {
    ...baseTheme.layout,
    container: {
      ...baseTheme.layout?.container,
      maxWidth: "700px",
      mx: "auto",
      px: [3, 4],
    },
  },
  fonts: {
    ...baseTheme.fonts,
    body: baseTheme.fonts?.body || "system-ui, sans-serif",
  },
}

export default theme