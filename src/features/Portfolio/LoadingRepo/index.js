
import { Container, IconSpinner, LoadingText } from "./styled";

export const LoadingRepo = () => {
    return (
    <Container>
        <LoadingText>Please wait, projects are being loaded...</LoadingText>
        <IconSpinner />
    </Container>
)
};
export default LoadingRepo;