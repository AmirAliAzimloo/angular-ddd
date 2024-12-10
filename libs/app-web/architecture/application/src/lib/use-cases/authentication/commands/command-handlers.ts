import { LoginOTPCommandHandler } from "./login/login-otp.command-handler";
import { LogoutCommandHandler } from "./logout/logout.command-handler";
import { RemoveAuthTokenCommandHandler } from "./remove-auth-token/remove-auth-token.command-handler";
import { VerifyOTPCommandHandler } from "./verify/verify-otp.command-handler";

export const AuthenticationCommandHandlers = [
    LoginOTPCommandHandler,
    LogoutCommandHandler,
    VerifyOTPCommandHandler,
    RemoveAuthTokenCommandHandler
];