export default defineEventHandler(async (event) => {
    // setResponseStatus(event, 204)
    setHeader(event, 'Content-Type', 'application/json')
    setHeader(event, 'Content-Length', JSON.stringify({ message: 'ok' }).length)

    return { message: 'ok' }
})
