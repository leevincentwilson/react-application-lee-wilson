import axios, { AxiosError } from 'axios';
import { getBearerTokenFromSessionStorage } from '../../../global/auth/helpers';
import {
  wordPressApiReturnType,
  wordPressDataType,
} from '../../../types/apiTypes';

type responseType = {
  data: wordPressApiReturnType[];
};
export type getPagesReturnType = {
  data?: wordPressDataType[];
  error?: AxiosError;
};

export const getBlog = (): Promise<getPagesReturnType> => {
  return new Promise<getPagesReturnType>((resolve) => {
    axios
      .get('/wp-json/wp/v2/posts', {
        headers: {
          Authorization: `Bearer ${getBearerTokenFromSessionStorage()}`,
        },
      })
      .then((response: responseType) => {
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
