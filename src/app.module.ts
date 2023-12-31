import { Module, NestModule } from '@nestjs/common';
import { CustomersModule } from './modules/customers.module';
import { ProductsModule } from './modules/products.module';
import { OrdersModule } from './modules/orders.module';
import { DatabaseModule } from './adapter/driven/infra/database/database.module';
import { ConfigModule } from '@nestjs/config';
import { CategoriesModule } from './modules/categories.module';
import { OrderItemsModule } from './modules/order-items.module';
import { PaymentsModule } from './modules/payments.module';

@Module({
  imports: [CustomersModule, CategoriesModule, ProductsModule, OrdersModule, DatabaseModule, PaymentsModule, ConfigModule.forRoot(), OrderItemsModule],
})
export class AppModule {}
