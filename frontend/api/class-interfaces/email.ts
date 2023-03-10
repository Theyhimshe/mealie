import { BaseAPI } from "../_base";
import { EmailInitationResponse, EmailInvitation } from "~/types/api-types/group";
import { ForgotPassword } from "~/types/api-types/user";
import { EmailTest } from "~/types/api-types/admin";

const routes = {
  base: "/api/admin/email",
  forgotPassword: "/api/users/forgot-password",

  invitation: "/api/groups/invitations/email",
};

export class EmailAPI extends BaseAPI {
  test(payload: EmailTest) {
    return this.requests.post<EmailInitationResponse>(routes.base, payload);
  }

  sendInvitation(payload: EmailInvitation) {
    return this.requests.post<EmailInitationResponse>(routes.invitation, payload);
  }

  sendForgotPassword(payload: ForgotPassword) {
    return this.requests.post<EmailInitationResponse>(routes.forgotPassword, payload);
  }
}
