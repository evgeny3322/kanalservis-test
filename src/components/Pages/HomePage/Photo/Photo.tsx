import React, {useEffect} from 'react';
import {useWindowSize} from "../../../../hooks/useWindowSize";
import {RootState, useAppDispatch, useAppSelector} from "../../../../store/store";
import {fetchPhotosAction} from "../../../../store/reducers/photo-reducer";
import Img from "./ImgComponent/ImgComponent";


type Props = {
    id: number
}

const Photo: React.FC<Props> = ({id}) => {

    const dispatch = useAppDispatch();
    const windowSize = useWindowSize();
    const getPhotos = (state: RootState) => state.photos.photos;
    const photos = useAppSelector(getPhotos);

    useEffect(() => {
        dispatch(fetchPhotosAction(id));
        // eslint-disable-next-line
    }, []);


    return (
        <>
            {photos.map((item) => {
                if (item.id === id && windowSize.width > 350) {
                    return <Img src={item.thumbnailUrl} key={item.id}/>;
                }
                return null;
            })}
        </>
    );
};

export default Photo;