import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

// Note to self: Get the category name from the URL
export default function Category() {
  const { categoryName } = useParams<{ categoryName: string }>();
  // Note to self: Fetch recipes for this category
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`;
  const { data, loading, error } = useFetch<{ meals: any[] }>(url);

  if (loading) return <div>Loading recipes...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!data?.meals) return <div>No recipes found.</div>;

  return (
    <div>
      <h1>Recipes in {categoryName}</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
        {data.meals.map((meal) => (
          <div key={meal.idMeal} style={{ border: '1px solid #ccc', padding: 16, width: 200 }}>
            <img src={meal.strMealThumb} alt={meal.strMeal} style={{ width: '100%' }} />
            <h3>{meal.strMeal}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
