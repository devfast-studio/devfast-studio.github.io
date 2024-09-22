import { defineConfig } from 'tinacms';

// Your hosting provider likely exposes this as an environment variable
const BRANCH = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || 'main';
const CLIENT_ID = String(process.env.TINA_PUBLIC_CLIENT_ID ?? '');
const TOKEN = String(process.env.TINA_TOKEN ?? '');

export default defineConfig({
  branch: BRANCH,
  clientId: CLIENT_ID, // Get this from tina.io
  token: TOKEN, // Get this from tina.io

  build: {
    outputFolder: 'admin',
    publicFolder: 'public'
  },
  media: {
    tina: {
      mediaRoot: '',
      publicFolder: 'public'
    }
  },
  schema: {
    collections: [
      {
        name: 'post',
        label: 'Posts',
        path: 'content/posts',
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Title',
            isTitle: true,
            required: true,
            namespace: ['post', 'title']
          },

          {
            type: 'datetime',
            name: 'date',
            label: 'Date',
            required: true,
            namespace: ['post', 'date']
          },
          {
            type: 'string',
            name: 'tags',
            label: 'Tags',
            list: true
          },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Body',
            isBody: true,
            namespace: ['post', 'body'],
            parser: { type: 'markdown' }
          }
        ],
        ui: {},
        namespace: ['post']
      }
    ]
  }
});
