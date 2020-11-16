import { Injectable } from '@nestjs/common';
import { ProjectEntity } from './project.entity';
import { ProjectRepository } from './project.repository';
import { CreateProjectDto } from './dto/create-project.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateProjectDto } from './dto/update-project.dto';
import { AssetsService } from '../assets/assets.service';

@Injectable()
export class ProjectsService {
  /**
   *
   * @param projectRepository
   * @param assetsService
   */
  constructor(
    @InjectRepository(ProjectRepository)
    private projectRepository: ProjectRepository,
    private assetsService: AssetsService,
  ) {}

  /**
   *
   */
  async getProjects(): Promise<ProjectEntity[]> {
    return this.projectRepository.find({});
  }

  /**
   *
   * @param createProjectDto
   */
  async createProject(
    createProjectDto: CreateProjectDto,
  ): Promise<ProjectEntity> {
    const project = this.projectRepository.create({
      ...createProjectDto,
      cover: await this.assetsService.createAsset(createProjectDto.cover),
    });

    return this.projectRepository.save(project);
  }

  /**
   *
   * @param id
   */
  async getProjectById(id: number): Promise<ProjectEntity> {
    return this.projectRepository.findOne({ id });
  }

  /**
   *
   * @param id
   * @param updateProjectDto
   */
  async updateProjectById(id, updateProjectDto: UpdateProjectDto) {
    const project = await this.getProjectById(id);

    project.title = updateProjectDto.title;
    project.description = updateProjectDto.description;
    project.url = updateProjectDto.url;
    project.featured = updateProjectDto.featured;
    project.cover =
      updateProjectDto.cover.url !== project.cover.url
        ? await this.assetsService.createAsset(updateProjectDto.cover)
        : await this.assetsService.updateAsset(
            project.coverId,
            updateProjectDto.cover,
          );

    return await project.save();
  }

  /**
   *
   * @param id
   */
  async deleteProjectById(id: number): Promise<ProjectEntity> {
    const project = await this.getProjectById(id);

    return this.projectRepository.remove(project);
  }
}
