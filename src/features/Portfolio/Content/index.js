import { ErrorRepo } from "./ErrorRepo";
import { LoadingRepo } from "./LoadingRepo";
import { SuccesRepo } from "./SuccessRepo";

export const Content = ({ state, repositories }) => {
    switch (state) {
        case "initial":
            return null;
        case "loading":
            return <LoadingRepo />;
        case "error":
            return <ErrorRepo />;
        case "success":
            return <SuccesRepo repositories={repositories} />
        default:
            throw new Error(`incorrect state: ${state}`)
    };
};