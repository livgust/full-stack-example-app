import {Migration} from '@mikro-orm/migrations';

export class Migration20220723174745 extends Migration {
  async up(): Promise<void> {
    this.addSql(
      `create table "to_do" ("id" serial primary key, "created_at" timestamptz(0) not null,
      "created_by" varchar(255) not null, "updated_at" timestamptz(0) not null, "updated_by"
      varchar(255) null, "name" varchar(255) not null);`
    );
  }
}
