import baseTheme from "@lekoarts/gatsby-theme-minimal-blog/src/gatsby-plugin-theme-ui/index"

const theme = {
  ...baseTheme,
  styles: {
    ...baseTheme.styles,
    root: {
      ...baseTheme.styles?.root,
      fontSize: "1em"
    },
  },
  layout: {
    container: {
      maxWidth: "700px"
    },
  },
}

export default theme