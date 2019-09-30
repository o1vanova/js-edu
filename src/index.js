/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
    focus = 'family', 
    knowsProgramming = true,
    config = {family: 4}
    ) {    
      let hoursInWeek = config[focus];
      let result = hoursInWeek;
      let total = knowsProgramming ? 800 : 1300;

      while(result < total) {
        result += hoursInWeek;
      }
      return result/hoursInWeek;
  };
  