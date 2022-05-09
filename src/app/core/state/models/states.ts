import { IFile } from '../../models/file';
import { IType } from '../../models/type';
import { User } from '../../models/user';

export interface TypesState {
  types: IType[];
  loading: boolean;
  failed: boolean;
}

export interface FilesState {
  files: IFile[];
  loading: boolean;
  failed: boolean;
}

export interface UsersState {
  users: User[];
  loading: boolean;
  failed: boolean;
}
