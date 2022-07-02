const api = require('./api');
const PORT = process.env.PORT || 3001;

api.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
