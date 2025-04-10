import { ObjectValues } from '@/common/types/object-values.type';

export const MagicItemType = {
  WEAPON: 'WEAPON',
  ARMOUR: 'ARMOUR',
  AMULET: 'AMULET',
} as const;

export type MagicItemType = ObjectValues<typeof MagicItemType>;
