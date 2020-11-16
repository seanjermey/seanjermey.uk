import { EntityRepository, Repository } from 'typeorm';
import { ToolEntity } from './tool.entity';

@EntityRepository(ToolEntity)
export class ToolRepository extends Repository<ToolEntity> {}
