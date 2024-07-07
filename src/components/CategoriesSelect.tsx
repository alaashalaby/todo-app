import { useAppSelector } from "../app/hooks";
interface Props {
  selectedCategoryName: string;
  handleCategoryChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}
const CategoriesSelect = ({
  selectedCategoryName,
  handleCategoryChange,
}: Props) => {
  const categories = useAppSelector(
    (state) => state.categoriesReducer.categories
  );

  return (
    <select
      value={selectedCategoryName}
      onChange={handleCategoryChange}
      className="border border-[#D72C63] outline-none rounded cursor-pointer p-2 text-[#0D0508]"
    >
      <option value="">By Category</option>
      {categories.map((category) => (
        <option key={category.id} value={category.name}>
          {category.name}
        </option>
      ))}
    </select>
  );
};

export default CategoriesSelect;
