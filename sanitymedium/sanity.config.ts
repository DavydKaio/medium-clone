import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'sanitymedium',

  projectId: process.env.NEXT_PUBLIC_SANITY_STUDIO_API_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_STUDIO_API_DATASET || '',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
