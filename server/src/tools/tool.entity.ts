import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AssetEntity } from '../assets/asset.entity';

@Entity()
export class ToolEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  url: string;

  @ManyToOne((type) => AssetEntity, { eager: true })
  logo: AssetEntity;

  @Column()
  logoId: number;

  @Column()
  featured: boolean;
}
