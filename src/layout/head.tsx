import Script from 'next/script'

export default function Head() {
	return (
		<head>
			<meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' />
			<link rel='manifest' href='/manifest.json' />

			<link rel='icon' href='/favicon.png' />

			<link rel='preconnect' href='https://fonts.googleapis.cn' />
			<link rel='preconnect' href='https://fonts.gstatic.cn' crossOrigin='anonymous' />

			<link href='https://fonts.googleapis.cn/css2?family=Averia+Gruesa+Libre&display=swap' rel='stylesheet' />
			<link rel='stylesheet' href='https://chinese-fonts-cdn.deno.dev/packages/syst/dist/SourceHanSerifCN/result.css' />
			<link rel='stylesheet' href='https://chinese-fonts-cdn.deno.dev/packages/lxgwwenkaibright/dist/LXGWBright-Regular/result.css' />
			<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/firacode@6.2.0/distr/fira_code.css">
			<link rel='stylesheet' href='https://chinese-fonts-cdn.deno.dev/packages/sypxzs/dist/%E6%80%9D%E6%BA%90%E5%B1%8F%E6%98%BE%E8%87%BB%E5%AE%8B/result.css' />

			<Script src='https://www.googletagmanager.com/gtag/js?id=G-ZNSFR7C9PM' />
			<Script id='google-analytics'>
				{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-ZNSFR7C9PM');
        `}
			</Script>
		</head>
	)
}
