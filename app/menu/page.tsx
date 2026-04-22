import Image from "next/image";
import Link from "next/link";
import { getPrisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

type MenuMeal = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  calories: number;
  protein: number;
};

export default async function MenuPage({ searchParams }: { searchParams: { page?: string } }) {
  const prisma = getPrisma();
  const page = Number(searchParams.page) || 1;
  const pageSize = 4; // Meals per page

  const [meals, totalMeals] = await Promise.all([
    prisma.meal.findMany({
      skip: (page - 1) * pageSize,
      take: pageSize,
    }) as Promise<MenuMeal[]>,
    prisma.meal.count(),
  ]);

  const totalPages = Math.ceil(totalMeals / pageSize);

  return (
    <main className="container" style={{ padding: '2rem' }}>
      <h1>FitNoFat Menu</h1>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        {meals.map((meal: MenuMeal) => (
          <div key={meal.id} style={{ border: '1px solid #ddd', borderRadius: '8px', overflow: 'hidden' }}>
            <div style={{ position: 'relative', height: '200px' }}>
              <Image src={meal.image} alt={meal.name} fill style={{ objectFit: 'cover' }} unoptimized />
            </div>
            <div style={{ padding: '15px' }}>
              <h3>{meal.name}</h3>
              <p>{meal.price} USD</p>
              <Link href={`/menu/${meal.id}`} style={{ color: 'green', fontWeight: 'bold' }}>
                View Details →
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
        {page > 1 && <Link href={`/menu?page=${page - 1}`}>Previous</Link>}
        <span>Page {page} of {totalPages}</span>
        {page < totalPages && <Link href={`/menu?page=${page + 1}`}>Next</Link>}
      </div>
    </main>
  );
}