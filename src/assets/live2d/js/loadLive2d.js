
var getRandomModelName = function() {
  var models = [{
    name: 'tia',
    width: 280,
    height: 300,
  }, {
    name: 'xiaomai',
    width: 280,
    height: 400,
  }, {
    name: 'chuyin',
    width: 300,
    height: 400,
  }];
  var index = Math.floor(Math.random() * models.length);
  index = Math.min(index, models.length - 1);
  return models[index];
};

window.onload = function () {
  var model = getRandomModelName();
  var live2d = document.getElementById('live2d');
  live2d.setAttribute('width', model.width);
  live2d.setAttribute('height',model.height);
  var url = 'assets/live2d/model/'+ model.name +'/model.json';
  loadlive2d('live2d', url);
};


