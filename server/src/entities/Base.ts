import {PrimaryKey, Property} from '@mikro-orm/core';

export class Base {
  @PrimaryKey()
  id!: number;

  @Property()
  createdAt: Date = new Date();

  @Property()
  createdBy!: string;

  @Property({onUpdate: () => new Date()})
  updatedAt: Date = new Date();

  @Property({nullable: true})
  updatedBy?: string;
}
