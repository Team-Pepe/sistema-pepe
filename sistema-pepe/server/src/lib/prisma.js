import { PrismaClient } from '@prisma/client'

const prismaDB1 = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL
    }
  }
})

const prismaDB2 = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL_DB2
    }
  }
})

export { prismaDB1, prismaDB2 }