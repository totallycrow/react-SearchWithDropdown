export type TSearchData = {
  name: string;
  regularPrice: number;
};

export type TDropdownProps = {
  searchMatches: Array<object>;
  phrase: string;
};

export type TMainProps = {
  searchData: Array<TSearchData>;
};

export type TInputProps = {
  inputValue: string;
  inputHandler: Function;
};

export type THighlightProps = {
  text: string;
  phrase: string;
};

export type TDropdownItemProps = {
  itemData: string;
  phrase: string;
};
