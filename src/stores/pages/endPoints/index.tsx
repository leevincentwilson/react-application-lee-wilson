import axios, { AxiosError } from 'axios';
import { getBearerTokenFromSessionStorage } from '../../../global/auth/helpers';

export type pagesReturnType = {
  id: number;
  content: {
    rendered: string;
  };
  title: {
    rendered: string;
  };
  slug: string;
};
type responseType = {
  data: pagesReturnType[];
};
export type pageDataType = {
  id: number;
  title: string;
  content: string;
  slug: string;
};
export type getPagesReturnType = {
  data?: pageDataType[];
  error?: AxiosError;
};

export const getPages = (): Promise<getPagesReturnType> => {
  return new Promise<getPagesReturnType>((resolve) => {
    axios
      .get('/wp-json/wp/v2/pages', {
        headers: {
          Authorization: `Bearer ${getBearerTokenFromSessionStorage()}`,
        },
      })
      .then((response: responseType) => {
        debugger;
        resolve({
          data: response.data.map((page) => {
            return {
              id: page.id,
              title: page.title.rendered,
              content: page.content.rendered,
              slug: page.slug,
            };
          }),
          error: undefined,
        });
      })
      .catch((error) => {
        resolve({
          data: undefined,
          error,
        });
      });
  });
};
