import express from 'express';

const router = express.Router();

// Ruta de ejemplo
router.get('/test', (req, res) => {
  res.json({ mensaje: 'La API está funcionando correctamente' });
});

export default router;