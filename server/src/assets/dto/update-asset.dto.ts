import { IsNotEmpty } from 'class-validator';

export class UpdateAssetDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  url: string;
}
