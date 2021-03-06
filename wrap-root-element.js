import React from "react"
import { MDXProvider } from "@mdx-js/react"
import GuideList from "./src/components/guide-list.js"
//import HubspotForm from "./src/components/hubspot-form"
//import Pullquote from "./src/components/shared/pullquote"
//import EggheadEmbed from "./src/components/shared/egghead-embed"
//import DateChart from "./src/components/chart"
//import CodeBlock from "./src/components/code-block"

const components = {
  GuideList,
  //HubspotForm,
  //DateChart,
  //Pullquote,
  //EggheadEmbed,
  //pre: CodeBlock,
}

export default ({ element }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
)
