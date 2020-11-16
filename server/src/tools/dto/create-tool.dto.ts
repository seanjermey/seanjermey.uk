import { IsBoolean, IsNotEmpty, IsOptional } from 'class-validator';
import { CreateAssetDto } from '../../assets/dto/create-asset.dto';

export class CreateToolDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  url: string;

  @IsOptional()
  logo: CreateAssetDto;

  @IsBoolean()
  featured: boolean;
}
