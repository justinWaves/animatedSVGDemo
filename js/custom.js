alert("woah");

var videoSource = new Array();
videoSource[0] = 'video/crazylove.mp4';
videoSource[1] = 'video/itGirl.mp4';

var videoCount = videoSource.length;

document.getElementById("myVideo").setAttribute("src", videoSource[0]);

function videoPlay(videoNum) {
  document.getElementById("myVideo").setAttribute("src", videoSource[videoNum]);
  document.getElementById("myVideo").load();
  document.getElementById("myVideo").play();
};

document.getElementById('myVideo').addEventListener('ended', myHandler, false);

function myHandler() {
  i++;
  if (i == (videoCount - 1)) {
    i = 0;
    videoPlay(i);
  } else {
    videoPlay(i);
  }

};