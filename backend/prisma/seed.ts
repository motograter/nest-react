import { PrismaClient } from '@prisma/client'
// import { users } from './MOCK_DATA'
import { posts } from './MOCK_DATA_POSTS'

const prisma = new PrismaClient()

async function main() {
 for (const post of posts) {
    // await prisma.post.create({
    //     data: post
    // })
 }
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
