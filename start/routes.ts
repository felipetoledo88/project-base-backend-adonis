/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
*/

import Route from '@ioc:Adonis/Core/Route'
import Database from '@ioc:Adonis/Lucid/Database'

Route.group(() => {
  Route.get('users', async () => {
    return Database.from('users').select('*')
  })
  Route.post('login', 'AuthController.login')
  Route.post('logout', 'AuthController.logout')
}).prefix('api')