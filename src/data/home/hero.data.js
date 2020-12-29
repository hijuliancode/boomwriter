const heroData = {
  logoUrl: 'data:image/png;base64,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',
  image: 'https://boomwriter.com/static/media/heroPng.08e48337.png',
  title: 'The best writing tools for teachers',
  description: 'Inspire your students to write with a purpose in all subject areas.',
  button: {
    type: 'button', // Button or Link
    text: 'Start your 30-day free trial',
    style: 'primary',
    linkUrl: ''
  },
  items: [
    {
      icon: 'pencil',
      imageUrl: 'https://boomwriter.com/static/media/writers.0c6cb222.svg',
      text: '+ 365k',
      description: 'Writers',
    },
    {
      icon: 'book',
      imageUrl: 'https://boomwriter.com/static/media/words.63c6ef6e.svg',
      text: '+ 89m',
      description: 'Words written',
    },
    {
      icon: 'world-location',
      imageUrl: 'https://boomwriter.com/static/media/countries.746d4fda.svg',
      text: '+150',
      description: 'Countries',
    }
  ]
};

export default heroData;