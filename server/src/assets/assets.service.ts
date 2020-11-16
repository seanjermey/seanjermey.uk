import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AssetRepository } from './asset.repository';
import { AssetEntity } from './asset.entity';
import { CreateAssetDto } from './dto/create-asset.dto';
import { UpdateAssetDto } from './dto/update-asset.dto';

@Injectable()
export class AssetsService {
  /**
   *
   * @param assetRepository
   */
  constructor(
    @InjectRepository(AssetRepository) private assetRepository: AssetRepository,
  ) {}

  /**
   *
   * @param createAssetDto
   */
  async createAsset(createAssetDto: CreateAssetDto): Promise<AssetEntity> {
    return this.assetRepository.save(createAssetDto);
  }

  /**
   *
   * @param id
   * @param updateAssetDto
   */
  async updateAsset(
    id: number,
    updateAssetDto: UpdateAssetDto,
  ): Promise<AssetEntity> {
    const asset = await this.assetRepository.findOne({ id });

    asset.url = updateAssetDto.url;
    asset.title = updateAssetDto.title;

    return asset.save();
  }
}
