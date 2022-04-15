import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  name: string;
  b1: string;
  b2: string;
  b3: string;

  @ApiProperty({
    type: String,
    required: false,
    default: 'user',
  })
  role: string;

  @ApiProperty({
    type: Number,
    required: false,
    minimum: 1,
    default: 1,
  })
  age: string;
}
