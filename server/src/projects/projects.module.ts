import { Module } from '@nestjs/common';
import { ProjectsController } from './projects.controller';
import { ProjectsService } from './projects.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectRepository } from './project.repository';
import { AssetsModule } from '../assets/assets.module';

@Module({
  imports: [AssetsModule, TypeOrmModule.forFeature([ProjectRepository])],
  controllers: [ProjectsController],
  providers: [ProjectsService],
  exports: [ProjectsService],
})
export class ProjectsModule {}
