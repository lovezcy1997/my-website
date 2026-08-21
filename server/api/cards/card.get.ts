import prisma from '#server/utils/prisma'

export default defineEventHandler(async (event) => {
    const data = await prisma.card.findMany()
    console.log('data', data)
    return {
        data,
        message: 'success'
    }
})
