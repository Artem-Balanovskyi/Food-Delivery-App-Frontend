import {ICoordinates} from "../Map";

const defaultCenter: ICoordinates = {
    lat: 46.482,
    lng: 30.723
}

export const getBrowserLocation = () => {
    return new Promise<ICoordinates>((resolve, reject) => {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(
                (pos) => {
                    const {latitude: lat, longitude: lng} = pos.coords
                    resolve({lat, lng});
                },
                () => {
                    reject(defaultCenter)
                }
            )
        } else {
            reject(defaultCenter)
        }
    })
}
