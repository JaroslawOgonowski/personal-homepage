import { HireMeButton } from "../../../../common/PageHeader/styled";
import { ReactComponent as Danger } from "./Danger.svg";
import { Container, ErrorText, ErrorTitle } from "./styled";


export const ErrorRepo = () => {
    return (
        <Container>
            <Danger />
            <ErrorTitle>Ooops! Something went wrong... </ErrorTitle>
            <ErrorText>Sorry, failed to load Github projects.<br/>
             You can check them directly on Github.  
            </ErrorText>
            
            <a href="https://github.com/JaroslawOgonowski"><HireMeButton>Go to github</HireMeButton></a>
        </Container>
    )
};
export default ErrorRepo;