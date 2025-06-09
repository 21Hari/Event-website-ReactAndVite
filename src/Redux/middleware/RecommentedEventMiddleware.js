
import EventSlice from "../EventSlice";
import upcomingEventElement from "../UpcomingEventSlice";


const BASE_URL = import.meta.env.VITE_API_BASE
console.log(BASE_URL)
const API_KEY = import.meta.env.VITE_API_CODE

const BASE_URL2 = import.meta.env.VITE_API_BASE2
const API_KEY2 = import.meta.env.VITE_API_CODE2

const action = EventSlice.actions;

const actionEle = upcomingEventElement.actions;

export const fetchRecommentMiddleware = async (dispatch) => {
    try {
        dispatch(action.userLoading())
        const resp = await fetch(`${BASE_URL}?code=${API_KEY}&type=reco`);

        const user = await resp.json();
        //console.log(user)

        dispatch(action.recommentedData(user));


    } catch (err) {
        dispatch(action.userError())
    }
}
export const fetchUpcomingMiddleware = async (dispatch) => {
    console.log("fetchUpcomingMiddleware is starting")
    try {
        dispatch(actionEle.userLoading())
        const resp = await fetch(`${BASE_URL2}?code=${API_KEY2}&page=1&type=upcoming`)
        const data = await resp.json()
        //console.log(data)
        dispatch(actionEle.upcomingEventData(data))
        console.log("Data fetched Successfully") //checking middleware working
    } catch (err) {
        dispatch(actionEle.userError())
    }

}