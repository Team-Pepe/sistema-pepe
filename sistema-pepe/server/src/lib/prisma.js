import { PrismaClient } from '@prisma/client'

export const prismaDB1 = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL
    }
  }
})

export const prismaDB2 = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL_DB2
    }
  }
})