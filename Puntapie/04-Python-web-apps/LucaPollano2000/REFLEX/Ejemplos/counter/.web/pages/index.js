/** @jsxImportSource @emotion/react */


import { Fragment, useCallback, useContext } from "react"
import { EventLoopContext, StateContexts } from "/utils/context"
import { Event, getBackendURL, isTrue } from "/utils/state"
import { WifiOffIcon as LucideWifiOffIcon } from "lucide-react"
import { keyframes } from "@emotion/react"
import { Dialog as RadixThemesDialog, Text as RadixThemesText } from "@radix-ui/themes"
import env from "/env.json"
import { Button, Center, Heading, HStack, VStack } from "@chakra-ui/react"
import NextHead from "next/head"



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

const pulse = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`


export function Button_40408411f03ad7a04e5bcba0170bf49f () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_7a4e8882198dad3c2b9a65dd4efed0c6 = useCallback((_e) => addEvents([Event("state.state.decrement", {})], (_e), {}), [addEvents, Event])


  return (
    <Button colorScheme={`red`} onClick={on_click_7a4e8882198dad3c2b9a65dd4efed0c6}>
  {`Decrement`}
</Button>
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

export function Heading_6a61abd5ea7da8f406fd8c6e10edf828 () {
  const state__state = useContext(StateContexts.state__state)



  return (
    <Heading>
  {state__state.count}
</Heading>
  )
}

export function Button_1f6a239c957d2de3c463f84b69277c45 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_56e6ee2029bfb75d51cd45a2be8eb839 = useCallback((_e) => addEvents([Event("state.state.random", {})], (_e), {}), [addEvents, Event])


  return (
    <Button onClick={on_click_56e6ee2029bfb75d51cd45a2be8eb839} sx={{"backgroundImage": "linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(0,176,34,1) 100%)", "color": "white"}}>
  {`Randomize`}
</Button>
  )
}

export function Button_26c511b04a5ef1934f0dc2a3dfe118c9 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_051be862d05745b9ead98f43abae2bac = useCallback((_e) => addEvents([Event("state.state.increment", {})], (_e), {}), [addEvents, Event])


  return (
    <Button colorScheme={`green`} onClick={on_click_051be862d05745b9ead98f43abae2bac}>
  {`Increment`}
</Button>
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
  <Center sx={{"paddingTop": "5em", "paddingBottom": "5em", "fontSize": "2em", "textAlign": "center"}}>
  <VStack sx={{"padding": "1em", "background": "#ededed", "borderRadius": "1em"}}>
  <Heading_6a61abd5ea7da8f406fd8c6e10edf828/>
  <HStack>
  <Button_40408411f03ad7a04e5bcba0170bf49f/>
  <Button_1f6a239c957d2de3c463f84b69277c45/>
  <Button_26c511b04a5ef1934f0dc2a3dfe118c9/>
</HStack>
</VStack>
</Center>
  <NextHead>
  <title>
  {`Counter`}
</title>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
