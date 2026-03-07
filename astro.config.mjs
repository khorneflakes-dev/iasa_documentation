// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import rehypeMermaid from 'rehype-mermaidjs';

// Detecta si estamos construyendo para Tauri (le pasaremos una variable manualmente)
const isDesktop = process.env.TAURI_BUILD === 'false';

// https://astro.build/config
export default defineConfig({
	site: 'https://khorneflakes-dev.github.io',
	// Si es escritorio, base es vacío. Si es producción web, es la ruta de GitHub.
	base: isDesktop ? '/' : '/iasa_documentation',

	// Solo aplica el redirect si NO es escritorio
	// trailingSlash: 'always',
	redirects: isDesktop ? {} : {
		'/': '/iasa_documentation/es',
	},
	build: {
		assets: 'assets',
		inlineStylesheets: 'always',
		format: 'directory',
	},
	integrations: [
		starlight({
			title: 'Documentación',
			// social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			components: {
				Head: './src/components/StarlightHead.astro',
				SocialIcons: './src/components/SocialIcons.astro',
			},
			logo: {
				src: './src/assets/logoiasa.svg',
				alt: 'Logo de IASA',
				replacesTitle: true
			},
			defaultLocale: 'es',
			locales: {
				es: {
					label: 'Español',
					lang: 'es'
				}
			},
			sidebar: [
				{
					label: 'Diccionario',
					collapsed: false,
					autogenerate: { directory: 'diccionario' },
				},
				{
					label: 'Procesos ETL',
					collapsed: true,
					autogenerate: { directory: 'etl' },
				},
				{
					label: 'Despliegue y Monitoreo',
					collapsed: true,
					autogenerate: { directory: 'despliegue' },
				},
				{
					label: 'Diagramas',
					collapsed: true,
					autogenerate: { directory: 'diagrama' },
				},
			],
		}),
	],
	markdown: {
		rehypePlugins: [
			[rehypeMermaid, { strategy: 'img-png' }]
		],
	},
});
