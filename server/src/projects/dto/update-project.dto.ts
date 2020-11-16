import { IsBoolean, IsNotEmpty, IsOptional } from 'class-validator';
import { UpdateAssetDto } from '../../assets/dto/update-asset.dto';

export class UpdateProjectDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;

  @IsOptional()
  cover: UpdateAssetDto;

  @IsNotEmpty()
  url: string;

  @IsBoolean()
  featured: boolean;
}
