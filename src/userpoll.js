import { CognitoUserPool } from "amazon-cognito-identity-js";

const pooldata = {
  UserPoolId: "ap-south-1_Ds2nGKAoa",
  ClientId: "6mpj79so0l2vmmjga88j6bs5ce",
};
export default new CognitoUserPool(pooldata)