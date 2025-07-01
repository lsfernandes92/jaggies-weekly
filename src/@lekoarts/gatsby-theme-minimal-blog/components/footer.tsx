/** @jsx jsx */
import { jsx, Link } from "theme-ui"

const Footer = () => (
  <footer
    sx={{
      boxSizing: `border-box`,
      display: `flex`,
      justifyContent: `space-between`,
      mt: [1],
      mb: [6],
      color: `secondary`,
      a: {
        variant: `links.secondary`,
      },
      flexDirection: [`column`, `row`],
      variant: `dividers.top`,
      fontSize: ["1em", "1.1em"],
    }}
  >
    <div>
      Find me on{" "}
      <a
        href="https://ruby.social/@jaggiesweekly"
        rel="me noopener noreferrer"
        target="_blank"
      >
        Mastodon
      </a>
      {", "}
      <a
        href="https://bsky.app/profile/jaggiesweekly.bsky.social"
        rel="noopener noreferrer"
        target="_blank"
      >
        Bluesky
      </a>
      {", "}
      <a
        href="https://github.com/lsfernandes92"
        rel="noopener noreferrer"
        target="_blank"
      >
        Github
      </a>
      {", "}
      <a
        href="https://ko-fi.com/jaggiesweekly"
        rel="noopener noreferrer"
        target="_blank"
      >
        Ko-fi
      </a>
      {", "}
      <a
        href="https://www.linkedin.com/in/lsfernandes92/"
        rel="noopener noreferrer"
        target="_blank"
      >
        LinkedIn
      </a>
    </div>
  </footer>
)

export default Footer