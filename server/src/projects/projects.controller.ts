import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { ProjectEntity } from './project.entity';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { ProjectsService } from './projects.service';

@Controller()
export class ProjectsController {
  /**
   *
   * @param projectsService
   */
  constructor(private projectsService: ProjectsService) {}

  /**
   *
   */
  @Get('/api/projects')
  getProjects(): Promise<ProjectEntity[]> {
    return this.projectsService.getProjects();
  }

  /**
   *
   * @param createProjectDto
   */
  @Post('/api/project')
  createProject(
    @Body() createProjectDto: CreateProjectDto,
  ): Promise<ProjectEntity> {
    return this.projectsService.createProject(createProjectDto);
  }

  /**
   *
   * @param id
   * @param updateProjectDto
   */
  @Put('/api/project/:id')
  updateProjectById(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateProjectDto: UpdateProjectDto,
  ): Promise<ProjectEntity> {
    return this.projectsService.updateProjectById(id, updateProjectDto);
  }

  /**
   *
   * @param id
   */
  @Delete('/api/project/:id')
  deleteProjectById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<ProjectEntity> {
    return this.projectsService.deleteProjectById(id);
  }
}
