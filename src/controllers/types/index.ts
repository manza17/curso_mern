/**
 * Basic JSON response for controllers Hello
 */
export type BasicResponse = {
    message: string;
  };
  /**
   * Basic JSON response for controllers Goodbye
   */
  export type BasicResponseGoodbye = {
    message: string;
    Date: string
  };
  
  /**
   * Basic JSON response for controllers
   */
  export type ErrorResponse = {
    error: string;
    message: string;
  };