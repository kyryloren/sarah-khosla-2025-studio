import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import type {DefaultDocumentNodeResolver, StructureBuilder} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {presentationTool} from 'sanity/presentation'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Sarah Khosla',

  projectId: '5z2ohzza',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S: StructureBuilder) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('About')
              .child(S.editor().id('about').schemaType('about').documentId('about').title('About')),
            S.listItem()
              .title('Global')
              .child(
                S.editor()
                  .id('globalSettings')
                  .schemaType('globalSettings')
                  .documentId('globalSettings'),
              ),
            S.divider(),
            ...S.documentTypeListItems().filter(
              (li) => !['about', 'globalSettings'].includes(String(li.getId())),
            ),
          ]),
    }),
    visionTool(),
    presentationTool({
      previewUrl: {
        initial: 'https://sarah-khosla-2025.vercel.app',
        preview: "/",
        draftMode: {
          enable: '/api/draft-mode/enable',
        },
      },
    }),
  ],

  schema: {
    types: schemaTypes,
    templates: (prev) =>
      prev.filter(({schemaType}) => !['about', 'globalSettings'].includes(schemaType)),
  },
})
