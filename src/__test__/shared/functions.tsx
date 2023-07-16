import { Provider } from "react-redux";
import store from "../../redux/store";
import { MemoryRouter } from "react-router-dom";

export const isTestingRunning = (): boolean => {
    return process.env.NODE_ENV === "test";
}

export const ReduxProvider = (props: any) => {
    return (
        <Provider store={store}>
            {props.children}
        </Provider>
    )
}

export const MemoryReduxProvider = (props: any) => {
    return (
        <MemoryRouter>
            <Provider store={store}>
                {props.children}
            </Provider>
        </MemoryRouter>
    )
}