import { useTranslation } from "react-i18next";
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
  const {t} = useTranslation();
  return (
    <select
      value={selectedCategoryName}
      onChange={handleCategoryChange}
      className="border border-[#D72C63] outline-none rounded cursor-pointer p-2 text-[#0D0508]"
    >
      <option value="" disabled>
        {t("categoryTitle")}
      </option>
      {categories.map((category) => (
        <option key={category.id} value={category.name}>
          {t(`categories.${category.name}`)}
        </option>
      ))}
    </select>
  );
};

export default CategoriesSelect;
