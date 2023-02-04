import { createServer as createViteServer } from 'vite'
import { fileURLToPath } from 'url'
import express from 'express'
import fs from 'fs'
import path from 'path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const createServer = async() => {
  const app = express()
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom'
  })

  app.use(vite.middlewares)
  
  app.use('*', async (req, res, next) => {
    const url = req.originalUrl
    try {
      const { sheet, render } = (await import('./entry-server.js'))
      const template = fs.readFileSync(path.resolve(__dirname, 'index.html'),'utf-8')

      const appHtml = render({ path: url })
      const styled = sheet.getStyleTags()

      const styledHtml = template.replace('<!--ssr-styled-->', styled)
      const html = styledHtml.replace(`<!--ssr-outlet-->`, appHtml)
      res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
    } catch (error) {
      vite.ssrFixStacktrace(error)
      next(error)
    }
  })

  app.listen(3000, () => {
    console.log('Server running at http://localhost:3000')
  })
}

createServer().catch((error) => {
  console.error(error)
  process.exit(1)
})