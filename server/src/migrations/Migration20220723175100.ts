import {Migration} from '@mikro-orm/migrations';

export class Migration20220723174745 extends Migration {
  async up(): Promise<void> {
    this.addSql(
      `insert into to_do (created_at, created_by, updated_at, name) values
      (current_timestamp, 'oadams', current_timestamp, 'Test Todo Item')`
    );
  }
}
