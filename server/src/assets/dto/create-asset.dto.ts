import { IsNotEmpty } from 'class-validator';

export class CreateAssetDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  url: string;
}
