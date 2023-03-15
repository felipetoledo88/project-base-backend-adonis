/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('hello', async () => {
  return { teste123: 'hello-world' }
}).prefix('/api')
