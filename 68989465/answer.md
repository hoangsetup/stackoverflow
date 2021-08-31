Nest fw uses `class-transformer` to convert a json to a class object. You have to set the correct type for the sub-attribute if it is not a primitive value. And your attribute is an array, you have to config to tell `class-validator` that it is an array, and validate on each item.

Let's update `CreateUserDto` 

```ts
import { Type } from 'class-transformer';
import { ..., ValidateNested } from 'class-validator';

export class CreateUserAddressDto {
  ...

  @ValidateNested({ each: true })
  @Type(() => CreateUserAddressDto)
  addresses?: CreateUserAddressDto[];

  ...
}
```

