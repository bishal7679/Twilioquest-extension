// This is an example of how you might use objective validation helpers
// in your own code. You don't have to, but you'll often want to!
function installedVersion(testString = '') {
  return testString.toLowerCase() === 'git --version';
}
function versioncontrol(testString = '') {
  return testString.toLowerCase() === 'true';
}
function gitinit(testString = '') {
  return testString.toLowerCase() === 'git init';
}
function gitstatus(testString = '') {
  return testString.toLowerCase() === 'git status';
}
function autoadd(testString = '') {
  return testString.toLowerCase() === 'false';
}
function gitcommit(testString = '') {
  return testString.toLowerCase() === 'git commit';
}
function gitcommitM(testString = '') {
  return testString.toLowerCase() === 'git commit -m "new message"';
}
function branch(testString = '') {
  return testString.toLowerCase() === 'git branch branch-1';
}
module.exports = {
  installedVersion,
  versioncontrol,
  gitinit,
  gitstatus,
  autoadd,
  gitcommit,
  gitcommitM,
  branch
};
