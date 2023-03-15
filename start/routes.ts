/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('hello', async () => {
  return { teste: 'hello-world' }
}).prefix('/api')
