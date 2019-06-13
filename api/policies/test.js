module.exports = async function(req, res, proceed) {
  console.log("App policy test ok");

  return proceed();
};
