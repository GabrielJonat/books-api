import app from './app.js';

app.listen(app.get('port'), () => {
  console.log(`Books API running on port ${app.get('port')}`);
});
