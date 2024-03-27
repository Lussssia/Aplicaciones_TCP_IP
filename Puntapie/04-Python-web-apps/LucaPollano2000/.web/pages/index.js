/** @jsxImportSource @emotion/react */


import { Fragment, useContext } from "react"
import { ColorModeContext, EventLoopContext, StateContexts } from "/utils/context"
import { Event, getBackendURL, isTrue } from "/utils/state"
import { MenuIcon as LucideMenuIcon, WifiOffIcon as LucideWifiOffIcon } from "lucide-react"
import { keyframes } from "@emotion/react"
import { Box as RadixThemesBox, Code as RadixThemesCode, Dialog as RadixThemesDialog, DropdownMenu as RadixThemesDropdownMenu, Flex as RadixThemesFlex, Heading as RadixThemesHeading, Link as RadixThemesLink, Text as RadixThemesText, Theme as RadixThemesTheme } from "@radix-ui/themes"
import env from "/env.json"
import "@radix-ui/themes/styles.css"
import "katex/dist/katex.min.css"
import theme from "/utils/theme.js"
import NextLink from "next/link"
import ReactMarkdown from "react-markdown"
import remarkMath from "remark-math"
import remarkGfm from "remark-gfm"
import remarkUnwrapImages from "remark-unwrap-images"
import rehypeKatex from "rehype-katex"
import rehypeRaw from "rehype-raw"
import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter"
import oneLight from "react-syntax-highlighter/dist/cjs/styles/prism/one-light"
import oneDark from "react-syntax-highlighter/dist/cjs/styles/prism/one-dark"
import python from "react-syntax-highlighter/dist/cjs/languages/prism/python"
import NextHead from "next/head"



const pulse = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`


export function Theme_5cc3f82cfbdabe86b13d8606a6df025d () {
  const state__theme_state = useContext(StateContexts.state__theme_state)


  return (
    <RadixThemesTheme accentColor={state__theme_state.accent_color} css={{...theme.styles.global[':root'], ...theme.styles.global.body}}>
  <RadixThemesFlex align={`start`} css={{"transition": "left 0.5s, width 0.5s", "position": "relative"}} direction={`row`} gap={`2`}>
  <RadixThemesBox css={{"@media screen and (min-width: 0)": {"display": "none"}, "@media screen and (min-width: 30em)": {"display": "none"}, "@media screen and (min-width: 48em)": {"display": "block"}, "minWidth": "20em", "height": "100%", "position": "sticky", "top": "0px", "borderRight": "1px solid var(--accent-12)"}}>
  <RadixThemesFlex align={`start`} css={{"height": "100dvh"}} direction={`column`} gap={`2`}>
  <RadixThemesFlex align={`center`} css={{"width": "100%", "borderBottom": "1px solid var(--accent-12)", "padding": "1em"}} direction={`row`} gap={`2`}>
  <Fragment_7a8c36e959b4ac274c12cd473cdf7412/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesLink asChild={true}>
  <NextLink href={`https://github.com/reflex-dev/reflex`} passHref={true}>
  <RadixThemesFlex css={{"boxShadow": "0px 0px 0px 1px rgba(84, 82, 95, 0.14)", "background": "transparent", "borderRadius": "0.375rem", "&:hover": {"background": "var(--accent-1)"}, "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
  <img css={{"height": "3em", "padding": "0.5em"}} src={`/github.svg`}/>
</RadixThemesFlex>
</NextLink>
</RadixThemesLink>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} css={{"width": "100%", "overflowY": "auto", "alignItems": "flex-start", "padding": "1em"}} direction={`column`} gap={`2`}>
  <Link_97e05143123d6b32b753a76522f5f1bb/>
  <Link_be14b499d5139557daf41bf5bb5f5928/>
  <Link_b78b7a058624ab585625df054ae8da47/>
</RadixThemesFlex>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesFlex align={`start`} css={{"width": "100%", "borderTop": "1px solid var(--accent-12)", "padding": "1em"}} direction={`row`} gap={`2`}>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesLink asChild={true} css={{"color": "var(--accent-10)", "textDecoration": "none", "&:hover": {"color": "var(--accent-10)"}}}>
  <NextLink href={`https://reflex.dev/docs/getting-started/introduction/`} passHref={true}>
  <RadixThemesText as={`p`}>
  {`Docs`}
</RadixThemesText>
</NextLink>
</RadixThemesLink>
  <RadixThemesLink asChild={true} css={{"color": "var(--accent-10)", "textDecoration": "none", "&:hover": {"color": "var(--accent-10)"}}}>
  <NextLink href={`https://reflex.dev/blog/`} passHref={true}>
  <RadixThemesText as={`p`}>
  {`Blog`}
</RadixThemesText>
</NextLink>
</RadixThemesLink>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesBox>
  <RadixThemesBox css={{"paddingTop": "5em", "@media screen and (min-width: 0)": {"paddingInlineStart": "auto", "paddingInlineEnd": "auto"}, "@media screen and (min-width: 30em)": {"paddingInlineStart": "2em", "paddingInlineEnd": "2em"}, "flex": "1"}}>
  <RadixThemesBox css={{"alignItems": "flex-start", "boxShadow": "0px 0px 0px 1px rgba(84, 82, 95, 0.14)", "borderRadius": "0.375rem", "padding": "1em", "marginBottom": "2em"}}>
  <ReactMarkdown rehypePlugins={[rehypeKatex, rehypeRaw]} remarkPlugins={[remarkMath, remarkGfm, remarkUnwrapImages]} components={ComponentMap_64a6a6d4846daf7f6e291d477ddb4d3f()}>
  {`# Welcome to Reflex!

This is the base Reflex template - installed when you run \`reflex init\`.

If you want to use a different template, pass the \`--template\` flag to \`reflex init\`.
For example, if you want a more basic starting point, you can run:

\`\`\`bash
reflex init --template blank
\`\`\`

## About this Template

This template has the following directory structure:

\`\`\`bash
├── README.md
├── assets
├── rxconfig.py
└── {your_app}
    ├── __init__.py
    ├── components
    │   ├── __init__.py
    │   └── sidebar.py
    ├── pages
    │   ├── __init__.py
    │   ├── dashboard.py
    │   ├── index.py
    │   └── settings.py
    ├── styles.py
    ├── templates
    │   ├── __init__.py
    │   └── template.py
    └── {your_app}.py
\`\`\`

See the [Project Structure docs](https://reflex.dev/docs/getting-started/project-structure/) for more information on general Reflex project structure.

### Adding Pages

In this template, the pages in your app are defined in \`{your_app}/pages/\`.
Each page is a function that returns a Reflex component.
For example, to edit this page you can modify \`{your_app}/pages/index.py\`.
See the [pages docs](https://reflex.dev/docs/pages/routes/) for more information on pages.

In this template, instead of using \`rx.add_page\` or the \`@rx.page\` decorator,
we use the \`@template\` decorator from \`{your_app}/templates/template.py\`.

To add a new page:

1. Add a new file in \`{your_app}/pages/\`. We recommend using one file per page, but you can also group pages in a single file.
2. Add a new function with the \`@template\` decorator, which takes the same arguments as \`@rx.page\`.
3. Import the page in your \`{your_app}/pages/__init__.py\` file and it will automatically be added to the app.


### Adding Components

In order to keep your code organized, we recommend putting components that are
used across multiple pages in the \`{your_app}/components/\` directory.

In this template, we have a sidebar component in \`{your_app}/components/sidebar.py\`.

### Adding State

As your app grows, we recommend using [substates](https://reflex.dev/docs/substates/overview/)
to organize your state.

You can either define substates in their own files, or if the state is
specific to a page, you can define it in the page file itself.
`}
</ReactMarkdown>
</RadixThemesBox>
</RadixThemesBox>
  <RadixThemesBox css={{"position": "fixed", "right": "1.5em", "top": "1.5em", "zIndex": "500"}}>
  <RadixThemesDropdownMenu.Root>
  <RadixThemesDropdownMenu.Trigger css={{"backgroundColor": "var(--accent-1)", "border": "1px solid var(--accent-12)", "borderRadius": "0.375rem"}}>
  <LucideMenuIcon css={{"color": "var(--accent-10)"}} size={36}>
  {`menu`}
</LucideMenuIcon>
</RadixThemesDropdownMenu.Trigger>
  <RadixThemesDropdownMenu.Content>
  <RadixThemesDropdownMenu.Item css={{"&:hover": {"color": "var(--accent-1)", "backgroundColor": "var(--accent-10)"}}}>
  <RadixThemesLink asChild={true} css={{"width": "100%", "color": "inherit"}}>
  <NextLink href={`/`} passHref={true}>
  {`Home`}
</NextLink>
</RadixThemesLink>
</RadixThemesDropdownMenu.Item>
  <RadixThemesDropdownMenu.Item css={{"&:hover": {"color": "var(--accent-1)", "backgroundColor": "var(--accent-10)"}}}>
  <RadixThemesLink asChild={true} css={{"width": "100%", "color": "inherit"}}>
  <NextLink href={`/dashboard`} passHref={true}>
  {`Dashboard`}
</NextLink>
</RadixThemesLink>
</RadixThemesDropdownMenu.Item>
  <RadixThemesDropdownMenu.Item css={{"&:hover": {"color": "var(--accent-1)", "backgroundColor": "var(--accent-10)"}}}>
  <RadixThemesLink asChild={true} css={{"width": "100%", "color": "inherit"}}>
  <NextLink href={`/settings`} passHref={true}>
  {`Settings`}
</NextLink>
</RadixThemesLink>
</RadixThemesDropdownMenu.Item>
  <RadixThemesDropdownMenu.Separator/>
  <RadixThemesDropdownMenu.Item css={{"&:hover": {"color": "var(--accent-1)", "backgroundColor": "var(--accent-10)"}}}>
  <RadixThemesLink asChild={true} css={{"width": "100%", "color": "inherit"}}>
  <NextLink href={`https://github.com/reflex-dev`} passHref={true}>
  {`About`}
</NextLink>
</RadixThemesLink>
</RadixThemesDropdownMenu.Item>
  <RadixThemesDropdownMenu.Item css={{"&:hover": {"color": "var(--accent-1)", "backgroundColor": "var(--accent-10)"}}}>
  <RadixThemesLink asChild={true} css={{"width": "100%", "color": "inherit"}}>
  <NextLink href={`mailto:founders@=reflex.dev`} passHref={true}>
  {`Contact`}
</NextLink>
</RadixThemesLink>
</RadixThemesDropdownMenu.Item>
</RadixThemesDropdownMenu.Content>
</RadixThemesDropdownMenu.Root>
</RadixThemesBox>
</RadixThemesFlex>
</RadixThemesTheme>
  )
}

export function Fragment_7a8c36e959b4ac274c12cd473cdf7412 () {
  const [ colorMode, toggleColorMode ] = useContext(ColorModeContext)


  return (
    <Fragment>
  {isTrue(((colorMode) === ("light"))) ? (
  <Fragment>
  <img css={{"height": "2em"}} src={`/reflex_black.svg`}/>
</Fragment>
) : (
  <Fragment>
  <img css={{"height": "2em"}} src={`/reflex_white.svg`}/>
</Fragment>
)}
</Fragment>
  )
}

        function ComponentMap_64a6a6d4846daf7f6e291d477ddb4d3f () {
            const [ colorMode, toggleColorMode ] = useContext(ColorModeContext)
            return (
                {"h1": ({node, children, ...props}) => <RadixThemesHeading as={`h1`} css={{"marginTop": "0.5em", "marginBottom": "0.5em"}} size={`6`} {...props}>   {children} </RadixThemesHeading>, "h2": ({node, children, ...props}) => <RadixThemesHeading as={`h2`} css={{"marginTop": "0.5em", "marginBottom": "0.5em"}} size={`5`} {...props}>   {children} </RadixThemesHeading>, "h3": ({node, children, ...props}) => <RadixThemesHeading as={`h3`} css={{"marginTop": "0.5em", "marginBottom": "0.5em"}} size={`4`} {...props}>   {children} </RadixThemesHeading>, "h4": ({node, children, ...props}) => <RadixThemesHeading as={`h4`} css={{"marginTop": "0.5em", "marginBottom": "0.5em"}} size={`3`} {...props}>   {children} </RadixThemesHeading>, "h5": ({node, children, ...props}) => <RadixThemesHeading as={`h5`} css={{"marginTop": "0.5em", "marginBottom": "0.5em"}} size={`2`} {...props}>   {children} </RadixThemesHeading>, "h6": ({node, children, ...props}) => <RadixThemesHeading as={`h6`} css={{"marginTop": "0.5em", "marginBottom": "0.5em"}} size={`1`} {...props}>   {children} </RadixThemesHeading>, "p": ({node, children, ...props}) => <RadixThemesText as={`p`} css={{"marginTop": "1em", "marginBottom": "1em"}} {...props}>   {children} </RadixThemesText>, "ul": ({node, children, ...props}) => <RadixThemesFlex css={{"listStylePosition": "outside", "marginTop": "1em", "marginBottom": "1em", "listStyleType": "disc"}} direction={`column`}>   {children} </RadixThemesFlex>, "ol": ({node, children, ...props}) => <RadixThemesFlex css={{"listStylePosition": "outside", "marginTop": "1em", "marginBottom": "1em", "listStyleType": "decimal"}} direction={`column`}>   {children} </RadixThemesFlex>, "li": ({node, children, ...props}) => <li css={{"marginTop": "0.5em", "marginBottom": "0.5em"}}>   {children} </li>, "a": ({node, children, ...props}) => <RadixThemesLink css={{"fontWeight": "bold", "color": "var(--accent-10)", "textDecoration": "underline", "textDecorationColor": "var(--accent-10)", "&:hover": {"color": "var(--accent-1)", "textDecoration": "underline", "textDecorationColor": "var(--accent-1)"}}} {...props}>   {children} </RadixThemesLink>, "code": ({node, inline, className, children, ...props}) => {     const match = (className || '').match(/language-(?<lang>.*)/);     const language = match ? match[1] : '';     if (language) {     (async () => {       try {         const module = await import(`react-syntax-highlighter/dist/cjs/languages/prism/${language}`);         SyntaxHighlighter.registerLanguage(language, module.default);       } catch (error) {         console.error(`Error importing language module for ${language}:`, error);       }     })();   }     return inline ? (         <RadixThemesCode css={{"color": "var(--accent-10)", "background": "var(--accent-1)"}} {...props}>   {children} </RadixThemesCode>     ) : (         <SyntaxHighlighter css={{"marginTop": "1em", "marginBottom": "1em"}} customStyle={{"marginTop": "1em", "marginBottom": "1em"}} language={language} style={isTrue(((colorMode) === ("light"))) ? oneLight : oneDark} children={children} {...props}/>     );       }, "codeblock": ({node, children, ...props}) => <SyntaxHighlighter css={{"marginTop": "1em", "marginBottom": "1em"}} customStyle={{"marginTop": "1em", "marginBottom": "1em"}} language={`python`} style={isTrue(((colorMode) === ("light"))) ? oneLight : oneDark} children={children} {...props}/>}
            )
        }
        

export function Link_be14b499d5139557daf41bf5bb5f5928 () {
  const state = useContext(StateContexts.state)


  return (
    <RadixThemesLink asChild={true} css={{"width": "100%"}}>
  <NextLink href={`/dashboard`} passHref={true}>
  <RadixThemesFlex align={`center`} css={{"background": isTrue((((state.router.page.path) === ("/dashboard")) || ((((state.router.page.path) === ("/")) && ("Dashboard")) === ("Home")))) ? `var(--accent-1)` : `transparent`, "color": isTrue((((state.router.page.path) === ("/dashboard")) || ((((state.router.page.path) === ("/")) && ("Dashboard")) === ("Home")))) ? `var(--accent-10)` : `var(--gray-11)`, "borderRadius": "0.375rem", "boxShadow": "0px 0px 0px 1px rgba(84, 82, 95, 0.14)", "width": "100%", "paddingInlineStart": "1em", "paddingInlineEnd": "1em"}} direction={`row`} gap={`2`}>
  <img css={{"height": "2.5em", "padding": "0.5em"}} src={`/github.svg`}/>
  <RadixThemesText as={`p`}>
  {`Dashboard`}
</RadixThemesText>
</RadixThemesFlex>
</NextLink>
</RadixThemesLink>
  )
}

export function Fragment_e9a05c105aa9215aeba52aeec8fe2e76 () {
  const state = useContext(StateContexts.state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  return (
    <Fragment>
  {isTrue(((!state.is_hydrated) || (connectErrors.length > 0))) ? (
  <Fragment>
  <LucideWifiOffIcon css={{"color": "crimson", "zIndex": 9999, "position": "fixed", "bottom": "30px", "right": "30px", "animation": `${pulse} 1s infinite`}} size={32}>
  {`wifi_off`}
</LucideWifiOffIcon>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  )
}

export function Link_b78b7a058624ab585625df054ae8da47 () {
  const state = useContext(StateContexts.state)


  return (
    <RadixThemesLink asChild={true} css={{"width": "100%"}}>
  <NextLink href={`/settings`} passHref={true}>
  <RadixThemesFlex align={`center`} css={{"background": isTrue((((state.router.page.path) === ("/settings")) || ((((state.router.page.path) === ("/")) && ("Settings")) === ("Home")))) ? `var(--accent-1)` : `transparent`, "color": isTrue((((state.router.page.path) === ("/settings")) || ((((state.router.page.path) === ("/")) && ("Settings")) === ("Home")))) ? `var(--accent-10)` : `var(--gray-11)`, "borderRadius": "0.375rem", "boxShadow": "0px 0px 0px 1px rgba(84, 82, 95, 0.14)", "width": "100%", "paddingInlineStart": "1em", "paddingInlineEnd": "1em"}} direction={`row`} gap={`2`}>
  <img css={{"height": "2.5em", "padding": "0.5em"}} src={`/github.svg`}/>
  <RadixThemesText as={`p`}>
  {`Settings`}
</RadixThemesText>
</RadixThemesFlex>
</NextLink>
</RadixThemesLink>
  )
}

export function Fragment_ac0b06893fc1b15016f3e0532508036d () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  return (
    <Fragment>
  {isTrue(connectErrors.length >= 2) ? (
  <Fragment>
  <RadixThemesDialog.Root css={{"zIndex": 9999}} open={connectErrors.length >= 2}>
  <RadixThemesDialog.Content>
  <RadixThemesDialog.Title>
  {`Connection Error`}
</RadixThemesDialog.Title>
  <RadixThemesText as={`p`}>
  {`Cannot connect to server: `}
  {(connectErrors.length > 0) ? connectErrors[connectErrors.length - 1].message : ''}
  {`. Check if server is reachable at `}
  {getBackendURL(env.EVENT).href}
</RadixThemesText>
</RadixThemesDialog.Content>
</RadixThemesDialog.Root>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  )
}

export function Link_97e05143123d6b32b753a76522f5f1bb () {
  const state = useContext(StateContexts.state)


  return (
    <RadixThemesLink asChild={true} css={{"width": "100%"}}>
  <NextLink href={`/`} passHref={true}>
  <RadixThemesFlex align={`center`} css={{"background": isTrue((((state.router.page.path) === ("/home")) || ((((state.router.page.path) === ("/")) && ("Home")) === ("Home")))) ? `var(--accent-1)` : `transparent`, "color": isTrue((((state.router.page.path) === ("/home")) || ((((state.router.page.path) === ("/")) && ("Home")) === ("Home")))) ? `var(--accent-10)` : `var(--gray-11)`, "borderRadius": "0.375rem", "boxShadow": "0px 0px 0px 1px rgba(84, 82, 95, 0.14)", "width": "100%", "paddingInlineStart": "1em", "paddingInlineEnd": "1em"}} direction={`row`} gap={`2`}>
  <img css={{"height": "2.5em", "padding": "0.5em"}} src={`/github.svg`}/>
  <RadixThemesText as={`p`}>
  {`Home`}
</RadixThemesText>
</RadixThemesFlex>
</NextLink>
</RadixThemesLink>
  )
}

export default function Component() {

  return (
    <Fragment>
  <Fragment>
  <div css={{"position": "fixed", "width": "100vw", "height": "0"}}>
  <Fragment_e9a05c105aa9215aeba52aeec8fe2e76/>
</div>
  <Fragment_ac0b06893fc1b15016f3e0532508036d/>
</Fragment>
  <Theme_5cc3f82cfbdabe86b13d8606a6df025d/>
  <NextHead>
  <title>
  {`Home`}
</title>
  <meta content={`A Reflex app.`} name={`description`}/>
  <meta content={`/github.svg`} property={`og:image`}/>
  <meta content={`width=device-width, shrink-to-fit=no, initial-scale=1`} name={`viewport`}/>
</NextHead>
</Fragment>
  )
}
