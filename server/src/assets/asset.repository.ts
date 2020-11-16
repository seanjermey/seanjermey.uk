import { EntityRepository, Repository } from 'typeorm';
import { AssetEntity } from './asset.entity';

@EntityRepository(AssetEntity)
export class AssetRepository extends Repository<AssetEntity> {}
