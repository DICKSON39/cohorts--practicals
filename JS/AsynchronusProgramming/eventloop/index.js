/**
 * Executes a function after a specified delay.
 *
 * @param {Function} callback - The function to be executed after the delay.
 * @param {number} delay - The delay in milliseconds before executing the callback.
 * 
 * @example
 * // Logs "Hello, World!" after 1 second
 * setTimeout(() => {
 *   console.log('Hello, World!');
 * }, 1000);
 * 
 * // Notes on Event Loop:
 * // 1. The event loop is responsible for executing the code, collecting and processing events, and executing queued sub-tasks.
 * // 2. setTimeout is a way to schedule a function to be executed after a certain amount of time.
 * // 3. The callback function is placed in the event queue and will be executed once the call stack is empty.
 */