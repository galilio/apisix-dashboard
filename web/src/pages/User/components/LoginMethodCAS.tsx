/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import defaultSettings from '../../../../config/defaultSettings';
import { getUrlQuery } from '../../../helpers';
import {CAS_URL} from '../../../constants';
import { formatMessage } from 'umi';
import type { UserModule } from '@/pages/User/typing';

const { SERVE_ENV = 'dev' } = process.env;

const LoginMethodCAS: UserModule.LoginMethod = {
  id: 'cas',
  name: formatMessage({ id: 'component.user.loginMethodCAS' }),
  render: () => {
    var redirect = getUrlQuery('redirect') || '/'
    window.location.href = `${CAS_URL}/cas/login?service=${defaultSettings.serveUrlMap[SERVE_ENV]}/user/cas&redirect=${redirect}`;
    
    return (
      <></>
    );
  },
  getData(): UserModule.LoginData {
    return {};
  },
  checkData: async () => {
    return true;
  },
  submit: async ({ username, password }) => {
    var redirect = getUrlQuery('redirect') || '/'
    window.location.href = `${CAS_URL}/cas/login?service=${defaultSettings.serveUrlMap[SERVE_ENV]}/user/cas&redirect=${redirect}`;
    return {
      status: false,
      message: "",
      data:[],
    }
  },
  logout: () => {
    localStorage.removeItem('token');
    window.location.href = `${CAS_URL}/cas/logout`
  },
};

export default LoginMethodCAS;
