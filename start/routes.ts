/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
*/
import Route from '@ioc:Adonis/Core/Route'
import Database from '@ioc:Adonis/Lucid/Database'

//Autenticação
Route.group(() => {
  Route.post('login', 'AuthController.login')
  Route.post('logout', 'AuthController.logout')
}).prefix('api')

//Usuários
Route.group(() => {
  Route.get('users', async () => {
    return Database.from('users').select('*')
  })
})
.prefix('api')
.middleware('auth')