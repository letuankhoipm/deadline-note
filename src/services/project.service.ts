import { IBoard } from '@/models/project.model';
import { IProject } from '@/models/project.model';
import http from "./http.service";

class ProjectService {
    private _projectUrl = "/api/v1/Project";

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
}

export default new ProjectService();