import { Injectable } from '@nestjs/common';
import { IOrderItemsRepository } from '../../../../@core/ports/iorder-items.repository';
import { PrismaService } from '../database/prisma.service';
import { CreateOrderItemDto } from '../../../../@core/domain/dto/create-order-item.dto';
import { UpdateOrderItemDto } from '../../../../@core/domain/dto/update-order-item.dto';
import { OrderItemEntity } from '../../../../@core/domain/entities/order-item';

@Injectable()
export class PrismaOrderItemsRepository implements IOrderItemsRepository {
    constructor(private prisma: PrismaService) {}

    async insert(order: CreateOrderItemDto[]): Promise<void>{
        await this.prisma.orderItems.createMany({
            data: order
        })
    }

    async update(id: string, order: UpdateOrderItemDto): Promise<void>{
        await this.prisma.orderItems.update({
            data: order,
            where: {
                id: id
            }
        })
    }

    async findByOrderId(id: string): Promise<OrderItemEntity>{
        const result = await this.prisma.orderItems.findMany({
            where: {
                orderId: id
            }
        })
        return result as unknown as OrderItemEntity;
    }

    async findAll(): Promise<OrderItemEntity[]>{
        const result = await this.prisma.orderItems.findMany()
        return result as unknown as OrderItemEntity[];
    }

    async delete(id: string): Promise<void>{
        await this.prisma.orderItems.delete({
            where: {
                id: id
            }
        })

    }
}
