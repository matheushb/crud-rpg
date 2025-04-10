import { ObjectValues } from '@/common/types/object-values.type';

export const Class = {
  WARRIOR: 'WARRIOR',
  MAGE: 'MAGE',
  ARCHER: 'ARCHER',
  ROGUE: 'ROGUE',
  BARD: 'BARD',
} as const;

export type Class = ObjectValues<typeof Class>;
