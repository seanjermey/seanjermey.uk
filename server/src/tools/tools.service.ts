import { Injectable } from '@nestjs/common';
import { ToolEntity } from './tool.entity';
import { ToolRepository } from './tool.repository';
import { CreateToolDto } from './dto/create-tool.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateToolDto } from './dto/update-tool.dto';
import { AssetsService } from '../assets/assets.service';

@Injectable()
export class ToolsService {
  /**
   *
   * @param toolRepository
   * @param assetsService
   */
  constructor(
    @InjectRepository(ToolRepository) private toolRepository: ToolRepository,
    private assetsService: AssetsService,
  ) {}

  /**
   *
   */
  async getTools(): Promise<ToolEntity[]> {
    return this.toolRepository.find({});
  }

  /**
   *
   * @param createToolDto
   */
  async createTool(createToolDto: CreateToolDto): Promise<ToolEntity> {
    const tool = this.toolRepository.create({
      ...createToolDto,
      logo: await this.assetsService.createAsset(createToolDto.logo),
    });

    return this.toolRepository.save(tool);
  }

  /**
   *
   * @param id
   */
  async getToolById(id: number): Promise<ToolEntity> {
    return this.toolRepository.findOne({ id });
  }

  /**
   *
   * @param id
   * @param updateToolDto
   */
  async updateToolById(id, updateToolDto: UpdateToolDto) {
    const tool = await this.getToolById(id);

    tool.title = updateToolDto.title;
    tool.description = updateToolDto.description;
    tool.url = updateToolDto.url;
    tool.featured = updateToolDto.featured;
    tool.logo =
      updateToolDto.logo.url !== tool.logo.url
        ? await this.assetsService.createAsset(updateToolDto.logo)
        : await this.assetsService.updateAsset(tool.logoId, updateToolDto.logo);

    return await tool.save();
  }

  /**
   *
   * @param id
   */
  async deleteToolById(id: number): Promise<ToolEntity> {
    const tool = await this.getToolById(id);

    return this.toolRepository.remove(tool);
  }
}
