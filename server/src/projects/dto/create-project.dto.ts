import { IsBoolean, IsNotEmpty, IsOptional } from 'class-validator';
import { CreateAssetDto } from '../../assets/dto/create-asset.dto';

export class CreateProjectDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;

  @IsOptional()
  cover: CreateAssetDto;

  @IsNotEmpty()
  url: string;

  @IsBoolean()
  featured: boolean;
}
