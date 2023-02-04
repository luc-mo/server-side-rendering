import ReactDOMServer from 'react-dom/server'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'
import { App } from './App'

export const sheet = new ServerStyleSheet()

export const render = () => {
	return ReactDOMServer.renderToString(
		sheet.collectStyles(
			<StyleSheetManager sheet={sheet.instance}>
        <App />
			</StyleSheetManager>
		)
	)
}
