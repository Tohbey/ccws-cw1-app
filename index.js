'use strict';

const express = require('express');

const images = [
    {
      url: "https://storage.googleapis.com/s2331174-cw1-ccws/1324832.png",
      title: "Adult Satoru Gojo",
      description: "This is older Gojo Version (A Jujutsu Teacher)",
    },
    {
      url: "https://storage.googleapis.com/s2331174-cw1-ccws/1325062.jpeg",
      title: "Younger Satoru Gojo",
      description: "This is younger Gojo Version(A Jujutsu Student )",
    },
    {
      url: "https://storage.googleapis.com/s2331174-cw1-ccws/1325724.png",
      title: "Master Satoru Gojo",
      description: "Gojo Mastering the six eyes",
    }
]

const app = express();

app.get('/', (req, res) => {
  res.status(200).send(`
        <h3>The Second App Engine App Task!</h3>
        <p>Add <b>'/ofafow300'</b> This will view all the 3 images</p>
        <p>Add <b>'/ofafow300/1', '/ofafow300/2', '/ofafow300/3'</b> to view metadata for each image.</p>
  `).end();
});

app.get('/ofafow300/', (req, res) => {
  const imagesHtml = images.map(image => {
    return `<figure>
    <img src="${image.url}" width="360" height="360" title="${image.title}">
    <figcaption>${image.description}</figcaption>
  </figure>`;
  });

  const allImagesHtml = imagesHtml.join('');

  res.status(200).send(`
    <h3>All 3 Images</h3>
    <div style="display:flex; flex-direction: row;">
        ${allImagesHtml}
    </div>
  `).end();
});

app.get('/ofafow300/:imageId', (req, res) => {
  const imageId = req.params.imageId;
  if (imageId >= 1  && imageId <= 3){
    const image = images[imageId - 1];
    res.status(200).send(`
    <figure>
        <img src="${image.url}" width="360" height="360" title="${image.title}">
        <figcaption>${image.description}</figcaption>
    </figure>`).end();
  }else{
    res.status(200).send("Incorrect ImageId, Please use a valid ImageId").end();
  }
});

// Start the server
const PORT = parseInt(process.env.PORT) || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});

module.exports = app;
