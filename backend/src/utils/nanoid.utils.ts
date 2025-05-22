import { nanoid } from 'nanoid';

export const generateNanoId = ({ length }: { length: number }): string => {
  return nanoid(length);
};
