import { IInvite } from './../models/project.model';
import { IBoard } from '@/models/project.model';
import { IProject } from '@/models/project.model';
import http from './http.service';

class ProjectService {
  private _projectUrl = '/api/v1/Project';

  public getAll(): Promise<IProject[]> {
    return http.get(this._projectUrl);
  }

  public getById(projectId: string): Promise<IProject> {
    return http.get(`${this._projectUrl}/${projectId}`);
  }

  public getBoardOfProject(projectId: string): Promise<IBoard[]> {
    return http.get(`${this._projectUrl}/${projectId}/boards`);
  }

  public create(data: IProject): Promise<IProject> {
    return http.post(this._projectUrl, data);
  }

  public invite(data: IInvite): Promise<any> {
    const userIds = {
      userIds: data.userIds,
    };
    return http.post(`${this._projectUrl}/${data.projectId}/invite`, userIds);
  }

  public delete(id: string): Promise<any> {
    return http.delete(`${this._projectUrl}/${id}`);
  }
}

export default new ProjectService();
