import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { IRequest } from '../interfaces/request.interface';

export const AccessToken = createParamDecorator((data: unknown, ctx: ExecutionContext) => {
  const request: IRequest = ctx.switchToHttp().getRequest();
  return request.headers.authorization;
});
