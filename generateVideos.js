const weishiFolder = './src/assets/weishi/';
const gifFolder = './src/assets/gif/';
const thumbFolder = './src/assets/thumb/';
const orgFolder = './src/assets/org/';
const fs = require('fs');
const videoNamesConfig = {};
let videoNames = [];

function getVideoNames(folderName) {
  return new Promise((resolve, reject) => {
    const names = [];
    fs.readdir(folderName, (err, files) => {
      if (err) {
        reject(err);
        return;
      }
      files.forEach(file => {
        names.push(file);
      });
      resolve(names);
    });
  });
}

getVideoNames(weishiFolder)
  .then(names => {
    videoNames = names.map(name => name.slice(0, -4));
    videoNames.forEach(name => {
      videoNamesConfig[name] = {
        video: [name + '.mp4']
      };
    });
    return getVideoNames(gifFolder);
  })
  .then(gifNames => {
    videoNames.forEach(name => {
      videoNamesConfig[name].gif = gifNames.filter(gifName => gifName.includes(name));
    });
    return getVideoNames(thumbFolder);
  })
  .then(thumbNames => {
    videoNames.forEach(name => {
      videoNamesConfig[name].thumb = thumbNames.filter(thumbName => thumbName.includes(name));
    });

    return getVideoNames(orgFolder);
  })
  .then(orgNames => {
    videoNames.forEach(name => {
      videoNamesConfig[name].org = orgNames.filter(orgName => orgName.includes(name));
    });

    const json = JSON.stringify(videoNamesConfig);
    fs.writeFile('./src/assets/videoNames.json', json, 'utf8', () => {});
  });
