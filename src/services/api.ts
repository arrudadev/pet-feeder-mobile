import axios from 'axios';

import { getEnvVars } from '../../environment';

const { apiUrl } = getEnvVars();

export const api = axios.create({
  baseURL: apiUrl,
});
