import { Model } from 'sequelize';
import {
  AutoIncrement,
  Column,
  Default,
  NotNull,
  Table,
} from 'sequelize-typescript';

@Table
export class Note extends Model {
  @AutoIncrement
  @NotNull
  @Column
  id: number;

  @NotNull
  @Column
  name: string;

  @NotNull
  @Column
  category: string;

  @NotNull
  @Column
  content: string;

  @NotNull
  @Column
  created: Date;

  @NotNull
  @Default(false)
  @Column
  archived: boolean;

  @Column
  date: string;
}
