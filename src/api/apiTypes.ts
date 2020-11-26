export type wordPressApiReturnType = {
  id: number;
  content: {
    rendered: string;
  };
  title: {
    rendered: string;
  };
  slug: string;
};

export type wordPressDataType = {
  id: number;
  title: string;
  content: string;
  slug: string;
};
