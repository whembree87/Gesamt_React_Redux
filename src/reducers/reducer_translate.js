import { TRANSLATE } from "../actions";

export default function(state = [], action) {
    switch (action.type) {
        case TRANSLATE:
            return action.payload.data.tuc;
    }

    return state;
}