import { apiClient } from "shared/helpers/apiClient";
import type { ProfileType } from "shared/types/profileType";

export const getProfile = async (): Promise<{ data: ProfileType }> => {
  return apiClient<{ data: ProfileType }>({
    method: "GET",
    url: "/profiles",
  });
};
