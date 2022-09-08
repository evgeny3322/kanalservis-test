import React, {useEffect} from 'react';
import {useAppDispatch} from "../../../store/store";
import {fetchPostsAction} from "../../../store/reducers/post-reducer";
import {fetchUsersAction} from "../../../store/reducers/user-reducer";

const HomePage = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchUsersAction());
        dispatch(fetchPostsAction());
        // eslint-disable-next-line
    }, []);

    return (
        <div>
            HomePage
        </div>
    );
};

export default HomePage;