import { Injectable } from '@nestjs/common';
import { IPagination } from '../_utils/interfaces/request.interface';

@Injectable()
export class PaginationService {
  meta(allCount: number, data: IPagination) {
    return { meta: { currentPage: data.page, maxPage: Math.ceil(allCount / data.take), allCount, take: data.take } };
  }
}
