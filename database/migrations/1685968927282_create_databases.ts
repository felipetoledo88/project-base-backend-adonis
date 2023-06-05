import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  public async up() {
    this.db.rawQuery('CREATE DATABASE `db`;')
  }

  public async down() {
    this.db.rawQuery('DROP DATABASE IF EXISTS `db`;')
  }
}
