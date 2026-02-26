// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mermaid from 'astro-mermaid';

// https://astro.build/config
export default defineConfig({
	site: 'https://khorneflakes-dev.github.io',
	base: '/iasa_documentation',
	trailingSlash: 'always',
	redirects: {
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
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
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
					label: 'Diagramas',
					collapsed: true,
					autogenerate: { directory: 'diagrama' },
				},
			],
		}),
		mermaid({
			theme: 'forest',
			autoTheme: true
		})
	],
});
