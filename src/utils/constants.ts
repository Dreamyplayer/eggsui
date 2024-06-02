export const tranferHead = [
  'NO',
  'EGG NUMBER',
  'STATUS',
  'SPECIES',
  'TRANSFERED FROM',
  'DATE',
  'RECEIVING AT',
  'DATE',
  'NURSERY',
];

export const tranferData = [
  [
    '0273 / 24 Fertile',
    'In Progress',
    'Rainbow Lorikeet Trichoglossus Moluccanus',
    'Site Name XYZ',
    '10 Apr 2024',
    'Site Name XYZ',
    '10 Apr 2024',
    'NUR1234',
  ],
  [
    '0273 / 24 Fertile',
    'Completed',
    'Rainbow Lorikeet Trichoglossus Moluccanus',
    'Site Name XYZ',
    '10 Apr 2024',
    'Site Name XYZ',
    '10 Apr 2024',
    'NUR1234',
  ],
  [
    '0273 / 24 Fertile',
    'Cancelled',
    'Rainbow Lorikeet Trichoglossus Moluccanus',
    'Site Name XYZ',
    '10 Apr 2024',
    'Site Name XYZ',
    '10 Apr 2024',
    'NUR1234',
  ],
];

export const spicesHead = [
  'NO',
  'SPECIES',
  'TOTAL EGGS',
  'IN NEST',
  'IN NURSERY',
  'GOOD CONDITION',
  'DISCARDED',
  'TIL DATE',
];
export const spicesData = [['Rainbow Lorikeet Trichoglossus Moluccanus', '2', '5', '24', '55', '41', '10 Apr 2024']];

export const NurseryHead = ['NO', 'Nursery Name', 'Rooms', 'Incubators', 'Eggs', 'Censors', 'Site Name', 'Added By'];
export const NurseryData = [
  ['Nursery name', '2', '40', '20,000', '200', 'Site Name XYZ', 'Jordan steve Created on 10/10/23'],
];

export const EggsListHead = ['NO', 'SPECIES', 'Egg Number', 'Site Name', 'Collected ON', 'Batch NO', 'Collected BY'];

export const EgglistData = [
  [
    'Rainbow Lorikeet Trichoglossus Moluccanus',
    '0273 / 24 intact',
    'Site Name xyz',
    '10 Apr 2024',
    '2024/000123A/3A',
    'Jordan steve Designation',
  ],
  [
    'Rainbow Lorikeet Trichoglossus Moluccanus',
    '0273 / 24 Broken',
    'Site Name xyz',
    '10 Apr 2024',
    '2024/000123A/3A',
    'Jordan steve Designation',
  ],
  [
    'Rainbow Lorikeet Trichoglossus Moluccanus',
    '0273 / 24 Rotten',
    'Site Name xyz',
    '10 Apr 2024',
    '2024/000123A/3A',
    'Jordan steve Designation',
  ],
];

export const EggsIncuabationHead = [
  'NO',
  'EGG NUMBER',
  'Spices',
  'Days In Incubation',
  'Stage',
  'Condition',
  'Current weight',
  'Initial Weight',
  'Initial Size',
];
export const EggsIncuabationData = [
  [
    '0245 / 54 infertile',
    'Rainbow Lorikeet Trichoglossus Moluccanus',
    '2',
    'infertile',
    'Warm',
    '300g | -5%',
    '315g',
    '33.41 mm',
  ],
];

export const Cards = [
  { title: 'Total Eggs', number: 123, color: '#FFF2EE' },
  { title: 'Total Spices', number: 456, color: '#E4F9F8' },
  { title: 'Eggs In Nest', number: 789, color: '#F2FFF8' },
  { title: 'Eggs in Nursery', number: 1012, color: '#E1EFF2' },
  { title: 'Total Incubators', number: 1315, color: '#F2FFF8' },
];

export const tabItems = [
  { label: 'Received - 24', type: 'Received' },
  { label: 'Incubation - 100', type: 'Incubation' },
  { label: 'Hatched - 100', type: 'Hatched' },
  { label: 'Discarded - 12', type: 'Discarded' },
];

export const NavBarItems = {
  'Egg Module': ['Dashboard', 'Nursery', 'Incubator Rooms', 'Incubators', 'Brooders', 'Eggs'],
  Diet: ['Ingredient', 'Recipe', 'Diet', 'Feed Type'],
};
