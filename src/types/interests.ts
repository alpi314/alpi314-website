import { ImageKey } from '@/utils/images';

export interface Interest {
  type: string;
  title: string;
  description: string;
  photo: ImageKey;
  href?: string;
}

export type Interests = Interest[]; 