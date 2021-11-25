// modules
const express = require('express');
const cors = require('cors');

const port = 80;
const app = express();
app.use(cors());
app.use(express.static(`${__dirname}/../../public`));

app.get('/', (req, res) => {
  console.log('[debug] "/" endpiont reached');
  res.status(200).send('');
});

app.listen(port, () => {
  console.log(`App is running at port ${port}`);
});
