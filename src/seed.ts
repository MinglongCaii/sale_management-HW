import dataSource from './data-source'; // can add fake data using @faker-js/faker
import { Category } from './categories/entities/category.entity';

async function seed() {
  await dataSource.initialize();

  const categoryRepo = dataSource.getRepository(Category);

  // categories
  for (const name of ['Electronic', 'Book', 'Clothing', 'Cutlery', 'Shoes']) {
    if (!(await categoryRepo.findOneBy({ name }))) {
      await categoryRepo.save(categoryRepo.create({ name }));
    }
  }

  await dataSource.destroy();
  console.log('Seed done');
}

seed();