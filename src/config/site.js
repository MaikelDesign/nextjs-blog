// Central place for site-wide identity and feature toggles.
export const siteConfig = {
  name: 'Maikel Verbeek',
  // Shown next to the name in the header, set in the secondary (italic) typeface.
  title: 'brand identity designer',
  description: 'Graphic and type designer focused on identity, typography, research & interaction.',
  email: 'design@maikelverbeek.nl',
  portrait: '/placeholders/portrait.svg',
  typography: {
    // Font weight (100-900) of paragraph text that uses the `paragraph-text` class,
    // e.g. the intro on the homepage.
    paragraphWeight: 400,
    // Line height of paragraph text, as a unitless multiple of the font size (1.4 = 140%).
    paragraphLineHeight: 1.4,
  },
  // Set `enabled: false` to hide the Instagram icon in the nav and the link on the About page.
  instagram: {
    enabled: false,
    url: 'https://www.instagram.com/',
  },
}
