import { CognitoUserPool } from "amazon-cognito-identity-js";

const pooldata = {
  UserPoolId: "",
  ClientId: "",
};
export default new CognitoUserPool(pooldata)
