import { USER_SELECTOR } from "../../constants/selectors";

export function userSelector(company, filterType) {
    return {
        type: USER_SELECTOR,
        company,
        filterType
    };
}
