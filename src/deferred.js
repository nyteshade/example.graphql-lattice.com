/** @namespace DeferredEnv */
// @flow

/**
 * Constant `Symbol` used to reference the `Promise` backing an instance 
 *
 * @memberof DeferredEnv
 * @type {Symbol}
 * @const
 */
const kPROMISE = Symbol()

/**
 * Constant `Symbol` used to reference the `resolve` function for an instance 
 *
 * @memberof DeferredEnv
 * @type {Symbol}
 * @const
 */
const kRESOLVE = Symbol()

/**
 * Constant `Symbol` used to reference the `reject` function for an instance 
 *
 * @memberof DeferredEnv
 * @type {Symbol}
 * @const
 */
const kREJECT = Symbol()

/**
 * Obligatory classification of deferred, or inside out Promise. 
 * 
 * @class Deferred
 */
export class Deferred {  
  /**
   * Creates a new inverted `Promise` or `Deferred`. Any parameter supplied 
   * to the constructor is used to auto resolve the promise within upon 
   * creation.
   *
   * @memberof Deferred
   * @method constructor
   * @constructor
   * 
   * @param {mixed} resolveWith any value used to auto-resolve the promise 
   * @param {Number} rejectAfter any positive finite value in milliseconds
   * after which time the `Promise` should auto-reject. 
   * @param {mixed} rejectWith if a timed rejection is specified, reject with  
   * this value rather than a deault timeout Error. 
   */
  constructor(resolveWith: ?mixed, rejectAfter: ?number, rejectWith: ?mixed) {
    this[kPROMISE] = new Promise((resolve, reject) => {
      this[kRESOLVE] = resolve;
      this[kREJECT] = reject;
    })
    
    if (resolveWith) {
      this.resolve(resolveWith);
    }
    
    if (
      typeof rejectAfter !== 'undefined' 
      && isFinite(rejectAfter) 
      && rejectAfter >= 0
    ) {
      setTimeout(() => {
        if (rejectWith) {
          this.reject(rejectWith)
        }
        else {
          this.reject(new Error('Deferred timed out; rejecting'));
        }
      }, rejectAfter)
    }
  }
  
  /**
   * Retrieves the `Promise` that backs this deferred.
   *
   * @memberof Deferred
   * @method promise
   * @instance
   * 
   * @return {Promise} the promise that this Deferred is built around 
   */
  get promise() { return this[kPROMISE] }
  
  /**
   * Retrieves the `resolve()` function linked to the backing promise
   *
   * @memberof Deferred
   * @method resolve
   * @instance
   * 
   * @return {Function} the `resolve` function supplied when the promise was 
   * created 
   */
  get resolve() { return this[kRESOLVE] }

  /**
   * Retrieves the `reject()` function linked to the backing promise
   *
   * @memberof Deferred
   * @method reject
   * @instance
   * 
   * @return {Function} the `reject` function supplied when the promise was 
   * created 
   */
  get reject() { return this[kREJECT] }
}

export default Deferred;