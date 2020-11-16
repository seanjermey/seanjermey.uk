import { EntityRepository, Repository } from 'typeorm';
import { ServiceEntity } from './service.entity';

@EntityRepository(ServiceEntity)
export class ServiceRepository extends Repository<ServiceEntity> {}
