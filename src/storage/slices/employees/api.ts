import { AxiosResponse } from 'axios';

import Api from 'storage/api';

import {EmployeeDto} from './types';

const employeesApi = {
  async query(): Promise<AxiosResponse<EmployeeDto[]>> {
    return await Api.get(`/employees`);
  },
  async create(data: EmployeeDto): Promise<AxiosResponse<EmployeeDto>> {
    return await Api.post(`/employees`, data);
  }
};

export default employeesApi;
