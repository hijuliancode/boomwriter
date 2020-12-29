const partnersData = {
  title: 'The 2021 Writing Bee Partners',
  partners: [
    { name: 'BoomWriter', imageUrl: 'data:image/png;base64,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' },
    { name: 'Global found for Children', imageUrl: 'data:image/png;base64,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' },
    { name: 'Google for Education Parner', imageUrl: 'data:image/png;base64,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' },
  ]
};

export default partnersData;