import Cache from "storage/cache";
import {StorageConstantsEnum} from "storage/cache/types";
import Api from "storage/api";
import {AxiosResponse} from "axios";
import {UserDto} from './types';

const userApi = {
  async get(): Promise<Partial<UserDto | null>> {
    return await Cache.getItem(StorageConstantsEnum.CurrentUser);
  },
  async remove(): Promise<Partial<UserDto | null>> {
    await Cache.removeItem(StorageConstantsEnum.CurrentUser);
    return await Cache.getItem(StorageConstantsEnum.CurrentUser);
  },
  async save(data: Partial<UserDto | null>): Promise<Partial<UserDto | null>> {
    const userData = await Cache.getItem<Partial<UserDto | null>>(StorageConstantsEnum.CurrentUser) || {};
    await Cache.setItem(StorageConstantsEnum.CurrentUser, {...data, ...userData});
    return await Cache.getItem(StorageConstantsEnum.CurrentUser);
  },
  async update(data: UserDto): Promise<AxiosResponse<UserDto>> {
    const {id, ...user} = data;
    return await Api.put(`/users/${id}`, user);
  }
};

export default userApi;
