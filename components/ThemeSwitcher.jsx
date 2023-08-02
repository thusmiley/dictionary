const ThemeSwitcher = (props) => {
  return (
    <label className="relative w-10 h-5">
      <input
        type="checkbox"
        className="peer opacity-0 w-0 h-0"
        checked={props.checked}
        onChange={props.toggle}
      />
      <span className="absolute inset-0 bg-grey-75 dark:bg-purple cursor-pointer rounded-full before:absolute before:content-[''] before:h-[14px] before:w-[14px] before:left-[3px] before:bottom-[3px] before:bg-white before:rounded-full peer-checked:bg-purple peer-checked:before:translate-x-5 before:transition-all"></span>
    </label>
  );
};

export default ThemeSwitcher;
