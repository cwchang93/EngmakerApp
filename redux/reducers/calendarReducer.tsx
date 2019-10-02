import { CalendarDataTypes } from '@constants/actionType';
import { IAction } from '@interfaces/IreducerAction';

export const initialState: any = {
    calendarData: null,
};

const reducer = (state = initialState, action: IAction) => {
    switch (action.type) {
        case CalendarDataTypes.CALENDAR_DATA:
            return {
                ...state,
                ...{ calendarData: action.payload.enrollData },
            };
        default:
            return state;
    }
};

export default reducer;
