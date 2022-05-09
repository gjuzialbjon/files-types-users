import { User } from "./user";

export interface IFile {
  creationDateTime: Date;
  status: string;
  modifiedBy: number;
  type: string;
  uri: string;
  version: number;
  id: string;
  fileId: string;
  scheduled: boolean;
  title: string;
  createdBy: number;
  modifiedDateTime: Date;
  live: boolean;
  popularity: number;
  userCreatedBy?: User;
  userModifiedBy?: User
}
