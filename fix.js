{
  // run once when loaded
  fix();

  // run every time logs changed
  const logs = document.getElementById("logs");
  const observer = new MutationObserver(fix);
  observer.observe(logs, { subtree: true, childList: true });
}

function fix() {
  const els = document.getElementsByClassName("tile_art second_edition");
  for (let i = 0; i < els.length; i ++) {
    els[i].style['background-size'] = '1600% 1000%';
  }
}

