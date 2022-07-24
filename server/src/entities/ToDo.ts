import {Entity, Property} from '@mikro-orm/core';
import {Base} from './Base';

@Entity()
export class ToDo extends Base {
  @Property()
  name!: string;
}
