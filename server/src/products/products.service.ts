import { Injectable } from '@nestjs/common';
import { ProductEntity } from './product.entity';
import { ProductRepository } from './product.repository';
import { CreateProductDto } from './dto/create-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateProductDto } from './dto/update-product.dto';
import { AssetsService } from '../assets/assets.service';

@Injectable()
export class ProductsService {
  /**
   *
   * @param productRepository
   * @param assetsService
   */
  constructor(
    @InjectRepository(ProductRepository)
    private productRepository: ProductRepository,
    private assetsService: AssetsService,
  ) {}

  /**
   *
   */
  async getProducts(): Promise<ProductEntity[]> {
    return this.productRepository.find({});
  }

  /**
   *
   * @param createProductDto
   */
  async createProduct(
    createProductDto: CreateProductDto,
  ): Promise<ProductEntity> {
    const product = this.productRepository.create({
      ...createProductDto,
      cover: await this.assetsService.createAsset(createProductDto.cover),
    });

    return this.productRepository.save(product);
  }

  /**
   *
   * @param id
   */
  async getProductById(id: number): Promise<ProductEntity> {
    return this.productRepository.findOne({ id });
  }

  /**
   *
   * @param id
   * @param updateProductDto
   */
  async updateProductById(id, updateProductDto: UpdateProductDto) {
    const product = await this.getProductById(id);

    product.title = updateProductDto.title;
    product.description = updateProductDto.description;
    product.url = updateProductDto.url;
    product.featured = updateProductDto.featured;
    product.cover =
      updateProductDto.cover.url !== product.cover.url
        ? await this.assetsService.createAsset(updateProductDto.cover)
        : await this.assetsService.updateAsset(
            product.coverId,
            updateProductDto.cover,
          );

    return await product.save();
  }

  /**
   *
   * @param id
   */
  async deleteProductById(id: number): Promise<ProductEntity> {
    const product = await this.getProductById(id);

    return this.productRepository.remove(product);
  }
}
