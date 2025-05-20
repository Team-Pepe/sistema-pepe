import express from 'express';
import prisma from '../lib/prisma.js';

const router = express.Router();

// Ruta de ejemplo
router.get('/test', (req, res) => {
  res.json({ mensaje: 'La API está funcionando correctamente' });
});

// Ejemplo de uso de Prisma (descomenta y adapta según tus modelos)
// router.get('/users', async (req, res) => {
//   try {
//     const users = await prisma.user.findMany();
//     res.json(users);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

export default router;