/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
*/

import Route from '@ioc:Adonis/Core/Route'
import Database from '@ioc:Adonis/Lucid/Database'

Route.get('hello', async () => {
  return Database.from('users').select('*')
}).prefix('api')

Route.post('login', 'AuthController.login')
Route.post('logout', 'AuthController.logout')