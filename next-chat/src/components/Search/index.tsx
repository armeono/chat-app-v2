type Props = {
  width?: number;
  height?: number;
};

const Search = ({ width, height }: Props) => {
  return (
    <input
      type="text"
      className={`bg-gray-800 rounded-sm  ${
        width ? `w-[${width}px]` : "w-full"
      } ${
        height ? `w-[${height}px]` : "h-10"
      } focus:outline-none text-center text-sm`}
      placeholder="Search (⌘K)"
    />
  );
};

export default Search;
