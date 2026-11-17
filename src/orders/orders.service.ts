import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { Repository } from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { Product } from 'src/products/entities/product.entity';
import { OrderItem } from './entities/orderItem.entity';
import { addOrderItemDto } from './dto/addOrderItem.dto';

@Injectable()
export class OrdersService {
  constructor(@InjectRepository(Order) private readonly orderRepo: Repository<Order>,
              @InjectRepository(User) private readonly userRepo: Repository<User>,
              @InjectRepository(Product) private readonly productRepo: Repository<Product>,
              @InjectRepository(OrderItem) private readonly orderItemRepo: Repository<OrderItem>,
              )
  {}
  async createOrder(createOrderDto: CreateOrderDto) {
    const user = await this.userRepo.findOne({where: { id: createOrderDto.userId}});
    if (!user) throw new NotFoundException('user not found');
    const order = await this.orderRepo.findOne({where: { name: createOrderDto.name}});
    if (order) throw new ConflictException('order already exist');
    return this.orderRepo.save(this.orderRepo.create(createOrderDto));
  }

  async addItemOrder(addDto: addOrderItemDto) {
    const order = await this.orderRepo.findOne({where: { id: addDto.orderId}});
    const product = await this.productRepo.findOne({where: { id: addDto.productId}})
    if (!order || !product) throw new NotFoundException('order/product not found');
    
    const totalCost = product.price * addDto.quantity
    const orderItem = this.orderItemRepo.create({
      orderId: order.id,
      productId: product.id,
      quantity: addDto.quantity,
      price: totalCost,
    })
    return this.orderItemRepo.save(orderItem);
  }

  findAll() {
    return `This action returns all orders`;
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
