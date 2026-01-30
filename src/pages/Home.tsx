import useFetch from '../hooks/useFetch';

// Note to self: This is the endpoint for all categories
const CATEGORIES_URL = 'https://www.themealdb.com/api/json/v1/1/categories.php';

export default function Home() {
  const { data, loading, error } = useFetch<{ categories: any[] }>(CATEGORIES_URL);

  if (loading) return <div>Loading categories...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Recipe Categories</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
        {data?.categories.map((cat) => (
          <div key={cat.idCategory} style={{ border: '1px solid #ccc', padding: 16, width: 200 }}>
            <img src={cat.strCategoryThumb} alt={cat.strCategory} style={{ width: '100%' }} />
            <h3>{cat.strCategory}</h3>
            <p>{cat.strCategoryDescription.slice(0, 60)}...</p>
          </div>
        ))}
      </div>
    </div>
  );
}
