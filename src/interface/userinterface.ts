import { UserDataType } from "../types";
export interface UserProps {
      users: UserDataType[];
      setUsers: React.Dispatch<React.SetStateAction<UserDataType[] | undefined>>;
    }