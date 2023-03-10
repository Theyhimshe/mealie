import { BaseCRUDAPI } from "../_base";
import { GroupBase, GroupInDB } from "~/types/api-types/user";
import { GroupAdminUpdate } from "~/types/api-types/group";
const prefix = "/api";

const routes = {
  adminUsers: `${prefix}/admin/groups`,
  adminUsersId: (id: string) => `${prefix}/admin/groups/${id}`,
};

export class AdminGroupsApi extends BaseCRUDAPI<GroupBase, GroupInDB, GroupAdminUpdate> {
  baseRoute: string = routes.adminUsers;
  itemRoute = routes.adminUsersId;

  async updateOne(id: string, payload: GroupAdminUpdate) {
    // TODO: This should probably be a patch request, which isn't offered by the API currently
    return await this.requests.put<GroupInDB, GroupAdminUpdate>(this.itemRoute(id), payload);
  }
}
