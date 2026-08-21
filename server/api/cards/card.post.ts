export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    const data = await prisma.card.create({
        data: body
    })
    return {
        data,
        message: 'success'
    }
})
