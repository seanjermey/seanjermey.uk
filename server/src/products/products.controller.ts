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
import { ProductEntity } from './product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductsService } from './products.service';

@Controller()
export class ProductsController {
  /**
   *
   * @param productsService
   */
  constructor(private productsService: ProductsService) {}

  /**
   *
   */
  @Get('/api/products')
  getProducts(): Promise<ProductEntity[]> {
    return this.productsService.getProducts();
  }

  /**
   *
   * @param createProductDto
   */
  @Post('/api/product')
  createProduct(
    @Body() createProductDto: CreateProductDto,
  ): Promise<ProductEntity> {
    return this.productsService.createProduct(createProductDto);
  }

  /**
   *
   * @param id
   * @param updateProductDto
   */
  @Put('/api/product/:id')
  updateProductById(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateProductDto: UpdateProductDto,
  ): Promise<ProductEntity> {
    return this.productsService.updateProductById(id, updateProductDto);
  }

  /**
   *
   * @param id
   */
  @Delete('/api/product/:id')
  deleteProductById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<ProductEntity> {
    return this.productsService.deleteProductById(id);
  }
}
