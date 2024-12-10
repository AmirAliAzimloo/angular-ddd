import { GetMeCommandHandler } from "./get-me/get-me.query-handler";
import { GetRefreshTokenCommandHandler } from "./get-refresh-token/get-refresh-token.query-handler";


export const AdvisorQueryHandlers = [
  GetMeCommandHandler,
  GetRefreshTokenCommandHandler
];
