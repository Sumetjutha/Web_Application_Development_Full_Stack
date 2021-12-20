// This is callback.

function log() {
  console.log(1);
}

function veryLongTime(finish) {
  setTimeout(function () {
    log();
    finish();
  }, 1000);
}

function finish() {
  console.log(2);
}

veryLongTime(finish);
