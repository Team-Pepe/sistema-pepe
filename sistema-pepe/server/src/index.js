import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { config } from 'dotenv';
import { db1, db2 } from './lib/prisma.js';
import authRoutes from './routes/auth.routes.js';
import usersRoutes from './routes/users.routes.js';
import passwordResetRoutes from './routes/passwordReset.routes.js';


config();

const app = express();

app.use(cors({
  origin: [
    process.env.CLIENT_URL || 'http://localhost:3000',
    // Agrega otros orígenes permitidos si es necesario
  ],
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());

// Verificación de conexión a base de datos
const testDatabaseConnection = async () => {
  try {
    // Test connections with simpler queries
    await db1.$queryRaw`SELECT NOW()`;
    await db2.$queryRaw`SELECT NOW()`;
    console.log('✅ Conexión exitosa a ambas bases de datos');
  } catch (error) {
    console.error('❌ Error conectando a las bases de datos:', error);
    console.error('DATABASE_URL:', process.env.DATABASE_URL);
    console.error('DATABASE_URL_DB2:', process.env.DATABASE_URL_DB2);
    process.exit(1);
  }
};

// Ruta de health check
app.get('/health', async (req, res) => {
  try {
    await db1.$executeRaw`SELECT 1`;
    await db2.$executeRaw`SELECT 1`;
    res.status(200).json({ status: 'healthy' });
  } catch (error) {
    console.error('Error en health check:', error);
    res.status(500).json({ status: 'unhealthy', error: error.message });
  }
});

app.use('/api/auth', authRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/auth', passwordResetRoutes); // Agregar esta línea

const PORT = process.env.PORT || 5000;

// Iniciar servidor solo si la conexión es exitosa
testDatabaseConnection().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
  });
});

export default app;