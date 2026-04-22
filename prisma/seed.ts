// prisma/seed.ts
import { getPrisma } from "@/lib/prisma";

async function main() {
  const prisma = getPrisma();
  console.log('Start seeding...')

  const meals = [
    {
      name: 'Vibrant Avocado Bowl',
      description: 'A nutrient-dense blend of quinoa, fresh kale, sweet potatoes, and perfectly ripe avocado.',
      price: 14.50,
      image: '/images/hero-vibrant-bowl.jpg',
      calories: 450,
      protein: 12,
    },
    {
      name: 'Signature Protein Wrap',
      description: 'Grilled lean chicken breast with feta, spinach, and house-made hummus in a whole-wheat wrap.',
      price: 12.99,
      image: '/images/menu-protein-wrap.jpg',
      calories: 520,
      protein: 38,
    },
    {
      name: 'Zesty Citrus Salmon',
      description: 'Wild-caught salmon fillet with a lemon-herb glaze, served alongside steamed asparagus.',
      price: 18.00,
      image: '/images/about-fresh-ingredients.jpg', // Reusing high-quality asset
      calories: 380,
      protein: 32,
    },
    {
      name: 'Berry Power Smoothie',
      description: 'Mixed berries, vegan protein powder, flax seeds, and unsweetened almond milk.',
      price: 8.50,
      image: '/images/hero-vibrant-bowl.jpg', // Placeholder for now
      calories: 210,
      protein: 20,
    }
  ]

  for (const m of meals) {
    const meal = await prisma.meal.create({
      data: m,
    })
    console.log(`Created meal with id: ${meal.id}`)
  }
  console.log('Seeding finished.')
}

main()
  .then(async () => {
    await getPrisma().$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await getPrisma().$disconnect();
    process.exit(1);
  });