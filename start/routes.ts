/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
*/

import Route from '@ioc:Adonis/Core/Route'
import Database from '@ioc:Adonis/Lucid/Database'

Route.get('hello-world', async () => {
  return Database.from('users').select('*')
}).prefix('/api')
