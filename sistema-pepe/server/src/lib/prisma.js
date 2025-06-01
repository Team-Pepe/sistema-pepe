import { PrismaClient as PrismaClient1 } from '../../prisma/generated/client1/index.js'
import { PrismaClient as PrismaClient2 } from '../../prisma/generated/client2/index.js'

const createPrismaClient = (clientName, ClientClass) => {
  try {
    return new ClientClass({
      log: ['query', 'error', 'warn'],
      errorFormat: 'pretty',
    })
  } catch (error) {
    console.error(`Error creando cliente Prisma ${clientName}:`, error)
    process.exit(1)
  }
}

export const db1 = createPrismaClient('db1', PrismaClient1)
export const db2 = createPrismaClient('db2', PrismaClient2)