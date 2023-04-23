import { useContext } from "react";
import { AppContext } from "../App";
import { ChangeProfile } from "../components/ChangeProfile";

export const Profile = () => {
    const { username } = useContext(AppContext);

    return (
        <div>
            This is the Profile of {username}
            <ChangeProfile />
        </div>
    );
};
