/// @ts-nocheck

const headers_html = { headers: { "Content-Type": "text/html" } }
const headers_js = { headers: { "Content-Type": "application/javascript" } }
const headers_css = { headers: { "Content-Type": "text/css" } }

Bun.serve({
  hostname: "localhost",
  port: 3000,
  static: {
    "/index.html": Response.redirect("/"),
    "/": new Response(await Bun.file("../frontend/index.html").bytes(), headers_html),
    "/res/index.js": new Response(await Bun.file("../frontend/index.js").bytes(), headers_js),
    "/res/styles.css": new Response(await Bun.file("../frontend/styles.css").bytes(), headers_css),
    "/res/prism.css": new Response(await Bun.file("../frontend/prism/prism.css").bytes(), headers_css),
    "/res/prism.js": new Response(await Bun.file("../frontend/prism/prism.js").bytes(), headers_js),
  },
  fetch(request: Request) {
    console.info(request.method, request.url, "not handled")
    return new Response("Not found", { status: 404 })
  }
})
