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
import { ServicesService } from './services.service';
import { ServiceEntity } from './service.entity';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';

@Controller()
export class ServicesController {
  /**
   *
   * @param servicesService
   */
  constructor(private servicesService: ServicesService) {}

  /**
   *
   */
  @Get('/api/services')
  getServices(): Promise<ServiceEntity[]> {
    return this.servicesService.getServices();
  }

  /**
   *
   * @param createServiceDto
   */
  @Post('/api/service')
  createService(
    @Body() createServiceDto: CreateServiceDto,
  ): Promise<ServiceEntity> {
    return this.servicesService.createService(createServiceDto);
  }

  /**
   *
   * @param id
   * @param updateServiceDto
   */
  @Put('/api/service/:id')
  updateServiceById(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateServiceDto: UpdateServiceDto,
  ): Promise<ServiceEntity> {
    return this.servicesService.updateServiceById(id, updateServiceDto);
  }

  /**
   *
   * @param id
   */
  @Delete('/api/service/:id')
  deleteServiceById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<ServiceEntity> {
    return this.servicesService.deleteServiceById(id);
  }
}
