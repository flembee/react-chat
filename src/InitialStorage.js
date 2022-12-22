import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { isNil } from 'ramda';

import { getStorage } from './helpers';
import { getUserFromStorage } from './redux/actions';

const user = getStorage.user();

export const InitialStorage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        let isMounted = true;

        if (isMounted) {
            isNil(user)
                ? dispatch(getUserFromStorage({}))
                : dispatch(getUserFromStorage(user));
        }

        return () => {
            isMounted = false;
        };
    }, [dispatch]);

};
