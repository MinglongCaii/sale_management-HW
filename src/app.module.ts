import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesModule } from './categories/categories.module';
import { TagsModule } from './tags/tags.module';
import { ProductsModule } from './products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [CategoriesModule, TagsModule, ProductsModule,
    TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: process.env.DATABASE_USER??'postgres',
    password: process.env.DATABASE_PASSWORD??'postgres',
    database: 'sales',
    autoLoadEntities: true,
    synchronize: true, // TEMPORARY: we replace this with migrations later
}),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
