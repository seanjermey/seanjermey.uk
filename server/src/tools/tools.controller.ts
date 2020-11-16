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
import { ToolsService } from './tools.service';
import { ToolEntity } from './tool.entity';
import { CreateToolDto } from './dto/create-tool.dto';
import { UpdateToolDto } from './dto/update-tool.dto';

@Controller()
export class ToolsController {
  /**
   *
   * @param toolsService
   */
  constructor(private toolsService: ToolsService) {}

  /**
   *
   */
  @Get('/api/tools')
  getTools(): Promise<ToolEntity[]> {
    return this.toolsService.getTools();
  }

  /**
   *
   * @param createToolDto
   */
  @Post('/api/tool')
  createTool(@Body() createToolDto: CreateToolDto): Promise<ToolEntity> {
    return this.toolsService.createTool(createToolDto);
  }

  /**
   *
   * @param id
   * @param updateToolDto
   */
  @Put('/api/tool/:id')
  updateToolById(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateToolDto: UpdateToolDto,
  ): Promise<ToolEntity> {
    return this.toolsService.updateToolById(id, updateToolDto);
  }

  /**
   *
   * @param id
   */
  @Delete('/api/tool/:id')
  deleteToolById(@Param('id', ParseIntPipe) id: number): Promise<ToolEntity> {
    return this.toolsService.deleteToolById(id);
  }
}
