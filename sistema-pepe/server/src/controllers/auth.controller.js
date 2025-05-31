import { AuthService } from '../services/auth.service.js';

const authService = new AuthService();

export class AuthController {
  async register(req, res) {
    try {
      const result = await authService.register(req.body);
      res.status(201).json({
        success: true,
        data: {
          user: result.user,
          token: result.token
        }
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message
      });
    }
  }
}