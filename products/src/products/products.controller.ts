import { Controller, Query, Param, Get } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Observable } from 'rxjs';
import { Product } from './product.entity';

@Controller('products')
export class ProductsFeedController {
  constructor(
    private readonly productService: ProductsService,
  ) {}
  @Get(':sku')
  findBySku(@Param('sku') skuCode: string): Observable<ProductFeeback[]> {
    return this.productService.findBySku(skuCode);
  }

  @Get()
  findByText(@Query('text')text: string): Observable<ProductFeeback[]> {
    if (text != null ) {
      return this.productService.findByText(text);
    } else {
      return this.productService.findAll();
    }
  }
}

