type CategoriesProps = {
  category: string;
  handleCategoryChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
export const Categories = ({category, handleCategoryChange}: CategoriesProps) => {
  return (
    <label className="flex gap-2">
      <span className="font-bold">Category</span>
      <br />
      <label>
        <input
          type="radio"
          name="category"
          value="Food"
          checked={category === "Food"}
          onChange={handleCategoryChange}
          className="mx-2"
          data-testid="category"
        />
        Food
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="category"
          value="Transportation"
          checked={category === "Transportation"}
          onChange={handleCategoryChange}
          className="mx-2"
        />
        Transportation
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="category"
          value="Entertainment"
          checked={category === "Entertainment"}
          onChange={handleCategoryChange}
          className="mx-2"
        />
        Entertainment
      </label>
    </label>
  );
};
