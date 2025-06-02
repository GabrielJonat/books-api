const isTest = process.env.NODE_ENV === 'test';

export default {
  database: 'books',
  username: '',
  password: '',
  params: {
    dialect: 'sqlite',
    storage: isTest ? ':memory:' : 'books.sqlite',
    define: {
      underscored: true
    },
    logging: false // menos ruído nos testes
  }
};
