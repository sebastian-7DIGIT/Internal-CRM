function init() {}

/**
 * funciton which will send an occured error to the defined output
 *
 * @param {error} error represents the error which has to be send
 */
function log(error) {
  console.error(error);
}

export { init, log };
