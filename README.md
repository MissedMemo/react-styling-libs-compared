# React Styling Options Notes:

<br/>
## CSS loader

- blah
- blah
- blah


## CSS pre-processor

### Stylus

- use the post-stylus postCSS adapter to add autoprefixer support
- extract CSS as a separate file in production builds using mini-css-extract-plugin
- myComponent.jsx imports myComponent.styl (CSS can remain segregated while still maintaining a clear association with the component it targets)
- define reset and shared or top-level styles via simple @import statements
- standard CSS syntax with semi-colons and brackets optional, and a large set of accompanying utility functions -- e.g. darken(lightblue, 55%) etc.
- maintains the standard className={...} React styling syntax

### CSS Modules

- blah
- blah
- blah


## CSS-in-JS

### inline styles

- blah
- blah
- blah

### emotion-js

- autoprefixing is built in
- CSS extraction not generally recommended (and now only supported via 3rd party libs), since extraction eliminates the ability to perform dynamic styling
- uses no webpack loaders, but babel-plugin-emotion highly recommended for minification and source maps
- reset and top-level styles referenced via <Global> provider syntax, with theming support via emotion-theming
- standard CSS still supported so CSS-in-JS can be introduced into existing projects gradually
- className={...} approach still supported, but generally replaced by more succinct css={ named-const } syntax, or the <StyledABC> approach borrowed from styled-components (feature sets and syntax options now nearly identical between those two libraries)
- consider adopting the recommended <S.MyComponent> naming convention

### styled-components

- blah
- blah
- blah
