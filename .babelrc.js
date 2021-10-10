const IS_PROD = process.env.NODE_ENV === 'production'

module.exports = {
	presets: ['next/babel'],
	plugins: [
		[
			'styled-components',
			{
				ssr: true,
				fileName: IS_PROD,
				displayName: IS_PROD,
				minify: IS_PROD,
				pure: true
			}
		]
	]
};
