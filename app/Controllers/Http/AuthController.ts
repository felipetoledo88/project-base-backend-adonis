import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class AuthController {

    public async login({ auth, request, response }: HttpContextContract) {
        const email = request.input('email')
        const password = request.input('password')

        const user = await User.findBy('email', email)
        try {
            const token = await auth.use('api').attempt(email, password, {
                expiresIn: '120mins',
                name: user?.email,
            })
            return { token, user: {id: user?.id, email: user?.email }}
        } catch {
            return response.unauthorized('Invalid credentials')
        }
    }

    public async logout({ auth, response }: HttpContextContract) {
        try {
            await auth.use('api').revoke()
            return {
                revoked: true
            }
        } catch {
            return response.badRequest('Erro logout')
        }
    }
}
