import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeVintage from 'starlight-theme-vintage';
import Icons from 'unplugin-icons/vite';

export default defineConfig({
  site: 'https://jajera.github.io',
  base: '/s3-vectors-rag-workload',
  vite: {
    plugins: [Icons({ compiler: 'astro' })],
  },
  integrations: [
    starlight({
      title: 'Amazon S3 Vectors RAG',
      favicon: '/favicon.svg',
      description:
        'Learn Amazon S3 Vectors by example — a cloud-native RAG briefing app with Terraform, Lambda, and Bedrock.',
      plugins: [starlightThemeVintage()],
      customCss: ['./src/styles/splash-overrides.css'],
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/jajera/s3-vectors-rag-workload',
        },
      ],
      editLink: {
        baseUrl: 'https://github.com/jajera/s3-vectors-rag-workload/edit/main/',
      },
      lastUpdated: true,
      pagination: true,
      head: [
        {
          tag: 'meta',
          attrs: {
            property: 'og:image',
            content: 'https://jajera.github.io/s3-vectors-rag-workload/og-image.png',
          },
        },
        {
          tag: 'meta',
          attrs: {
            property: 'og:image:alt',
            content:
              'Amazon S3 Vectors RAG demo — vector search, Bedrock embeddings, and serverless architecture',
          },
        },
      ],
      sidebar: [
        { label: 'Introduction', link: '/' },
        { slug: 'overview' },
        {
          label: 'Prerequisites',
          collapsed: false,
          items: [{ slug: 'prerequisites' }, { slug: 'prerequisites/bedrock-access' }],
        },
        {
          label: 'S3 Vectors',
          collapsed: false,
          items: [
            { slug: 's3-vectors' },
            { slug: 's3-vectors/terraform-resources' },
            { slug: 's3-vectors/vector-operations' },
            { slug: 's3-vectors/iam-permissions' },
          ],
        },
        {
          label: 'RAG Pipeline',
          collapsed: false,
          items: [
            { slug: 'rag-pipeline' },
            { slug: 'rag-pipeline/ingest' },
            { slug: 'rag-pipeline/query' },
            { slug: 'rag-pipeline/embeddings' },
            { slug: 'rag-pipeline/scoring' },
          ],
        },
        {
          label: 'Deployment',
          collapsed: false,
          items: [
            { slug: 'deployment' },
            { slug: 'deployment/terraform-apply' },
            { slug: 'deployment/cognito-users' },
            { slug: 'deployment/web-ui' },
          ],
        },
        { slug: 'teardown' },
        {
          label: 'Troubleshooting',
          collapsed: true,
          items: [
            { slug: 'troubleshooting' },
            { slug: 'troubleshooting/bedrock-errors' },
            { slug: 'troubleshooting/common-issues' },
          ],
        },
        { slug: 'reference' },
      ],
    }),
  ],
});
