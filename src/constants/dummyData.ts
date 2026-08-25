export const DUMMY_CATEGORIES = [
  { id: '1', name: 'Meat', icon: 'kebab-dining' },
  { id: '2', name: 'Dairy', icon: 'egg' },
  { id: '3', name: 'Seafood', icon: 'set-meal' },
  { id: '4', name: 'Bakery', icon: 'local-pizza' },
  { id: '5', name: 'Beverages', icon: 'local-drink' },
];

export const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    name: 'Free-Range Chicken Breast',
    description: 'Fresh, boneless',
    price: 715,
    unit: '500g',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBDjwm5UWjRvodSJncHAf1laoqUY7g0nKQ1x8rWK0TA_miNa1dTTvfVGx843H_v45oyGhhMCxWNgAQ8aEitKDWw5lguKkGGRaji4y9pp4fPvkMlVZKaUBDb9xsjmR1Zl0TBmkpJV5Tit97XmmC6H9rem_ZYBvJ_kWCUborGIus4vr78-FqmwdodoDg70RRQhj53RKiHkpYxxxA5NTo1MXWIz_Yz9h5fsKMwl4tUFMnKFMm3HBeSJ-VLzg',
    badge: 'Low Stock',
  },
  {
    id: 'p2',
    name: 'Organic Sliced Carrots',
    description: 'Washed & ready',
    price: 269,
    unit: '300g',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCRzq3xtmgkQfzVu4iXAx8g7jaGI-e-bTq-Qzyrx-UjrcIqubWfxJKUlGEDj4eo7_VCpX6LOc2eF7j_zxOzAnsaf5lqx3cHRq_u9epCVmHN7EWRsJQRO7VsR_0sKhpTS2PzvX6o2zUsuRM9HRjphk0Gm4_WQqfyYtl9hW7pGPA-GqFT3LwE9Ed8P97vTqWEkpVXUQC_JKJ3-6hYF2JOdZ3u0CjTEH5BFNEJlXtXuWTYAW_NIPjLDm_rmQ',
  },
  {
    id: 'p3',
    name: 'Atlantic Salmon Fillet',
    description: 'Sustainably sourced',
    price: 1090,
    unit: '400g',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAN06LpLOSRntU0s6q3ra2uxlwPFUWackwQzSKWhs28qjYa9lhwmdKbLD7yp_OGS9pfharEhGKZK3HoGDFGETmJWZH0hMpl5rx5sjNaMlOlkMMiPX6CnRL4JRj9PnO2oF4D5_dkzDkW9WzjPM_fSztiwdB8bVZWL3_l4bQiD8Z-F0tHC0pHxBesizCmxOR6a48fHoPy1ia6fQAXOAB6MIJMnMpzsZ0JHmvVnSsgipnW2HAS1AKuDoI6XA',
  },
  {
    id: 'p4',
    name: 'Baby Spinach Leaves',
    description: 'Pre-washed',
    price: 379,
    unit: '250g',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJLJFwJQYTIp8TesvTMtYVgrw3D9zKViErWSBDGDjIpIM8xgK5A7ZBMsaVWCw_-Kh_0OyDqu9jcKEyZkuYA2iUh6RxIIoto8IMIDfNdLAXsShDjxcaiNripSlvhDlLl-oJlupSnxMRZtLjKNozHT_nSLPDFa8Xx8lF1tvi94-1y1oQlvf2llCnUWG5-fimsv043cUc9zP4GiXLK2RqLEQImw748Fg_UmJ-lmWGY_YfXH8LS-1PnM2xew',
    badge: 'New',
  },
];

export const DUMMY_CART_ITEMS = [
  {
    id: 'c1',
    product: DUMMY_PRODUCTS[0],
    quantity: 1,
  },
  {
    id: 'c2',
    product: DUMMY_PRODUCTS[1],
    quantity: 2,
  },
];
