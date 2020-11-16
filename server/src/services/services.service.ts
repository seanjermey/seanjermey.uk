import { Injectable } from '@nestjs/common';
import { ServiceEntity } from './service.entity';
import { ServiceRepository } from './service.repository';
import { CreateServiceDto } from './dto/create-service.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateServiceDto } from './dto/update-service.dto';
import { AssetsService } from '../assets/assets.service';

@Injectable()
export class ServicesService {
  /**
   *
   * @param serviceRepository
   * @param assetsService
   */
  constructor(
    @InjectRepository(ServiceRepository)
    private serviceRepository: ServiceRepository,
    private assetsService: AssetsService,
  ) {}

  /**
   *
   */
  async getServices(): Promise<ServiceEntity[]> {
    return this.serviceRepository.find({});
  }

  /**
   *
   * @param createServiceDto
   */
  async createService(
    createServiceDto: CreateServiceDto,
  ): Promise<ServiceEntity> {
    const service = this.serviceRepository.create({
      ...createServiceDto,
      cover: await this.assetsService.createAsset(createServiceDto.cover),
    });

    return this.serviceRepository.save(service);
  }

  /**
   *
   * @param id
   */
  async getServiceById(id: number): Promise<ServiceEntity> {
    return this.serviceRepository.findOne({ id });
  }

  /**
   *
   * @param id
   * @param updateServiceDto
   */
  async updateServiceById(id, updateServiceDto: UpdateServiceDto) {
    const service = await this.getServiceById(id);

    service.title = updateServiceDto.title;
    service.description = updateServiceDto.description;
    service.url = updateServiceDto.url;
    service.featured = updateServiceDto.featured;
    service.cover =
      updateServiceDto.cover.url !== service.cover.url
        ? await this.assetsService.createAsset(updateServiceDto.cover)
        : await this.assetsService.updateAsset(
            service.coverId,
            updateServiceDto.cover,
          );

    return await service.save();
  }

  /**
   *
   * @param id
   */
  async deleteServiceById(id: number): Promise<ServiceEntity> {
    const service = await this.getServiceById(id);

    return this.serviceRepository.remove(service);
  }
}
