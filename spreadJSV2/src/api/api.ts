import axios, { AxiosInstance } from 'axios';

interface ApiConfig {
  baseURL: string;
  headers?: Record<string, string>;
}

export class Api {
  private readonly axiosInstance: AxiosInstance;

  constructor(config: ApiConfig) {
    this.axiosInstance = axios.create(config);
  }

  async getAll(): Promise<string[]> {
    const response = await this.axiosInstance.get<string[]>('/files');
    return response.data;
  }

  async downloadFile(filename: string): Promise<Blob> {
    const response = await this.axiosInstance.get<Blob>(`/files/${filename}`, {
      responseType: 'blob',
    });
    return response.data;
  }

  async saveFile(filename: string, data: Blob): Promise<void> {
    const formData = new FormData();
    formData.append('file', data, filename);
    await this.axiosInstance.post('/files', formData);
  }
}
