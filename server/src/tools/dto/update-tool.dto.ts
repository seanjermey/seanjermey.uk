import { IsNotEmpty, IsOptional } from 'class-validator';
import { UpdateAssetDto } from '../../assets/dto/update-asset.dto';

export class UpdateToolDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  url: string;

  @IsOptional()
  logo: UpdateAssetDto;

  @IsNotEmpty()
  featured: boolean;
}
