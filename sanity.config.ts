/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\app\studio\[[...index]]\page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {deskTool} from 'sanity/desk'
import { defineConfig } from 'sanity'
import StudioNavbar from './Components/studionavbar/studionavbar'
// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './sanity/env'
import {schema} from './sanity/schema'
import { myTheme } from './theme'
import Logo from './Components/logo/logo'

export default defineConfig({
  basePath: '/studio',
  name:"blog_news_studio",
  title:"Blog News",
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  studio: {
    components:{
      logo:Logo,
      navbar:StudioNavbar,
    }},

  plugins: [
    deskTool(),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({defaultApiVersion: apiVersion}),
  ],
 
  theme:myTheme,
})
