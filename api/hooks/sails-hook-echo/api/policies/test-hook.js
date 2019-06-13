
module.exports = async function(req, res, proceed) {
  console.log('policy test ok');

  return proceed();
};
