import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AssetEntity } from '../assets/asset.entity';

@Entity()
export class ServiceEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @ManyToOne((type) => AssetEntity, { eager: true })
  cover: AssetEntity;

  @Column()
  coverId: number;

  @Column()
  url: string;

  @Column()
  featured: boolean;
}
