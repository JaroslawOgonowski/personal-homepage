import { IconSpinner, LoadingText } from "./styled";

export const LoadingRepo = () => (
        <>
            <LoadingText>Please wait, projects are being loaded...</LoadingText>
            <IconSpinner />
        </>
    )
export default LoadingRepo;